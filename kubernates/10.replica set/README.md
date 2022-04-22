# Replica set

### A replicationController has three parts:
i) A `label selector`, which determines what pods are in the ReplicationController’s scope.<br>
ii) A `replica count`, which specifies the desired number of pods that should be running.<br>
iii) A `pod template`, which is used when creating new pod replicas.

### Create a replica set, it has 3 pods
`kubectl create -f replicaset.yaml`
### Check that the replica set
```
kubectl get rc
kubectl get replicaset
```
### Details of Replica set
`kubectl describe rs <rs-name>`

### See 5 pods by command using
`kubectl get pods`

### Now create a replicaset match expressions as label selectors
`kubectl create -f replicaset-matchexpressions.yaml`
### Scale up the replicas
`kubectl scale rs nginx --replicas=5`
### Delete a rs and all pods
`kubectl delete rs nginx`
### To keep the pod but delete the RS use this
`kubectl delete rs <rs-name> --cascade=orphan`