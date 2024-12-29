import axios from "axios";
const AuthToken = localStorage.getItem("AuthToken");

class HttpService {
  //============================================= Get httpservice ==================================
  static GET = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          AuthToken: AuthToken,
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
            AuthToken: AuthToken,
          }}, 
      );
      console.log(response)
      return response; 
      
    } catch (error) {
      console.log("accured some error in httpservice(POST) ====> :", error);
      throw error;
    }
  };
}

export default HttpService;
