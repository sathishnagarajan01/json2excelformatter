module.exports = {
    config: {
        dataFormat: 'default' // tree -> if parent child means
    },
    data: [
        { 
            header: 'ID', 
            key: 'id', 
            type: 'text', 
            value: {
                text: '1',
                hyperLink: null,
                toolTip: null
            },
            style: {
                font: {
                    color: { argb: 'EB0D2F' },
                    size: 11,
                    italic: true,
                    bold: true
                },
                fill: {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'F7F30C'}
                }
            }
        }
    ]
}