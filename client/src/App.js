
import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Home from './component/static/Home'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import { startUserLogout } from './actions/userAction'
import {connect} from 'react-redux'

function App(props)
{
    const handleLogout=()=>{
        props.dispatch(startUserLogout())
    }
    return (
        <BrowserRouter>
            <div>
                <h2>Online Voting</h2>
                {
                    Object.keys(props.user).length!==0?(
                        <div>
                            <Link to='/'  style={{color:'blue',margin:'10px'}}>Home</Link>    
                            <Link to='#' style={{color:'blue',margin:'10px'}} onClick={handleLogout}>Logout</Link>
                        </div>
                    ):(
                        <div>
                            <Link to='/'  style={{color:'blue'}}>Home</Link>
                            <Link to='/users/login' style={{color:'blue',margin:'10px'}}>Login</Link>
                            <Link to='/users/register' style={{color:'blue'}}>Register</Link>
                        </div>
                    )
                }
                
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/users/login' component={Login}/>
                    <Route path='/users/register' component={Register}/>
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