import axios from 'axios'

    //API
    const loginURL = 'https://laskutus-cors.herokuapp.com/http://localhost:4567/login'
    const newUserURL = 'https://laskutus-cors.herokuapp.com/http://localhost:4567/createuser'
    const userURL = 'https://laskutus-cors.herokuapp.com/http://localhost:4567/api/user'

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

    //GET get the user data
    export const getUser = async () => {
        return axios.get(userURL, {
            headers: {
              'Authorization': 'Basic' + localStorage.getItem('auth')
            }
        }).then(res => {return res.data})
        
    }

    export const newUser2 = (username,password,nimi,osoite,postitoimipaikka,sahkoposti,tilinro,ytunnus) => {
        axios({
            method: 'POST',
            url: newUserURL,
            data: {username: username, password: password, nimi: nimi, osoite: osoite, postitoimipaikka: postitoimipaikka, sahkoposti: sahkoposti, tilinro: tilinro, ytunnus: ytunnus}
        })
        console.log(username)
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