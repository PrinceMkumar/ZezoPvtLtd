import axios from 'axios';
import AuthServiceUsers from './AuthServiceUsers';

const USER_API_BASE_URL = 'http://localhost:8080/api/users';

class UserService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL, AuthServiceUsers.getAuthHeader());
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId, AuthServiceUsers.getAuthHeader());
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId, AuthServiceUsers.getAuthHeader());
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user, AuthServiceUsers.getAuthHeader());
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user, AuthServiceUsers.getAuthHeader());
    }

}

export default new UserService();