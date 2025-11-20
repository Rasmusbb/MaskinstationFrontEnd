const API = import.meta.env.VITE_API_URL + '/Machine'



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
  console.log("Fetching Machines from: " + API + '/GetAll' + "?type=" + Type)
  let Data = await fetch(API + '/GetAll' + "?type=" + Type,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}


async function Create(MachineData) {
  let Data = await fetch(API + '/Create', { 
    method: 'POST',
    headers: {
      //'Authorization': `Bearer ${storage.Read("accessToken")}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(MachineData) 
  }).then(res => res.json());
}

export default {
    GetAll: GetAll,
    GetByID: GetByID,
    GetByTags: GetByTags
};
