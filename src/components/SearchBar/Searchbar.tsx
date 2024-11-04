import React from 'react';
import styles from './searchbar.module.css';

function Searchbar() {
	return (
		<div className={styles.searchbarContainer}>
			<input type="text" placeholder="Search for a task" className={styles.input} />
		</div>
	);
}

export default Searchbar;
