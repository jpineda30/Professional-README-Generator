const inquirer = require("inquirer");
const fs = require("fs");
const licences = require("./licences.json");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'proyect_name',
        message: "What's the name of the proyect?",
        validate: function (answer) {
            if (answer.length < 3) {
                return console.log("\n The name is too short, add a longer name");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'proyect_description',
        message: "What is the proyect about?",
        validate: function (answer) {
            if (answer.length < 40) {
                return console.log("\n Desciption is too short, add a better description");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'proyect_instalation',
        message: "What are the installation instructions?",
        validate: function (answer) {
            if (answer.length < 40) {
                return console.log("\n Text is too short, add a better description for this section");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'proyect_usage',
        message: "What are the uses of the proyect?",
        validate: function (answer) {
            if (answer.length < 40) {
                return console.log("\n Text is too short, add a better description for this section");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'proyect_guidelines',
        message: "What are the contribution guidelines?",
        validate: function (answer) {
            if (answer.length < 40) {
                return console.log("\n Text is too short, add a better description for this section");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'proyect_test',
        message: "What are the test instructions?",
        validate: function (answer) {
            if (answer.length < 40) {
                return console.log("\n Text is too short, add a better description for this section");
            }
            return true;
        }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What license will the proyect use?',
        choices: [
           new inquirer.Separator(' = licences = '),

           {name:"apache-2.0"},
           {name:"gpl-3.0"},
           {name:"mit"},
          
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


// function to initialize program
function init() {

    inquirer.prompt(questions).then((response)=>{

        const key = response.license;
        
        const license = licences.filter(function(lic){
            return lic.key == key; 
        });
        
        
        

        //set text
        const logTxt =
        "# " + response.proyect_name + " "+ 
        "[![License:"+license[0].name +"]("+license[0].badge+")]("+ license[0].html_url+")" +
        "\n" +
        "\n" + "## Menu" +
        "\n" +
        "\n" + "[1-Proyect Description](##Proyect-Description)" + "\n" +
        "\n" + "[2-Proyect Instalation](##Proyect-Instalation)" + "\n" +
        "\n" + "[3-Proyect Usage](##Proyect-Testing)" + "\n" +
        "\n" + "[4-Proyect Usage](##Proyect-Usage)" + "\n" +
        "\n" + "[5-Proyect Guidelines](##Proyect-Guidelines)" + "\n" +
        "\n" + "[6-Proyect License](##Proyect-License)" + "\n" +
        "\n" + "[7-User info](##User-info)" + "\n" +
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
        "\n" + "## Proyect Testing" +
        "\n" +
        "\n" + response.proyect_test + 
        "\n" +
        "\n" + "## Proyect Guidelines" +
        "\n" +
        "\n" + response.proyect_guidelines + 
        "\n" +
        "\n" + "## Proyect Licence" +
        "\n" +
        ////////////////////////////////////////////
        "\n" + license[0].name + "\n" +
        "\n" + license[0].conditions + "\n" +
        "\n" + license[0].permissions + "\n" +
        "\n" + license[0].source_url +
        ///////////////////////////////////////////
        "\n" +
        "\n" + "## User info" +
        "\n" +
        "\n" + '[GitHub User: '+response.gitUser+'](https://github.com/'+response.gitUser+')' + "\n" +
        "\n" + "in case of any doubt or clarification, contact me at:  " + 
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
