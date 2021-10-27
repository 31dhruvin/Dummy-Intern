import React, { useState,useEffect } from 'react'
import Axios from 'axios'

function Images() {
    const [images,setImages] = useState([])
    const[search,setSearch] = useState("")
    const response = (props) =>{
        const result = props.target.value
        setSearch(result)
    }
    
    useEffect(()=> {
        Axios.get(`https://api.unsplash.com/photos/?client_id=0od6zasfTyVfLNn4Me0AITWpAhG0zATnXX0MV9FAuvs`)
        .then((res)=>{
            console.log(res);
            setImages(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div className="py-4 container">
        <div className="row justify-content-center">
            <div className="col-12 mb-5">
                <div className="mb-3 col-4 mx-auto text-center">
                    <h2 className="form-label">Search</h2>
                    <input type="text" className="form-control" value={search} onChange={response}>
                    </input>
                    
                </div>
            </div>
            {
                images.filter((splash)=>{
                    if(search == ""){
                        return splash
                    }
                    else if(splash.user.first_name.toLowerCase().includes(search.toLowerCase())){
                        return splash
                    }
                }).map((splash,index)=>(
                   <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                       <div className="card p-0 overflow-hidden h-100 shadow">
                           <img src={splash.urls.regular} className="card-img-top img-fluid" />
                           <div className="card-body">
                               <h4 className="card-title">{splash.user.first_name}</h4>
                               </div>
                           </div>
                       </div>
                ))
            }
        </div>
        </div>
    )
}

export default Images
