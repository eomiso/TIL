# Python Daya Handling

## 1. File I/O
### Reading line by line
```py
with open("<file_name>", "r") as f:
    line = None
    while line != '': # you can see that None and empty string is different in python
        line = f.readline()
        # DO semething with line

# the readline returns empty string when EOF.
```
`with` control-flow에 대한 설명<sup>[1](#footnote1)</sup>

> file I/O 에 관한 내용은 다른 파일에서 <sup>[2](#footnote2)</sup>
>   - 마지막 줄만 읽어오기 : cursur(?) 위치 제어 방법
>   - 읽어온 줄 가운데에다가 단어 집어넣기
>   - regex를 이용해서 파일 내용 substitude하기 -> shell로 하는 방법은?
> 

## 2. Pandas
### Pandas: I/O
_[Easy ways]_
* `pandas.read_csv(filepath or buffer, sep ='\t')`
* `pandas.read_table(filepath or buffer)`
> don't forget about the `header = None` if you don't have header
* `pandas.to_csv(filepath, sep='\t', index = False)

### Pandas: adding labels.
Read the lines as buffer.
add a column
\<code\>
```py
x = pd.Series([label]*len(data))
df[1] = x
```
>   - 끝에 column이 아니라 가운데 넣고 싶으면 어떻게 할래?

### Pandas: adding two files

```py
concated = pd.concat([df1, df2]. ignore_index=True) # false 해도 됨. 그러면 그냥 각각의 index가 살아 있을 뿐이다.
```


<a name="footnote1">1.</a>
<a name="footnote2">2.</a> 항상 이렇게 일종의 과제를 스스로 부여해 놓자. 하나하나 해결하다 보면 실력이 늘겠지