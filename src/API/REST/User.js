
import Header from "$lib/Compontnets/header/Header.svelte";
import storage from "../storage";
const API = import.meta.env.VITE_API_URL + '/User'

async function Login(Login) {
  let Data = await fetch(API + '/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Login) 
  }).then(res => res.json());
  storage.Write('accessToken', Data.accessToken);
  storage.Write('refreshToken', Data.refreshToken);
  return Data;
}

export async function GetAll(Type) {
  console.log("Fetching Users from: " + API + '/GetAll')
  let Data = await fetch(API + '/GetAll',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}


export async function GetByID (UserID) {
  let Data = await fetch(API + '/GetByID?UserID=' + UserID,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}

async function LoginByRefreshToken(Token) {
  let Data = await fetch(API + '/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Token) 
  }).then(res => res.json());
  storage.Write('accessToken', Data.accessToken);
  storage.Write('refreshToken', Data.refreshToken);
  return Data;
}

export default {
    Login:  Login,
    GetByID: GetByID,
    GetAll: GetAll,
    LoginByRefreshToken: LoginByRefreshToken
};