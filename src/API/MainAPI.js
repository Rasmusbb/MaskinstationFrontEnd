import Storage from './storage.js';
import User from './REST/User.js';

export async function CheckToken(){
    console.log("Checking Token");
    if (Storage.JWTVaild( Storage.Read("accessToken")) == true){
        return true;
    }else{
        let Data = {RefreshToken: Storage.Read("refreshToken"), UserID: Storage.DecodeToken("accessToken").UserID} 
        let Tokens = await User.LoginByRefreshToken(Data);
        if (Storage.JWTVaild(Storage.Read("accessToken")) == true){
            console.log("Token Refreshed");
            return true;
        }else{
            return false;
        }
    }
}