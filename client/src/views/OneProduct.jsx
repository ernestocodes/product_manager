// grab id from params
// use id, axios to relay product info
// useEffect
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const OneProduct = () => {
    const { id } = useParams() //destructure id from params
    const [product, setProduct] = useState()
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container bg-dark text-warning w-50 p-3 d-flex justify-content-center">
            {
                product &&
                <div className="w-100 card bg-secondary text-warning">
                    <div className="card-header">
                        <h2>{product.title}</h2>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Price: {product.price}</h3>
                        <div className="card-text">
                            <ul>
                                <li>Description: {product.description}</li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => handleDelete(id)} className="btn btn-warning ">Delete</button>
                </div>
            }
        </div>
    )
}

export default OneProduct