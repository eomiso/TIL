(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{348:function(t,e,a){"use strict";a.r(e);var i=a(20),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"basics-of-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics-of-git"}},[t._v("#")]),t._v(" Basics of Git")]),t._v(" "),a("p",[a("img",{attrs:{src:"/TIL/Git/git_workflow.png",alt:"git workflow"}})]),t._v(" "),a("h2",{attrs:{id:"meaning-의의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meaning-의의"}},[t._v("#")]),t._v(" Meaning / 의의")]),t._v(" "),a("p",[t._v("Git is basically a "),a("em",[t._v("distributed version-control system(분산 버전관리 시스템)")]),t._v(". It is extremely useful for tracking changes in a source code and others. Best for coordination between developers. Nevertheless it’s usage goes beyond that as it is an excellent tool for tracking all kinds of files.")]),t._v(" "),a("h3",{attrs:{id:"how-is-it-different-to-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-is-it-different-to-github"}},[t._v("#")]),t._v(" How is it different to Github?")]),t._v(" "),a("p",[t._v("Git is basically a tool for distributed version-control, while Github is a web hosting service written on "),a("em",[t._v("ruby on rails")]),t._v(". Git was developed starting in 2005 by Linus Torvalles(yes the legendary carpenter of ‘the’ linux). After releasing git as as command-line based tool, he started building a web platform for git which included a web hosting service.")]),t._v(" "),a("h2",{attrs:{id:"workflow-of-git-basic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workflow-of-git-basic"}},[t._v("#")]),t._v(" Workflow of git(basic)")]),t._v(" "),a("h6",{attrs:{id:"local-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-git"}},[t._v("#")]),t._v(" Local git")]),t._v(" "),a("p",[a("img",{attrs:{src:"/TIL/Git/Screen%20Shot%202019-07-19%20at%201.54.17%20AM.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/TIL/Git/Screen%20Shot%202019-07-25%20at%2012.52.11%20AM.png",alt:""}})]),t._v(" "),a("h6",{attrs:{id:"remote-git-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-git-repository"}},[t._v("#")]),t._v(" Remote git Repository")]),t._v(" "),a("p",[a("img",{attrs:{src:"/TIL/Git/Screen%20Shot%202019-07-19%20at%2011.50.51%20PM.png",alt:""}}),t._v("\n각각 따로 만들어서 연결시켜주는 개념. 깃헙에서 만드는 레포지토리의 이름을 로컬 레포지토리와 같도록 해주는 것이 좋다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#로컬과 리모트 레포의 연결")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/eomiso/Git_practice.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])])]),a("h2",{attrs:{id:"local-git-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-git-configuration"}},[t._v("#")]),t._v(" Local Git Configuration")]),t._v(" "),a("ul",[a("li",[t._v("name & email\n"),a("img",{attrs:{src:"/TIL/Git/Screen%20Shot%202019-07-19%20at%208.01.21%20AM.png",alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"basic-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-command"}},[t._v("#")]),t._v(" Basic command")]),t._v(" "),a("p",[t._v("git init ->\ngit add (git add .)\ngit status")]),t._v(" "),a("p",[t._v("SHA : 40-character code -> for git commit log\n"),a("img",{attrs:{src:"/TIL/Git/Screen%20Shot%202019-07-19%20at%206.19.49%20PM.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"git-backtracking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-backtracking"}},[t._v("#")]),t._v(" git backtracking")]),t._v(" "),a("p",[t._v("git show HEAD\ngit diff -> modification of working directory file to committed file\ngit blame -> file history\ngit checkout HEAD filename : discards changes in the working directory\ngit add filename1 filename2\ngit reset HEAD filename -> unstages file changes in the staging area\ngit reset commit_SHA -> resets to a previous commit in your commit history")]),t._v(" "),a("h3",{attrs:{id:"git-branching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-branching"}},[t._v("#")]),t._v(" git branching")]),t._v(" "),a("p",[t._v("git branch : which branch I am on?\ngit branch new_branch\ngit branch -d target_branch\n-m “ resolve merge conflict”")]),t._v(" "),a("h3",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),a("p",[t._v("git remote -v")]),t._v(" "),a("ul",[a("li",[t._v("Git lists the name of the remote, origin, as well as its location.")]),t._v(" "),a("li",[t._v("Git automatically names this remote origin, because it refers to the remote repository of origin. However, it is possible to safely change its name.")]),t._v(" "),a("li",[t._v("The remote is listed twice: once for (fetch) and once for (push). We’ll learn about these later in the lesson.")])]),t._v(" "),a("p",[t._v("git fetch : see if there has been a change\ngit clone: Creates a local copy of a remote.\ngit remote -v: Lists a Git project’s remotes.\ngit fetch: Fetches work from the remote into the local copy.\ngit merge origin/master: Merges origin/master into your local branch.\ngit push origin <branch_name>: Pushes a local branch to the origin remote.")]),t._v(" "),a("h3",{attrs:{id:"caching-your-github-pw-in-git-by-using-the-global-config-credential-helper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caching-your-github-pw-in-git-by-using-the-global-config-credential-helper"}},[t._v("#")]),t._v(" caching your GitHub pw in git : by using the global config(credential.helper)")]),t._v(" "),a("p",[t._v("gitg")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" credentials-osxkeychain\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config —global credential.helper osxkeychain\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set git to use the osxkeychain credential helper")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("how to update, "),a("a",{attrs:{href:"https://help.github.com/en/articles/updating-credentials-from-the-osx-keychain",target:"_blank",rel:"noopener noreferrer"}},[t._v("Updating credentials from the OSX Keychain - GitHub Help"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("#git")])])}),[],!1,null,null,null);e.default=r.exports}}]);