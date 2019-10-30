#  assertEqual의 array version numpy.testing
10092019_TIL

`assertItemsEqual(a,b)` : Order doesn’t matter
`assertCountEqual(a,b)`  : Order doesn’t matter
`assertSequenceEqual(a,b)` : Order matters

이런 Assert 가 unittest.TestCase 안에 들어 있기는 하지만, arrays에 있어서는 잘 해결이 안된다.

```
ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()
```
![errorimage](/TIL/Python/screen_shot.png)
> 대충 이런 에러 메시지를 뱉어낸다.  

## 해결방안 1 : 직접 코드를 짜서 두 Array 간에 일치 여부를 판단한다.

```py
@staticmethod
def check_identical_array(array1,array2):
"""
checkiftwoarraysareidentical
"""
for element1,element2 in zip(np.squeeze(array1),np.squeeze(array2)): 
#2-dimensionalarrayvector([[1,2,3]])->1-dimensional([1,2,3])
    if element1 != element2:
         return False
         return True

```

## 해결방안 2: Numpy의 Test Support를 사용하기
[Test Support (numpy.testing)](https://docs.scipy.org/doc/numpy/reference/routines.testing.html)

그래서 구글링을 하다보니 `numpy.testing`이라는 라이브러리를 알게 되었다. numpy안에 포함된 Assert들의 모음집인데, 테스트를 통과하지 못하는 경우에는 `AssertionError`를 일으킨다.

1.39770684 로 화면에 나타나는 값이 실제로는 1.3977068363854122 이어서 테스트를 통과하지 못하는 경우가 있다. 이런 경우에는 `assert_Almost_Equal`을 사용해보자.


#Oct2019
#python
