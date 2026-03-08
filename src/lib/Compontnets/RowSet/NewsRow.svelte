<div class="NewsRow">
  <div class="Content">
    <slot />
  </div>
</div>

<style>
.NewsRow {
  display: flex;
  align-items: center;
  width: 100vw;               
  height: 250px;              
  padding: 0 20px;
  margin-bottom: 20px;
  box-sizing: border-box;     
}


.Content {
    display: flex;
    width: 100vw;               
    height: 250px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 12px;
    font-weight: bold;
}

</style>