import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import { startRemoveCandidate} from '../../actions/candidateAction'

import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 
function CandidateList(props){
    console.log(props.candidate)

    const handleRemove = (id) => {
        swal({
            title: "Are you sure ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Successfully Deleted", {	
                    icon: "success",
                });
                props.dispatch(startRemoveCandidate(id)) 
            } 
        })
    }
    return(
        <div className="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
            <Container>
            <h1 className='pt-5 pb-2'>Candidates - {props.candidate.length} </h1>
            <Table striped bordered hover>
                <thead className='thead-dark'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Qualification</th>
                        <th>Party</th>
                        <th>Gender</th>
                        <th>Show</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.candidate.map((ele,i) => {
                            return (
                                <tr key={i}>
                                    <td> {i+1} </td>
                                    <td> {ele.name}</td>
                                    <td> {ele.age} </td>
                                    <td>{ele.qualification}</td>
                                    <td>{ele.party.name}</td>
                                    <td>{ele.gender}</td>
                                    <td><Link to={`/candidates/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                    <td><Link to={`/candidates/editcandidate/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                    <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Link to="/candidates/add">Add Candidate</Link>
        </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        party:state.party,
        candidate: state.candidate,
    }
}

export default connect(mapStateToProps)(CandidateList)