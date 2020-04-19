import axios from 'axios'

    //API URLS
    const dataURL = 'http://localhost:8080/'
    const clientsURL = 'http://localhost:8080/customers'
    const postClientURL = 'http://localhost:8080/customer'

    //GET get all the clients from database
    export async function getCustomers() {
        const response = await axios.get(clientsURL, {
            headers: { 'Authorization': localStorage.getItem('auth')}
        })
        return response
    }    

    //POST create new user
    export async function newCustomer(company,vatID,name,address,city,email) {
        const options = { headers: { 'Authorization': localStorage.getItem('auth')}}
        const response = await axios.post(postClientURL,{
            company: company,
            vatID: vatID,
            name: name,
            address: address,
            city: city,
            email: email,
        }, options)
        return response
    }

    //DELETE delete client
    export async function deleteCustomer(id,e) {
        e.preventDefault()
        const response = await axios.delete(clientsURL + "/" + id, {
            headers: {
              'Authorization': localStorage.getItem('auth')
            }
        })
        return response
    }
    
    //PUT update client
    export const updateClient = (id, e) => {
        e.preventDefault()
        
    } 

const ClientDataService = (props) => {

}

export default ClientDataService;