import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { findParty} from '../../selectors/partySelector'
import { Container } from 'react-bootstrap'

function PartyShow(props){
    return (
        <Container>
            <h1 className='mt-5'>Party Show</h1>
            <h2 className='mt-5'><b>Party Name:-</b>{props.party.name} </h2>
            <Link to='/partys'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        party:findParty(state.party,id)
    }
}
export default connect(mapStateToProps)(PartyShow)