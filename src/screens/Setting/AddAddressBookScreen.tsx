import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import TextInput from '../../components/Input';
import Button from '../../components/Button';
import {withTranslation} from '../../hooks/useTranslations';
import useAddressBook from '../../hooks/useAddressBook';
import {IAddress} from '../../types';

function AddressBookScreen({navigation, t}: any) {
  const {addAddress} = useAddressBook();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handlePressSave = () => {
    if (!name || !address) {
      return;
    }

    addAddress({name, address} as IAddress);
    navigation.goBack();
  };

  return (
    <>
      <TextInput
        label={t('common.name')}
        variant="outlined"
        margin={2}
        value={name}
        onChangeText={(text: string) => setName(text)}
      />
      <TextInput
        label={t('common.address')}
        variant="outlined"
        margin={2}
        value={address}
        onChangeText={(text: string) => setAddress(text)}
      />
      <Button
        mode="contained"
        icon="content-save"
        title={t('common.save')}
        onPress={handlePressSave}
      />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  leftImage: {
    margin: 8,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTranslation()(AddressBookScreen);
