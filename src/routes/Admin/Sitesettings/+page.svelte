
<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import MachineAPI from '$lib/../API/REST/Machine.js';
    import CreateBox from '$lib/Compontnets/Boxs/CreateBox.svelte';
    import RoleAPI from '$lib/../API/REST/Roles.js';
    import UserAPI from '$lib/../API/REST/User.js';
    import GalleryAPI from '$lib/../API/REST/Gallery.js'; 
    import VerticalNavBar from '$lib/Compontnets/NavBars/VerticalNavBar.svelte';
    let NewUser = {};
    let fileInput;
    onMount(async () => {
        roles = await RoleAPI.GetAll();
        console.log(roles);
    });

    async function UploadBackground(event) {
        event.preventDefault();
        fileInput = fileInput.files[0];
        if (fileInput) {
            let ImageData = {
                ImageFile: fileInput,
                Tags: ["cb78c0f5-c642-47a2-8f2d-9d2a88f571dd"],
                GalleryID: "4c67681d-d914-467c-8f9e-52e9181baeb6"

            }
            GalleryAPI.UploadImage(ImageData);
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
    <VerticalNavBar active="/Sitesettings"/>

    <main class="admin-content">
        <h1 class="admin-title">Admin Panel</h1>

        <div class="Wrapper">
            <CreateBox Title="Create User">
                <form class="admin-form" on:submit={CreateUser}>
                    <div class="form-group">
                        <label for="Name">Name</label>
                        <input id="Name" type="text" bind:value={NewUser.name}>
                    </div>

                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input id="Email" type="email" bind:value={NewUser.email}>
                    </div>

                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input id="Password" type="password" bind:value={NewUser.password}>
                    </div>

                    <button type="submit" class="btn-submit">Create User</button>
                </form>
            </CreateBox>

            <CreateBox Title="Page Settings">
                <form class="admin-form" on:submit={UploadBackground}>
                    <div class="form-group">
                        <label>Global background</label>
                        <input type="file" accept="image/*" bind:this={fileInput}>
                    </div>

                    <button type="submit" class="btn-submit">Upload Background</button>
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

