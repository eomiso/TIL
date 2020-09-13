# Useful commands collection

1. Shell
2. Docker
3. Git
4. gcc/g++
5. grep



## Shell

### 이하 directory 중에서 파일 및 폴더 찾기

```bash
find $HOME -type d -name "<dir_name>"
find $HOME -type f -name "<file_name>"
```

* `-iname` for case insensitive search
* `2>/dev/null` at the end to avoid messages.(not have permission to read...)

`locate` can also be used

### 프로세스 찾아서 킬하기

ps -aid ??| grep {}
kill -9 <pid_number>


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

### 특정한 `text`를 찾아서 출력하기

```bash
grep -wRT "text"
```
* `-T`: make tabs line up (if needed) 

### vim: ctags 를 이용해서 클래스 및 함수의 definition 찾기
* ctags 설치
* 분석하고 싶은 directory에서 `ctags -R`
* vim ~/.vimrc `set tags = /directory of tags/tags`
* 찾을 때, `vi -t "~"`
* `Ctrl-]`, `g-]`,뒤로가기: `ctrl-t`


[Reference](https://stackoverflow.com/a/16957078)

## Docker

`docker container ls`
`docker run`

[pull docker image]
```
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```
예시 : docker pull ubuntu:18.04

[docker build와 docker run의 차이]
build는 container 로부터 image를 만드는 것이고, run은 image로부터 container를 만드는 것이다.

[docker run 예시]

```
docker run -pid 80:80 --name test ubuntu:18.04 /bin/bash

docker attach test
```

[파일 공유]
```
docker run -dit -p 5000:80 -v ~/<host_directory>:<directory_in_container> --name style-transfer ubuntu:18.04 /bin/bash
```

## gcc/g++
### Include `include/` when compiling

`g++ -iquote include_dir <*.cc>`

`g++ -I include_dir`

### gcc -Wall
`gcc -Wall` enables all compiler's warning messages. This option should always be used, in order to generate better code.

### Makefile error
`(.text+0x20): undefined reference to 'main'`


## Misc

#### emerge specific version
```bash
emerge y <package>
```
#### search for available package versions in the tree
```bash
eqery y <package>
```

## Git

[Unstage staged file]
`git restore --staged <file_name>` \
