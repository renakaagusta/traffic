<template>

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <span class="brand-text font-weight-light">Dashboard</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->
          <li class="nav-item">
            <router-link v-bind:class="['nav-link',location == 'home' ? 'active' :'']" :to="{path:'/home', params: { streetName: 'Darmo'}}">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-bind:class="['nav-link',location == 'timeline' ? 'active' :'']" :to="{path:'/timeline'}">
                <i class="nav-icon fas fa-clock"></i>
                <p>
                  Timeline
                </p>
            </router-link>
          </li>
          <li v-bind:class="[location == 'street' ? 'menu-open' : '','nav-item', 'has-treeview']">
            <a class="nav-link" href="" @click.prevent="navStreet=!navStreet">
                <i class="fas fa-road nav-icon"></i>
                <p>
                Jalan
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav" v-if="navStreet || location == 'street'">
              <li class="nav-item">
                <router-link v-bind:class="[subLocation=='Darmo' ? 'active' : '','nav-link']" :to="{name:'street', params: { streetName: 'Darmo'}}">Darmo</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" v-bind:class="[subLocation=='Kertajaya' ? 'active' : '','nav-link']" :to="{name:'street', params: { streetName: 'Kertajaya'}}">Kertajaya</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" v-bind:class="[subLocation=='Ir Soekarno' ? 'active' : '','nav-link']" :to="{name:'street', params: { streetName: 'Ir Soekarno'}}">Ir Soekarno</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>

  export default {
    name: "app",
    data() {
      return{
        navStreet: false,
        location: "",
        subLocation: "",
      }
    },
    methods: {
    },
    created() {
      this.$eventBus.$on("location", location => {
        this.location = location;
      })
      this.$eventBus.$on("subLocation", subLocation => {
        this.subLocation = subLocation;
      })
    }
  };

</script>