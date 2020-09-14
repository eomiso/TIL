(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{354:function(e,a,r){"use strict";r.r(a);var t=r(20),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"css224n-lecture-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css224n-lecture-12"}},[e._v("#")]),e._v(" CSS224n Lecture 12")]),e._v(" "),r("h2",{attrs:{id:"개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[e._v("#")]),e._v(" 개요")]),e._v(" "),r("ul",[r("li",[e._v("Out-of-vocabulary")]),e._v(" "),r("li",[e._v("phonemes, morphemes")]),e._v(" "),r("li",[e._v("Character-level models")]),e._v(" "),r("li",[e._v("Byte Pair encoding")]),e._v(" "),r("li",[e._v("wordpiece, sentencepiece")]),e._v(" "),r("li",[e._v("Highway network vs. LSTM")]),e._v(" "),r("li",[e._v("Hybrid NMT")]),e._v(" "),r("li",[e._v("FastTest, <,>")])]),e._v(" "),r("h2",{attrs:{id:"out-of-vocabulary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#out-of-vocabulary"}},[e._v("#")]),e._v(" Out-of-vocabulary")]),e._v(" "),r("p",[e._v("Below word level로 구현해야할 이유들에는 Rich Morphology를 가진 언어들이 있다는 사실과, transliteration, informal spelling 등을 실제 문제에서 맞닥뜨릴 가능성이 있기 때문이다.")]),e._v(" "),r("h2",{attrs:{id:"phonemes-morphemes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phonemes-morphemes"}},[e._v("#")]),e._v(" phonemes, morphemes")]),e._v(" "),r("p",[e._v("Human Language is discrete. While the Phonix is continuous with in a continuous space of mouth. -> 이것이 바로 음운의 개념으로 이어지는 것이다.  ("),r("strong",[e._v("Categorical perception")]),e._v(")\nMorphemes are a minimal level that has meaning(-ly, -ate, -en). -> 형태소 거의 아무도 이러한 요소를 NLP DeepLearning 에 적용하는 것이 일반적이지 않다. 그 이유는 character based n-gram 만적용해도 충분하기 때문이다(Wickelphones(Rumelhart & McClelland 1986, Microsoft's DSSM(Huang, He, Gao, Deng, Acero, & Hect 2013)).")]),e._v(" "),r("p",[e._v("형태소(un- + fortun(e)- + -ate + -ly 어간, 파생접사 등등)를 같은걸 모델에 적용할 수 있는 방법엔 어떤 것이 있을까?\n언어마다 Language System 이 다른데, 이것을 어떻게 해결할 것인가?(no word separation in Chinese. Even european languages didn't have space before Medieval times)")]),e._v(" "),r("h2",{attrs:{id:"character-level-models"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#character-level-models"}},[e._v("#")]),e._v(" Character-level models")]),e._v(" "),r("p",[e._v("2015년까지만 해도 word가NLP의 기본 단위였다. 그러나  Word embeddings를 character embedings 에서 시작하는 모델이 연구되기 시작하였다. 기본적으로 위의 out-of-vocabulary 상황에서도 학습을 할 수 있기 위한 방법이다. Connected Language(No distinction between words with via spaces)의 문제에 사용할 수 있다. 비슷한 철자를 가진 단어는 비슷하게 엠베딩이 될 수 있다.")]),e._v(" "),r("p",[e._v("2가지 방식: 1) word embedding을 character embedding에서 시작하는 방식, 2) character embedding만 하는 방식 으로 2가지가 있는데 둘 다 좋은 결과를 내고 있는 것으로 알려졌다.\nvector of 'h', vector of 'a', vector of 't' 가 충분한 neural net에 의해 파악되고 나면 'hat'의 의미를 추출하는데 도움이 될 것이라는 것.")]),e._v(" "),r("blockquote",[r("p",[e._v("A very powerful combinatory models with a lot of param in them. Helps store and buil representations of meaning from multi-letter groups, in such a way that they can model the meaning of morphemes and larger units and therefore put together word meanings.")])]),e._v(" "),r("p",[e._v("Deep Learning 에선 phoneme이 사용되지 않는데, 이는 phoneme 분석이 된 거대 데이터를 구하기가 어려웠기 때문이다. 그런데 언어 중에는 굉장히 phonemic(diagraph) 한 철자시스템을 가지고 있는 경우도 있다. 중국어는 Ideographic 하고, 일본어는 syllabic 하다. "),r("strong",[e._v("Character base")]),e._v(" 로 무언가를 한다고 했을 때 언어마다 철자법이 다 다르다는 것을 알아두어야 한다(같은 tri-gram 이라도 그것이 담고 있는 정보가 다를 수 있다. e.g. tho - 나는\n어쨌든__Character level model__은 뉴럴기계번역에서 사용되었는데, 처음에는 잘 안되다가, Decoder 부터 시작해서(Junyoung Chung, Kyunghyun Cho, Yoshua Bengio. arXiv 2016) 현재는 매우 기대할만한 결과를 보이고 있다.")]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Fully character-Level Neural Machine Translation without explicit seqmentation(Jason Lee, Kyunghyun Cho, Thomas Huffmann, 2017)")])])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Revisiting Character-Based Neural Machine Translation with Capacity and\nCompression")]),e._v("(Cherry, Foster, Bapna, Firat, Macherey, Google AI. 2018)")])]),e._v(" "),r("h2",{attrs:{id:"byte-pair-encoding-subword-models"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#byte-pair-encoding-subword-models"}},[e._v("#")]),e._v(" Byte Pair encoding(Subword-models)")]),e._v(" "),r("p",[e._v('이러한 sub-word model에는 2가지 트렌드가 있는데, 하나는 word-level model과 같은 아키텍쳐를 사용하는 대신에 단위를 줄이는 것이고(using smaller units: "word pieces") 다른 하나는 Hybrid 한 아키텍쳐를 사용하는 것이다.')]),e._v(" "),r("p",[e._v("Byte Pair Encoding 은 원래 "),r("strong",[e._v("compression algorithm")]),e._v(" 이다. most frequent byte pair를 새로운 byte로 병합(?) 하는 방식인데, 결과적으로 ngrams 대신에 bytes를 사용하는 것이다. unicode-8만 해도 200,000 글자가 넘는데, 이 것을 bytes로 바꿔서 사용하는 것이다. 자세한 구현패턴은 슬라이드 참고.")]),e._v(" "),r("h2",{attrs:{id:"wordpiece-sentencepiece"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wordpiece-sentencepiece"}},[e._v("#")]),e._v(" wordpiece, sentencepiece")]),e._v(" "),r("p",[e._v("BPE의 일종으로 구글에서 사용중인 알고리즘 (Google NMT).")]),e._v(" "),r("p",[e._v("단순한 char n-gram count를 사용하는 게 아니라, greedy approximation을 사용해서 해당 모델의 Log likelihood을 극대화 하는 방식으로 pieces를 선택하는 방식으로 word 단위와 sentence 단위로 적용하는 2가지 방식이 있다. 후자는 전자에 언어마다 tokenizer가 필요하다는 점을 극복하고, 빈칸을 _ 라는 특수기호로 처리해서 character로 본다.\nBERT 가 이러한 알고리즘을 이용하기 때문에 word pieces 를 사용하고 있음을 확인할 수 있다. vocab에 없는 단어를 wordpieces를 통해 생성해 낸다.")]),e._v(" "),r("p",[e._v("아직 LSTM과 CNN에 대한 이해가 부족해서 이해하지 못할 얘기가 줄줄이 나오는데, 결론적으로는 이러한 character Based Model에 LSTM + Highway Network를 적용하면 꽤 풍부한 semantic and structural information을 추출해낼 수 있음을 확인하고 있다.(Character-Aware Neural Language Models, Yoon Kim, Yacine Jenite ... 2015)")]),e._v(" "),r("h2",{attrs:{id:"hybrid-nmt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hybrid-nmt"}},[e._v("#")]),e._v(" Hybrid NMT")]),e._v(" "),r("p",[e._v("필요할 때만 character level로 내려가는 모델.\nseq2seq model을 기본으로 "),r("unk",[e._v("를 마주쳤을 때, char-level로 내려가서 decoding을 이어간다.")])],1),e._v(" "),r("h2",{attrs:{id:"highway-network-vs-lstm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#highway-network-vs-lstm"}},[e._v("#")]),e._v(" Highway network vs. LSTM")]),e._v(" "),r("p",[r("strong",[e._v("Character Based model")]),e._v(" 에 적용할 수 있는 모델들. LSTM은 character based model로 word representation까지도 가능하게 해준다.")]),e._v(" "),r("p",[e._v('Transformation을 original information을 처리하는 과정에서 적용한다. "Functions askin to an LSTM cell"')]),e._v(" "),r("p",[e._v("LSTM 만 적용했을 때는 morphological 수준의 embedding에 가까운데(hard-rich-richer-richter) Highway 까지 적용하면 (eduard-gerard-edward-carl)")]),e._v(" "),r("h2",{attrs:{id:"fasttest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fasttest"}},[e._v("#")]),e._v(" FastTest, <,>")]),e._v(" "),r("p",[e._v("sort of next word embedding. Word2vec의 저자인 Mikolov 가 새롭게 들고 나온 모델로 skip-gram model에 character n-gram 을 적용하였다.")]),e._v(" "),r("p",[e._v("where = <wh, whe, her, ere, re>, "),r("where",[e._v(" 과 같이 6개 n-gram로 표현하고, 이 6개의 벡터를 모두 사용해서 context score을 구하고 이들을 모두 더함으로써 유사도를 구한다.")])],1)])}),[],!1,null,null,null);a.default=o.exports}}]);