let excelJsConvertion = require('./excelJsConvertion');

let sampleJsonDefault = require('./sampleJsonDefault');
let sampleJsonCustom = require('./sampleJsonCustom');
let sampleJsonTree = require('./sampleJsonTree');


excelJsConvertion.initProcess(sampleJsonTree.config, sampleJsonTree.data);
