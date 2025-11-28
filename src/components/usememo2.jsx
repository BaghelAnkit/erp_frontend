import React from 'react'
import {useAppSelector} from '../redux/hooks'




function Usememo2() {
    const count=useAppSelector(state=>state.counter)
  return (
    <div>
      <h1 style={{color:"red"}}>componet2 count is {count} </h1>
    </div>
  )
}

export default Usememo2
