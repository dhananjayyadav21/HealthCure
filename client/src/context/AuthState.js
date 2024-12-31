import React, { useState } from "react";
import AuthContext from "./AuthContext";
import HttpService from "../Service/httpservice";
import * as GlobalUrls from '../GlobalURL'

const AuthState = (props) => {
  //================================== register user Using httpService (post) request ===============================
  const adduser = async (formDataObject) => {
    console.log("//++++",(GlobalUrls.AddUSER))
    try {
      setErrors([]);
      const response = await HttpService.POST(
        // "http://localhost:5000/api/authentication/signup",
        `${GlobalUrls.AddUSER}`,
        formDataObject
      );
      return response.data;
    } catch (error) {
      if (error?.response?.data?.errors) {
        setErrors(error?.response?.data?.errors ?? []);
      }
    }
  };

  //========================================== Login user Using httpService (post) request ===================================
  const login = async (formDataObject) => {
    try {
      const response = await HttpService.POST(
        // "http://localhost:5000/api/authentication/signin",
        `${GlobalUrls.LOGIN_URL}`,
        formDataObject
      );
      return response.data;
    } catch (error) {
      console.error(error?.response?.data?.errors);
      setErrors(error?.response?.data?.errors);
    }
  };

  //===================================================== user info get ============================================
  const UserDetails = async () => {
    try {
      const response = await HttpService.GET(
        // "http://localhost:5000/api/authentication/getuser",
        `${GlobalUrls.GETUSER_URL}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  //======================================================== doctors info get ============================================
  const AllDoctors = async () => {
    try {
      const response = await HttpService.GET(
        // "http://localhost:5000/api/authentication/allDoctor",
        `${GlobalUrls.ALL_DOCTOR_URL}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  //============================================= GetDoctorDetailById get ===============================================
  const GetDoctorDetailById = async (id) => {
    try {
      const response = await HttpService.GET(
        // `http://localhost:5000/api/authentication/GetDoctorDetailById/${id}`,
        `${GlobalUrls.GET_DOCTOR_BY_ID}/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  
  //============================================= GetAvialbeDateForDoctor get ===============================================
  const GetAvialbeDateForDoctor = async (id) => {
    try {
      const response = await HttpService.GET(
        // `http://localhost:5000/api/appointment/getAvialbeDateForDoctor/${id}`
        `${GlobalUrls.AVILABLE_DATE_FOR_DOCTOR}/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  //============================================= GetAvialbeTimeDateAndForDoctor get ===============================================
  const GetAvialbeTimeDateAndForDoctor = async (id, date) => {
    try {
      const response = await HttpService.GET(
        // `http://localhost:5000/api/appointment/getAvialbeTimeDateAndForDoctor/${id}?date=${date}`
        `${GlobalUrls.AVILABLE_TIMEDATE_FOR_DOCTOR}/${id}?date=${date}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  //========================================= appointment Using httpService (post) request ===================================
  const appointment = async (formDataObject) => {
    try {
      const response = await HttpService.POST(
        // "http://localhost:5000/api/appointment/createappointment",
        `${GlobalUrls.APPOINTMENT}`,
        formDataObject
      );
      return response.data;
    } catch (error) {
      console.error(error?.response?.data?.errors);
    }
  };

  //============================================== appointments info get ===================================================
  const GetAppointments = async (appointmentStatus) => {
    try {
      const response = await HttpService.GET(
        // `http://localhost:5000/api/appointment/getappointment?appointmentStatus=${appointmentStatus}`
        `${GlobalUrls.GET_APPOINTMENTS}?appointmentStatus=${appointmentStatus}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  //============================================== Update appointment status (PUT) ===================================================
  const UpdateAppointmentStatus = async (appointmentId, status) => {
    try {
      const response = await HttpService.PUT(
        // `http://localhost:5000/api/appointment/updateAppointment/${appointmentId}`,
        `${GlobalUrls.UPDATE_APPOINTMENTS}/${appointmentId}`,
        status
      );
      return response.data;
    } catch (error) {
      console.error("Error in updating appointment status: ", error);
      throw error;
    }
  };

  const [errors, setErrors] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        adduser,
        login,
        errors,
        UserDetails,
        AllDoctors,
        GetDoctorDetailById,
        GetAvialbeDateForDoctor,
        GetAvialbeTimeDateAndForDoctor,
        appointment,
        GetAppointments,
        UpdateAppointmentStatus,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
