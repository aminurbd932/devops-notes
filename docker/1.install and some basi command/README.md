# Docker install and some basic command

## Docker install
```
sudo apt-get update

sudo apt-get install ca-certificates curl gnupg lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

  sudo apt-get update

  sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### Version check
`docker -v`
### To view system-wide information
`docker info`

## Image management command

### Run a image from docker hub
`sudo docker run -d -p 80:80 --name <any-name> <img-name>`
### Get all local images
`sudo docker images`
### Delete image
`docker rmi <image>...`
### Show low-level infos (json formate)
`docker inspect <image>`

## Container management command

### Get all running container
`docker ps`
### Get all container
`docker ps -a`
### Stop container
`docker stop <container>`
### Start container
`docker start <container>`
### Execute command for inside container
`sudo docker exec -it <container> bash`
### Show low-level infos (json formate)
`docker inspect nginx`
### View the container output
`docker logs <container>`

## Using the registry API

### docker login
`docker login -u "username" -p "password" docker.io`
### doccker logout
`docker logout`
### docker push an image/repo from a registry
`docker push <repo-name>`
### docker build an image/repo to a registry
`docker build -t <repo-name> <project-name>`
### docker pull an image/repo to a registry
`docker pull <repo-name>`

## Others Command

### List docker network
`docker network list`
### Inspect a network
`docker network inspect <network-id or name>`

## Reference

https://docs.docker.com/engine/install/ubuntu/
https://dockerlabs.collabnix.com/docker/cheatsheet/