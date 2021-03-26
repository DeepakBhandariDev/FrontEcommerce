import React, {useContext} from 'react'
import { useDispatch } from 'react-redux'
import { AppState, Product } from '../types'
import { useHistory } from 'react-router-dom'
import ThemeContext from "../themeContext";

type UnoProps = {
  viewProduct: () => void
}

export default function DetailsBtn({ viewProduct }: UnoProps) {
  const history = useHistory()
  const dispatch = useDispatch()


  const { theme, switchTheme } = useContext(ThemeContext);
  const style = { backgroundColor: theme.color };

  return (
    <div>
      {!history.location.pathname.includes('/products/') && (
        <button
          className="btn"
          style={style}
          onClick={() => viewProduct()}
        >
          Details
        </button>
      )}
    </div>
  )
}
