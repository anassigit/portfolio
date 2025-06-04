import React from 'react'
import { Outlet } from 'react-router-dom'

export const DefaultPage = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
