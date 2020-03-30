import React,{ Component } from "react";
import {Redirect} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
             userName :'',
             password :'',
             redirect :false
        }
    }
    handleChangeUserName = (event)  => {
        this.setState({userName: event.target.value});
    }
    
    handleChangePassword = (event) => {
        this.setState({password :event.target.value});
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let userName = this.state.userName;
        let password = this.state.password
        
        if(userName === 'h.long' && password === 'abc'){
            console.log("đăng nhập thành công");
            localStorage.setItem('token',this.makeid(10));
            localStorage.setItem('isLogin',true);
            this.setState({redirect :true});
        }else if(userName !== 'h.long'){
            console.log("sai username");
        }else if(password !== 'abc'){
            console.log("sai password");
        }
    
    }

    makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    
    renderRedirect = () =>{
        if(this.state.redirect){
            return   <Redirect to='/dashboard'/>
        }
    }
  
    render(){
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="inputEmail" placeholder="Email address" name="userName" className="form-group" onChange= {this.handleChangeUserName}/>
                                    <label htmlFor="inputEmail">Email address</label>
                                    <div className="invalid-feedback">Please provide a valid Email.</div>     
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" placeholder="Password" name="password" className="form-group" onChange= {this.handleChangePassword}/>
                                    <label htmlFor="inputPassword">Password</label>
                                    <div className="invalid-feedback"> Please provide a valid Password.</div>     
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" onClick={this.handleSubmit}>Login &nbsp;&nbsp;&nbsp;
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}
export default Login;