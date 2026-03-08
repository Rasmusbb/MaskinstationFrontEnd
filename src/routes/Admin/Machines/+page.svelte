
<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import MachineAPI from '$lib/../API/REST/Machine.js';
    import BrandAPI from '$lib/../API/REST/Brand.js';
    import CreateBox from '$lib/Compontnets/Boxs/CreateBox.svelte';
    import UserAPI from '$lib/../API/REST/User.js';
    import GalleryAPI from '$lib/../API/REST/Gallery.js'; 
    import VerticalNavBar from '$lib/Compontnets/NavBars/VerticalNavBar.svelte';
    let NewMachine = {};
    let NewBrand = {};
    let brands = [];
    let fileInput;
    onMount(async () => {
        brands = await BrandAPI.GetAll();
    });

    async function AddBrand(event) {
        event.preventDefault();
        fileInput = fileInput.files[0];
        if (fileInput) {
            let ImageData = {
                ImageFile: fileInput,
                Tags: ["bc19339d-7871-4a16-913e-c95f55c7ce40"],
                GalleryID: "cd74f600-05b6-4776-ba5e-1bfe3334e6d3"

            }
            let Data = await GalleryAPI.UploadImage(ImageData);
            NewBrand.imageID = Data.imageID;
            let result = await BrandAPI.Create(NewBrand);
            brands = await BrandAPI.GetAll();
            fileInput = null;
            alert("Brand Added " + NewBrand.brandName + "with image " + NewBrand.imageID);
        }
    }
    async function CreateUser(event) {
        event.preventDefault();
        await UserAPI.Create(NewUser);
        alert("User Created");
        NewUser = {};
    }   

</script>

<div class="admin-layout">
    <VerticalNavBar active="/Machines"/>

    <main class="admin-content"> 
        <div class="Wrapper">
            <CreateBox Title="Add Machine">
                <form class="admin-form" on:submit={CreateUser}>
                    <div class="form-group">
                        <label for="Model">Model</label>
                        <input id="Model" type="text" bind:value={NewMachine.model}>
                    </div>
                        <div class="form-group">
                            <label for="Brand">Brand</label>
                            <select id="Brand" bind:value={NewMachine.brand}>
                                <option value="" disabled selected>Select a brand</option>
                                {#each brands as brand}
                                    <option value={brand.brandID}>{brand.brandName}</option>
                                {/each}
                            </select>
                        </div>
                    <div class="form-group">
                        <label for="Description">Description</label>
                        <input id="Description" type="text" bind:value={NewMachine.description}>
                    </div>
                    <button type="submit" class="btn-submit">Create Machine</button>
                </form>
            </CreateBox>

            <CreateBox Title="Add Brand">
                <form class="admin-form" on:submit={AddBrand}>
                    <div class="form-group">
                        <label>BrandName</label>
                        <input Type="Text" bind:value={NewBrand.brandName}>
                    </div>
                    <div class="form-group">
                        <label>Logo</label>
                        <input type="file" accept="image/*" bind:this={fileInput}>
                    </div>

                    <button type="submit" class="btn-submit">Add Brand</button>
                </form>
            </CreateBox>
        </div>
    </main>
</div>




<style>
.admin-title {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
}
.admin-layout {
    display: flex;
    min-height: 100vh;
}

.admin-content {
    flex: 1;
    padding: 24px;
}

.Wrapper{
    display: flex;
    justify-content: space-evenly;
}

.admin-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.form-group label {
    font-size: 0.9rem;
    font-weight: 600;
}


.admin-form input {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
}

.btn-submit {
    margin-top: 10px;
    width: 100%;
    padding: 12px;
    background: #ffffff;
    color: #3776A1;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s ease;
}

.btn-submit:hover {
    background: #e8e8e8;
}
</style>

