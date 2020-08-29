<template>
<div class="wrapper">
    <!-- Main content -->
    <div>
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-lg-12">
            <div class="alert alert-success alert-dismissible">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
              <h5><i class="icon fas fa-check"></i> Lancar</h5>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Pantauan Kamera</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <video width="950" height="550" style="margin-top:-10px;" controls>
                  <source src="movie.mp4" type="video/mp4">
                </video>
              </div>
              <!-- /.card-body -->
              <div class="card-footer bg-white p-0">
              </div>
              <!-- /.footer -->
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{ street.motorcycle }}</h3>

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
                <h3>{{ street.car }}</h3>

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
                <h3>{{ street.truck }}</h3>

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
                <h3>{{ street.bus }}</h3>
                <p>Bus</p>
              </div>
              <div class="icon">
                <i class="fa fa-bus"></i>
              </div>
              <a href="#" class="small-box-footer">Detail <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
            <div class="col-12">
              <!-- interactive chart -->
              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h3 class="card-title">
                    <i class="far fa-chart-bar"></i>
                    Data Jumlah Motor
                  </h3>
                </div>
                <div class="card-body">
                  <highcharts :constructorType="'stockChart'" class="hc" :options="motorcycleChartOptions" ref="chart"></highcharts>
                </div>
              </div>
            </div>

            <div class="col-12">
              <!-- interactive chart -->
              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h3 class="card-title">
                    <i class="far fa-chart-bar"></i>
                    Data Jumlah Mobil
                  </h3>
                </div>
                <div class="card-body">
                  <highcharts :constructorType="'stockChart'" class="hc" :options="carChartOptions" ref="chart"></highcharts>
                </div>
              </div>
            </div>

            <div class="col-12">
              <!-- interactive chart -->
              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h3 class="card-title">
                    <i class="far fa-chart-bar"></i>
                    Data Jumlah Truk
                  </h3>
                </div>
                <div class="card-body">
                  <highcharts :constructorType="'stockChart'" class="hc" :options="truckChartOptions" ref="chart"></highcharts>
                </div>
              </div>
            </div>

            <div class="col-12">
              <!-- interactive chart -->
              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h3 class="card-title">
                    <i class="far fa-chart-bar"></i>
                    Data Jumlah Bus
                  </h3>
                </div>
                <div class="card-body">
                  <highcharts :constructorType="'stockChart'" class="hc" :options="busChartOptions" ref="chart"></highcharts>
                </div>
              </div>
            </div>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
</div>
<!-- ./wrapper -->
</template>
<script>
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'

stockInit(Highcharts)

export default {
  data: function() {
    return {
      street: {},
      streetName: "",
      streetDataToday: [],
      streetMotorcycleData: [],
      streetCarData: [],
      streetTruckData: [],
      streetBusData: [],
      motorcycleChartOptions: {
        series: [
          {
            data : this.streetMotorData
          }
        ]
      },
      carChartOptions: {
        series: [
          {
            data : this.streetCarData
          }
        ]
      }, 
      truckChartOptions: {
        series: [
          {
            data : this.streetTruckData
          }
        ]
      },
      busChartOptions: {
        series: [
          {
            data : this.streetBusData
          }
        ]
      }
    }
  },
  methods: {
    getStreetDataNow() {
      var self = this
      this.street.streetName = this.streetName;
      setInterval(function(){
          self.axios.post('http://localhost:3030/api/v1/street/count/now', self.street)
          .then((response) => { 
            
            self.street = response.data;
            self.street.streetName = self.streetName;
        }).catch(error => {   
            console.log("error: "+JSON.stringify(error.error));
      });
      }, 1000)
    },
    getStreetDataToday() {

            /* eslint-disable */
      var self = this
      this.street.streetName = this.streetName
      setInterval(function(){
          self.axios.post('http://localhost:3030/api/v1/street/count/day', self.street)
          .then((response) => {
          self.streetCarData = [] 
            for(var i = 0; i < response.data[0].counts.length; i++) {
              
              var time = new Date(response.data[0].counts[i].time).getTime()

              var data = [];
              data.push(time)
              data.push(response.data[0].counts[i].motorcycle)

              self.streetMotorcycleData.push(data);

              data = [];
              data.push(time)
              data.push(response.data[0].counts[i].car)

              self.streetCarData.push(data);

              data = [];
              data.push(time)
              data.push(response.data[0].counts[i].truck)

              self.streetTruckData.push(data);

              data = [];
              data.push(time)
              data.push(response.data[0].counts[i].bus)

              self.streetBusData.push(data);

            }
          self.motorcycleChartOptions.series[0].data = self.streetMotorcycleData;
          self.carChartOptions.series[0].data = self.streetCarData;
          self.truckChartOptions.series[0].data = self.streetTruckData;
          self.busChartOptions.series[0].data = self.streetBusData;

          }).catch(error => {   
            console.log("error: "+JSON.stringify(error.error));
      });
      }, 1000)
    }
  },
  created() {
    this.streetName = this.$route.params.streetName;
    this.$eventBus.$emit("location", "street");
    this.$eventBus.$emit("subLocation", "Darmo");
  },
  mounted() {
    /* eslint-disable */

    //this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    var self = this

    setInterval(function(){

      var street = {}

      street.motorcycle = Math.floor(Math.random() * 100 ) % 10;
      street.car = Math.floor(Math.random() * 100 ) % 5;
      street.truck = Math.floor(Math.random() * 100 ) % 3;
      street.bus = Math.floor(Math.random() * 100 ) % 2;
      street.streetName = self.streetName;

      self.axios.post('http://localhost:3030/api/v1/street/count', street)
          .then((response) => {
            //console.log("response: "+JSON.stringify(response))
          }).catch(error => {   
            console.log("error: "+JSON.stringify(error));
      });
    }, 3000)

    this.getStreetDataNow()
    this.getStreetDataToday()
    
  }
}
</script>