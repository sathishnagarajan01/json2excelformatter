<div align="center">
    <h1>Json2ExcelFormatter</h1>
    <p>Convert JSON into XLSX with styles</p>
</div>

<!--[![Contributors][contributors-badge]][contributors-url]
[![Forks][forks-badge]][forks-url]
[![Stars][stars-badge]][stars-url]
[![Issues][issues-badge]][issues-url]-->

[![LinkedIn][linkedin-badge]][linkedin-url]
[![License][license-badge]][license-url]
[![Donate][donate-badge]][donate-url]
[![Node.Js][nodejs-badge]][nodejs-url]
[![exceljs][exceljs-badge]][exceljs-url]

## Installation
```sh
npm install json2excelformatter
```

## Example
```ts
// for typescript
import { json2excelformat } from 'json2excelformatter';
// for javascript
const { json2excelformat } = require('json2excelformatter');

import { sampleJson } from './sampleJson';

/**
 * @param config
 * @param data
 * @returns {*} Promise<workbook>
*/
json2excelformat.initProcess(sampleJson.config, sampleJson.data)
.then((resp) => {
    resp.xlsx.writeFile('output/test.xlsx');
})
.catch((err) => {
    console.log(err);
});
```

### Output
![excel-outputTree]

## Features
 - Cutomizable Excel Generation
 - Adding stylesheet for each cell
 - Creating XLSX file in own path using workbook promise object
 - Adding hyperlink and Tooltip
 - Generate excel in Parent Child Tree format

## Input Params
 - config
 - data
```ts
    json2excelformat.initProcess(config, data)
```

### config
 - **config** param contains the basic structure of input data
 - **config.dataFormat** must be either `default` | `custom` | `tree`
 - `default` dataFormat is used to generate the plain excel format without any styles
 - `custom` dataFormat used to generate excel with styles
- `tree` dataFormat mainly used to create the Parent Child format include styles
```ts
    config: {
        dataFormat: 'default', // tree -> if parent child means // default -> for normal array of object
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
        }
    },
```

### data
 - dataFormat: `default` | `custom` | `tree`
 - For custom and tree dataFormat every value of cell object should contains type:  `text` | `link`
 - `text` type:text mentioned for the value of text is in string format
 ```ts
    name: {
        type: 'text',
        value: {
            text: 'Kumar'
        },
    }
 ```
 - `link` type:link mentioned for the value of text as string, this type expects **hyperLink** and **toolTip**
 ```ts
    address: {
        type: 'link',
        value: {
            text: '123street',
            hyperLink: 'https://google.com',
            toolTip: 'https://google.com',
        }
    }
```

`default` data example
```ts
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
```

`custom` data example
```ts
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
        }
    ]
```

`tree` data example
```ts
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
```

### styles
 - Cells, Rows and Columns each support a rich set of styles and formats that affect how the cells are displayed.
 - By the help of [exceljs][exceljs-url], json2excelformatter generates the excel and styles.
- Styles are set by assigning the following properties
> - font
> - fill

#### Fonts
```ts
    style: {
        font: {
            color: { argb: 'EB0D2F' },
            size: 11,
            italic: true,
            bold: true,
            underline: true,
            strike: true,
            outline: true
        }
    }
```

| Font Property | Description       | Example Value(s) |
| ------------- | ----------------- | ---------------- |
| size          | Font size. An integer value. | 9, 10, 12, 16, etc. |
| color         | Colour description, an object containing an ARGB value. | { argb: 'FFFF0000'} |
| bold          | Font **weight** | true, false |
| italic        | Font *slope* | true, false |
| underline     | Font <u>underline</u> style | true, false, 'none', 'single', 'double', 'singleAccounting', 'doubleAccounting' |
| strike        | Font <strike>strikethrough</strike> | true, false |
| outline       | Font outline | true, false |

#### Fills
 - In this library supports only type: `pattern`
```ts
    style: {
        fill: {
            type: 'pattern',
            pattern: 'darkTrellis',
            fgColor: { argb: 'F7F30C' },
            bgColor: { argb: 'FF0000FF' }
        }
    }
 ```

| Property | Required | Description |
| -------- | -------- | ----------- |
| type     | Y        | Value: 'pattern'<br/>Specifies this fill uses patterns |
| pattern  | Y        | Specifies type of pattern (see `valid-pattern-types` below) |
| fgColor  | N        | Specifies the pattern foreground color. Default is black. |
| bgColor  | N        | Specifies the pattern background color. Default is white. |

Note: If you want to fill a cell using the `solid` pattern, then you don't need to specify `bgColor`.

**Valid Pattern Types**

* none
* solid
* darkGray
* mediumGray
* lightGray
* gray125
* gray0625
* darkHorizontal
* darkVertical
* darkDown
* darkUp
* darkGrid
* darkTrellis
* lightHorizontal
* lightVertical
* lightDown
* lightUp
* lightGrid
* lightTrellis

**Note: For further more customization please refer the [exceljs][exceljs-url] documentation**

## Poople
 - The original author of json2excelformatter is [Sathish Nagarajan][linkedin-url]

## License
[MIT][license-url]



<!--
## example of npm publish
 - https://www.youtube.com/watch?v=xnfdm-s8adI
 - https://www.youtube.com/watch?v=Tmnv3g3cy-w

## example of readme
 - https://github.com/amitmerchant1990/electron-markdownify#readme
 - https://github.com/athityakumar/colorls#readme
 - https://github.com/codesandbox/codesandbox-client#readme
 - https://github.com/othneildrew/Best-README-Template#readme
 -->


 <!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->



[product-screenshot]: images/screenshot.png

[excel-outputTree]: images/excelOutputTree.png
[excel-outputCustom]: images/excelOutputCustom.png

[linkedin-badge]: https://img.shields.io/badge/-LinkedIn-fff.svg?style=flat-square&logo=linkedin&color=0a66c2
[linkedin-url]: https://www.linkedin.com/in/sathishnagaraja/
[donate-badge]: https://img.shields.io/badge/%24-DONATE-ff69b4.svg?style=flat-square
[donate-url]: https://test.com
[license-badge]: https://img.shields.io/badge/License-MIT-red?style=flat-square
[license-url]: https://github.com/sathishnagarajan01/json2excelformatter/blob/main/LICENSE.txt
[nodejs-badge]: https://img.shields.io/badge/-Node.js-grey?style=flat-square&logo=node.js
[nodejs-url]: https://nodejs.org/en
[contributors-badge]: https://img.shields.io/badge/Contributors-0-green?style=flat-square
[contributors-url]: https://github.com/sathishnagarajan01/json2excelformatter/graphs/contributors
[forks-badge]: https://img.shields.io/badge/Forks-1-green?style=flat-square
[forks-url]: https://github.com/sathishnagarajan01/json2excelformatter/forks
[stars-badge]: https://img.shields.io/badge/Stars-0-green?style=flat-square
[stars-url]: https://github.com/sathishnagarajan01/json2excelformatter
[issues-badge]: https://img.shields.io/badge/Issues-0-green?style=flat-square
[issues-url]: https://github.com/sathishnagarajan01/json2excelformatter/issues
[exceljs-badge]: https://img.shields.io/badge/npm-exceljs-red?style=flat-square&logo=npm
[exceljs-url]: https://www.npmjs.com/package/exceljs