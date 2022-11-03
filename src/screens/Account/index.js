import React, { useContext, useEffect } from 'react';
import AccountComponent from '../../conponent/AcountComponent';
import getProfileDatails from '../../context/actions/expatsActions/getProfileDatails';
import getUserId from '../../context/actions/expatsActions/getUserId';
import { GlobalContext } from '../../context/Provider';


const Account = ({navigation}) => {


  const {
    expatsDispatch,
    expatsState: {
      getUser_Id,
      getProfile: {data, loading},
    },
  } = useContext(GlobalContext);

  // console.log(getUser_Id?.member_rest?.avatar.full, 'getUser_Id7889');

  useEffect(() => {
    // getProfileDatails(getUser_Id);
    getProfileDatails(getUser_Id)(expatsDispatch);
    getUserId()(expatsDispatch);
  }, []);


  return (
    <AccountComponent
      getUser_Id={getUser_Id}
      loading={loading}
      item={data}
      // photoData={photoData}
    />
  );
};

export default Account;
