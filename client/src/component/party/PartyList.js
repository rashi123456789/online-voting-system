import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveParty} from '../../actions/partyAction'

import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 
function PartyList(props){
    //console.log(props.party)

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
                props.dispatch(startRemoveParty(id)) 
            } 
        })
    }
    return(
        <div className="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
            <Container>
            <h1 className='pt-5 pb-2'>Party - {props.party.length} </h1>
            <Table striped bordered hover>
                <thead className='thead-dark'>
                    <tr>
                        <th>Id</th>
                        <th>PartyName</th>
                        <th>Show</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.party.map((ele,i) => {
                            return (
                                <tr key={i}>
                                    <td> {i+1} </td>
                                    <td> {ele.name} </td>
                                    <td><Link to={`/partys/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                    <td><Link to={`/partys/editparty/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                    <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Link to="/partys/add">Add Party</Link>
        </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        party: state.party
    }
}

export default connect(mapStateToProps)(PartyList)