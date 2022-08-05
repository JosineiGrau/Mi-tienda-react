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
  npm start
```


## Routes

- La ruta "/" (por default) muestra la página de inicio y el listado de todos los productos (ItemListContainer).

- La ruta "/tecnologia" nos muestra una sección de todos los productos de Tecnologia

- La ruta "/tecnologia/:category" muestra los productos de tecnologia filtrados según la Categoria que eligas. Es el (ItemListContainer) + la función del filtro

- La ruta "/tecnologia/marca/:marca" muestra todos los productos de la marca que elijas.

- La ruta "/tecnologia/detail/:productoId" muestra el detalle del producto que has escogido.

- La ruta "/not_found" muestra la página de error404 cuando no encuentra coincidencia con los links 
  - La ruta "*" define que toda otra ruta que no encuentra lo que va hacer es mandarlo al "/not_found" con el <Navigate to="/not_found" />
- La ruta "/Detalle/:id" muestra el detalle del producto seleccionado mediante el link "ver más", ubicando el producto mediante su id.

```
<>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='tecnologia' element={<Tecnologia/>}>
            <Route path=':categoryId' element={<Tecnologia/>}/>
          </Route>
          <Route path='tecnologia/marca/:marca' element={<Tecnologia/>}/>
          <Route path='tecnologia/detail/:productoId' element={<ItemDetailContainer/>}/>
          <Route path='/not_found' element={<PageNotFound/>}/>
          <Route path='*' element={<Navigate to="/not_found" />}/>
      </Routes>
      <Footer/>
</>
```
## Gif

![Mi tienda - Personal_ Microsoft_ Edge 2022-08-05 00-26-32_Trim (1)](https://user-images.githubusercontent.com/103330270/183149547-efffaabf-fbb9-4607-8e2e-4e28e76af7d6.gif)



## Screenshots

![App Screenshot](https://i.ibb.co/tPyv3bH/Captura-de-pantalla-2022-08-05-142851.jpg)

![App Screenshot](https://i.ibb.co/m4J2D5F/Captura-de-pantalla-2022-08-05-142943.jpg)

![App Screenshot](https://i.ibb.co/jJVcPcQ/Captura-de-pantalla-2022-08-05-143012.jpg)


## 🚀 Sobre mí
Me estoy preparando para ser un  full stack developer...


## 🛠 Skills
JAVASCRIPT, REACT, SASS, HTML, CSS ,FIGMA,


## Feedback

Si tiene algún comentario, comuníquese con nosotros en jgrausalazar9@gmail.com

