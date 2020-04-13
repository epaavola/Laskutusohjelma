import strings from "../LocalizedStrings"

/**
 * Lokalisaattori
 */

const initialState = localStorage.getItem("language")
const reducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)
    switch (action.type) {
        case 'en':
            state = "en"
            localStorage.setItem("language", state)
            console.log(localStorage.getItem("language")+ " storage lang")
            strings.setLanguage(state)
            return state;
        case 'alb':
            state = "alb"
            localStorage.setItem("language", state)
            console.log(localStorage.getItem("language")+ " storage lang")
            strings.setLanguage(state)
            return state;
        case 'fi':
            state = 'fi'
            localStorage.setItem("language", state)
            strings.setLanguage(state)
            console.log(localStorage.getItem("language")+ " storage lang")
            return state;
        default: 
        strings.setLanguage("fi")
        return state
    }
}

export default reducer