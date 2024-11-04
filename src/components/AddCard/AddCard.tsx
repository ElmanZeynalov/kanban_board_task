import React from 'react';
import AddButton from '@/components/AddButton/AddButton';
import styles from './addCard.module.css';

function AddCard() {
	return (
		<div className={styles.addCardContainer}>
			<input type="text" placeholder="Add Card" className={styles.input} />
			<AddButton />
		</div>
	);
}

export default AddCard;
