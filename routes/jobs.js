const express = require('express');
const router = express.Router();

//Importing jobs controller methods
const { getJobs, 
    newJob } = require('../controller/jobsController');

router.route('/jobs').get(getJobs);


router.route('/job/new').post(newJob);
console.log("newJob at the jobs.js!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", newJob);

module.exports = router;