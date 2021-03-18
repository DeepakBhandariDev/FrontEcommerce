import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {getAllProducts} from './redux/actions/product'
import "./App.css";
import Header from './components/Header'

import ThemeContext, { themes } from './themeContext'
import Routes from './Routes'
  
function App() {
  const dispatch = useDispatch();
  const themeJson = localStorage.getItem('currentTheme')
let savedTheme = themeJson !== null ? JSON.parse(themeJson) : themes.blend

  const [context, setContext] = useState({
    theme: savedTheme,
    switchTheme: (themeName: string) => {
      setContext((current) => ({
        ...current,
        theme: {
          color: themeName,
        },
      }))

    },
  })

  useEffect(() => {
    localStorage.setItem('currentTheme',JSON.stringify(context.theme))
  }, [context])

  useEffect(() => {
   dispatch(getAllProducts())
  }, [])
  return (
    <ThemeContext.Provider value={context}>
    <div className="App">
      <Header/>
      <div className="body-container">
      <Routes/>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
