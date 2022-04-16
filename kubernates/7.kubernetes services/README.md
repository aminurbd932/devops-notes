# Layer 7 load balancing
### Create a pod
`kubectl create -f pod1.yaml`
`kubectl create -f pod2.yaml`
`kubectl get pods -l service=nginx`
`kubectl create -f service.yaml`
`kubectl get ep`
`kubectl get pods -o wide`
`kubectl create -f pod3.yaml`

`kubectl exec -it nginx sh`
`curl 10.105.107.18:3000`
`kubectl logs nginx1 -f`
`apt install iputils-ping`
`ping 172.17.0.5`
`apt install dnsutils`
`nslookup nginx-service`