import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const DateAddForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const getData = {
            date: data.date,
            price: parseFloat(data.price)
        }
        if (data.price > 0) {
            axios.put(`http://localhost:5000/bitcoin`, getData)
                .then(res => {
                    console.log(res.data)
                    if(res.data?.acknowledged){
                        alert('Data saved successfully!!!')
                        // reset()
                    }
                });
        }
        else alert('Please give us valid number.')
    };

    return (
        <div style={{border: '3px solid red', borderRadius: 5}} className="mt-5 mb-5 p-1">
            <h2 className="text-center text-danger fw-bolder">Please added Date and Bitcoin stock price</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="m-4">
                    <label htmlFor="date">Enter Date</label>
                    <input type="date" {...register("date", { required: true })} className="form-control" />
                    {errors.date && <span className="text-danger">Date field is required</span>}
                </div>
                <div className="m-4">
                    <label htmlFor="price">Stock Price</label>
                    <input type="number" {...register("price", { required: true })} className="form-control" placeholder="Enter Stock Price" />
                    {errors.price && <span className="text-danger">This field is required</span>}
                </div>

                <div className="m-4">
                    <input type="submit" className="form-control btn btn-danger" />
                </div>
            </form>
        </div>
    );
};

export default DateAddForm;