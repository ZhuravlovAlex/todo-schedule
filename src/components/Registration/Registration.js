import React from "react";
import styles from "./Registration.module.css"
import { signUp } from '../../store/action/signUp';

function Registration({ register, dispatch }) {

    let input;
    const submitHandler = e => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return

        dispatch(signUp());
    }

    return register ? <div></div> :
        <form className={styles.registr} onSubmit={submitHandler}>
            <input
                required
                placeholder='Please, enter your name'
                ref={node => input = node} />
            <button type="submit">Enter</button>
        </form>
}

export default Registration;