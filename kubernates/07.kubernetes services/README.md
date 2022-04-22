# Service

### Now we create three service
```
kubectl create -f pod1.yaml
kubectl create -f pod2.yaml
kubectl create -f pod3.yaml
```
### Creat a service
`kubectl create -f service.yaml`
### Then get pods, filter by lable=service
`kubectl get pods -L service`
### Get service
```
kubectl get services
kubectl get svc
```
### Describe the service
`kubectl describe svc backend-service`
### Get ip of pods this command
```
kubectl get endpoints backend-service
kubectl get ep backend-service
```

### Now let's make a request to the service from inside a pod using cluster IP
```
kubectl exec <pod-name> -- curl -s <cluster-ip>
kubectl exec simple-nodejs-1 -- curl -s http://10.108.190.81
```
### Get environment variable from inside the pod
`kubectl exec simple-nodejs-1 -- env`
### Get FQDN info from inside the pod
`kubectl exec backensimple-nodejs-1d1 -- cat /etc/resolv.conf`
### Get FQDN inside the pod
```
kubectl exec -it backend1 sh
apt install dnsutils
nslookup backend-service
```
### Now, running a shell in a pod container using these FQDN
```
kubectl exec simple-nodejs-1 -- curl -s http://backend-service.default.svc.cluster.local
kubectl exec simple-nodejs-1 -- curl -s http://backend-service.default
kubectl exec simple-nodejs-1 -- curl -s http://backend-service
```