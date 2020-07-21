import React from 'react'
import { connect } from 'react-redux'
import CitizenForm from './CitizenForm'

import {startEditCitizen} from '../../actions/citizenAction'
import { findCitizen} from '../../selectors/citizenSelector'

function EditCitizen(props){

    const handleEditSubmit = (citizen) => {
        const redirect = () => {
            return props.history.push(`/citizens`)
        }
        props.dispatch(startEditCitizen(citizen, redirect))
    }
    return (
        <div>
            
            {props.citizen && (
                <div>
                    {props.citizen.name && <CitizenForm citizen = {props.citizen} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        citizen: findCitizen(state.citizen,id)
    }
}
export default connect(mapStateToProps)(EditCitizen)