# Variouse Pointer examples

포인터는 알다가도 모르겠는 것. 그렇기 때문에 꽤 색다른 예, 코드를 볼 때마다 여기 옮겨놓고 복습을 하도록 하자.

## Examples

[code from schema_generated.h: a code generated from flatbuffer]

```cpp
inline const char * const *EnumNamesSparseIndexVector() {
  static const char * const names[5] = {
    "NONE",
    "Int32Vector",
    "Uint16Vector",
    "Uint8Vector",
    nullptr
  };
  return names;
}
// returning pointer to a 1-d array.
// returning constant pointer that points to const char pointer(string_literals)
```
위 예시에서  `const char* const *names = {}` 로 배열을 선언하면 오류가 뜨는 이유.
::: details Answer
원래 포인터로 배열을 정의하는게 불가능 했던것(?) 같다. 생각해보면 메모리를 할당하고 리터럴 배열을 복사해서 넣어줘야 하는데, 포인터로 배열을 정의하려고 하면 얼마 만큼 메모리를 할당해야 하는 지 알 방법이 없다.
:::

