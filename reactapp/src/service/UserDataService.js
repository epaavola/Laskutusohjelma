import axios from 'axios'

    //API
    const loginURL = 'http://localhost:8080/authenticate'
    const newUserURL = 'http://localhost:8080/register'
    const userURL = 'http://localhost:8080/users'

    //Login to the application using username and password
    export async function userLogin(user, pass) {
        const response = await axios.post(loginURL, {
            username: user,
            password: pass
        })
        return response
    }

    //Get the user data
    export async function getUser() {
        const response = await axios.get(userURL, {
            headers: {
              'Authorization': localStorage.getItem('auth')
            }
        })
        return response
    }

    //POST create new user
    export async function newUser(username,password,nimi,osoite,postitoimipaikka,sahkoposti,tilinro,ytunnus) {
        const response = await axios.post(newUserURL,{
            username: username,
            password: password,
            nimi: nimi,
            osoite: osoite,
            postitoimipaikka: postitoimipaikka,
            sahkoposti: sahkoposti,
            tilinro :tilinro,
            ytunnus: ytunnus
        })
        return response
    }


    const UserDataService = (props) => {
    }

export default UserDataService;