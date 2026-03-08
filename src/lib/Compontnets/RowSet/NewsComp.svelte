<script>
    export let pictureUrl;
    export let description;
    export let URL;

    function handleClick() {
        if (URL) {
            window.open(URL, "_blank");
        }
    }


</script>

<div class="NewsContent" on:click={handleClick}>
  <img src={pictureUrl} alt="News Image" class="news-image" />
  <p class="hover-text">
    {description}
  </p>
</div>

<style>
.NewsContent {
    position: relative;           
    width: 250px;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    border: 3px solid #154E94; 
}

.news-image {
    width: 100%;
    height: 100%;
    object-fit: cover;           
    display: block;
}

.hover-text {
    position: absolute;            
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    
    opacity: 0;                   
    pointer-events: none;
    
    background: rgba(0, 0, 0, 0.6); 
    color: white;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 0.9rem;
    text-align: center;
    
    transition: opacity 0.25s ease;
}

.NewsContent:hover .hover-text {
    opacity: 1;                    
}
</style>