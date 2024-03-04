class TreeFormatter {
    columns: any = [];
    cellData: any = [];
    parentLevel: number = 1;

    recursiveNode(node: any, headerName: string ='', firstLoop: boolean =false) {
        if(!headerName) headerName = 'Level';
        if(firstLoop) {
            // header of root
            this.columns.push({
                header: `${headerName} 1`,
                key: `level_1`,
                width: 30
            });
            // data
            this.cellData.push({
                level_1: {
                    data: node.value,
                    level: 1
                }
            });
        } else {
            this.columns.push({
                header: `${headerName} ${node['level']}`,
                key: `level_${node['level']}`,
                width: 30
            });
            let cellDataObj: any = {};
            cellDataObj[`level_${node['level']}`] = {
                type: node.type,
                data: node.value,
                level: node.level
            };
            this.cellData.push(cellDataObj);
        }
        if(node.children) {
            this.parentLevel = node['level'] ? node['level'] : this.parentLevel;
            for(let child of node.children) {
                child['level'] = this.parentLevel+1;
                this.recursiveNode(child, headerName, false);
            }
            if(!firstLoop) --this.parentLevel;
        } else {
            if(!firstLoop && node['level'] && this.parentLevel > 1) {
                this.parentLevel = node['level'] - 1;
            } else {
                this.parentLevel = 1;
            }
        }
    }

    startFormat (sampleJson: any, headerName?: string) {
        this.recursiveNode(sampleJson, headerName, true);
    }

    getFormat(): any {
        return {
            header: this.columns,
            cellData: this.cellData
        }
    }
}

export const treeFormat = new TreeFormatter();