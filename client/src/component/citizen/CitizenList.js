import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import { startRemoveCitizen} from '../../actions/citizenAction'

import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 
function CitizenList(props){
    //console.log(props.course)

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
                props.dispatch(startRemoveCitizen(id)) 
            } 
        })
    }
    return(
        <div className="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
            <Container>
            <h1 className='pt-5 pb-2'>Citizens - {props.citizen.length} </h1>
            <Table striped bordered hover>
                <thead className='thead-dark'>
                    <tr>
                        <th>Id</th>
                        <th>Voter ID</th>
                        <th>CitizenName</th>
                        <th>D.O.B</th>
                        <th>Father's Name</th>
                        <th>Gender</th>
                        <th>Show</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.citizen.map((ele,i) => {
                            return (
                                <tr key={i}>
                                    <td> {i+1} </td>
                                    <td> {ele.voterId}</td>
                                    <td> {ele.name} </td>
                                    <td>{moment(ele.dob).format('L')}</td>
                                    <td>{ele.fathers_name}</td>
                                    <td>{ele.gender}</td>
                                    <td><Link to={`/citizens/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                    <td><Link to={`/citizens/editcitizen/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                    <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Link to="/citizens/add">Add Citizen</Link>
        </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        citizen: state.citizen
    }
}

export default connect(mapStateToProps)(CitizenList)