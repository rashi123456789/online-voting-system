import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './component/static/Home'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import { startUserLogout } from './actions/userAction'
import {connect} from 'react-redux'

import CitizenList from './component/citizen/CitizenList'
import AddCitizen from './component/citizen/AddCitizen'
import CitizenShow from './component/citizen/CitizenShow'
import EditCitizen from './component/citizen/EditCitizen'

import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
function App(props)
{
    const handleLogout=()=>{
        props.dispatch(startUserLogout())
    }
    return (
        <BrowserRouter>
            <div>
                {
                    Object.keys(props.user).length!==0?(
                        <div>
                            <Navbar bg='dark' varient="dark">
                                <Navbar.Brand href={"/"} style={{color:'white'}}>Online Voting System</Navbar.Brand>
                                <Nav className="ml-auto" >
                                    <Nav.Link href={"/"} style={{color:'white'}}>Home</Nav.Link>
                                    <Nav.Link href={"/citizens"} style={{color:'white'}}>citizens</Nav.Link>
                                    <Nav.Link to="#" onClick={handleLogout} style={{color:'white'}}>Logout</Nav.Link>
                                </Nav>
                            </Navbar>
                        </div>
                    ):(
                        <div>
                           <Navbar bg="dark" variant="dark" >
                                <Navbar.Brand href={"/"} style={{color:'white'}}>Online Voting System</Navbar.Brand>
                                <Nav className="ml-auto">
                                    <Nav.Link href={"/"} style={{color:'white'}}>Home</Nav.Link>
                                    <Nav.Link href={"/users/register"} style={{color:'white'}}>Register</Nav.Link>
                                    <Nav.Link href={"/users/login"} style={{color:'white'}}>Login</Nav.Link>
                                </Nav>
                            </Navbar>
                        </div>
                    )
                }
                
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/users/login' component={Login}/>
                    <Route path='/users/register' component={Register}/>

                    <Route path="/citizens" component={CitizenList} exact={true} />
                    <Route path="/citizens/add" component={AddCitizen} />
                    <Route path="/citizens/:id" component={CitizenShow} exact={true} />
                    <Route path="/citizens/editcitizen/:id" component={EditCitizen} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(App)