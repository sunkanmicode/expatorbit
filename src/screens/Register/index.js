import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
// import env from '../../config/env';
import RegisterComponent from '../../conponent/RegisterComponent';
import axiosInstance from '../../helpers/axiosInstance';

const Register = () => {
 const [datePickerOpen, setDatePickerOpen] = useState(false);
 const [date, setDate] = useState(new Date());
 const [mode, setMode] = useState('date');
//  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  //  const axiosTest = async () => {
  //    const res = await axiosInstance.get(
  //      'https://jsonplaceholder.typicode.com/posts/1',
  //    );
  //    const resData = res.data;
  //    console.log(resData, 'axiosInstance');
  //  };

  // useEffect(()=>{
  //   axiosTest()
  // },[])

  const onchangeForm = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'min of 6 cha'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is requried'};
      });
    }
  };
  const onSubmit = () => {
    //validation
    console.log(form, 'form');
    if (!form.fullname) {
      setErrors(prev => {
        return {...prev, fullname: 'Please Enter full name'};
      });
    }
    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please Enter username'};
      });
    }
    if (!form.country) {
      setErrors(prev => {
        return {...prev, country: 'Please Enter Country'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please Enter Email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please Enter Password'};
      });
    }
  };

  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChangeForm={onchangeForm}
      onSubmit={onSubmit}
      datePickerOpen={datePickerOpen}
      setDatePickerOpen={setDatePickerOpen}
      date={date}
    />
  );
};

export default Register;
