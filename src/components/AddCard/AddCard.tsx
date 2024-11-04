import React from 'react';
import AddButton from '@/components/AddButton/AddButton';
import styles from './addList.module.css';

function AddList() {
	return (
		<div className={styles.addListContainer}>
			<input type="text" placeholder="Add List" className={styles.input} />
			<AddButton />
		</div>
	);
}

export default AddList;
