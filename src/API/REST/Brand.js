
const API = import.meta.env.VITE_API_URL + 'Brand'

export async function GetByID (BrandID) {
  let Data = await fetch(API + '/GetByID?BrandID=' + BrandID,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}

export async function GetAll() {
  let Data = await fetch(API + '/GetAll',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}

async function Create(BrandData) {
  let Data = await fetch(API + '/Create', { 
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${storage.Read("accessToken")}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(BrandData) 
  }).then(res => res.json());
}

export default {
    GetAll: GetAll,
    GetByID: GetByID,
};


