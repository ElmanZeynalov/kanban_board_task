import React from 'react';
import styles from './addList.module.css';
import AddButton from '@/components/AddButton/AddButton';

function AddList() {
	return (
		<div className={styles.addListContainer}>
			<input type="text" placeholder="Add List" className={styles.input} />
			<AddButton />
		</div>
	);
}

export default AddList;
