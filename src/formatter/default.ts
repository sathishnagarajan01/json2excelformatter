class DefaultFormatter {
    columns: any = [];
    cellData: any = [];
    constructor() {}
    
    startFormat (data: any) {
        this.columns = data.header;
        this.cellData = data.rowSets;
    }

    getFormat() {
        return {
            header: this.columns,
            cellData: this.cellData
        }
    }
}

export const defaultFormat = new DefaultFormatter();