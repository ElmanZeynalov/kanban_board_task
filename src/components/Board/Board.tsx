import React from 'react';
import Searchbar from '@/components/SearchBar/Searchbar';
import UndoRedo from '@/components/UndoRedo/UndoRedo';
import TaskCard from '@/components/Card/TaskCard';
import AddCard from '@/components/AddCard/AddCard';
import styles from './board.module.css';

function Board() {
	return (
		<div className={styles.boardContainer}>
			<div className={styles.h1Board}>
				<h1>Kanban Board</h1>
			</div>
			<div className={styles.searchBar}>
				<Searchbar />
			</div>
			<div className={styles.undoRedo}>
				<UndoRedo />
			</div>
			<div className={styles.taskCardAddList}>
				<div className={styles.taskCard}>
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
				</div>
				<div className={styles.addCard}>
					<AddCard />
				</div>
			</div>
		</div>
	);
}

export default Board;

// className="w-screen h-screen flex flex-col gap-4 items-center justify-center"
