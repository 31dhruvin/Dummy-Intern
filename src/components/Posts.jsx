import React, { useState,useEffect } from 'react'
import '../Style/Post.scss'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const Posts = (props) => {
    const[posts,setPosts] = useState([])
    useEffect(()=> {
        Axios.get(`https://fakestoreapi.com/products/`)
        .then((res)=>{
            console.log(res);
            setPosts(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div className="py-4 container">
        <div className="row justify-content-center">
            {
                posts.map(props=>(
                    <>
                    <Link to={`/product/${props.id}`} className="data-card">
                    <h4>{props.title}</h4>
                    <img src={props.image} />
                    <span class="link-text">
                    Discover More
                    </span> 
                    </Link>
                    </>
                ))
            }
        </div>
        </div>
    )
}

export default Posts
