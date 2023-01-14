import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeTitleAction, withParamsAction} from "../../redux/actions";

function MainPage(props) {

    const dispatch = useDispatch()
    const title = useSelector(state => state.titleReducer.title)

    const changeTitle = () => {
        dispatch(changeTitleAction())
    }

    const withParams = () => {
        dispatch(withParamsAction("hello geektech"))
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={withParams}>wuth params</button>

        </div>
    );
}

export default MainPage;