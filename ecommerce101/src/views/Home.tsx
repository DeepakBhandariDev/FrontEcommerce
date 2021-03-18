import React, {useContext} from 'react'
//import Header from '../components/Header'
import ProductList from '../components/ProductList'

import ThemeContext from '../themeContext'



export default function Home() {
 
 
    const { theme, switchTheme } = useContext(ThemeContext)
    const style = { backgroundColor: theme.color }

  return (
    <div className="home" style={style}>
      <a href="/postProduct">Add product</a>
      <ProductList/>
      
    </div>
  )
}
