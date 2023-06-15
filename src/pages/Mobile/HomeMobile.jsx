//rafce
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { http } from '../../util/config';

const HomeMobile = () => {

  const [arrProduct, setArrProduct] = useState([]);

  const getProductApi = async () => {
    const res = await http.get('/api/Product');

    //Sau khi lấy dữ liệu từ api về thì đưa vào state
    setArrProduct(res.data.content);
  }


  useEffect(() => {
    //Chạy sau khi component render (tương tự component did mount chỉ chạy 1 lần duy nhất sau khi render)
    getProductApi();
    console.log('arrProduct', arrProduct);
  }, [])

  return (
    <div className='container'>
        <h3>Home mobile</h3>
        <div className='products container'>
            {arrProduct.map((item)=>{
                return <div className='d-flex my-2 border border-dark rounded p-2' key={item.id}>
                    <img src={item.image} height={100} alt="..." />
                    <div className='description-product'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <div className='text-end'>
                            <NavLink to={`/detail/${item.id}`} className='btn btn-dark'> <i className='fa fa-cart-plus'></i> View detail</NavLink>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default HomeMobile