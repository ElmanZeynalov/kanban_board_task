import React from 'react';

function Serachbar() {
	return (
		<div className="flex items-center gap-4 w-full">
			<input
				type="text"
				placeholder="Search for a task"
				className="w-full rounded-md border-none bg-gray-300 p-2 text-sm"
			/>
		</div>
	);
}

export default Serachbar;
