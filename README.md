
# ¡Hola, soy Josinei! 👋


# Este es mi Ecommerce

Este es mi proyecto que está hecho con "React JS", 
para el curso de Coder House.



## Ejecutar localmente
### Asegurese de estar en la ultima rama.

Clonar el proyecto
```bash
  git clone https://github.com/JosineiGrau/Mi-tienda-react.git
```

Ir al directorio del proyecto

```bash
  cd my-project
```

Instalar dependencias

```bash
  npm install
```


Inicie el servidor

```bash
  npm run start
```


## Routes

- La ruta "/" (por default) muestra la página de inicio y el listado de todos los productos (ItemListContainer).

- La ruta "/Hombre" nos muestra una sección de todos los productos de Hombre

- La ruta "/Hombre/:category" muestra los productos de Hombre filtrados según la Categoria que eligas. Es el (ItemListContainer) + la función del filtro

- La ruta "/Hombre/Marca/:marca" muestra todos los productos de la marca que elijas.

- La ruta "/Hombre/Detail/:productoId" muestra el detalle del producto que has escogido de ese genero.

- La ruta "/Mujer" nos muestra una sección de todos los productos de Mujer

- La ruta "/Mujer/:category" muestra los productos de Mujer filtrados según la Categoria que eligas. Es el (ItemListContainer) + la función del filtro

- La ruta "/Mujer/Marca/:marca" muestra todos los productos de la marca que elijas.

- La ruta "/Mujer/Detail/:productoId" muestra el detalle del producto que has escogido de ese genero.

- La ruta "/Tecnologia" nos muestra una sección de todos los productos de Tecnologia

- La ruta "/Tecnologia/:category" muestra los productos de tecnologia filtrados según la Categoria que eligas. Es el (ItemListContainer) + la función del filtro

- La ruta "/Tecnologia/Marca/:marca" muestra todos los productos de la marca que elijas.

- La ruta "/Tecnologia/Detail/:productoId" muestra el detalle del producto que has escogido de ese genero.

- La ruta "/not_found" muestra la página de error404 cuando no encuentra coincidencia con los links 
  - La ruta "*" define que toda otra ruta que no encuentra lo que va hacer es mandarlo al "/not_found" con el <Navigate to="/not_found" />
- La ruta "/Detalle/:id" muestra el detalle del producto seleccionado mediante el link "ver más", ubicando el producto mediante su id.

- La ruta Register es para que te puedas registrar 

- La ruta Login es para que te puedas Loguear

- La ruta reset-password es para cambiar tu password si es que te has olvidado

- La ruta cart-checkout es para confirmar los productos que vas a comprar

- La ruta checkout es para finalizar tu compra
```
<>
    <Routes>
        <Route path='/' element={<Layout children={<Inicio/>}/>}/>

        <Route path='Hombre' element ={<Layout children={<Hombre greeting={"Hombre"}/>}/>}>
            <Route path='Category/:categoryId' element={<Layout children={<Hombre greeting={"Hombre"}/>}/>}/>
            <Route path='Marca/:marca' element={<Layout children={<Hombre greeting={"Hombre"}/>}/>}/>
        </Route>

        <Route path='Mujer' element ={<Layout children={<Mujer greeting={"Mujer"}/>}/>}>
            <Route path='Category/:categoryId' element={<Layout children={<Mujer greeting={"Mujer"}/>}/>}/>
            <Route path='Marca/:marca' element={<Layout children={<Mujer greeting={"Mujer"}/>}/>}/>
        </Route>

        <Route path='Niño' element ={<Layout children={<Niño greeting={"Niño(a)"}/>}/>}>
            <Route path='Marca/:marca' element={<Layout children={<Niño greeting={"Niño(a)"}/>}/>}/>
        </Route>

        <Route path='Tecnologia' element={<Layout children={<Tecnologia greeting={"Tecnologia"}/>}/>}>
            <Route path='Category/:categoryId' element={<Layout children={<Tecnologia greeting={"Tecnologia"}/>}/>}/>
            <Route path='Marca/:marca' element={<Layout children={<Tecnologia greeting={"Tecnologia"}/>}/>}/>
        </Route>

        <Route path=':genero/Detail/:productoId' element={<Layout children={<ItemDetailContainer/>}/>}/>

        <Route path='not_found' element={<PageNotFound/>}/>
        <Route path='*' element={<Navigate to="not_found" />}/>

        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='reset-password' element={<ResetPassword/>}/>
        <Route path='cart-checkout' element={<PageCartCheckout/>}/>
        <Route path='checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
    </Routes>
</>
```
## Screenshots

![App Screenshot](https://i.ibb.co/GJ9KP6T/Captura-de-pantalla-2022-09-04-201128.jpg)

![App Screenshot](https://i.ibb.co/hDZmgcp/Captura-de-pantalla-2022-09-04-201200.jpg)

![App Screenshot](https://i.ibb.co/FXFcB2W/Captura-de-pantalla-2022-09-04-201217.jpg)

![App Screenshot](https://i.ibb.co/nscYpjm/Captura-de-pantalla-2022-09-04-201233.jpg)

![App Screenshot](https://i.ibb.co/RYTCDCr/Captura-de-pantalla-2022-09-04-201242.jpg)

![App Screenshot](https://i.ibb.co/PG6y5SX/Captura-de-pantalla-2022-09-04-201308.jpg)

![App Screenshot](https://i.ibb.co/34Sv7YV/Captura-de-pantalla-2022-09-04-201320.jpg)

![App Screenshot](https://i.ibb.co/XjbR32n/Captura-de-pantalla-2022-09-04-201333.jpg)

![App Screenshot](https://i.ibb.co/jrJCjxG/Captura-de-pantalla-2022-09-04-201348.jpg)









## 🚀 Sobre mí
Me estoy preparando para ser un  full stack developer...


## 🛠 Skills
JAVASCRIPT, REACT, SASS, HTML, CSS ,FIGMA,


## Feedback

Si tiene algún comentario, comuníquese con nosotros en jgrausalazar9@gmail.com


## Deploy

https://mi-tienda-react.vercel.app/