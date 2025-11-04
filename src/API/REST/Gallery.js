import { GetByID } from "./Brand";

const API = import.meta.env.VITE_API_URL + 'Gallery'

export function ShowImage (ImageID) {
  let Data = API + '/GetProfilPic?ImageID=' + ImageID
  return Data;
}
export function ShowVideo (ImageID){
    let Data = API + '/Video/' + ImageID
    return Data
}

export async function GetGalleryByID(GalleryID){
    console.log(API + '/GetByID?GalleryID=' + GalleryID )
  let Data = await fetch(API + '/GetByID?GalleryID=' + GalleryID,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;    
}

export function GetFirstImage (GalleryID){
    let Data = API + '/GetFirstPic?GalleryID=' + GalleryID
    return Data
}

export default {
    ShowImage: ShowImage,
    ShowVideo: ShowVideo,
    GetGalleryByID: GetGalleryByID,
    GetFirstImage: GetFirstImage
};


