import React from 'react'
import Header from '../components/elements/Header'
import MenuBar from '../components/elements/Sidebar'

function AppLayout(props) {
  return (
    <div>
      <Header/>
      <MenuBar/>
      
      <div>
        {props.childrens}
      </div>
    </div>
  )
}

export default AppLayout
