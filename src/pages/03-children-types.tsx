import React from 'react';

type Props = {
	header: React.ReactNode;
	sidebar: React.ReactElement;
	footer: string;
};

export function Example({
	header,
	sidebar,
	footer,
	children,
}: React.PropsWithChildren<Props>) {
	const [state, setState] = React.useState(false);
	return (
		<div>
			<div>{header}</div>
			<div>{sidebar}</div>
			<div>{children}</div>
			<div>{footer}</div>
		</div>
	);
}

function App() {
	return (
		<Example header={<div>test</div>} sidebar={<p>test</p>} footer={'hello'} />
	);
}
