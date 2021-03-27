import React, {useState, useEffect}  from 'react';
import * as component      from '../index.components';
import axios               from 'axios';

const Dashboard = () => {
  const BASE_URL = 'https://dummyapi.io/data/api';
  const APP_ID = '605f824f610181e9628d82c1';

  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios({
      method:'GET',
      url:`${BASE_URL}/post`,
      headers: { 'app-id': APP_ID } 
    }).then( res => {
      setPosts(res.data.data)
      console.log("prueba", res.data.data)
    }).catch(e => {
      e.response && console.log(e.response.data)
      console.log("error", e)
    })
  }

  useEffect(() => {
    getPosts()
  },[])
  return(

    <div className="dashboard xscs10 xsc10">
      <component.Navbar></component.Navbar>
      {posts.map((item, key)=>{
        return(

            <component.PostPet data={item} key={key}></component.PostPet>

        )
        })}
      <component.BtnAddPost></component.BtnAddPost>
    </div>

  )
}
export default Dashboard