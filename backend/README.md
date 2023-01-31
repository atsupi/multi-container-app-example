# simple-web-api

## Build container
```
docker build . -t web-api
```

## Start web api server
```
docker run -d -p 3001:3001 --name node-web-api web-api
```

## Test web api
```
curl http://localhost:3001/fruit/prices
curl -X "POST" http://localhost:3001/fruit/prices -H "Content-Type:application/json" -d '{"name": "melon", "price": 500}'
curl http://localhost:3001/fruit/prices/4
```
