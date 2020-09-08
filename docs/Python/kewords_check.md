# 파이썬 **kwargs 에서 특정 키워드 존재여부 확인하기

[예시]

```py
class ReversibleField(Field):
    def __init__(self, **kwargs):
        warnings.warn('{} class will be retired in the 0.8.0 release and moved to torchtext.legacy. Please see 0.7.0 release notes for further information.'.format(self.__class__.__name__), UserWarning)
        if kwargs.get('tokenize') is list:
            self.use_revtok = False
        else:
            self.use_revtok = True
        if kwargs.get('tokenize') is None:
            kwargs['tokenize'] = 'revtok'
        if 'unk_token' not in kwargs:
            kwargs['unk_token'] = ' UNK '
        super(ReversibleField, self).__init__(**kwargs)
```

위의 예시에서 처럼, `kwargs.get('<key_word>')` 를 이용해서 특정 키워드가 들어있는지 안들어 있는지 확인할 수 있다. \
그냥 `<key_word>.istype(list)` 이런 식으로 했으면 해당 키워드가 argument로 주어지지 않았을 때, NotFound 종류의 에러가 날 것이다.