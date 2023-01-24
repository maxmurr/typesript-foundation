import React from 'react';

type InfiniteScrollProps<T> = {
	data: Array<T>;
	renderItem: (itemProps: {
		item: T;
		index: number;
		array: Array<T>;
	}) => React.ReactNode;
	keyExtractor: (item: T, index: number) => string;
	renderEmptyList: () => React.ReactNode;
};

// todo: correct type for this component
function InfiniteScroll<T>({
	data, // Array of something
	renderItem,
	keyExtractor,
	renderEmptyList,
}: InfiniteScrollProps<T>) {
	return (
		<div>
			{!data.length && renderEmptyList()}
			{data.map((item, index, array) => (
				<div key={keyExtractor(item, index)}>
					{renderItem({ item, index, array })}
				</div>
			))}
		</div>
	);
}

type Data = Array<{ id: string; name: string }>;

function App() {
	const data: Data = [];
	return (
		<InfiniteScroll
			data={data}
			renderEmptyList={() => <div>Empty list</div>}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<div>
					id: {item.id}
					name: {item.name}
				</div>
			)}
		/>
	);
}
