
<template>
  <div id="app">
    <body class="hold-transition sidebar-mini layout-fixed">
      <sidebar ref="sidebar"/>
      <navbar ref="navbar"/>
<div class="wrapper">
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li v-if="location == 'home'" class="breadcrumb-item active">Beranda</li>
              <li v-if="location == 'timeline'" class="breadcrumb-item active">Timeline</li>
              <li v-if="location == 'street'" class="breadcrumb-item active">Jalan</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

        <router-view></router-view>
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

</body>

    </div>  
</template>
<script>

  require("@/assets/plugins/fontawesome-free/css/all.min.css")
  require("@/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css")
  require("@/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css")
  require("@/assets/plugins/jqvmap/jqvmap.min.css")
  require("@/assets/dist/css/adminlte.min.css")
  require("@/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css")
  require("@/assets/plugins/daterangepicker/daterangepicker.css")
  require("@/assets/plugins/summernote/summernote-bs4.css")

  export default {
    name: "app",
    data() {
      return {
        location: "",
        subLocation: ""
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
