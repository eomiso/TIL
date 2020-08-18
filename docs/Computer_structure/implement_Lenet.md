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

`tensorflow/lite/chema/shema_generated.h` : `tflite::GetModel(bin`
`tensorflow/lite/micro/micro_interpreter.h` : `tflite::MicroInterpreter`




## LeNet5 구현하기



## 찾아봤던 Reference들

[Training a model-Tensorflow github](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/lite/micro/examples/person_detection/training_a_model.md)
