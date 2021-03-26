import React, {useContext} from 'react'
//import Header from '../components/Header'
import ProductList from '../components/ProductList'


import ThemeContext, { themes } from '../themeContext'



export default function Home() {

  const { theme, switchTheme } = useContext(ThemeContext);
  const style = { backgroundColor: theme.color };
 
 
    //const style = { backgroundColor: theme.color }

  return (
    <div className="home" style={style} >
      <ProductList/>
      
    </div>
  )
}
