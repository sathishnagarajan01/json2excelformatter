
import { json2excelformat } from '../src/index';
import fs from 'fs';

import { sampleTree } from './sampleJson/tree';
// import { sampleDefault } from './sampleJson/default';
import { sampleCustom } from './sampleJson/custom';

if (!fs.existsSync('output')){
    fs.mkdirSync('output');
}
/**
 * @param config
 * @param data
 * @returns {*} Promise<workbook>
 */
json2excelformat.initProcess(sampleCustom.config, sampleCustom.data)
.then((resp) => {
    resp.xlsx.writeFile('output/test.xlsx');
})
.catch((err) => {
    console.log(err);
});

json2excelformat.initProcess(sampleTree.config, sampleTree.data)
.then((resp) => {
    resp.xlsx.writeFile('output/testTree.xlsx');
})
.catch((err) => {
    console.log(err);
});