class CustomFormatter {
    columns: any = [];
    cellData: any = [];
    constructor() {}
    
    startFormat (data: any) {

    }

    getFormat() {
        return {
            header: this.columns,
            cellData: this.cellData
        }
    }
}

export const customFormat = new CustomFormatter();