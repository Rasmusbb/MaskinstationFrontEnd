<script>
export let Title = "";
let selectedRoles = [];
</script>

<div class="CreateBox" style="CreateBox">
        <h2>{Title}</h2>
        <slot></slot>
</div>


<style>
.CreateBox {
    width: 100%;
    max-width: 380px; 
    background: rgba(55, 118, 161, 0.95);
    border-radius: 14px;
    padding: 2rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    color: white;
    text-align: center;
}
</style>