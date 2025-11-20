<script>
   
    import { onMount } from 'svelte'
    import { page } from '$app/stores';
    import MachineAPI from '$lib/../API/REST/Machine.js'
    import Gallery from '../../../API/REST/Gallery.js'
    import GalleryBox from '$lib/Compontnets/Gallery/GalleryBox.svelte'
    import InfoBox from '$lib/Compontnets/Boxs/InfoBox.svelte'
    import Brand from '../../../API/REST/Brand'
    import User from '../../../API/REST/User.js'
    import userlogo from '$lib/assets/user.png';

    let gallery
    let brand
    let user
    let mainImage
    let MachineInfo
    let UserInfo
    let id
    $: id = $page.params.ID;
    onMount(async () => {
        let machine = await MachineAPI.GetByID(id)
        brand = await Brand.GetByID(machine.brandID)
        gallery = await Gallery.GetGalleryByID(machine.galleryID);
        if(machine.userID != "00000000-0000-0000-0000-000000000000"){
            user = await User.GetByID(machine.userID)
            console.log(user);
            if(user.imageID == "00000000-0000-0000-0000-000000000000"){
                user.imageID = "6450c225-67ed-4c41-6c7b-08de2754c6a4"
            }
        }
        user.ProfilPic = Gallery.GetFirstImageByTag(user.GalleryID, "ProfilPic")
        user.ProfilDefault = userlogo
        MachineInfo = {
            title : "Maskinoversigt",
            text: brand.brandName  + " " + machine.model,
            description: machine.description,
            imageID: brand.imageID
        }
        UserInfo = {
            title: "Fast chauffør",
            text: user.name,
            description: user.email,
            Role: user.role,
            imageID: user.imageID
        }
    });
</script>

{#if MachineInfo && brand && gallery}
<div class="machine-profile">
    <div class="profile-grid">
        <div>
            <InfoBox Data = {MachineInfo} />
            {#if user}
                <InfoBox Data = {UserInfo} />
            {/if}
        </div>
        <GalleryBox gallery={gallery} />
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
    align-items: stretch; 
}
.profile-grid > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


@media (max-width: 768px) {
    .profile-grid {
        flex-direction: column;
    }
}
</style>
