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
tensorflow-lite 최신 및 낮은 버전 모두 사용. 

(2) MAC \
driver 새로 설치 (CH341SER 맥용 버전) \
apollo3 boards manager 최신 버전 사용 \
apollo3 boards manager 낮은 버전 사용 

(3) Windows \
boards manager 최신 및 낮은 버전 모두 사용 \
tensorflow 최신 및 낮은 버전 모두 사용 

(4) local echo test : 되는 것 확인 \
![putty 연결 사진](https://i.imgur.com/tvm6Fbq.png)
[putty에서 local echo 확인하기](https://stackoverflow.com/a/4999313/11793236)


> 추정하기로, bootloader가 corrupt 한 것 같다???. 
> 
> [Sparkfun Forum - Uploads Don't work anymore](https://forum.sparkfun.com/viewtopic.php?f=169&t=52896) \
> [SparkFun Troubleshooting Tips](https://learn.sparkfun.com/tutorials/sparkfun-troubleshooting-tips?_ga=2.32352445.26444199.1548087168-1358775963.1528127798) \
> [Installing an arduino bootloader](https://learn.sparkfun.com/tutorials/installing-an-arduino-bootloader) \
> [Reset to Bootloader - Pro Micro & Fio V3 Hookup Guide](https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset)

> [2020.Aug.5] 결과적으로 bootloader의 문제는 아니었다. sdk 로 직접 컴파일(make)를 해서 올리면 돌아간다.

---

<a name="footnote1">1.</a> 현재 [Stackoverflow](https://stackoverflow.com/questions/63213634/sparkfun-edge-bootloader-problem-not-working)에 질문 올린 상태.\
안되면 [이곳-Sparkfun Forum](https://forum.sparkfun.com/viewforum.php?f=153)에 질문 올릴 예정

---

## 문제해결(Person-detection에 대하여)
* ch341SER 드라이버를 설치하면(load) `ch34x, ch431` 가 모두 설치되어 있는 것을 확인할 수 있는데(`lsmod | grep ch34`로 확인)\ 보드를 연결하지 않은 상태에서 `ch341`을 내려줘야 한다(`sudo rmmod ch341`)\ 
* 꼭 usb를 뺀 상태에서 `ch34x, ch341` 드라이버를 모두 올린 후에, ch341을 빼줘야 한다. 또는 usb를 꼽았다가 뺀 후에(그러면 usb를 꼽기 전에 ch341 드라이버를 내렷더라도, 다시 올라가 있는 것을 확인할 수 있다). 
* 정리하면 (1) `ch34x, ch341`가 모두 올라가 있고, (2) usb가 꼽혀있지 않은 상태에서, (2) `ch341`을 내려주고 (3) 그 후에 usb를 꼽아야 된다, (4) 그리고 업로드에 앞서 rst -> 14 -> rst버튼 손 떼기 -> 14 번 손을 떼서 기기를 리셋(?) 해준다.
* 이게 안되면 14 (계속 누른다) -> rst 약 5~8초정도 꾹 누른다 -> 14는 계속 누른 상태로 업로드를 한다.
* 이렇게 해야만 upload가 된다... 하지만 단순 시리얼 연결은 이렇게까지 하지 않아도 
* 하지만 이렇게 하더라도 여전히 아두이노를 이용한 업로드는 되지 않는다... 
* 직접 Ambiq SDK 를 사용해서 compile을 해줘야한다. [여기](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples/person_detection#running-on-sparkfun-edge)



## Arduino IDE upload 문제 해결 방안: 직접 컴파일을 하자.

[Ambiq SDK와 compiler를 직접 설치해서 사용하자](https://learn.sparkfun.com/tutorials/using-sparkfun-edge-board-with-ambiq-apollo3-sdk/all)\
경로 설정에 매우, 매우 유의해야 한다.


::: warning 질문
시스템 프로그래밍을 잘 모른다...
왜 각 폴더 계층마다 Makefile이 있는거지?
:::

* .d 파일이 뭐지? : [설명](https://stackoverflow.com/a/19114663/11793236)

* 위에서 알려준 방식대로 진행해보면 example1 은 잘 되는 것을 확인할 수 있었다.
* examples 디렉터리에 보면 sparkfun project의 템플릿이 있는데 이것을 이용해서 다른 개인 프로젝트를 만들 수 있다(복사하자). 그런데 여기 있는 Makefile 그대로 이용하면 역시나 에러가 난다. 코드를 2줄 고치고 나니 컴파일이 가능해 졌는데, 또 업로드(bootload 전송)이 안되었던 상황까지 겹쳐서 약 4시간? 정도 노동해서 찾아냈다. 그래서 makefile은 여기 안올릴거다. 

* putty로 local echo를 확인할 때 terminal option을 수정해 줘야한다. 자세한 내용은 구글링 ㄱ

```
lsmod | grep ch34
sudo rmmod ch341

```

## Dictionary

GPIO : General Perpose Input/Output [TECHTERMS](https://techterms.com/definition/gpio#:~:text=Terms%20%3A%20GPIO%20Definition-,GPIO,can%20be%20controlled%20by%20software.)

accelerometer : a mall-device made up of axis-based motion sensing

MISO, MOSI

```