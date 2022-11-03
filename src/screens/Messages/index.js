import React, { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import MessagesComponent from '../../conponent/MessagesComponent'
import getAllMessages from '../../context/actions/expatsActions/getAllMessages';
import { GlobalContext } from '../../context/Provider';

const Messages = ({navigation}) => {
  const {
    expatsDispatch,
    expatsState: {
      getMessages: {data, loading, error},
    },
  } = useContext(GlobalContext);

   console.log(data, loading, error, 'message500');

  useEffect(() => {
    getAllMessages()(expatsDispatch);
  }, []);


  return <MessagesComponent getMessages={data} isLoading={loading} />;
}

export default Messages