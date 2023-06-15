import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomTabmobile = () => {



  return (
    <div className='mt-5 w-100 py-3 bg-dark' style={{position:'fixed',bottom:0,left:0,zIndex:99}}>
        <div className='w-100 row bg-dark  py-3 text-center' style={{height:50}}>
            <div className='col-4'>
                <NavLink to={'/use-search-params'} className={({isActive}) => isActive ? "text-warning  fs-1" : "text-white  fs-3"}>
                    <i className='fa fa-search '></i>
                </NavLink>
            </div>
            <div className='col-4'>
                <NavLink to={'/'} className={({isActive}) => isActive ? "text-warning  fs-1" : "text-white  fs-3"}>
                    <i className='fa fa-home'></i>
                </NavLink>
            </div>
            <div className='col-4'>
                <NavLink to={'/profile'} className={({isActive}) => isActive ? "text-warning  fs-1" : "text-white  fs-3"}>
                    <i className='fa fa-user '></i>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default BottomTabmobile