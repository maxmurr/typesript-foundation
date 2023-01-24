import { useEffect, useState } from 'react';

// todo: create Prop type for this component, also optional type

type ProfileProps = {
	name?: string;
	age?: number;
};

export function Profile({ name, age }: ProfileProps) {
	return (
		<div>
			<div>Name: {name}</div>
			<div>Age: {age}</div>
		</div>
	);
}

export function Example1() {
	// primitive type are fine
	const [bool, setBool] = useState(false);
	const [num, setNum] = useState(0);
	const [boolOrNum, setBoolOrNum] = useState<boolean | number>();

	return (
		<div>
			<p>Ex 1: Primitives</p>
			<button onClick={() => setBool(true)}>Toggle</button>
			<button onClick={() => setNum((n) => n + 1)}>Increment</button>
			<button
				onClick={() =>
					setBoolOrNum((c) => {
						if (typeof c === 'number') {
							return c + 1;
						}
					})
				}
			>
				Increment
			</button>
		</div>
	);
}

// todo : set data type to Item

interface Item {
	id: string;
	name: string;
}

export function Example2() {
	const [data, setData] = useState<Item[]>([]);

	const parseData = () => {
		const newData = data.filter((item) => item.id);
	};

	return data.map((item, index) => {
		<div>
			Item {index} is {item.id}
		</div>;
	});
}

// todo : fix data type

interface User {
	id: number;
	name: string;
}

function api(): Promise<User> {
	return Promise.resolve({
		id: 1,
		name: 'John',
	});
}

export function Example3() {
	// use union type with null forinitial state
	const [data, setData] = useState<User | null>(null);
	useEffect(() => {
		// tip: JavaScript Immediately Invoked Function Expression (IIFE)
		(async () => {
			setData(await api());
		})();
	}, []);
	if (data === null) {
		return <div>Loading...</div>;
	}
	return <div>Name: {data.name}</div>;
}
