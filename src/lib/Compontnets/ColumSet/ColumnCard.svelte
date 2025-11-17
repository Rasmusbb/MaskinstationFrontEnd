<script>
    export let Data;
    import ColumnInfo from "./ColumnInfo.svelte";
    console.log(Data);
</script>

<a href="/{Data.prefix}/{Data.machineID}" class="columncard">
    <ColumnInfo {Data} />
</a>

<style>

.columncard {
    display: flex; 
    align-items: center; 
    text-decoration: none;
    gap: 16px; 
    width: 320px;
    background: rgba(55, 118, 161, 0.90);
    color: #fff;
    border-radius: 16px;
    padding: 14px;
    box-shadow:
      0 2px 6px rgba(0,0,0,.08),
      0 12px 24px rgba(0,0,0,.06); 
    transition: transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s;
    animation: pop-in 1s cubic-bezier(.2,.7,.2,1) both;
}

.columncard:hover {
    cursor: pointer;
    transform: translateY(-5px) scale(1.05); 
    filter: drop-shadow(0 14px 20px rgba(0,0,0,.18)); 
}

</style>