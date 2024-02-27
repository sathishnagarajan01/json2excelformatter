let columns = [];
let cellData = [];
let parentLevel = 1;
let recursiveNode = (node, firstLoop=false) => {
    if(firstLoop) {
        // header of root
        columns.push({
            header: `Level 1 Node`,
            key: `level_1`,
            width: 30
        });
        // data
        cellData.push({
            level_1: `${node.name}`
        });
    } else {
        columns.push({
            header: `Level ${node['level']} Node`,
            key: `level_${node['level']}`,
            width: 30
        });
        let cellDataObj = {};
        cellDataObj[`level_${node['level']}`] = {
            name: node.name,
            type: node.type,
            url: node.url,
            style: node.style,
            level: node.level
        };
        cellData.push(cellDataObj);
    }
    if(node.children) {
        parentLevel = node['level'] ? node['level'] : parentLevel;
        for(let child of node.children) {
            child['level'] = parentLevel+1;
            recursiveNode(child, false);
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

let formatTree = (sampleJson) => {
    recursiveNode(sampleJson, true);
    return {
        header: columns,
        cellData
    }
}

module.exports = {
    formatTree
};