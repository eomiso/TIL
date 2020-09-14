(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{349:function(t,a,e){"use strict";e.r(a);var r=e(20),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cs224n-lecture-13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cs224n-lecture-13"}},[t._v("#")]),t._v(" cs224n Lecture 13")]),t._v(" "),e("p",[t._v("부제 : Machine Learning이라는 새로운 task와 sequence-to-sequence 라는 새로운 "),e("strong",[t._v("architecture")])]),t._v(" "),e("h2",{attrs:{id:"개요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),e("ul",[e("li",[t._v("Unknown words")]),t._v(" "),e("li",[t._v("TagLM, CoVe")]),t._v(" "),e("li",[t._v("ELMo")]),t._v(" "),e("li",[t._v("SNLI, SRL, Coref, NER, SST-5")]),t._v(" "),e("li",[t._v("ULMfit, transfer learning")]),t._v(" "),e("li",[t._v("Transformer")]),t._v(" "),e("li",[t._v("Multi-head attention")]),t._v(" "),e("li",[t._v("Layer normalization")]),t._v(" "),e("li",[t._v("Positional encoding, segment embedding")]),t._v(" "),e("li",[t._v("BERT, GPT")]),t._v(" "),e("li",[t._v("BookCorpus, GLUE")])]),t._v(" "),e("h2",{attrs:{id:"unknown-words"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unknown-words"}},[t._v("#")]),t._v(" Unknown words")]),t._v(" "),e("p",[t._v("지금까지는 one representation of words 만 있다고 가정했다(Word2vec, Glove, fastText)."),e("br"),t._v("\nPre-Trained word vectors 를 사용하는 것이 1~2%정도 성능을 개선하는 것으로 나타났다. Pre-Trained word vectors 를 가지고 추가적으로 Unknown 단어들을 un supervised learning으로  학습하면 되는 것이다.")]),t._v(" "),e("p",[t._v("또는 그냥 랜덤 벡터를 넣기도 한다. 각 단어는 꼭 하나의 벡터와 매핑이 되도록 해주는 것이다.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Tip from Manning regarding unknown words.")]),t._v(" "),e("p",[t._v("Train Time : Vocab is {words occurring, say, >= 5times} + {"),e("UNK",[t._v("}\nMap all rarer words (<5) to "),e("UNK",[t._v(", train a word vector for it.\nRuntime : use "),e("UNK",[t._v(" when out-of-vocabulary(OOV) words occur")])],1)],1)],1)]),t._v(" "),e("p",[t._v("그런데 이렇게 하면 서로 다른 단어였던 UNK words 들을 구분할 수 없다는 문제가 있다(identity나 meaning 차원에서)."),e("br"),t._v("\n그래서 char-level models 를 이용해서 vector를 만드는 것이 좋다!")]),t._v(" "),e("p",[t._v("Unknown vocab이 나왔을 때, 인코더에서 봤던 단어를 가져오는 경우도 있다.")]),t._v(" "),e("p",[t._v("어쨌거나 이 방법은 word-sense를 정확히 반영하지 못한다. Context를 반영하지 못한다는 것(star- universe, hollywood senses).")]),t._v(" "),e("h2",{attrs:{id:"taglm-cove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#taglm-cove"}},[t._v("#")]),t._v(" TagLM, CoVe")]),t._v(" "),e("p",[t._v("그런데 LSTM 모델을 생각해보면 context-specific word representations를 매 position 마다 잘 산출하는 것을 확인할 수 있다.\n"),e("img",{attrs:{src:"/TIL/ML/13_LSTM.png",alt:""}})]),t._v(" "),e("p",[t._v("일단 word에 context를 가미하고 싶고, standardly learn task RNN only on small task-labeled data 라는 한계를 극복하고자 하는 시도다."),e("br"),t._v("\n이를 위해서 NLM을 unlabeled corpus 에 학습시키는 semi-supervised approach를 해보자는 것.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/TIL/ML/13_TagLM1.png",alt:""}}),t._v(" "),e("img",{attrs:{src:"/TIL/ML/13_TagLM2.png",alt:""}})]),t._v(" "),e("p",[t._v("아무튼 Peters et al.(2017) 논문이 밝혀낸 것은 1) bidirectional LM이 only forward 보다 도움이 된다는 것과, 2) supervised data를 학습한 LM은 도움이 되지 않는다는 것, 3) 큰 LM 을 가지는게 적은 모델에 대해 도움이 된다(Q. "),e("strong",[t._v("ppl 30 이 무슨 의미지?")]),t._v(" ).")]),t._v(" "),e("p",[t._v("Cove 모델은 매닝 성님이 그냥 skip 해버렸다.")]),t._v(" "),e("h2",{attrs:{id:"elmo-embeddings-from-language-models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elmo-embeddings-from-language-models"}},[t._v("#")]),t._v(" ELMo : Embeddings from Language Models")]),t._v(" "),e("p",[t._v("Peters etal.(2018)\nTagLM의 업글 버전, Bi-NLM을 학습하고 그 모든 Layer을 prediction에 활용해라."),e("br"),t._v("\n별로 크지 않은 LM을 활용하고자 한다. character CNN을 활용해서 initial word representation 을 뽑아내는데 이를 통해 parameter의 개수를 줄인다."),e("br"),t._v(" "),e("strong",[t._v("residual connection")]),t._v(" 을 사용한다.\n2개의 biLSTM Layer을 활용\nInput 과 Output(softmax) token의 parameter를 묶고 (parameter를 묶는 다는게 뭐지?? concat 한다는 것인가?) 이렇게 묶인 것을 forward와 backward LM 사이에 묶는다.")]),t._v(" "),e("h2",{attrs:{id:"snli-srl-coref-ner-sst-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snli-srl-coref-ner-sst-5"}},[t._v("#")]),t._v(" SNLI, SRL, Coref, NER, SST-5")]),t._v(" "),e("p",[t._v("Stanfor Natural Language Inference : 추론(contradiction, neutral, entailment)\nSemantic Role Labeling :\n나머지는 대충 무엇인지 다 알고 있는 것들")]),t._v(" "),e("ul",[e("li",[t._v("CoLa : corpus of Linguistics Acceptability(Warstadt et al., 2018) consists of English acceptability judgements frawn from books and journal articles on linguistic theory. Each example is a sequence of words annotated with whether it is a grammatical English sentence.")])]),t._v(" "),e("h2",{attrs:{id:"ulmfit-transfer-learning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ulmfit-transfer-learning"}},[t._v("#")]),t._v(" ULMfit, transfer learning")]),t._v(" "),e("p",[t._v("Universal Language Model Fine-tuning\nLM 에서 학습 정보를 활용하려고 한다는 점에서는 ELMO와 동일하다.\nLM 에서 학습된 네트워크를 그대로 활용한다.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/TIL/ML/13_ULMdfit.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"transformer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transformer"}},[t._v("#")]),t._v(" Transformer")]),t._v(" "),e("h3",{attrs:{id:"basic-blocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-blocks"}},[t._v("#")]),t._v(" Basic blocks")]),t._v(" "),e("blockquote",[e("p",[t._v("Dot-product Attention\nScaled Dot-product Attention\nSelf-attention at the encoder")])]),t._v(" "),e("h3",{attrs:{id:"multi-head-attention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-head-attention"}},[t._v("#")]),t._v(" Multi-head attention")]),t._v(" "),e("h3",{attrs:{id:"encoder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encoder"}},[t._v("#")]),t._v(" Encoder")]),t._v(" "),e("h3",{attrs:{id:"decoder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decoder"}},[t._v("#")]),t._v(" Decoder")]),t._v(" "),e("h3",{attrs:{id:"tips-and-tricks-of-tranformer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tips-and-tricks-of-tranformer"}},[t._v("#")]),t._v(" Tips and Tricks of Tranformer")]),t._v(" "),e("h2",{attrs:{id:"layer-normalization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layer-normalization"}},[t._v("#")]),t._v(" Layer normalization")]),t._v(" "),e("h2",{attrs:{id:"positional-encoding-segment-embedding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#positional-encoding-segment-embedding"}},[t._v("#")]),t._v(" Positional encoding, segment embedding")]),t._v(" "),e("h2",{attrs:{id:"bert-gpt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bert-gpt"}},[t._v("#")]),t._v(" BERT, GPT")]),t._v(" "),e("p",[t._v("BERT : Bidirectional Encoder Representations from Transformers")]),t._v(" "),e("p",[e("strong",[t._v('"Words can see themselves"')]),t._v(" :")]),t._v(" "),e("h2",{attrs:{id:"bookcorpus-glue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bookcorpus-glue"}},[t._v("#")]),t._v(" BookCorpus, GLUE")])])}),[],!1,null,null,null);a.default=n.exports}}]);