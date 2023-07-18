# 👋 Trabajo Final Backend Coderhouse
_Comisión: 39685
_Alumno: Santiago Cravero

## Requerimientos previos 📋

_Para utilizar la aplicación necesita instalar las dependencias con el siguiente comando:_
```
npm i
```
## Rutas de la API a testear

### Products: 
```
http://localhost:5000/api/product [GET]
http://localhost:5000/api/product/:pid [GET]
http://localhost:5000/api/product [POST]
http://localhost:5000/api/product/:pid [PUT]
http://localhost:5000/api/product/:pid [DELETE]
```
### Cart:
```
http://localhost:5000/api/cart [GET]
http://localhost:5000/api/cart/:cid [PUT]
http://localhost:5000/api/cart/product/:pid [POST]
http://localhost:5000/api/cart/product/:pid [PUT]
http://localhost:5000/api/cart/product/:pid [DELETE]
http://localhost:5000/api/cart [DELETE]

```
### Github Auth:
```
http://localhost:5000/authSession/github [GET]
http://localhost:5000/authSession/githubSession [GET]
```
### Sessions:
```
http://localhost:5000/api/session/login [POST]
http://localhost:5000/api/session/register [POST]
http://localhost:5000/api/session/logout [GET]
http://localhost:5000/api/session/current [GET] 
```
### User:
```
http://localhost:5000/api/user/register [POST]
```