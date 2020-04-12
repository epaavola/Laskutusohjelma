import axios from 'axios'

    //API
    const loginURL = 'http://localhost:8080/authenticate'
    const newUserURL = 'http://localhost:8080/register'
    const userURL = 'http://localhost:8080/users'

    //POST Login to the application using username and password
    export const userLogin = async (user, pass) => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                username: user,
                password: pass
            })
        };
        const response = await fetch(loginURL, options)
        const data = await response.json()
        localStorage.setItem('auth', data.data) // Save auth token to the local storage
        return data
    }

    export const userLogin2 = async (user, pass) => {
        axios.post(loginURL, {
            username: user,
            password: pass
        }).then(res => {
            console.log(res.data)
            return res.data
        })
    }

    //GET get the user data
    export const getUser = async () => {
        return axios.get(userURL, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        }).then(res => {return res.data})
        
    }

    export const newUser2 = (username,password,nimi,osoite,postitoimipaikka,sahkoposti,tilinro,ytunnus) => {
        axios.post(newUserURL,{
            username: username,
            password: password,
            nimi: nimi,
            osoite: osoite,
            postitoimipaikka: postitoimipaikka,
            sahkoposti: sahkoposti,
            tilinro :tilinro,
            ytunnus: ytunnus}
        ).then(function(response){console.log(response)
        }).catch(function(error) {console.log(error)}
        )
    }

    //POST create new user
    export const newUser = (username,password,nimi,osoite,postitoimipaikka,sahkoposti,tilinro,ytunnus) => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "username": username,
                "password": password,
                nimi: nimi,
                osoite: osoite,
                postitoimipaikka: postitoimipaikka,
                sahkoposti: sahkoposti,
                tilinro: tilinro,
                ytunnus: ytunnus
            })
        };
        fetch(newUserURL, options)
        .then(response => {
        console.log(response.status);
        });
    }

    const UserDataService = (props) => {
    }

export default UserDataService;