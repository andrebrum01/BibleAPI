const fs = require('fs');


function save(content,name){
    const contentFilePath = `./src/JSON/${name}.json`;
    const contentString = JSON.stringify(JSON.parse(content), null, 4);

    console.log(content);
    try {
        fs.writeFileSync(contentFilePath, contentString);
    } catch (error) {
        console.log("error ao salvar arquivo: "+error);
    }   
    
}

function load(name){
    try {
        const contentFilePath = `./src/JSON/${name}.json`;
        const fileBuffer = fs.readFileSync(contentFilePath,"utf8");
        const contentJSON = JSON.parse(fileBuffer);
        console.log(contentJSON);
        return contentJSON;
    } catch (error) {
        console.log("error ao carregar o arquivo: "+error);
    }
    
}

module.exports ={
    save,
    load
}