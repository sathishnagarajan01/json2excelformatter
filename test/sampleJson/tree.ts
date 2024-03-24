export const sampleTree = {
    config: {
        dataFormat: 'tree', // custom -> if need to custom style // default -> for normal array of object
        sheetName: 'sheet1',
        creator: 'example@gmail.com',
        lastModifiedBy: 'example@gmail.com',
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
        },
        headerName: 'LEVEL'
    },
    data: {
        type: 'text',
        value: {
            text: 'Root',
            style: {},
        },
        children: [
            {
                type: 'text',
                value: {
                    text: 'Parent 1',
                    style: {},
                },
                children: [
                    {
                        type: 'link',
                        value: {
                            text: 'child 1 of parent 1',
                            hyperLink: 'https://google.com',
                            toolTip: 'https://google.com',
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
                        },
                        children: [
                            {
                                type: 'text',
                                value: {
                                    text: 'child 1.1 of parent 1',
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
                                },
                                children: [
                                    {
                                        type: 'link',
                                        value: {
                                            text: 'child 1.1.1 of parent 1',
                                            hyperLink: 'https://google.com',
                                            toolTip: 'https://google.com',
                                            style: {},
                                        },
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                type: 'text',
                value: {
                    text: 'Parent 2',
                    style: {},
                },
                children: [
                    {
                        type: 'link',
                        value: {
                            text: 'child 1 of parent 2',
                            hyperLink: 'https://google.com',
                            toolTip: 'https://google.com',
                            style: {},
                        },
                        children: []
                    }
                ]
            },
            {
                type: 'text',
                value: {
                    text: 'Parent 3',
                    style: {},
                },
                children: []
            }
        ]
    }
}