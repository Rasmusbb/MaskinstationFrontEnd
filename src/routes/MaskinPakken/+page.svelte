<script>
  import BrandAPI from '../../API/REST/Brand.js';
  import MachineAPI from '../../API/REST/Machine.js';
  import { onMount } from 'svelte';
  import MachineColumn from '$lib/compontnets/columSet/CompColumn.svelte';
  import ColumCard from '$lib/compontnets/columSet/ColumnCard.svelte';
  import Row from '$lib/compontnets/RowSet/CompRow.svelte';
  import RowCard from '$lib/compontnets/RowSet/RowCard.svelte';
  import Gallery from "../../API/REST/Gallery.js"
    import Brand from '../../API/REST/Brand.js';
  let bgImage = Gallery.ShowImage("3baa5a3d-ec15-48af-3df2-08de1aeae48a")
  let Brands = [];
  let Tractors = [];
  let Foragers = [];
  let BrandIDMap = {};
  
  onMount(async () => {
    Brands = await BrandAPI.GetAll();
    Tractors = await MachineAPI.GetByTags(["91592724-05a1-4299-7d9d-08de1b91bb86"])
    BrandIDMap = {};
    for (const brand of Brands) {
      BrandIDMap[brand.brandID] = {Logo: Gallery.ShowImage(brand.imageID),
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
