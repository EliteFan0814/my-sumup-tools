### navicat 连接 mysql8 报错：1251

navicat 连接 mysql8.1.0 报错，错误信息：1251- Client does not support authentication protocol requested by
server;consider upgrading Mysql client。

出现这种情况的原因是：MySQL8 之前的版本中加密规则是 mysql_native_password,而在 MySQL8 之后,加密规则是
caching_sha2_password

```bash
mysql> select host,user,plugin,authentication_string from mysql.user;
```

![user.png](https://s2.loli.net/2024/06/14/ubEySP82jQIqwpf.png)

### 解决方法

```bash
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
Query OK, 0 rows affected (0.01 sec)

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
Query OK, 0 rows affected (0.01 sec)

mysql> flush privileges;
Query OK, 0 rows affected (0.01 sec)

mysql> select host,user,plugin,authentication_string from mysql.user;
```

![user2.png](https://s2.loli.net/2024/06/14/o21MUXNSgs8TqGW.png)

再用 navicat 连接就成功了

ps:

> mysql.user 表中 Host 列的含义： Host 列指定了允许用户登录所使用的 IP，  
> 比如 user=root Host=192.168.1.1。  
> 这里的意思就 是说 root 用户只能通过 192.168.1.1 的客户端去访问。  
> 而%是个通配符，如果Host=192.168.1.%，那么就表示只要是IP地址前缀为“192.168.1.”的客户端都可以连接。如果Host=%，表示所有IP都有连接权限。


