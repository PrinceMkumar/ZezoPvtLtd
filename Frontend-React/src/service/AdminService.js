import axios from 'axios';
import AuthServiceAdmin from './AuthServiceAdmin';

const USER_API_BASE_URL = 'http://localhost:8080/api/adminlogin';

class AdminService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL, AuthServiceAdmin.getAuthHeader());
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId, AuthServiceAdmin.getAuthHeader());
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId, AuthServiceAdmin.getAuthHeader());
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user, AuthServiceAdmin.getAuthHeader());
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user, AuthServiceAdmin.getAuthHeader());
    }

}

export default new AdminService();