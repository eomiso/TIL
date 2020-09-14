(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{346:function(e,r,o){"use strict";o.r(r);var t=o(20),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"sparkfun-edge-프로젝트-1주차"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sparkfun-edge-프로젝트-1주차"}},[e._v("#")]),e._v(" Sparkfun Edge 프로젝트 1주차")]),e._v(" "),o("h2",{attrs:{id:"reference"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/programming-the-sparkfun-edge-with-arduino/all",target:"_blank",rel:"noopener noreferrer"}},[e._v("AI - tutorials for sparkfun"),o("OutboundLink")],1),e._v(" : But the examples in the github provided by the webpage is deprecated, had to use Tensorflow examples from the "),o("a",{attrs:{href:"https://github.com/tensorflow/tensorflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("tensorflow github"),o("OutboundLink")],1),e._v(" under lite/micro/examples.")]),e._v(" "),o("h2",{attrs:{id:"upload-sequence"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-sequence"}},[e._v("#")]),e._v(" Upload Sequence")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("아두이노 ide 로는 안됨")]),e._v(" "),o("p",[e._v("Power Up > Run mode(whatever file has been uploaded) > "),o("code",[e._v("bootloader mode")]),e._v("(to upload sothing new).")]),e._v(" "),o("ul",[o("li",[e._v("To get into a bootloader mode. Read "),o("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/programming-the-sparkfun-edge-with-arduino/all",target:"_blank",rel:"noopener noreferrer"}},[e._v("this - Upload a Sequence"),o("OutboundLink")],1)])])]),e._v(" "),o("p",[e._v("[Person detection Example]\nThe "),o("strong",[e._v("person detection example")]),e._v(" provided in tensorflow github can be compiled if you follow the instructions given in its README.md file. \\")]),e._v(" "),o("p",[e._v("[Other personal codes] "),o("br"),e._v("\nHowever if you'd like to compile and bootload your own code, you need to make use of "),o("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/using-sparkfun-edge-board-with-ambiq-apollo3-sdk/all",target:"_blank",rel:"noopener noreferrer"}},[e._v("ambiq_apollo3 SDK"),o("OutboundLink")],1),e._v("."),o("br"),e._v("\nYou can download it from the linked above, but you need to follow the instructions carefully since you need to install "),o("code",[e._v("arm-none-eabi-gcc")]),e._v(", and construct the "),o("em",[e._v("directory path")]),e._v(" carefully. \\")]),e._v(" "),o("p",[e._v("You'll find an "),o("code",[e._v("examples")]),e._v(" folder inside the newly installed sdk folder. There is a folder with templates. With that you can formulate your own code, then compile and upload to your Edge device with the help of "),o("code",[e._v("Makefile")]),e._v(" in the "),o("code",[e._v("gcc")]),e._v(" folder. "),o("br"),e._v("\nWhen I was trying to test this with my own code I had some problems compiling. I had to fix a few lines in the "),o("code",[e._v("Makefile")]),e._v(" to make it work.")]),e._v(" "),o("p",[e._v("If your main.c file is compilable, then you should be able to upload your binary files with "),o("code",[e._v("make bootloader")]),e._v(" under the "),o("code",[e._v("gcc")]),e._v(" folder")]),e._v(" "),o("h2",{attrs:{id:"installing-driver"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-driver"}},[e._v("#")]),e._v(" Installing Driver")]),e._v(" "),o("p",[e._v("You need to install CH34x driver. I'm using Gentoo, and I downloaded the driver from here and it worked "),o("a",{attrs:{href:"https://github.com/juliagoda/CH341SER",target:"_blank",rel:"noopener noreferrer"}},[e._v("fine"),o("OutboundLink")],1),e._v("."),o("br"),e._v("\nThe code to type in is as following:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make clean\nmake\nsudo make load\nsudo rmmod ch341\nlsmod | grep ch34\n")])])]),o("h2",{attrs:{id:"handling-the-device-to-upload-your-binary-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#handling-the-device-to-upload-your-binary-files"}},[e._v("#")]),e._v(" Handling the device to upload your binary files.")]),e._v(" "),o("ul",[o("li",[e._v("You need to plug out the usb, and make sure that "),o("code",[e._v("ch34x, ch341")]),e._v(" are both loaded while your Edge is not connected. Then remove ch341.")]),e._v(" "),o("li",[e._v("rst(hold) -> 14(hold) -> rst(remove your finger) -> 14(remove your finger)")]),e._v(" "),o("li",[e._v("if this doesn't work then 14(hold) -> rst( hold for 5~8 sec ) -> while holding 14 with rst try compiling and uploading with that.")]),e._v(" "),o("li",[e._v("꼭 usb를 뺀 상태에서 "),o("code",[e._v("ch34x, ch341")]),e._v(" 드라이버를 모두 올린 후에, ch341을 빼줘야 한다. 또는 usb를 꼽았다가 뺀 후에(그러면 usb를 꼽기 전에 ch341 드라이버를 내렷더라도, 다시 올라가 있는 것을 확인할 수 있다).")]),e._v(" "),o("li",[e._v("정리하면 (1) "),o("code",[e._v("ch34x, ch341")]),e._v("가 모두 올라가 있고, (2) usb가 꼽혀있지 않은 상태에서, (2) "),o("code",[e._v("ch341")]),e._v("을 내려주고 (3) 그 후에 usb를 꼽아야 된다, (4) 그리고 업로드에 앞서 rst -> 14 -> rst버튼 손 떼기 -> 14 번 손을 떼서 기기를 리셋(?) 해준다.")]),e._v(" "),o("li",[e._v("이게 안되면 14 (계속 누른다) -> rst 약 5~8초정도 꾹 누른다 -> 14는 계속 누른 상태로 업로드를 한다.")]),e._v(" "),o("li",[e._v("이렇게 해야만 upload가 된다... 하지만 단순 시리얼 연결은 이렇게까지 하지 않아도 e된다(echo)")]),e._v(" "),o("li",[e._v("하지만 이렇게 하더라도 여전히 아두이노를 이용한 업로드는 되지 않는다...")])]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"bellow-should-be-removed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bellow-should-be-removed"}},[e._v("#")]),e._v(" Bellow should be removed")]),e._v(" "),o("h2",{attrs:{id:"문제점-1-bootloader-단계로-진입이-안됨-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#문제점-1-bootloader-단계로-진입이-안됨-1"}},[e._v("#")]),e._v(" 문제점 1: bootloader 단계로 진입이 안됨 "),o("sup",[o("a",{attrs:{href:"#footnote1"}},[e._v("1")])])]),e._v(" "),o("p",[e._v("[Error when using SVL bootloader]"),o("br"),e._v(" "),o("img",{attrs:{src:"https://i.imgur.com/G4w086r.png",alt:"error message:Sparkfun Variable Loader"}})]),e._v(" "),o("p",[e._v("[Error when using Ambique Secure Bootloader] "),o("br"),e._v(" "),o("img",{attrs:{src:"https://i.imgur.com/zEP6GUo.png",alt:"error message:Ambique Secure Bootloader"}})]),e._v(" "),o("p",[o("strong",[e._v("[시도해본 것들]")]),e._v(" "),o("br"),e._v("\n(1) Gentoo "),o("br"),e._v("\ndriver 새로설치 (CH341SER) : CH340 Linux 버전은 "),o("code",[e._v("time pending(?)")]),e._v(" 에러가 나서 ARCH Linux 버전 용 driver 설치 "),o("br"),e._v("\nboards manager 최신 및 낮은 버전 모두 사용. "),o("br"),e._v("\ntensorflow-lite 최신 및 낮은 버전 모두 사용.")]),e._v(" "),o("p",[e._v("(2) MAC "),o("br"),e._v("\ndriver 새로 설치 (CH341SER 맥용 버전) "),o("br"),e._v("\napollo3 boards manager 최신 버전 사용 "),o("br"),e._v("\napollo3 boards manager 낮은 버전 사용")]),e._v(" "),o("p",[e._v("(3) Windows "),o("br"),e._v("\nboards manager 최신 및 낮은 버전 모두 사용 "),o("br"),e._v("\ntensorflow 최신 및 낮은 버전 모두 사용")]),e._v(" "),o("p",[e._v("(4) local echo test : 되는 것 확인 "),o("br"),e._v(" "),o("img",{attrs:{src:"https://i.imgur.com/tvm6Fbq.png",alt:"putty 연결 사진"}}),e._v(" "),o("a",{attrs:{href:"https://stackoverflow.com/a/4999313/11793236",target:"_blank",rel:"noopener noreferrer"}},[e._v("putty에서 local echo 확인하기"),o("OutboundLink")],1)]),e._v(" "),o("blockquote",[o("p",[e._v("추정하기로, bootloader가 corrupt 한 것 같다???.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://forum.sparkfun.com/viewtopic.php?f=169&t=52896",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sparkfun Forum - Uploads Don't work anymore"),o("OutboundLink")],1),e._v(" "),o("br"),e._v(" "),o("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/sparkfun-troubleshooting-tips?_ga=2.32352445.26444199.1548087168-1358775963.1528127798",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun Troubleshooting Tips"),o("OutboundLink")],1),e._v(" "),o("br"),e._v(" "),o("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/installing-an-arduino-bootloader",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installing an arduino bootloader"),o("OutboundLink")],1),e._v(" "),o("br"),e._v(" "),o("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reset to Bootloader - Pro Micro & Fio V3 Hookup Guide"),o("OutboundLink")],1)])]),e._v(" "),o("blockquote",[o("p",[e._v("[2020.Aug.5] 결과적으로 bootloader의 문제는 아니었다. sdk 로 직접 컴파일(make)를 해서 올리면 돌아간다.")])]),e._v(" "),o("hr"),e._v(" "),o("p",[o("a",{attrs:{name:"footnote1"}},[e._v("1.")]),e._v(" 현재 "),o("a",{attrs:{href:"https://stackoverflow.com/questions/63213634/sparkfun-edge-bootloader-problem-not-working",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stackoverflow"),o("OutboundLink")],1),e._v("에 질문 올린 상태."),o("br"),e._v("\n안되면 "),o("a",{attrs:{href:"https://forum.sparkfun.com/viewforum.php?f=153",target:"_blank",rel:"noopener noreferrer"}},[e._v("이곳-Sparkfun Forum"),o("OutboundLink")],1),e._v("에 질문 올릴 예정")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"arduino-ide-upload-문제-해결-방안-직접-컴파일을-하자"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arduino-ide-upload-문제-해결-방안-직접-컴파일을-하자"}},[e._v("#")]),e._v(" Arduino IDE upload 문제 해결 방안: 직접 컴파일을 하자.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/using-sparkfun-edge-board-with-ambiq-apollo3-sdk/all",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ambiq SDK와 compiler를 직접 설치해서 사용하자"),o("OutboundLink")],1),o("br"),e._v("\n경로 설정에 매우, 매우 유의해야 한다.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("질문")]),e._v(" "),o("p",[e._v("시스템 프로그래밍을 잘 모른다...\n왜 각 폴더 계층마다 Makefile이 있는거지?")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v(".d 파일이 뭐지? : "),o("a",{attrs:{href:"https://stackoverflow.com/a/19114663/11793236",target:"_blank",rel:"noopener noreferrer"}},[e._v("설명"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("위에서 알려준 방식대로 진행해보면 example1 은 잘 되는 것을 확인할 수 있었다.")])]),e._v(" "),o("li",[o("p",[e._v("examples 디렉터리에 보면 sparkfun project의 템플릿이 있는데 이것을 이용해서 다른 개인 프로젝트를 만들 수 있다(복사하자). 그런데 여기 있는 Makefile 그대로 이용하면 역시나 에러가 난다. 코드를 2줄 고치고 나니 컴파일이 가능해 졌는데, 또 업로드(bootload 전송)이 안되었던 상황까지 겹쳐서 약 4시간? 정도 노동해서 찾아냈다. 그래서 makefile은 여기 안올릴거다.")])]),e._v(" "),o("li",[o("p",[e._v("putty로 local echo를 확인할 때 terminal option을 수정해 줘야한다. 자세한 내용은 구글링 ㄱ")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("lsmod | grep ch34\nsudo rmmod ch341\n\n")])])]),o("h2",{attrs:{id:"dictionary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dictionary"}},[e._v("#")]),e._v(" Dictionary")]),e._v(" "),o("p",[e._v("GPIO : General Perpose Input/Output "),o("a",{attrs:{href:"https://techterms.com/definition/gpio#:~:text=Terms%20%3A%20GPIO%20Definition-,GPIO,can%20be%20controlled%20by%20software.",target:"_blank",rel:"noopener noreferrer"}},[e._v("TECHTERMS"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("accelerometer : a mall-device made up of axis-based motion sensing")]),e._v(" "),o("p",[e._v("MISO, MOSI")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code")])])])}),[],!1,null,null,null);r.default=a.exports}}]);