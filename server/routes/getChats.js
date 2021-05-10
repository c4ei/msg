const { Router } = require("express");
const router = Router();
const db = require("../config/db");

const moment = require("moment");

router.get("/:token", async (req, res) => {
  // `SELECT messages.from_id, users.firstname, users.lastname, messages.message, messages.sent_date, messages.has_read,
  //  (SELECT COUNT(message) FROM messages WHERE to_id = (SELECT id FROM users WHERE token = "${req.params.token}")
  //  AND has_read = 0) AS count FROM users INNER JOIN messages ON users.id = messages.from_id OR users.id = messages.to_id
  //  WHERE users.token = "${req.params.token}" AND messages.sent_date = (SELECT MAX(sent_date) FROM messages
  //  WHERE from_id = (SELECT id FROM users WHERE token = "${req.params.token}") OR to_id = (SELECT id FROM users
  //  WHERE token = "${req.params.token}"))`

  // `SELECT * FROM messages INNER JOIN users ON users.id = messages.from_id OR users.id = messages.to_id,
  //  (SELECT COUNT(message) AS count FROM messages WHERE to_id = (SELECT id FROM users WHERE token = "${req.params.token}") AND has_read = 0 ) AS count
  //  WHERE ( messages.from_id = (SELECT id FROM users WHERE token = '${req.params.token}')
  //  OR messages.to_id = (SELECT id FROM users WHERE token = '${req.params.token}') ) AND users.token <> '${req.params.token}' GROUP BY token`

  // `SELECT * FROM messages INNER JOIN users ON users.id = messages.from_id OR users.id = messages.to_id,
  // (SELECT SUM(message) AS count FROM messages WHERE to_id = (SELECT id FROM users WHERE token = "${req.params.token}") AND has_read = 0 GROUP BY from_id) AS countt
  //  WHERE messages.to_id = (SELECT id FROM users WHERE token = "${req.params.token}") AND users.token != '${req.params.token}'
  //  GROUP BY users.id `

  // `SELECT * FROM messages WHERE id IN (SELECT id FROM messages
  // WHERE from_id = (SELECT id FROM users WHERE token = '${req.params.token}') OR to_id = (SELECT id FROM users WHERE token = '${req.params.token}') ORDER BY id DESC)`

  // `SELECT messages.*, MAX(message) AS message, users.* FROM messages INNER JOIN users ON users.id = messages.to_id OR users.id = messages.from_id
  // WHERE (messages.to_id = (SELECT id FROM users WHERE token = '${req.params.token}') OR messages.from_id = (SELECT id FROM users WHERE token = '${req.params.token}')) AND users.token != '${req.params.token}'
  // GROUP BY users.id ORDER BY messages.id DESC`

  // `SELECT * FROM messages INNER JOIN users ON users.id = messages.to_id OR users.id = messages.from_id
  // WHERE ( messages.to_id = (SELECT id FROM users WHERE token = '${req.params.token}') OR messages.from_id = (SELECT id FROM users WHERE token = '${req.params.token}') ) AND users.token != '${req.params.token}'
  // GROUP BY users.id ORDER BY messages.id DESC`

  // ==================================================
  // `SELECT
  //  MAX(messages.id) AS id,
  //  MAX(messages.message) AS message,
  //  MAX(messages.from_id) AS from_id,
  //  MAX(messages.to_id) AS to_id,
  //  MAX(messages.sent_date) AS sent_date,
  //  MAX(messages.has_read) AS has_read,

  //  MAX(users.id) AS userid,
  //  MAX(users.email) AS email,
  //  MAX(users.firstname) AS firstname,
  //  MAX(users.lastname) AS lastname,
  //  MAX(users.token) AS token

  //  FROM messages INNER JOIN users ON users.id = messages.to_id OR users.id = messages.from_id
  //  WHERE ( messages.to_id = (SELECT id FROM users WHERE token = '${req.params.token}') OR messages.from_id = (SELECT id FROM users WHERE token = '${req.params.token}') ) AND users.token != '${req.params.token}'
  //  GROUP BY users.id ORDER BY messages.id DESC`
  // ==================================================

  let [chats] = await db.query(
    `SELECT *, messages.id AS id, users.id AS user_id FROM messages INNER JOIN users ON users.id = messages.to_id OR users.id = messages.from_id
    WHERE ( messages.to_id = (SELECT id FROM users WHERE token = '${req.params.token}') OR messages.from_id = (SELECT id FROM users WHERE token = '${req.params.token}') ) AND users.token != '${req.params.token}'
    AND messages.id IN ( SELECT MAX(messages.id) AS maxid FROM messages INNER JOIN users ON users.id = messages.to_id OR users.id = messages.from_id
    WHERE ( messages.to_id = (SELECT id FROM users WHERE token = '${req.params.token}') OR messages.from_id = (SELECT id FROM users WHERE token = '${req.params.token}') ) AND users.token != '${req.params.token}'
    GROUP BY users.id ORDER BY messages.id DESC ) ORDER BY messages.id DESC`
  );

  let [unread_count] = await db.query(
    `SELECT id, from_id, COUNT(message) AS unread_count FROM messages WHERE to_id = (SELECT id FROM users WHERE token = "${req.params.token}") AND has_read = 0 GROUP BY from_id ORDER BY id DESC`
  );

  moment.locale("uk");

  chats.forEach((chat) => {
    // chat.sent_date = moment.unix(chat.sent_date).fromNow();
    chat.sent_date = moment.unix(chat.sent_date).format("HH:mm");

    if (chat.was_online > moment().unix()) {
      chat.online = true;
    } else {
      chat.online = false;
      chat.was_online = moment.unix(chat.was_online).fromNow();
    }

    unread_count.forEach((count) => {
      if (count.from_id === chat.from_id) {
        chat.unread_count = count.unread_count;
      }
    });
  });

  res.json(chats);
});

module.exports = router;
