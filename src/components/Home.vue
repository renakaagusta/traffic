<template>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>150</h3>

                <p>Motor</p>
              </div>
              <div class="icon">
                <i class="fa fa-motorcycle"></i>
              </div>
              <a href="#" class="small-box-footer">Detail <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53</h3>

                <p>Mobil</p>
              </div>
              <div class="icon">
                <i class="fa fa-car"></i>
              </div>
              <a href="#" class="small-box-footer">Detail <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>44</h3>

                <p>Truck</p>
                <div class="icon">
                  <i class="fa fa-truck"></i>

                </div>
              </div>
              <a href="#" class="small-box-footer">Detail <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>

                <p>Bus</p>
              </div>
              <div class="icon">
                <i class="fa fa-bus"></i>
              </div>
              <a href="#" class="small-box-footer">Detail <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
        </div>

        <section class="content">
          <div class="row">
          <section class="col-lg-7 connectedSortable">
            <!-- Custom tabs (Charts with tabs)-->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-chart-pie mr-1"></i>
                  Data lalu lintas mingguan
                </h3>
              </div><!-- /.card-header -->
              <div class="card-body">
                  <chart/>

              </div><!-- /.card-body -->
            </div>
            <!-- /.card -->
            
            <!-- /.card -->
          </section>
          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
          <section class="col-lg-5 connectedSortable">
            <div class="card bg-gradient-primary">
              <div class="card-header border-0">
                <h3 class="card-title">
                  <i class="fas fa-map-marker-alt mr-1"></i>
                  Pantauan wilayah
                </h3>
                <!-- card tools -->
                <div class="card-tools">
                  <button type="button"
                          class="btn btn-primary btn-sm daterange"
                          data-toggle="tooltip"
                          title="Date range">
                    <i class="far fa-calendar-alt"></i>
                  </button>
                  <button type="button"
                          class="btn btn-primary btn-sm"
                          data-card-widget="collapse"
                          data-toggle="tooltip"
                          title="Collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <!-- /.card-tools -->
              </div>

              <div class="card-body">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250592.09967608948!2d112.77977060109288!3d-7.329100028623548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1596716109172!5m2!1sid!2sid" width="375" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" style="max-width:300px; max-height:200px;"></iframe>
              </div><!-- /.card-body-->
              <div class="card-footer bg-transparent">
                <div class="row">
                  <div class="col-4 text-center">
                    <div id="sparkline-1" style="display:none"></div>
                  </div>
                  <!-- ./col -->
                  <div class="col-4 text-center">
                    <div id="sparkline-2" style="display:none"></div>
                  </div>
                  <!-- ./col -->
                  <div class="col-4 text-center">
                    <div id="sparkline-3" style="display:none"></div>
                  </div>
                  <!-- ./col -->
                </div>
                <!-- /.row -->
              </div>
            </div>
          </section>
          </div>
        </section>
      </div>
    </section>
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

  import Chart from "./Chart";

  export default {
    name: "app",
    components: {
      chart: Chart
    },
    methods: {
      handler() {
        var args = arguments;
        for (var arg of args) {
          if (arg instanceof Function) {
            arg();
          }
        }
      }
    },
    created() {
      this.$eventBus.$emit("location", "home");
      console.log("hello")
    }
  };
      
</script>
