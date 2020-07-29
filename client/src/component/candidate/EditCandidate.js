import React from 'react'
import { connect } from 'react-redux'
import CandidateForm from './CandidateForm'

import {startEditCandidate} from '../../actions/candidateAction'
import { findCandidate} from '../../selectors/candidateSelector'

function EditCandidate(props){

    const handleEditSubmit = (candidate) => {
        const redirect = () => {
            return props.history.push(`/candidates`)
        }
        props.dispatch(startEditCandidate(candidate, redirect))
    }
    return (
        <div>
            
            {props.candidate && (
                <div>
                    {props.candidate.name && <CandidateForm candidate = {props.candidate} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        candidate: findCandidate(state.candidate,id)
    }
}
export default connect(mapStateToProps)(EditCandidate)