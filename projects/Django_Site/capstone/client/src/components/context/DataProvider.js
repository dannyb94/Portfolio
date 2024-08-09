import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const DataContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function DataProvider(props){
  const initState = { 
    // user: JSON.parse(localStorage.getItem('user')) || {}, 
    // token: localStorage.getItem('token') || "", 
    // users: [],
    cart: [],
    sofas: [],
    ottomans: [],
    tables: []
    // errMsg: ''
  }

  const [dataState, setDataState] = useState(initState)

  function setCart(item){
    setDataState(prevState => ({
        ...prevState,
        cart: [...prevState.cart, item]
    }))
  }

  function getFurnData(){
    axios.get('http://localhost:2000/sofas')
    .then(res => {
      setDataState(prevState => ({
        ...prevState,
        sofas: res.data
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))

    axios.get('http://localhost:2000/ottomans')
    .then(res => {
      setDataState(prevState => ({
        ...prevState,
        ottomans: res.data
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))

    axios.get('http://localhost:2000/tables')
    .then(res => {
      setDataState(prevState => ({
        ...prevState,
        tables: res.data
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(function(){
    getFurnData()
  }, [])

  return (
    <DataContext.Provider value = {{ dataState, setCart }}>
      { props.children }
    </DataContext.Provider>
  )
}