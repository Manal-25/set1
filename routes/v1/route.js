const express = require("express");
const router = express.Router();
const V1Controller = require("../../routes/v1/controller");
const v1Controller = new V1Controller();

router.route("./health").get(v1Controller.health);

//edulab
router.route('/editedulab/:id').put(v1Controller.updateByEdulabData);

module.exports = router;
