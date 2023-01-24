// Grid.tsx
import React from 'react';

// todo : create Grid component that contain Row & Column
const Grid = ({ children }: React.PropsWithChildren) => {
	return <div>{children}</div>;
};

// Mock Row & Column
const Row = ({ children }: React.PropsWithChildren) => {
	return <div>{children}</div>;
};
const Column = ({ children }: React.PropsWithChildren) => {
	return <div>{children}</div>;
};

Grid.Row = Row;
Grid.Column = Column;

// outside
function App() {
	return (
		<Grid.Row>
			<Grid.Column>
				<div>Content 1</div>
			</Grid.Column>
			<Grid.Column>
				<div>Content 2</div>
			</Grid.Column>
		</Grid.Row>
	);
}
