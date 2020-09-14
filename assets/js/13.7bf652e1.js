(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{345:function(e,t,r){"use strict";r.r(t);var o=r(20),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"urop-project-2주차"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#urop-project-2주차"}},[e._v("#")]),e._v(" UROP project 2주차")]),e._v(" "),r("h2",{attrs:{id:"tensorflow-lite의-workflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow-lite의-workflow"}},[e._v("#")]),e._v(" Tensorflow lite의 workflow")]),e._v(" "),r("p",[r("code",[e._v("*.fbs")]),e._v(" file(schema file)을 통해 model 에서 binary file 로 바꾼다("),r("code",[e._v(".tflite")]),e._v(")\n* 이 부분은 "),r("code",[e._v("TFLiteConverter pythonAPI")]),e._v("에 포함이 되어 있는 듯하다.\n* 가급적 "),r("code",[e._v("Post-training quantization")]),e._v(" 을 사용하라고 한다.")]),e._v(" "),r("p",[e._v("이렇게 해서 만들어진 "),r("code",[e._v(".tflite")]),e._v("를 "),r("code",[e._v("*.h")]),e._v(" 또는 "),r("code",[e._v("*.cc")]),e._v(" 파일로 만들어 준다("),r("code",[e._v("Convert to a C array")]),e._v(").")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("xxd -i converted_model.tflite "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" model_data.cc "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or model_data.h")]),e._v("\n")])])]),r("p",[r("code",[e._v("include/")]),e._v(" directory에 있는 header file 들을 사용하기 위해, compile 시 "),r("code",[e._v("-iquote dir")]),e._v(" 옵션을 붙여준다.")]),e._v(" "),r("p",[e._v("file structure가 굉장히 복잡하다.")]),e._v(" "),r("p",[r("code",[e._v("tensorflow/lite/chema/shema_generated.h")]),e._v(" : "),r("code",[e._v("tflite::GetModel(bin")]),e._v(" "),r("br"),e._v(" "),r("code",[e._v("tensorflow/lite/micro/micro_interpreter.h")]),e._v(" : "),r("code",[e._v("tflite::MicroInterpreter")]),e._v(" "),r("br"),e._v("\n... 등등을 조금씩 따라가 보았다.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/lite/microcontrollers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tensorflow lite - Developer workflow"),r("OutboundLink")],1),e._v(" 를 보면 위의 파일들이 tensorflow에서 제공하는 Microcontroller 용 "),r("a",{attrs:{href:"https://www.tensorflow.org/lite/microcontrollers/library",target:"_blank",rel:"noopener noreferrer"}},[e._v("C++ library"),r("OutboundLink")],1),e._v("라는 것을 확인할 수 있다.")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("파일구조")]),e._v(" "),r("p",[r("code",[e._v("tensorflow/tensorflow/lite/micro")]),e._v(" 이하")]),e._v(" "),r("p",[r("code",[e._v("all_ops_resolver.h")]),e._v(" : operations used by the interpreter to run the model\n"),r("code",[e._v("micro_mutable_op_resolver.h")]),e._v(" : pulls in only the operations your model needs.\n"),r("code",[e._v("micro_error_reporter.h")]),e._v(" : ouputs debug information\n"),r("code",[e._v("micro_interpreter.h")]),e._v(" : handle and run models")])]),e._v(" "),r("h2",{attrs:{id:"tflite-visualization-사용을-위해서-bazel-파일-수정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tflite-visualization-사용을-위해서-bazel-파일-수정"}},[e._v("#")]),e._v(" tflite visualization 사용을 위해서 bazel 파일 수정")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/grpc/grpc/pull/20048/commits/de6255941a5e1c2fb2d50e57f84e38c09f45023d",target:"_blank",rel:"noopener noreferrer"}},[e._v("visulize.py 실현"),r("OutboundLink")],1),e._v("\n29.1 version으로 빌드 성공")]),e._v(" "),r("h2",{attrs:{id:"tensorflow-lite-micro-c-library-를-이용해서-컴파일-하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow-lite-micro-c-library-를-이용해서-컴파일-하기"}},[e._v("#")]),e._v(" tensorflow lite micro c++ library 를 이용해서 컴파일 하기")]),e._v(" "),r("p",[e._v("일단 tensorflow lite c++ library의 objective file을 만들어야.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("//tensorflow 보다 상위 디렉터리에서\nmake -f tensorflow/lite/micro/tools/make/Makefile\n")])])]),r("p",[e._v("을 돌리고 나면 "),r("code",[e._v("tensorflow/lite/micro/tools/make/gen/")]),e._v(" 에 목적 파일을 모아놓은 디렉터리가 하나 새로 생성된다. 거기서 "),r("code",[e._v("lib/libtensorflow-microlite.a")]),e._v("를 링크해서 executable을 만들면 된다.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// 예를 들어 이런식..\ng++ main_functions.o tensorflow/lite/micro/tools/make/gen/linux_x86_64/libtensorflow-microlite.a\n")])])]),r("h2",{attrs:{id:"lenet5-구현하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lenet5-구현하기"}},[e._v("#")]),e._v(" LeNet5 구현하기")]),e._v(" "),r("h2",{attrs:{id:"찾아봤던-reference들"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#찾아봤던-reference들"}},[e._v("#")]),e._v(" 찾아봤던 Reference들")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/master/tensorflow/lite/micro/examples/person_detection/training_a_model.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Training a model-Tensorflow github"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);