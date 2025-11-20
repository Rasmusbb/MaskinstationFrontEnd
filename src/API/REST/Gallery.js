
const API = import.meta.env.VITE_API_URL + '/Gallery'
import storage from '../storage.js'
export function ShowImage (ImageID) {
  let Data = API + '/GetProfilPic?ImageID=' + ImageID
  return Data;
}
export function ShowVideo (ImageID){
    let Data = API + '/Video/' + ImageID
    return Data
}
async function UploadImage(ImageData) {
    console.log(ImageData);
    let url = API + '/AddImageToGallery?Tags=';
    for (let i = 0; i < ImageData.Tags.length; i++) {
        url += ImageData.Tags[i];
        if (i < ImageData.Tags.length - 1) {
            url += ',';
        }
    }
    url += '&GalleryID=' + ImageData.GalleryID;
    const formData = new FormData();
    formData.append('ImageData', ImageData.ImageFile);
    console.log(url);
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${storage.Read("accessToken")}`
        },
        body: formData
    }); 
    const data = await res.json();
    return data;
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
    console.log("Fetching first image from gallery: " + GalleryID)
    let Data = API + '/GetFirstPic?GalleryID=' + GalleryID
    return Data
}

export function GetFirstImageByTag (GalleryID, Tag){
    let Data = API + '/GetFirstPicByTag?GalleryID=' + GalleryID + '&TagName=' + Tag
    return Data
}

export default {
    ShowImage: ShowImage,
    ShowVideo: ShowVideo,
    UploadImage: UploadImage,
    GetGalleryByID: GetGalleryByID,
    GetFirstImageByTag: GetFirstImageByTag,
    GetFirstImage: GetFirstImage
};


