<script>
  import Gallery from "../API/REST/Gallery";
  console.log("Home page mounted");
  export function load() {
  return {};
  }
</script>

<video autoplay muted loop playsinline class="bg-video">
  <source src={Gallery.ShowVideo("4ad689ed-3c58-484c-55b0-08de64242ae4")} type="video/mp4" />
</video>


<style>
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
