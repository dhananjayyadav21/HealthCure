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
        `${GlobalUrls.UPDATE_APPOINTMENTS}/${appointmentId}`,
        status
      );
      return response.data;
    } catch (error) {
      console.error("Error in updating appointment status: ", error);
      throw error;
    }
  };


  //============================================== Update appointment status (PUT) ===================================================
  const rescheduleAppointment = async (data) => {
    try {
      const response = await HttpService.PUT(
        `http://localhost:5000/api/appointment/rescheduleAppointment`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error in rescheduling appointment: ", error);
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
        rescheduleAppointment,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
