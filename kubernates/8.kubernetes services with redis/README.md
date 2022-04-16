# Layer 7 load balancing
### Create a pod
`kubectl create -f pod-nginx.yaml`
`kubectl create -f pod-redis.yaml`
`kubectl create -f service-redis.yaml`

`kubectl exec -it nginx sh`
`apt install telnet`
`telnet service-redis 6379`

`docker build -t aminur932/3d_microservice microservice1`
`docker push aminur932/3d_microservice`
`kubectl create -f pod-microservice.yaml`

`kubectl exec -it nginx sh`
`curl`
