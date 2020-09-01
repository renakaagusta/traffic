<template>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{ streets.motorcycle }}</h3>

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
                <h3>{{ streets.car }}</h3>

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
                <h3>{{ streets.truck }}</h3>

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
                <h3>{{ streets.bus }}</h3>

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
          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
          <section class="col-lg-12 connectedSortable">
            <div class="card bg-gradient-primary">
              <div class="card-header border-0">
                <h3 class="card-title">
                  <i class="fas fa-map-marker-alt mr-1"></i>
                  Pantauan wilayah
                </h3>
                <!-- card tools -->
                <div class="card-tools">
                </div>
                <!-- /.card-tools -->
              </div>

              <div class="card-body">
              <GmapMap
                :center="{ lat: -7.2754438, lng: 112.6424711 }"
                :zoom="13"
                style="width:100%; height:500px;"
                ref="myMapRef"
              ></GmapMap>

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

  export default {
    name: "app",
    data() {
      return {
        ip: "157.230.39.171",
        //ip: "localhost",
        streets: {
          motorcycle: 0,
          car: 0,
          truck: 0,
          bus: 0,
          data: []
        }
      }
    },
    methods: {
      getStreetData() {
        /* eslint-disable */
        var self = this;
        setInterval(function() {
          self.axios.post('http://'+ self.ip + ':3030/api/v1/street/all/count/now', self.streets)
          .then((response)=>{
            self.streets.motorcycle = 0
            self.streets.car = 0
            self.streets.truck = 0
            self.streets.bus = 0
            self.streets.data = response.data
            self.streets.data.forEach(function(street){
              self.streets.motorcycle += street.count.motorcycle;
              self.streets.car += street.count.car;
              self.streets.truck += street.count.truck;
              self.streets.bus += street.count.bus;
            })
          })
        }, 1000)
      },
    },
    created() {
      this.$eventBus.$emit("location", "home");
      this.getStreetData();
    },
    mounted() {
      this.$refs.myMapRef.$mapPromise.then((map) => {
        let trafficLayer = new google.maps.TrafficLayer;
        trafficLayer.setMap(map);
      });
    }
  };
      
</script>
