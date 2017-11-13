module.exports = {
    /**
     * inputs
     */
    inputs:[{
        label: 'IDC算法',
        name: 'idc',
        type: 'selected',
        options: {},
    },
    {
        label: '',
        name: 'idc',
        type: 'selected',
        options: {},
    }],
    projects:[{
        label: 'project1',
        inputs: ['idc',{
            label: 'outputSetting',
            input: ['idc2']
        }],
        output: function(res){
            render(res)
        },

    }]
}

  