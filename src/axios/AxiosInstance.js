import axios from 'axios'

const baseURL = "http://127.0.0.1:8000/"


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');



const AI = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken
    }
})


const AI2 = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken
    }
})


async function logoutUser () {
    try{
        const res = await AI2.get("http://127.0.0.1:8000/logout/")
        console.log( res )
        if(res.status===200){
        }
      }
      catch(e){

      }
  }








const refreshToken = async () => {
  try {
    const resp = await AI2.post("http://127.0.0.1:8000/refresh/");
    console.log("refresh token", resp.data, 444);
    return resp.data;
  } catch (e) {
    console.log("Error",e); 
    await logoutUser() 
    return e
  }
};



AI.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);




AI.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    console.log(error, 11111 )
    const originalRequest = error.config;
    if ( (error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
      originalRequest._retry = true;

      const resp = await refreshToken();
      const access_token = resp.access ;
      if ( access_token ){
        console.log('at', access_token, 555)
        AI.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
        return AI(originalRequest);
      } 
    }
    
    return Promise.reject(error);
  }
);





export { AI }




