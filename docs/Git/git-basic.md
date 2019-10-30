# Basics of Git
![git workflow](/TIL/Git/git_workflow.png)
## Meaning / 의의
Git is basically a *distributed version-control system(분산 버전관리 시스템)*. It is extremely useful for tracking changes in a source code and others. Best for coordination between developers. Nevertheless it’s usage goes beyond that as it is an excellent tool for tracking all kinds of files.

### How is it different to Github?
Git is basically a tool for distributed version-control, while Github is a web hosting service written on *ruby on rails*. Git was developed starting in 2005 by Linus Torvalles(yes the legendary carpenter of ‘the’ linux). After releasing git as as command-line based tool, he started building a web platform for git which included a web hosting service.

## Workflow of git(basic)
###### Local git
![](/TIL/Git/Screen%20Shot%202019-07-19%20at%201.54.17%20AM.png)
![](/TIL/Git/Screen%20Shot%202019-07-25%20at%2012.52.11%20AM.png)

###### Remote git Repository
![](/TIL/Git/Screen%20Shot%202019-07-19%20at%2011.50.51%20PM.png)
각각 따로 만들어서 연결시켜주는 개념. 깃헙에서 만드는 레포지토리의 이름을 로컬 레포지토리와 같도록 해주는 것이 좋다.
```bash
#로컬과 리모트 레포의 연결
git remote add origin https://github.com/eomiso/Git_practice.git
git push -u origin master
```


## Local Git Configuration
* name & email
![](/TIL/Git/Screen%20Shot%202019-07-19%20at%208.01.21%20AM.png)


## Basic command
git init -> 
git add (git add .)
git status

SHA : 40-character code -> for git commit log
![](/TIL/Git/Screen%20Shot%202019-07-19%20at%206.19.49%20PM.png)

### git backtracking
git show HEAD
git diff -> modification of working directory file to committed file
git blame -> file history
git checkout HEAD filename : discards changes in the working directory
git add filename1 filename2
git reset HEAD filename -> unstages file changes in the staging area
git reset commit_SHA -> resets to a previous commit in your commit history

### git branching
git branch : which branch I am on?
git branch new_branch
git branch -d target_branch
-m “ resolve merge conflict”


### git
git remote -v
* Git lists the name of the remote, origin, as well as its location.
* Git automatically names this remote origin, because it refers to the remote repository of origin. However, it is possible to safely change its name.
* The remote is listed twice: once for (fetch) and once for (push). We’ll learn about these later in the lesson.

git fetch : see if there has been a change
git clone: Creates a local copy of a remote.
git remote -v: Lists a Git project’s remotes.
git fetch: Fetches work from the remote into the local copy.
git merge origin/master: Merges origin/master into your local branch.
git push origin <branch_name>: Pushes a local branch to the origin remote.


### caching your GitHub pw in git : by using the global config(credential.helper)

gitg

```bash
$ git credentials-osxkeychain
$ git config —global credential.helper osxkeychain
# Set git to use the osxkeychain credential helper
```
> how to update, [Updating credentials from the OSX Keychain - GitHub Help](https://help.github.com/en/articles/updating-credentials-from-the-osx-keychain)  

#git
