<template>
<!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="" class="nav-link">Dashboard</a>
      </li>
    </ul>
  </nav>

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