<template>

<div class="page-wrapper" style="min-height: 923px;">
        
    <div class="content container-fluid">
        
        <!-- Page Header -->
        <div class="page-header">
            <div class="row">
                <div class="col-sm-12">
                    <h3 class="page-title">Welcome Admin!</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /Page Header -->

        <div class="row">
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-primary border-primary">
                                <i class="fe fe-users"></i>
                            </span>
                            <div class="dash-count">
                                <h3>{{totalDoctor}}</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">
                            <h6 class="text-muted">Doctors</h6>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-primary w-25"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-success">
                                <i class="fe fe-credit-card"></i>
                            </span>
                            <div class="dash-count">
                                <h3>{{totalPatient}}</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">
                            
                            <h6 class="text-muted">Patients</h6>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-success w-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-danger border-danger">
                                <i class="fe fe-money"></i>
                            </span>
                            <div class="dash-count">
                                <h3>{{totalAppointment}}</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">
                            
                            <h6 class="text-muted">Appointment</h6>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-danger w-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-warning border-warning">
                                <i class="fe fe-folder"></i>
                            </span>
                            <div class="dash-count">
                                <h3>${{totalRevenue}}</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">
                            
                            <h6 class="text-muted">Revenue</h6>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-warning w-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-lg-6">
            
                <!-- Sales Chart -->
                <div class="card card-chart">
                    <div class="card-header">
                        <h4 class="card-title">Revenue</h4>
                    </div>
                    <div class="card-body">
                        <div id="morrisArea" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg height="342" version="1.1" width="320" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative; top: -0.585938px;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.2.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><text x="29.1875" y="306" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,306H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="29.1875" y="235.75" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">75</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,235.75H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="29.1875" y="165.5" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">150</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,165.5H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="29.1875" y="95.25" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">225</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,95.25H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="29.1875" y="25" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">300</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,25H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="295" y="318.5" text-anchor="middle" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,5.5)"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2019</tspan></text><text x="210.60103833865816" y="318.5" text-anchor="middle" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,5.5)"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2017</tspan></text><text x="126.08646166134186" y="318.5" text-anchor="middle" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,5.5)"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2015</tspan></text><text x="41.6875" y="318.5" text-anchor="middle" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,5.5)"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2013</tspan></text><path fill="#346fa2" stroke="none" d="M41.6875,249.8C52.23737020766773,240.43333333333334,73.33711062300318,233.4083333333333,83.88698083067092,212.33333333333331C94.43685103833866,191.25833333333333,115.53659145367412,83.54166666666669,126.08646166134186,81.20000000000002C136.63633186900958,78.85833333333335,157.73607228434506,174.89229366165074,168.2859424920128,193.60000000000002C178.86471645367413,212.35896032831738,200.02226437699682,228.721796625627,210.60103833865816,231.06666666666666C221.1509085463259,233.40512995896032,242.25064896166134,238.09166666666664,252.80051916932908,212.33333333333331C263.3503893769968,186.575,284.4501297923323,71.83333333333333,295,25L295,306L41.6875,306Z" fill-opacity="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0.5;"></path><path fill="none" stroke="#1b5a90" d="M41.6875,249.8C52.23737020766773,240.43333333333334,73.33711062300318,233.4083333333333,83.88698083067092,212.33333333333331C94.43685103833866,191.25833333333333,115.53659145367412,83.54166666666669,126.08646166134186,81.20000000000002C136.63633186900958,78.85833333333335,157.73607228434506,174.89229366165074,168.2859424920128,193.60000000000002C178.86471645367413,212.35896032831738,200.02226437699682,228.721796625627,210.60103833865816,231.06666666666666C221.1509085463259,233.40512995896032,242.25064896166134,238.09166666666664,252.80051916932908,212.33333333333331C263.3503893769968,186.575,284.4501297923323,71.83333333333333,295,25" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><circle cx="41.6875" cy="249.8" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="83.88698083067092" cy="212.33333333333331" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="126.08646166134186" cy="81.20000000000002" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="168.2859424920128" cy="193.60000000000002" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="210.60103833865816" cy="231.06666666666666" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="252.80051916932908" cy="212.33333333333331" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="295" cy="25" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle></svg><div class="morris-hover morris-default-style" style="display: none;"></div></div>
                    </div>
                </div>
                <!-- /Sales Chart -->
                
            </div>
            <div class="col-md-12 col-lg-6">
            
                <!-- Invoice Chart -->
                <div class="card card-chart">
                    <div class="card-header">
                        <h4 class="card-title">Status</h4>
                    </div>
                    <div class="card-body">
                        <div id="morrisLine" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg height="342" version="1.1" width="320" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative; left: -0.5px; top: -0.585938px;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.2.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><text x="29.1875" y="306" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,306H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="29.1875" y="235.75" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">50</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,235.75H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="29.1875" y="165.5" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">100</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,165.5H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="29.1875" y="95.25" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">150</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,95.25H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="29.1875" y="25" text-anchor="end" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">200</tspan></text><path fill="none" stroke="#aaaaaa" d="M41.6875,25H295" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="295" y="318.5" text-anchor="middle" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,5.5)"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2019</tspan></text><text x="231.7152207392197" y="318.5" text-anchor="middle" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,5.5)"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2018</tspan></text><text x="168.43044147843943" y="318.5" text-anchor="middle" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,5.5)"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2017</tspan></text><text x="104.97227926078028" y="318.5" text-anchor="middle" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,5.5)"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2016</tspan></text><text x="41.6875" y="318.5" text-anchor="middle" font-family="sans-serif" font-size="10px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 10px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,5.5)"><tspan dy="3.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2015</tspan></text><path fill="none" stroke="#ff9d00" d="M41.6875,263.85C57.50869481519507,253.3125,89.15108444558521,237.4846272229822,104.97227926078028,221.7C120.83681981519507,205.87212722298221,152.56590092402465,140.91730506155952,168.43044147843943,137.4C184.2516362936345,133.8923050615595,215.89402592402462,198.86875,231.7152207392197,193.6C247.53641555441476,188.33124999999998,279.1788051848049,119.8375,295,95.25" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#1b5a90" d="M41.6875,165.5C57.50869481519507,193.6,89.15108444558521,276.1461525307797,104.97227926078028,277.9C120.83681981519507,279.6586525307797,152.56590092402465,184.82595759233928,168.43044147843943,179.55C184.2516362936345,174.28845759233928,215.89402592402462,241.01875,231.7152207392197,235.75C247.53641555441476,230.48125,279.1788051848049,161.9875,295,137.4" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><circle cx="41.6875" cy="263.85" r="4" fill="#ff9d00" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="104.97227926078028" cy="221.7" r="4" fill="#ff9d00" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="168.43044147843943" cy="137.4" r="4" fill="#ff9d00" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="231.7152207392197" cy="193.6" r="4" fill="#ff9d00" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="295" cy="95.25" r="4" fill="#ff9d00" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="41.6875" cy="165.5" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="104.97227926078028" cy="277.9" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="168.43044147843943" cy="179.55" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="231.7152207392197" cy="235.75" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="295" cy="137.4" r="4" fill="#1b5a90" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle></svg><div class="morris-hover morris-default-style" style="left: 153.349px; top: 133px; display: none;"><div class="morris-hover-row-label">2016</div><div class="morris-hover-point" style="color: #1b5a90">
Doctors:
20
</div><div class="morris-hover-point" style="color: #ff9d00">
Patients:
60
</div></div></div>
                    </div>
                </div>
                <!-- /Invoice Chart -->
                
            </div>	
        </div>

        
    </div>			
</div>
</template>
<script>
////import UserHeaderPart from '../UserHeaderPart.vue';
import {useStoreForAdmin} from '../../stores/storeAdmin.js'
export default {
    name:'DashBoard',
   data(){
    return{
        allAdmincount:null,
        totalDoctor:'',
        totalAppointment:'',
        totalPatient:'',
        totalRevenue:'',
    }
   },
    setup(){
        const useStoreAdmin=useStoreForAdmin()
        return {useStoreAdmin}
    },
   async mounted(){
    await this.useStoreAdmin.countInfo()
    this.allAdmincount= this.useStoreAdmin.getAllCountInfo
    this.totalDoctor = this.allAdmincount.totalDoctor
    this.totalAppointment=this.allAdmincount.allApointment
    this.totalPatient=this.allAdmincount.totalPatient
    this.totalRevenue=this.allAdmincount.totalAmt
    console.log(this.allAdmincount)

   }
}
</script>