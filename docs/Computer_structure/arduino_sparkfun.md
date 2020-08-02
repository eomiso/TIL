# Sparkfun Edge 프로젝트 1주차

## Reference

[AI - tutorials for sparkfun](https://learn.sparkfun.com/tutorials/programming-the-sparkfun-edge-with-arduino/all) : 그런데 여기서 제공된 깃헙 코드는 deprecated 되어서 aruino tensorflow-lite library 폴더에 들어있는 examples file 들로 진행하였다.


## The Upload Sequence

::: details Default
Power Up > Run mode(whatever file has been uploaded) > `bootloader mode`(to upload sothing new).
  * To get into a bootloader mode. Read [this - Upload a Sequence](https://learn.sparkfun.com/tutorials/programming-the-sparkfun-edge-with-arduino/all)

:::

---

## 문제점 1: bootloader 단계로 진입이 안됨 <sup>[1](#footnote1)</sub>
[Error when using SVL bootloader] \
![error message:Sparkfun Variable Loader](https://i.imgur.com/G4w086r.png)

[Error when using Ambique Secure Bootloader] \
![error message:Ambique Secure Bootloader](https://i.imgur.com/zEP6GUo.png)

**[시도해본 것들]** \
(1) Gentoo \
driver 새로설치 (CH341SER) : CH340 Linux 버전은 `time pending(?)` 에러가 나서 ARCH Linux 버전 용 driver 설치 \
boards manager 최신 및 낮은 버전 모두 사용. \
tensorflow-lite 최신 및 낮은 버전 모두 사용. \

(2) MAC \
driver 새로 설치 (CH341SER 맥용 버전) \
apollo3 boards manager 최신 버전 사용 \
apollo3 boards manager 낮은 버전 사용 \

(3) Windows \
boards manager 최신 및 낮은 버전 모두 사용 \
tensorflow 최신 및 낮은 버전 모두 사용 \

(4) local echo test : 되는 것 확인 \
![putty 연결 사진](https://i.imgur.com/tvm6Fbq.png)


> 추정하기로, bootloader가 corrupt 한 것 같다???. \ 
> [Sparkfun Forum - Uploads Don't work anymore](https://forum.sparkfun.com/viewtopic.php?f=169&t=52896) \
> [SparkFun Troubleshooting Tips](https://learn.sparkfun.com/tutorials/sparkfun-troubleshooting-tips?_ga=2.32352445.26444199.1548087168-1358775963.1528127798) \
> [Installing an arduino bootloader](https://learn.sparkfun.com/tutorials/installing-an-arduino-bootloader) \
> [Reset to Bootloader - Pro Micro & Fio V3 Hookup Guide](https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset)

---

<a name="footnote1">1.</a> 현재 [Stackoverflow](https://stackoverflow.com/questions/63213634/sparkfun-edge-bootloader-problem-not-working)에 질문 올린 상태. \ 안되면 [이곳-Sparkfun Forum](https://forum.sparkfun.com/viewforum.php?f=153)에 질문 올릴 예정