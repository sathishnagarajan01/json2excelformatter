export const sampleCustom = {
    config: {
        dataFormat: 'custom', // tree -> if parent child means // default -> for normal array of object
        sheetName: 'sheet1',
        creator: 'nsathishkumarnagarajan@gmail.com',
        lastModifiedBy: 'nsathishkumarnagarajan@gmail.com',
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
    data: [
        {
            id: {
                type: 'text',
                value: {
                    text: '1',
                    style: {},
                },
            },
            name: {
                type: 'text',
                value: {
                    text: 'Sathish',
                    style: {},
                },
            },
            address: {
                type: 'link',
                value: {
                    text: '123street',
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
                    },
                },
            }
        },
        {
            id: {
                type: 'text',
                value: {
                    text: '2',
                    style: {},
                },
            },
            name: {
                type: 'text',
                value: {
                    text: 'Kumar',
                    style: {},
                },
            },
            address: {
                type: 'link',
                value: {
                    text: '123street',
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
                    },
                },
            }
        },
        {
            id: {
                type: 'text',
                value: {
                    text: '3',
                    style: {},
                },
            },
            name: {
                type: 'text',
                value: {
                    text: 'Nagarajan',
                    style: {},
                },
            },
            address: {
                type: 'link',
                value: {
                    text: '123street',
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
                    },
                },
            }
        },
        {
            id: {
                type: 'text',
                value: {
                    text: '4',
                    style: {},
                },
            },
            name: {
                type: 'text',
                value: {
                    text: 'Bhoosan',
                    style: {
                        font: {
                            outline: true
                        }
                    },
                },
            },
            address: {
                type: 'link',
                value: {
                    text: '123street',
                    hyperLink: 'https://google.com',
                    toolTip: 'https://google.com',
                    style: {
                        font: {
                            color: { argb: 'EB0D2F' },
                            size: 11,
                            italic: true,
                            bold: true,
                            underline: true
                        },
                        fill: {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: 'F7F30C'}
                        }
                    },
                },
            }
        }
    ]
}