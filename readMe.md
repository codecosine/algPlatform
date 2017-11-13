# algplatform

> a platform

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

> 功能：数据集的属性约简，传入一个数据集文件，然后程序进行分析处理，最后得出约简后的属性集。
然后属性约简的方法一共有5大类: Xu、ACC、CT、REC、IDC 其中 ACC CT REC有4个小类：PR SCE LCE CCE 并且可以选择是否求核 
然后如果是测试的话  可以选择每个文件运行什么算法 运行多少次（1次正常的属性顺序+用户选择的n次乱序属性）  用java简单的界面大致如下：

## platform design

- 顶部为项目导航栏，并有任务队列栏
- 主流程.左侧为配置栏,右侧分别为输入栏，以及输出栏
- 任务队列. 这个待定

## platform config

```javascript

{
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

```
## 对接api文档 v1.0
### 通用
1.约定返回格式为json
2.json基本格式 下面会给几个示例
3.下面req解析的一些格式我还没具体确定(我的锅),明早之前我会确定下来,我自己也会稍微接一次
``` javascript
{
    status: 0,// 0表示成功,1表示失败
    data:{},//所有需要返回的数据全部放进去这个对象
}
```

}
算法服务三个接口
``` javascript
app.post('/checkDataSet', function (req, res) {
    // req 包含 文件
    if(check){
        res.json({
            status: 0,
            data:{
                info:{
                    com0:11,
                    com1:22,
                    miss0:33,
                    miss1:44
                },
                message:'成功'
            }
        })
    } else {
        res.json({
            status: 1,
            data:{
                message:'失败原因'
            }
        })
    }
});

app.post('/checkConfig', function (req, res) {
    // req 包含 参数
    if(check){
        res.json({
            status: 0,
            data:{
                message:'参数合法'
            }
        })
    } else {
        res.json({
            status: 1,
            data:{
                message:'某某某参数不合法'
            }
        })
    }
});

app.post('/solution', function (req, res) {
    // req 包含 文件和参数
    if(check){
        res.json({
            status: 0,
            data:{
                message:'已开始计算'
            }
        })
    } else {
        res.json({
            status: 1,
            data:{
                message:'失败原因'
            }
        })
    }
});
```
### 回调接口
``` javascript
app.post('/solutionResult', function (req, res) {
    res.json({
        status: 0,
        data:{
            //result
        }
    })
   
});
```

### 服务对接

0.考虑到我这里只同时处理一个数据集，所以没有必要添加序号了，如果post多次，我这里只保存最新的数据集，提交参数叫我计算我也只计算最新的数据集就好了
1.向uploadDataSetUrl post数据集文件 name=dataSet

2.post后，将返回一段json，json格式为{result:true/false,info:xxxx}
    json的result表示这次请求是否处理成功 
    如果处理成功，info将会是一个对象，格式为{com0:11,com1:22,miss0:33,miss1:44},分别表示完整0标签个数,完整1标签个数,缺失0标签个数,缺失1标签个数
    如果处理失败，info将会是一个字符串，内容是错误信息
=>>这里是校验1,校验数据集文件是否合法,并返回相关的标签参数

3.向runParameterUrl post全部参数 参数具体查看RunParameter类
    post的参数的名字如果可以就直接为RunParameter类参数的名字
=>>这里是校验2,校验相对于选择的算法的参数是否合法 ==========关键问题,这里的参数校验依赖有什么


=>>这里是运算1,,接收我传给你的所有经过校验的参数和文件,只做简单的防御性检查
4.post后，将返回一段json，json格式为{result:true/false,info:xxxx}
    json的result表示这次请求是否处理成功
    如果处理成功，info将会是空,并开始计算
    如果处理失败，info将会是一个字符串，内容是错误信息，不会开始计算
5.计算完成后，我将向doneUrl post计算结果，post的数据是json，并且表示计算完成。如果没有数据集了，等待用户上传数据集，直到有数据集还没计算，跳到第一步。json结构如下
    如果计算过程发送错误：
        {result:true/false,info:xxxx}
        json的result表示这次请求是否处理成功
        如果处理成功，info将会是空
        如果处理失败，info将会是一个字符串，内容是错误信息，不会重新开始计算
计算完成结果result：
{
    "trainDataSetOutput": {
        "trainMiss": 0.1,
        "test": 0.5,
        "7-0[1, 2, 3, 4, 5, 6, 7]": 0.8803986710963455,
        "datas": [
            {
                "A": 0.15750631069790627,
                "AB": 0.774374525857427,
                "B": 0.06811916344466667,
                "id": "1442",
                "label": 1
            },
            {
                "A": 0.09151763628348958,
                "AB": 0.8131397609279167,
                "B": 0.09534260278859377,
                "id": "2773",
                "label": 0
            },
            {
                "A": 0.12495179330255207,
                "AB": 0.8609483589814687,
                "B": 0.014099847715979169,
                "id": "1441",
                "label": 0
            }
        ],
        "subSpaces": [
            {
                "subSpace": [
                    1,
                    3,
                    4,
                    5
                ],
                "subSpaceAUC": 0.7572267441860465,
                "chro": "[0.08, 0.5, 0.9400000000000001, 0.68, 0.12, 0.060000000000000005, 0.86, 0.65]"
            },
            {
                "subSpace": [
                    1,
                    2,
                    6
                ],
                "subSpaceAUC": 0.8272761627906976,
                "chro": "[0.21000000000000002, 0.15000000000000002, 0.060000000000000005, 0.26, 0.77, 0.29000000000000004]"
            },
            {
                "subSpace": [
                    1,
                    2,
                    4,
                    5
                ],
                "subSpaceAUC": 0.7501947674418605,
                "chro": "[0.63, 0.38, 0.39, 0.79, 0.61, 0.88, 0.8300000000000001, 0.13]"
            }
        ],
        "miss0Count": 0,
        "testMiss": 0.2,
        "subSpaceCreate": "SnRandomSubSpaceCreate(sn随机子空间创建){sns=[[I@207475a2, [I@6c90063f, [I@55c3222d, [I@456b12c3, [I@4631a6a9], fnMins=[1, 3, 6, 13, 15]}",
        "com0Count": 2400,
        "label1": 0.1,
        "parentChrosChoose": "RouletteParentChrosChoose{轮盘父母染色体选择算法}",
        "AUC": 0.8473953488372094,
        "evaluation": "Auc{evidenceSynthesis=TeaEvidenceSynthesis{DS证据合成}}",
        "miss1Count": 0,
        "evidNameToIds": [
            {
                "evidId": 1,
                "evidName": "m1"
            },
            {
                "evidId": 2,
                "evidName": "m2"
            },
            {
                "evidId": 3,
                "evidName": "m3"
            },
            {
                "evidId": 4,
                "evidName": "m4"
            },
            {
                "evidId": 5,
                "evidName": "m5"
            },
            {
                "evidId": 6,
                "evidName": "m6"
            },
            {
                "evidId": 7,
                "evidName": "m7"
            }
        ],
        "7-1[1, 2, 3, 4, 5, 6, 7]": 0.12955465587044535,
        "com1Count": 402
    }
}