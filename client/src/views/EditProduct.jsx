// get one + create
// grab id from params
// use id with axios to get from backend
// useffect, usestate
// form, input (useState)
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'


const EditProduct = () => {
    const { id } = useParams() //destructure id from params
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                const product = res.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, { title, price, description })
            .then(res => history.push("/"))
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <div className="d-flex justify-content-center">
                    <h1>Edit a Product!</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="d-flex justify-content-center form-label">Title</label>
                        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} className="form-control" value={title} />
                    </div>
                    <div>
                        <label className="d-flex justify-content-center form-label mt-3">Price</label>
                        <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} className="form-control" value={price} />
                    </div>
                    <div>
                        <label className="d-flex justify-content-center form-label mt-3">Description</label>
                        <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} className="form-control" value={description} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-warning mt-3 mb-3">Submit</button>
                    </div>
                </form>
            </div>
            <button onClick={() => handleDelete(id)} className="btn btn-warning ">Delete</button>
        </div>
    )
}

export default EditProduct