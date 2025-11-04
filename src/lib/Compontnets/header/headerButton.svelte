<script>
    export let Url = "";
</script>

    <a class="NavButton" href="/{Url}">
        <slot></slot>
    </a>

<style>
  .NavButton {
  display: inline-flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  background: white;           /* default background */
  color: #4f46e5;              /* default text color */
  border: none;
  border-radius: 12px;
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;       /* remove underline */
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: all 0.25s ease;
}

.NavButton:hover {
  background: #3b82f6;         /* blue background on hover */
  color: white;                 /* white text on hover */
  transform: none;              /* no zoom or translate */
}

</style>