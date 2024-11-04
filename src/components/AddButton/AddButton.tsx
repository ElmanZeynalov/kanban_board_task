import React from 'react';
import styles from './addButton.module.css';

function AddButton() {
	return (
		<button className={styles.addListButton}>
			<span>Add List</span>
		</button>
	);
}

export default AddButton;
