import axios from "axios";

class HttpService {
  //============================================= Get httpservice ==================================
  static GET = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          AuthToken: localStorage.getItem("AuthToken"),
        },
      });
      return response;
    } catch (error) {
      console.log("accured some error in httpservice(GET) ====> :", error);
      throw error;
    }
  };

  //============================================= Get httpservice ==================================
  static POST = async (url, body) => {
    try {
      const response = await axios.post(url,
        body,
        {headers:{
            AuthToken: localStorage.getItem("AuthToken"),
          }}, 
      );
      return response; 
    } catch (error) {
      console.log("accured some error in httpservice(POST) ====> :", error);
      throw error;
    }
  };


  //============================================= PUT httpservice ==================================
  static PUT = async (url, body) => {
    try {
      const response = await axios.put(url, 
        body, 
        {
          headers: {
            AuthToken: localStorage.getItem("AuthToken"),
          },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log("Occurred some error in httpservice(PUT) ====> :", error);
      throw error;
    }
  };

}

export default HttpService;
