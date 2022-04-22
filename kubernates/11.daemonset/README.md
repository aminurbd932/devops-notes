# Daemon set

### Gell nodes filter by ssd label
`kubectl get nodes -L disk`
### Added SSD label if not found in node
`kubectl label node <node_name> disk=ssd`
### Create ad daemonset
`kubectl create -f daemonset.yaml`
### Check that the replica set
```
kubectl get ds
kubectl get daemonset
```
### Details of Daemon set
`kubectl describe ds <ds-name>`

### And Check the pods
`kubectl get pods`

### Now create a replicaset match expressions as label selectors
`kubectl label node <node-name> disk=hdd --overwrite`
### Again check pods
`kubectl get pods`
### Delete a rs and all pods
`kubectl delete ds <ds-name>`
