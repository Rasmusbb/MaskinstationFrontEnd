<script>
    export let Data;
    import Gallery from "../../../API/REST/Gallery";

</script>

<a href="/MaskinPakken/{Data.machineID}" class="columncard">
    <img src={Gallery.GetFirstImage(Data.galleryID)} alt="{Data.model}" class="columncard-mainimg">
    <div class="columncard-info">
        <img src={Data.Brand.Logo} alt={Data.Brand.brandName} class="columncard-Smallimg ">
        <h3>{Data.Brand.brandName + " " + Data.model}</h3>
    </div>
</a>

<style>

.columncard {
    display: flex; 
    align-items: center; 
    text-decoration: none;
    gap: 16px; 
    width: 320px;
    background: rgba(55, 118, 161, 0.90);
    color: #fff;
    border-radius: 16px;
    padding: 14px;
    box-shadow:
      0 2px 6px rgba(0,0,0,.08),
      0 12px 24px rgba(0,0,0,.06); 
    transition: transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s;
    animation: pop-in 1s cubic-bezier(.2,.7,.2,1) both;
}

.columncard-mainimg {
    width: 40%; 
    height: auto; 
    object-fit: cover;  
    border-radius: 12px;
    transform: translateY(0) scale(1);
}
.columncard:hover {
    cursor: pointer;
    transform: translateY(-5px) scale(1.05); /* moves up a bit and slightly scales */
    filter: drop-shadow(0 14px 20px rgba(0,0,0,.18)); /* optional, to make it pop more */
}
.columncard-Smallimg {
    width: 2rem;
    height: 2rem;
}
</style>