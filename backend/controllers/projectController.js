
const Project = require("../models/project");
const ApiFeature = require("../utils/API_feature");

//add project detail end-point
exports.createProject = async(req,res, next)=>{
    try{
        // req.body.user = req.user.id;
        console.log("req",req.body)
        const project = await Project.create(req.body);
        res.status(200).json({success:true, project})
    }catch(e){
        res.status(500).json({success:false,message:e.message})

    }


}
// list all project
exports.getAllprojects = async(req, res)=>{
    try {
        const resultPerPage = 5;
        let projectCount = await Project.countDocuments()
        // const all = await Project.find()
        console.log(req.query,"kkkk")
        const feature = new ApiFeature(Project.find(), req.query).search()//.pagination(resultPerPage)
        const projects = await feature.query;
        // projectCount = projects.length()
        // const feature = new ApiFeature(project.find(), req.query).search().filter().pagination(resultPerPage)
        // const projects = await feature.query;
        // res.status(200).json({success:true,projectCount,projects})
        res.status(200).json({success:true,projectCount,projects})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
        
    }
}
