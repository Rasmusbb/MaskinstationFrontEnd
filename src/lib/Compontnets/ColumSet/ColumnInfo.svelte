<script>
    import Gallery from "../../../API/REST/Gallery"; 
    export let Data;
    console.log(Data);
</script>

<div class="columncard-info">
    {#if Data.Brand}
        <img src={Data.Brand.Logo} alt={Data.Brand.brandName} class="columncard-Smallimg ">
        <h3>{Data.Brand.brandName + " " + Data.model}</h3>
        <img src={Data.ProfilPic} alt="{Data.ProfilDefault}"  class="columncard-mainimg" on:error={(event) => event.target.src = Data.ProfilDefault}>
    {/if}
    {#if Data.email}
        <img src={Gallery.GetFirstImage(Data.ProfilPic)} alt="{Data.ProfilDefault}"  class="columncard-mainimg" on:error={(event) => event.target.src = Data.ProfilDefault}>
        <p>Name: {Data.name}</p>
        <p>Email: {Data.email}</p>
    {/if}
    {#if Data.PhoneNumber}
        <p>Phone: {Data.PhoneNumber}</p>
    {/if}
</div>

<style>
.columncard-mainimg {
    width: 40%; 
    height: auto;
    object-fit: cover;  
    border-radius: 12px;
    transform: translateY(0) scale(1);
}

.columncard-Smallimg {
    width: 2rem;
    height: 2rem;
}
</style>

