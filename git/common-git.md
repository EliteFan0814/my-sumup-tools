## git 常用命令

```bash
# 更新远程分支列表
git remote update origin -p
# 修改本地分支名
git branch -m old_branch new_branch
```

## 拉取远程分支

## .gitignore 规则

```bash
# 所有空行和以 # 开头的行都会忽略
# 以（/）开头防止递归
# 使用两个星号（**) 表示匹配任意中间目录
# []中使用 - 表示范围： [0-9] 表示匹配所有 0 到 9 的数字
# 问号（?）只匹配一个任意字符
# [abc]匹配 a 或 b 或 c
# 星号（*）匹配零个或多个任意字符


# 忽略 .a 文件
*.a
# 但否定忽略 lib.a, 尽管已经在前面忽略了 .a 文件
!lib.a
# 仅在当前目录下忽略 TODO 文件夹， 但不包括子目录下的 subdir/TODO
/TODO
# 递归忽略所有层级的 TODO 文件夹
TODO
# 忽略 build/ 文件夹下的所有文件
build/
#忽略build文件夹下的所有文件，但不包括build文件夹本身
build/*
# 忽略 doc/notes.txt, 不包括 doc/server/arch.txt
doc/*.txt
# 忽略在 doc 文件夹下的所有 .pdf 文件 
doc/**/*.pdf
git checkout -b new-branch
# 做完一系列add commit 操作之后，设置上游仓库地址
git push --set-upstream origin new-branch
```

## 清空本地保存的用户名和密码(管理员权限)
```bash
git config --system --unset credential.helper
```