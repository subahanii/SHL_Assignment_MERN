const express = require('express');
const { getAllprojects, createProject } = require('../controllers/projectController');
const router = express.Router()


router.route("/").get( getAllprojects).post(createProject);

module.exports = router