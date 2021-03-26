import { addAllProductsCart } from './redux/actions/cart'
import { useDispatch,useSelector } from 'react-redux';
import { AppState, Product } from './types'
import {  useEffect } from 'react'


 const useCartHook = () => {
    const dispatch = useDispatch()

    const storedCart = () => {
        const carts = localStorage.getItem('cart')
        let savedCart: Product[] = carts !== null ? JSON.parse(carts) : []
        dispatch(addAllProductsCart(savedCart))
    }

    useEffect(() => {
        storedCart()
    }, [dispatch])

}
export default useCartHook
