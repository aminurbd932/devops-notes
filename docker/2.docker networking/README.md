# Docker networking
## By default when we install Docker a new interface `docker0` will be created.
### Run a nginx container
`sudo docker run -d -p 80:80 --name http-nginx nginx`
### Then Check the network interface
```
ifconfig
ip addr
```
### If not found install `ifconfig` by
`sudo apt install net-tools`
#### Run the `ifconfig` command, get a description of the bridge type `docker0` network with details of other networks.`docker0` is a virtual bridge interface created by Docker.

![ifconfig output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/docker/2.docker%20networking/images/network-interface.png)

### List docker network 
`sudo docker network ls`

![docker network ls output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/docker/2.docker%20networking/images/network-list.png)
#### When we create a container it is allocated within a default bridge network

### Inspect a bridge network
`sudo docker inspect bridge`
![docker inspect bridge output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/docker/2.docker%20networking/images/container-inside-bridge.png)

#### Here, there is a container of `http-nginx` inside the network bridge with an IP address `172.17.0.2`

### Now we will ping to the host machine/computer.
`ping 172.17.0.2`

![ping output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/docker/2.docker%20networking/images/ping-host-machine.png)

#### Then route command
![route output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/docker/2.docker%20networking/images/route.png)

#### Here, passing data with interface `docker0` to the routing table of the kernel.

## Now container inside

### Check running container by command
`docker ps`
### Go inside container
`docker exec -it http-nginx sh`
### Now inside the container run `ifconfig` command that there is a interface `eth0` with ip address `172.17.0.2`

![ifconfig output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/docker/2.docker%20networking/images/inside-container-interface.png)

### Install tcpdump
`apt install tcpdump`
### Now run tcpdump for traffic check inside the container
`tcpdump -i eth0`
### Open a new bash to the host machine and ping command
`ping 172.17.0.2`
### Then tcpdump output

![tcpdump output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/docker/2.docker%20networking/images/tcpdump-output-inside-container.png)

### For a better understanding of network traffic and see the image below

![tcpdump output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/docker/2.docker%20networking/images/bridge-network-works.png)


## Now we will look network traffic by use public IP inside the container

### Ping command
`ping 8.8.8.8`
### If not found install `ping`
`apt-get install iputils-ping`
###
