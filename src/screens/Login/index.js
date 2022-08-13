import React, {useContext, useState} from 'react';
import LoginComponent from '../../conponent/LoginComponent';
import loginUser from '../../context/actions/auth/loginUser';
import getUserId from '../../context/actions/expatsActions/getUserId';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});

  const {
    authDispatch,
    authState: {loading, data, error},
  } = useContext(GlobalContext);
  console.log(loading, error, data, 'login')

  const onchangeForm = ({name, value}) => {
    setForm({...form, [name]: value});
    console.log(form.username, form.password, 'form');
  };

  const onSubmit = () => {
    console.log(form, 'form');
    if (form.username && form.password) {
      loginUser(form)(authDispatch);
      // getUserId();
    }
  };

  return (
    <LoginComponent
      form={form}
      onChangeForm={onchangeForm}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
