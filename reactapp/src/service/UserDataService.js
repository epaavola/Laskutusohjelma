import axios from 'axios'

    //API
    const loginURL = 'http://localhost:8080/authenticate'
    const newUserURL = 'http://localhost:8080/register'
    const userURL = 'http://localhost:8080/user'

    //Login to the application using username and password
    export async function userLogin(user, pass) {
        const response = await axios.post(loginURL, {
            username: user,
            password: pass
        })
        return response
    }

    //Get the user data
    export async function getUser(auth) {
        const response = await axios.get(userURL, {
            headers: { 'Authorization': localStorage.getItem('auth')}
        })
        return response
    }

    //POST create new user
    export async function newUser(username,password,name,address,city,email,bankAccount,vatID) {
        const response = await axios.post(newUserURL,{
            username: username,
            password: password,
            name: name,
            address: address,
            city: city,
            email: email,
            bankAccount :bankAccount,
            vatID: vatID
        })
        return response
    }


    const UserDataService = (props) => {
    }

export default UserDataService;