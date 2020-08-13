# Extern 키워드(with examples)

extern 키워드는 잘 활용할 일이 없다보니 항상 사용할 때마다 다시 찾아보게 된다. 그래서 정리하는 포스트

## 사용대상
C variables(data objects), C functions
```cpp
extern int foo(int arg1, int arg2);
extern int var;
```

## 효과
`extern` extends the the function's visibility to the whole program, the function can be used (called) anywhere in any of the files of the whole program.

`extern` 이라는 키워드를 보고 컴파일러는 이 프로그램 어딘가에 해당 함수 또는 변수의 정의가 있다는 것을 알 수 있다.

::: warning Implicit extern
```cpp
int var; //no implicit extern (this is declaration and definition)
int foo(int arg1, int arg2); //implicit extern (this is declaration only)
```
:::
위와 같이 함수가 선언/정의 되어 있을 때 컴파일러는 앞에 `extern`이 붙어 있을 것이라고 당연히 가정한다.

## examples

```cpp
int var;
int main(void)
{
    var = 10;
    return 0;
}
```

```cpp
extern int var; // Throws an error because var is not defined anywhere
int main(void)
{
    var = 10;
    return 0;
}
```
```cpp
extern int var; // Doesn't throw an error because var is not used
int main(void)
{
    //var = 10;
    return 0;
}
```

```cpp
#include "var.h" // var is defined in var.h
extern int var;  // Doesn't throw an error
int main(void)
{
    var = 10;
    return 0;
}
```

## Question

* if var is defined in `var.c` instead of `var.h` would it throw an error?

    [Answer]: No, but yes if you compile `var.c` with `main.c`(This is a bit obvious)

```cpp
//main.c
#include "var.h"

extern int var;

int main(void)
{
    var = 10;
    return 0;
}
```

```cpp
//var.h
#include <stdio.h>

int var; // Don't forget this is definition and declaration
int foo(int arg1, int arg2);
```

```cpp
//var.c
#include "var.h"
//int var = 0; // if this is uncommented then gcc main.c var.c would not throw error
int foo(int arg1, int arg2)
{
    return arg1+arg2;
}
```

**[Reference]**
[GeekForGeeks-Extern](https://www.geeksforgeeks.org/understanding-extern-keyword-in-c/)
