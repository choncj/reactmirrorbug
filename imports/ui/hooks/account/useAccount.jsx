import { useContext } from "react";
import {AccountConsumer} from '/imports/ui/hooks/account/AccountProvider';

export default useAccount = () => {
	return useContext(AccountConsumer);
}
