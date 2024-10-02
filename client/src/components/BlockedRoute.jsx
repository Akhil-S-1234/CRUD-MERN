import React from 'react'
import {useSelector} from 'react-redux'
import {Outlet,Navigate} from 'react-router-dom'


function BlockedRoute() {
    const {currentUser} = useSelector(state=>state.user)
  return currentUser ? <Navigate to='/'/> : <Outlet/> 
}

export default BlockedRoute