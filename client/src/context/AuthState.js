import React, { useState } from "react";
import AuthContext from "./AuthContext";
import HttpService from "../Service/httpservice";

const AuthState = (props) => {
  // register user Using httpService (post) request
  const adduser = async (formDataObject) => {
    try {
      setErrors([]);
      const response = await HttpService.POST(
        "http://localhost:5000/api/authentication/signup",
        formDataObject
      );
      return response.data;
    } catch (error) {
      if (error?.response?.data?.errors) {
        setErrors(error?.response?.data?.errors ?? []);
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
      return response.data;
    } catch (error) {
      console.error(error?.response?.data?.errors);
      setErrors(error?.response?.data?.errors);
    }
  };

  //user info get
  const UserDetails = async () => {
    try {
      const response = await HttpService.GET(
        "http://localhost:5000/api/authentication/getuser"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  //doctors info get
  const AllDoctors = async () => {
    try {
      const response = await HttpService.GET(
        "http://localhost:5000/api/authentication/allDoctor"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

   //doctors info get
   const  GetDoctorDetailById = async (id) => {
    try {
      const response = await HttpService.GET(
        `http://localhost:5000/api/authentication/GetDoctorDetailById/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

 

  const [errors, setErrors] = useState([]);

  return (
    <AuthContext.Provider
      value={{ adduser, login, errors, UserDetails, AllDoctors,GetDoctorDetailById }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
