import React,{useEffect, useState} from 'react';
import axios from 'axios';

import './post_pet.sass';

const PostPet = ({data}) => {
  const BASE_URL = 'https://dummyapi.io/data/api';
  const APP_ID = '605f824f610181e9628d82c1';

  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios({
      method:'GET',
      url:`${BASE_URL}/post/${data.id}/comment`,
      headers: { 'app-id': APP_ID } 
    }).then( res => {
      
      setComments(res.data.data)
      console.log("comments", res.data.data)

    }).catch(e => {
      e.response && console.log(e.response.data)
      console.log("error", e)
    })
  }

  useEffect(() => {
    getComments()
  },[])

  return(

    <div className="postPet xscs10 xsc10">

      <div className="topPostPet xscs10 xsc10">

        <div className="xscs7">
          <i className="fas fa-user"></i>
          <label>{data.owner.firstName} {data.owner.lastName}</label>
        </div>

        <div className="xscs3">
          <i className="far fa-calendar-alt"></i>
          <label>10/02/2021</label>
        </div>

      </div>

      <div className="imagePostPet xscs10">

          <img src={data.image} alt=""/>

      </div>

      <div className="bottomPostPet xscs10 xsc10">

        <div className="iconsBottom xscs10 xsc10">
          <i className="fas fa-paw xscs1"></i>
          <div className="xscs2">
            <i className="fas fa-heart xscs1"></i>
            <p>{data.likes}</p>
          </div>
          <i className="fas fa-comments xscs1"></i>
          <div className="xscs4"></div>
          <i className="fas fa-hashtag xscs1"></i>
          <i className="fas fa-link xscs1"></i>
        </div>
        <div className="descriptionBottom xscs10">
          {comments.map((item, index) => {
            return(
              <div key={index}>
                {comments.length ?
                <div>
                  <h4>{item.owner.firstName} {item.owner.lastName}: </h4>
                  <p>{item.message}</p>
                </div> 
                : 
                <p>No comments</p>}
              </div>
            )
          })}
        </div>

      </div>

    </div>

  )
}
export default PostPet