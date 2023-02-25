import React from "react";
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Home(){

    const [listOfPosts, setListOfPosts] = useState([]);

    let navigate = useNavigate();

  useEffect(() =>{
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response.data);
      setListOfPosts(response.data);

    })

  }, []);
  
    return(
        <div>
            {listOfPosts.map((value, key) => {
                return (
                <div className="posts" onClick={() => {navigate(`/post/${value.id}`)}}>
                <div className="postTitle">
                    {value.postTitle}
                </div>
                <div className="postText">
                    {value.postText}
                </div>
                <div className="postUsername">
                    {value.postUsername}
                </div>
                </div>
            );
      })}

        </div>
    )
}
export default Home;