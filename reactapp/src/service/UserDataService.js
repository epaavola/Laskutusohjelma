import axios from 'axios'

    //API
    const loginURL = 'http://localhost:4567/login'
    const newUserURL = 'http://localhost:4567/createuser'
    const userURL = 'http://localhost:4567/api/user'

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

    //POST create new user
    export const newUser = (e) => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                username: 'esa',
                password: 'qwerty'
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