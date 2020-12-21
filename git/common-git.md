## 拉取远程分支

1. 已经拉取过代码，想拉取别的分支到本地

```git
git fetch

方式1. 本地创建并切换到分支
git checkout -b branchName origin/branchName

方式2. 拉取远程分支到本地
git pull origin branchName
```

git fetch 的目的是获取远程最新仓库信息，避免出现类似：  
fatal: 'origin/ac_branch' is not a commit and a branch 'ac_branch' cannot be created from it  
这样的错误

## 删除分支

```git
删除本地分支
git branch -d branchName

删除远程分支
git push origin --delete branchName
```
