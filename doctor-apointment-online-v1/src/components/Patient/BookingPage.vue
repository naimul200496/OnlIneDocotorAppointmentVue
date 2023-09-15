<template>
    <div class="content">
        <div class="container">
        
            <div class="row">
                <div class="col-12">
                
                    <div class="card">
                        <div class="card-body">
                            <div class="booking-doc-info">
                                <a href="doctor-profile.html" class="booking-doc-img">
                                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                </a>
                                <div class="booking-info">
                                    <h4><a href="doctor-profile.html">Dr. Darren Elder</a></h4>
                                    <div class="rating">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="d-inline-block average-rating">35</span>
                                    </div>
                                    <p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Schedule Widget -->
                    <div class="card booking-schedule schedule-widget">
                    
                        <!-- Schedule Header -->
                        <div class="schedule-header">
                            <div class="row">
                                <div class="col-md-12">
                                
                                    <!-- Day Slot -->
                                    <div class="day-slot" >
                                        <ul>
                                            <li class="left-arrow">
                                                <a href="#">
                                                    <i class="fa fa-chevron-left"></i>
                                                </a>
                                            </li>
                                            <li v-for="weeklist in getWeek" :key="weeklist.Day">
                                                <span>{{weeklist.DayName}}</span>
                                                <span class="slot-date"> <small class="slot-year">{{weeklist.Date}}</small></span>
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
                                                <a :class="{'timing selected':item1.active, 'timing':!item1.active}" href="#" @click="toggleClass(index,item1.id)"  >
                                                    <span>{{item1.value1}}</span> <span>{{item1.value2}} </span><span v-if="item1.timeSelected" style="color: red;">NA</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="clearfix">
                                            <li v-for="(item1, index) in grp2" :key="index">
                                                <a :class="{'timing selected':item1.active, 'timing':!item1.active}" href="#"  @click="toggleClass(index,item1.id)"  >
                                                    <span>{{item1.value1}}</span> <span>{{item1.value2}}</span><span v-if="item1.timeSelected" style="color: red;">NA</span>
                                                </a>
                                            </li>
                                         </ul>
                                      </div>
                                      <div>
                                        <ul class="clearfix">
                                            <li v-for="(item1, index) in grp3" :key="index">
                                                <a :class="{'timing selected':item1.active, 'timing':!item1.active}" href="#"  @click="toggleClass(index,item1.id)"  >
                                                    <span>{{item1.value1}}</span> <span>{{item1.value2}}</span><span v-if="item1.timeSelected" style="color: red;">NA</span>
                                                </a>
                                            </li>
                                         </ul>
                                      </div>

                                      <div>
                                        <ul class="clearfix">
                                            <li v-for="(item1, index) in grp4" :key="index">
                                                <a :class="{'timing selected':item1.active, 'timing':!item1.active}" href="#"  @click="toggleClass(index,item1.id)"  >
                                                    <span>{{item1.value1}}</span> <span>{{item1.value2}}</span><span v-if="item1.timeSelected" style="color: red;">NA</span>
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
                        <a href="checkout.html" class="btn btn-primary submit-btn">Proceed to Pay</a>
                    </div>
                    <!-- /Submit Section -->
                    
                </div>
            </div>
        </div>

    </div>		
</template>
<script>

import {GetWeekByDate} from '../../data/Calendar.js'
export default {
    name:'BookingPage',
    data(){
        return {
            isActive:false,
            grp1:[],
            grp2:[],
            items:[{id:1,day:'1',value1:'9:00',value2:'AM',timeSelected:true},
                   {id:2,day:'2',value1:'9:00',value2:'AM',timeSelected:false},
                   {id:3,day:'3',value1:'9:00',value2:'AM',timeSelected:false},
                   {id:4,day:'4',value1:'9:00',value2:'AM',timeSelected:false},
                   {id:5,day:'5',value1:'9:00',value2:'AM',timeSelected:false},

                   {id:6,day:'1',value1:'10:00',value2:'AM',timeSelected:false},
                   {id:7,day:'2',value1:'10:00',value2:'AM',timeSelected:false},
                   {id:8,day:'3',value1:'10:00',value2:'AM',timeSelected:false},
                   {id:9,day:'4',value1:'10:00',value2:'AM',timeSelected:false},
                   {id:10,day:'5',value1:'10:00',value2:'AM',timeSelected:false},

                   {id:11,day:'1',value1:'11:00',value2:'AM',timeSelected:false},
                   {id:12,day:'2',value1:'11:00',value2:'AM',timeSelected:false},
                   {id:13,day:'3',value1:'11:00',value2:'AM',timeSelected:false},
                   {id:14,day:'4',value1:'11:00',value2:'AM',timeSelected:false},
                   {id:15,day:'5',value1:'11:00',value2:'AM',timeSelected:false},

                   {id:16,day:'1',value1:'12:00',value2:'PM',timeSelected:false},
                   {id:17,day:'2',value1:'12:00',value2:'PM',timeSelected:false},
                   {id:18,day:'3',value1:'12:00',value2:'PM',timeSelected:false},
                   {id:19,day:'4',value1:'12:00',value2:'PM',timeSelected:false},
                   {id:20,day:'5',value1:'12:00',value2:'PM',timeSelected:false}
                  ],
               
            getWeek:null
        }
    },
    mounted() {
        this.getWeek=GetWeekByDate('2023-09-14');
        this.grp1= this.items.filter((c)=>c.id>=1 && c.id<=5)
        this.grp2= this.items.filter((c)=>c.id>=6 && c.id<=10)
        this.grp3= this.items.filter((c)=>c.id>=11 && c.id<=15)
        this.grp4= this.items.filter((c)=>c.id>=16 && c.id<=20)
        console.log('grp1',this.grp1)
        console.log('grp2',this.grp2)
    }, 
    methods:{
        toggleClass(index,itemId){
           
           this.items.forEach(item => item.active=false);
        if(itemId>=1 && itemId<=4)
        {
            let item = this.grp1[index];
            item.active = !item.active;
            this.$set(this.items, index, item);
        }
        if(itemId>=5 && itemId<=10)
        {
            let item = this.grp2[index];
            item.active = !item.active;
            this.$set(this.items, index, item);
        }
        if(itemId>=11 && itemId<=16)
        {
            let item = this.grp3[index];
            item.active = !item.active;
            this.$set(this.items, index, item);
        }
        if(itemId>=17 && itemId<=20)
        {
            let item = this.grp4[index];
            item.active = !item.active;
            this.$set(this.items, index, item);
        }
       /*  let item = this.items[index];
        item.active = !item.active;
        this.$set(this.items, index, item); */
       
        }
    }
}
</script>
