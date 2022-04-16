# Install minikube

```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

sudo install minikube-linux-amd64 /usr/local/bin/minikube

minikube start
```

### Get minikube version	
`minikube version`
### Check minikube latest version	
`minikube update-check`
### Get minikube status	
`minikube status`
### Start minikube	
`minikube start`
### Stop minikube	
`minikube stop`
### Delete minikube	
`minikube delete`
### Get minikube IP
`minikube ip`
### Get minikube logs
`minikube logs`
### Get minikube dashboard
`minikube dashboard`
## Open a shell
`minikube ssh`

## Reference

https://cheatsheet.dennyzhang.com/cheatsheet-minikube-a4

# Install kubernates client(kubectl)

```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"

echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check

sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```
### Get kubernates client version
`kubectl version --client`

## Reference

https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/


# Some basic command of kubernaties

### View cluster information using command
`kubectl cluster-info`
### Get node information
`kubectl get nodes`
### Get service information
`kubectl get services`
### Get services again to see if an external IP has been assigned
`kubectl get svc`
### Get pod information
`kubectl get pods`
### Get replication controller information
`kubectl get replicationcontrollers`
`kubectl get rc`
### Describe specific node (minikube) information 
`kubectl describe node minikube`
### To get all cluster information
`kubectl cluster-info dump`
### Creating an alias of kubectl
`alias k=kubectl`
### View the pod IP and the pods node when listing pods
`k get pods -o wide`
### To delete everything from the current namespace
`kubectl delete all --all`
### To delete everything from the specific namespace
`kubectl delete all --all -n <namespace>`