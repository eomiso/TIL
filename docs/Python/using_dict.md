# Using __dict__ in smart way

```py
class Person:
     def __init__(self):
             self.name = "hello"
             self.age = 12
             self.sex = "male"
     def avg(self):
             self.height = 123
             self.weight = 123
```
```
fmtstr = '{name} hello {sex}'
print(fmtstr.format(**a.__dict__))
```
이런 식으로 쓸 수 있다. 메트릭 함수 등을 만들 때 유용할 듯 하다.

추가적으로 `__str__` 을 좀 잘 활용할 수도 있을 듯 하다.