<script>
</script>

<div class="row">
    <slot class="RowCard-img"></slot>
</div>

<style>

    .row{
        display: flex;
        background-color: #ffffff9d;
        justify-content: space-evenly;
    }

    .rowcard-img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* keeps logo aspect ratio */
    }
</style>
