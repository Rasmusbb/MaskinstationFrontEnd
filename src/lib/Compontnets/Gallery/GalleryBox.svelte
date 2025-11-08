
<script>
    import Gallery from '../../../API/REST/Gallery.js';
    export let gallery;
    let mainImage = null;
    console.log(gallery);
    function setMainImage(imageID) {
        mainImage = imageID;
    }
    if (gallery && gallery.images.length > 0) {
        setMainImage(gallery.images[0].imageID);
    }
</script>

<div class="gallery-box">
    {#if mainImage}
        <img class="main-image" src={Gallery.ShowImage(mainImage)} alt="Main" />
    {/if}
    <div class="thumbnails">
        {#each gallery.images as img}
            <button class="thumb-btn" on:click={() => setMainImage(img.imageID)}>
                <img class="thumb" src={Gallery.ShowImage(img.imageID)} alt="Thumbnail"/>
            </button>
        {/each}
    </div>
</div>

<style>
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


.thumb-btn {
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
}

.main-image {
    max-width: 90%;
    max-height: 650px;
    margin: 0 auto 1.5rem; 
    display: block;
    border-radius: 12px;
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
    .gallery-box {
        flex: 1 1 100%;
    }
}

</style>