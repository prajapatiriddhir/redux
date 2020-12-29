import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { authServices } from "../services/auth.services";
import {authActions} from '../action/auth.actions'
import {store} from '../store';
import { authConstants } from "../constant/auth.constant";


const Login = (props) => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const history = useHistory();

  useEffect(()=>{
    if(props.user){
      history.push('/');
    }
  },[props.user])

  const handleSubmit =  (event) => {
    event.preventDefault();

    props.dispatch(authActions.login({email,password}))
};


 

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3 className="h3">Login Form</h3>
          <div className="form-group">
            <label className="lable">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="lable">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.password)}
            />
          </div>

          <button type="submit" class="form-control btn-dark">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}
export default connect(mapStateToProps)(Login);
