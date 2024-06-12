import { createContext } from 'react';

import { PREVIEW } from '../data';

export const PreviewContext = createContext({
	image: {},
	title: '',
	description: '',
	statuses: []
});

export default function PreviewContextProvider({ children }) {
	return (
		<PreviewContext.Provider value={PREVIEW}>
			{children}
		</PreviewContext.Provider>
	);
}
