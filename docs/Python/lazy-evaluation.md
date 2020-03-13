# Lazy Evaluation과 Generator

## Generator
파이썬에서 사용되는 Generator를 이해하기 위해서는 우선 iterator에 대한 지식이 필요하다.
다음에 iterator에 대해서도 글을 쓰겠지만, 형태적인 차원에서 설명하자면 `__iter__`와 `__next__` 를 메소드로 가지고 있으면서, 호출된 후의 상태(state)를 저장하고 있다가 더 이상 내보낼 값이 없을 때 `StopIteration` 예외를 일으키는 클래스를 iterator라고 부른다.

듣기 만해도 복잡해 보인다. ㅡㅡ;

이렇듯 복잡한 iterator를 보다 쉽게 생성해주는 것이 바로 __Generator__ 이다. 제네레이터를 통해 앞에서 언급한 기능과 메소드를 자동적으로 구현할 수 있는 것이다.

### Generator를 생성하는 방법
제네레이터를 생성하는 방법은 매우 간단하다. 그냥 함수에서 `return` 대신에 `yield`를 써주면 된다.

:::tip
함수에 yield statement가 한 개 이상 있으면 Generator라고 부른다. 
:::

이 부분 때문에 Generator는 yield가 들어 있는 함수라고 이해하고 있는 사람들도 있다. 틀린말은 아니지만 정확히는 yield 는 iterator가 갖고 있는 여러 기능들을 보다 쉽게 구현해주록 파이썬에 내장된 statement이고 이를 통해서 간단하게 제네레이터를 만들 수 있다는 표현이 맞겠다(~~그리고 그렇게 간단하게 생성된 제네레이터를 통해서 iterator를 만들 수 있는 것, 그게 그말인가??~~)

```python
def num_generator(n):
    while n>0:
        yield n
        n -= 1
    return 'Error Message goes here'

a = num_generator(3)
```

결과
```
>>> a.__next__()
>>> 3
>>> a.__next__()
>>> 2
>>> a.__next__()
>>> 1
>>> a.__next__()
>>> StopIteration: Error Message goes here
```

그래서 최종적으로 정리하자면 제네레이터는 다음과 같은 특징을 가지고 있다.
* 한 개 이상의 yield statement를 갖는다.
* 호출 되었을 때 iterator를 반환한다.
* `__iter__()` `__next__()` 같은 함수들이 자동적으로 적용되어, `<generator>.__next__()` 와 같이 사용가능하다.
* 제네레이터가 yield를 실행한 후에는 control을 caller에게 넘긴다. 즉 실행을 잠시 멈춘다.
* 이 때 제네레이터 내부의 지역변수(local variable)들과 그 값들이 다시 호출 되기 전까지 기억되어 있다. -> 이게 어떻게 가능한 건지는 좀더 전체적인 아키텍쳐를 알게 되었을 때 설명할 수 있을 듯하다.
* 그리고 함수가 실행을 마치면 `StopIteration` 예외가 발생한다.

## Lazy-evaluation(느긋한 계산법)
자 이제 제네레이터에 대해 어느정도 알아 보았으니, 제네레이터와 관련하여 알아두어야할 개념인 __Lazy-evaluation__ 에 대해 알아보자. __Lazy-evaluation__ 은 제네레이터의 특징 중 4번째 특징과 관련된다.

왜 Lazy 하다고 하느냐? yield를 하기 전에 계산을 완료해 놓지 않기 때문이다. 가령 위의 예시 코드에서 for 문은 한 번에 다 돌지 않고 `a.__next__()` 가 호출될 때만 돌게 된다. 만약에 일반적인 함수였다면 for 문은 한번에 다 돌았을 것이다. 

이 차이는 `[i for i in range(i)]` 와 `(i for i in range(i))`의 차이를 통해 확인할 수 있다. 
전자는 한번에 생성되는 리스트지만 후자는 호출될 때마다 for 문이 한 단계씩 진행되면서 i를 반환하는 제네레이터이다.

::: warning 
그래서 어떤 함수의 실행 시간을 측정할 때 만약에 그 함수가 제네레이터라면 측정된 결과가 그 함수에 적용된 알고리즘 고유의 수행시간(시간복잡도)가 아닐 수 있다. Lazy-Evaluation이 적용되기 때문이다.
:::

## 추가 질문
제네레이터와 이터레이터, 그리고 코루틴 모두 실행 중에 호출자에게 control을 넘기는 특징을 가지고 있다. 이때 피호출자의 지역변수와 그 값들이 남아 있는데 이게 어떻게 가능한 것인지 궁금하다. 아마 파이썬이라는 언어의 전체적인 아키텍쳐를 이해할 수 있을 때 설명할 수 있을 것 같다.
