import { useEffect, useState } from 'react';

const api = (id: string) => new Promise<string>((resolve, reject) => {});

// todo : create custom hook that set response from api to state and return the state
function useData(id: number) {
	const [data, setData] = useState<number>();
	useEffect(() => {
		(async function () {
			// @ts-ignore
			setData(await api(id));
		})();
	}, [id]);
	return data;
}

// what if api dont have type?
// dafault it will be any type, we can use as follow by data type we want "as number"