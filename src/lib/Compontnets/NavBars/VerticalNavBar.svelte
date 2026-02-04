<script>
 export let active = "";

  const items = [
    { id: '', label: 'Hjem', icon: '🏠' },
    { id: '/Stock', label: 'Vare', icon: '📦' },
    { id: '/Prices', label: 'Priser', icon: '💰' },
    { id: '/Costumers', label: 'Kunder', icon: '👤' },
    { id: '/Employees', label: 'Medarbejdere', icon: '👨‍🌾'},
    { id: '/Sitesettings', label: 'SiteSettings', icon: '⚙️' },
  ];
</script>
<nav class="sidebar">
  {#each items as item}
    <a href="/Admin{item.id}"
      class="nav-btn {active === item.id ? 'active' : ''}"
      on:click={() => active = item.id}
    >
      <span class="icon">{item.icon}</span>
      <span class="label">{item.label}</span>
    </a>
  {/each}
</nav>

<style>
  .sidebar {
    width: 200px;
    height: 100vh;
    background: #0f172a;
    display: fixed;
    flex-direction: column;
    padding: 8px;
    gap: 4px;
  }

  .nav-btn {
    all: unset;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 6px;
    color: #cbd5f5;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .nav-btn:hover {
    background: #1e293b;
    color: #fff;
  }

  .nav-btn.active {
    background: #2563eb;
    color: #fff;
  }

  .icon {
    width: 20px;
    text-align: center;
  }

  .label {
    font-size: 14px;
  }
</style>
