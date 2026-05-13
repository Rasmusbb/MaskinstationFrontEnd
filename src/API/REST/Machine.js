const API = import.meta.env.VITE_API_URL + '/Machine'
import storage from "../storage";
import { CheckToken } from "../MainAPI";



export async function GetByID (MachineID) {
  let Data = await fetch(API + '/GetByID?MachineID=' + MachineID,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}

export async function GetByTags(Tags) {
  const params = new URLSearchParams();
  Tags.forEach(tag => params.append('TagIDs', tag));
  let Data = await fetch(API + '/GetByTags?' + params.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

  return Data;
}

export async function GetAll(Type) {
  let Data = await fetch(API + '/GetAll' + "?type=" + Type,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}


async function Create(MachineData) {
  console.log(await CheckToken());
  console.log(storage.Read("accessToken"))
  console.log(MachineData)
  let Data = await fetch(API + '/Create', { 
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${storage.Read("accessToken")}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(MachineData)
  }).then(res => res.json());
  return Data;
}

export default {
    GetAll: GetAll,
    GetByID: GetByID,
    GetByTags: GetByTags,
    Create: Create
};
