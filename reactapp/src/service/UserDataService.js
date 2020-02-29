import axios from 'axios'


//API
const dataURL = 'http://localhost:8080/users';


export const getUser = async () => {
    const result = await axios(dataURL)
    return result.data[0]
}



const UserDataService = (props) => {
}

export default UserDataService;