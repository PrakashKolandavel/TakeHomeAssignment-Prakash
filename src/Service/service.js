import axios from "axios";
class Service {

  get = (path) => {
    return axios.get(path,{
        headers:{
            Accept:'application/json'
        }
    }).then((response) => response);
  };

 
}

const service = new Service();

export default service;
