<script>
import { onMount } from "svelte";
import {goto} from '$app/navigation'
import HeaderButton from "./headerButton.svelte";
import logo from '../../assets/Logo.avif';
import Userpic from '../../assets/user.png';
import User from '../../../API/REST/User.js';
import storage from '../../../API/storage.js';
import LoginModal from '../modal/LoginModal.svelte'
import Gallery from "../../../API/REST/Gallery";

    let showLogin = $state(false);
    let profilePic = $state(Userpic);
    let username = $state('');
    let password = $state('');
    let LoggedIn = $state(false);
    let Admin = $state(false);
    function toggleLogin() {
        showLogin = !showLogin;
    }
    function goHome(event) {
      event.preventDefault();
      console.log("Hello2")
      window.location.href = '/'; 
    }
    function checkToken(){
      let Token = storage.DecodeToken("accessToken")
      console.log(Token);
        if (Token != null){
          LoggedIn = true
          if(Token.ProfilPic != "00000000-0000-0000-0000-000000000000"){
            profilePic = Gallery.ShowImage(Token.ProfilPic)
          }
          if (Token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] === "Admin") {
              Admin = true;
          }
          showLogin = false
        }
    }

    onMount(() => {
      checkToken();
    });
</script>

<div class="content">
  <div class="navbar">
    <a href="/" class="logo-wrap">
      <img src={logo} alt="Logo" class="Logo"/>
    </a>
    <div class="header-buttons">
      <HeaderButton Url="MaskinPakken">MaskinPakken</HeaderButton>
      <HeaderButton Url="services">Services</HeaderButton>
      <HeaderButton Url="TheTeam">Holdet</HeaderButton>
      <HeaderButton Url="AboutUs">Om Os</HeaderButton>
      {#if Admin}
        <HeaderButton Url="Admin">Admin Panel</HeaderButton>
      {/if}

    </div>
    <div class="nav-actions">
      {#if LoggedIn}
        <img src={profilePic} alt="UserLogo" class="Profilpic"/>
      {:else}
        <button class="loginbtn" onclick={() => showLogin = true}>Login</button>
      {/if}
    </div>
  </div>  

  {#if showLogin}
    <LoginModal on:close={() => showLogin = false} on:LoggedIn={() => checkToken()} ></LoginModal>
  {/if}
</div>

<style>
  .content {
    position: relative;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: #ffffff98;
    padding: 0 20px;
  }

  
  .logo-wrap {
    display: flex;
    align-items: center;
  }

  .Logo {
    width: 200px;
    height: auto;
    transition: transform 0.2s ease;
  }
  .Logo:hover {
    transform: scale(1.05);
  }

  .nav-actions {
    display: flex;
    gap: 15px;
  }

  .header-buttons {
    display: flex;
    justify-content: space-evenly; 
    align-items: center;          
    width: 100%;                  
  }



  .loginbtn {
    background: #154E94;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: all 0.25s ease;
  }
  .loginbtn:hover {
    background: #ffffff;
    color: #1f2937;
    transform: translateY(-2px);
  }

  .Profilpic {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: transform 0.2s ease;
  }
  .Profilpic:hover {
    transform: scale(1.1);
  }
</style>

