class CustomFormatter {
    columns: any = [];
    cellData: any = [];
    constructor() {}
    
    startFormat (data: any) {
        let rowNum = 1;
        for(let row of data) {
            let cellDataObj: any = {};
            for(let cell in row) {
                if(rowNum <= 1) {
                    this.columns.push({
                        header: cell.toUpperCase(),
                        key: cell,
                        width: 30
                    });
                }
                cellDataObj[cell] = {
                    type: row[cell].type,
                    data: row[cell].value
                };
            }
            this.cellData.push(cellDataObj);
            rowNum++;
        }
    }

    getFormat() {
        return {
            header: this.columns,
            cellData: this.cellData
        }
    }
}

export const customFormat = new CustomFormatter();