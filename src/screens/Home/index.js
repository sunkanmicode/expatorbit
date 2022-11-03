import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import HomeComponent from '../../conponent/HomeComponent';
import getProfileDatails from '../../context/actions/expatsActions/getProfileDatails';
import getUserId from '../../context/actions/expatsActions/getUserId';
import {GlobalContext} from '../../context/Provider';

const Home = () => {
  const {
    expatsDispatch,
    expatsState: {
      getUser_Id,
      getProfile: {data, loading},
    },
  } = useContext(GlobalContext);

  // console.log(getUser_Id, 'data79999');

  React.useEffect(() => {
    getUserId()(expatsDispatch);
  }, []);

  return <HomeComponent getUser_Id={getUser_Id} />;
};

export default Home;
