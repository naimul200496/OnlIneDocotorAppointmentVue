<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- DocotrInfo Card -->
          <DoctorCard />

          <!-- Schedule Widget -->
          <div class="card booking-schedule schedule-widget">
            <!-- Schedule Header -->
            <div class="schedule-header">
              <div class="row">
                <div class="col-md-12">
                  <div>
                    <input type="date" v-model="datePicker" />
                    <button class="btn btn-warning btn-sm" @click.prevent="dateChange()">
                      Change Date
                    </button>
                  </div>
                  <!-- Day Slot -->
                  <div class="day-slot">
                    <ul>
                      <li class="left-arrow">
                        <a href="#">
                          <i class="fa fa-chevron-left"></i>
                        </a>
                      </li>
                      <li v-for="weeklist in getWeek" :key="weeklist.Day">
                        <span>{{ weeklist.DayName }}</span>
                        <span class="slot-date">
                          <small class="slot-year">{{ weeklist.Date }}</small></span
                        >
                      </li>

                      <li class="right-arrow">
                        <a href="#">
                          <i class="fa fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- /Day Slot -->
                </div>
              </div>
            </div>
            <!-- /Schedule Header -->

            <!-- Schedule Content -->
            <div class="schedule-cont">
              <div class="row">
                <div class="col-md-12">
                  <!-- Time Slot -->
                  <div class="time-slot">
                    <div>
                      <ul class="clearfix">
                        <li v-for="(item1, index) in grp1" :key="index">
                          <a
                            v-if="item1.timeSelected"
                            :class="{ 'timing selected': item1.active, timing: !item1.active }"
                            href="#"
                            @click="toggleClass(index, item1.id)"
                            style="text-decoration-line: line-through"
                          >
                            <span>{{ item1.value1 }}</span> <span>{{ item1.value2 }} </span>
                          </a>
                          <a
                            v-else
                            :class="{ 'timing selected': item1.active, timing: !item1.active }"
                            href="#"
                            @click="toggleClass(index, item1.id)"
                          >
                            <span>{{ item1.value1 }}</span> <span>{{ item1.value2 }} </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="clearfix">
                        <li v-for="(item1, index) in grp2" :key="index">
                          <a
                            v-if="item1.timeSelected"
                            :class="{ 'timing selected': item1.active, timing: !item1.active }"
                            href="#"
                            @click="toggleClass(index, item1.id)"
                            style="text-decoration-line: line-through"
                          >
                            <span>{{ item1.value1 }}</span> <span>{{ item1.value2 }} </span>
                          </a>
                          <a
                            v-else
                            :class="{ 'timing selected': item1.active, timing: !item1.active }"
                            href="#"
                            @click="toggleClass(index, item1.id)"
                          >
                            <span>{{ item1.value1 }}</span> <span>{{ item1.value2 }} </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="clearfix">
                        <li v-for="(item1, index) in grp3" :key="index">
                          <a
                            v-if="item1.timeSelected"
                            :class="{ 'timing selected': item1.active, timing: !item1.active }"
                            href="#"
                            @click="toggleClass(index, item1.id)"
                            style="text-decoration-line: line-through"
                          >
                            <span>{{ item1.value1 }}</span> <span>{{ item1.value2 }} </span>
                          </a>
                          <a
                            v-else
                            :class="{ 'timing selected': item1.active, timing: !item1.active }"
                            href="#"
                            @click="toggleClass(index, item1.id)"
                          >
                            <span>{{ item1.value1 }}</span> <span>{{ item1.value2 }} </span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul class="clearfix">
                        <li v-for="(item1, index) in grp4" :key="index">
                          <a
                            v-if="item1.timeSelected"
                            :class="{ 'timing selected': item1.active, timing: !item1.active }"
                            href="#"
                            @click="toggleClass(index, item1.id)"
                            style="text-decoration-line: line-through"
                          >
                            <span>{{ item1.value1 }}</span> <span>{{ item1.value2 }} </span>
                          </a>
                          <a
                            v-else
                            :class="{ 'timing selected': item1.active, timing: !item1.active }"
                            href="#"
                            @click="toggleClass(index, item1.id)"
                          >
                            <span>{{ item1.value1 }}</span> <span>{{ item1.value2 }} </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- /Time Slot -->
                </div>
              </div>
            </div>
            <!-- /Schedule Content -->
          </div>
          <!-- /Schedule Widget -->
          <!-- Submit Section -->
          <div class="submit-section proceed-btn text-right">
            <a href="#" class="btn btn-primary submit-btn" @click.prevent="CheckOut()"
              >Proceed to Pay</a
            >
          </div>
          <!-- /Submit Section -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { RouterView } from 'vue-router'; //  ../../components/Patient/BookingDoctorPart.vue
import { GetWeekByDate } from '../../data/Calendar.js'

import { useStoreAddDoctor } from '../../stores/AddDoctorStore.js'
import { useStoreCheckOut } from '../../stores/StoreCheckout.js'
import { useStoredrBookSlot } from '../../stores/StoreDrBookingSlot.js'

import DoctorCard from '../../components/Patient/BookingDoctorPart.vue'

export default {
  name: 'BookingDetail',
  components: {
    DoctorCard
  },
  props: {
    docid: {
      type: String,
      required: true
    }
  },
  setup() {
    const doctorStore = useStoreAddDoctor()
    const checkoutStore = useStoreCheckOut()
    const docttimeSlotStore = useStoredrBookSlot()
    return { doctorStore, checkoutStore, docttimeSlotStore }
  },
  data() {
    return {
      docinfo: null,
      doctimeslotInfo: null,
      price: null,
      bookingInfo: null,
      doctor: null,
      grp1: [],
      grp2: [],
      grp3: [],
      grp4: [],
      selectedItem: [],
      datePicker: new Date(),
      items: [
        { id: 1, day: '1', value1: '9:00', value2: 'AM', timeSelected: false },
        { id: 2, day: '2', value1: '9:00', value2: 'AM', timeSelected: false },
        { id: 3, day: '3', value1: '9:00', value2: 'AM', timeSelected: false },
        { id: 4, day: '4', value1: '9:00', value2: 'AM', timeSelected: false },
        { id: 5, day: '5', value1: '9:00', value2: 'AM', timeSelected: false },

        { id: 6, day: '1', value1: '10:00', value2: 'AM', timeSelected: false },
        { id: 7, day: '2', value1: '10:00', value2: 'AM', timeSelected: false },
        { id: 8, day: '3', value1: '10:00', value2: 'AM', timeSelected: false },
        { id: 9, day: '4', value1: '10:00', value2: 'AM', timeSelected: false },
        { id: 10, day: '5', value1: '10:00', value2: 'AM', timeSelected: false },

        { id: 11, day: '1', value1: '11:00', value2: 'AM', timeSelected: false },
        { id: 12, day: '2', value1: '11:00', value2: 'AM', timeSelected: false },
        { id: 13, day: '3', value1: '11:00', value2: 'AM', timeSelected: false },
        { id: 14, day: '4', value1: '11:00', value2: 'AM', timeSelected: false },
        { id: 15, day: '5', value1: '11:00', value2: 'AM', timeSelected: false },

        { id: 16, day: '1', value1: '12:00', value2: 'PM', timeSelected: false },
        { id: 17, day: '2', value1: '12:00', value2: 'PM', timeSelected: false },
        { id: 18, day: '3', value1: '12:00', value2: 'PM', timeSelected: false },
        { id: 19, day: '4', value1: '12:00', value2: 'PM', timeSelected: false },
        { id: 20, day: '5', value1: '12:00', value2: 'PM', timeSelected: false }
      ],

      getWeek: null
    }
  },
  async mounted() {
    console.log('fullname', this.fullname)
    console.log('BookingDOC:', this.docid)

    this.docinfo = await this.doctorStore.getDoctorDetail(this.docid)
    await this.docttimeSlotStore.storeGetDrWiseBookSlot(this.docid, new Date())
    this.doctimeslotInfo = this.docttimeSlotStore.getdoctWiseBookSlot
    console.log('doctimeslotInfo:', this.doctimeslotInfo)
    this.getWeek = GetWeekByDate(this.datePicker)
    console.log('getWeek', this.getWeek)
    this.getdoctTimeSlotInf()
    this.grp1 = this.items.filter((c) => c.id >= 1 && c.id <= 5)
    this.grp2 = this.items.filter((c) => c.id >= 6 && c.id <= 10)
    this.grp3 = this.items.filter((c) => c.id >= 11 && c.id <= 15)
    this.grp4 = this.items.filter((c) => c.id >= 16 && c.id <= 20)
    //console.log('grp1',this.grp1)
    //console.log('grp2',this.grp2)
  },
  methods: {
    dateChange() {
      //const dateCurrent=new Date();
      if (new Date(this.datePicker) >= new Date()) {
        this.getWeek = GetWeekByDate(this.datePicker)
        this.getdoctTimeSlotInf()
      }
    },
    getdoctTimeSlotInf() {
      const itemTemp = this.doctimeslotInfo
      const weekData = this.getWeek
      console.log('itemTemp', itemTemp)

      for (let object of this.items) {
        object.timeSelected = false
      }
      itemTemp.forEach((tempdata) => {
        weekData.forEach((tempweek) => {
          console.log('tempdata.data().appointmentDate', tempdata.appointmentDate)
          if (tempdata.appointmentDate == tempweek.Date) {
            for (let object of this.items) {
              if (object.id === tempdata.selectedItemID) {
                object.timeSelected = true
              }
            }
          }
        })
      })
    },
    CheckOut() {
      const test = this.selectedItem
      this.bookingInfo = { test, ...this.getWeek }
      console.log('Selected Itemtest', this.bookingInfo)
      const searchName = parseInt(test.day)
      const timeSlotValue = `${test.value1}${test.value2}`
      const selectedItemID = test.id
      console.log('searchName', searchName)

      /* const node = Object.values(this.getWeek).forEach((node) => {
                           if(node.Day === searchName) {
                            searchResult = node;
                            }
                }); */

      const node = this.getWeek.filter((c) => c.Day === searchName)
      console.log(node)
      const timeSlot = {
        Date: node[0].Date,
        timeSlot: timeSlotValue,
        selectedItemID: selectedItemID,
        docid: this.docid,
        docnname: `${this.docinfo.docFirstName} ${this.docinfo.docLastName}`,
        doclocation: `${this.docinfo.provience},${this.docinfo.country} `,
        docpricing: this.docinfo.pricing,
        docimageUrl: this.docinfo.imageUrl,
        specialization: this.docinfo.specialization
      }
      // const r= {timeSlot,...node}
      console.log('node', timeSlot)
      this.checkoutStore.storeCheckOutInfo(timeSlot)
      this.$router.push({ name: 'CheckOut' })
    },
    toggleClass(index, itemId) {
      this.items.forEach((item) => (item.active = false))
      if (itemId >= 1 && itemId <= 4) {
        let item = this.grp1[index]
        console.log('saasasasas', item)

        if (!item.timeSelected) {
          this.selectedItem = item
          item.active = !item.active
          this.$set(this.items, index, item)
          console.log('weeeek', this.getWeek.Date)
        }
      }
      if (itemId >= 5 && itemId <= 10) {
        let item = this.grp2[index]
        if (!item.timeSelected) {
          this.selectedItem = item
          item.active = !item.active
          this.$set(this.items, index, item)
        }
      }
      if (itemId >= 11 && itemId <= 16) {
        let item = this.grp3[index]
        if (!item.timeSelected) {
          this.selectedItem = item
          item.active = !item.active
          this.$set(this.items, index, item)
        }
      }
      if (itemId >= 17 && itemId <= 20) {
        let item = this.grp4[index]
        if (!item.timeSelected) {
          this.selectedItem = item
          item.active = !item.active
          this.$set(this.items, index, item)
        }
      }
      /*  let item = this.items[index];
        item.active = !item.active;
        this.$set(this.items, index, item); */
    }
  }
}
</script>
