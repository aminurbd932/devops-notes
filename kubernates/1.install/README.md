# Install minikube

```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube`

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