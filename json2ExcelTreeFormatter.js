let columns = [];
let cellData = [];
let parentLevel = 1;
let recursiveNode = (node, headerName=false, firstLoop=false) => {
    if(!headerName) headerName = 'Level';
    if(firstLoop) {
        // header of root
        columns.push({
            header: `${headerName} 1`,
            key: `level_1`,
            width: 30
        });
        // data
        cellData.push({
            level_1: {
                data: node.value,
                level: 1
            }
        });
    } else {
        columns.push({
            header: `${headerName} ${node['level']}`,
            key: `level_${node['level']}`,
            width: 30
        });
        let cellDataObj = {};
        cellDataObj[`level_${node['level']}`] = {
            type: node.type,
            data: node.value,
            level: node.level
        };
        cellData.push(cellDataObj);
    }
    if(node.children) {
        parentLevel = node['level'] ? node['level'] : parentLevel;
        for(let child of node.children) {
            child['level'] = parentLevel+1;
            recursiveNode(child, headerName, false);
        }
        if(!firstLoop) --parentLevel;
    } else {
        if(!firstLoop && node['level'] && parentLevel > 1) {
            parentLevel = node['level'] - 1;
        } else {
            parentLevel = 1;
        }
    }
}

let formatTree = (sampleJson, headerName) => {
    recursiveNode(sampleJson, headerName, true);
    return {
        header: columns,
        cellData
    }
}

module.exports = {
    formatTree
};