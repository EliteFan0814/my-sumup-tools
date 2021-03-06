## VIM 保存

| <div style="width: 100pt">命令</div> | <div style="text-align:center;">说明</div>                                                                                                                                                           |
| :----------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                  :w                  | 保存编辑后的文件内容，但不退出 vim 编辑器。这个命令的作用是把内存缓冲区中的数据写到启动 vim 时指定的文件中。                                                                                         |
|                 :w!                  | 强制写文件，即强制覆盖原有文件。如果原有文件的访问权限不允许写入文件，例如，原有的文件为只读文件，则可使用这个命令强制写入。但是，这种命令用法仅当用户是文件的属主时才适用，而超级用户则不受此限制。 |
|                 :wq                  | 保存文件内容后退出 vim 编辑器。这个命令的作用是把内存缓冲区中的数据写到启动 vim 时指定的文件中，然后退出 vim 编辑器。另外一种替代的方法是用 ZZ 命令。                                                |
|                 :wq!                 | 强制保存文件内容后退出 vim 编辑器。这个命令的作用是把内存缓冲区中的数据强制写到启动 vim 时指定的文件中，然后退出 vim 编辑器。                                                                        |
|                 :ZZ                  | 使用 ZZ 命令时，如果文件已经做过编辑处理，则把内存缓冲区中的数据写到启动 vim 时指定的文件中，然后退出 vim 编辑器。否则只是退出 vim 而已。注意，ZZ 命令前面无需加冒号“：”，也无需按 Enter 键。        |
|                  :q                  | 在未做任何编辑处理而准备退出 vim 时，可以使用此命令。如果已做过编辑处理，则 vim 不允许用户使用“:q”命令退出，同时还会输出下列警告信息：No write since last change (:quit! overrides)                  |
|                 :q!                  | 强制退出 vim 编辑器，放弃编辑处理的结果。如果确实不需要保存修改后的文件内容，可输入“:q!”命令，强行退出 vim 编辑器。                                                                                  |
|             :w filename              | 把编辑处理后的结果写到指定的文件中保存                                                                                                                                                               |
|             :w! filename             | 把编辑处理后的结果强制保存到指定的文件中，如果文件已经存在，则覆盖现有的文件。                                                                                                                       |
|            :wq! filename             | 把编辑处理后的结果强制保存到指定的文件中，如果文件已经存在，则覆盖现有文件，并退出 vim 编辑器                                                                                                        |
