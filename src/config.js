module.exports = {
    /**
     * inputs
     */
    /**
     * 算法参数输入配置
     */
    algorithm1:[
        /**
         * 子数据集参数
         */
        {
            label: '测试集比例',
            name: 'test',
            type: 'input',
            validator: {},// (0~1之间)
        },
        {
            label: '训练集缺失比例',
            name: 'trainMiss',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)
        },
        {
            label: '测试集缺失比例',
            name: 'testMiss',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)
        },
        {
            label: '1标签比例',
            name: 'label1',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)
        },

        {
            label: '特征调整算法',
            name: 'improtenceAdjustNum',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)	public static final int AUC_NUM = 1;public static final int SVM_NUM = 2;
            remark: '特征调整算法'
        },
        {
            label: '子空间合成算法',
            name: 'SubSpaceEvidenceSynthesisNum',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)	public static final int AUC_NUM = 1;public static final int SVM_NUM = 2;
            remark: '子空间合成算法'
        },
        /**
         * 
        顺序法父母染色体选择
        public static final int ORDER_PARENT_CHROS_CHOOSE_NUM = 1;
        轮盘法父母染色体选择
        public static final int ROULETTE_PARENT_CHROS_CHOOSE_NUM = 2;
         */
        {
            label: '父母染色体选择算法',
            name: 'parentChrosChooseNum',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)	public static final int AUC_NUM = 1;public static final int SVM_NUM = 2;
            remark: '父母染色体选择算法'
        },
        //EvaluationNum 评价算法
        {
            label: '评价算法',
            name: 'EvaluationNum',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)	public static final int AUC_NUM = 1;public static final int SVM_NUM = 2;
            remark: '评价算法，传入的是其工厂方法的参数'
        },
        /**
         * 遗传算法参数
         */
        {
            label: '特征分离算法',
            name: 'FeatureSeparationNum',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)	public static final int AUC_NUM = 1;public static final int SVM_NUM = 2;
            remark: '评价算法，传入的是其工厂方法的参数'
        },
        {
            label: '子空间',
            name: 'SubSpaceCreateNum',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)	public static final int AUC_NUM = 1;public static final int SVM_NUM = 2;
            remark: '评价算法，传入的是其工厂方法的参数'
        },
        //一些测试用的可选参数
        {
            label: 'Sns',
            name: 'Sns',
            type: 'input',
            options: {},
            validator: {},
            remark: '评价算法，传入的是其工厂方法的参数'
        },
        {
            label: 'FnMins',
            name: 'FnMins',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)	public static final int AUC_NUM = 1;public static final int SVM_NUM = 2;
            remark: '评价算法，传入的是其工厂方法的参数'
        },
        {
            label: 'Stop',
            name: 'Stop',
            type: 'input',
            options: {},
            validator: {},// (0~1之间)	public static final int AUC_NUM = 1;public static final int SVM_NUM = 2;
        },
    ],
    settings:[{
        name:'algorithm1',
        label: 'algorithm1',
    }]

    // inputs:[{
    //     label: 'IDC算法',
    //     name: 'idc',
    //     type: 'selected',
    //     options: {},
    // },
    // {
    //     label: '',
    //     name: 'idc',
    //     type: 'selected',
    //     options: {},
    // }],
    // projects:[{
    //     label: 'project1',
    //     inputs: ['idc',{
    //         label: 'outputSetting',
    //         input: ['idc2']
    //     }],
    //     output: function(res){
    //         render(res)
    //     },

    // }]
}

  