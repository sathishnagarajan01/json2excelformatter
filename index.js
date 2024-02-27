const exceljs = require('exceljs');
const fs = require('fs');
const path = require('path');
let treeFormatter = require('./treeFormatter');

let sampleJsonNormal = require('./sampleJsonDefault');
let sampleJson = require('./sampleJson');
let sheetName = 'sheet1'

let workbook = new exceljs.Workbook();
let sheet = workbook.addWorksheet(sheetName);

let { header, cellData } = treeFormatter.formatTree(sampleJson);

// Remove Duplicate from header, key should be unique
let jsonObj = header.map(JSON.stringify);
let uniqSet = new Set(jsonObj);
let rmDupl = Array.from(uniqSet).map(JSON.parse);
sheet.columns = rmDupl;
cellData.map((rowData) => sheet.addRow(rowData));
console.log(header);
console.log(cellData);
let loadDataInCell = () => {

}

sheet.eachRow((row, rowNum) => {
    row.eachCell((cell, colNum) => {
        cell.alignment = { wrapText: true }
        if(rowNum > 1) {
            if(cell.value.type == 'link') {
                cell.value = {
                    text: cell.value.name,
                    hyperlink: cell.value.url,
                    tooltip: cell.value.url
                }
                cell.font = {
                    color: { argb: 'EB0D2F' },
                    size: 11,
                    italic: true
                }
            } else {
                cell.value = cell.value.name;
                cell.font = {
                    color: { argb: '000000' },
                    size: 11,
                    bold: true
                }
            }
        }
    });
});

sheet.getRow('1').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'F7F30C'}
}
sheet.getRow('1').font = {
    color: { argb: '00000' },
    size: 14,
    bold: true
}

workbook.creator = 'sathishkumarnagarajan@hotmail.com';
workbook.lastModifiedBy = 'sathishkumarnagarajan@hotmail.com';
workbook.created = new Date();
workbook.xlsx.writeFile('test.xlsx');
