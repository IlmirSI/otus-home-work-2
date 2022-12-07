# Окружение Kubernetes

Добавляем репозитории bitnami и prometheus-community в helm

```
helm repo add bitnami https://charts.bitnami.com/bitnami
```

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

Устанавливаем `nginx-ingress-controller`

```
helm install nginx bitnami/nginx-ingress-controller
```

Устанавливаем `postgresql`

```
helm install pg -f ./deployment/data/pg-values.yaml bitnami/postgresql
```

Устанавливаем `prometheus-stack` (прометей + оператор + графана)

```
helm install prometheus-stack prometheus-community/kube-prometheus-stack
```

## Запуск проекта

Деплоим остальное

```
kubectl apply -f ./deployment
```
