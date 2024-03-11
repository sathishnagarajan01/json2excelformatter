import { style } from "./style";

export interface config {
    dataFormat: string,
    sheetName: string,
    headerStyle: style,
    headerName?: string,
    creator: string,
    lastModifiedBy: string
}