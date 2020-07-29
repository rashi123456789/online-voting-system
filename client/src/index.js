
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { startGetUser } from './actions/userAction'
import { startSetCitizens } from './actions/citizenAction'
import { startSetPartys } from './actions/partyAction'
import {startSetCandidates} from './actions/candidateAction'
import { startSetCastvotes } from './actions/castvoteAction'
const store=configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

if(localStorage.getItem('authToken'))
  {
    store.dispatch(startGetUser())
    store.dispatch(startSetCitizens())
    store.dispatch(startSetPartys())
    store.dispatch(startSetCandidates())
    store.dispatch(startSetCastvotes())
    
  }

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))