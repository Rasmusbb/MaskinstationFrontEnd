<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import MachineAPI from '$lib/../API/REST/Machine.js';
    import Gallery, { ShowImage } from '../../../API/REST/Gallery.js';
    import Brand from '../../../API/REST/Brand';
    import User from '../../../API/REST/User.js'

    let machine;
    let brand;
    let gallery;
    let user;

    let id;
    let mainImage;

    $: id = $page.params.ID;

    onMount(async () => {
        machine = await MachineAPI.GetByID(id);
        brand = await Brand.GetByID(machine.brandID);
        gallery = await Gallery.GetGalleryByID(machine.galleryID);
        console.log(machine)
        if(machine.userID != "00000000-0000-0000-0000-000000000000"){
            console.log("Hello")
            user = await User.GetByID(machine.UserID)   
        }    

        if (gallery && gallery.images.length > 0) {
            mainImage = gallery.images[0].imageID;
        }
    });

    function setMainImage(imageID) {
        mainImage = imageID;
    }
</script>

{#if machine && brand && gallery}
<div class="machine-profile">
    <div class="profile-grid">
        <div class="info-box">
            <img src={Gallery.ShowImage(brand.imageID)} alt="" class="info-box-logo">
            <h1>{brand.brandName + " " + machine.model}</h1>
            <p class="description">{machine.description}</p>
        </div>
        <div class="gallery-box">
            {#if mainImage}
            <img class="main-image" src="{Gallery.ShowImage(mainImage)}" alt="Main image" />
            {/if}
            <div class="thumbnails">
                {#each gallery.images as img}
                <img class="thumb" src="{Gallery.ShowImage(img.imageID)}" alt="Thumbnail" on:click={() => setMainImage(img.imageID)} />
                {/each}
            </div>
        </div>
    </div>
</div>
{:else}
<p>Loading...</p>
{/if}

<style>
.machine-profile {
    max-width: 1000px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: system-ui, sans-serif;
}

.profile-grid {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: flex-start; 
}


.info-box {
    flex: 0 0 320px; 
    max-width: 350px; 
    background: rgba(55, 118, 161, 0.90);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    color: white
}


.info-box {
    flex: 0 0 250px;  
    background: rgba(55, 118, 161, 0.90);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
}

.info-box-logo {
    width: 4.5rem;   
    height: 4.5rem;
}


.info-box .description {
    font-size: 1rem;
    line-height: 1.5;
}


.gallery-box {
    flex: 1; 
    background: rgba(55, 118, 161, 0.90);
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-image {
    max-width: 70%;
    max-height: 500px;
    margin: 0 auto 1.5rem; 
    display: block;
    border-radius: 12px;
}
.info-box h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    white-space: nowrap;     
    overflow: hidden;           
    text-overflow: ellipsis;    
}
.thumbnails {
    display: flex;
    gap: 1rem; 
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem; 
}

.thumbnails .thumb {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.thumbnails .thumb:hover {
    transform: scale(1.1);
}


@media (max-width: 768px) {
    .profile-grid {
        flex-direction: column;
    }

    .info-box, .gallery-box {
        flex: 1 1 100%;
    }
}
</style>
