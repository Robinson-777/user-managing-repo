import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { UserService } from '../services/UserService'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function CreateUser() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
    });

    const userService = new UserService();
    const dispatch = useDispatch();
    const onSubmit = (data: any, e: any) => {
        userService.createUser(data).then(response => {
            data['_id'] = response._id;
            dispatch(addUser(data));
            e.target.reset();
            navigate("/users");
        });
    };

    useEffect(() => {
        return () => { }
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Create User</h2>
                    <hr></hr>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mrgnbtm">
                            <div className="form-group col-md-6 mrgnbtm15">
                                <label htmlFor="firstName">First Name</label>
                                <input {...register("firstName",
                                    {
                                        required: { value: true, message: 'First Name is required' },
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message: 'First name should be alphabets'
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: 'max 100 characters',
                                        },
                                    })
                                }
                                    type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" />

                                {errors.firstName && <span className='errmsg'>{errors.firstName.message}</span>}
                            </div>
                            <div className="form-group col-md-6 mrgnbtm15">
                                <label htmlFor="lastName">Last Name</label>
                                <input {...register("lastName", {

                                    required: { value: true, message: 'Last Name is required' },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: 'Last name should be alphabets'
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: 'max 100 characters'
                                    }

                                })} type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" />
                                {errors.lastName && <span className='errmsg'>{errors.lastName.message}</span>}
                            </div>
                            <div className="form-group col-md-6 mrgnbtm15">
                                <label htmlFor="emailId">Email Id</label>
                                <input {...register("emailId",
                                    {
                                        required: { value: true, message: 'Email Id is required' },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email'
                                        }
                                    }
                                )} type="text" className="form-control" name="emailId" id="emailId" placeholder="Email Id" />
                                {errors.emailId && <span className='errmsg'>{errors.emailId.message}</span>}
                            </div>
                        </div>
                        <input type="submit" className="btn btn-primary mrgnbtm" />
                    </form>
                </div>
            </div>
        </div>
    )
}