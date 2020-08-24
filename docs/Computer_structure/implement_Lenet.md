# UROP project 2주차

## Tensorflow lite의 workflow

`*.fbs` file(schema file)을 통해 model 에서 binary file 로 바꾼다(`.tflite`)
    * 이 부분은 `TFLiteConverter pythonAPI`에 포함이 되어 있는 듯하다.
    * 가급적 `Post-training quantization` 을 사용하라고 한다.



이렇게 해서 만들어진 `.tflite`를 `*.h` 또는 `*.cc` 파일로 만들어 준다(`Convert to a C array`).
```bash
xxd -i converted_model.tflite > model_data.cc # or model_data.h
```

`include/` directory에 있는 header file 들을 사용하기 위해, compile 시 `-iquote dir` 옵션을 붙여준다.


file structure가 굉장히 복잡하다.

`tensorflow/lite/chema/shema_generated.h` : `tflite::GetModel(bin` \
`tensorflow/lite/micro/micro_interpreter.h` : `tflite::MicroInterpreter` \
... 등등을 조금씩 따라가 보았다.

[Tensorflow lite - Developer workflow](https://www.tensorflow.org/lite/microcontrollers) 를 보면 위의 파일들이 tensorflow에서 제공하는 Microcontroller 용 [C++ library](https://www.tensorflow.org/lite/microcontrollers/library)라는 것을 확인할 수 있다.

::: details 파일구조
`tensorflow/tensorflow/lite/micro` 이하

`all_ops_resolver.h` : operations used by the interpreter to run the model
`micro_mutable_op_resolver.h` : pulls in only the operations your model needs.
`micro_error_reporter.h` : ouputs debug information
`micro_interpreter.h` : handle and run models



:::


## LeNet5 구현하기



## 찾아봤던 Reference들

[Training a model-Tensorflow github](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/lite/micro/examples/person_detection/training_a_model.md)
