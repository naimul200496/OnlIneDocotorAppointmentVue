<template>
        <div class="main-wrapper">
        <UserHeaderPart></UserHeaderPart>
            
            <!-- Sidebar -->
            <div class="sidebar" id="sidebar">
                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: 100%; height: 863px;"><div class="sidebar-inner slimscroll" style="overflow: hidden; width: 100%; height: 863px;">
                    <div id="sidebar-menu" class="sidebar-menu">
                        <ul>
                            <li class="menu-title"> 
                                <span>Main</span>
                            </li>
                            <li class="active"> 
                                <a href="index.html"><i class="fe fe-home"></i> <span>Dashboard</span></a>
                            </li>
                            <li> 
                                <a href="appointment-list.html"><i class="fe fe-layout"></i> <span>Appointments</span></a>
                            </li>
                            <li> 
                                <a href="specialities.html"><i class="fe fe-users"></i> <span>Specialities</span></a>
                            </li>
                            <li> 
                                <a href="doctor-list.html"><i class="fe fe-user-plus"></i> <span>Doctors</span></a>
                            </li>
                            <li> 
                                <a href="patient-list.html"><i class="fe fe-user"></i> <span>Patients</span></a>
                            </li>
                            <li> 
                                <a href="reviews.html"><i class="fe fe-star-o"></i> <span>Reviews</span></a>
                            </li>
                            <li> 
                                <a href="transactions-list.html"><i class="fe fe-activity"></i> <span>Transactions</span></a>
                            </li>
                            <li> 
                                <a href="settings.html"><i class="fe fe-vector"></i> <span>Settings</span></a>
                            </li>
                            <li class="submenu">
                                <a href="#"><i class="fe fe-document"></i> <span> Reports</span> <span class="menu-arrow"></span></a>
                                <ul style="display: none;">
                                    <li><a href="invoice-report.html">Invoice Reports</a></li>
                                </ul>
                            </li>
                            <li class="menu-title"> 
                                <span>Pages</span>
                            </li>
                            <li> 
                                <a href="profile.html"><i class="fe fe-user-plus"></i> <span>Profile</span></a>
                            </li>
                            <li class="submenu">
                                <a href="#"><i class="fe fe-document"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
                                <ul style="display: none;">
                                    <li><a href="login.html"> Login </a></li>
                                    <li><a href="register.html"> Register </a></li>
                                    <li><a href="forgot-password.html"> Forgot Password </a></li>
                                    <li><a href="lock-screen.html"> Lock Screen </a></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="#"><i class="fe fe-warning"></i> <span> Error Pages </span> <span class="menu-arrow"></span></a>
                                <ul style="display: none;">
                                    <li><a href="error-404.html">404 Error </a></li>
                                    <li><a href="error-500.html">500 Error </a></li>
                                </ul>
                            </li>
                            <li> 
                                <a href="blank-page.html"><i class="fe fe-file"></i> <span>Blank Page</span></a>
                            </li>
                            <li class="menu-title"> 
                                <span>UI Interface</span>
                            </li>
                            <li> 
                                <a href="components.html"><i class="fe fe-vector"></i> <span>Components</span></a>
                            </li>
                            <li class="submenu">
                                <a href="#"><i class="fe fe-layout"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
                                <ul style="display: none;">
                                    <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
                                    <li><a href="form-input-groups.html">Input Groups </a></li>
                                    <li><a href="form-horizontal.html">Horizontal Form </a></li>
                                    <li><a href="form-vertical.html"> Vertical Form </a></li>
                                    <li><a href="form-mask.html"> Form Mask </a></li>
                                    <li><a href="form-validation.html"> Form Validation </a></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="#"><i class="fe fe-table"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
                                <ul style="display: none;">
                                    <li><a href="tables-basic.html">Basic Tables </a></li>
                                    <li><a href="data-tables.html">Data Table </a></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fe fe-code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
                                <ul style="display: none;">
                                    <li class="submenu">
                                        <a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
                                        <ul style="display: none;">
                                            <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                            <li class="submenu">
                                                <a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
                                                <ul style="display: none;">
                                                    <li><a href="javascript:void(0);">Level 3</a></li>
                                                    <li><a href="javascript:void(0);">Level 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);"> <span>Level 1</span></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div><div class="slimScrollBar" style="background: rgb(204, 204, 204); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 863px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
            </div>
            <!-- /Sidebar -->
            
            <!-- Page Wrapper -->
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
                                            <h3>168</h3>
                                        </div>
                                    </div>
                                    <div class="dash-widget-info">
                                        <h6 class="text-muted">Doctors</h6>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-primary w-50"></div>
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
                                            <h3>487</h3>
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
                                            <h3>485</h3>
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
                                            <h3>$62523</h3>
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
                    <div class="row">
                        <div class="col-md-6 d-flex">
                        
                            <!-- Recent Orders -->
                            <div class="card card-table flex-fill">
                                <div class="card-header">
                                    <h4 class="card-title">Doctors List</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Doctor Name</th>
                                                    <th>Speciality</th>
                                                    <th>Earned</th>
                                                    <th>Reviews</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Ruby Perrin</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>$3200.00</td>
                                                    <td>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star-o text-secondary"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Darren Elder</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>$3100.00</td>
                                                    <td>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star-o text-secondary"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Deborah Angel</a>
                                                        </h2>
                                                    </td>
                                                    <td>Cardiology</td>
                                                    <td>$4000.00</td>
                                                    <td>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star-o text-secondary"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Sofia Brient</a>
                                                        </h2>
                                                    </td>
                                                    <td>Urology</td>
                                                    <td>$3200.00</td>
                                                    <td>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star-o text-secondary"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Marvin Campbell</a>
                                                        </h2>
                                                    </td>
                                                    <td>Orthopaedics</td>
                                                    <td>$3500.00</td>
                                                    <td>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star text-warning"></i>
                                                        <i class="fe fe-star-o text-secondary"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- /Recent Orders -->
                            
                        </div>
                        <div class="col-md-6 d-flex">
                        
                            <!-- Feed Activity -->
                            <div class="card  card-table flex-fill">
                                <div class="card-header">
                                    <h4 class="card-title">Patients List</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>													
                                                    <th>Patient Name</th>
                                                    <th>Phone</th>
                                                    <th>Last Visit</th>
                                                    <th>Paid</th>													
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Charlene Reed </a>
                                                        </h2>
                                                    </td>
                                                    <td>8286329170</td>
                                                    <td>20 Oct 2019</td>
                                                    <td class="text-right">$100.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Travis Trimble </a>
                                                        </h2>
                                                    </td>
                                                    <td>2077299974</td>
                                                    <td>22 Oct 2019</td>
                                                    <td class="text-right">$200.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient3.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Carl Kelly</a>
                                                        </h2>
                                                    </td>
                                                    <td>2607247769</td>
                                                    <td>21 Oct 2019</td>
                                                    <td class="text-right">$250.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient4.jpg" alt="User Image"></a>
                                                            <a href="profile.html"> Michelle Fairfax</a>
                                                        </h2>
                                                    </td>
                                                    <td>5043686874</td>
                                                    <td>21 Sep 2019</td>
                                                    <td class="text-right">$150.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient5.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Gina Moore</a>
                                                        </h2>
                                                    </td>
                                                    <td>9548207887</td>
                                                    <td>18 Sep 2019</td>
                                                    <td class="text-right">$350.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- /Feed Activity -->
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        
                            <!-- Recent Orders -->
                            <div class="card card-table">
                                <div class="card-header">
                                    <h4 class="card-title">Appointment List</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Doctor Name</th>
                                                    <th>Speciality</th>
                                                    <th>Patient Name</th>
                                                    <th>Apointment Time</th>
                                                    <th>Status</th>
                                                    <th class="text-right">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Ruby Perrin</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Charlene Reed </a>
                                                        </h2>
                                                    </td>
                                                    <td>9 Nov 2019 <span class="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_1" class="check" checked="">
                                                            <label for="status_1" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $200.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Darren Elder</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Travis Trimble </a>
                                                        </h2>
                                                    </td>
                                                    
                                                    <td>5 Nov 2019 <span class="text-primary d-block">11.00 AM - 11.35 AM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_2" class="check" checked="">
                                                            <label for="status_2" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $300.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Deborah Angel</a>
                                                        </h2>
                                                    </td>
                                                    <td>Cardiology</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient3.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Carl Kelly</a>
                                                        </h2>
                                                    </td>
                                                    <td>11 Nov 2019 <span class="text-primary d-block">12.00 PM - 12.15 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_3" class="check" checked="">
                                                            <label for="status_3" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $150.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Sofia Brient</a>
                                                        </h2>
                                                    </td>
                                                    <td>Urology</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient4.jpg" alt="User Image"></a>
                                                            <a href="profile.html"> Michelle Fairfax</a>
                                                        </h2>
                                                    </td>
                                                    <td>7 Nov 2019<span class="text-primary d-block">1.00 PM - 1.20 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_4" class="check" checked="">
                                                            <label for="status_4" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $150.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Dr. Marvin Campbell</a>
                                                        </h2>
                                                    </td>
                                                    <td>Orthopaedics</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient5.jpg" alt="User Image"></a>
                                                            <a href="profile.html">Gina Moore</a>
                                                        </h2>
                                                    </td>
                                                    
                                                    <td>15 Nov 2019 <span class="text-primary d-block">1.00 PM - 1.15 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_5" class="check" checked="">
                                                            <label for="status_5" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $200.00
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- /Recent Orders -->
                            
                        </div>
                    </div>
                    
                </div>			
            </div>
            <!-- /Page Wrapper -->
        
        </div>
    </template>
    <script>
    import UserHeaderPart from '../UserHeaderPart.vue';
    export default {
        name:'HomePage',
        components:{
            UserHeaderPart,
        }
    }
    </script>
    <style src="/src/assets/admin.css"></style>
