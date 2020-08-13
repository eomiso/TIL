# Usage of underscores in Python
## Single underscore before a variable (leading underscore)
Underscore in front of a variable/method means that they are __private__. Therefore they are to be used inside the class only.

With `from import *`, all that has a leading underscore will __not import__. 

::: warning
But they can be imported if the classname is specified after the `import <class_name>`.  
They are called __Weak Private__ for this reason
:::

## Double underscore before a variable (leading double underscore)
A leading double underscore tells the interpreter to rewrite name in order to avoid conflict in subclass.

I have seen that in some books, leading double underscore is introduced as a way to make an attribute/method private(just like leading single underscore).  But I’m not sure if this is accepted as a convention or if it’s just a matter of a style

::: details Name Mangling
A technique used to solve various problems caused by conflicting names for various programming entities.

It provides a way of encoding more information in the name of a function, structure, or another datatype. This makes it possible to pass more semantic informations from the compilers to the linkers.

**related topics** : comiler
:::

```bash
>>> class Test(object):
...    def __mangled_name(self):
...        pass
...    def normal_name(self):
...        pass
>>>t = Test()
>>>[attr for attr in dir(t) if 'name' in attr]
['_Test__mangled_name', 'normal_name']
```


## Single underscore after a variable (trailing underscore)
No semantics are associated with a trailing underscore. According to  [PEP 8](https://www.python.org/dev/peps/pep-0008/#descriptive-naming-styles) , the style guide for Python, users are urged to use trailing underscores in order to not conflict with Python keywords and/or Python built-ins:

> Use for name conflicting situations!!  

## Double underscore before a variable (trailing double underscore
This doesn’t have a specific usage

## Module level “dunders” : __name__
dunders is an abbreviations for __D__ouble __Under__score. This kind of representation is used to make a __magic method__. e.g. `__abs__, __add__, __name__, __new__, etc`

__Magic method__ will be discussed in a later post. For now understanding it as a sort of operation overload for built-in operations.


#python
