import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
const AlbumProd = () =>{
    const {id} = useParams()
    const[product,setProduct] = useState([])
    const[loading,setLoading] = useState(false)
    useEffect(()=>{
        const getProduct = async () =>{
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[])
    const Loading =()=>{
        return(
            <>
            Loading...
            </>
        )
    }
    const ShowProduct= ()=>{
        return(
            <>
            <div className="col-md-6">
                    <img src={product.url} alt={product.title} height="400px" width="400px" />
                </div>
                
                
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading />:<ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default AlbumProd
