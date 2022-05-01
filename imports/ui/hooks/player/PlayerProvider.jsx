import React, { useState } from 'react';
import { useMirror } from "react-mirror";

const PlayerContext = React.createContext('player');

const InitPlayer = ({children}) => {
	const [ref, reflection] = useMirror({ className: "Frame" });

	const [playState, setPlayState] = useState(false);
	const [playerUrl, setPlayerUrl] = useState('https://soundcloud.com/future-haze/tp-37');
	// console.log(playState, 'WithPlayer');
	const value = {
		playState,
		setPlayState,
		playerUrl,
		setPlayerUrl,
		ref,
		reflection
	};
	// console.log(value);
	return (
		<PlayerContext.Provider value={value}>
			{children}
		</PlayerContext.Provider>
	);
};

export const PlayerProvider = InitPlayer;
export const PlayerConsumer = PlayerContext;