import React from 'react'
import {Container, Form} from 'react-bootstrap'
class PartyForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.party ? props.party.name : '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
        }
        this.props.party && (formData.id = this.props.party._id)
        this.props.handleEditSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Party</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="party">Name:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="party"
                            name="name"
                            placeholder='enter party name'
                            value={this.state.party}
                            onChange={this.handleChange}
                        /> <br/><br/>
                       
                        <input type="submit" value="Submit" className='btn btn-secondary'/>
                    </Form>
                </Container>
            </div>
        )
    }
}
export default PartyForm