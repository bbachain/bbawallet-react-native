import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import STORAGE_KEYS from '../config/storageKeys';
import storage from '../utils/storage';
import {changeTheme} from '../store/appSlice';

const useAppConfig = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    storage.getItem(STORAGE_KEYS.THEME).then((theme: 'light' | 'dark') => {
      if (theme) {
        dispatch(changeTheme(theme));
      }
    });
  }, [dispatch]);

  return {};
};

export default useAppConfig;
