import React from 'react';
import styles from './UndoRedo.module.css';
function UndoRedo() {
	return (
		<div className={styles.UndoRedo}>
			<button className={styles.buttonUndoRedo}>Undo</button>
			<button className={styles.buttonUndoRedo}>Redo</button>
		</div>
	);
}

export default UndoRedo;
