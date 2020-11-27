const inquirer = require("inquirer");
const fs = require("fs");



//object
var fileContent = {
    
            
    proyect_name:"",
    proyect_description:"",
    proyect_instalation:"",
    proyect_usage:"",
    proyect_guidelines:"",
    proyect_usage:"",
    license:"",
    gitUser:"",
    mainEmail:""
    
    
}
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'proyect_name',
        message: "What's the name of the proyect?",
    },
    {
        type: 'input',
        name: 'proyect_description',
        message: "What is the proyect about?",
    },
    {
        type: 'input',
        name: 'proyect_instalation',
        message: "What are the installation instructions?",
    },
    {
        type: 'input',
        name: 'proyect_usage',
        message: "What are the uses of the proyect?",
    },
    {
        type: 'input',
        name: 'proyect_guidelines',
        message: "What are the contribution guidelines?",
    },
    {
        type: 'input',
        name: 'proyect_usage',
        message: "What are the test instructions?",
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license will the proyect use?',
        choices: [
           new inquirer.Separator(' = licences = '),
           {name:"1"},
           {name:"2"},
           {name:"3"},
           {name:"4"}
        ],
      },
      {
        type: 'input',
        name: 'gitUser',
        message: "What is your github user?",
      },
      {
        type: 'input',
        name: 'mainEmail',
        message: "What is your email?",
     }

];

//description, installation instructions, usage
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then((response)=>{
        
        //set text
        const logTxt =
        "# " + response.proyect_name +
        "\n" +
        "\n" + "## Proyect Description" +
        "\n" +
        "\n" + response.proyect_description +
        "\n" +
        "\n" + "## Proyect Instalation" +
        "\n" +
        "\n" + response.proyect_instalation +
        "\n" +
        "\n" + "## Proyect Usage" +
        "\n" +
        "\n" + response.proyect_usage +
        "\n" +
        "\n" + "## Proyect Guidelines" +
        "\n" +
        "\n" + response.proyect_guidelines + 
        "\n" +
        "\n" + "## Proyect Usage" +
        "\n" +
        "\n" + response.proyect_licence +
        "\n" +
        "\n" + "## Proyect Licence" +
        "\n" +
        "\n" + response.license +
        "\n" +
        "\n" + "## User info" +
        "\n" +
        "\n" + "GitHub User: " +response.gitUser +
        "\n" + "Email: "+ response.mainEmail

        ;
            
        //lib function (file-name, file-content, encoding, function-if-error)
        fs.writeFile("Readme.md", logTxt,"utf-8",  err => {

            if (err){
                throw err;
            
            }else{
                console.log('Saved!');
            } 


          });
          
    });
}

// function call to initialize program
init();
