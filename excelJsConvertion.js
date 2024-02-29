const exceljs = require('exceljs');

let treeFormatter = require('./json2ExcelTreeFormatter');
let customFormatter = require('./json2ExcelCustomFormatter');
let defaultFormatter = require('./json2ExcelDefaultFormatter');

/**
 * This method help to find the data format and calls respective method, then return formatted data
 * @param {*} dataFormat 
 * @param {*} data 
 * @returns {*} 
 */
let formattingData = (dataFormat, data, headerName) => {
    switch(dataFormat) {
        case 'default':
            return defaultFormatter.formatDefaultData(data);
        case 'custom':
            return customFormatter.formatCustomData(data);
        case 'tree':
            return treeFormatter.formatTree(data, headerName);
        default:
            throw new Error('dataFormat must mention in config');
    }
}

let initProcess = (config, data) => {
    let { sheetName, headerName, headerStyle, dataFormat } = config;
    let workbook = new exceljs.Workbook();
    let sheet = workbook.addWorksheet(sheetName);

    // let { header, cellData } = treeFormatter.formatTree(data);
    let { header, cellData } = formattingData(dataFormat, data, headerName);

    // Remove Duplicate from header, key should be unique
    let jsonObj = header.map(JSON.stringify);
    let uniqSet = new Set(jsonObj);
    let rmDupl = Array.from(uniqSet).map(JSON.parse);
    sheet.columns = rmDupl;
    cellData.map((rowData) => sheet.addRow(rowData));
    // console.log(header);
    // console.log(cellData);

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

    sheet.getRow('1').fill = headerStyle.fill;
    sheet.getRow('1').font = headerStyle.font;

    workbook.creator = 'sathishkumarnagarajan@hotmail.com';
    workbook.lastModifiedBy = 'sathishkumarnagarajan@hotmail.com';
    workbook.created = new Date();
    workbook.xlsx.writeFile('test.xlsx');
}

module.exports = {
    initProcess
}