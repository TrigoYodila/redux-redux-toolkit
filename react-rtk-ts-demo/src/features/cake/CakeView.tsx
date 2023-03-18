import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
//import useSelector and useDispatch with typescript
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {

  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)

  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Ordered cake</button>
      <button onClick={()=>dispatch(restocked(5))}>Restock cake</button>
    </div>
  );
}

export default CakeView
