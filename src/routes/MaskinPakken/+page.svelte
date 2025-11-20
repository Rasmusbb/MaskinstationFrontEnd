<script>
  import BrandAPI from '../../API/REST/Brand.js';
  import logo from '$lib/assets/Logo.avif';
  import MachineAPI from '../../API/REST/Machine.js';
  import { onMount } from 'svelte';
  import MachineColumn from '$lib/compontnets/columSet/CompColumn.svelte';
  import ColumCard from '$lib/compontnets/columSet/ColumnCard.svelte';
  import Row from '$lib/compontnets/RowSet/CompRow.svelte';
  import RowCard from '$lib/compontnets/RowSet/RowCard.svelte';
  import GalleryAPI from "../../API/REST/Gallery.js"
  let Brands = [];
  let Tractors = [];
  let Foragers = [];
  let BrandIDMap = {};
  
  onMount(async () => {
    Brands = await BrandAPI.GetAll();
    console.log(Brands);  
    Tractors = await MachineAPI.GetByTags(["91592724-05a1-4299-7d9d-08de1b91bb86"])
    for (let Tractor of Tractors) {
      Tractor.ProfilPic = GalleryAPI.GetFirstImage(Tractor.galleryID);
      Tractor.ProfilDefault = logo;
      Tractor.prefix = "MaskinPakken"
    }



    BrandIDMap = {};
    for (const brand of Brands) {
      BrandIDMap[brand.brandID] = {Logo: GalleryAPI.ShowImage(brand.imageID),
        brandName: brand.brandName
      };
    }
  });
  function addBrand(Data){
    Data.Brand = BrandIDMap[Data.brandID]
    return Data
  }
</script>

<div class="page-wrapper">
  <h1 style="color: white; font-family: cursive;">MaskinPakken</h1>

  <Row>
  {#each Object.values(BrandIDMap) as Brand}
    <RowCard Data={Brand} />
  {/each}
  </Row>

  <div class="MachineColumn">
    <MachineColumn ColumnTitle="Traktorer">
      {#each Tractors as Tractor}
        <ColumCard Prefix="Machines/" Data={addBrand(Tractor)}/>
      {/each}
    </MachineColumn>
    <MachineColumn ColumnTitle="Snittere">
      {#each Foragers as Forager}
        <ColumCard Prefix="Machines/" Data={Forager} />
      {/each}
    </MachineColumn>
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

  .MachineColumn {
    margin-right: 2rem;
    display: flex;
  }
</style>
