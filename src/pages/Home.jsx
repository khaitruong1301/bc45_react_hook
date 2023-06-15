//rafce
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { http } from '../util/config';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductApi, getAllProductAsyncAction } from '../redux/reducers/productReducer';
const Home = () => {

  // const [arrProduct, setArrProduct] = useState([]);
  const {arrProduct} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const getProductApi = async () => {
    // const res = await http.get('/api/Product');

    //Sau khi lấy dữ liệu từ api về thì đưa vào state
    // setArrProduct(res.data.content);

    // const actionAsync = getAllProductApi();
    // dispatch(actionAsync);

    const actionAsync = getAllProductAsyncAction();
    dispatch(actionAsync);

  }


  useEffect(() => {
    //Chạy sau khi component render (tương tự component did mount chỉ chạy 1 lần duy nhất sau khi render)
    getProductApi();
    console.log('arrProduct', arrProduct);
  }, [])

  return (
    <div className='container'>
      <button className='btn btn-dark' onClick={() => {
        getProductApi();
      }}>GET api</button>
      <h3>Shoes Shop</h3>
      <div className='row'>
        {arrProduct.map((item) => {
          return <div className='col-md-4 mt-2' key={item.id}>
            <div className='card'>
              <img src={item.image} alt="..." />
              <div className='card-body'>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <NavLink className='btn btn-dark' to={`/detail/${item.id}`}>View detail</NavLink>
              </div>
            </div>
          </div>
        })}
      </div>

    </div>
  )
}

export default Home