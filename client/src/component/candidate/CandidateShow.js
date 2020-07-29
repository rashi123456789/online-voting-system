import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { findCandidate} from '../../selectors/candidateSelector'
import { Container } from 'react-bootstrap'

function CandidateShow(props){
    return (
        <Container>
            <h1 className='mt-5'>Candidate Show</h1>
            <h2 className='mt-5'><b>Candidate Name:-</b>{props.candidate.name} </h2>
            <Link to='/candidates'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        candidate:findCandidate(state.candidate,id)
    }
}
export default connect(mapStateToProps)(CandidateShow)