import { useState } from "react"
import 'date-fns';

export const useField = (type) => {
    const [value, setValue] = useState('')
    const [date, setDate] = useState(new Date())
    const [price, setPrice] = useState(0)
    const [array, setArray] = useState([])
    
    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onChangeDate = (date) => {
        setDate(date)
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }

    const onChangeArray = (event) => {
        setArray(event.target.value)
    }

    const reset = () => {
        setValue('')
        setDate(new Date())
        setPrice(0)
        setArray([])
    }

    const setArrayData = (obj) => {
        setArray(obj)
    }

    const setPrices = (price) => {
        setPrice(price)
    }

    return {
        setValue,
        type,
        value,
        date,
        price,
        array,
        onChange,
        onChangeDate,
        onChangePrice,
        onChangeArray,
        setArrayData,
        setPrices,
        reset
    }
}