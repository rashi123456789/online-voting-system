import React from 'react'
import {Container, Form} from 'react-bootstrap'
import axios from 'axios'
class CitizenForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.citizen ? props.citizen.name : '',
            voterId: props.citizen ? props.citizen.voterId : '',
            password:props.citizen? props.citizen.password:'',
            fathers_name:props.citizen?props.citizen.fathers_name:'',
            dob:props.citizen?props.citizen.dob:'',
            gender:props.citizen?props.citizen.gender:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            voterId:this.state.voterId,
            password:this.state.password,
            fathers_name: this.state.fathers_name,
            dob:this.state.dob,
            gender:this.state.gender
        }
        this.props.citizen && (formData.id = this.props.citizen._id)
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

    handleChangePassword=(e)=>{
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
                    <h1 className='pt-5 pb-2'>Add Citizen</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="voterid">voterId:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="voterid"
                            name="voterId"
                            placeholder='enter voterId'
                            value={this.state.voterId}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="cname">Name:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="cname"
                            name="name"
                            onBlur={this.handleChangeName}
                        /> <br/><br/>

                        <Form.Label htmlFor="password">Password:-</Form.Label>
                        <Form.Control 
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onFocus={this.handleChangePassword}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="fname">fathersName:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="fname"
                            name="fathers_name"
                            placeholder='enter fathersname'
                            value={this.state.fathers_name}
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

                        <Form.Label htmlFor="dob">DOB:-</Form.Label>
                        <Form.Control
                            type="date"
                            id="dob"
                            name="dob"
                            value={this.state.dob}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        
                        <input type="submit" value="Submit" className='btn btn-secondary'/>
                    </Form>
                </Container>
            </div>
        )
    }
}
export default CitizenForm