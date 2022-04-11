# Kubernetes dashboard

### To deploy it, run the following command
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml`
### Creating a Service Account with the admin user
`kubectl apply -f dashboard-user.yaml`
### Creating a ClusterRoleBinding for service account
`kubectl apply -f cluster-role-binding.yaml`
### Getting a Bearer Token
`kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"`
### Something like
`eyJhbGciOiJSUzI1NiIsImtpZCI6IkpFeVdaVVh1TVJBdVlMZGhuVUFJdDJoZE0yNXJ4RzdfUzZhbE9uTG1XOEUifQ`
### Start the server command line
`kubectl proxy`
### Go here to access the server
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
### Remove the admin ServiceAccount and ClusterRoleBinding
`kubectl -n kubernetes-dashboard delete serviceaccount admin-user`

`kubectl -n kubernetes-dashboard delete clusterrolebinding admin-user`

## Reference

https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/

https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md