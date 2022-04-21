# Replication controller

### A replicationController has three parts:
i) A `label selector`, which determines what pods are in the ReplicationController’s scope.<br>
ii) A `replica count`, which specifies the desired number of pods that should be running.<br>
iii) A `pod template`, which is used when creating new pod replicas.

### Create a replication controller, it has 5 pods
`kubectl create -f nginx-replication-controller.yaml`
### Check replication controller
`kubectl get rc`

![kubectl get rc output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/3.replication-controller/images/rc-5-pods.png)

### View details of ReplicationController
`kubectl describe rc <rc-name>`

### See 5 pods by command using
`kubectl get pods`

![kubectl get pods output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/3.replication-controller/images/pods-5.png)

### Create a service to expose the replication controller
`kubectl expose rc nginx --type=LoadBalancer --name nginx-http`
### Check that the service
`kubectl get services`

![kubectl expose rc nginx output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/3.replication-controller/images/service-from-rc.png)

### Run curl to EXTERNAL-IP
`curl 10.101.138.243:80`
### Scale down the replicas
`kubectl scale rc nginx --replicas=1`
### Setting the results of the scale out

![replica scal down output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/3.replication-controller/images/scale-down-replica.png)

### Scale up the replicas
`kubectl scale rc nginx --replicas=6`
### Again setting the results of the scale out

![replica scal up output](https://raw.githubusercontent.com/aminurbd932/devops-notes/main/kubernates/3.replication-controller/images/scale-up-replica.png)

### Displaying the pod ID and pod node when listing pods
`kubectl get pods -o wide`
### Again run curl to EXTERNAL-IP
`curl 10.101.138.243:80`
### Edit the RC in a text edit
`kubectl edit rc <rc-name>`
### Delete one pod and see that the replication controller rotates the other
`kubectl delete pod <pod-name>`
### Delete a rc and all pods
`kubectl delete rc <rc-name>`
### To keep the pod but delete the RC use this
`kubectl delete rc <rc-name> --cascade=false`