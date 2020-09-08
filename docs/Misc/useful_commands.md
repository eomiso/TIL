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

`g++ -iquote dir <*.cc>`

## Git

[Unstage staged file]
`git restore --staged <file_name>` \
