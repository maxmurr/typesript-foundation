// enum Colors {
// 	Red = 'red',
// 	Blue = 'blue',
// 	Green = 'green',
// 	White = 'white',
// }

// wrong
// const c1: Colors = 'red';

// correct
// const c1 = 'red' as Colors;

const Colors = {
	Red: 'red',
	Blue: 'blue',
	Green: 'green',
	White: 'white',
} as const;

type Colors = typeof Colors[keyof typeof Colors];

type Props = {
	color: 'red' | 'blue' | 'green' | 'white';
};

// todo : create prop type from enum
export function Example({ color }: Props) {
	if (color === Colors.White) {
		return <div>White</div>;
	}
	return <div>You pick color: {color}</div>;
}

export function App() {
	return <Example color={Colors.Blue} />;
}
