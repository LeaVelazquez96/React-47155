import NavBar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo ='Hola' />
    </div>
  )
}

export default App
