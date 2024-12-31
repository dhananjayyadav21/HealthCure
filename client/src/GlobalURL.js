export const BASEURL = process.env.REACT_APP_API_KEY

export const AddUSER = `${BASEURL}api/authentication/signup`
export const LOGIN_URL = `${BASEURL}api/authentication/signin`

export const GETUSER_URL = `${BASEURL}api/authentication/getuser`
export const ALL_DOCTOR_URL = `${BASEURL}api/authentication/allDoctor`
export const GET_DOCTOR_BY_ID = `${BASEURL}api/authentication/GetDoctorDetailById`

export const AVILABLE_DATE_FOR_DOCTOR = `${BASEURL}api/appointment/getAvialbeDateForDoctor`
export const AVILABLE_TIMEDATE_FOR_DOCTOR = `${BASEURL}api/appointment/getAvialbeTimeDateAndForDoctor`

export const APPOINTMENT = `${BASEURL}api/appointment/createappointment`
export const GET_APPOINTMENTS = `${BASEURL}api/appointment/getappointment`
export const UPDATE_APPOINTMENTS = `${BASEURL}api/appointment/updateAppointment`