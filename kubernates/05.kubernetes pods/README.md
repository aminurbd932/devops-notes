# Kubernetes pods

### Get all pods
`kubectl get pods`
### Get specific pods
`kubectl get pod <pod-name>`
### Get explain about pods
`kubectl explain pods`
`kubectl explain pod.spec`
### Get describe a pod
`kubectl describe pod <pod-name>`

## Pod create by yaml file 

### Create a redis pod
`kubectl create -f redis-pod.yaml`
### Get output pods
`kubectl get pods -o wide`

![kubectl get pods -o wide output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/05.kubernetes%20pods/images/pod-redis.png)

`kubectl get pods -o json`
`kubectl get pods -o yaml`

## Log of a pods

### Get log specific pod
```
kubectl logs <pod-name>
kubectl logs <pod-name> -f
```
### Get logs if the pod has multiple container
`kubectl logs <pod-name> -c <container-name>`

## port forward

### Connect to the pod via port forwarder
`kubectl port-forward <pod-name> 8080:80`

![kubectl port-forward output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/05.kubernetes%20pods/images/pod-port-forward.png)

### Then curl output
`curl localhost:8080`

## Pod with label

### Create a pod with label (run=manual,env=production)
`kubectl create -f redis-pod-with-label.yaml`
## View pods with labels
`kubectl get po --show-labels`

![kubectl port-forward output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/05.kubernetes%20pods/images/pod-with-label.png)

### View the labels of pods in column
`kubectl get po -L env,run`

![kubectl get po output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/05.kubernetes%20pods/images/pod-column.png)

### Adding labels to specific pods
`kubectl label po redis run=manual`
### Changing existing labels
`kubectl label po redis-v2 env=debug --overwrite`

### Filtering by label
`kubectl get po -l env=debug`
`kubectl get po -l env`
`kubectl get po -l !env`

### Add label to a node (minikube)
`kubectl get nodes`
`kubectl label node <node-name> gpu=true`
### Checking the node
`kubectl get nodes -l gpu=true`

### Adding and modifying annotations
`kubectl annotate pod redis-v2 aminur.com/created-by="Aminur Rahman"`
### And checking annotations
`kubectl describe pod redis-v2`

## Using namespaces to group resources

### Get all list of namespace
`kubectl get ns`
### Get all pod in that specific namespace
`kubectl get po --namespace kube-system`
`kubectl get po --n kube-system`
### Create a namespace
`kubectl create -f custom-namespace.yaml`
### Create a namespace without yaml file
`kubectl create namespace custom-namespace-without-file`
### Managing pod in other namespaces
`kubectl get po --namespace custom-namespace`
`kubectl create -f redis-nginx-pod.yaml -n custom-namespace`
### Delete a namespace
`kubectl delete ns custom-namespace`
### Deleting (almost) all resources(pod,service,rc) in a namespace
`kubectl delete all --all`

## Deleting pod

### Delete a pod by name
`kubectl delete pod <pod-name>`
### Delete all pod
`kubectl delete pod --all`
### Delete a pod by label
`kubectl delete pod -l env=testing`

## Some command

### Command run inside pod
`kubectl exec -it <pod-name> sh`
### Command run specific container inside pod
`kubectl exec -it <pod-name> <container-name> sh`

## Reference

https://github.com/knrt10/kubernetes-basicLearning