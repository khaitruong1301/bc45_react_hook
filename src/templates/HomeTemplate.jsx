import React from 'react'
import Header from '../components/Header'

import {Outlet} from 'react-router-dom'
import ResponsiveItem from '../HOC/ResponsiveItem'
import BottomTabmobile from '../components/Mobile/BottomTabmobile'

//component không có nội dung
const NullDiv = ()=>{
  return <div></div>
}

const FooterHome = () => {
  return <footer className='fs-3 text-center text-white p-3 bg-dark'>
      Footer
  </footer>
}

const HomeTemplate = () => {
  return (
    <div>
        
        <ResponsiveItem component={Header} mobileComponent={NullDiv} />
        <div className='content' style={{minHeight:650}}>
            <Outlet />
        </div>

        <ResponsiveItem component={FooterHome} mobileComponent={BottomTabmobile} />

    </div>
  )
}

export default HomeTemplate