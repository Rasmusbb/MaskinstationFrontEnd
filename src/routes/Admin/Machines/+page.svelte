<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import MachineAPI from '$lib/../API/REST/Machine.js';
    import BrandAPI from '$lib/../API/REST/Brand.js';
    import UserAPI from '$lib/../API/REST/User.js';
    import GalleryAPI from '$lib/../API/REST/Gallery.js'; 
    import VerticalNavBar from '$lib/Compontnets/NavBars/VerticalNavBar.svelte';

    let NewMachine = {};
    let NewBrand = {};
    let brands = [];
    let fileInput;

    let showBrandModal = false;

    let machines = [
        {
            id: 1,
            model: "320D",
            brand: "CAT",
            description: "Excavator",
            image: "https://placehold.co/80x80"
        },
        {
            id: 2,
            model: "T7.300",
            brand: "New Holland",
            description: "Tractor",
            image: "https://placehold.co/80x80"
        }
    ];

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
            };

            let Data = await GalleryAPI.UploadImage(ImageData);

            NewBrand.imageID = Data.imageID;

            await BrandAPI.Create(NewBrand);

            brands = await BrandAPI.GetAll();

            fileInput = null;

            alert("Brand Added " + NewBrand.brandName);

            NewBrand = {};

            showBrandModal = false;
        }
    }

    async function CreateMachine(event) {
        event.preventDefault();
        await MachineAPI.Create(NewMachine);
        alert("Machine Created");
        NewMachine = {};
    }   
</script>

<div class="admin-layout">

    <aside class="sidebar">
        <VerticalNavBar active="/Machines"/>
    </aside>

    <main class="content">

        <div class="top-bar">
            <h1>Machine Management</h1>

            <button
                class="add-btn"
                on:click={() => showBrandModal = true}
            >
                + Add Brand
            </button>
        </div>

        <div class="grid">

            <!-- CREATE FORM -->
            <section class="card form-card">

                <h2>Create Machine</h2>

                <form class="admin-form">

                    <div class="form-group">
                        <label>Model</label>
                        <input type="text" bind:value={NewMachine.model}>
                    </div>

                    <div class="form-group">
                        <label>Brand</label>

                        <select bind:value={NewMachine.brand}>
                            <option disabled selected value="">
                                Select brand
                            </option>

                            {#each brands as brand}
                                <option value={brand.brandID}>
                                    {brand.brandName}
                                </option>
                            {/each}
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Description</label>
                        <textarea bind:value={NewMachine.description}></textarea>
                    </div>

                    <div class="form-group">
                        <label>Picture</label>
                        <input type="file">
                    </div>

                    <button type="submit" class="submit-btn">
                        Create Machine
                    </button>

                </form>

            </section>

            <!-- MACHINE TABLE -->
            <section class="card table-card">

                <div class="table-header">
                    <h2>Machines</h2>
                    <input placeholder="Search machines...">
                </div>

                <table>

                    <thead>
                        <tr>
                            <th>Machine</th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Description</th>
                        </tr>
                    </thead>

                    <tbody>

                        {#each machines as machine}
                            <tr>

                                <td>
                                    <div class="machine-cell">
                                        <img src={machine.image} alt="">
                                    </div>
                                </td>

                                <td>{machine.model}</td>
                                <td>{machine.brand}</td>
                                <td>{machine.description}</td>

                            </tr>
                        {/each}

                    </tbody>

                </table>

            </section>

        </div>

    </main>

</div>

<!-- BRAND MODAL -->
{#if showBrandModal}

<div
    class="modal-backdrop"
    on:click={() => showBrandModal = false}
>

    <div
        class="modal"
        on:click|stopPropagation
    >

        <h2>Add Brand</h2>

        <form
            class="admin-form"
            on:submit={AddBrand}
        >

            <div class="form-group">
                <label>Brand Name</label>

                <input
                    type="text"
                    bind:value={NewBrand.brandName}
                >
            </div>

            <div class="form-group">
                <label>Logo</label>

                <input
                    type="file"
                    accept="image/*"
                    bind:this={fileInput}
                >
            </div>

            <button
                type="submit"
                class="submit-btn"
            >
                Create Brand
            </button>

        </form>

    </div>

</div>

{/if}

<style>

:global(body) {
    margin: 0;
    font-family: Inter, sans-serif;
}

.admin-layout {
    display: flex;
    min-height: 100vh;
}

/* SIDEBAR */

.sidebar {
    width: 240px;
    background: #111827;
    color: white;
    padding: 24px;
}

/* CONTENT */

.content {
    flex: 1;
    padding: 32px;
}

/* TOP BAR */

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-bottom: 24px;
}

.top-bar h1 {
    margin: 0;
    font-size: 2rem;
}

.add-btn {
    background: #2563eb;
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s ease;
}

.add-btn:hover {
    background: #1d4ed8;
}

/* GRID */

.grid {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 24px;
}

/* CARDS */

.card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}

/* FORM */

.admin-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

input,
select,
textarea {
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    font-size: 0.95rem;
}

textarea {
    min-height: 100px;
    resize: vertical;
}

.submit-btn {
    background: #111827;
    color: white;
    border: none;
    padding: 14px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
}

/* TABLE */

.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    text-align: left;
    padding: 14px;
    font-size: 0.85rem;
    color: #6b7280;
    border-bottom: 1px solid #e5e7eb;
}

td {
    padding: 16px 14px;
    border-bottom: 1px solid #f0f0f0;
}

.machine-cell {
    display: flex;
    align-items: center;
    gap: 12px;
}

.machine-cell img {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    object-fit: cover;
}

tr:hover {
    background: #f9fafb;
}

/* MODAL */

.modal-backdrop {
    position: fixed;
    inset: 0;

    background: rgba(0,0,0,0.45);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1000;
}

.modal {
    width: 420px;

    background: white;

    border-radius: 18px;

    padding: 28px;

    box-shadow: 0 20px 50px rgba(0,0,0,0.2);
}

/* MOBILE */

@media (max-width: 1000px) {

    .grid {
        grid-template-columns: 1fr;
    }

    .sidebar {
        display: none;
    }

}

</style>