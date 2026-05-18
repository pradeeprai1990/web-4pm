import React, { useContext } from 'react'
import { cartContext } from '../../context/MainContext'

export default function Login() {
  let {countData,setCountData} =useContext(cartContext)
  return (
    <div>
      login {countData}
      <button onClick={()=>setCountData(countData+1)}>Change Count</button>
    </div>
  )
}
