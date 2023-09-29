var XLSX = require('xlsx')
const fs  = require('fs')
var workbook = XLSX.readFile('Parsed_FE Interviews_Cleaned.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
// console.log(xlData);
const exist = (ele)=>{
    return ["Not Mentioned", "Not mentioned","No Experience", "No prior experience with backend frameworks",
    "None mentioned","Unknown", ""].includes(ele)
}
let parseData = []
for(let project of xlData){
    let pro = {}
    pro["title"]= project["Project.Title"]
    if(project["Other_Information.Availability"]!==undefined)
        pro["availablity"]= project["Other_Information.Availability"]
    else
        pro["availablity"] = null

    if(project["Project.Technologies"]!==undefined)
        pro["technologies"]= project["Project.Technologies"].split(",")
    else
        pro["technologies"]= null


    if(project["Technical_Skillset.Frontend"]!==undefined)
        pro["frontend_skill"]= project["Technical_Skillset.Frontend"].split(",")
    else
        pro["frontend_skill"]= null


    if(project["Technical_Skillset.Backend"]!==undefined)
        pro["backend_skill"]= project["Technical_Skillset.Backend"].split(",")
    else
        pro["backend_skill"]= null


    if(project["Technical_Skillset.Databases"]!==undefined)
        pro["database_skill"]= project["Technical_Skillset.Databases"].split(",")
    else
        pro["database_skill"]=null

    if(project["Technical_Skillset.Infrastructre"]!==undefined)
        pro["infrastructure_skill"]= project["Technical_Skillset.Infrastructre"].split(",")
    else
    pro["infrastructure_skill"]= null

    parseData.push(pro)

}
// console.log(parseData,"=====")
fs.writeFileSync('./parsedJson.json', JSON.stringify(parseData));
console.log("data written")
