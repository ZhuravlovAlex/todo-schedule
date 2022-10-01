import React from "react";
import styles from "./Registration.module.css"

function Registration () {
	return (
		<form className={styles.registr} >
			<input 
				required
				placeholder='Please, enter your name'/>
			<button type="submit">Enter</button>
		</form>
	)
}

export default Registration