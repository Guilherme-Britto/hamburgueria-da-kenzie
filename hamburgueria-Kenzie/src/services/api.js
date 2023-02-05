import axios from "axios"

export const api = axios.create({
    URI:'https://hamburgueria-kenzie-json-serve.herokuapp.com/products',
    timeout: 5000,
})