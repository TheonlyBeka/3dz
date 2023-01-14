import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, changeInputAction, deleteAction} from "../../redux/actions";
import User from "../../components/user/User";


function UsersPage() {

    const dispatch = useDispatch()

    const {value, users} = useSelector(state => state.usersReducer)
    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(value))
    }

    const deleteUser = () => {
        dispatch(deleteAction(value))
    }

    return (
        <div>
            <input
                value={value}
                type="text"
                placeholder="name"
                onChange={changeInput}
            />
            <button onClick={addUser}>add</button>
            <button onClick={deleteUser} >delete all</button>
            {users.length > 0
                ?
                users.map((user, index) => <User key={index} userName={user}/>)
                    :
                <p>Пользователей нет</p>
            }
        </div>
    );
}

export default UsersPage;