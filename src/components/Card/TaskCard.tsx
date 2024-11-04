import React from 'react';
import TaskList from '@/components/List/TaskList';
import AddList from '@/components/addList/AddList';
import styles from './taskCard.module.css';

function TaskCard() {
	return (
		<div className={styles.container}>
			<div className={styles.taskCardHeader}>
				<h1 className={styles.h1}>TO DO</h1>
				<i className="bi bi-x" id={styles.xIcon}></i>
			</div>
			<div className={styles.taskList}>
				<TaskList />
				<TaskList />
				<TaskList />
			</div>
			<div className={styles.addList}>
				<AddList />
			</div>
		</div>
	);
}

export default TaskCard;
