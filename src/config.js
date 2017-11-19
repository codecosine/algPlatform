var local1 = [
    {
        label: '测试集比例',
        name: 'test',
        type: 'slider',
        remark: '测试集比例(0,1)'
    },
    {
        label: '训练集缺失比例',
        name: 'trainMiss',
        type: 'slider',
        remark: '训练集缺失比例(0,1)'
    },

    {
        label: '测试集缺失比例',
        name: 'testMiss',
        type: 'slider',
        remark:'测试集缺失比例(0,1)'
    },
    {
        label: '1标签比例',
        name: 'label1',
        type: 'slider',
        remark:'标签1比例(0,1)'
    },
    {
        label: '多推理结果合成方法',
        name: 'SubSpaceEvidenceSynthesisNum',
        type: 'radio',
        options: [{
            label:'平均法多推理结果合成',
            value: 1,
        },{
            label:'投票法多推理结果合成',
            value: 2
        }],
        remark: '多推理结果合成方法,1:平均法多推理结果合成;2:投票法多推理结果合成'
    },
    {
        label: '特征分离算法',
        name: 'featureSeparationNum',
        type: 'radio',
        options: [{
            label:'平均数特征分割',
            value: 1,
        },{
            label:'中位数特征分割',
            value: 2
        },{
            label:'用户指定值特征分割',
            value: 3
        }],
        remark: '特征分离算法,1:平均数特征分割;2:中位数特征分割;3:用户指定值特征分割'
    },
    {
        label: '单多线程',
        name: 'evaluationExecutorNum',
        type: 'select',
        options: [{
            label:'单线程',
            value: 1,
        },{
            label:'多线程',
            value: 2
        }],
        remark: '1:单线程;2:多线程'
    },
    {
        label: '子空间',
        name: 'subSpaceCreateNum',
        type: 'radio',
        options: [{
            label:'完全随机子空间',
            value: 1,
        },{
            label:'sn随机子空间',
            value: 2
        },{
            label:'sn特征选择子空间',
            value: 3
        }],
        remark: '子空间,1:完全随机子空间;2:sn随机子空间;3:sn特征选择子空间'
    },
    
    
    //
    {
        label: '特征选择停止',
        name: 'stop',
        type: 'slider',
        remark: '特征选择停止参数(0,1)'
    },
    {
        label: '特征调整算法',
        name: 'improtenceAdjustNum',
        type: 'radio',
        options: [{
            label:'平方调整算法',
            value: 1,
        },{
            label:'减法调整算法',
            value: 2
        }],
        remark: '特征调整算法,1:平方调整算法;2:减法调整算法'
    },
    {
        label: '评价算法',
        name: 'evaluationNum',
        type: 'radio',
        options: [{
            label:'auc',
            value: 1,
        },{
            label:'svm',
            value: 2
        }],
        remark: '评价算法,1:auc;2:svm'
    },
    {
        label: '父母染色体选择算法',
        name: 'parentChrosChooseNum',
        type: 'radio',
        options: [{
            label:'顺序法父母染色体选择',
            value: 1,
        },{
            label:'轮盘法父母染色体选择',
            value: 2
        }],
        remark: '父母染色体选择算法,1:顺序法父母染色体选择;2:轮盘法父母染色体选择'
    },
    {
        label: 'Sns',
        name: 'Sns',
        type: 'input',
        remark: 'sn子空间个数'
    },
    {
        label: 'fnMins',
        name: 'fnMins',
        type: 'input',
        remark: 'sn子空间个数最小值，长度需要个sns一样'
    },
   
]
var hereditaryParameter = [
    /**
    * 遗传算法参数
    * hereditaryParameter
    */
   {
       label: 'sameNum',
       name: 'sameNum',
       type: 'input',
       remark: '最多相同最大解次数(0,+00)'
   },
   {
       label: 'chrosNum',
       name: 'chrosNum',
       type: 'input',
       remark: '染色体数(0,+00)'
   },
   {
       label: 'geneMutNumPro',
       name: 'geneMutNumPro',
       type: 'input',
       type: 'slider',
       remark: '基因突变比例(0,1)'
   },
   {
       label: 'geneMutPro',
       name: 'geneMutPro',
       type: 'slider',
       remark: '基因突变概率(0,1)'
   },
   {
       label: 'sameDeviation',
       name: 'sameDeviation',
       type: 'slider',
       remark: '相同解范围(0,1)'
   },
   {
       label: 'step',
       name: 'step',
       type: 'slider',
       remark: '基因步长(0,1)'
   },
   {
       label: 'iterNum',
       name: 'iterNum',
       type: 'input',
       remark: '迭代次数(0,+00)'
   },
   {
       label: 'saveChroPro',
       name: 'saveChroPro',
       type: 'slider',
       remark: '保留染色体比例(0,1)'
   },
   {
       label: 'geneExPro',
       name: 'geneExPro',
       type: 'slider',
       remark: '基因交换比例(0,1)'
   }]
export default {
    /**
     * 算法参数输入配置
     */
    algorithm1:[{
        label:'基础配置',
        name: 'local',
        value: local1
    },{
        label: '遗传算法',
        name: 'hereditaryParameter',
        value: hereditaryParameter
    }],
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

  