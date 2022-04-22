# Deploying app

### Run a container
`kubectl run nginx --image=nginx`
### Listing pods of that container
`kubectl get pods` 
### Describe specific pod 
`kubectl describe pod nginx`
### Create a service object by pod using
`kubectl expose pod nginx --type=LoadBalancer --name nginx-http --port 80`
or
`kubectl expose pods nginx --type=LoadBalancer --name nginx-http --port 80`
### Check that the service
`kubectl get services`

![kubectl get services pending output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/02.deploying%20application/images/service-e-ip-pending.png)

### if EXTERNAL-IP is pending , there is a magic command!
`minikube tunnel`

![kubectl get services pending output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/02.deploying%20application/images/service-e-ip-sucess.png)

### Now run curl to the nginx service
`curl 10.111.247.165:80`
### Delete service that command using
`kubectl delete service nginx-http1`
and
`kubectl delete service nginx-http`
### Delete pod that command using
`kubectl get pods nginx`

## Reference

https://stackoverflow.com/questions/64306744/error-when-trying-to-expose-a-docker-container-in-minikube

https://stackoverflow.com/questions/44110876/kubernetes-service-external-ip-pending