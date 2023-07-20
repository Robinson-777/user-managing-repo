import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { UserService, UsersModel } from '../services/UserService'
import { toast } from 'react-toastify';
import { editUser } from '../redux/actions';
import { useDispatch } from 'react-redux';


export default function EditUserModal({ user }: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const userService = new UserService();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
  });
  const onSubmit = (data: any) => {
    data['_id'] = user._id;
    userService.editUser(data).then(response => {
      dispatch(editUser(data));
      setShow(false);
      toast.success("user has updated sucessfully", { position: toast.POSITION.TOP_CENTER });
    }).catch((error) => {
      toast.error("something went wrong", { position: toast.POSITION.TOP_CENTER });
    });
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>User Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="userId">Id</label>
                  <input {...register("id")} type="text" className="form-control" defaultValue={user.id} name="id" id="id" disabled />
                </div>

            </div> */}
            <div className="row mrgnbtm15">
              <div className="form-group">
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
                } type="text" className="form-control" defaultValue={user.firstName} name="firstName" id="firstName" placeholder="First Name" />
                {errors.firstName && <span className='errmsg'>{errors.firstName.message}</span>}
              </div>
            </div>
            <div className="row mrgnbtm15">
              <div className="form-group">
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

                })} type="text" className="form-control" defaultValue={user.lastName} name="lastName" id="lastName" placeholder="Last Name" />
                {errors.lastName && <span className='errmsg'>{errors.lastName.message}</span>}
              </div>
            </div>
            <div className="row mrgnbtm15">
              <div className="form-group">
                <label htmlFor="emailId">Email Id</label>
                <input {...register("emailId",
                  {
                    required: { value: true, message: 'Email Id is required' },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email'
                    }
                  }
                )} type="text" className="form-control" defaultValue={user.emailId} name="emailId" id="emailId" placeholder="Email Id" />
                {errors.emailId && <span className='errmsg'>{errors.emailId.message}</span>}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="btncenter">
              <input type="submit" className="btn btn-primary" />
            </div>
          </Modal.Footer>
        </form >
      </Modal >

    </>
  );
}