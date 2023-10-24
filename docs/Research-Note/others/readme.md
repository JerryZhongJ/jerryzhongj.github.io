---
title: Miscellaneous Papers
category:
  - 研究笔记
tag: 
---

#### [Analysis of JavaScript Programs: Challenges and Research Trends](https://doi.org/10.1145/3106741)
- CSUR
- 160篇论文、6个主题
- JavaScript特点和代表性错误、漏洞
  - JavaScript特点
  - web环境特点
  - 类型错误和安全漏洞
- 静态分析
  - 53篇论文
  - 挑战：动态特性、运行环境
  - 趋势;
    - 分析范围：子集语言、动态载入代码、动态特性、dom和事件模型，等等
    - 精度：动态特性、动态属性
    - 可扩展性：
    - 性能
    - 框架易用性
    - 分析客户：类型错误检测、安全漏洞检测、程序理解
- 动态分析
- 形式化推导
- 类型安全和JIT优化
- 网页应用安全
- 实证研究
- JavaScript分析挑战和指导

#### [Taintmini: Detecting Flow of Sensitive Data in Mini-Programs with Static Taint Analysis](https://ieeexplore.ieee.org/document/10172538)
- ICSE 23
- **问题**：
  - mini app允许开发者在一个超级宿主app上（微信）运行小app
  - 超级宿主app可以让mini app访问敏感隐私信息。尽管用权限的方式来管理，被授权的app可能会泄露它所获取的信息。
  - 传统污点分析工具不适用于
- **挑战**：
  - 跨语言：WXML/JavaScript
  - 处理异步编程范式
  - 跨页面
  - 跨mini programs
- **贡献**：
  - taintmini：静态污点分析，能够应对上述4种挑战。
  - 扩展JavaScript Object Dependecy Graph，表现变量、对象、对象属性。添加WXML标签和属性作为节点。
  - 提出事件组（同步处理的一系列对象），生成事件组执行顺序图
  - 可以检测隐私泄露到不同的mini program 
- **背景**：
  - 两类敏感信息：操作系统提供的、wechat提供的
  - 跨mini program通信：
    - mini program趋向小型化，一个app也会拆成多个app进行交流。
    - 不同mini program通过`navigateToMiniProgram`跳转，通过json传递数据。 
- **方法**：
1. 找到所有的节点
   - JavaScript对象的属性和WXML tag 
2. 把节点划分为事件组
  - 事件组：一个事件处理函数、绑定在同一个事件处理函数的tags、一个wxs  tag
  - 事件组之间有交叉 
3. 对事件组内和跨事件组生成数据流边
4. src/sink分析              

#### [ωTest:WebView-Oriented Testing for Android Applications]()
- ISSTA 23
- **问题**：
  - 由于涉及到跨语言交互机制，WebView编程是易错的
  - 静态方法往往不能分析到动态加载的代码
  - 传统的测试生成方法并不适用
    - GUI测试以以更多的GUI状态（用GUI元素的层级结构来建模）为指标，但是加载两个不同的界面并不意味着截然不同的行为。
    - 另一种以覆盖率为指标，但是没有对WebView行为建模
- **贡献**：
  - 提出以WebView API调用点和数据交流为测试覆盖的性质
- 方法：动态识别WebView相关性质
  1. 从WebView APIs使用的变量开始
  2. 前向/后向传播    
- **评估**：
  - 数据：44开源app、30个闭源app
    - 开源 排除掉不使用WebView的或简单使用的、近3个月没活动的、主函数不可达的（要求登录、远程设备或资源）、安装不了的 
  - baseline：
    - ωDroid：monkey based random test generation
    - Q-Testing：强化学习
    - ComboDroid
    - Fastbot2
  - 消融实验：只考虑WebView API调用点
  - 指标：


#### [An Empirical Study of Functional Bugs in Android Apps](https://dl.acm.org/doi/10.1145/3597926.3598138)
- ISSTA 23
- **对象** 
  - 安卓app的functional bugs: 非崩溃的bug
- **RQ**
  - root cause
  - bug症状
  - bug的发现方式，test oracles
  - 测试工具评估
- **方法**：
  - 收集app
    - 根据在Google play上、在github上的、有超过200个closed issue，筛选出182个app
    - 用热度和类型衡量
    - 最终选8个
  - 收集bug：
    - 时间跨度：2018.8 - 2021.7，3年
    - 标记为bug，已关闭，信息充足
    - 3186bug，过滤掉mislabeled等2482个
    - 人工？识别出1623bug是functional的
    - 可复现的，有patch，在通用android手机上：265个
    - 对每个bug得到：其app、bug patch、bug复现视频
  - 分析bug：
    - 建立分类：**open card sorting approach**
      - 每次随机选40个bug，2个作者独立研究、标记它们的root cause、症状、oracle。再合并
      - 重复10次来搞定400个bug。
      - 个人耗时6个月。
  - 分析测试工具
    - 人工根据测试工具的能力来划定可以分析的bug范围
    - 跑了5个工具看是不是真的能测出来
  - 代表性：分析第三方安卓bug数据集AndroR2（内含180个bug report），检验它们的分类方法能否覆盖数据集，检验结果是否一致。
- **结果**：  
  - 399个bug
  - RQ1 root cause（**每类bug都介绍一个具体的例子**）:
    - 共通编程错误（56.7%）：feature没实现、没考虑特定用例（15.8% of所有bugs，只有这个给了比例）、错误控制流、缺少数据同步、第三方库使用错误、变量赋值不正确、其他
    - 安卓相关错误（41.7%）：安卓机制相关，错误处理lifecycle、错误处理输入事件（11.5%）、安卓资源相关（15.8%），安卓框架API误用、安卓兼容性 
    - 第三方库错误（6个）
    - 以上给出比例的错误都作为finding
  - RQ2 symptom：
    - UI相关：UI元素缺失（18%）、重复元素（8.5%）、UI变形（）、内容相关（21.3%）
    - UI交互相关：不正确的交互逻辑、功能不起效、没有反应
    - 其他
  - RQ3 oracle:
    - app特性无关oracle（33.3%）：
    - app特性相关oracle：app无关、特定app
  - RQ4 测试方法：
    - finding：只有21%的bug是测试工具的目标，只有2个bug能被测出来。
- **结论**：
  - 总结了一下前面RQ1的分布，关注前面比例最多的类型
  - RQ3揭示了大部分oracle是app特性相关的，可以使用差分测试
  - 计算了RQ2和RQ3的**联合分布**，app无关oracle能够发现很多UI变形；等
- 根据结论，实现了一个差分测试工具，并且做了evaluation
- **感想**：
  - 实验过程的每一步都可以拿来大书特书（比如筛选app都能写2-3步），看你怎么写，要细心记录、实时跟进。
  - 怎么一篇论文这么多内容？既有实证分析，还有方法？

#### An Empirical Study on TensorFlow Program Bugs
- **对象**：
  -  基于Tensorflow的应用的bug
-  **RQ**：
   - symptoms、root cause
   - 检测bug的挑战和用户处理方式
   - 定位bug的挑战和用户处理方式
- **方法**：
  - 收集bug：
    - StackOverflow：
      - “tensorflow answers:1 -how -install -build”
      - 人工审查500个，87个是关于bug 
    - Github commit：
      - 11个项目
      - “bug, fix, wrong, error, nan, inf, issue, fault, fail, crash”，过滤掉“typo”
      - 时间跨度：2-3年
      - 88 bugs，阅读相关issue和pull request
    - 总共175 bugs
  - root cause和symptom：
    - 阅读commit的changes、commit messages等
    - 阅读回答
    - 尝试复现bug，151/175
    - 人工总结
  - bug detection：两个问题组成的4种答案
    - 能否输入触发？是否导致crash？
    - 对于导致至少一个no的bug，发现其挑战
    - 对于各种分类，阅读回答和issues来查找用户策略
 - **结果**：
   - RQ1：**把root cause和symptom列成表格**
     - root cause：不正确的模型参数和结构、没有对齐的张量、API变化、API误用、结构低效、其他
     - symptom：错误、效果差、低效率、未知
   - RQ2：
     - 46.9%会导致crash
     - 挑战：概率上正确，偶然正确，随机执行（*非常相似啊*）
   - RQ3：
     - 对于症状为error的：trace dependency distance。量化的方式
     - 对于其他bug
- **感想**：
  - 要体现出emperical study的特色，不仅从分类维度，还可以从分类的类别入手。比如这里的root cause虽然其他bug 的emperical study都有，但是这里的root cause是别处没有的。
  - 相似的东西也可以硬拆成两个，只要你想好怎么去表述两者的不同，而且两者都有足够的文字去叙述。
  - 分类的部分至少还有数据，challenge几乎就是随便自己写了。但是这占了2个RQ。