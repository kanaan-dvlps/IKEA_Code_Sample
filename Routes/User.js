const router = require('express').Router();
const { SERVER_ERROR } = require('../Helpers/Responses');
const EnsureAuthenticated = require('../Middleware/Verifier');

router.get('/', EnsureAuthenticated, async (req, res) => {
  try {
    const { payload } = req.user;

    res.send({ username: payload });

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    })
  }
});

module.exports = router;