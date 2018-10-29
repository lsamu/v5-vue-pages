@echo off
git.exe pull --progress --no-rebase 
git.exe status
git.exe add -A

@echo off
rem set/p a1=Please Input Char,Enter:

git.exe commit -m  "master"
rem  "%a1%"
git.exe push --progress 