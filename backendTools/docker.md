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

### windows 安装 redis 注意事项

windows 下使用 gitbash 安装 redis，例如这样：

```bash
docker run -d \
-p 6379:6379 \
--name ry-redis \
-v c:/home/redis/config/redis.conf:/etc/redis/redis.conf \
-v c:/home/redis/data:/data \
--log-opt max-size=100m --log-opt max-file=3 \
redis redis-server /etc/redis/redis.conf
```

出现安装完 redis 容器就报错停止运行，查看容器 logs：

```bash
$ docker logs redis容器名
1:C 27 Jan 2024 23:58:18.606 # Fatal error, can't open config file '/data/C:/Program Files/Git/etc/redis/redis.conf': No such file or directory

```

解决方法很简答，使用 windows 自带的终端或者 powershell 运行命令就行了

```bash
# linux中
docker run -d \
-p 6379:6379 \
--name ry-redis \
-v c:/home/redis/config/redis.conf:/etc/redis/redis.conf \
-v c:/home/redis/data:/data \
--log-opt max-size=100m --log-opt max-file=3 \
redis redis-server /etc/redis/redis.conf

# windows中使用 windows 自带的终端或者 powershell 运行：
docker run -d -p 6379:6379 --name ry-redis -v c:/home/redis/config/redis.conf:/etc/redis/redis.conf -v c:/home/redis/data:/data --log-opt max-size=100m --log-opt max-file=3 redis redis-server /etc/redis/redis.conf
```

### Docker 容器没有 vim 命令

```bash
apt-get update
apt-get install vim
```

### Docker mysql:5.7 时区问题最简单方法

启动时加`-e TZ=Asia/Shanghai`

```bash
docker run -d \
-p 3306:3306 \
--name ry-sql \
-v c:/home/mysql/log:/var/log/mysql \
-v c:/home/mysql/my.cnf:/etc/my.cnf \
-v c:/home/mysql/data:/var/lib/mysql \
-e TZ=Asia/Shanghai \
-e MYSQL_ROOT_PASSWORD=Woshishuaibi1314. \
--restart=always \
mysql:5.7.44
```
