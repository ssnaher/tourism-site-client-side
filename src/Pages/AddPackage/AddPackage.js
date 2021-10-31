import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://gory-hollow-85352.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-package">
            <h2>Add a package</h2><br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <input type="number" {...register("price", { min: 100, max: 10000 })} placeholder="price" />
                <input {...register("img")} placeholder="image-url" />
                <input {...register("description")} placeholder="description" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;