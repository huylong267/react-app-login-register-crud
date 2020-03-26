import React,{ Component } from "react";

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName :'',
             password :''
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
                                    <input type="text" id="inputEmail" placeholder="Email address" name="email" className="form-group"/>
                                    <label htmlFor="inputEmail">Email address</label>
                                    <div className="invalid-feedback"></div>     
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;