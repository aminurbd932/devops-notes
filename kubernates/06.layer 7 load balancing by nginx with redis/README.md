# Layer 7 load balancing

### To deploy it, run the following command
```
docker build -t aminur932/loadbalancer loadbalancer
docker build -t aminur932/microservice1 microservice1
docker build -t aminur932/microservice2 microservice2
docker build -t aminur932/microservice3 microservice3
```
### Then push all the image
```
docker push aminur932/loadbalancer
docker push aminur932/microservice1
docker push aminur932/microservice2
docker push aminur932/microservice3
```
### Create a pod
`kubectl apply -f kubectl pod-layer7-load-balancer.yaml`
### To check that all the container are up
`kubectl get pods`
### Forward the load balancer
`kubectl port-forward layer-7-load-balancer 4001:80`
### Then run curl
`curl localhost:4001`
<!-- ### And get result from redis
`curl localhost:4001/ms` -->