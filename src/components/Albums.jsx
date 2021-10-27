import React, { useState,useEffect } from 'react'
import '../Style/Post.scss'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function Albums() {
    const[posts,setPosts] = useState([])
    useEffect(()=> {
        Axios.get(`https://jsonplaceholder.typicode.com/photos`)
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
                     <Link to={`/album/${props.id}`} className="data-card">
                    <h4>{props.title}</h4>
                    
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

export default Albums

