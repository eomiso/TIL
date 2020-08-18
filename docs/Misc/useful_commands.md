# Useful commands collection

1. Shell
2. Docker
3. Git
4. gcc/g++



## Shell

### 이하 directory 중에서 파일 및 폴더 찾기

```bash
find $HOME -type d -name "<dir_name>"
find $HOME -type f -name "<file_name>"
```

* `-iname` for case insensitive search
* `2>/dev/null` at the end to avoid messages.(not have permission to read...)

`locate` can also be used


### 특정한 string of text를 가지고 있는 파일 찾기

```bash
grep -rnw '/path/to/somewhere/' -e 'pattern'
```
* `-r`, `-R` are recursive, but `-R` traverse the entire tree correctly while `-r` is depth first and stop with first search
* `-i` for ignoring case
* `-n` is line number
* `-w` match the whole word
* `-l` just give the file name of matching files
* also `

[Reference](https://stackoverflow.com/a/16957078)

## Docker

`docker container ls`
`docker run`

## gcc/g++
### Include `include/` when compiling

`g++ -iquote dir <*.cc>`

