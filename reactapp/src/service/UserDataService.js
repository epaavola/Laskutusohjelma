import axios from 'axios'


//API
const dataURL = 'http://localhost:8080/api/user';

const config = {
    headers: { Authorization: "Basic YXNkOllYTmtZWE5rWVE9PQ==" }
  }


export const getUser = async () => {
    const result = await axios(dataURL, config)
    return result.data[0]
}



const UserDataService = (props) => {
}

export default UserDataService;