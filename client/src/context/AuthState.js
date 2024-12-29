import React, { useState } from 'react'
import AuthContext from './AuthContext'
import HttpService from '../Service/httpservice';

const AuthState = (props) => {

    // register user Using httpService (post) request
    const adduser = async (formDataObject) => {
        try {
           setErrors([]);
           const response = await HttpService.POST(
              "http://localhost:5000/api/authentication/signup",
              formDataObject
            );
            setSignpResponse(response.data);
        } catch (error) {
           if (error?.response?.data?.errors) {
              setErrors(error?.response?.data?.errors??[])
           }
        }
      };

    // Login user Using httpService (post) request
    const login = async (formDataObject) => {
        try {
           const response = await HttpService.POST(
              "http://localhost:5000/api/authentication/signin",
              formDataObject
            );
            setLoginResponse(response.data);
        } catch (error) {
           console.error(error?.response?.data?.errors);
           setErrors(error?.response?.data?.errors)
        }
      };

    //user info get   
    const UserDetails = async ()=>{
            const response = await HttpService.GET('http://localhost:5000/api/authentication/getuser')
            setUserInfo(response.data);
            setUserRole(response.data.user.role)

        }
       
      const [errors, setErrors] = useState([]);
      const [ loginResponse, setLoginResponse] = useState([]);
      const [ signpResponse, setSignpResponse] = useState([]);
      const [ userinfo, setUserInfo] = useState(null);
      const [ userRole, setUserRole] = useState(null);

  return (
    <AuthContext.Provider value={{adduser,signpResponse, login,loginResponse, errors ,UserDetails,userinfo,userRole}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
