<template>
  <div id="app">
    <nav class="nav-desktop">
      <div>
        <div class="nav-desktop-left">
            <a class="logo" href="#">
              <img src="/src/assets/img/britecore.png" alt="BrightCore">
              <b class="white">BriteCore</b>
            </a>
        </div>
        <div class="hamburger">
          <span class="first-child"></span>
          <span></span>
          <span class="last-child"></span>
        </div>
        <div class="links">
          <ul>
            <li>
              <img class="icon" src="/src/assets/img/policies.svg" alt="Policies">
              <a href="#">Policies</a>
            </li>
            <li>
              <img class="icon" src="/src/assets/img/claims.svg" alt="Claims">
              <a href="#">Claims</a>
            </li>
            <li>
              <img class="icon" src="/src/assets/img/contacts.svg" alt="Contacts">
              <a href="#">Contacts</a>
            </li>
            <li>
              <img class="icon" src="/src/assets/img/data.svg" alt="Data">
              <a href="#">Data</a>
            </li>
            <li>
              <img class="icon" src="/src/assets/img/lines.svg" alt="Lines">
              <a href="#">Lines</a>
            </li>
            <li>
              <img class="icon" src="/src/assets/img/brightcore.png" alt="All Modules">
              <a href="#">All Modules</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
