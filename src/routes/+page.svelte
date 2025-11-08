<script>
  import Gallery from "../API/REST/Gallery";
  console.log("Home page mounted");
  export function load() {
  return {};
  }
</script>

<video autoplay muted loop playsinline class="bg-video">
  <source src={Gallery.ShowVideo("d600b8e1-c8bf-4ce5-6788-08de1d64d96f")} type="video/mp4" />
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
