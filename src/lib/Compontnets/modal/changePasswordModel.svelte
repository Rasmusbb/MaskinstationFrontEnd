<script>
  let NewPassword;
  let repeatPassword;
  export let IsForced;
</script>

  {#if showLogin}
    <div class="modal-backdrop">
      <div class="modal">
        <h2>Change Password</h2>
        <form onsubmit={handleSubmit}>
          <label>
            New password
            <input type="text" name="username" required bind:value={NewPassword}/>
          </label>
          <label>
            Repeat Password
            <input type="password" name="password" required bind:value={repeatPassword}/>
          </label>
          <div class="actions">
            {#if IsForced == false}
              <button type="button" class="cancel" onclick={() => showLogin = false}>Cancel</button>
            {/if}
            <button type="submit" class="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  {/if}