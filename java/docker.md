### 快捷键

- 查看 latest 镜像具体版本：`docker image inspect 镜像名称:latest | grep -i version`
- 删除镜像：`docker rmi 镜像ID1 镜像ID2`
- 删除容器：`docker rm 容器ID`
- 查看已在运行的容器 `docker ps -a`
- 在运行的容器中执行命令 `docker exec -it 容器名 命令`
  - `docker exec -it xxx /bin/bash`
  - `docker exec -it xxx /bin/sh /root/xxx.sh`
  - `docker exec -it 9df70f9a0714 /bin/bash`
- 启动 docker `systemctl start docker`
- 停止 docker `systemctl stop docker`
- 重启 docker `systemctl restart docker`
- 开机启动 docker `systemctl enable docker`
- 查看日志 `docker logs [容器名 | 容器ID ]`
  - `docker logs -f [容器名 | 容器ID ] #表示实时的跟踪日志输出`
  - `docker logs --since 30m myredis # 此处 --since 30m 是查看此容器30分钟之内的日志情况。`
- 复制容器内文件到本地 `docker cp 容器ID:目标路径 本地文件路径`
