import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getProfileApi } from '../redux/reducers/userReducer';
const Profile = () => {
  const {userProfile} = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  const getProfileApiFunction = async () => {

    const actionAsync = getProfileApi();
    dispatch(actionAsync);
  }

  useEffect(()=> {
    //vừa vào trang dispatch api getprofile
    getProfileApiFunction();
  },[])



  return (
    <div>

      Hello : {userProfile?.email}
    </div>
  )
}

export default Profile