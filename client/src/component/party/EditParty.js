import React from 'react'
import { connect } from 'react-redux'
import PartyForm from './PartyForm'

import {startEditParty} from '../../actions/partyAction'
import { findParty} from '../../selectors/partySelector'

function EditParty(props){

    const handleEditSubmit = (party) => {
        const redirect = () => {
            return props.history.push(`/partys`)
        }
        props.dispatch(startEditParty(party, redirect))
    }
    return (
        <div>
            
            {props.party && (
                <div>
                    {props.party.name && <PartyForm party = {props.party} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        party: findParty(state.party,id)
    }
}
export default connect(mapStateToProps)(EditParty)