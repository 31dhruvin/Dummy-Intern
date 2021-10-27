import React from 'react'
import {useHistory,Link} from "react-router-dom"
const Welcome = (props) => {
  
  const history = useHistory()
  const datas=props.datas
  console.log(props,datas)
    return (
      <>
         <header id="showcase">
    <strong><h1>Welcome</h1></strong>
    <strong><h3>To Discover more kindly register yourself</h3></strong>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
    <a href="#" class="button"><Link to="/signup">SignUp</Link></a>
  </header>
    
        </> 
        
    )
              }
export default Welcome
