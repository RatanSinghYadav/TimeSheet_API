const ProjectLog = require('../model/taskSchema.js');
const { Router } = require('express');
const route = Router();


route.post('/addtime', async (req, res) => {
    const { project, date, start_time, end_time, hours, minutes, description, total } = req.body;

    try {

        if (!project || !date || !start_time || !end_time || !hours || !minutes || !description || !total) {
            console.log("Please fill the require field...")
        }

        const newProjectData = new ProjectLog({ project, date, start_time, end_time, hours, minutes, description, total });

        const allData = await newProjectData.save()
        res.status(201).json(allData)
        console.log({ project, date, start_time, end_time, hours, minutes, description, total })

    } catch (error) {
        console.log("Please check the entered time and hours formate...", error)
    }


})

route.get('/getdata', async (req, res) => {
    try {
        const getData = await ProjectLog.find();
        res.status(201).json(getData);
        console.log(getData);
    } catch (error) {
        console.log("Please check the endpoint you have entered...!", error)
    }
})


module.exports = route;   