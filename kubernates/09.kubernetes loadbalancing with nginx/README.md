# Loadbalancing with nginx

## Architecture

![architecture output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/09.kubernetes%20loadbalancing%20with%20nginx/images/architecture.png)

### To deploy it, run the following command
```
docker build -t aminur932/9_loadbalancer loadbalancer
docker build -t aminur932/9a_microservice1 microservice1
docker build -t aminur932/9b_microservice2 microservice2
```
### Then push all the image
```
docker push aminur932/9_loadbalancer
docker push aminur932/9a_microservice1
docker push aminur932/9b_microservice2
```
### Now we create two servers with replication controller
```
kubectl create -f server1-rc.yaml
kubectl create -f server2-rc.yaml
```
### Check that the replication controller
`kubectl get rc`

![kubectl get rc output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/09.kubernetes%20loadbalancing%20with%20nginx/images/service-rc.png)
### View all pods
`kubectl get pods -o wide -L app`

![kubectl get pods output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/09.kubernetes%20loadbalancing%20with%20nginx/images/view-all-pods.png)
### Create the services for these pods
```
kubectl create -f server1-svc.yaml
kubectl create -f server2-svc.yaml
```
### Check that the services
`kubectl get svc -o wide`

![kubectl get svc output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/09.kubernetes%20loadbalancing%20with%20nginx/images/server-svc.png)
### Check that list of pods inside services
`kubectl get ep`

![kubectl get ep output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/09.kubernetes%20loadbalancing%20with%20nginx/images/pods-inside-svc.png)
### Now, we create nginx loadbalancer with replication controller
`kubectl create -f loadbalancer-rc.yaml`
### Create the service for the loadbalancer
`kubectl create -f loadbalancer-svc.yaml`
### Get all replication controller
`kubectl get rc`

![kubectl get svc output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/09.kubernetes%20loadbalancing%20with%20nginx/images/all-rc.png)
### Get all pods
`kubectl get pods -o wide -L app`

![kubectl get svc output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/09.kubernetes%20loadbalancing%20with%20nginx/images/all-pods.png)
### Again check that list of pods inside services
`kubectl get ep`

![kubectl get ep output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/09.kubernetes%20loadbalancing%20with%20nginx/images/all-ep.png)
### Get all services
`kubectl get svc -o wide`

![kubectl get svc output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/09.kubernetes%20loadbalancing%20with%20nginx/images/all-svc.png)
