<script>
  import { onMount } from 'svelte';
  import Column from '$lib/compontnets/columSet/CompColumn.svelte';
  import ColumCard from '$lib/compontnets/columSet/ColumnCard.svelte';
  import User from '../../API/REST/User.js';
  import Gallery from "../../API/REST/Gallery.js"
  import userlogo from '$lib/assets/user.png';
  let users = []; 
  onMount(async () => {
    users = await User.GetAll();
    for (let user of users) {
      user.ProfilPic = Gallery.GetFirstImageByTag(user.GalleryID, "ProfilPic");
      user.ProfilDefault = userlogo;
      user.prefix = "TheTeam"
    }
  });
</script>

<div class="page-wrapper">
  <h1 style="color: white; font-family: cursive;">Holdet</h1>

  <div class="Column">
    <Column ColumnTitle="The Team">
      {#each users as user}
        <ColumCard Data={user} />
      {/each}
    </Column>
  </div>
</div>

<style>
  .page-wrapper {
    position: relative;
    overflow: hidden;
    color: black;
    height: 100%;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 2rem;
  }

  .Column {
    margin-right: 2rem;
    display: flex;
  }
</style>
