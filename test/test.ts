
import { json2excelformat } from '../src/index';
import fs from 'fs';

// import { sampleTree } from './sampleJson/tree';
// import { sampleDefault } from './sampleJson/default';
import { sampleCustom } from './sampleJson/custom';

if (!fs.existsSync('output')){
    fs.mkdirSync('output');
}

let sampleXlsx = json2excelformat.initProcess(sampleCustom.config, sampleCustom.data);
sampleXlsx.then((resp) => {
    resp.xlsx.writeFile('output/test.xlsx');
})
.catch((err) => {
    console.log(err);
});