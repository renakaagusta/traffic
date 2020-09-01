<template>
<div class="wrapper">

  <!-- Content Wrapper. Contains page content -->
  <div>
    <!-- Content Header (Page header) -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        
        <!-- Timelime example  -->
        <div class="row">
          <div class="col-md-12">
            <!-- The time line -->
            <div class="timeline">
              <!-- timeline time label -->
              <div class="time-label">
                <span class="bg-secondary">{{ getIndonesiaDateFormat( today) }}</span>
              </div>
              <!-- /.timeline-label -->
              <!-- timeline item -->
              <div v-for="event in timeline.today" :key="event.id">
                <i v-if="event.status == 0" class="fas fa-check bg-green"></i>
                <i v-if="event.status == 1" class="fas fa-exclamation bg-yellow"></i>
                <i v-if="event.status == 2" class="fas fa-exclamation bg-red"></i>
                <div class="timeline-item">
                  <span class="time"><i class="fas fa-clock"></i>{{ getHours(event.time) }}</span>
                  <h3 class="timeline-header"><a href="#">{{ 'Jl. '+ event.name }}</a></h3>

                  <div v-if="event.status == 0" class="timeline-body">
                    lancar
                  </div>
                  <div v-if="event.status == 1" class="timeline-body">
                    padat
                  </div>
                  <div v-if="event.status == 2" class="timeline-body">
                    macet
                  </div>
                  <div class="timeline-footer">
                    <a class="btn btn-primary btn-sm" @click="alertDisplay(event)">Detail</a>
                  </div>
                </div>
              </div>
              <!-- END timeline item -->
                            <!-- timeline time label -->
              <div class="time-label">
                <span class="bg-secondary">{{ getIndonesiaDateFormat( today_min_1) }}</span>
              </div>
              <!-- /.timeline-label -->
              <!-- timeline item -->
              <div v-for="event in timeline.today_min_1" :key="event.id">
                <i v-if="event.status == 0" class="fas fa-check bg-green"></i>
                <i v-if="event.status == 1" class="fas fa-exclamation bg-yellow"></i>
                <i v-if="event.status == 2" class="fas fa-exclamation bg-red"></i>
                <div class="timeline-item">
                  <span class="time"><i class="fas fa-clock"></i>{{ getHours(event.time) }}</span>
                  <h3 class="timeline-header"><a href="#">{{ 'Jl. '+ event.name }}</a></h3>

                  <div v-if="event.status == 0" class="timeline-body">
                    lancar
                  </div>
                  <div v-if="event.status == 1" class="timeline-body">
                    padat
                  </div>
                  <div v-if="event.status == 2" class="timeline-body">
                    macet
                  </div>
                  <div class="timeline-footer">
                    <a class="btn btn-primary btn-sm"  @click="alertDisplay(event)">Detail</a>
                  </div>
                </div>
              </div>
              <!-- END timeline item -->
                                          <!-- timeline time label -->
              <div class="time-label">
                <span class="bg-secondary">{{ getIndonesiaDateFormat( today_min_2) }}</span>
              </div>
              <!-- /.timeline-label -->
              <!-- timeline item -->
              <div v-for="event in timeline.today_min_2" :key="event.id">
                <i v-if="event.status == 0" class="fas fa-check bg-green"></i>
                <i v-if="event.status == 1" class="fas fa-exclamation bg-yellow"></i>
                <i v-if="event.status == 2" class="fas fa-exclamation bg-red"></i>
                <div class="timeline-item">
                  <span class="time"><i class="fas fa-clock"></i>{{ getHours(event.time) }}</span>
                  <h3 class="timeline-header"><a href="#">{{ 'Jl. '+ event.name }}</a></h3>

                  <div v-if="event.status == 0" class="timeline-body">
                    lancar
                  </div>
                  <div v-if="event.status == 1" class="timeline-body">
                    padat
                  </div>
                  <div v-if="event.status == 2" class="timeline-body">
                    macet
                  </div>
                  <div class="timeline-footer">
                    <a class="btn btn-primary btn-sm"  @click="alertDisplay(event)">Detail</a>
                  </div>
                </div>
              </div>
              <!-- END timeline item -->
              <!-- timeline item -->
              <div v-if="set">
                <i class="fas fa-exclamation bg-red"></i>
                <div class="timeline-item">
                  <span class="time"><i class="fas fa-clock"></i> 12:05</span>
                  <h3 class="timeline-header"><a href="#">Jl Kertajaya</a></h3>

                  <div class="timeline-body">
                    Macet
                  </div>
                  <div class="timeline-footer">
                    <a class="btn btn-primary btn-sm">Detail</a>
                  </div>
                </div>
              </div>
              <!-- END timeline item -->
              <!-- timeline item -->
              <div v-if="set">
                <i class="fas fa-exclamation bg-yellow"></i>
                <div class="timeline-item">
                  <span class="time"><i class="fas fa-clock"></i> 08:33</span>
                  <h3 class="timeline-header"><a href="#">Jl Ir Soekarno</a></h3>

                  <div class="timeline-body">
                    Ramai
                  </div>
                  <div class="timeline-footer">
                    <a class="btn btn-primary btn-sm">Detail</a>
                  </div>
                </div>
              </div>
              <!-- END timeline item -->
              <!-- timeline time label -->
              <div class="time-label" v-if="set">
                <span class="bg-secondary">9 Agustus 2020</span>
              </div>
              <!-- /.timeline-label -->
              <!-- timeline item -->
              <div v-if="set">
                <i class="fa fa-camera bg-purple"></i>
                <div class="timeline-item">
                  <span class="time"><i class="fas fa-clock"></i> 2 days ago</span>
                  <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>
                  <div class="timeline-body">
                    <img src="http://placehold.it/150x100" alt="...">
                    <img src="http://placehold.it/150x100" alt="...">
                    <img src="http://placehold.it/150x100" alt="...">
                    <img src="http://placehold.it/150x100" alt="...">
                    <img src="http://placehold.it/150x100" alt="...">
                  </div>
                </div>
              </div>
              <!-- END timeline item -->
              <!-- timeline item -->
              <div v-if="set">
                <i class="fas fa-video bg-maroon"></i>

                <div class="timeline-item">
                  <span class="time"><i class="fas fa-clock"></i> 5 days ago</span>

                  <h3 class="timeline-header"><a href="#">Mr. Doe</a> shared a video</h3>

                  <div class="timeline-body">
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                  </div>
                  <div class="timeline-footer">
                    <a href="#" class="btn btn-sm bg-maroon">See comments</a>
                  </div>
                </div>
              </div>
              <!-- END timeline item -->
              <div v-if="set">
                <i class="fas fa-clock bg-gray"></i>
              </div>
            </div>
          </div>
          <!-- /.col -->
        </div>
      </div>
      <!-- /.timeline -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
</template>
<script>

export default {
  /* eslint-disable */
  data() {
    return{        
      ip: "157.230.39.171",
      //ip: "localhost",
      timeline: {
        today: [],
        today_min_1: [],
        today_min_2: [],
      },
      today: "",
      today_min_1: "",
      today_min_2: "",
      set: false,
    }
  },
  methods: {
    alertDisplay(event) {
      this.$swal('Data kendaraan', 
                  '<br> Motor : ' + event.motorcycle +
                  '<br> Mobil : ' + event.car +
                  '<br> Truck : ' + event.truck +
                  '<br> Bus : ' + event.bus,
                  'OK');

    },
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    getHours(timeStamp) {
      var time = new Date(timeStamp);

      var h = time.getHours();
      var m = time.getMinutes();
      var s = time.getSeconds();

      h = this.checkTime(h);
      m = this.checkTime(m);
      s = this.checkTime(s);

      return " " + h + ":" + m + ":" + s
    },
    getIndonesiaDateFormat(timeStamp) {
      var date = new Date(timeStamp);
      
      var tahun = date.getFullYear();
      var bulan = date.getMonth();
      var tanggal = date.getDate();
      var hari = date.getDay();

      switch(hari) {
        case 0: hari = "Minggu"; break;
        case 1: hari = "Senin"; break;
        case 2: hari = "Selasa"; break;
        case 3: hari = "Rabu"; break;
        case 4: hari = "Kamis"; break;
        case 5: hari = "Jum'at"; break;
        case 6: hari = "Sabtu"; break;
      }

      switch(bulan) {
        case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
        case 2: bulan = "Maret"; break;
        case 3: bulan = "April"; break;
        case 4: bulan = "Mei"; break;
        case 5: bulan = "Juni"; break;
        case 6: bulan = "Juli"; break;
        case 7: bulan = "Agustus"; break;
        case 8: bulan = "September"; break;
        case 9: bulan = "Oktober"; break;
        case 10: bulan = "November"; break;
        case 11: bulan = "Desember"; break;
      }

      return hari + ", " + tanggal + " " + bulan + " " + tahun;

    } 
  },
  created() {
    this.$eventBus.$emit('location', 'timeline')

    var self = this


    this.today = new Date();
    this.today_min_1 = this.today.setHours(-24, 0, 0, 0);
    this.today_min_2 = this.today.setHours(-48, 0, 0, 0);
    this.today = this.today.setHours(72, 0, 0, 0);


    setInterval(function(){
      self.axios.post('http://'+ self.ip + ':3030/api/v1/street/all/condition')
          .then((response) => {

              self.timeline.today = []
              self.timeline.today_min_1 = []
              self.timeline.today_min_2 = []
            response.data.forEach(function(event){
              if(self.getIndonesiaDateFormat(event.time) == self.getIndonesiaDateFormat(self.today)) {
                self.timeline.today.push(event)
                console.log("sabtu")
              } else if(self.getIndonesiaDateFormat(event.time) == self.getIndonesiaDateFormat(self.today_min_1)) {
                self.timeline.today_min_1.push(event)
                console.log("jumat")
              } else if(self.getIndonesiaDateFormat(event.time) == self.getIndonesiaDateFormat(self.today_min_2)) {
                self.timeline.today_min_2.push(event)
                console.log("kamis")
              }
            })
            self.set = true
          }).catch(error => {   
            console.log("error: "+JSON.stringify(error));
      });
    }, 3000)
  }, 
  mounted() {
  }
}
</script>