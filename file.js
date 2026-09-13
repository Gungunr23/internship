import fs from 'fs';
/*fs.readFile('file.txt','utf8',(err,data)=>{
    if(err) {
        console.error(err);
        return;
    }
    console.log('Filedata',data);
});
console.log('this will be printed before the file data is read');
*/
const data=fs.readFileSync('file.txt','utf8');
    console.log(data);
    console.log('this will be printed after the file data is read');
no