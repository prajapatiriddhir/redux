import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom';
import { authServices } from "../services/auth.services";
import {authActions} from '../action/auth.actions'

const Register = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("pistol");
  const history = useHistory();


  useEffect(()=>{
    if(props.user){
      history.push('/');
    }
  },[props.user])

  const handleSubmit =  (event) => {
    event.preventDefault();

    props.dispatch(authActions.register({email,password}))
};


  

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3 className="h3"> Registration Form </h3>
          <div className="form-group">
            <label className="lable"> First Name </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="lable"> Last Name </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="lable"> Email </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="lable"> Password </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="form-control btn-dark"> Register </button>
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

export default connect(mapStateToProps)(Register);
