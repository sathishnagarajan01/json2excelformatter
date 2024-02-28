const exceljs = require('exceljs');
const fs = require('fs');
const path = require('path');

let treeFormatter = require('./json2ExcelTreeFormatter');

let sampleJsonDefault = require('./sampleJsonDefault');
let sampleJsonCustom = require('./sampleJsonCustom');
let sampleJsonTree = require('./sampleJsonTree');

/**
 * Sheet Information
 */
let sheetName = sampleJsonTree.config.sheetName;
let workbook = new exceljs.Workbook();
let sheet = workbook.addWorksheet(sheetName);

let { header, cellData } = treeFormatter.formatTree(sampleJsonTree.data);

// Remove Duplicate from header, key should be unique
let jsonObj = header.map(JSON.stringify);
let uniqSet = new Set(jsonObj);
let rmDupl = Array.from(uniqSet).map(JSON.parse);
sheet.columns = rmDupl;
cellData.map((rowData) => sheet.addRow(rowData));
// console.log(header);
// console.log(cellData);
let loadDataInCell = () => {

}

sheet.eachRow((row, rowNum) => {
    row.eachCell((cell, colNum) => {
        cell.alignment = { wrapText: true }
        if(rowNum > 1) {
            if(cell.value.data.style) {
                cell.font = cell.value.data.style.font;
                cell.fill = cell.value.data.style.fill;
            }
            if(cell.value.type == 'link') {
                cell.value = {
                    text: cell.value.data.text,
                    hyperlink: cell.value.data.hyperLink,
                    tooltip: cell.value.data.toolTip
                }
            } else {
                cell.value = cell.value.data.text;
            }
        }
    });
});

sheet.getRow('1').fill = sampleJsonTree.config.headerStyle.fill;
sheet.getRow('1').font = sampleJsonTree.config.headerStyle.font;

workbook.creator = 'sathishkumarnagarajan@hotmail.com';
workbook.lastModifiedBy = 'sathishkumarnagarajan@hotmail.com';
workbook.created = new Date();
workbook.xlsx.writeFile('test.xlsx');
