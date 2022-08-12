import AsyncStorage from '@react-native-async-storage/async-storage';
// https://expatorbit.in/wp-json/jwt-auth/v1/token?username=oguntimehins&password=!Pxdi%23t9cgtm9VsaBt%26arcaI
// const ROOT_URL = 'https://expatorbit.in/';
// const ROOT_URL = 'https://truly-contacts.herokuapp.com/api'
// https://expatorbit.in/wp-json/jwt-auth/v1/token

//? fetch get method
export async function getData(url, payload) {
  let headers = {'Content-Type': 'application/json'};
  const token = await AsyncStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch(url, {
    method: 'GET',
    headers: headers,
    // body: JSON.stringify(payload),
  });
  if (!res.ok) {
    // throw Error('There was a problem fetching data.');
    const error = (res && res.statusText) || res.status;
    throw new Error(error);
  }
  return await res.json();
}


//? fetch post method
export default async function postData(url, payload) {
  let headers = {'Content-Type': 'application/json'};
    const token =  await AsyncStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    // console.log(token, 'token')

  const res = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    // throw Error('There was a problem fetching data.');
    // const error = (res && res.statusText) || res.status;
    // throw new Error(error);
    throw Error('wrong credentials');

  }
  return await res.json();
}
