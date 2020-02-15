import axios from 'axios'

const clientID = 'Leipomo';
const dataURL = 'http://localhost:8080/api';
const clientDataURL = `${dataURL}/yritykset/`;



const ClientDataService = (props) => {

    const createClient = (newClient) => {
        return axios.post(`${dataURL}/client/`, newClient)
    }

    const getClient = (clientID) => {
        return axios.get(`${dataURL}/yritykset/`, clientID)
    }

    function getAllClients() {
        const fetchData = async () => {
            const result = await axios(clientDataURL)
            return result.data   
          };
          return fetchData()
    }

}

export default ClientDataService;