
<script>
    import Gallery from '../../API/REST/Gallery.js';
    export let Data;

</script>

<div class="info-box">
    <h1>{Data.title}</h1>
    <img src={Gallery.ShowImage(Data.imageID)} alt="" class="info-box-logo">
    <h2>{Data.text}</h2>
    <p class="description">{Data.description}</p>
    {#if Data.Role}
    <p class="description">{"Stilling: " + Data.Role}</p> 
    {/if}
</div>

<style>
.info-box {
    flex: 0 0 320px; 
    max-width: 350px; 
    background: rgba(55, 118, 161, 0.90);
    border-radius: 12px;
    margin: 20px;
    padding: 1.5rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    color: white;
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
}

.info-box h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    white-space: nowrap;     
    overflow: hidden;           
    text-overflow: ellipsis;    
}


@media (max-width: 768px) {
    .info-box{
        flex: 1 1 100%;
    }
}
</style>