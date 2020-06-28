# * operator : python unpacking

Sadly our memories always seems to fail us. I have come across a code that I was famliar with but wasn't sure what its operation was. It was the `*` operator.

The `*` is basically used as a multiplication operator, but when used in front of an argument it works as an __unpacking__. 

My knowledge for other languages are trivial yet, so I'm not sure if there is any other operation overload in other programming languages as well such as C++, Java, Ruby. (May be in Ruby? Considering its similarity with Python?)

Anyway Lets get to the point.


## List / Tuple Unpacking
Here's an example.
```python
def getInfo(name, age, address):
	print(name)
	print(age)
	print(address)

x = ('eomiso', 25, 'Seoul')
getInfo(*x)
```
```
eomiso
25
Seoul
```
The with * the list or tuple gets unpacked and works exactly the same as `getInfo('eomiso',25,'address')` .


## Dictionary Unpacking
Let's see an example.
```python
def getInfo(name, age, address):
	print('name: ', name)
	print('age: ', age)
	print('address: ', address)

x = {'name': 'eomiso', 'age': 25, 'address': 'Seoul'}
getInfo(**x)
```
The result would be as below.
```
name: eomiso
age: 25
address: Seoul
```

::: danger
The keys of a dictionary that is used as a argument should be __strings__.
:::

::: warning What happens if you use * instead?
A single asterisk on a dictionary wouldn't cause an error, but you wouldn't get the result you wanted. With singular asterisk you get the __keys__ of the dictionary instead of the values.
:::

## Some useful application
1. For placement arguments
```python
def getInfo(*args):
	for arg in args:
		print(arg)
```

2. For keyword arguments
```python
def getInfo(**kwargs):
	for k,args in kwargs.items(): #don't forget the arguments!
		print(k, ': ', arg, sep=' ')
```

::: warning
as you can see in `print(k, ': ', arg, sep = ' ' )` from above, you can see the placement arguments should come before the keyword arguments. Or else it would throw a `syntax Error`
:::
