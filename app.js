console.log("aprendiendo react")

const myPageNode = document.querySelector("#root")

// React
// ReactDOM

const root = ReactDOM.createRoot(myPageNode) // representacion del DOM virtual


// let username = "jorge"
// let address = {
//   city: "barcelona",
//   country: "españa"
// }

// creo el contenido de mi página
// const someInfo = React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: `Hola mi nombre es ${username}`
//     }),
//     React.createElement("h3", {
//       children: "Bienvenidos a mi web"
//     }),
//     React.createElement("p", {
//       children: `Vivo en ${address.city}, ${address.country}`
//     })
//   ]
// }) // un elemento del DOM virtual

// en JS existe una sintaxis que se llama JSX => javascript + XML

// const someInfoJSX = (
//   <div>
//     <h1>Hola mi nombre es {username}</h1>
//     <h3>Bienvenidos a mi web</h3>
//     <p>Vivo en {address.city}, {address.country}</p>
//   </div>
// )
// ! importante, al crear llaves {} dentro de JSX, significa que escribimos JS dentro


// componentes => una funcion que retorna un JSX
function MiComponente() {

  // algun codigo
  let username = "jorge"
  let address = {
    city: "barcelona",
    country: "españa"
  }

  return (
    <div>
      <h1>Hola mi nombre es {username}</h1>
      <h3>Bienvenidos a mi web</h3>
      <p>Vivo en {address.city}, {address.country}</p>
    </div>
  )
}

function OtroComponente() {

  return (
    <footer>
      <p>Footer</p>
    </footer>
  )

}


// root.render( MiComponente() )
root.render( 
  <div>
    <MiComponente /> 
    <OtroComponente />
  </div>
) 
// ejecutar la funcion
// renderizar el componente

// ! en JSX nosotros NO podemos renderizar dos componentes, A MENOS que esten dentro de otra etiqueta