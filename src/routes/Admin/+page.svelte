<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import MachineAPI from '$lib/../API/REST/Machine.js';
    import InfoBox from '$lib/Compontnets/Boxs/InfoBox.svelte';
    import RoleAPI from '$lib/../API/REST/Rolse.js';
    let roles = []
    let selectedRoles = [];    
    onMount(async () => {
        roles = await RoleAPI.GetAll();
        console.log(roles);
    });
</script>

<h1 class="admin-title">Admin Panel</h1>

<div class="CreateBox">
    <h2>Create User</h2>

    <form class="admin-form">
        <div class="form-group">
            <label>Name</label>
            <input type="text">
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email">
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password">
        </div>
        <div class="form-group">
            <label>Roles</label>
            <select bind:value={selectedRoles} multiple>
                {#each roles as role}
                    <option value={role.roleID}>{role.roleName}</option>
                {/each}
            </select>
        </div>
        <button type="submit" class="btn-submit">Create User</button>
    </form>
</div>

<style>
.admin-title {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
}


.CreateBox {
    width: 100%;
    max-width: 380px; 
    background: rgba(55, 118, 161, 0.95);
    border-radius: 14px;
    margin: 20px auto;
    padding: 2rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    color: white;
    text-align: left;
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

