import axios from 'axios'

const userID = '1234';
const dataURL = 'http://localhost:8080';
const userDataURL = `${dataURL}/user/${userID}`;

const UserDataService = (props) => {

    const createUser = (newUser) => {
        return axios.post(`${dataURL}/user/`, newUser)
    }

    const getUser = (userID) => {
        return axios.get(`${dataURL}/user/`, userID)
    }


}

export default UserDataService;