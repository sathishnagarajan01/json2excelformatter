module.exports = {
    name: 'Root',
    type: 'text',
    style: {},
    children: [
        {
            name: 'Parent 1',
            type: 'text',
            style: {},
            children: [
                {
                    name: 'child 1 of parent 1',
                    type: 'link',
                    url: 'https://google.com',
                    style: {},
                    children: [
                        {
                            name: 'child 1.1 of parent 1',
                            type: 'text',
                            style: {},
                            children: [
                                {
                                    name: 'child 1.1.1 of parent 1',
                                    type: 'link',
                                    url: 'https://google.com',
                                    style: {},
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Parent 2',
            type: 'text',
            style: {},
            children: [
                {
                    name: 'child 1 of parent 2',
                    type: 'link',
                    url: 'https://google.com',
                    style: {},
                    children: []
                }
            ]
        },
        {
            name: 'Parent 3',
            type: 'text',
            style: {},
            children: []
        }
    ]
}