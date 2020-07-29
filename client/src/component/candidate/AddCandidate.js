import React from 'react'
import {connect} from 'react-redux'

import CandidateForm from './CandidateForm'
import { startAddCandidates } from '../../actions/candidateAction'

function AddCandidate(props){  

    const handleEditSubmit = (candidate) => {    
        const redirect = () => props.history.push('/candidates')
        props.dispatch(startAddCandidates(candidate,redirect))
    }
        return (
            <div>
                <CandidateForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddCandidate)