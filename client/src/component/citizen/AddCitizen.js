import React from 'react'
import {connect} from 'react-redux'

import CitizenForm from './CitizenForm'
import { startAddCitizens } from '../../actions/citizenAction'

function AddCitizen(props){  

    const handleEditSubmit = (citizen) => {    
        const redirect = () => props.history.push('/citizens')
        props.dispatch(startAddCitizens(citizen,redirect))
    }
        return (
            <div>
                <CitizenForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddCitizen)