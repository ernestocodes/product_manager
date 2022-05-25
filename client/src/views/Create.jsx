// have a form and then send the info to backend
// form, input: useState
// axios: send info to backend
// history: redirect
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, { title, price, description })
            .then(res => {
                console.log(res)
                history.push("/products")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1>Add a Product!</h1>
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
    )
}

export default Create