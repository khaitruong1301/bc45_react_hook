import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {

    const statusLoading = useSelector(state=>state.loadingReducer);



  return (
    <div id="loading" style={{display:statusLoading.loading,position:'fixed',zIndex:999,left:0,top:0,width:'100%',height:'100%',background:'rgba(0,0,0,0.5)'}}>
        <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
            <img src='./img/loading.webp' width={'5%'} />
            
        </div>
    </div>
  )
}

export default Loading