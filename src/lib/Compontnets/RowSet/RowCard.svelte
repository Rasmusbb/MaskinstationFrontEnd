
<script>
    export let Data;
</script>
<div class="rowcard">
    <img src={Data.Logo} alt={Data.brandName} class="rowcard-img">
</div>



<style>

.rowcard{
    object-fit: contain;

}

.rowcard-img{
  width: 2.5rem;
  height: 2.5rem
}
</style>