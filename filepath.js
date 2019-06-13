const path = require('path')

exports.insertCentresUsingCSV =  (req, res, next) =>{
    console.log('Inside InsertCentresCSV');
    
    const fileName = req.file.originalname
    console.log(`original File Name: ${fileName}`);
    
    var fullPath = __dirname + "/file/" + fileName;
    var pathNormalize = path.normalize(fullPath)
    console.log(`pathNormalize: ${pathNormalize}`)
    
    var appDir = path.dirname(require.main.filename);
    console.log(`App Dir ${appDir}`);

    var pathParse = path.parse(appDir)
    console.log("pathParse "+util.inspect(pathParse, false, null, true /* enable colors */))
    
    

    const absoulatePathOfFile = path.join(appDir,"\\file\\" ,fileName)
    console.log(absoulatePathOfFile);

    
    
    absoulatePathOfFile.forEach(element => {
        console.log("root: "+element.root+" dir: "+element.dir+" base: "+element.base);
        
    });
    console.log(`fullPath: ${fullPath}`);
    const fileExtension = path.extname(fileName)
    if(fileExtension !== ".csv"){
        return res.status(406).json({
            message: 'file extestion should be .CSV',
            status: 0
        });
    }
    
    csv()
    .fromFile(absoulatePathOfFile)
    .then((jsonObj)=>{
        console.log(jsonObj); 
    })

    
    res.status(200).json({
        message: 'file uploaded',
        status: 1
    });
    
}
