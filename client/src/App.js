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

import PartyList from './component/party/PartyList'
import AddParty from './component/party/AddParty'
import PartyShow from './component/party/PartyShow'
import EditParty from './component/party/EditParty'

import CandidateList from './component/candidate/CandidateList'
import AddCandidate from './component/candidate/AddCandidate'
import CandidateShow from './component/candidate/CandidateShow'
import EditCandidate from './component/candidate/EditCandidate'


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
                                    <Nav.Link href={"/citizens"} style={{color:'white'}}>Citizens</Nav.Link>
                                    <Nav.Link href={"/partys"} style={{color:'white'}}>Party</Nav.Link>
                                    <Nav.Link href={"/candidates"} style={{color:'white'}}>Candidate</Nav.Link>
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
                    
                    <Route path="/partys" component={PartyList} exact={true} />
                    <Route path="/partys/add" component={AddParty} />
                    <Route path="/partys/:id" component={PartyShow} exact={true} />
                    <Route path="/partys/editparty/:id" component={EditParty} />
                    
                    <Route path="/candidates" component={CandidateList} exact={true} />
                    <Route path="/candidates/add" component={AddCandidate} />
                    <Route path="/candidates/:id" component={CandidateShow} exact={true} />
                    <Route path="/candidates/editcandidate/:id" component={EditCandidate} />
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