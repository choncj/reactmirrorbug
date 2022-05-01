
import { useContext } from "react";
import {PlayerConsumer} from '/imports/ui/hooks/player/PlayerProvider';

export const usePlayer = () => {
	return useContext(PlayerConsumer);
}