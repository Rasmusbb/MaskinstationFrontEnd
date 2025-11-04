<script>
  import { createEventDispatcher } from 'svelte';
  import User from '../../../API/REST/User.js';
  const dispatch = createEventDispatcher();
  let username;
  let password;

  function toggleModal() {
    dispatch('close');
  }

  async function handleSubmit() {
    let Data = {
        email: username,
        password: password
    }
    console.log(Data)
    let LoginResult = await User.Login(Data)

    console.log(LoginResult)
    if(LoginResult.accessToken != null){

        dispatch("LoggedIn")
    }else{
        console.log("Fuuuuc")
    }
  }
</script>

<div class="modal-backdrop">
  <div class="modal">
    <h2>Login</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <label>
        Username
        <input type="text" name="Email" required bind:value={username}/>
      </label>
      <label>
        Password
        <input type="password" name="password" required bind:value={password}/>
      </label>
      <div class="actions">
        <button type="button" class="cancel" on:click={toggleModal}>Cancel</button>
        <button type="submit" class="submit">Login</button>
      </div>
    </form>
  </div>
</div>


<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background: #fff;
    padding: 2rem;
    border-radius: 16px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
    animation: fadeIn 0.25s ease;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: #1f2937;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    color: #374151;
  }

  input {
    padding: 0.6rem;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    transition: border-color 0.2s;
  }
  input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59,130,246,0.25);
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.8rem;
    margin-top: 1rem;
  }

  .cancel, .submit {
    border: none;
    border-radius: 10px;
    padding: 0.6rem 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .cancel {
    background: #f3f4f6;
    color: #374151;
  }
  .cancel:hover {
    background: #e5e7eb;
  }

  .submit {
    background: #3b82f6;
    color: white;
  }
  .submit:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }

  @keyframes fadeIn {
    from {opacity: 0; transform: scale(0.95);}
    to {opacity: 1; transform: scale(1);}
  }
</style>

