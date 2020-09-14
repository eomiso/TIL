(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{355:function(t,s,a){"use strict";a.r(s);var m=a(20),c=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cs224n-6강"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cs224n-6강"}},[t._v("#")]),t._v(" CS224n 6강")]),t._v(" "),a("h2",{attrs:{id:"개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),a("ol",[a("li",[t._v("Language modeling")]),t._v(" "),a("li",[t._v("N-gram, sparsity problem")]),t._v(" "),a("li",[t._v("Generating text with fixed window")]),t._v(" "),a("li",[t._v("RNN")]),t._v(" "),a("li",[t._v("Back propgation through time")]),t._v(" "),a("li",[t._v("Generating text with RNN")]),t._v(" "),a("li",[t._v("Perplexity")])]),t._v(" "),a("h2",{attrs:{id:"language-modeling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language-modeling"}},[t._v("#")]),t._v(" Language Modeling")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Definition")]),t._v(" "),a("p",[a("strong",[t._v("Langauge Modeling")]),t._v(' is the task of predicting "ANSWER".')])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("ANSWER")]),t._v(" "),a("p",[t._v("what word comes next.")])]),t._v(" "),a("p",[t._v("보다 정확히는 sequence of words 가 주어졌을 때, 다음 단어의 probability distribution 을 계산하는 것\n")]),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"22EF"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-msup",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),t._v("\n여기서 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1),t._v(" 는 vocabulary 상의 그 어떤 단어든지 될 수 있는데, 주어진 선택지에서 한가지를 고른다는 점에서 classification 문제로 볼 수 있다."),a("br"),t._v("\n또는 어떤 텍스트에 확률을 지정하는 시스템(A system that assigns probablity to a piece of text)으로 볼 수도 있다."),a("p"),t._v(" "),a("blockquote",[a("p",[t._v("핸드폰에서 자동단어 완성해주는 것도 LM의 일종이다.")])]),t._v(" "),a("h2",{attrs:{id:"n-gram-sparsity-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#n-gram-sparsity-problem"}},[t._v("#")]),t._v(" N-gram, sparsity problem")]),t._v(" "),a("p",[t._v("그래서 이런 LM을 학습하기 위해서는 어떻게 해야하는가?")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Quote")]),t._v(" "),a("p",[t._v("How to learn a Language Model?")])]),t._v(" "),a("p",[t._v("Deep Learning의 시대가 오기 전에는 "),a("strong",[t._v("n-gram LM")]),t._v(" 을사용하였다. (자세한 사항은 슬라이드 참고)")]),t._v(" "),a("p",[t._v("n-gram 에서는 우선, markov assumption(어떤 단어는 그 앞의 n-1개의 단어에만 의존한다\n")]),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-mtext",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"s"}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"u"}}),a("mjx-c",{attrs:{c:"d"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"n"}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"s"}}),a("mjx-c",{attrs:{c:" "}}),a("mjx-c",{attrs:{c:"o"}}),a("mjx-c",{attrs:{c:"p"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"n"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"d"}}),a("mjx-c",{attrs:{c:" "}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"h"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"i"}}),a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{attrs:{space:"4"}},[a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mtext",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"c"}}),a("mjx-c",{attrs:{c:"o"}}),a("mjx-c",{attrs:{c:"u"}}),a("mjx-c",{attrs:{c:"n"}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"("}}),a("mjx-c",{attrs:{c:"s"}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"u"}}),a("mjx-c",{attrs:{c:"d"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"n"}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"s"}}),a("mjx-c",{attrs:{c:" "}}),a("mjx-c",{attrs:{c:"o"}}),a("mjx-c",{attrs:{c:"p"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"n"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"d"}}),a("mjx-c",{attrs:{c:" "}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"h"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"i"}}),a("mjx-c",{attrs:{c:"r"}}),a("mjx-c",{attrs:{c:"A0"}})],1),a("mjx-TeXAtom",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1)],1),a("mjx-mtext",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mtext",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"c"}}),a("mjx-c",{attrs:{c:"o"}}),a("mjx-c",{attrs:{c:"u"}}),a("mjx-c",{attrs:{c:"n"}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"("}}),a("mjx-c",{attrs:{c:"s"}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"u"}}),a("mjx-c",{attrs:{c:"d"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"n"}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"s"}}),a("mjx-c",{attrs:{c:" "}}),a("mjx-c",{attrs:{c:"o"}}),a("mjx-c",{attrs:{c:"p"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"n"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"d"}}),a("mjx-c",{attrs:{c:" "}}),a("mjx-c",{attrs:{c:"t"}}),a("mjx-c",{attrs:{c:"h"}}),a("mjx-c",{attrs:{c:"e"}}),a("mjx-c",{attrs:{c:"i"}}),a("mjx-c",{attrs:{c:"r"}}),a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("하지만 sparcity, storage problem 이 있다.\nSparcity problem 이란 분자가 0이 되는 경우, 즉 token 이 training 데이터에서 드러나지 않는 경우가 많아 발생한다. 충분히 생성가능한 문장임에도 확률이 낮다는 이유로 절대 나타나지 않을 수 있다는 말이다.\n이를 해결하기 위해 작은 델타 값을 더해주기도 하고, 만약 분모가 0이라면 window size를 줄여서 분모가 0 보다 커지도록 한다.")]),t._v(" "),a("p",[t._v("LM은 문장을 생성하는데 사용되기도 하는데, n-gram으로는 굉장히 grammatical 한 문장을 생성할 수 있지만 이는 매우 incoherent 하다는 것을 확인할 수 있다.")]),t._v(" "),a("blockquote",[a("p",[t._v("Today the price of gold per ton, while production of shoe lasts and shoe insdustry, the bank intervened just after it considered rejected an imf demand to rebuild ...")])]),t._v(" "),a("h2",{attrs:{id:"generating-texts-with-fixed-window"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-texts-with-fixed-window"}},[t._v("#")]),t._v(" Generating Texts with Fixed Window")]),t._v(" "),a("p",[a("img",{attrs:{src:"/TIL/ML/window_LM.png",alt:"A slide from cs224n"}}),t._v("\nNo sparsity problem, Don't need to store all observed n-grams 라는 문제가 있다.")]),t._v(" "),a("p",[t._v("단점: Fixed window is too small; Enlarging window enlarges W; window can never be large enough; W 의 각각의 벡터가 서로 연관되지 못한다(there should be lot of commonalities in how you process the incoming word embeddings).;     -> 일단 기본적으로 window의 크기에 제한을 받는다는 문제가 있다.")]),t._v(" "),a("h2",{attrs:{id:"rnn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rnn"}},[t._v("#")]),t._v(" RNN")]),t._v(" "),a("p",[t._v("window의 크기에 제한 받지 않는 모델, sequence의 길이가 얼마나 길든 문제가 되지 않는다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/TIL/ML/Rnn.png",alt:"A slide2 from cs224n"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/TIL/ML/Rnn2.png",alt:""}})]),t._v(" "),a("p",[t._v("장점: step t 에서의 연산은 여러 스텝 이전의 정보를 사용할 수 있다(in theory;  앞의 예시에서 proctor가 중요한 정보를 담고 있다는 점을 반영할 수 있다는 얘기);  W의 크기가 일정하다(2개의 W가 있긴하지만); 동일한 W가 각각의 input에 동일하게 적용되기 때문에 (W 의 각각의 벡터가 서로 연관되지 못하는) window base 모델에서의 단점을 극복할 수 있다. 따라서 한 input에 대해서 잘 효과적인 학습이 되면 그 이점을 모든 input에 대해 누릴 수 있다는 장점이 있다;")]),t._v(" "),a("p",[t._v("단점: 연산이 느리다;  실전에서는 여러 스텝 이전의 정보에 접근이 어렵다;")]),t._v(" "),a("p",[t._v("::: Danger\nWhy is the same transfromation (W_h, W_e) applied each time? While a sequence of words could always appear in Different contexts?\n"),a("s",[t._v("와씨 개좋은 질문이다")]),t._v('\n"You are learning a general function, not just with one word in blank. A general function of how you should deal with a word given the word so far. In other word RNN is a method to learn a general representation of language and context so far.\nAnd the hidden states are '),a("strong",[t._v("vector")]),t._v(' of lenghts almost 500 or more. So their capacities are big enough to hold a lot of informations about different things in their different postions." ~~ 스탠 학생들 똑똑하다~~\n:::')]),t._v(" "),a("p",[t._v("input size는 데이터에 따라서, 어떤 효과를 원하냐에 따라서 짧게 할 수도, 길게 할 수도 있다. 그리고 그 길이는 W_h에 영향을 미치지 않는다.")]),t._v(" "),a("p",[t._v("Rnn의 로스는 각각 hidden state의 결과인 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mtext",{staticClass:"mjx-n",staticStyle:{color:"red"}},[a("mjx-c",{attrs:{c:"5C"}}),a("mjx-c",{attrs:{c:"^"}})],1),a("mjx-TeXAtom",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1)],1)],1)],1),t._v(" 를 통해 로스 값을 구한 다음 그 평균을 구한다. 그런데 이를 전체 코퍼스에 적용하기는 연산량이 너무 많기 때문에 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-msup",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-msup",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"3"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"2026"}})],1),a("mjx-msup",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1),t._v(" 를 sentence 나 document 단위로 한다.")],1),t._v(" "),a("p",[t._v("또한 batch Gradient Descent를 적용한다.")]),t._v(" "),a("h2",{attrs:{id:"back-propagation-through-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-propagation-through-time"}},[t._v("#")]),t._v(" Back Propagation through time")]),t._v(" "),a("p",[a("s",[t._v("이 슬라이드 하나면 충분해요")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/TIL/ML/Rnn_backprop.png",alt:"Backpropagation Slide"}})]),t._v(" "),a("h2",{attrs:{id:"generating-text-with-rnn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-text-with-rnn"}},[t._v("#")]),t._v(" Generating Text with RNN")]),t._v(" "),a("p",[t._v("Repeated sampling 이라는 것을 이용해서 텍스트를 산출할 수 있다.\n요것이 재밌는 것이, RNN-LM 을 어떤 데이터로 학습시켰냐에 따라서 그 데이터의 스타일 대로 산출할 수 있다는 것이다(오바마 연설체, 문체 등을 배낄 수 있다는 얘기)\n그러나 예시를 보면 아직은 꽤 incoherent 하다는 것을 알 수 있다.\n"),a("img",{attrs:{src:"/TIL/ML/Rnn_generate.png",alt:"Generation via repeated sampling"}})]),t._v(" "),a("h2",{attrs:{id:"perplexity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perplexity"}},[t._v("#")]),t._v(" Perplexity")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"J"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{attrs:{space:"4"}},[a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1)],1)],1)],1)],1)],1)],1)],1),a("mjx-munderover",{attrs:{space:"2"}},[a("mjx-over",{staticStyle:{"padding-bottom":"0.2em","padding-left":"0.473em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1)],1)],1),a("mjx-box",[a("mjx-munder",[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.143em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-munderover",{attrs:{space:"2"}},[a("mjx-over",{staticStyle:{"padding-bottom":"0.111em","padding-left":"0.254em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"V"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1)],1)],1),a("mjx-box",[a("mjx-munder",[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.124em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-msub",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2217"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mtext",{staticClass:"mjx-n",staticStyle:{color:"red"}},[a("mjx-c",{attrs:{c:"5C"}}),a("mjx-c",{attrs:{c:"^"}})],1),a("mjx-msub",[a("mjx-TeXAtom",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"y"}})],1)],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.24em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),t._v(" "),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"P"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-msup",[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"J"}})],1)],1)],1)],1)],1)],1),t._v("\nPerplexity is the standard evaluation metric for Language Models.\nPerplexity is a measure of confusion where lower values imply more confidence in predicting the next word in the sequence (compared to the ground truth outcome)."),a("p"),t._v(" "),a("p",[a("img",{attrs:{src:"/TIL/ML/Rnn_perplexity.png",alt:"Perplexity"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("왜 LM이 중요한가?")]),t._v(" "),a("ul",[a("li",[t._v("Language Modeling은 실제 언어를 이해하는데 대한 benchmark task다. LM이 보다 좋은 성능을 낸다는 것은 어느 부분에서 Natural Language Understanding에 progress가 있었다는 것을 의미한다.")]),t._v(" "),a("li",[t._v("또한 LM은 다양한 NLP task의 subcomponent로 기능한다.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("RNN is not Language Model\nIt could be used for variety of tasks such as pos tagging, NER, sentence classification, general purpose encoder module.")])]),t._v(" "),a("p",[t._v("::: detail\nQuestion Answering을 할 때, question에 대한 encoder로 RNN을 사용할 수 있다.\nSpeech Recognition을 할 때는, conditioning 을 거쳐 output을 생성한다.\n:::")])],1)}),[],!1,null,null,null);s.default=c.exports}}]);