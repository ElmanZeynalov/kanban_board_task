import React from 'react';
import styles from './taskList.module.css';

function TaskList() {
	return (
		<div className={styles.taskListContainer}>
			<span>Task List</span>
			<i className="bi bi-x" id={styles.taskListXicon}></i>
		</div>
	);
}

export default TaskList;
