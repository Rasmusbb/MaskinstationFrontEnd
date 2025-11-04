<script>
  import Gallery from "../API/REST/Gallery";
  console.log("Home page mounted");
  export function load() {
  return {};
  }
</script>

<video autoplay muted loop playsinline class="bg-video">
  <source src={Gallery.ShowVideo("50552cfb-90ac-4b7e-2358-08de1b90c6b6")} type="video/mp4" />
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
