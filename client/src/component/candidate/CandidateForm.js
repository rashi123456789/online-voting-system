import React from 'react'
import {Container, Form} from 'react-bootstrap'
import axios from 'axios'
import {connect} from 'react-redux'
class CandidateForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.candidate ? props.candidate.name : '',
            age: props.candidate ? props.candidate.age : '',
            qualification:props.candidate? props.candidate.qualification:'',
            party:props.candidate?props.candidate.party:'',
            biography:props.candidate?props.candidate.biography:'',
            promises:props.candidate?props.candidate.promises:'',
            gender:props.candidate?props.candidate.gender:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            age:this.state.age,
            qualification:this.state.qualification,
            party: this.state.party,
            biography:this.state.biography,
            promises:this.state.promises,
            gender:this.state.gender
        }
        this.props.candidate && (formData.id = this.props.candidate._id)
        this.props.handleEditSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeName=(e)=>{
        const name=e.target.value
        this.setState({
            name
        })
    }

    handleChangeAge=(e)=>{
        axios.get('https://api.genderize.io/?name='+this.state.name)
        .then(response=>{
            const user=response.data
            this.setState({gender:user.gender})
        })
    }

    handleRadioChange=(gender)=>{
        this.setState({gender})
    }
    render(){
        return(
            <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Candidate</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="cname">Name:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="cname"
                            name="name"
                            onBlur={this.handleChangeName}
                        /> <br/><br/>

                        <Form.Label htmlFor="age">Age:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="age"
                            name="age"
                            value={this.state.age}
                            onFocus={this.handleChangeAge}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="qualification">Qualification:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="qualification"
                            name="qualification"
                            placeholder='enter qualification'
                            value={this.state.qualification}
                            onChange={this.handleChange}
                        /> <br/><br/>
                        <Form.Label>Gender:-</Form.Label>
                        <Form.Check inline label='Male'
                            type="radio"
                            id="male"
                            name="gender"
                            checked={this.state.gender==='male'}
                            onChange={()=>{this.handleRadioChange('male')}}
                        /> 

                        <Form.Check inline label='Female'
                            type="radio"
                            id="female"
                            name="gender"
                            checked={this.state.gender==='female'}
                            onChange={()=>{this.handleRadioChange('female')}}
                        /> <br/><br/>

                        <Form.Label htmlFor="promises">Promises:-</Form.Label>
                        <Form.Control as='textarea' rows='3'
                            type="date"
                            id="promises"
                            name="promises"
                            value={this.state.promises}
                            onChange={this.handleChange}
                        /> <br/><br/>

                       <Form.Label htmlFor="biography">Biography:-</Form.Label>
                        <Form.Control as='textarea' rows='3'
                            type="date"
                            id="biography"
                            name="biography"
                            value={this.state.biography}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor='party'>Party Name:-</Form.Label>                   
                        <Form.Control as="select" name='party' id='party' value={this.state.party} onChange={this.handleChange}>
                            <option value=''>----select----</option>
                            {
                                this.props.party.map((party)=>{
                                    return <option value={party._id} key={party._id}>{party.name}</option>
                                })
                            }
                        </Form.Control><br/><br/>
  
                        <input type="submit" value="Submit" className='btn btn-secondary'/>
                    </Form>
                </Container>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        party:state.party
    }
}
export default connect(mapStateToProps)(CandidateForm)