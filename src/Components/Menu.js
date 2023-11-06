import React, { useEffect } from 'react'
function Menu() {
 
  
  return (
  <>
     
     
          <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
          <div class="row">
                <div class="col-lg-8 mb-4 order-0">
                  <div class="card">
                    <div class="d-flex align-items-end row">
                      <div class="col-sm-7">
                        <div class="card-body">
                          <h5 class="card-title text-primary">Congratulations John! 🎉</h5>
                          <p class="mb-4">
                            You have done <span class="fw-medium">72%</span> more sales today. Check your new badge in
                            your profile.
                          </p>

                          <a href="javascript:;" class="btn btn-sm btn-outline-primary">View Badges</a>
                        </div>
                      </div>
                      <div class="col-sm-5 text-center text-sm-left">
                        <div class="card-body pb-0 px-0 px-md-4">
                          <img src='./assets/img/illustrations/man-with-laptop-light.png' height="140" alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 order-1">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-6 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <div class="avatar flex-shrink-0">
                              <img src='./assets/img/icons/unicons/chart-success.png' alt="chart success" class="rounded"/>
                            </div>
                            <div class="dropdown">
                              <button class="btn p-0" type="button" id="cardOpt3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3" id="card">
                                <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span class="fw-medium d-block mb-1">Profit</span>
                          <h3 class="card-title mb-2">$12,628</h3>
                          <small class="text-success fw-medium"><i class="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-6 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <div class="avatar flex-shrink-0">
                              <img src='./assets/img/icons/unicons/wallet-info.png' alt="Credit Card" class="rounded"/>
                            </div>
                            <div class="dropdown">
                              <button class="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6" id="card1">
                                <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span>Sales</span>
                          <h3 class="card-title text-nowrap mb-1">$4,679</h3>
                          <small class="text-success fw-medium"><i class="bx bx-up-arrow-alt"></i> +28.42%</small>
                        </div>
                      </div>
                      </div>



                
                
                  
                
                
                
              
          </div>
      </div>




      <div class="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                  <div class="card">
                    <div class="row row-bordered g-0">
                      <div class="col-md-8">
                        <h5 class="card-header m-0 me-2 pb-3">Total Revenue</h5>
                        <div id="totalRevenueChart" class="px-2" style={{minHeight: "315px"}}>
                          <div id="apexchartsa7v7qpyzk" class="apexcharts-canvas apexchartsa7v7qpyzk apexcharts-theme-light" style={{width: '373px', height:'300px'}}><svg id="SvgjsSvg4541" width="373" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev" class="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background:'transparent'}}>
                            <foreignObject x="0" y="0" width="373" height="300">
                              <div class="apexcharts-legend apexcharts-align-left apx-legend-position-top" xmlns="http://www.w3.org/1999/xhtml" style={{right:'0px', position: 'absolute', left:'0px', top:'4px', maxHeight:'150px'}}>
                                <div class="apexcharts-legend-series" rel="1" seriesname="2021" data-collapsed="true" style={{margin:'2px 10px'}}>
                                <span class="apexcharts-legend-marker" rel="1" data-collapsed="false"></span>
                                <span class="apexcharts-legend-text" rel="1" i="0" data-default-text="2021" data-collapsed="true" style={{color:'rgb(55, 61, 63)', fontSize:'12px', fontWeight:'400', fontFamily:'Helvetica, Arial, sans-serif'}}>2021</span>
                                  </div>
                                  <div class="apexcharts-legend-series" rel="2" seriesname="2020" data-collapsed="true" style={{margin:'2px 10px'}}>
                                    <span class="apexcharts-legend-markerr" rel="2" data-collapsed="true"></span>
                                    
                                    <span class="apexcharts-legend-text" rel="2" i="1" data-default-text="2020" data-collapsed="true">2020</span>
                                    </div>
                                    </div>
                                </foreignObject>    
                                    
    
    	
                            <g id="SvgjsG1290" class="apexcharts-inner apexcharts-graphical" transform="translate(53.796875, 51)">
                            <defs id="SvgjsDefs1289">
                            <linearGradient id="SvgjsLinearGradient1294" x1="0" y1="0" x2="0" y2="1">
                            <stop id="SvgjsStop1295" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0">
                            </stop>
                            <stop id="SvgjsStop1296" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1">
                            </stop>
                            <stop id="SvgjsStop1297" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1">
                            </stop>
                            </linearGradient>
                            <clipPath id="gridRectMaski9nzqtuy">
                            <rect id="SvgjsRect1299" width="309.203125" height="223.73" x="-5" y="-3" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                            </rect>
                            </clipPath>
                            <clipPath id="forecastMaski9nzqtuy">
                            </clipPath><clipPath id="nonForecastMaski9nzqtuy">
                            </clipPath>
                            <clipPath id="gridRectMarkerMaski9nzqtuy">
                            <rect id="SvgjsRect1300" width="303.203125" height="221.73" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                            </rect>
                            </clipPath>
                            </defs>
                            <rect id="SvgjsRect1298" width="20.516785714285717" height="217.73" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient1294)" class="apexcharts-xcrosshairs" y2="217.73" filter="none" fill-opacity="0.9">
                            </rect>
                            <g id="SvgjsG1320" class="apexcharts-xaxis" transform="translate(0, 0)">
                            <g id="SvgjsG1321" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                            <text id="SvgjsText1323" font-family="Helvetica, Arial, sans-serif" x="21.371651785714285" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                            <tspan id="SvgjsTspan1324">Jan</tspan>
                            <title>Jan</title>
                            </text>
                            <text id="SvgjsText1326" font-family="Helvetica, Arial, sans-serif" x="64.11495535714286" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                            <tspan id="SvgjsTspan1327">Feb</tspan>
                            <title>Feb</title>
                            </text>
                            <text id="SvgjsText1329" font-family="Helvetica, Arial, sans-serif" x="106.85825892857144" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                            <tspan id="SvgjsTspan1330">Mar</tspan>
                            <title>Mar</title>
                            </text>
                            <text id="SvgjsText1332" font-family="Helvetica, Arial, sans-serif" x="149.6015625" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                            <tspan id="SvgjsTspan1333">Apr</tspan>
                            <title>Apr</title></text>
                            <text id="SvgjsText1335" font-family="Helvetica, Arial, sans-serif" x="192.34486607142856" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                            <tspan id="SvgjsTspan1336">May</tspan>
                            <title>May</title></text>
                            <text id="SvgjsText1338" font-family="Helvetica, Arial, sans-serif" x="235.0881696428571" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                            <tspan id="SvgjsTspan1339">Jun</tspan>
                            <title>Jun</title></text>
                            <text id="SvgjsText1341" font-family="Helvetica, Arial, sans-serif" x="277.83147321428567" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                            <tspan id="SvgjsTspan1342">Jul</tspan>
                            <title>Jul</title></text></g></g>
                            <g id="SvgjsG1357" class="apexcharts-grid">
                            <g id="SvgjsG1358" class="apexcharts-gridlines-horizontal">
                            <line id="SvgjsLine1360" x1="0" y1="0" x2="299.203125" y2="0" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                            <line id="SvgjsLine1361" x1="0" y1="43.546" x2="299.203125" y2="43.546" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                            <line id="SvgjsLine1362" x1="0" y1="87.092" x2="299.203125" y2="87.092" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                            <line id="SvgjsLine1363" x1="0" y1="130.638" x2="299.203125" y2="130.638" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1364" x1="0" y1="174.184" x2="299.203125" y2="174.184" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                            <line id="SvgjsLine1365" x1="0" y1="217.73" x2="299.203125" y2="217.73" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g>
                            <g id="SvgjsG1359" class="apexcharts-gridlines-vertical"></g>
                            <line id="SvgjsLine1367" x1="0" y1="217.73" x2="299.203125" y2="217.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                            <line id="SvgjsLine1366" x1="0" y1="1" x2="0" y2="217.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g>
                            <g id="SvgjsG1301" class="apexcharts-bar-series apexcharts-plot-series">
                            <div class="collapse" id="1302">
                            <g id="SvgjsG1302" class="apexcharts-series" seriesName="2021" rel="1" data-realIndex="0">
                            <path id="SvgjsPath1304" d="M 11.113258928571426 120.638L 11.113258928571426 62.255200000000016Q 11.113258928571426 52.255200000000016 21.113258928571426 52.255200000000016L 15.630044642857143 52.255200000000016Q 25.630044642857143 52.255200000000016 25.630044642857143 62.255200000000016L 25.630044642857143 62.255200000000016L 25.630044642857143 120.638Q 25.630044642857143 130.638 15.630044642857143 130.638L 21.113258928571426 130.638Q 11.113258928571426 130.638 11.113258928571426 120.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 11.113258928571426 120.638L 11.113258928571426 62.255200000000016Q 11.113258928571426 52.255200000000016 21.113258928571426 52.255200000000016L 15.630044642857143 52.255200000000016Q 25.630044642857143 52.255200000000016 25.630044642857143 62.255200000000016L 25.630044642857143 62.255200000000016L 25.630044642857143 120.638Q 25.630044642857143 130.638 15.630044642857143 130.638L 21.113258928571426 130.638Q 11.113258928571426 130.638 11.113258928571426 120.638z" pathFrom="M 11.113258928571426 120.638L 11.113258928571426 120.638L 25.630044642857143 120.638L 25.630044642857143 120.638L 25.630044642857143 120.638L 25.630044642857143 120.638L 25.630044642857143 120.638L 11.113258928571426 120.638" cy="52.255200000000016" cx="50.856562499999995" j="0" val="18" barHeight="78.38279999999999" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1305" d="M 53.856562499999995 120.638L 53.856562499999995 110.15580000000001Q 53.856562499999995 100.15580000000001 63.856562499999995 100.15580000000001L 58.37334821428571 100.15580000000001Q 68.37334821428571 100.15580000000001 68.37334821428571 110.15580000000001L 68.37334821428571 110.15580000000001L 68.37334821428571 120.638Q 68.37334821428571 130.638 58.37334821428571 130.638L 63.856562499999995 130.638Q 53.856562499999995 130.638 53.856562499999995 120.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 53.856562499999995 120.638L 53.856562499999995 110.15580000000001Q 53.856562499999995 100.15580000000001 63.856562499999995 100.15580000000001L 58.37334821428571 100.15580000000001Q 68.37334821428571 100.15580000000001 68.37334821428571 110.15580000000001L 68.37334821428571 110.15580000000001L 68.37334821428571 120.638Q 68.37334821428571 130.638 58.37334821428571 130.638L 63.856562499999995 130.638Q 53.856562499999995 130.638 53.856562499999995 120.638z" pathFrom="M 53.856562499999995 120.638L 53.856562499999995 120.638L 68.37334821428571 120.638L 68.37334821428571 120.638L 68.37334821428571 120.638L 68.37334821428571 120.638L 68.37334821428571 120.638L 53.856562499999995 120.638" cy="100.15580000000001" cx="93.59986607142856" j="1" val="7" barHeight="30.482199999999995" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1306" d="M 96.59986607142856 120.638L 96.59986607142856 75.31900000000002Q 96.59986607142856 65.31900000000002 106.59986607142856 65.31900000000002L 101.11665178571428 65.31900000000002Q 111.11665178571428 65.31900000000002 111.11665178571428 75.31900000000002L 111.11665178571428 75.31900000000002L 111.11665178571428 120.638Q 111.11665178571428 130.638 101.11665178571428 130.638L 106.59986607142856 130.638Q 96.59986607142856 130.638 96.59986607142856 120.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 96.59986607142856 120.638L 96.59986607142856 75.31900000000002Q 96.59986607142856 65.31900000000002 106.59986607142856 65.31900000000002L 101.11665178571428 65.31900000000002Q 111.11665178571428 65.31900000000002 111.11665178571428 75.31900000000002L 111.11665178571428 75.31900000000002L 111.11665178571428 120.638Q 111.11665178571428 130.638 101.11665178571428 130.638L 106.59986607142856 130.638Q 96.59986607142856 130.638 96.59986607142856 120.638z" pathFrom="M 96.59986607142856 120.638L 96.59986607142856 120.638L 111.11665178571428 120.638L 111.11665178571428 120.638L 111.11665178571428 120.638L 111.11665178571428 120.638L 111.11665178571428 120.638L 96.59986607142856 120.638" cy="65.31900000000002" cx="136.34316964285713" j="2" val="15" barHeight="65.31899999999999" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1307" d="M 139.34316964285713 120.638L 139.34316964285713 14.35460000000002Q 139.34316964285713 4.354600000000019 149.34316964285713 4.354600000000019L 143.85995535714284 4.354600000000019Q 153.85995535714284 4.354600000000019 153.85995535714284 14.35460000000002L 153.85995535714284 14.35460000000002L 153.85995535714284 120.638Q 153.85995535714284 130.638 143.85995535714284 130.638L 149.34316964285713 130.638Q 139.34316964285713 130.638 139.34316964285713 120.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 139.34316964285713 120.638L 139.34316964285713 14.35460000000002Q 139.34316964285713 4.354600000000019 149.34316964285713 4.354600000000019L 143.85995535714284 4.354600000000019Q 153.85995535714284 4.354600000000019 153.85995535714284 14.35460000000002L 153.85995535714284 14.35460000000002L 153.85995535714284 120.638Q 153.85995535714284 130.638 143.85995535714284 130.638L 149.34316964285713 130.638Q 139.34316964285713 130.638 139.34316964285713 120.638z" pathFrom="M 139.34316964285713 120.638L 139.34316964285713 120.638L 153.85995535714284 120.638L 153.85995535714284 120.638L 153.85995535714284 120.638L 153.85995535714284 120.638L 153.85995535714284 120.638L 139.34316964285713 120.638" cy="4.354600000000019" cx="179.08647321428572" j="3" val="29" barHeight="126.28339999999999" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1308" d="M 182.08647321428572 120.638L 182.08647321428572 62.255200000000016Q 182.08647321428572 52.255200000000016 192.08647321428572 52.255200000000016L 186.60325892857145 52.255200000000016Q 196.60325892857145 52.255200000000016 196.60325892857145 62.255200000000016L 196.60325892857145 62.255200000000016L 196.60325892857145 120.638Q 196.60325892857145 130.638 186.60325892857145 130.638L 192.08647321428572 130.638Q 182.08647321428572 130.638 182.08647321428572 120.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 182.08647321428572 120.638L 182.08647321428572 62.255200000000016Q 182.08647321428572 52.255200000000016 192.08647321428572 52.255200000000016L 186.60325892857145 52.255200000000016Q 196.60325892857145 52.255200000000016 196.60325892857145 62.255200000000016L 196.60325892857145 62.255200000000016L 196.60325892857145 120.638Q 196.60325892857145 130.638 186.60325892857145 130.638L 192.08647321428572 130.638Q 182.08647321428572 130.638 182.08647321428572 120.638z" pathFrom="M 182.08647321428572 120.638L 182.08647321428572 120.638L 196.60325892857145 120.638L 196.60325892857145 120.638L 196.60325892857145 120.638L 196.60325892857145 120.638L 196.60325892857145 120.638L 182.08647321428572 120.638" cy="52.255200000000016" cx="221.82977678571427" j="4" val="18" barHeight="78.38279999999999" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1309" d="M 224.82977678571427 120.638L 224.82977678571427 88.3828Q 224.82977678571427 78.3828 234.82977678571427 78.3828L 229.3465625 78.3828Q 239.3465625 78.3828 239.3465625 88.3828L 239.3465625 88.3828L 239.3465625 120.638Q 239.3465625 130.638 229.3465625 130.638L 234.82977678571427 130.638Q 224.82977678571427 130.638 224.82977678571427 120.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 224.82977678571427 120.638L 224.82977678571427 88.3828Q 224.82977678571427 78.3828 234.82977678571427 78.3828L 229.3465625 78.3828Q 239.3465625 78.3828 239.3465625 88.3828L 239.3465625 88.3828L 239.3465625 120.638Q 239.3465625 130.638 229.3465625 130.638L 234.82977678571427 130.638Q 224.82977678571427 130.638 224.82977678571427 120.638z" pathFrom="M 224.82977678571427 120.638L 224.82977678571427 120.638L 239.3465625 120.638L 239.3465625 120.638L 239.3465625 120.638L 239.3465625 120.638L 239.3465625 120.638L 224.82977678571427 120.638" cy="78.3828" cx="264.5730803571428" j="5" val="12" barHeight="52.255199999999995" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1310" d="M 267.5730803571428 120.638L 267.5730803571428 101.44660000000002Q 267.5730803571428 91.44660000000002 277.5730803571428 91.44660000000002L 272.08986607142856 91.44660000000002Q 282.08986607142856 91.44660000000002 282.08986607142856 101.44660000000002L 282.08986607142856 101.44660000000002L 282.08986607142856 120.638Q 282.08986607142856 130.638 272.08986607142856 130.638L 277.5730803571428 130.638Q 267.5730803571428 130.638 267.5730803571428 120.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 267.5730803571428 120.638L 267.5730803571428 101.44660000000002Q 267.5730803571428 91.44660000000002 277.5730803571428 91.44660000000002L 272.08986607142856 91.44660000000002Q 282.08986607142856 91.44660000000002 282.08986607142856 101.44660000000002L 282.08986607142856 101.44660000000002L 282.08986607142856 120.638Q 282.08986607142856 130.638 272.08986607142856 130.638L 277.5730803571428 130.638Q 267.5730803571428 130.638 267.5730803571428 120.638z" pathFrom="M 267.5730803571428 120.638L 267.5730803571428 120.638L 282.08986607142856 120.638L 282.08986607142856 120.638L 282.08986607142856 120.638L 282.08986607142856 120.638L 282.08986607142856 120.638L 267.5730803571428 120.638" cy="91.44660000000002" cx="307.3163839285714" j="6" val="9" barHeight="39.191399999999994" barWidth="20.516785714285717">
                            </path>
                            </g>
                            </div>
                            <g id="SvgjsG1311" class="apexcharts-series" seriesName="2020" rel="2" data-realIndex="1"><path id="SvgjsPath1313" d="M 11.113258928571426 150.638L 11.113258928571426 187.24779999999998Q 11.113258928571426 197.24779999999998 21.113258928571426 197.24779999999998L 15.630044642857143 197.24779999999998Q 25.630044642857143 197.24779999999998 25.630044642857143 187.24779999999998L 25.630044642857143 187.24779999999998L 25.630044642857143 150.638Q 25.630044642857143 140.638 15.630044642857143 140.638L 21.113258928571426 140.638Q 11.113258928571426 140.638 11.113258928571426 150.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 11.113258928571426 150.638L 11.113258928571426 187.24779999999998Q 11.113258928571426 197.24779999999998 21.113258928571426 197.24779999999998L 15.630044642857143 197.24779999999998Q 25.630044642857143 197.24779999999998 25.630044642857143 187.24779999999998L 25.630044642857143 187.24779999999998L 25.630044642857143 150.638Q 25.630044642857143 140.638 15.630044642857143 140.638L 21.113258928571426 140.638Q 11.113258928571426 140.638 11.113258928571426 150.638z" pathFrom="M 11.113258928571426 150.638L 11.113258928571426 150.638L 25.630044642857143 150.638L 25.630044642857143 150.638L 25.630044642857143 150.638L 25.630044642857143 150.638L 25.630044642857143 150.638L 11.113258928571426 150.638" cy="177.24779999999998" cx="50.856562499999995" j="0" val="-13" barHeight="-56.60979999999999" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1314" d="M 53.856562499999995 150.638L 53.856562499999995 209.0208Q 53.856562499999995 219.0208 63.856562499999995 219.0208L 58.37334821428571 219.0208Q 68.37334821428571 219.0208 68.37334821428571 209.0208L 68.37334821428571 209.0208L 68.37334821428571 150.638Q 68.37334821428571 140.638 58.37334821428571 140.638L 63.856562499999995 140.638Q 53.856562499999995 140.638 53.856562499999995 150.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 53.856562499999995 150.638L 53.856562499999995 209.0208Q 53.856562499999995 219.0208 63.856562499999995 219.0208L 58.37334821428571 219.0208Q 68.37334821428571 219.0208 68.37334821428571 209.0208L 68.37334821428571 209.0208L 68.37334821428571 150.638Q 68.37334821428571 140.638 58.37334821428571 140.638L 63.856562499999995 140.638Q 53.856562499999995 140.638 53.856562499999995 150.638z" pathFrom="M 53.856562499999995 150.638L 53.856562499999995 150.638L 68.37334821428571 150.638L 68.37334821428571 150.638L 68.37334821428571 150.638L 68.37334821428571 150.638L 68.37334821428571 150.638L 53.856562499999995 150.638" cy="199.0208" cx="93.59986607142856" j="1" val="-18" barHeight="-78.38279999999999" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1315" d="M 96.59986607142856 150.638L 96.59986607142856 169.8294Q 96.59986607142856 179.8294 106.59986607142856 179.8294L 101.11665178571428 179.8294Q 111.11665178571428 179.8294 111.11665178571428 169.8294L 111.11665178571428 169.8294L 111.11665178571428 150.638Q 111.11665178571428 140.638 101.11665178571428 140.638L 106.59986607142856 140.638Q 96.59986607142856 140.638 96.59986607142856 150.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 96.59986607142856 150.638L 96.59986607142856 169.8294Q 96.59986607142856 179.8294 106.59986607142856 179.8294L 101.11665178571428 179.8294Q 111.11665178571428 179.8294 111.11665178571428 169.8294L 111.11665178571428 169.8294L 111.11665178571428 150.638Q 111.11665178571428 140.638 101.11665178571428 140.638L 106.59986607142856 140.638Q 96.59986607142856 140.638 96.59986607142856 150.638z" pathFrom="M 96.59986607142856 150.638L 96.59986607142856 150.638L 111.11665178571428 150.638L 111.11665178571428 150.638L 111.11665178571428 150.638L 111.11665178571428 150.638L 111.11665178571428 150.638L 96.59986607142856 150.638" cy="159.8294" cx="136.34316964285713" j="2" val="-9" barHeight="-39.191399999999994" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1316" d="M 139.34316964285713 150.638L 139.34316964285713 191.6024Q 139.34316964285713 201.6024 149.34316964285713 201.6024L 143.85995535714284 201.6024Q 153.85995535714284 201.6024 153.85995535714284 191.6024L 153.85995535714284 191.6024L 153.85995535714284 150.638Q 153.85995535714284 140.638 143.85995535714284 140.638L 149.34316964285713 140.638Q 139.34316964285713 140.638 139.34316964285713 150.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 139.34316964285713 150.638L 139.34316964285713 191.6024Q 139.34316964285713 201.6024 149.34316964285713 201.6024L 143.85995535714284 201.6024Q 153.85995535714284 201.6024 153.85995535714284 191.6024L 153.85995535714284 191.6024L 153.85995535714284 150.638Q 153.85995535714284 140.638 143.85995535714284 140.638L 149.34316964285713 140.638Q 139.34316964285713 140.638 139.34316964285713 150.638z" pathFrom="M 139.34316964285713 150.638L 139.34316964285713 150.638L 153.85995535714284 150.638L 153.85995535714284 150.638L 153.85995535714284 150.638L 153.85995535714284 150.638L 153.85995535714284 150.638L 139.34316964285713 150.638" cy="181.6024" cx="179.08647321428572" j="3" val="-14" barHeight="-60.96439999999999" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1317" d="M 182.08647321428572 150.638L 182.08647321428572 152.411Q 182.08647321428572 162.411 192.08647321428572 162.411L 186.60325892857145 162.411Q 196.60325892857145 162.411 196.60325892857145 152.411L 196.60325892857145 152.411L 196.60325892857145 150.638Q 196.60325892857145 140.638 186.60325892857145 140.638L 192.08647321428572 140.638Q 182.08647321428572 140.638 182.08647321428572 150.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 182.08647321428572 150.638L 182.08647321428572 152.411Q 182.08647321428572 162.411 192.08647321428572 162.411L 186.60325892857145 162.411Q 196.60325892857145 162.411 196.60325892857145 152.411L 196.60325892857145 152.411L 196.60325892857145 150.638Q 196.60325892857145 140.638 186.60325892857145 140.638L 192.08647321428572 140.638Q 182.08647321428572 140.638 182.08647321428572 150.638z" pathFrom="M 182.08647321428572 150.638L 182.08647321428572 150.638L 196.60325892857145 150.638L 196.60325892857145 150.638L 196.60325892857145 150.638L 196.60325892857145 150.638L 196.60325892857145 150.638L 182.08647321428572 150.638" cy="142.411" cx="221.82977678571427" j="4" val="-5" barHeight="-21.772999999999996" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1318" d="M 224.82977678571427 150.638L 224.82977678571427 204.6662Q 224.82977678571427 214.6662 234.82977678571427 214.6662L 229.3465625 214.6662Q 239.3465625 214.6662 239.3465625 204.6662L 239.3465625 204.6662L 239.3465625 150.638Q 239.3465625 140.638 229.3465625 140.638L 234.82977678571427 140.638Q 224.82977678571427 140.638 224.82977678571427 150.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 224.82977678571427 150.638L 224.82977678571427 204.6662Q 224.82977678571427 214.6662 234.82977678571427 214.6662L 229.3465625 214.6662Q 239.3465625 214.6662 239.3465625 204.6662L 239.3465625 204.6662L 239.3465625 150.638Q 239.3465625 140.638 229.3465625 140.638L 234.82977678571427 140.638Q 224.82977678571427 140.638 224.82977678571427 150.638z" pathFrom="M 224.82977678571427 150.638L 224.82977678571427 150.638L 239.3465625 150.638L 239.3465625 150.638L 239.3465625 150.638L 239.3465625 150.638L 239.3465625 150.638L 224.82977678571427 150.638" cy="194.6662" cx="264.5730803571428" j="5" val="-17" barHeight="-74.0282" barWidth="20.516785714285717">
                            </path>
                            <path id="SvgjsPath1319" d="M 267.5730803571428 150.638L 267.5730803571428 195.957Q 267.5730803571428 205.957 277.5730803571428 205.957L 272.08986607142856 205.957Q 282.08986607142856 205.957 282.08986607142856 195.957L 282.08986607142856 195.957L 282.08986607142856 150.638Q 282.08986607142856 140.638 272.08986607142856 140.638L 277.5730803571428 140.638Q 267.5730803571428 140.638 267.5730803571428 150.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaski9nzqtuy)" pathTo="M 267.5730803571428 150.638L 267.5730803571428 195.957Q 267.5730803571428 205.957 277.5730803571428 205.957L 272.08986607142856 205.957Q 282.08986607142856 205.957 282.08986607142856 195.957L 282.08986607142856 195.957L 282.08986607142856 150.638Q 282.08986607142856 140.638 272.08986607142856 140.638L 277.5730803571428 140.638Q 267.5730803571428 140.638 267.5730803571428 150.638z" pathFrom="M 267.5730803571428 150.638L 267.5730803571428 150.638L 282.08986607142856 150.638L 282.08986607142856 150.638L 282.08986607142856 150.638L 282.08986607142856 150.638L 282.08986607142856 150.638L 267.5730803571428 150.638" cy="185.957" cx="307.3163839285714" j="6" val="-15" barHeight="-65.31899999999999" barWidth="20.516785714285717">
                            </path></g>
                            <g id="SvgjsG1303" class="apexcharts-datalabels" data-realIndex="0"></g>
                            <g id="SvgjsG1312" class="apexcharts-datalabels" data-realIndex="1"></g></g>
                            <line id="SvgjsLine1368" x1="0" y1="0" x2="299.203125" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line>
                            <line id="SvgjsLine1369" x1="0" y1="0" x2="299.203125" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line>
                            <g id="SvgjsG1370" class="apexcharts-yaxis-annotations"></g>
                            <g id="SvgjsG1371" class="apexcharts-xaxis-annotations"></g>
                            <g id="SvgjsG1372" class="apexcharts-point-annotations"></g></g>
                          



                      <g id="SvgjsG4556" class="apexcharts-datalabels" data-realIndex="0"></g>
                      <g id="SvgjsG4558" class="apexcharts-datalabels" data-realIndex="1"></g>
                       

                        <g id="SvgjsG2147" class="apexcharts-yaxis" rel="0" transform="translate(15.796875, 0)">
                        <g id="SvgjsG2148" class="apexcharts-yaxis-texts-g">
                        <text id="SvgjsText2149" font-family="Helvetica, Arial, sans-serif" x="20" y="52.5" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                        <tspan id="SvgjsTspan2150">30</tspan>
                        <title>30</title></text>
                        <text id="SvgjsText2151" font-family="Helvetica, Arial, sans-serif" x="20" y="96.04599999999999" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                        <tspan id="SvgjsTspan2152">20</tspan>
                        <title>20</title></text>
                        <text id="SvgjsText2153" font-family="Helvetica, Arial, sans-serif" x="20" y="139.59199999999998" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                        <tspan id="SvgjsTspan2154">10</tspan>
                        <title>10</title></text>
                        <text id="SvgjsText2155" font-family="Helvetica, Arial, sans-serif" x="20" y="183.13799999999998" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                        <tspan id="SvgjsTspan2156">0</tspan><title>0</title>
                        </text>
                        <text id="SvgjsText2157" font-family="Helvetica, Arial, sans-serif" x="20" y="226.68399999999997" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                        <tspan id="SvgjsTspan2158">-10</tspan><title>-10</title></text>
                        <text id="SvgjsText2159" font-family="Helvetica, Arial, sans-serif" x="20" y="270.22999999999996" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                        <tspan id="SvgjsTspan2160">-20</tspan><title>-20</title>
                        </text>
                        </g>
                        </g>
                        <g id="SvgjsG4544" class="apexcharts-annotations"></g>
                          </svg>
                          </div>
                          </div>

                        <div class="apexcharts-tooltip apexcharts-theme-light">
                        <div class="apexcharts-tooltip-title" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                        </div>
                        <div class="apexcharts-tooltip-series-group" style={{order:'1'}}>
                        <span class="apexcharts-tooltip-marker" style={{backgroundColor:'rgb(105, 108, 255)'}}>
                        </span><div class="apexcharts-tooltip-text" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                        <div class="apexcharts-tooltip-y-group">
                        <span class="apexcharts-tooltip-text-y-label">
                        </span>
                        <span class="apexcharts-tooltip-text-y-value"></span>
                        </div>
                        <div class="apexcharts-tooltip-goals-group">
                        <span class="apexcharts-tooltip-text-goals-label"></span>
                        <span class="apexcharts-tooltip-text-goals-value"></span></div>
                        <div class="apexcharts-tooltip-z-group">
                        <span class="apexcharts-tooltip-text-z-label"></span>
                        <span class="apexcharts-tooltip-text-z-value"></span></div></div></div>
                        <div class="apexcharts-tooltip-series-group" style={{order:'2'}}>
                        <span class="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(3, 195, 236)'}}></span>
                        <div class="apexcharts-tooltip-text" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                        <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span>
                        <span class="apexcharts-tooltip-text-y-value"></span></div>
                        <div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span>
                        <span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group">
                        <span class="apexcharts-tooltip-text-z-label"></span>
                        <span class="apexcharts-tooltip-text-z-value"></span></div></div></div>
                        <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div class="apexcharts-yaxistooltip-text"></div></div>
                        </div>


                        
                        
                        
                        
                        
                        
                        
                      <div class="resize-triggers"><div class="expand-trigger"><div style={{width:'390px', height:'376px'}}></div></div>
                      <div class="contract-trigger"></div></div></div>
                      <div class="col-md-4">
                        <div class="card-body">
                          <div class="text-center">
                            <div class="dropdown">
                              <button class="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="growthReportId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                2022
                              </button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                                <a class="dropdown-item" href="javascript:void(0);">2021</a>
                                <a class="dropdown-item" href="javascript:void(0);">2020</a>
                                <a class="dropdown-item" href="javascript:void(0);">2019</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="growthChart" style={{minHeight:'154.875px'}}>
                        <div id="apexcharts7hxy7ldn" class="apexcharts-canvas apexcharts7hxy7ldn apexcharts-theme-light" style={{width:'194px', height:'154.875px'}}>
                        <svg id="SvgjsSvg2925" width="194" height="154.875" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev" class="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background:'transparent'}}>
                        <g id="SvgjsG2927" class="apexcharts-inner apexcharts-graphical" transform="translate(-10, -25)">
                        <defs id="SvgjsDefs2926">
                        <clipPath id="gridRectMask7hxy7ldn">
                        <rect id="SvgjsRect2929" width="222" height="285" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                        </rect>
                        </clipPath>
                        <clipPath id="forecastMask7hxy7ldn">
                        </clipPath>
                        <clipPath id="nonForecastMask7hxy7ldn">
                        </clipPath>
                        <clipPath id="gridRectMarkerMask7hxy7ldn">
                        <rect id="SvgjsRect2930" width="220" height="287" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                        </rect>
                        </clipPath>
                        <linearGradient id="SvgjsLinearGradient2935" x1="1" y1="0" x2="0" y2="1">
                        <stop id="SvgjsStop2936" stop-opacity="1" stop-color="rgba(105,108,255,1)" offset="0.3">
                        </stop>
                        <stop id="SvgjsStop2937" stop-opacity="0.6" stop-color="rgba(255,255,255,0.6)" offset="0.7">
                        </stop>
                        <stop id="SvgjsStop2938" stop-opacity="0.6" stop-color="rgba(255,255,255,0.6)" offset="1">
                        </stop>
                        </linearGradient>
                        <linearGradient id="SvgjsLinearGradient2946" x1="1" y1="0" x2="0" y2="1">
                        <stop id="SvgjsStop2947" stop-opacity="1" stop-color="rgba(105,108,255,1)" offset="0.3">
                        </stop>
                        <stop id="SvgjsStop2948" stop-opacity="0.6" stop-color="rgba(105,108,255,0.6)" offset="0.7">
                        </stop>
                        <stop id="SvgjsStop2949" stop-opacity="0.6" stop-color="rgba(105,108,255,0.6)" offset="1">
                        </stop>
                        </linearGradient>
                        </defs>
                        <g id="SvgjsG2931" class="apexcharts-radialbar">
                        <g id="SvgjsG2932"><g id="SvgjsG2933" class="apexcharts-tracks">
                        <g id="SvgjsG2934" class="apexcharts-radialbar-track apexcharts-track" rel="1">
                        <path id="apexcharts-radialbarTrack-0" d="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 142.16493902439026 167.17541022773656" fill="none" fill-opacity="1" stroke="rgba(255,255,255,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="17.357317073170734" stroke-dasharray="0" class="apexcharts-radialbar-area" data-pathOrig="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 142.16493902439026 167.17541022773656"></path>
                        </g>
                        </g>
                        <g id="SvgjsG2940">
                        <g id="SvgjsG2945" class="apexcharts-series apexcharts-radial-series" seriesName="Growth" rel="1" data-realIndex="0">
                          <path id="SvgjsPath2950" d="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 175.95555982735613 100.85758285229481" fill="none" fill-opacity="0.85" stroke="url(#SvgjsLinearGradient2946)" stroke-opacity="1" stroke-linecap="butt" stroke-width="17.357317073170734" stroke-dasharray="5" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data-angle="234" data-value="78" index="0" j="0" data-pathOrig="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 175.95555982735613 100.85758285229481">
                            </path>
                            </g>
                            <circle id="SvgjsCircle2941" r="54.65121951219512" cx="108" cy="108" class="apexcharts-radialbar-hollow" fill="transparent">
                            </circle><g id="SvgjsG2942" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style={{opacity:'1'}}>
                              <text id="SvgjsText2943" font-family="Public Sans" x="108" y="123" text-anchor="middle" dominant-baseline="auto" font-size="15px" font-weight="500" fill="#566a7f" class="apexcharts-text apexcharts-datalabel-label" style={{fontFamily:'&quot;Public Sans&quot'}}>Growth</text>
                              <text id="SvgjsText2944" font-family="Public Sans" x="108" y="99" text-anchor="middle" dominant-baseline="auto" font-size="22px" font-weight="500" fill="#566a7f" class="apexcharts-text apexcharts-datalabel-value" style={{fontFamily:'&quot;Public Sans&quot'}}>78%</text>
                              </g></g></g></g>
                              <line id="SvgjsLine2951" x1="0" y1="0" x2="216" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs">
                              </line>
                              <line id="SvgjsLine2952" x1="0" y1="0" x2="216" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden">
                                </line></g>
                                <g id="SvgjsG2928" class="apexcharts-annotations"></g></svg>
                                <div class="apexcharts-legend">
                                  </div>
                                  </div>
                                  </div>
                        <div class="text-center fw-medium pt-3 mb-2">62% Company Growth</div>

                        <div class="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                          <div class="d-flex">
                            <div class="me-2">
                              <span class="badge bg-label-primary p-2"><i class="bx bx-dollar text-primary"></i></span>
                            </div>
                            <div class="d-flex flex-column">
                              <small>2022</small>
                              <h6 class="mb-0">$32.5k</h6>
                            </div>
                          </div>
                          <div class="d-flex">
                            <div class="me-2">
                              <span class="badge bg-label-info p-2"><i class="bx bx-wallet text-info"></i></span>
                            </div>
                            <div class="d-flex flex-column">
                              <small>2021</small>
                              <h6 class="mb-0">$41.2k</h6>
                            </div>
                          </div>
                        </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div style={{width:'195px', height:'376px'}}>
                            </div>
                            </div><div class="contract-trigger">
                              </div></div>
                              </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                  <div class="row">
                    <div class="col-6 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <div class="avatar flex-shrink-0">
                              <img src="./assets/img/icons/unicons/paypal.png" alt="Credit Card" class="rounded"/>
                            </div>
                            <div class="dropdown">
                              <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Payments</span>
                          <h3 class="card-title text-nowrap mb-2">$2,456</h3>
                          <small class="text-danger fw-medium"><i class="bx bx-down-arrow-alt"></i> -14.82%</small>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <div class="avatar flex-shrink-0">
                              <img src="./assets/img/icons/unicons/cc-primary.png" alt="Credit Card" class="rounded"/>
                            </div>
                            <div class="dropdown">
                              <button class="btn p-0" type="button" id="cardOpt1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu" aria-labelledby="cardOpt1">
                                <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span class="fw-medium d-block mb-1">Transactions</span>
                          <h3 class="card-title mb-2">$14,857</h3>
                          <small class="text-success fw-medium"><i class="bx bx-up-arrow-alt"></i> +28.14%</small>
                        </div>
                      </div>
                    </div>
                     </div>
              <div class="row"> 
                    <div class="col-12 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex justify-content-between flex-sm-row flex-column gap-3" style={{position:'relative'}}>
                            <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                              <div class="card-title">
                                <h5 class="text-nowrap mb-2">Profile Report</h5>
                                <span class="badge bg-label-warning rounded-pill">Year 2021</span>
                              </div>
                              <div class="mt-sm-auto">
                                <small class="text-success text-nowrap fw-medium"><i class="bx bx-chevron-up"></i> 68.2%</small>
                                <h3 class="mb-0">$84,686k</h3>
                              </div>
                            </div>
                            <div id="profileReportChart" style={{minHeight:'80px'}}>
                            <div id="apexcharts3a9d7ti3" class="apexcharts-canvas apexcharts3a9d7ti3 apexcharts-theme-light" style={{width:'93px', height:'80px'}}>
                            <svg id="SvgjsSvg2108" width="93" height="80" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev" class="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background:'transparent'}}>
                            <g id="SvgjsG2110" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                            <defs id="SvgjsDefs2109"><clipPath id="gridRectMask3a9d7ti3">
                            <rect id="SvgjsRect2115" width="94" height="85" x="-4.5" y="-2.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath>
                            <clipPath id="forecastMask3a9d7ti3"></clipPath>
                            <clipPath id="nonForecastMask3a9d7ti3"></clipPath>
                            <clipPath id="gridRectMarkerMask3a9d7ti3">
                            <rect id="SvgjsRect2116" width="89" height="84" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath>
                            <filter id="SvgjsFilter2122" filterUnits="userSpaceOnUse" width="200%" height="200%" x="-50%" y="-50%">
                            <feFlood id="SvgjsFeFlood2123" flood-color="#ffab00" flood-opacity="0.15" result="SvgjsFeFlood2123Out" in="SourceGraphic"></feFlood>
                            <feComposite id="SvgjsFeComposite2124" in="SvgjsFeFlood2123Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite2124Out"></feComposite>
                            <feOffset id="SvgjsFeOffset2125" dx="5" dy="10" result="SvgjsFeOffset2125Out" in="SvgjsFeComposite2124Out"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur2126" stdDeviation="3 " result="SvgjsFeGaussianBlur2126Out" in="SvgjsFeOffset2125Out"></feGaussianBlur>
                            <feMerge id="SvgjsFeMerge2127" result="SvgjsFeMerge2127Out" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode2128" in="SvgjsFeGaussianBlur2126Out"></feMergeNode>
                            <feMergeNode id="SvgjsFeMergeNode2129" in="[object Arguments]"></feMergeNode></feMerge>
                            <feBlend id="SvgjsFeBlend2130" in="SourceGraphic" in2="SvgjsFeMerge2127Out" mode="normal" result="SvgjsFeBlend2130Out"></feBlend></filter></defs><line id="SvgjsLine2114" x1="0" y1="0" x2="0" y2="80" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="80" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG2131" class="apexcharts-xaxis" transform="translate(0, 0)">
                            <g id="SvgjsG2132" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g><g id="SvgjsG2140" class="apexcharts-grid">
                            <g id="SvgjsG2141" class="apexcharts-gridlines-horizontal" style={{display:'none'}}>
                            <line id="SvgjsLine2143" x1="0" y1="0" x2="85" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine2144" x1="0" y1="20" x2="85" y2="20" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                            <line id="SvgjsLine2145" x1="0" y1="40" x2="85" y2="40" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine2146" x1="0" y1="60" x2="85" y2="60" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine2147" x1="0" y1="80" x2="85" y2="80" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG2142" class="apexcharts-gridlines-vertical" style={{display:'none'}}></g><line id="SvgjsLine2149" x1="0" y1="80" x2="85" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine2148" x1="0" y1="1" x2="0" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG2117" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG2118" class="apexcharts-series" seriesName="seriesx1" data-longestSeries="true" rel="1" data-realIndex="0">
                            <path id="SvgjsPath2121" d="M 0 76C 5.949999999999999 76 11.05 12 17 12C 22.95 12 28.05 62 34 62C 39.95 62 45.05 22 51 22C 56.95 22 62.05 38 68 38C 73.95 38 79.05 6 85 6" fill="none" fill-opacity="1" stroke="rgba(255,171,0,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMask3a9d7ti3)" filter="url(#SvgjsFilter2122)" pathTo="M 0 76C 5.949999999999999 76 11.05 12 17 12C 22.95 12 28.05 62 34 62C 39.95 62 45.05 22 51 22C 56.95 22 62.05 38 68 38C 73.95 38 79.05 6 85 6" pathFrom="M -1 120L -1 120L 17 120L 34 120L 51 120L 68 120L 85 120"></path><g id="SvgjsG2119" class="apexcharts-series-markers-wrap" data-realIndex="0"><g class="apexcharts-series-markers"><circle id="SvgjsCircle2155" r="0" cx="0" cy="0" class="apexcharts-marker wt4brwxva no-pointer-events" stroke="#ffffff" fill="#ffab00" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG2120" class="apexcharts-datalabels" data-realIndex="0"></g></g><line id="SvgjsLine2150" x1="0" y1="0" x2="85" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2151" x1="0" y1="0" x2="85" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2152" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG2153" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG2154" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect2113" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2139" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2111" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style={{maxHeight:'40px'}}></div><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-title" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                            </div><div class="apexcharts-tooltip-series-group" style={{order: 
                              '1'}}><span class="apexcharts-tooltip-marker" style={{backgroundColor:'rgb(255, 171, 0)'}}></span>
                              <div class="apexcharts-tooltip-text" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                              <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
                          <div class="resize-triggers"><div class="expand-trigger"><div style={{width:'232px', height:'114px'}}></div></div><div class="contract-trigger"></div></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
          </div>

              <div class="row">
              <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                  <div class="card h-100">
                    <div class="card-header d-flex align-items-center justify-content-between pb-0">
                      <div class="card-title mb-0">
                        <h5 class="m-0 me-2">Order Statistics</h5>
                        <small class="text-muted">42.82k Total Sales</small>
                      </div>
                      <div class="dropdown">
                        <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                          <a class="dropdown-item" href="javascript:void(0);">Select All</a>
                          <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                          <a class="dropdown-item" href="javascript:void(0);">Share</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center mb-3" style={{position:'relative'}}>
                        <div class="d-flex flex-column align-items-center gap-1">
                          <h2 class="mb-2">8,258</h2>
                          <span>Total Orders</span>
                        </div>
                        <div id="orderStatisticsChart" style={{minHeight:'137.55px'}}>
                        <div id="apexchartsz3m6f7gyh" class="apexcharts-canvas apexchartsz3m6f7gyh apexcharts-theme-light" style={{width:'130px', height:'137.55px'}}>
                        <svg id="SvgjsSvg1856" width="130" height="137.55" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev" class="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background:'transparent'}}>
                        <g id="SvgjsG1858" class="apexcharts-inner apexcharts-graphical" transform="translate(-7, 0)">
                        <defs id="SvgjsDefs1857"><clipPath id="gridRectMaskz3m6f7gyh">
                        <rect id="SvgjsRect1860" width="150" height="173" x="-4.5" y="-2.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath>
                        <clipPath id="forecastMaskz3m6f7gyh"></clipPath><clipPath id="nonForecastMaskz3m6f7gyh"></clipPath>
                        <clipPath id="gridRectMarkerMaskz3m6f7gyh">
                        <rect id="SvgjsRect1861" width="145" height="172" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs>
                        <g id="SvgjsG1862" class="apexcharts-pie">
                        <g id="SvgjsG1863" transform="translate(0, 0) scale(1)">
                        <circle id="SvgjsCircle1864" r="44.835365853658544" cx="70.5" cy="70.5" fill="transparent"></circle>
                        <g id="SvgjsG1865" class="apexcharts-slices">
                        <g id="SvgjsG1866" class="apexcharts-series apexcharts-pie-series" seriesName="Electronic" rel="1" data-realIndex="0">
                        <path id="SvgjsPath1867" d="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z" fill="rgba(105,108,255,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" data-angle="153" data-startAngle="0" data-strokeWidth="5" data-value="85" data-pathOrig="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z" stroke="#ffffff"></path></g>
                        <g id="SvgjsG1868" class="apexcharts-series apexcharts-pie-series" seriesName="Sports" rel="2" data-realIndex="1">
                        <path id="SvgjsPath1869" d="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z" fill="rgba(133,146,163,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" data-angle="27" data-startAngle="153" data-strokeWidth="5" data-value="15" data-pathOrig="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z" stroke="#ffffff"></path></g>
                        <g id="SvgjsG1870" class="apexcharts-series apexcharts-pie-series" seriesName="Decor" rel="3" data-realIndex="2">
                        <path id="SvgjsPath1871" d="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z" fill="rgba(3,195,236,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-2" index="0" j="2" data-angle="90" data-startAngle="180" data-strokeWidth="5" data-value="50" data-pathOrig="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z" stroke="#ffffff"></path></g>
                        <g id="SvgjsG1872" class="apexcharts-series apexcharts-pie-series" seriesName="Fashion" rel="4" data-realIndex="3">
                        <path id="SvgjsPath1873" d="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z" fill="rgba(113,221,55,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-3" index="0" j="3" data-angle="90" data-startAngle="270" data-strokeWidth="5" data-value="50" data-pathOrig="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z" stroke="#ffffff"></path></g></g></g>
                        <g id="SvgjsG1874" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)">
                        <text id="SvgjsText1875" font-family="Helvetica, Arial, sans-serif" x="70.5" y="90.5" text-anchor="middle" dominant-baseline="auto" font-size="0.8125rem" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-datalabel-label" style={{fontFamily:'Helvetica, Arial, sans-serif'}}>Weekly</text>
                        <text id="SvgjsText1876" font-family="Public Sans" x="70.5" y="71.5" text-anchor="middle" dominant-baseline="auto" font-size="1.5rem" font-weight="400" fill="#566a7f" class="apexcharts-text apexcharts-datalabel-value" style={{fontFamily:'&quot;Public Sans&quot'}}>38%</text></g></g>lll
                        <line id="SvgjsLine1877" x1="0" y1="0" x2="141" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line>
                       <line id="SvgjsLine1878" x1="0" y1="0" x2="141" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line></g>
                       <g id="SvgjsG1859" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div>
                       <div class="apexcharts-tooltip apexcharts-theme-dark">
                        <div class="apexcharts-tooltip-series-group" style={{order:'1'}}>
                       <span class="apexcharts-tooltip-marker" style={{backgroundColor:'rgb(105, 108, 255)'}}></span>
                       <div class="apexcharts-tooltip-text" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                       <div class="apexcharts-tooltip-y-group">
                       <span class="apexcharts-tooltip-text-y-label"></span>
                       <span class="apexcharts-tooltip-text-y-value"></span></div>
                       <div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span>
                       <span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group">
                      <span class="apexcharts-tooltip-text-z-label"></span>
                      <span class="apexcharts-tooltip-text-z-value"></span></div></div></div>
                      <div class="apexcharts-tooltip-series-group" style={{order:'2'}}>
                        <span class="apexcharts-tooltip-marker" style={{backgroundColor:'rgb(133, 146, 163)'}}></span>
                        <div class="apexcharts-tooltip-text" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                        <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span>
                        <span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group">
                        <span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span>
                        </div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span>
                      <span class="apexcharts-tooltip-text-z-value"></span></div></div></div>
                      <div class="apexcharts-tooltip-series-group" style={{order:'3'}}>
                      <span class="apexcharts-tooltip-marker" style={{backgroundColor:'rgb(3, 195, 236)'}}></span>
                      <div class="apexcharts-tooltip-text" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                      <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span>
                      <span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group">
                      <span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span>
                      </div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span>
                      <span class="apexcharts-tooltip-text-z-value"></span></div></div></div>
                      <div class="apexcharts-tooltip-series-group" style={{order:'4'}}>
                      <span class="apexcharts-tooltip-marker" style={{backgroundColor:'rgb(113, 221, 55)'}}></span>
                      <div class="apexcharts-tooltip-text" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                      <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span>
                      <span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group">
                      <span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span>
                      </div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span>
                      <span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div></div></div>
                      <div class="resize-triggers">
                      <div class="expand-trigger">
                      <div style={{width:'232px', height:'139px'}}>
                      </div>
                      </div>
                      <div class="contract-trigger"></div></div></div>
                      <ul class="p-0 m-0">
                        <li class="d-flex mb-4 pb-1">
                          <div class="avatar flex-shrink-0 me-3">
                            <span class="avatar-initial rounded bg-label-primary"><i class="bx bx-mobile-alt"></i></span>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <h6 class="mb-0">Electronic</h6>
                              <small class="text-muted">Mobile, Earbuds, TV</small>
                            </div>
                            <div class="user-progress">
                              <small class="fw-medium">82.5k</small>
                            </div>
                          </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                          <div class="avatar flex-shrink-0 me-3">
                            <span class="avatar-initial rounded bg-label-success"><i class="bx bx-closet"></i></span>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <h6 class="mb-0">Fashion</h6>
                              <small class="text-muted">T-shirt, Jeans, Shoes</small>
                            </div>
                            <div class="user-progress">
                              <small class="fw-medium">23.8k</small>
                            </div>
                          </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                          <div class="avatar flex-shrink-0 me-3">
                            <span class="avatar-initial rounded bg-label-info"><i class="bx bx-home-alt"></i></span>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <h6 class="mb-0">Decor</h6>
                              <small class="text-muted">Fine Art, Dining</small>
                            </div>
                            <div class="user-progress">
                              <small class="fw-medium">849k</small>
                            </div>
                          </div>
                        </li>
                        <li class="d-flex">
                          <div class="avatar flex-shrink-0 me-3">
                            <span class="avatar-initial rounded bg-label-secondary"><i class="bx bx-football"></i></span>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <h6 class="mb-0">Sports</h6>
                              <small class="text-muted">Football, Cricket Kit</small>
                            </div>
                            <div class="user-progress">
                              <small class="fw-medium">99</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div class="col-md-6 col-lg-4 order-1 mb-4">
                  <div class="card h-100">
                    <div class="card-header">
                      <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-tabs-line-card-income" aria-controls="navs-tabs-line-card-income" aria-selected="true">
                            Income
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button type="button" class="nav-link" role="tab" aria-selected="false" tabindex="-1">Expenses</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button type="button" class="nav-link" role="tab" aria-selected="false" tabindex="-1">Profit</button>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body px-0">
                      <div class="tab-content p-0">
                        <div class="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel" style={{position:'relative'}}>
                          <div class="d-flex p-4 pt-3">
                            <div class="avatar flex-shrink-0 me-3">
                              <img src="./assets/img/icons/unicons/wallet.png" alt="User"/>
                            </div>
                            <div>
                              <small class="text-muted d-block">Total Balance</small>
                              <div class="d-flex align-items-center">
                                <h6 class="mb-0 me-1">$459.10</h6>
                                <small class="text-success fw-medium">
                                  <i class="bx bx-chevron-up"></i>
                                  42.9%
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="incomeChart" style={{minHeight:'215px'}}>
                          <div id="apexchartspf5db0mvk" class="apexcharts-canvas apexchartspf5db0mvk apexcharts-theme-light" style={{width:'279px', height:'215px'}}>
                          <svg id="SvgjsSvg1775" width="279" height="215" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev" class="apexcharts-svg apexcharts-zoomable" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background:'transparent'}}>
                          <g id="SvgjsG1777" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 10)"><defs id="SvgjsDefs1776"><clipPath id="gridRectMaskpf5db0mvk"><rect id="SvgjsRect1782" width="267.6875" height="175.73" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath>
                          <clipPath id="forecastMaskpf5db0mvk"></clipPath>
                          <clipPath id="nonForecastMaskpf5db0mvk"></clipPath>
                          <clipPath id="gridRectMarkerMaskpf5db0mvk">
                          <rect id="SvgjsRect1783" width="289.6875" height="201.73" x="-14" y="-14" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath>
                          <linearGradient id="SvgjsLinearGradient1803" x1="0" y1="0" x2="0" y2="1">
                          <stop id="SvgjsStop1804" stop-opacity="0.5" stop-color="rgba(105,108,255,0.5)" offset="0"></stop>
                          <stop id="SvgjsStop1805" stop-opacity="0.25" stop-color="rgba(195,196,255,0.25)" offset="0.95"></stop>
                          <stop id="SvgjsStop1806" stop-opacity="0.25" stop-color="rgba(195,196,255,0.25)" offset="1"></stop>
                          </linearGradient></defs>
                          <line id="SvgjsLine1781" x1="0" y1="0" x2="0" y2="173.73" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="173.73" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line>
                          <g id="SvgjsG1809" class="apexcharts-xaxis" transform="translate(0, 0)">
                          <g id="SvgjsG1810" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                          <text id="SvgjsText1812" font-family="Helvetica, Arial, sans-serif" x="0" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                          <tspan id="SvgjsTspan1813"></tspan><title></title></text>
                          <text id="SvgjsText1815" font-family="Helvetica, Arial, sans-serif" x="37.38392857142857" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                          <tspan id="SvgjsTspan1816">Jan</tspan><title>Jan</title></text>
                          <text id="SvgjsText1818" font-family="Helvetica, Arial, sans-serif" x="74.76785714285714" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                          <tspan id="SvgjsTspan1819">Feb</tspan><title>Feb</title></text>
                          <text id="SvgjsText1821" font-family="Helvetica, Arial, sans-serif" x="112.15178571428572" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                          <tspan id="SvgjsTspan1822">Mar</tspan><title>Mar</title></text>
                          <text id="SvgjsText1824" font-family="Helvetica, Arial, sans-serif" x="149.53571428571428" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                          <tspan id="SvgjsTspan1825">Apr</tspan><title>Apr</title></text><text id="SvgjsText1827" font-family="Helvetica, Arial, sans-serif" x="186.91964285714283" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                          <tspan id="SvgjsTspan1828">May</tspan><title>May</title></text>
                          <text id="SvgjsText1830" font-family="Helvetica, Arial, sans-serif" x="224.3035714285714" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                          <tspan id="SvgjsTspan1831">Jun</tspan><title>Jun</title></text><text id="SvgjsText1833" font-family="Helvetica, Arial, sans-serif" x="261.68749999999994" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style={{fontFamily:'Helvetica, Arial, sans-serif'}}>
                          <tspan id="SvgjsTspan1834">Jul</tspan><title>Jul</title></text></g></g>
                          <g id="SvgjsG1837" class="apexcharts-grid">
                          <g id="SvgjsG1838" class="apexcharts-gridlines-horizontal">
                          <line id="SvgjsLine1840" x1="0" y1="0" x2="261.6875" y2="0" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1841" x1="0" y1="43.4325" x2="261.6875" y2="43.4325" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1842" x1="0" y1="86.865" x2="261.6875" y2="86.865" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1843" x1="0" y1="130.29749999999999" x2="261.6875" y2="130.29749999999999" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1844" x1="0" y1="173.73" x2="261.6875" y2="173.73" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line></g>
                          <g id="SvgjsG1839" class="apexcharts-gridlines-vertical"></g>
                          <line id="SvgjsLine1846" x1="0" y1="173.73" x2="261.6875" y2="173.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                          <line id="SvgjsLine1845" x1="0" y1="1" x2="0" y2="173.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g>
                          <g id="SvgjsG1784" class="apexcharts-area-series apexcharts-plot-series">
                          <g id="SvgjsG1785" class="apexcharts-series" seriesName="seriesx1" data-longestSeries="true" rel="1" data-realIndex="0">
                          <path id="SvgjsPath1807" d="M 0 173.73L 0 112.92450000000001C 13.084374999999998 112.92450000000001 24.29955357142857 125.95425 37.38392857142857 125.95425C 50.468303571428564 125.95425 61.683482142857144 86.86500000000001 74.76785714285714 86.86500000000001C 87.85223214285713 86.86500000000001 99.06741071428571 121.611 112.15178571428571 121.611C 125.2361607142857 121.611 136.45133928571428 34.74600000000001 149.53571428571428 34.74600000000001C 162.62008928571427 34.74600000000001 173.83526785714287 104.238 186.91964285714286 104.238C 200.00401785714286 104.238 211.21919642857142 65.14875 224.30357142857142 65.14875C 237.3879464285714 65.14875 248.603125 91.20825 261.6875 91.20825C 261.6875 91.20825 261.6875 91.20825 261.6875 173.73M 261.6875 91.20825z" fill="url(#SvgjsLinearGradient1803)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskpf5db0mvk)" pathTo="M 0 173.73L 0 112.92450000000001C 13.084374999999998 112.92450000000001 24.29955357142857 125.95425 37.38392857142857 125.95425C 50.468303571428564 125.95425 61.683482142857144 86.86500000000001 74.76785714285714 86.86500000000001C 87.85223214285713 86.86500000000001 99.06741071428571 121.611 112.15178571428571 121.611C 125.2361607142857 121.611 136.45133928571428 34.74600000000001 149.53571428571428 34.74600000000001C 162.62008928571427 34.74600000000001 173.83526785714287 104.238 186.91964285714286 104.238C 200.00401785714286 104.238 211.21919642857142 65.14875 224.30357142857142 65.14875C 237.3879464285714 65.14875 248.603125 91.20825 261.6875 91.20825C 261.6875 91.20825 261.6875 91.20825 261.6875 173.73M 261.6875 91.20825z" pathFrom="M -1 217.1625L -1 217.1625L 37.38392857142857 217.1625L 74.76785714285714 217.1625L 112.15178571428571 217.1625L 149.53571428571428 217.1625L 186.91964285714286 217.1625L 224.30357142857142 217.1625L 261.6875 217.1625"></path>
                          <path id="SvgjsPath1808" d="M 0 112.92450000000001C 13.084374999999998 112.92450000000001 24.29955357142857 125.95425 37.38392857142857 125.95425C 50.468303571428564 125.95425 61.683482142857144 86.86500000000001 74.76785714285714 86.86500000000001C 87.85223214285713 86.86500000000001 99.06741071428571 121.611 112.15178571428571 121.611C 125.2361607142857 121.611 136.45133928571428 34.74600000000001 149.53571428571428 34.74600000000001C 162.62008928571427 34.74600000000001 173.83526785714287 104.238 186.91964285714286 104.238C 200.00401785714286 104.238 211.21919642857142 65.14875 224.30357142857142 65.14875C 237.3879464285714 65.14875 248.603125 91.20825 261.6875 91.20825" fill="none" fill-opacity="1" stroke="#696cff" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskpf5db0mvk)" pathTo="M 0 112.92450000000001C 13.084374999999998 112.92450000000001 24.29955357142857 125.95425 37.38392857142857 125.95425C 50.468303571428564 125.95425 61.683482142857144 86.86500000000001 74.76785714285714 86.86500000000001C 87.85223214285713 86.86500000000001 99.06741071428571 121.611 112.15178571428571 121.611C 125.2361607142857 121.611 136.45133928571428 34.74600000000001 149.53571428571428 34.74600000000001C 162.62008928571427 34.74600000000001 173.83526785714287 104.238 186.91964285714286 104.238C 200.00401785714286 104.238 211.21919642857142 65.14875 224.30357142857142 65.14875C 237.3879464285714 65.14875 248.603125 91.20825 261.6875 91.20825" pathFrom="M -1 217.1625L -1 217.1625L 37.38392857142857 217.1625L 74.76785714285714 217.1625L 112.15178571428571 217.1625L 149.53571428571428 217.1625L 186.91964285714286 217.1625L 224.30357142857142 217.1625L 261.6875 217.1625"></path>
                          <g id="SvgjsG1786" class="apexcharts-series-markers-wrap" data-realIndex="0">
                          <g id="SvgjsG1788" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskpf5db0mvk)">
                            <circle id="SvgjsCircle1789" r="6" cx="0" cy="112.92450000000001" class="apexcharts-marker no-pointer-events wkk41xeqqj" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="0" j="0" index="0" default-marker-size="6"></circle>
                            <circle id="SvgjsCircle1790" r="6" cx="37.38392857142857" cy="125.95425" class="apexcharts-marker no-pointer-events w215vnh9u" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="1" j="1" index="0" default-marker-size="6"></circle></g>
                          <g id="SvgjsG1791" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskpf5db0mvk)">
                          <circle id="SvgjsCircle1792" r="6" cx="74.76785714285714" cy="86.86500000000001" class="apexcharts-marker no-pointer-events wuqmyrwpx" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="2" j="2" index="0" default-marker-size="6"></circle></g>
                          <g id="SvgjsG1793" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskpf5db0mvk)">
                          <circle id="SvgjsCircle1794" r="6" cx="112.15178571428571" cy="121.611" class="apexcharts-marker no-pointer-events wzlp1w1aw" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="3" j="3" index="0" default-marker-size="6"></circle></g>
                          <g id="SvgjsG1795" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskpf5db0mvk)">
                          <circle id="SvgjsCircle1796" r="6" cx="149.53571428571428" cy="34.74600000000001" class="apexcharts-marker no-pointer-events wy5supnyx" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="4" j="4" index="0" default-marker-size="6"></circle></g>
                          <g id="SvgjsG1797" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskpf5db0mvk)">
                          <circle id="SvgjsCircle1798" r="6" cx="186.91964285714286" cy="104.238" class="apexcharts-marker no-pointer-events wlus5vvfi" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="5" j="5" index="0" default-marker-size="6"></circle></g>
                          <g id="SvgjsG1799" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskpf5db0mvk)">
                          <circle id="SvgjsCircle1800" r="6" cx="224.30357142857142" cy="65.14875" class="apexcharts-marker no-pointer-events wdiczkomf" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="6" j="6" index="0" default-marker-size="6"></circle></g>
                          <g id="SvgjsG1801" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskpf5db0mvk)">
                          <circle id="SvgjsCircle1802" r="6" cx="261.6875" cy="91.20825" class="apexcharts-marker no-pointer-events wetucjgjbi" stroke="#696cff" fill="#ffffff" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="7" j="7" index="0" default-marker-size="6"></circle></g></g></g>
                          <g id="SvgjsG1787" class="apexcharts-datalabels" data-realIndex="0"></g></g>
                          <line id="SvgjsLine1847" x1="0" y1="0" x2="261.6875" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line>
                          <line id="SvgjsLine1848" x1="0" y1="0" x2="261.6875" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1849" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1850" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1851" class="apexcharts-point-annotations"></g><rect id="SvgjsRect1852" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-zoom-rect"></rect><rect id="SvgjsRect1853" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-selection-rect"></rect></g><rect id="SvgjsRect1780" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1835" class="apexcharts-yaxis" rel="0" transform="translate(-8, 0)"><g id="SvgjsG1836" class="apexcharts-yaxis-texts-g"></g></g><g id="SvgjsG1778" class="apexcharts-annotations"></g></svg>
                          <div class="apexcharts-legend" style={{maxHeight:'107.5px'}}></div>
                          <div class="apexcharts-tooltip apexcharts-theme-light">
                          <div class="apexcharts-tooltip-title" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}></div>
                          <div class="apexcharts-tooltip-series-group" style={{order:'1'}}>
                            <span class="apexcharts-tooltip-marker" style={{backgroundColor:'rgb(105, 108, 255)'}}></span>
                            <div class="apexcharts-tooltip-text" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}>
                            <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span>
                            <span class="apexcharts-tooltip-text-y-value"></span></div>
                            <div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span>
                            <span class="apexcharts-tooltip-text-goals-value"></span></div>
                            <div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span>
                            <span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div>
                            <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                              <div class="apexcharts-xaxistooltip-text" style={{fontFamily:'Helvetica, Arial, sans-serif', fontSize:'12px'}}></div></div>
                            <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                              <div class="apexcharts-yaxistooltip-text"></div></div></div></div>
                          <div class="d-flex justify-content-center pt-4 gap-2">
                            <div class="flex-shrink-0" style={{position:'relative'}}>
                            <div id="expensesOfWeek" style={{minHeight:'57.7px'}}>
                            <div id="apexchartsxke98fnp" class="apexcharts-canvas apexchartsxke98fnp apexcharts-theme-light" style={{width:'60px', height:'57.7px'}}>
                            <svg id="SvgjsSvg1571" width="60" height="57.7" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev" class="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background:'transparent'}}>
                            <g id="SvgjsG1573" class="apexcharts-inner apexcharts-graphical" transform="translate(-10, -10)">
                            <defs id="SvgjsDefs1572"><clipPath id="gridRectMaskxke98fnp">
                            <rect id="SvgjsRect1575" width="86" height="87" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskxke98fnp"></clipPath>
                            <clipPath id="nonForecastMaskxke98fnp"></clipPath><clipPath id="gridRectMarkerMaskxke98fnp">
                            <rect id="SvgjsRect1576" width="84" height="89" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1577" class="apexcharts-radialbar">
                            <g id="SvgjsG1578"><g id="SvgjsG1579" class="apexcharts-tracks"><g id="SvgjsG1580" class="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 39.99617740968999 18.098171065291247" fill="none" fill-opacity="1" stroke="rgba(236,238,241,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="2.0408536585365864" stroke-dasharray="0" class="apexcharts-radialbar-area" data-pathOrig="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 39.99617740968999 18.098171065291247"></path></g></g><g id="SvgjsG1582">
                              <g id="SvgjsG1586" class="apexcharts-series apexcharts-radial-series" seriesName="seriesx1" rel="1" data-realIndex="0">
                                <path id="SvgjsPath1587" d="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 22.2810479140526 52.873572242130095" fill="none" fill-opacity="0.85" stroke="rgba(105,108,255,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="4.081707317073173" stroke-dasharray="0" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data-angle="234" data-value="65" index="0" j="0" data-pathOrig="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 22.2810479140526 52.873572242130095"></path></g>
                                <circle id="SvgjsCircle1583" r="18.881402439024395" cx="40" cy="40" class="apexcharts-radialbar-hollow" fill="transparent"></circle><g id="SvgjsG1584" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style={{opacity:'1'}}>
                                <text id="SvgjsText1585" font-family="Helvetica, Arial, sans-serif" x="40" y="45" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#697a8d" class="apexcharts-text apexcharts-datalabel-value" style={{fontFamily:'Helvetica, Arial, sans-serif'}}>$65</text></g></g></g></g>
                                <line id="SvgjsLine1588" x1="0" y1="0" x2="80" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1589" x1="0" y1="0" x2="80" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1574" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div></div>
                            <div class="resize-triggers"><div class="expand-trigger">
                              <div style={{width:'61px', height:'59px'}}></div></div>
                              <div class="contract-trigger"></div></div></div>
                            <div>
                              <p class="mb-n1 mt-1">Expenses This Week</p>
                              <small class="text-muted">$39 less than last week</small>
                            </div>
                          </div>
                        <div class="resize-triggers"><div class="expand-trigger">
                          <div style={{width:'280px', height:'376px'}}></div></div>
                          <div class="contract-trigger"></div></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 order-2 mb-4">
                  <div class="card h-100">
                    <div class="card-header d-flex align-items-center justify-content-between">
                      <h5 class="card-title m-0 me-2">Transactions</h5>
                      <div class="dropdown">
                        <button class="btn p-0" type="button" id="transactionID" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                          <a class="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                          <a class="dropdown-item" href="javascript:void(0);">Last Month</a>
                          <a class="dropdown-item" href="javascript:void(0);">Last Year</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <ul class="p-0 m-0">
                        <li class="d-flex mb-4 pb-1">
                          <div class="avatar flex-shrink-0 me-3">
                            <img src="./assets/img/icons/unicons/paypal.png" alt="User" class="rounded"/>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <small class="text-muted d-block mb-1">Paypal</small>
                              <h6 class="mb-0">Send money</h6>
                            </div>
                            <div class="user-progress d-flex align-items-center gap-1">
                              <h6 class="mb-0">+82.6</h6>
                              <span class="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                          <div class="avatar flex-shrink-0 me-3">
                            <img src="./assets/img/icons/unicons/wallet.png" alt="User" class="rounded"/>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <small class="text-muted d-block mb-1">Wallet</small>
                              <h6 class="mb-0">Mac'D</h6>
                            </div>
                            <div class="user-progress d-flex align-items-center gap-1">
                              <h6 class="mb-0">+270.69</h6>
                              <span class="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                          <div class="avatar flex-shrink-0 me-3">
                            <img src="./assets/img/icons/unicons/chart.png" alt="User" class="rounded"/>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <small class="text-muted d-block mb-1">Transfer</small>
                              <h6 class="mb-0">Refund</h6>
                            </div>
                            <div class="user-progress d-flex align-items-center gap-1">
                              <h6 class="mb-0">+637.91</h6>
                              <span class="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                          <div class="avatar flex-shrink-0 me-3">
                            <img src="./assets/img/icons/unicons/cc-success.png" alt="User" class="rounded"/>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <small class="text-muted d-block mb-1">Credit Card</small>
                              <h6 class="mb-0">Ordered Food</h6>
                            </div>
                            <div class="user-progress d-flex align-items-center gap-1">
                              <h6 class="mb-0">-838.71</h6>
                              <span class="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                          <div class="avatar flex-shrink-0 me-3">
                            <img src="./assets/img/icons/unicons/wallet.png" alt="User" class="rounded"/>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <small class="text-muted d-block mb-1">Wallet</small>
                              <h6 class="mb-0">Starbucks</h6>
                            </div>
                            <div class="user-progress d-flex align-items-center gap-1">
                              <h6 class="mb-0">+203.33</h6>
                              <span class="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li class="d-flex">
                          <div class="avatar flex-shrink-0 me-3">
                            <img src="./assets/img/icons/unicons/cc-warning.png" alt="User" class="rounded"/>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <small class="text-muted d-block mb-1">Mastercard</small>
                              <h6 class="mb-0">Ordered Food</h6>
                            </div>
                            <div class="user-progress d-flex align-items-center gap-1">
                              <h6 class="mb-0">-92.45</h6>
                              <span class="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          
       </div>
           

       <footer class="content-footer footer bg-footer-theme">
              <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div class="mb-2 mb-md-0">
                  ©
                  <script>
                    document.write(new Date().getFullYear());
                  </script>2023
                  , made with ❤️ by
                  <a href="https://themeselection.com" target="_blank" class="footer-link fw-medium">ThemeSelection</a>
                </div>
                <div class="d-none d-lg-inline-block">
                  <a href="https://themeselection.com/license/" class="footer-link me-4" target="_blank">License</a>
                  <a href="https://themeselection.com/" target="_blank" class="footer-link me-4">More Themes</a>

                  <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/" target="_blank" class="footer-link me-4">Documentation</a>

                  <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" class="footer-link me-4">Support</a>
                </div>
              </div>
            </footer>
            <div class="content-backdrop fade"></div>
        </div>
        

    </>    
          

   



   

     
        
      
    
  
           
      
        
        
        
  )
}

export default Menu
