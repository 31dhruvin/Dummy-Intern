import React, { useState,useEffect } from 'react'
import Axios from 'axios'
function Home() {
    const [image,setImage] = useState([])
    useEffect(()=> {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=cHSrtwwQNo0FgYQHlTntrwuqBphDLt6TuZhiEBcK`)
        .then(res=>{
            console.log(res);
            setImage(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
        
    
    return (
        <div>
            {
                image ?
                <div>
                    <h1 style={{textAlign:"center",marginTop:"2%"}}>{image.title}</h1>
                    <img src={image.url} style={{display:"block",marginLeft:"auto",marginRight:"auto"}}></img>
                    </div>
                    :<span>
                        Wait...
                    </span>
            }
        </div>
    )
}

export default Home
