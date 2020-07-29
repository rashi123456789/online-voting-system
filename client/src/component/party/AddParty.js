import React from 'react'
import {connect} from 'react-redux'

import PartyForm from './PartyForm'
import { startAddPartys } from '../../actions/partyAction'

function AddParty(props){  

    const handleEditSubmit = (party) => {    
        const redirect = () => props.history.push('/partys')
        props.dispatch(startAddPartys(party,redirect))
    }
        return (
            <div>
                <PartyForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddParty)