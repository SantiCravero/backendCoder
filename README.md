# 💻 Backend - Proyecto Final Coderhouse
_Comisión: 39685
_Alumno: Santiago Cravero

## Requerimientos previos 📋

_Antes de iniciar la aplicacion, se necesita instalar las dependencias con el siguiente comando:_
```
npm i
```
## Rutas de la API a testear

###### Todas las rutas detalladas pueden ser testeadas en Postman (excepto las rutas de 'vistas en la web', que se testean en un navegador) 
### Products: 
```
https://backendcoder-production-abea.up.railway.app/api/product [GET] => Ruta para visualizar TODOS los productos
https://backendcoder-production-abea.up.railway.app/api/product/:pid [GET] => Ruta para visualizar UN producto especifico
https://backendcoder-production-abea.up.railway.app/api/product [POST] => Ruta para crear un producto
https://backendcoder-production-abea.up.railway.app/api/product/:pid [PUT] => Ruta para actualizar un producti
https://backendcoder-production-abea.up.railway.app/api/product/:pid [DELETE] => Ruta para eliminar un producto
```
### Cart:
```
https://backendcoder-production-abea.up.railway.app/api/cart [GET] => Ruta para visualizar el carrito
https://backendcoder-production-abea.up.railway.app/api/cart [PUT] => Ruta para actualizar los productos del carrito
https://backendcoder-production-abea.up.railway.app/api/cart/product/:pid [POST] => Ruta para agregar productos al carrito
https://backendcoder-production-abea.up.railway.app/api/cart/product/:pid [PUT] => Ruta para actualizar la cantidad de un producto
https://backendcoder-production-abea.up.railway.app/api/cart/product/:pid [DELETE] => Ruta para eliminar UN producto del carrito
https://backendcoder-production-abea.up.railway.app/api/cart [DELETE] => Ruta para eliminar TODOS los productos del carrito
https://backendcoder-production-abea.up.railway.app/api/cart/purchase [POST] => Ruta para generar ticket de compra

```
### Github Auth:
```
https://backendcoder-production-abea.up.railway.app/authSession/github [GET] 
https://backendcoder-production-abea.up.railway.app/authSession/githubSession [GET]

```
### Sessions:
```
https://backendcoder-production-abea.up.railway.app/api/session/login [POST] => Ruta para loguearse con un usuario
https://backendcoder-production-abea.up.railway.app/api/session/register [POST] => Ruta para registrar un usuario
https://backendcoder-production-abea.up.railway.app/api/session/logout [GET] => Ruta para cerrar sesion con un usuario
https://backendcoder-production-abea.up.railway.app/api/session/current [GET] => Ruta para ver la sesion activa
```
### User:
```
https://backendcoder-production-abea.up.railway.app/api/user [GET] => Ruta para visualizar TODOS los usuarios
https://backendcoder-production-abea.up.railway.app/api/user/:uid/documents [POST] => Ruta para agregar una imagen a documents
https://backendcoder-production-abea.up.railway.app/api/user [DELETE] => Ruta que elimina a los usuarios inactivos
```
### Vistas en la web:
```
https://backendcoder-production-abea.up.railway.app/login
https://backendcoder-production-abea.up.railway.app/register
https://backendcoder-production-abea.up.railway.app/forgotPassword
https://backendcoder-production-abea.up.railway.app/resetPassword
https://backendcoder-production-abea.up.railway.app/product
https://backendcoder-production-abea.up.railway.app/cart
https://backendcoder-production-abea.up.railway.app/profile
https://backendcoder-production-abea.up.railway.app/chat
```