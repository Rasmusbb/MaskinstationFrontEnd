const API = import.meta.env.VITE_API_URL + '/Role'



export async function GetAll(Type) {
  console.log("Fetching Rolse from: " + API + '/GetAll')
  let Data = await fetch(API + '/GetAll',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}

export default {
    GetAll: GetAll,
};
