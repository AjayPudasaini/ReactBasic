import { event } from "jquery";
import { Component } from "react";
import axios from 'axios';

class Register extends Component{
    state = {
        username : "",
        email : "", 
        password : "",

    }
    sendUserData = () =>
    {
        const data = {
            username : this.state.username, 
            email : this.state.email,
            password : this.state.password
        }

        axios.post("http://localhost:1337/register/teacher", data).then().catch()
    }
    render()
    {
        return(
            <div className='m-5'>
                <h1>Register</h1>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={(event)=>{this.setState({username:event.target.value})}} placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"  value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Password"/>
                    </div>
                
                    <button type="submit" onClick={this.sendUserData} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}


export default Register