import {useDispatch, useSelector} from 'react-redux';
import {DefaultNetwork, INetwork} from '@bbachain/masterkey';

import storage from '../utils/storage';
import storageKeys from '../config/storageKeys';
import {setNetwork as setNetworkStore} from '../store/sessionSlice';
import {RootState} from '../store';

const useNetworks = () => {
  const dispatch = useDispatch();
  const {network} = useSelector((state: RootState) => state.session);

  const loadNetwork = async () => {
    try {
      let networkStorage = await storage.getItem(storageKeys.CURRENT_NETWORK);
      if (!networkStorage) {
        networkStorage = DefaultNetwork;
      }
      dispatch(setNetworkStore(networkStorage));
    } finally {
    }
  };

  const setNetwork = (n: INetwork) => {
    dispatch(setNetworkStore(n));
  };

  return {
    network,
    loadNetwork,
    setNetwork,
  };
};

export default useNetworks;
