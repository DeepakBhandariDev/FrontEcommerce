import { ProductsActions, Product, ADD_ALL_PRODUCTS, POST_PRODUCT } from './../../types';
import { Dispatch } from 'redux'
import axios from 'axios'



export function addAllProducts(products: Product[]): ProductsActions{
    return {
        type: ADD_ALL_PRODUCTS,
        payload: {
            products,
        }

    }
}
export function postProduct(product: Product): ProductsActions{
    return {
        type: POST_PRODUCT,
        payload:{
            product,
        }
    }
}

export function getAllProducts() {
    return async (dispatch: Dispatch) => {
      try{
        const baseUrl = "http://localhost:5000/api/v1/product"
        const res = await fetch(baseUrl)
        const data = await res.json()
        dispatch(addAllProducts(data))
      } catch (error) {
        console.log(error)
      }
    }
  }

export function postAProduct(product: Product) {
    return async (dispatch: Dispatch) => {
      try{
        const baseUrl = "http://localhost:5000/api/v1/product"
        await axios.post(baseUrl, {
            ...product
          })
          .then(function (response: any) {
              console.log(response)
            const data = response.data
            dispatch(postProduct(data))
          })
        
      } catch (error) {
        console.log(error)
      }
    }
  }