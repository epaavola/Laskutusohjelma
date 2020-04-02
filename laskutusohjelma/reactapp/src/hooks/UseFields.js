import { useState } from "react"
import 'date-fns';

export const useField = (type) => {
    const [value, setValue] = useState('')
    const [date, setDate] = useState(new Date())
    const [price, setPrice] = useState(0)
    const [products, setProducts] = useState([])

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onChangeDate = (date) => {
        setDate(date)
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }

    const onChangeProduct = (event) => {
        setProducts(event.target.value)
    }

    const reset = () => {
        setValue('')
        setDate(new Date())
        setPrice(0)
        setProducts([])
    }

    const setProduct = (obj) => {
        setProducts(obj)
    }

    const setPrices = (price) => {
        setPrice(price)
    }

    return {
        type,
        value,
        date,
        price,
        products,
        onChange,
        onChangeDate,
        onChangePrice,
        onChangeProduct,
        setProduct,
        setPrices,
        reset
    }
}