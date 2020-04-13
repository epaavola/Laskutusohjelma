import axios from 'axios'

    //API URLS
    const dataURL = 'http://localhost:8080/'
    const clientsURL = 'http://localhost:8080/customers'

    //GET get all the clients from database
    export async function getCustomers() {
        const response = await axios.get(clientsURL, {
            headers: { 'Authorization': localStorage.getItem('auth')}
        })
        return response
    }    

    //POST create new client
    export const newClient = async () => {
        axios({
            method: 'POST',
            url: clientsURL,
            headers: {
              'Authorization': 'Basic ' + localStorage.getItem('auth')
            },
            data: {yritysnimi: "Hunaja Oy", ytunnus: "277492-2", yhthlo: "Jari-Pekka (JP)", osoite: "Mannerheimintie 23", postitoimipaikka: "00200 Helsinki", sposti: "jp@hunaja.fi"}
        })
    }
    //DELETE delete client
    export const deleteClient = (id, e) => {
        e.preventDefault()
        return axios.delete(clientsURL + "/" + id, {
            headers: {
              'Authorization': 'Basic ' + localStorage.getItem('auth')
            }
        })
    }
    
    //PUT update client
    export const updateClient = (id, e) => {
        e.preventDefault()
        console.log("Päivitä asiakas: " + id)
        axios.put(`${dataURL}${id}`)
    } 

const ClientDataService = (props) => {

}

export default ClientDataService;