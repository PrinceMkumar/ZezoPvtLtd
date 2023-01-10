import axios from 'axios';
import AuthServiceTransporters from './AuthServiceTransporters';

const USER_API_BASE_URL = 'http://localhost:8080/api/transporters';

class TransporterService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL, AuthServiceTransporters.getAuthHeader());
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId, AuthServiceTransporters.getAuthHeader());
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId, AuthServiceTransporters.getAuthHeader());
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user, AuthServiceTransporters.getAuthHeader());
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user, AuthServiceTransporters.getAuthHeader());
    }

}

export default new TransporterService();