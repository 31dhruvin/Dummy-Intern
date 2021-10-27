import React, { useContext,useState } from 'react';
import {BrowserRouter as Router, Link,Switch,Route, useHistory, Redirect} from 'react-router-dom'
import UserStore from "../Store/index";
import Login from './Login'
import SignUp from './SignUp'
import Reset from './Reset'; 
import {fire} from '../Firebase'
import Welcome from './Welcome';
import Home from './Home'
import Albums from './Albums'
import Images from './Images'
import Posts from './Posts'
import Product from './Product';
import AlbumProd from './AlbumProd';
const Navbar=(props) => {
  const history = useHistory()
  const datas=props.datas
  const { userData, setUserData } = useContext(UserStore);useState({
    auth:false,
  });
  const Logout = () =>{
    fire.auth().signOut().then(() => {
      setUserData({
        ...userData,
        auth:false,
        data:null,
      })
    }).catch((error) => {
      console.log(error.message)
    });
  }
    return(
      <Router>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand" style={{fontSize:"30px",cursor:"pointer"}}><strong>Internshala</strong></div>
          <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
              
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              {
                userData.auth ? (
                  <li className="nav-item ml-4">
                <Link className="nav-link " aria-current="page" to="/home" style={{fontSize:"20px"}}><strong>Home</strong></Link>
              </li>
                )
                :(
                  <span></span>
                )
              }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {
                userData.auth ? (
                  <li className="nav-item">
                <Link className="nav-link" to="/images"style={{fontSize:"20px"}}>
                <strong>Images</strong>
                </Link>
              </li>

                ):
                (
                  <span></span>
                )
              }
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {
                userData.auth ? (
                  <li className="nav-item">
                <Link className="nav-link" to="/posts"style={{fontSize:"20px"}}>
                <strong>Posts</strong>
                </Link>
              </li>

                ):
                (
                  <span></span>
                )
              }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {
                userData.auth ? (
                  <li className="nav-item">
                <Link className="nav-link" to="/albums"style={{fontSize:"20px"}}>
                <strong>Albums</strong>
                </Link>
              </li>

                ):
                (
                  <span></span>
                )
              }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {
                userData.auth ? (
                  <li className="nav-item">
                <Link onClick={Logout} className="nav-link" to="/welcome"style={{fontSize:"20px"}}>
                <strong>LogOut</strong>
                </Link>
              </li>

                ):
                (
                  <span></span>
                )
              }

               <li className="nav-item">
                
                <Link className="nav-link" to="/"style={{fontSize:"25px",display:"none"}}>
                <strong>Welcome</strong>
                </Link>
              </li>     
            </ul>           
          </div>
        </div>
      </nav>
      <Switch>
              
        <Route exact path="/welcome" component={Welcome}>
        {
            userData.auth ? <Welcome /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/home">
          {
            userData.auth ? <Home /> : <Redirect to="/login"></Redirect>
          }
      </Route>
      <Route exact path="/images">
          {
            userData.auth ? <Images /> : <Redirect to="/login"></Redirect>
          }
      </Route>
      <Route exact path="/posts">
          {
            userData.auth ? <Posts /> : <Redirect to="/login"></Redirect>
          }
      </Route>
      <Route exact path="/albums">
          {
            userData.auth ? <Albums /> : <Redirect to="/login"></Redirect>
          }
      </Route>
      <Route exact path="/product/:id">
          {
            userData.auth ? <Product /> : <Redirect to="/login"></Redirect>
          }
      </Route>
      <Route exact path="/album/:id">
          {
            userData.auth ? <AlbumProd /> : <Redirect to="/login"></Redirect>
          }
      </Route>
      <Route exact path="/login">
              {userData.auth ? <Redirect to="/home" /> : <Login />}
            </Route>
            <Route exact path="/signup">
              {userData.auth ? <Redirect to="/home" /> : <SignUp />}
            </Route>
            <Route exact path="/reset">
              {userData.auth ? <Redirect to="/home" /> : <Reset />}
            </Route>
            <Route exact path="/">
              {userData.auth ? <Redirect to="/home" /> : <Welcome />}
            </Route>
            
      </Switch>
           </Router>
    )
}
export default Navbar;
