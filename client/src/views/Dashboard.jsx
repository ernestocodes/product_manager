// grab allProducts from backend
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [products, setProducts] = useState()

    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    // option 1
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    // option 2
    // const handleDelete = (id) =>{
    //     axios.delete(`http://localhost:8000/api/products/${id}`)
    //     .then(res=>{
    //         const filteredList = products.filter((product)=>product._id!==id)
    //         setProducts(filteredList)
    //     })
    //     .catch(err=>console.log(err))
    // }

    return (
        <div className="bg-dark text-warning">
            <h1 className="d-flex justify-content-center">All Products</h1>
            <table className="table text-warning">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products &&
                        products.map((product, i) => (
                            <tr key={i}>
                                <td><Link className="text-warning" to={`/products/${product._id}`}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><Link className="text-warning" to={`/products/${product._id}/edit`}>Edit</Link> | <button onClick={() => handleDelete(product._id)} className="btn btn-warning ">Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard