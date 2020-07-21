import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { findCitizen} from '../../selectors/citizenSelector'
import { Container } from 'react-bootstrap'

function CitizenShow(props){
    return (
        <Container>
            <h1 className='mt-5'>Citizen Show</h1>
            <h2 className='mt-5'><b>Citizen Name:-</b>{props.citizen.name} </h2>
            <Link to='/citizens'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        citizen:findCitizen(state.citizen,id)
    }
}
export default connect(mapStateToProps)(CitizenShow)