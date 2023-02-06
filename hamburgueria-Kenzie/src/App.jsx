import { useState, useEffect } from 'react'
import { parse, v4 as uuid } from "uuid"
import './App.css'
import axios from "axios"
import { List } from './components/List'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


function App() {

  const localList = localStorage.getItem("@HAMBURGUERKENZIE")
  const [loading, SetLoading] = useState(false)
  const [list, setList] = useState([])
  const [cartList, setCartList] = useState(localList ? JSON.parse(localList) : [])
  const [search, setSearch] = useState("")

  const searchList = list.filter(element => {
    return search === ""? false: (element.name.toLowerCase() ).includes(search.toLowerCase()) || (element.category.toLowerCase()).includes(search.toLowerCase())
  })

  console.log(searchList)

  useEffect(() => {
    localStorage.setItem("@HAMBURGUERKENZIE", JSON.stringify(cartList))
  }, [cartList])

  useEffect(() => {
    async function getList() {

      try {
        SetLoading(true)
        const response = await axios.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products',{
        timeout: 5000
        })
        console.log(response)
        setList(response.data)
      } catch (error) {
      }
      finally {
        SetLoading(false)
      }
    }
    getList()
  }, [])

  const addToCart = (element) => {

    const findElement = cartList.find(e => e.id === element.id);

    if(findElement){
      return toast.error("Item já adicionado!", {
        position: toast.POSITION.TOP_CENTER
      })
    }

    const newElement = { ...element, uuid: uuid() }
    setCartList([...cartList, newElement])
    toast.success("Item adicionado ao carrinho!", {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const removeFromCart = (elementId) => {
    const newCart = cartList.filter(element => element.id !== elementId)
    setCartList(newCart)
    toast.info("Item removido do carrinho!", {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const removeAllFromCart = () => {
    setCartList([])
    toast.warn("Carrinho esvaziado!", {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const totalPrice = cartList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0)

  return (
    <>
      <div className="App">
        <Header setSearch={setSearch}/>
        {loading ? <h1>Carregando</h1> :
          <main>
            {search.length == "" ? <List list={list} addToCart={addToCart} />:
            <>
            <h2>Resultados para: <span>{search}</span></h2>
            <List list={searchList} addToCart={addToCart} />
            </>
            }
            <Cart cartList={cartList} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} totalPrice={totalPrice} />
          </main>}
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
      </div>
    </>
  )
}

export default App
