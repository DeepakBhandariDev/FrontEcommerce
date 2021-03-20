import React from 'react'

export const themes = {
    blend: {
        color: '#12c7fd'
    },
    dark: {
        color: '#21130d'
    },
    light: {
       color: '#a8dadc' 
    },
    evening: {
        color: 'rgb(168, 43, 43)'
    }
}
export default React.createContext({
    theme: themes.blend,
    switchTheme: ( themeName: string) => {}
})