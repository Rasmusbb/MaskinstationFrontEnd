<script>
  import Gallery from "../API/REST/Gallery";
  import NewsRow from "../lib/Compontnets/RowSet/NewsRow.svelte";
  import NewsComp from "../lib/Compontnets/RowSet/NewsComp.svelte";

  console.log("Home page mounted");
  export function load() {
  return {};
  }
</script>
<div class="Main">
<video autoplay muted loop playsinline disablePictureInPicture class="bg-video">
  <source src={Gallery.ShowVideo("4ad689ed-3c58-484c-55b0-08de64242ae4")} type="video/mp4" />
</video>
  
  <div class="Content">
    <NewsRow>
      <NewsComp description="This is the description for news item 1." pictureUrl="https://johndeere.widen.net/content/oqcdrc63ch/webp/r2g095006_LSC_2048x1365.webp?crop=true&w=800&h=600&retina=false&keep=center" />
      <NewsComp description="This is the description for news item 2." pictureUrl="https://johndeere.widen.net/content/oqcdrc63ch/webp/r2g095006_LSC_2048x1365.webp?crop=true&w=800&h=600&retina=false&keep=center" />
      <NewsComp URL="https://www.deere.com/en/tractors/row-crop-tractors/high-horsepower-8r-8rx-tractors/8r-540-tractor/" description="Dette er en 8R 540" pictureUrl="https://johndeere.widen.net/content/oqcdrc63ch/webp/r2g095006_LSC_2048x1365.webp?crop=true&w=800&h=600&retina=false&keep=center" />
    </NewsRow>
  </div>
</div>


<style>
.Main {
  min-height: 100vh;        
  display: flex;
  justify-content: center;  
  align-items: center;     
}
.bg-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

</style>
