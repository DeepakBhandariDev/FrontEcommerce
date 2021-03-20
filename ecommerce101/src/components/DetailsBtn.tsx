import React from 'react'
import { useDispatch } from 'react-redux'
import { AppState, Product } from '../types'
import { useHistory } from 'react-router-dom'

type UnoProps = {
  viewProduct: () => void
}

export default function DetailsBtn({ viewProduct }: UnoProps) {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <div>
      {!history.location.pathname.includes('/products/') && (
        <button
          className="btn"
          onClick={() => viewProduct()}
        >
          Details
        </button>
      )}
    </div>
  )
}
