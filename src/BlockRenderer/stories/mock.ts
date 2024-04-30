export default [
    {
        type: 'markdown',
        data: {
            content: '# markdown block',
        },
        children: [
            {
                type: 'otherBlock',
                data: {
                    name: 'other block',
                },
            },
        ],
    },
];
