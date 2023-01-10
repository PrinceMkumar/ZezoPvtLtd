import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/';


class AuthServiceAdmin {

    alogin(credentials){
        return axios.post
        (USER_API_BASE_URL + "api/auth/signin", credentials);
    }

    

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getAuthHeader() {
        return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }

    logOut() {
        localStorage.removeItem("userInfo");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthServiceAdmin();