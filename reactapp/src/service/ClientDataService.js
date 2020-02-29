import axios from 'axios'

    //API
    const dataURL = 'http://localhost:8080/users';

    //Get all clients from database through API
    export const getClients = async () => {
        const result = await axios(dataURL)
        return result.data     
    }
    //POST create asiakas
    export const newClient = (e) => {
        e.preventDefault()
        console.log("Uusi asiakas")
        axios.post(`${dataURL}`)
    } 

    //DELETE delete asiakas
    export const deleteClient = (id, e) => {
        e.preventDefault()
        console.log("Poista asiakas: " + id)
        axios.delete(`${dataURL}${id}`)
    }
    
    //PUT update asiakas
    export const updateClient = (id, e) => {
        e.preventDefault()
        console.log("Päivitä asiakas: " + id)
        axios.put(`${dataURL}${id}`)
    } 

const ClientDataService = (props) => {

}

export default ClientDataService;