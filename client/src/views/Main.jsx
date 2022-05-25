import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateForm from '../components/CreateForm'
import DisplayList from '../components/DisplayList'

const Main = () => {
    const [products, setProducts] = useState()
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    const reload = ()=>{
        setRefresh(!refresh)
    }

    return (
        <div>
            <CreateForm reload={reload}/>
            {
                products &&
                <DisplayList products={products} reload={reload} />
            }
        </div>
    )
}

export default Main