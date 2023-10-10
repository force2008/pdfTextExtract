import util from 'util';
import fs from "fs"
import {PdfReader} from "pdfreader"
const readFile = util.promisify(fs.readFile);

const readPDFFile = async function(path){
    let pdfBuffer = await readFile(path);
    try{
        let data = await getPDFContent(pdfBuffer);
        console.log(data)
        return data
    }catch(e){
        console.log(e)
        return null;
    }
}

const getPDFContent = function(pdfBuffer){
   return new Promise((resolve,reject)=>{
        try{
            new PdfReader().parseBuffer(pdfBuffer, (err, item) => {
                if (err) reject( err);
                else if (!item) reject("end of buffer");
                else if (item.text) {
                    resolve(item);
                }
        });
        }catch(err) {
            console.log(err)
            reject(err);
          }
   })
}

export{
    readPDFFile
}