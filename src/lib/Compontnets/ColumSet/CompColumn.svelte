<script>
    export let ColumnTitle;
</script>

<div class="ColumnSet-container">
    <h2>{ColumnTitle}</h2>
    <div class="ColumnCard-container">
        <slot></slot>
    </div>
</div>

<style>
    .ColumnSet-container {
        margin: 20px;
        padding: 0 20px;
        background-color: #ffffff9d;
        max-width: 370px; 
    }


    .ColumnCard-container {
        display: flex;
        flex-direction: column; 
        gap: 20px;              
        padding: 10px;
        overflow-y: auto;
        position: relative;
        z-index: 1;   
    }
</style>
