# Style Transfer from Non-Parallel Text by Cross-Alignment 리뷰

## 질문
align 한다는게 정확히 무슨 뜻인가?\
논문에서는 $X_1$ 이 $\tilde{X_1}$ 으로 style transfer 한 다음 $X_2$ 과 distributional level에서 align 된다는데 이게 정확히 무슨 뜻인지 모르겠다. Distributional level? aligned?(확률적으로 같아야 한다는 말인가?) - p.2 상단\
다른 말로, `distributional cross-alignment` 가 무엇인가?

equation (2) 이해가 가지 않는다.

equation (5) $E(x_1, y_1) def= E(x_2, y_2)$ 가 무슨 의미인가?? 서로 같다는 뜻인가?

`aligned` 의 개념이 무엇인지 정확하게 모르겠다.

`adversarial training` 의 개념이 무엇인지도 정확하게 모르겠다.

그런데 `cross-aglinment`가 가능하려면 같은 $z$를 갖는 $x_1$ 과 $x_2$가 있지 않을까? -> 다르게 말하면, D 가 z 를 기준으로 판단하게 되지 않을까? $X_2$ 도메인에 없는 $z$ 를 가진 $\tilde{X_2}가 

---

## Hu et al 2017 질문, Mueller et al, 2017 질문
disentangled latent representation이 무슨 말인가? 그리고 controllabble attributes는 무엇을 지칭하는 말인가(hidden state?)

## CycleGAN 질문

## adversarial training 질문
* `Teacher forcing` 이 뭐였더라??


## 핵심
$z$ (content variable) 가 복잡해야 한다.
`D` 는 transfer 된 것을 구분하도록 하고, `E`와 `G` 는 구분하기 어려운 transfer를 하도록 하고

## 어디다 쓸래? (from spotlight speech)
- Towards real language understanding.
- Personalized chatbots


[From GAN to WGAN](https://lilianweng.github.io/lil-log/2017/08/20/from-GAN-to-WGAN.html) 읽어보기