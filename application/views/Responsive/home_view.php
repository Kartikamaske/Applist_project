
<style>
    .btn-spacing {
                 margin-left:5px;
                 }

                 @media (max-width: 375px) {
                    .btn-spacing {
                 margin-left: 0px!important;
                 }
                 }
                 
</style>
   


<div> 
        <!-- <div class="banner-1 cover-image background-size bg-background" style="background: url('Assets/imgs/video.gif') center center;">  -->

        <!-- <div class="banner-1 cover-image background-size bg-background" style="background: url('Assets/imgs/bgimages/img7.jpg') center center;">  -->

        <div class="banner-1 cover-image background-size bg-background" style="background: url('Assets/imgs/bgimages/img9.webp'); background-position: center; background-repeat: no-repeat; background-attachment: fixed;  background-size: cover;"> 


        <!-- Assets/imgs/bgimages/img1.webp -->
        <!-- Assets/imgs/bgimages/img2.jpg -->

        <!-- C:\xampp\htdocs\appListResponsive\Assets\imgs\banner_img.jpg -->
            <div class="header-text2 mb-0 mt-1"> 
                <div class="container"> 
                    <div class="row"> 
                        <div class="col-xl-8 col-lg-10 col-md-12 d-block mx-auto"> 
                            <div class="text-center text-white mt-5"> 
                                <h1>Download the Software</h1> <br><br>
                                <!-- <p class="mt-2">It is a long established fact that a reader will be distracted by the readable. Mauris ut cursus nunc.</p> -->
                            </div> 
                            <div class="search-background"> 
                                <div class="form row no-gutters"> 
                                    <div class="form-group  col-xl-6 col-lg-5 col-md-12 mb-0"> 
                                        <input type="text" class="form-control input-lg border-end-0" id="text" placeholder="Search Software" value=""> 
                                    </div> 
                                    <div class="form-group col-xl-4 col-lg-4 select2-lg  col-md-12 mb-0">
                                        <select id="mySelect" class="form-control select2-show-search border-bottom-0 w-100 select2-hidden-accessible" data-placeholder="Select" tabindex="-1" aria-hidden="true" data-select2-id="12" style="height: 46px;border-left:0.5px solid black;"> 
                                            <optgroup label="Categories"> 
                                            <option id="categoryOption">Category</option> 
                                            <option id="windowsOption" value="1">Software</option> 
                                            <option id="androidOption" value="2">Android</option> 
                                            <option id="iosOption" value="3">iOS</option> 
                                            <option id="ecommerceOption" value="4">E-commerce App</option> 
                                            <option id="websideoption" value="5">Webside</option> 

                                            <option  value="6">Digital Markting</option>  
                                            <option value="7">Graphic Design</option>  


                                            </optgroup> 
                                        </select>
                                        
                                    </div> 
                                    <div class="col-xl-2 col-lg-3 col-md-12 mb-0"> 
                                        <a href="javascript:void(0);" class="btn btn-lg btn-block btn-primary detailbutton" id="searchbutton">Search</a> 
                                    </div> 
                                </div> 
                            </div> 
                            <div class="soft-categories"> 
                                <!-- <p class="categories-header"> CATEGORIES</p> -->
                                <ul class=""> 
                                    <!-- <li> 
                                        <a href="<?=base_url() ?>Responsive/software" class="hoverbutton"> <i class="fa-solid fa-envelopes-bulk" style="font-size:14px;"></i> <span>Kolhapur Company List</span> </a> 
                                    </li>  -->

                                    <!-- <li> 
                                        <a href="<?=base_url() ?>Responsive/andriod" class="hoverbutton"><i class="fa-brands fa-android" style="font-size:14px;"></i> <span>Android Apps</span> </a> 
                                    </li>  -->
                                    <!-- <li> 
                                        <a href="<?=base_url() ?>Responsive/iosapp" class="hoverbutton"><i class="fa-brands fa-apple" style="font-size:14px;"></i> <span>ios Apps</span> </a> 
                                    </li> 
                                    <li> 
                                        <a href="<?=base_url() ?>Responsive/ecommerce" class="hoverbutton"><i class="fa-solid fa-dumpster" style="font-size:14px;"></i> <span>E-coomerce</span> </a> 
                                    </li>  -->

                                    <!-- <li> 
                                        <a href="<?=base_url() ?>Responsive/website" class="hoverbutton"><i class="fa-solid fa-globe" style="font-size:14px;" ></i><span>Website</span> </a> 
                                    </li> -->
                                </ul> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div>
            <!-- /header-text --> 
        </div> 
    </div>


    <div class="container d-none">
    <div class="row" id="searchdatabox">

    </div>
    </div>

<?php $url='http://localhost/Admin_applist/upload/'; ?>




 <!-- india mart -->
 <section class="sptb pb-0">
    <div class="container">
        
            <!-- slider -->
            <!-- data fetch from database -->
            <ul class="slider3 m-0 m-lg-5">

           
     <?php 
                                             
     foreach($front as $rw=>$value){


                                                                 
         echo '
          <li>
             <div class="mx-2">
                 <div class="card overflow-hidden cardhover" data-toggle="modal" data-target="#myModal"
                 onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')" >
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                             </div>

                        <div class="item-card7-imgs"> 
                           <a href="javascript:void(0);"></a>
                            <img src="'.$url.$value->photo1.'" alt="Dash" class="p-0" style="height:270px;width:310px;">
                        </div>

                         <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1 overflow-hidden headtext">'.$value->softwarename.'</h4>
                                       </a> 
                                       

                                       <div style="text-align: left!important;">
                                         <p class="overflow-hidden paratext">'.$value->description.'</p> 
                                       </div>

                                    </div> 
                                 
                                    <a href="javascript:void(0);" class="btn btn-primary mt-3 view-demo-btn hoverbutton"
                                style="background-color: #5e4bdb;" data-toggle="modal" data-target="#myModal"
                                onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')">
                                <i class="fa-solid fa-laptop"></i> Get free demo
                            </a>

                                        <a href="javascript:void(0);" class="btn btn-primary mt-3 detailbutton" style="background-color: #5e4bdb;" data-toggle="modal" data-target="#myModal"
                                        onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')"><i class="fa-solid fa-download"></i> Download</a>
                                
                                 </div>
                         </div>                       
                </div> 
            </div>
                </li>

                     ';
               
    } ?> 


                                             <!-- <i class="fa-solid fa-star" style="color: #f5de20;"></i>
                                             <i class="fa-solid fa-star" style="color: #f5de20;"></i>
                                             <i class="fa-solid fa-star" style="color: #f5de20;"></i>
                                             <i class="fa-solid fa-star" style="color: #f5de20;"></i>
                                             <i class="fa-solid fa-star" style="color: #5f6877;"></i>
                                             <i class="fa-solid fa-star" style="color: #5f6877;"></i> -->
                             
            </ul> 
        </div>   
 </section>



 <section class="pb-0">
    <div class="container">
        
            <!-- slider -->
            <!-- data fetch from database -->
            <ul class="slider1 m-0 m-lg-5">

           
     <?php 
                                             
     foreach($middle as $rw=>$value){
                                                                 
         echo '
          <li>
             <div class="mx-2">
                 <div class="card overflow-hidden cardhover" data-toggle="modal" data-target="#myModal"
                 onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                             </div>

                        <div class="item-card7-imgs"> 

                        
                           <a href="javascript:void(0);"></a>
                            <img src="'.$url.$value->photo1.'" alt="Dash" class="p-0" style="height:270px;width:310px;">
                        </div>

                         <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1 overflow-hidden headtext">'.$value->softwarename.'</h4>
                                       </a> 
                                       

                                       <div style="text-align: left!important;">
                                         <p class="overflow-hidden paratext">'.$value->description.'</p>    
                                       </div>

                                    </div> 
                                 
                                    <a href="javascript:void(0);" class="btn btn-primary mt-3 view-demo-btn hoverbutton"
                                    style="background-color: #5e4bdb;" data-toggle="modal" data-target="#myModal"
                                    onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')">
                                    <i class="fa-solid fa-laptop"></i> Get free demo
                                </a>


                                        <a href="javascript:void(0);" class="btn btn-primary mt-3 detailbutton" style="background-color: #5e4bdb;" data-toggle="modal" data-target="#myModal"
                                        onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')"><i class="fa-solid fa-download"></i> Download</a>
                                
                                 </div>
                         </div>                       
                </div> 
            </div>
                </li>

                     ';
               
    } ?> 
                             
            </ul> 
        </div>   
 </section>







 <form role="form" id="Form1" class="" data-toggle="validator" enctype="multipart/form-data" action="" method="post">
    <div class="about-1 cover-image background-size sptb-2 bg-background-5 " data-bs-image-src="../assets/images/banners/banner4.jpg" style="background: url('Assets/imgs/banner2.jpg') center center;">
    <div class="container"> 
      <div class="">
         <div class="col-lg-12 col-xl-12 col-md-12"> 
            <div class="sub-newsletter text-white  text-center">
                 <h2 class="mb-3">
                    <i class="fa fa-paper-plane-o me-2"></i>
                     Subscribe To get Latest Updates</h2>
                      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> -->
                      <div class="input-group text-center sub-input mt-1 w-60 ms-auto me-auto mt-6"> 
                        <input type="text" class="form-control input-lg " placeholder="Enter your Email" id="subscribeemail" name="subscribeemail" oninput="myemailfunctionofsub()">
                        <button type="button" class="btn btn-primary btn-lg br-te-3  br-be-3" id="btn_save1" style="height: 46px;"> 
                            Subscribe </button>


                         </div> 
                        </div>
                        <span id="subscribeemailid" class="text-danger font-weight-bold errormess"></span>
                     </div> </div> </div> </div></form>


</div>



<section>
    <div class="container">
            <div class="section-title center-block text-center"> 
                <h2 style="margin-top:70px;">Top <span> Free </span> Softwares & Apps</h2>
                     <!-- <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p> -->
            </div>


            <div class="panel panel-primary"> 
                <div class=""> 
                    <div class="tabs-menu "> 
                        
                         <ul class=" nav panel-tabs eductaional-tabs mb-6" role="tablist">
                     
                            <li class="nav-item active" onclick="onsumvalue(1)">

                            <input type="hidden"  id="inputId1">

                              <a class="nav-link active detailbutton" data-toggle="pill" href="#home" id="Software"><i class="fa-solid fa-laptop"></i>&nbsp;Software </a>
                            </li>
                            <li class="nav-item" onclick="onsumvalue(2)">
                              <a class="nav-link detailbutton" data-toggle="pill" href="#menu1" id="android"><i class="fa-brands fa-android"></i>&nbsp;Android App</a>
                            </li>
                            <li class="nav-item" onclick="onsumvalue(3)">
                              <a class="nav-link detailbutton" data-toggle="pill" href="#index3" id="iosapp"><i class="fa-brands fa-apple"></i>&nbsp;Ios App</a>
                            </li>
                            <li class="nav-item" onclick="onsumvalue(4)">
                                <a class="nav-link detailbutton" data-toggle="pill" href="#index4" id="ecommerce"><i class="fa-solid fa-dumpster"></i>&nbsp;E-commerce</a>
                              </li>

                              <li class="nav-item" onclick="onsumvalue(5)">
                                <a class="nav-link detailbutton" data-toggle="pill" href="#index5" id="website"><i class="fa-solid fa-globe"></i>&nbsp;Website</a>
                              </li>
                          </ul>
                    </div>
                </div>

                <!-- tab start -->
                <div class="tab-content container">
                      <div id="home1" class="tab-pane active d-flex gap-5 row justify-content-center flex-wrap" ><br>


                      <!-- <input type="text"> -->



                     <?php
                    $photo1 = 'http://localhost/Admin_applist/upload/';
                    foreach ($softwaredata as $rw => $value) {
                    echo '<div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 softwarediv" onclick="showSoftwareDetails(' .$value->softwareid. ', \'' .$value->softwarename. '\')" data-toggle="modal" data-target="#myModal">' .
                        '<div class="mx-2">' .
                        '<div class="card overflow-hidden cardhover" style="margin-top: 43px;">' .
                        '<div class="power-ribbon power-ribbon-top-left text-warning">' .
                        '<span class="bg-warning">' .
                        '<i class="fa fa-bolt"></i>' .
                        '</span>' .
                        '</div>' .
                        '<div class="item-card7-imgs">' .
                        '<a href="javascript:void(0);"></a>' .
                        '<img src="' .$value->photo1. '" alt="Dash" class="p-0" style="height:270px;width:310px;">' .
                        '</div>' .
                        '<div class="card-body"> ' .
                        '<div class="item-card7-desc">' .
                        '<div class="item-card7-text">' .
                        '<a href="javascript:void(0);" class="text-dark text-header" >' .
                        '<h4 class="mb-1 overflow-hidden headtext">' .$value->softwarename. '</h4>' .
                        '</a>' .
                        '<div style="text-align: left!important;">' .
                        '<p class="overflow-hidden paratext">' .$value->description. '</p>' .
                        '</div>' .
                        '</div>' .
                        '<a href="javascript:void(0);" class="btn btn-primary mt-3 hoverbutton" style="background-color: #5e4bdb;" onclick="showSoftwareDetails(' .$value->softwareid. ', \'' .$value->softwarename. '\')" data-toggle="modal" data-target="#myModal">' .
                        '<i class="fa-solid fa-laptop"></i> Get free demo</a>' .
                        '<a href="javascript:void(0);" class="btn btn-primary mt-3 btn-spacing detailbutton" style="background-color: #5e4bdb;" onclick="showSoftwareDetails(' .$value->softwareid. ', \'' .$value->softwarename. '\')" data-toggle="modal">' .
                        '<i class="fa-solid fa-download"></i> Download</a>' .
                        '</div>' .
                        '</div>' .
                        '</div>' .
                        '</div>' .
                        '</div>';
                }
                ?>
 

                            <!-- <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 softwarediv">
                        <div class="mx-2">
                            <div class="card overflow-hidden cardhover"><div class="power-ribbon power-ribbon-top-left text-warning"><span class="bg-warning"><i class="fa fa-bolt"></i></span></div><div class="item-card7-imgs"><a href="javascript:void(0);"></a><img src="<?=base_url() ?>Assets/imgs/messenger.svg" alt="Dash" class="p-0" style="height:270px;width:310px;"></div><div class="card-body"> <div class="item-card7-desc"><div class="item-card7-text"><a href="javascript:void(0);" class="text-dark text-header"><h4 class="mb-1">Whatsapp</h4></a><div style="text-align: left!important;"><p class="overflow-hidden" style="height:100px;">Integrate Barcode Scanner into Android and iOS App; Both Linear and 2D Supported. Try Demo. High-Speed Barcode Recognition for Mobile Apps. Scan Directly Mode. Download Free Trial! 30-day free trial. </p></div></div><a href="javascript:void(0);" class="btn btn-primary mt-3 hoverbutton" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i> Get free demo</a>  <a href="javascript:void(0);" class="btn btn-primary mt-3 btn-spacing detailbutton" style="background-color: #5e4bdb;"><i class="fa-solid fa-download"></i> Download</a></div></div></div></div></div> -->
             

                         </div>
                 </div>  
          </div>


    <ul class="pagination justify-content-center mb-2" id="pagination"></ul> 

    </div>

    </div>


</section>


   


        <section class="sptb reviewsection"> 
            <div class="about-1 cover-image background-size sptb pt-7 pb-7 bg-background-color" data-bs-image-src="../assets/images/banners/banner5.jpg" style="background: url(&quot;../assets/images/banners/banner5.jpg&quot;) center center;"> 
             <div class="content-text mb-0 text-white info reviewcontentbox">
                <div class="container"> <div class="row text-center">
                    <div class="col-lg-4 col-md-4 mt-3 mb-3">
                        
                        <i class="fa-regular fa-comment fa-2xl counter-status-icon me-3 mb-1"></i>
                        <div class="counter-status md-mb-0">
                            <h2 class="counter  mb-3">1,736,94</h2> 
                            <h5>Reviews</h5> 
                        </div> 
                    </div>

                 <div class="col-lg-4 col-md-4 mt-3 mb-3">
                     <i class="fa fa-download counter-status-icon fs-25 me-3 mb-1"></i> 
                     <div class="counter-status md-mb-0"> 
                        <h2 class="counter  mb-3">+2,537,325</h2> 
                        <h5>Downloads</h5> 
                    </div>
                 </div> 

                 <div class="col-lg-4 col-md-4 mt-3 mb-3"> 
                    <i class="fa fa-refresh  fs-25 counter-status-icon me-3 mb-1"></i>
                     <div class="counter-status"> 
                        <h2 class="counter mb-3">43,524</h2> 
                        <h5>Program version Listed</h5>
                     </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
 </section>





 <div class="container mt-4 ">
                <h2 class="text-center" style="font-weight: bold;color: #073d60;">Testimonials</h2>
        <ul class="slider">

                    <div class="testimonia-img mx-2 mb-3 card p-3" style="border-radius:20px;border-bottom:4px solid #1d3b91;"> 
                      <img src="<?= base_url();?>Assets/imgs/carasoul.jpg" class="img-thumbnail mx-auto d-block rounded-circle alt=" alt="" style="width:98px;height: 100px!important;">
                          <p class="text-center">
                              <i class="fa fa-quote-left"></i> 
                              Duis aute irure dolor in reprehenderit velit  dolore eu fugiat <br> nulla pariatur. Excepteur sintoccaecat cupidatat, sunt in<br> culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis 
                          </p>
      
                      <div class="testimonia-data text-center">
                           <h4 class="text-center">Shivani Patil</h4>
                               <div class="d-flex justify-content-center">
                                   <div>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                  </div>
                              </div>
                          </div>
                       </div>


                    <div class="testimonia-img mx-2 mb-3 card p-3" style="border-radius:20px;border-bottom:4px solid #1d3b91;"> 
                      <img src="<?= base_url();?>Assets/imgs/carasoul1.jpg" class="img-thumbnail mx-auto d-block rounded-circle alt=" alt="" style="width:98px;height: 100px!important;">
                          <p class="text-center">
                              <i class="fa fa-quote-left"></i> 
                              Duis aute irure dolor in reprehenderit velit  dolore eu fugiat <br> nulla pariatur. Excepteur sintoccaecat cupidatat, sunt in<br> culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis 
                          </p>
      
                      <div class="testimonia-data text-center">
                           <h4 class="text-center">Dipali Khot</h4>
                               <div class="d-flex justify-content-center">
                                   <div>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                  </div>
                              </div>
                          </div>
                       </div>
                   
                       
                    <div class="testimonia-img mx-2 mb-3 card p-3" style="border-radius:20px;border-bottom:4px solid #1d3b91;"> 
                      <img src="<?= base_url();?>Assets/imgs/carasoul3.jpg" class="img-thumbnail mx-auto d-block rounded-circle alt=" alt="" style="width:98px;height: 100px!important;">
                          <p class="text-center">
                              <i class="fa fa-quote-left"></i> 
                              Duis aute irure dolor in reprehenderit velit esse  eu fugiat <br> nulla pariatur. Excepteur sintoccaecat cupidatat, sunt in<br> culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis 
                          </p>
      
                      <div class="testimonia-data text-center">
                           <h4 class="text-center">Kapil Khot</h4>
                               <div class="d-flex justify-content-center">
                                   <div>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                      <i class="fas fa-star" style="color:#f5de20;"></i>
                                  </div>
                              </div>
                          </div>
                       </div>
                      
            </ul>

        </div>

<!-- top paid apps -->



<section class="sptb pb-0">
    <div class="container">
        
            <!-- slider -->
            <!-- data fetch from database -->
            <ul class="slider5 m-0 m-lg-5">

           
     <?php 
                                             
     foreach($last as $rw=>$value){
                                                                 
         echo '
          <li>
             <div class="mx-2">
                 <div class="card overflow-hidden cardhover" data-toggle="modal" data-target="#myModal"
                 onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                             </div>

                        <div class="item-card7-imgs"> 

                        
                           <a href="javascript:void(0);"></a>
                            <img src="'.$url.$value->photo1.'" alt="Dash" class="p-0" style="height:270px;width:310px;">
                        </div>

                         <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1 overflow-hidden headtext">'.$value->softwarename.'</h4>
                                       </a> 
                                       

                                       <div style="text-align: left!important;">
                                         <p class="overflow-hidden paratext">'.$value->description.'</p>    
                                       </div>

                                    </div> 
                                 
                                      <a href="javascript:void(0);" class="btn btn-primary mt-3 view-demo-btn hoverbutton"
                                         style="background-color: #5e4bdb;" data-toggle="modal" data-target="#myModal"
                                         onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')">
                                         <i class="fa-solid fa-laptop"></i> Get free demo
                                      </a>

                                        <a href="javascript:void(0);" class="btn btn-primary mt-3 detailbutton" style="background-color: #5e4bdb;" data-toggle="modal" data-target="#myModal"
                                        onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')">
                                        <i class="fa-solid fa-download"></i> Download
                                        </a>
                                
                                 </div>
                         </div>                       
                </div> 
            </div>
                </li>

                     ';
               
    } ?> 
                             
            </ul> 
        </div>   
 </section>



 <!-- blog part -->


 <!-- <div class="container mt-0 mt-lg-4">
                <h2 class="text-center">Blog details</h2>
        <div class="slider4 row">

                     <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 softwarediv">
                        <div class="mx-2">
                            <div class="card overflow-hidden blogcard">
                                <div class="item-card7-imgs">
                                    <a href="javascript:void(0);"></a>
                                    <img src="<?=base_url() ?>Assets/imgs/bgimages/blog1.webp" alt="Dash" class="p-0" style="width: 294px;height: 196px;">
                                </div>

                                <h5 class="headingblog">TRAVEL</h5>

                                <div class="card-body"> 
                                    <div class="item-card7-desc">
                                        <div class="item-card7-text textblog">
                                            <a href="javascript:void(0);" class="text-dark text-header">
                                                <h5 class="mb-3 blogheading">Results professional report Results professional report
                                                </h5>
                                            </a>

                                            <div style="float:left;" class="">
                                            <i class="fa-regular fa-clock"></i> 16-01-2024
                                            </div><br>

                                            
                                            <div style="text-align: left!important;" class="mt-2">
                                            <p class="overflow-hidden" style="height:100px;">Integrate Barcode Scanner into Android and iOS App; Both Linear and 2D Supported. Try Demo. High-Speed Barcode Recognition for Mobile Apps. Scan Directly Mode. Download Free Trial! 30-day free trial. </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 softwarediv">
                        <div class="mx-2">
                            <div class="card overflow-hidden blogcard">
                                <div class="item-card7-imgs">
                                    <a href="javascript:void(0);"></a>
                                    <img src="<?=base_url() ?>Assets/imgs/bgimages/blog1.webp" alt="Dash" class="p-0" style="width: 294px;height: 196px;">
                                </div>

                                <h5 class="headingblog">TRAVEL</h5>

                                <div class="card-body"> 
                                    <div class="item-card7-desc">
                                        <div class="item-card7-text textblog">
                                            <a href="javascript:void(0);" class="text-dark text-header">
                                                <h5 class="mb-3 blogheading">Results professional report Results professional report
                                                </h5>
                                            </a>

                                            <div style="float:left;" class="">
                                            <i class="fa-regular fa-clock"></i> 16-01-2024
                                            </div><br>

                                            
                                            <div style="text-align: left!important;" class="mt-2">
                                            <p class="overflow-hidden" style="height:100px;">Integrate Barcode Scanner into Android and iOS App; Both Linear and 2D Supported. Try Demo. High-Speed Barcode Recognition for Mobile Apps. Scan Directly Mode. Download Free Trial! 30-day free trial. </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                   


                    <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 softwarediv">
                        <div class="mx-2">
                            <div class="card overflow-hidden blogcard">
                                <div class="item-card7-imgs">
                                    <a href="javascript:void(0);"></a>
                                    <img src="<?=base_url() ?>Assets/imgs/bgimages/blog1.webp" alt="Dash" class="p-0" style="width: 294px;height: 196px;">
                                </div>

                                <h5 class="headingblog">TRAVEL</h5>

                                <div class="card-body"> 
                                    <div class="item-card7-desc">
                                        <div class="item-card7-text textblog">
                                            <a href="javascript:void(0);" class="text-dark text-header">
                                                <h5 class="mb-3 blogheading">Results professional report Results professional report
                                                </h5>
                                            </a>

                                            <div style="float:left;" class="">
                                            <i class="fa-regular fa-clock"></i> 16-01-2024
                                            </div><br>

                                            
                                            <div style="text-align: left!important;" class="mt-2">
                                            <p class="overflow-hidden" style="height:100px;">Integrate Barcode Scanner into Android and iOS App; Both Linear and 2D Supported. Try Demo. High-Speed Barcode Recognition for Mobile Apps. Scan Directly Mode. Download Free Trial! 30-day free trial. </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                       
                
                      
</div> -->




<section class="sptb pb-0">
    <div class="container">
            <!-- <button class="btn blogbutton mt-5">
                <i class="fa-solid fa-circle icon" style="color:#df0a7b;"></i>&nbsp; 
                 Blog Details &nbsp;
                <i class="fa-solid fa-circle icon" style="color:#df0a7b;"></i>
            </button><br><br> -->
            <h2 class="text-center">News & Article</h2>
            <!-- slider -->
            <!-- data fetch from database -->
            <ul class="slider2 m-0 m-lg-5">

           
     <?php 
                                             
     foreach($blog as $rw=>$value){
                                                                 
         echo '
    
          <li class="styleforli mx-2">
                 <div class="card shadow-none px-2 overflow-hidden myblogcard" style="margin-top:-62px;">
                    <a class="card-body px-2" href="'.base_url().'Postcomment/update/'.$value->blogid.'" style="margin-bottom: -13px;"> 
                        <div class="" > 
                            <div class="item-card7-text d-flex justify-content-between">

                                <div><h6>'.$value->publishdate.'</h6> </div>

                                <div>
                                    <a href="javascript:void(0);" class="text-dark text-header">
                                        <h4 class="mb-0 overflow-hidden " style="color:#5e4bdb;font-size: 15px;">'.$value->blogTypeName.'</h4>
                                    </a> 
                                </div>
                                       
                             </div>

                            <a href="javascript:void(0);" class="text-dark text-header">
                                <h4 class="mb-0 overflow-hidden headtext" style="color:#5e4bdb;height:25px">'.$value->bloglabel1.'</h4>
                            </a> 

                            
                            <div class="" style="text-align: left!important; ">
                               <a href="'.base_url().'Postcomment/update/'.$value->blogid.'">
                                   <p class="overflow-hidden paratext" style="line-height:24px;">'.$value->shortdescription.'</p>  
                                 </a>  
                            </div>

                        </div>
                                 <br>

                                 <a href="'.base_url().'Postcomment/update/'.$value->blogid.'">
                                 <div class="item-card7-imgs m-0 p-0" > 
                                  <img src="'.$url.$value->photo1.'" alt="Dash" class="p-0">
                                 </div>
                              </a>
                         </a>                       
                </div> 
                </li>

                     ';
               
    } ?> 
                             
            </ul> 
        </div>   
 </section>
        </div>
 
        <!-- <a href="javascript:void(0);" class="btn btn-primary mt-3 view-demo-btn hoverbutton"
                                         style="background-color: #5e4bdb;" data-toggle="modal" data-target="#myModal"
                                         onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')">
                                         <i class="fa-solid fa-laptop"></i> Get free demo
                                      </a>

                                        <a href="javascript:void(0);" class="btn btn-primary mt-3 detailbutton" style="background-color: #5e4bdb;" data-toggle="modal" data-target="#myModal"
                                        onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')">
                                        <i class="fa-solid fa-download"></i> Download
                                        </a> -->
 


 <!-- Pop up -->
 <div id="ouibounce-modal" class="popup_desk active_popup">
    <div class="col-12 col-sm-12 col-md-5 col-lg-8 popup_desk_main_div">
        <div class="row popup_desk_auto_scroll_div">
            <div class="popup_desk_close_btn" id="popup">
                <span class="popup_desk_close_icon" onclick="hide()"></span>
            </div>
            <div class="col-12 col-sm-12 col-md-5 col-lg-6 background_image_exit_outer" style="margin-top:20px;">
                <div class="top_gradient_div"></div>
                <div class="lines_img_bg"></div>
                <div class="d-flex align-items-center justify-content-center flex-column">
                    <div class="ss_icon_outer">
                        <img src="<?= base_url();?>Assets/imgs/favicon1.png" width="22px" height="35px">

                    </div>
                    <div class="text_background_exit">
                        <h2>Reliable Software Advice</h2>
                        <p>“Thanks to Softwarecompany, I was able to discover the perfect match of software solution that aligns perfectly with my choice of requirements. Highly recommended!"</p>
                    </div>
                    <div class="row tod_main_outer">
                        <div class="col-md-3">
                            <img src="<?= base_url();?>Assets/imgs/popadmin.jpg" style="border-radius:20px;">
                        </div>
                        <div class="col-md-9 pl-1">
                            <h4>Kartika Maske </h4>
                            <p>Softwarecompany User</p>
                        </div>
                    </div>
                </div>
                <div class="bottom_gradient_div"></div>
            </div>

            <div class="col-12 col-sm-12 col-md-7 col-lg-6 d-flex align-items-center justify-content-center flex-column">
                <div class="popup_desk_heading_div">
                    <h5 class="popup_desk_title" style="margin-top: 18px;">Information for Contact</h5>
                </div>
                <div class="popup_desk_form_main">
                    <div class="popup_desk_form_div ">
                        <form role="form" id="Form2" class="" data-toggle="validator" enctype="multipart/form-data" action="" method="post"> 
                           
                            <div class="row">
                                <div class="col-md-6 exit_input_col exit_name_icon_input popup_desk_field_group name_input_validation">
                                    <label>Name <span class="text-danger">*</span></label>
                                    <input class="popup_desk_field"  type="text"  placeholder="Enter your Name" id="fullname" name="fullname" autocomplete="off" value="">
                                </div>
                                <div class="col-md-6 exit_input_col exit_email_icon_input popup_desk_field_group">
                                    <label>Business Email <span class="text-danger">*</span></label>
                                    <input class="popup_desk_field" type="email" placeholder="Enter your Business Email" id="email" name="email" autocomplete="off" value="" oninput="myFunctionemail()">
                                   <span id="emailids" class="text-danger font-weight-bold"></span>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 exit_input_col exit_phone_icon_input popup_desk_field_group mobile_no_field">
                                    <label>Mobile Number <span class="text-danger">*</span></label>
                                    <input class="popup_desk_field" type="number" placeholder="Enter your Mobile Number" id="mobile" name="mobile" autocomplete="off" value="" oninput="myFunction()">
                                 <span id="mobileno" class="text-danger font-weight-bold"></span>

                                    
                                </div>
                                <div class="col-md-6 exit_input_col exit_comp_name_icon_input popup_desk_field_group">
                                    <label>Company Name</label>
                                    <input class="popup_desk_field" type="text" placeholder="Enter your Company Name" id="companyname" name="companyname" autocomplete="off">
                                </div>


                                <div class="col-md-12">
                                    <label>Requirement</label>
                                    <textarea id="requirement" name="requirement" placeholder="Enter messages" data-error="Message is required." autocomplete="off" class="form-control w-100 popup_desk_field" value=""></textarea>
                                </div>

                            </div>
                            <div class="popup_desk_submit">
                                <button type="button" class="popup_desk_submit_btn form_1_submit" id="btn_popup" style="height:46px;" value="" >Submit</button>
                            </div>

                            <!-- <div class="popup_desk_trusted_line_bottom">
                                <span class="popup_desk_shield_img"><img src="https://www.softwaresuggest.com/assets2/img/exit_intent_img/sheild.svg"></span><span>Trusted By 1,100,008+ Happy &amp; Satisfied Businesses</span>
                            </div>
                                                            <div class="popup_desk_tnc_line">
                                                                            <span>By submitting, you agree to our <a target="_blank" rel="noopener" href="https://www.softwaresuggest.com/tos">Terms of Use</a> and <a target="_blank" rel="noopener" href="https://www.softwaresuggest.com/privacy"> Privacy Policy</a></span>
                                                                    </div> -->

                                                    </form>






                        <div class="popup_desk_form_2" data-hs-cf-bound="true">
                            <input type="hidden" class="ssleadpost_lead_id" name="ssleadpost[lead_id]">
                            <div class="row">
                                <div class="col-md-6 exit_input_col exit_select_industry_icon_input popup_desk_field_group">
                                    <label>Industry*</label>
                                    <select class="popup_desk_field" required="1" name="ssleadpost[industry]">
                                                                            <option value="">Select Industry</option>
                                                                            <option value="Accounting / CPA">Accounting / CPA</option>
                                                                            <option value="Advertising">Advertising</option>
                                                                            <option value="Agriculture">Agriculture</option>
                                                                            <option value="Architects">Architects</option>
                                                                            <option value="Architecture">Architecture</option>
                                                                            <option value="Auto Dealership">Auto Dealership</option>
                                                                            <option value="Ayurvedic / Panchkarma">Ayurvedic / Panchkarma</option>
                                                                            <option value="Banking">Banking</option>
                                                                            <option value="Banking &amp; Mortgage">Banking / Mortgage</option>
                                                                            <option value="BPO">BPO</option>
                                                                            <option value="Construction / Contracting">Construction / Contracting</option>
                                                                            <option value="Consulting">Consulting</option>
                                                                            <option value="Corporate">Corporate</option>
                                                                            <option value="Dental">Dental</option>
                                                                            <option value="Diet &amp; Nutrition">Diet &amp; Nutrition</option>
                                                                            <option value="Day Care Hospital">Day Care Hospital</option>
                                                                            <option value="Distribution">Distribution</option>
                                                                            <option value="E-commerce Sector">E-commerce Sector</option>
                                                                            <option value="Education">Education</option>
                                                                            <option value="Engineering">Engineering</option>
                                                                            <option value="FMCG">FMCG</option>
                                                                            <option value="Financial Sector / Fintech">Financial Sector / Fintech</option>
                                                                            <option value="Food / Beverage">Food / Beverage</option>
                                                                            <option value="Gym / Fitness / Aerobics">Gym / Fitness / Aerobics</option>
                                                                            <option value="Government Agencies">Government Agencies</option>
                                                                            <option value="Government Contractors">Government Contractors</option>
                                                                            <option value="Healthcare / Social Services">Healthcare / Social Services</option>
                                                                            <option value="Homeopathic">Homeopathic</option>
                                                                            <option value="Hospitality / Travel">Hospitality / Travel</option>
                                                                            <option value="Insurance">Insurance</option>
                                                                            <option value="Interior Designers">Interior Designers</option>
                                                                            <option value="IT / Software Technology">IT / Software Technology</option>
                                                                            <option value="Jewellery">Jewellery</option>
                                                                            <option value="Legal / Law Firm">Legal / Law Firm</option>
                                                                            <option value="Logistics">Logistics</option>
                                                                            <option value="Manufacturing / Retail">Manufacturing / Retail</option>
                                                                            <option value="Maintenance / Field Service">Maintenance / Field Service</option>
                                                                            <option value="Manufacturing">Manufacturing</option>
                                                                            <option value="Manpower / Labor">Manpower / Labor</option>
                                                                            <option value="Marketing Services">Marketing Services</option>
                                                                            <option value="Media / Newspaper">Media / Newspaper</option>
                                                                            <option value="Nonprofit">Nonprofit</option>
                                                                            <option value="Oil / Gas">Oil / Gas</option>
                                                                            <option value="Ophthalmology / Eye Disorder Clinic">Ophthalmology / Eye Disorder Clinic</option>
                                                                            <option value="Other">Other</option>
                                                                            <option value="Petrol Pump">Petrol Pump</option>
                                                                            <option value="Pharma Manufacturing">Pharma Manufacturing</option>
                                                                            <option value="Pharmaceuticals">Pharmaceuticals</option>
                                                                            <option value="Physiotherapy">Physiotherapy</option>
                                                                            <option value="Property Management">Property Management</option>
                                                                            <option value="Real Estate">Real Estate</option>
                                                                            <option value="Real Estate Brokerage">Real Estate Brokerage</option>
                                                                            <option value="Recruitment">Recruitment</option>
                                                                            <option value="Retail">Retail</option>
                                                                            <option value="Retail / Wholesale">Retail / Wholesale</option>
                                                                            <option value="Retail Grocery">Retail Grocery</option>
                                                                            <option value="Retail Supermarket">Retail Supermarket</option>
                                                                            <option value="School">School</option>
                                                                            <option value="Software / Technology">Software / Technology</option>
                                                                            <option value="Stock Market">Stock Market</option>
                                                                            <option value="Telecommunications">Telecommunications</option>
                                                                            <option value="Textile / Garment">Textile / Garment</option>
                                                                            <option value="Trading">Trading</option>
                                                                            <option value="Transportation">Transportation</option>
                                                                            <option value="University">University</option>
                                                                            <option value="University / College">University / College</option>
                                                                            <option value="Utilities">Utilities</option>
                                                                            <option value="Veterinary">Veterinary</option>
                                                                            <option value="Wholesale">Wholesale</option>
                                                                        </select>
                                </div>
                                <div class="col-md-6 exit_input_col exit_city_icon_input popup_desk_field_group">
                                    <label>City*</label>
                                    <input class="popup_desk_field" type="text" pattern="^[a-zA-Z0-9].*" placeholder="Enter your City" value="" required="1" name="ssleadpost[city]">
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-md-6 exit_input_col exit_requirement_icon_input popup_desk_field_group">
                                    <label>Requirements*</label>
                                    <textarea class="popup_desk_field popup_desk_field_text_area" required="1" placeholder="Enter your Requirements" pattern="^[a-zA-Z0-9].*" value="" name="ssleadpost[description]"></textarea>
                                </div>
                                <div class="col-md-6 exit_input_col exit_designation_icon_input popup_desk_field_group">
                                    <label>Designation*</label>
                                    <select class="popup_desk_field" required="1" name="ssleadpost[designation]">
                                                                                <option value="">Select Designation</option>
                                                                                <option value="Accountant">Accountant</option>
                                                                                <option value="Admin">Admin</option>
                                                                                <option value="Analyst">Analyst</option>
                                                                                <option value="Assistant Manager">Assistant Manager</option>
                                                                                <option value="BDM">BDM</option>
                                                                                <option value="CEO">CEO</option>
                                                                                <option value="Chartered Accountant">Chartered Accountant</option>
                                                                                <option value="Chairman">Chairman</option>
                                                                                <option value="Chief Financial Officer">Chief Financial Officer</option>
                                                                                <option value="Clerk">Clerk</option>
                                                                                <option value="COO">COO</option>
                                                                                <option value="CTO">CTO</option>
                                                                                <option value="CXO">CXO</option>
                                                                                <option value="Consultant">Consultant</option>
                                                                                <option value="Committee Member">Committee Member</option>
                                                                                <option value="Designer">Designer</option>
                                                                                <option value="Developer">Developer</option>
                                                                                <option value="Director">Director</option>
                                                                                <option value="Doctor">Doctor</option>
                                                                                <option value="Engineer">Engineer</option>
                                                                                <option value="Executive">Executive</option>
                                                                                <option value="Finance Manager">Finance Manager</option>
                                                                                <option value="Freelancer">Freelancer</option>
                                                                                <option value="General Manager">General Manager</option>
                                                                                <option value="Head">Head</option>
                                                                                <option value="HR Executive">HR Executive</option>
                                                                                <option value="HR Manager">HR Manager</option>
                                                                                <option value="IT Manager">IT Manager</option>
                                                                                <option value="Librarian">Librarian</option>
                                                                                <option value="Managing Director">Managing Director</option>
                                                                                <option value="Marketing Manager">Marketing Manager</option>
                                                                                <option value="Manager">Manager</option>
                                                                                <option value="Operations Head">Operations Head</option>
                                                                                <option value="Owner/Proprietor">Owner/Proprietor</option>
                                                                                <option value="President">President</option>
                                                                                <option value="Partner">Partner</option>
                                                                                <option value="Principal">Principal</option>
                                                                                <option value="Professor">Professor</option>
                                                                                <option value="Promoter">Promoter</option>
                                                                                <option value="Purchase Manager">Purchase Manager</option>
                                                                                <option value="Regional Director">Regional Director</option>
                                                                                <option value="Regional Manager">Regional Manager</option>
                                                                                <option value="Sales Manager">Sales Manager</option>
                                                                                <option value="Secretary">Secretary</option>
                                                                                <option value="Society Member">Society Member</option>
                                                                                <option value="Supervisor">Supervisor</option>
                                                                                <option value="Teacher">Teacher</option>
                                                                                <option value="Technical">Technical</option>
                                                                                <option value="Trustee">Trustee</option>
                                                                                <option value="Vice President">Vice President</option>
                                                                            </select>
                                </div>
                            </div>
                            <div class="popup_desk_submit">
                                <button type="submit" class="popup_desk_submit_btn form_2_submit">Submit</button>
                            </div>
                            <div class="popup_desk_trusted_line_bottom">
                                <span class="popup_desk_shield_img"><img src="https://www.softwaresuggest.com/assets2/img/exit_intent_img/sheild.svg"></span><span>Trusted By 1,100,008+ Happy &amp; Satisfied Businesses</span>
                            </div>
</div>
                        <div class="popup_desk_form_3" data-hs-cf-bound="true">
                            <input type="hidden" class="ssleadpost_lead_id" name="ssleadpost[lead_id]">
                            <div class="row">
                                                                <div class="col-md-6 exit_input_col exit_select_employee_icon_input popup_desk_field_group no_of_employees_old">
                                    <label>No Of Employees*</label>
                                    <select class="popup_desk_field" required="1" name="ssleadpost[no_of_employees]">
                                                                            <option value="">Select No. of Employees</option>
                                                                            <option value="Less than 50
                                            ">Less than 50</option>
                                                                            <option value="50-100">50-100</option>
                                                                            <option value="100-500">100-500</option>
                                                                            <option value="500-1000">500-1000</option>
                                                                            <option value="More than 1000">More than 1000</option>
                                                                            </select>
                                </div>
                                                                                                <div class="col-md-6 exit_input_col exit_software_user_icon_input popup_desk_field_group">
                                                                        <label>No. of Software Users*</label>
                                    <select class="popup_desk_field sidebar_form_input" required="1" name="ssleadpost[no_of_users]" aria-label="no_of_users">
                                        <option value="">Select No. of Software Users</option>
                                                                                    <option value="1 - 5 Users">1 - 5 Users</option>
                                                                                    <option value="6 - 9 Users">6 - 9 Users</option>
                                                                                    <option value="10 - 19  Users">10 - 19  Users</option>
                                                                                    <option value="20 - 29 Users">20 - 29 Users</option>
                                                                                    <option value="30 - 39  Users">30 - 39  Users</option>
                                                                                    <option value="40 - 49  Users">40 - 49  Users</option>
                                                                                    <option value="50 - 99  Users">50 - 99  Users</option>
                                                                                    <option value="100 -199  Users">100 -199  Users</option>
                                                                                    <option value="200 - 499 Users">200 - 499 Users</option>
                                                                                    <option value="500 - 999 Users">500 - 999 Users</option>
                                                                                    <option value="1000 Users and Above">1000 Users and Above</option>
                                                                            </select>
                                </div>
                                                                <div class="col-md-6 exit_input_col exit_time_to_call_icon_input popup_desk_field_group">
                                    <label>Preferred Time To Call*</label>
                                    <select class="popup_desk_field" required="1" name="ssleadpost[prefer_time_to_call]">
                                                                                <option value="">Select Preferred Time To Call</option>
                                                                                <option value="All Day">All Day</option>
                                                                                <option value="Morning">Morning</option>
                                                                                <option value="Noon">Noon</option>
                                                                                <option value="Evening">Evening</option>
                                                                            </select>
                                </div>
                                                                <div class="col-md-6 exit_input_col exit_select_deployment_icon_input popup_desk_field_group">
                                    <label>Deployment*</label>
                                    <select class="popup_desk_field" required="1" name="ssleadpost[deployment]">
                                                                                <option value="">Select Deployment</option>
                                                                                <option value="Cloud Based">Cloud Based</option>
                                                                                <option value="On Premises">On Premises</option>
                                                                                <option value="Hybrid">Hybrid</option>
                                                                                <option value="Any">Any</option>
                                                                            </select>
                                </div>
                                                            </div>
                            <div class="popup_desk_submit">
                                <button type="submit" class="popup_desk_submit_btn form_3_submit">Submit</button>
                            </div>
                            <div class="popup_desk_trusted_line_bottom">
                                <span class="popup_desk_shield_img"><img src="https://www.softwaresuggest.com/assets2/img/exit_intent_img/sheild.svg"></span><span>Trusted By 1,100,008+ Happy &amp; Satisfied Businesses</span>
                            </div>
</div>
                                                <div class="popup_desk_form_4" data-hs-cf-bound="true">
                            <input type="hidden" class="ssleadpost_lead_id" name="ssleadpost[lead_id]">
                            <div class="row">
                                <div class="col-md-12 exit_current_soft_icon_input exit_input_col popup_desk_field_group">
                                    <label>Current software*</label>
                                    <input class="popup_desk_field" type="text" placeholder="Enter your Current Software" pattern="^[a-zA-Z0-9].*" value="" required="1" name="ssleadpost[other_software]">
                                </div>
                                <div class="col-md-12 exit_input_col exit_reason_to_change_icon_input popup_desk_field_group">
                                    <label>Reason to Changes*</label>
                                    <input type="text" class="popup_desk_field" required="1" placeholder="Enter Reason to Changes" value="" pattern="^[a-zA-Z0-9].*" name="ssleadpost[reason_to_change]">
                                </div>
                            </div>
                            <div class="popup_desk_submit">
                                <button type="submit" class="popup_desk_submit_btn form_4_submit">Submit</button>
                            </div>
                            <div class="popup_desk_trusted_line_bottom">
                                <span class="popup_desk_shield_img"><img src="https://www.softwaresuggest.com/assets2/img/exit_intent_img/sheild.svg"></span><span>Trusted By 1,100,008+ Happy &amp; Satisfied Businesses</span>
                            </div>
</div>
                                                <div class="popup_desk_thanks_msg">
                            <div class="popup_thanks_center">
                                <div class="green_tick_success">
                                    <img src="https://www.softwaresuggest.com/assets2/img/exit_intent_img/check_success.svg">
                                </div>
                                <div class="popup_desk_thanks_msg_text">
                                    <h3 class="thanks_text_popup">Thank you for the enquiry. </h3>
                                    <h6>One of our software  analysts will contact you in next 1 hour.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup_desk_beckdrop"></div>
</div>

</div>


<div class="modal fade" id="myModal" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
      <div class="modal-content">
      <form role="form" id="Form" enctype="multipart/form-data" action="" method="post">

      <input type="hidden" class="form-control" id="viewdemoid" placeholder="" name="viewdemoid" value="<?php if(!empty($dataa[0]->viewdemoid)){echo $dataa[0]->viewdemoid;}?>">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title font-weight-bold">Get Free Demo Download</h4>
          <button type="button" class="close d-none" data-dismiss="modal" id="modelclose" >&times;</button>

        </div>
        <!-- Modal body -->
        <div class="modal-body">
            <input type="text" id="softwareid" name="softwareid" hidden>

            <input type="number" value="" class="form-control" placeholder="Contact Number" onKeyPress="if(this.value.length==10) return false;" id="mobilenumber" name="mobilenumber" oninput="mobileforviewdemo()" >
            <span id="mobileviewmessage" class="text-danger font-weight-bold"></span>
            <br>

            <button type="button" class="btn mb-4" style="float:right;background-color:#2f256d;color:white;" id="btn_save" >Get Demo</button>
        </div>
     </form>
        
        
      </div>
    </div>
  </div>

  

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<!-- <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> -->
 <script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/PopupCreate.js"></script>
 <script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/SubscribeCreate.js"></script>


<!-- ajax -->
<script>

function onsumvalue(id){
    // alert(id);

    photo_typeId = document.getElementById("inputId1").value = id;
    
    // alert(photo_typeId);

$.ajax({

url:base_path+"Responsive/datatoclick",
method: "POST",

data:{'photo_typeId':photo_typeId},
// dataType: 'json',

success: function(data){
    console.log("mylist",data);
    $('#home1').empty();
    var xys=JSON.parse(data);
    
    var uploadURL ='http://localhost/Admin_applist/upload/';
    var result='';
    for(i=0;i<xys.length;i++){

        result += '<div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 softwarediv" onclick="showSoftwareDetails(' + xys[i]['softwareid'] + ', \'' + xys[i]['softwarename'] + '\')" data-toggle="modal" data-target="#myModal">'+
        '<div class="mx-2">'+
        '<div class="card overflow-hidden cardhover">'+
            '<div class="power-ribbon power-ribbon-top-left text-warning">'+
                  '<span class="bg-warning">'+     
                         '<i class="fa fa-bolt"></i>'+
                  '</span>'+
            '</div>'+
                        
         '<div class="item-card7-imgs">'+ 
                '<a href="javascript:void(0);"></a>'+
                     '<img src="'+uploadURL+xys[i]['photo1']+'" alt="Dash" class="p-0" style="height:270px;width:310px;">'+
         '</div>'+
                        
        '<div class="card-body"> '+
           '<div class="item-card7-desc">'+ 
              '<div class="item-card7-text">'+ 
                  '<a href="javascript:void(0);" class="text-dark text-header">'+
                      '<h4 class="mb-1 overflow-hidden" style="height:65px;">'+xys[i]['softwarename']+'</h4>'+
                  '</a>'+ 
                                                               
               '<div style="text-align: left!important;">'+
                  '<p class="overflow-hidden"style="height:120px;">'+xys[i]['description']+'</p>'+ 
                '</div>'+
          '</div>'+ 
                                                         
          '<a href="javascript:void(0);" class="btn btn-primary mt-3 hoverbutton" style="background-color: #5e4bdb;" onclick="showSoftwareDetails(' + xys[i]['softwareid'] + ', \'' + xys[i]['softwarename'] + '\')" data-toggle="modal" data-target="#myModal">'+
      '<i class="fa-solid fa-laptop"></i> Get free demo</a>'+

       '<a href="javascript:void(0);" class="btn btn-primary mt-3 btn-spacing detailbutton" style="background-color: #5e4bdb;"onclick="showSoftwareDetails(' + xys[i]['softwareid'] + ', \'' + xys[i]['softwarename'] + '\')" data-toggle="modal" data-target="#myModal" >'+
       '<i class="fa-solid fa-download"></i> Download</a>'+
                                                        
 '</div>'+
'</div>'+                       
'</div>'+ 
'</div>'+
                        '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>';

    }
    $('#home1').append(result);




    var $pagination = $('#pagination');
                           // here home is id for append & softwarediv is a class used in div
                   var $items = $('#home1 .softwarediv');
                   var itemCount = $items.length;
                   var pageCount = Math.ceil(itemCount / itemsPerPage);

                   $pagination.empty(); // Clear existing pagination

                   for (var i = 1; i <= pageCount; i++) {
                       $pagination.append('<li class="page-item"><a class="page-link text-primary" href="#">' + i + '</a></li>');
                   }

                   // Show the first page
                   showPage(1);

                   $pagination.on('click', 'a', function (e) {
                       e.preventDefault();
                       var pageNum = $(this).text();
                       showPage(pageNum);
                   });

                   function showPage(pageNum) {
                       var start = (pageNum - 1) * itemsPerPage;
                       var end = start + itemsPerPage;
                       $items.hide().slice(start, end).show();
                   }
    
}
});




}



function showSoftwareDetails(softwareid, softwarename) {
    // alert(softwareid);
    // alert(softwarename);


    $('#softwareid').val(softwareid);
    // Create an input box of type text dynamically and append it to a specific container (e.g., a modal)
    var inputBox = '<input type="text" value="' + softwareid + '" readonly>';
    $('#inputContainer').empty().append(inputBox);

    // Optionally, you can display the software name as well
    $('#softwareNameContainer').text('Software Name: ' + softwarename);

    // Open your modal or perform any other action to show the input box with the ID
    // $('#myModal').modal('show');
}

      
</script>





<script>
    
    $(document).ready(function () {
   var itemsPerPage = 9; // Number of items per page
   var $pagination = $('#pagination');
   var $items = $('.cardmainimagsizese');
   var itemCount = $items.length;
   var pageCount = Math.ceil(itemCount / itemsPerPage);

   // Initialize pagination
   for (var i = 1; i <= pageCount; i++) {
       $pagination.append('<li class="page-item"><a class="page-link text-primary" href="#">' + i + '</a></li>');
   }

   // Show the first page
   showPage(1);

   $pagination.on('click', 'a', function (e) {
       e.preventDefault();
       var pageNum = $(this).text();
       showPage(pageNum);
   });

   function showPage(pageNum) {
       var start = (pageNum - 1) * itemsPerPage;
       var end = start + itemsPerPage;
       $items.hide().slice(start, end).show();
   }

   // Example: Append other details to the container without affecting pagination
   var otherDetails = '<div class="other-details">Other details go here</div>';
   $('.container-for-other-details').append(otherDetails);
});

</script>


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/ViewdemoCreate.js"></script>

<!-- <script type="text/JavaScript">
    $('#btn_save1').on('click', function() {
    $('#popup').show();
   });

  </script> -->


  <!-- <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

  <script>

    function searchfunction() {
    //   alert("hello");
    //   var searchtext = document.getElementById('text').value;
    var searchtext = $('#text').val();

    if(searchtext=="")
    {

        // alert('enter fields');
    //     swal({
    //     title:"",
    //     text:"Please Enter Required Fields",
    //     type:"error",           
    // }); 
    }

    else{


        $.ajax({
        url:base_path+"Search/dataonsearchinput",
        method: "POST",

        data:{'searchtext':searchtext},
        // dataType: 'json',

        success: function(data){

        console.log("mylist",data);
        

        // $('#text').empty();

        $('#text').val('');

        var xys=JSON.parse(data);

        // var xys = data;

        var uploadURL ='http://localhost/Admin_applist/upload/';
        var result='';
        for(i=0;i<xys.length;i++){

        result += 
         '<div class="col-lg-4 col-xl-4 col-md-6 col-sm-6">'+
        '<div class="mx-2">'+
        '<div class="card overflow-hidden cardhover">'+
            '<div class="power-ribbon power-ribbon-top-left text-warning">'+
                  '<span class="bg-warning">'+     
                         '<i class="fa fa-bolt"></i>'+
                  '</span>'+
            '</div>'+
                        
         '<div class="item-card7-imgs">'+ 
                '<a href="javascript:void(0);"></a>'+
                     '<img src="'+uploadURL+xys[i]['photo1']+'" alt="Dash" class="p-0" style="height:270px;width:310px;">'+
         '</div>'+
                        
        '<div class="card-body"> '+
           '<div class="item-card7-desc">'+ 
              '<div class="item-card7-text">'+ 
                  '<a href="javascript:void(0);" class="text-dark text-header">'+
                      '<h4 class="mb-1 overflow-hidden" style="height:65px;">'+xys[i]['softwarename']+'</h4>'+
                  '</a>'+ 
                                                               
               '<div style="text-align: left!important;">'+
                  '<p class="overflow-hidden"style="height:120px;">'+xys[i]['description']+'</p>'+ 
                '</div>'+
          '</div>'+ 
                                                         
          '<a href="javascript:void(0);" class="btn btn-primary mt-3 hoverbutton" style="background-color: #5e4bdb;" onclick="showSoftwareDetails(' + xys[i]['softwareid'] + ', \'' + xys[i]['softwarename'] + '\')" data-toggle="modal" data-target="#myModal1">'+
      '<i class="fa-solid fa-laptop"></i> View Demo</a>'+

       '<a href="javascript:void(0);" class="btn btn-primary mt-3 btn-spacing detailbutton" style="background-color: #5e4bdb;">'+
       '<i class="fa-solid fa-circle-info"></i> Details</a>'+
                                                        
            '</div>'+
            '</div>'+                       
            '</div>'+ 
            '</div>'+
          '</div>'+
        '</div>'+
     '</div>'+
     '</div>';

    }
    $('#searchdatabox').append(result);


    var newTab = window.open('', '_blank');
                newTab.document.write('<html><head><title>Search Results</title></head><body>');
                newTab.document.write('<link rel="stylesheet" href="<?php echo base_url(); ?>Assets\\css\\style.css">');

                newTab.document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">');

                newTab.document.write('<div class="container">');
                newTab.document.write('<div class="row">');


                newTab.document.write($('#searchdatabox').html());
                newTab.document.write('</div>');
                newTab.document.write('</div>');


                newTab.document.write('</body></html>');
                newTab.document.close();
                   

                   
    
}
});
        
    }

    //   alert(searchtext);

      
    }

</script> -->




<!-- <script>
    function searchFunction() {
        // Get the value of the input field

      alert("hello");

        var searchText = document.getElementById('text').value;

      alert("hello");


        // Get the selected value of the category dropdown
        var categorySelect = document.getElementById('categorySelect');
        var selectedCategory = categorySelect.options[categorySelect.selectedIndex].value;

        // Log or use the values as needed
        console.log("Search Text: ", searchText);
        console.log("Selected Category: ", selectedCategory);

        // Perform other actions with the values
    }
</script> -->


<!-- <script>
        // Get the link element by its ID

        
        var myLink = document.getElementById('searchbutton');

        // Append a path to the existing href
        var newPath = base_path+'Search';

    // var newTab = window.open('', '_blank');

        myLink.href = newPath;

        // Alternatively, you can use the URL API for more flexibility
        // var currentUrl = new URL(myLink.href);
        // currentUrl.pathname = currentUrl.pathname + newPath;
        // myLink.href = currentUrl.href;
    </script> -->



    <!-- for input text -->
    <script>

    var myInput = document.getElementById('text');

    var myLink = document.getElementById('searchbutton');

    // Add an event listener to the input box
    myInput.addEventListener('input', function() {
        // Append the input value to the base path
        var newPath = base_path + 'Search/update/' + myInput.value;

        myLink.href = newPath;
    });
</script>

<!-- for dropdown -->
    <script>

        var dropdowntext = document.getElementById('mySelect');
                // alert('hello');
        var myLinkdrop = document.getElementById('searchbutton');
                // alert('hello');
        // Add an event listener to the input box
        dropdowntext.addEventListener('input', function() {
            // Append the input value to the base path
            var newPath = base_path + 'Search/update/' + dropdowntext.value;

            myLinkdrop.href = newPath;
        });
    </script>





  <script>
        function myFunction() {
            var mobileNumber = document.getElementById('mobile').value;
            var errorSpan = document.getElementById('mobileno');

            if (mobileNumber.length !== 10) {
                errorSpan.innerHTML = "Number Must be 10 Digits";
            } else {
                errorSpan.innerHTML = ""; // Clear the error message
            }
        }


        function mobileforviewdemo() {
            var mobileNumber = document.getElementById('mobilenumber').value;
            var errorSpan = document.getElementById('mobileviewmessage');

            if (mobileNumber.length !== 10) {
                errorSpan.innerHTML = "Number Must be 10 Digits";
            } else {
                errorSpan.innerHTML = ""; // Clear the error message
            }
        }


    </script>


    <script>
        function myFunctionemail() {
            var emails = document.getElementById('email').value;
            var errorSpan = document.getElementById('emailids');
            // alert("hii");

            if (emails.indexOf('@') <= 0) {
                errorSpan.innerHTML = "Please enter valid email id";
                return false;
            } else if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
                errorSpan.innerHTML = "Please enter valid email id";
                return false;
            } else {
                errorSpan.innerHTML = ""; // Clear the error message
            }
        }
   </script>

<script>
        function myemailfunctionofsub() {
            var emails = document.getElementById('subscribeemail').value;
            var errorSpan = document.getElementById('subscribeemailid');
            // alert("hii");

            if (emails.indexOf('@') <= 0) {
                errorSpan.innerHTML = "Please enter valid email id";
                return false;
            } else if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
                errorSpan.innerHTML = "Please enter valid email id";
                return false;
            } else {
                errorSpan.innerHTML = ""; // Clear the error message
            }
        }
   </script>



<!-- <script>
  // Initialize Select2
  $(document).ready(function() {
    // $('#mySelect').select2();

    // Handle change event
    $('#mySelect').on('change', function() {
        // alert('hello');

        var dropdowntext = document.getElementById('mySelect');
    // alert($dropdowntext);
      // Call your custom function here
      handleSelectChange();
    });

    // Handle button click event
    $('#searchbutton').on('click', function() {
      // Call your custom function here when the "Search" button is clicked
      handleSearchButtonClick();
      alert('hello');

    });

    // Custom function to handle the select change
    function handleSelectChange() {
      // Get the selected option value
      var selectedValue = $('#mySelect').val();

      // Get the selected option ID
      var selectedOptionID = $('#mySelect option[value="' + selectedValue + '"]').attr('id');

      // Log or perform any other actions with the selected option ID
      console.log('Selected Option ID:', selectedOptionID);
    }

    // Custom function to handle the "Search" button click
    function handleSearchButtonClick() {
      // Call your logic when the "Search" button is clicked
      console.log('Search button clicked');
    }
  });
</script> -->














 




 