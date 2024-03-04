export const sampleDefault = {
    config: {
        dataFormat: 'default', // tree -> if parent child means // custom -> if need to custom style //
        sheetName: 'sheet1',
        headerStyle: {
            fill: {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'F7F30C'}
            },
            font: {
                color: { argb: '00000' },
                size: 14,
                bold: true
            }
        }
    },
    data: {
        header: [
            { header: 'ID', key: 'id', width: 30 },
            { header: 'Name', key: 'name', width: 30 },
            { header: 'Mobile Number', key: 'mob', width: 30 },
            { header: 'Address', key: 'addr', width: 30 },
            { header: 'Pincode', key: 'zip', width: 30 }
        ],
        rowSets: [
            { id: 1, name: 'Sathish', mob: '123', addr: '123street', zip: '99889'},
            { id: 1, name: 'Kumar', mob: '123', addr: '123street', zip: '99889'},
            { id: 1, name: 'Nagarajan', mob: '123', addr: '123street', zip: '99889'},
            { id: 1, name: 'Bhoosan', mob: '123', addr: '123street', zip: '99889'}
        ]
    }
}