import { jwtDecode } from "jwt-decode";
import User from "../API/REST/User.js"



export function Write(key, initial) {
    if (initial == null){
      return null
    }
    localStorage.setItem(key, JSON.stringify(initial));
}

export function Read(key) {
    let token = localStorage.getItem(key) || null
      if(token == null) 
        return null;
      if(key != "accessToken"){
          return token;
      }
      token = JSON.parse(token) 
      if(!JWTVaild(token)){
          let refreshToken = JSON.parse(localStorage.getItem("refreshToken") || null);
          if(refreshToken != null){
              let newToken = User.LoginByRefreshToken(refreshToken);
              if(newToken != null){
                  Write("accessToken",newToken.accessToken);
                  Write("refreshToken",newToken.refreshToken);
                  return newToken.accessToken;
              }
          }
      }
    
    return token
}

export function DecodeToken(key)
{
    let token = Read(key) || null
    if (token == null){
      return null
    }
    return jwtDecode(Read(key));
}

function JWTVaild(Token){
  let now = Math.floor(Date.now() / 1000);
  let decoded = {}
  try{
    decoded = jwtDecode(Token);
  }catch{
    return true
  }
  if(decoded.exp < now) {
    return false;
  }
  return true;
}


export default {
    Write: Write,
    Read: Read,
    DecodeToken: DecodeToken
};