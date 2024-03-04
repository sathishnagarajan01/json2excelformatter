import { excelJsConvertion } from "./exceljs/excelJsConvertion";

import { sampleTree } from './sampleJson/tree';
import { sampleDefault } from './sampleJson/default';
import { sampleCustom } from './sampleJson/custom';


excelJsConvertion.initProcess(sampleCustom.config, sampleCustom.data);
