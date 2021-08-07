<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/"><i class="fas fa-home"></i>&nbsp;Home</router-link>
        </li>
        <li>
          <router-link to="/server"><i class="fas fa-server"></i>&nbsp;Server</router-link>
        </li>
        <li>
          <router-link to="/playbook"><i class="fas fa-book"></i>&nbsp;Playbook</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}

.nav li {
  text-align: left;
}
</style>
