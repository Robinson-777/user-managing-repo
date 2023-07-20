import { createSlice } from "@reduxjs/toolkit";
import { UsersModel } from "../services/UserService";

const initialState: UsersModel[] = [];



export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state = action.payload;
            return state;
        },
        addUser: (state, action) => {
            state.push(action.payload);
            return state;
        },
        editUser: (state, action) => {
            const { _id, firstName, lastName, emailId } = action.payload;
            const existingUser: UsersModel | undefined = state.find((user: UsersModel) => user._id === _id);
            if (existingUser) {
                existingUser.firstName = firstName;
                existingUser.lastName = lastName;
                existingUser.emailId = emailId;
            }
            return state;
        },
        deleteUser: (state, action) => {
            const _id = action.payload;
            state = state.filter((user: any) => user._id !== _id);
            return state;
        }
    }
});

export default userSlice;