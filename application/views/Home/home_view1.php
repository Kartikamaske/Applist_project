

    <div> 
        <div class="banner-1 cover-image background-size  sptb-2 bg-background" data-bs-image-src="Assets/imgs/banner_img.jpg" style="background: url('Assets/imgs/banner_img.jpg') center center;"> 
            <div class="header-text1 mb-0"> 
                <div class="container"> 
                    <div class="row"> 
                        <div class="col-xl-8 col-lg-10 col-md-12 d-block mx-auto"> 
                            <div class="text-center text-white "> 
                                <h1>Download the Resources Listed</h1> 
                                <p class="mt-2">It is a long established fact that a reader will be distracted by the readable. Mauris ut cursus nunc.</p>
                            </div> 
                            <div class=" search-background"> 
                                <div class="form row no-gutters"> 
                                    <div class="form-group  col-xl-6 col-lg-5 col-md-12 mb-0"> 
                                        <input type="text" class="form-control input-lg border-end-0" id="text" placeholder="Search software"> 
                                    </div> 
                                    <div class="form-group col-xl-4 col-lg-4 select2-lg  col-md-12 mb-0">
                                       
                                        <select class="form-control select2-show-search border-bottom-0 w-100 select2-hidden-accessible" data-placeholder="Select" tabindex="-1" aria-hidden="true" data-select2-id="12" style="height: 46px;border-left: 1px solid #dad6d6;"> 
                                            <optgroup label="Categories"> 
                                                <option >Category</option> 
                                                <option value="1">Windows</option>
                                                <option value="2">Android</option> 
                                                <option value="3">Mac</option> 
                                                <option value="4">Business App</option> 
                                            </optgroup> 
                                        </select>
                                        
                                    </div> 
                                    <div class="col-xl-2 col-lg-3 col-md-12 mb-0"> 
                                        <a href="javascript:void(0);" class="btn btn-lg btn-block btn-primary">Search</a> 
                                    </div> 
                                </div> 
                            </div> 
                            <div class="soft-categories"> 
                                <p class="categories-header"> CATEGORIES</p>
                                <ul class=""> 
                                    <li> 
                                        <a href="android-newest.html"> <img src="Assets/imgs/svg_imgs/android.svg" alt="Dash"> <span>Android</span> </a> 
                                    </li> 
                                    <li> 
                                        <a href="windows-newest.html"> <img src="Assets/imgs/svg_imgs/windows.svg" alt="Dash"> <span>Windows</span> </a> 
                                    </li> 
                                    <li> 
                                        <a href="mac-newest.html"> <img src="Assets/imgs/svg_imgs/apple.svg" alt="Dash"> <span>Mac</span> </a> 
                                    </li> 
                                    <li> 
                                        <a href="business-newest.html"> <img src="Assets/imgs/svg_imgs/business.svg" alt="Dash"> <span>BusinessApp</span> </a> 
                                    </li> 
                                </ul> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div>
            <!-- /header-text --> 
        </div> 
    </div>

   






 <!-- india mart -->
 <section class="sptb">
    <div class="container">
        
            <!-- slider -->
            <ul class="slider3 m-5">


            <?php 
                                             
                                             foreach($data as $rw=>$value){
                               
                                 
                                  
                                                echo '
                                                <li>
                                                <div class="mx-2">
                                                    <div class="card overflow-hidden">
                                                        <div class="power-ribbon power-ribbon-top-left text-warning">
                                                           <span class="bg-warning">
                                                               <i class="fa fa-bolt"></i>
                                                          </span>
                                                   </div>
                                                    <div class="item-card7-imgs"> 
                                                       <a href="javascript:void(0)"></a>
                                                        <img src="'.base_url().'upload/'.$value->photo1.'"  alt="Dash" class="p-0" style="height:270px;width:310px;">
                                                        </div>
                                                         <div class="card-body"> 
                                                           <div class="item-card7-desc"> 
                                                               <div class="item-card7-text"> 
                                                                   <a href="app-details.html" class="text-dark text-header">
                                                                       <h4 class="mb-1">Service Software</h4>
                                                                   </a> 
                            
                                                                   <p>₹4,000/ Year</p>
                                                                   <p><span>Comtranse Technology</span>&nbsp;<i class="fa-solid fa-star" style="color: #125dde;"></i><i class="fa-solid fa-star" style="color: #125dde;"></i>
                                                                    <i class="fa-solid fa-star" style="color: #125dde;"></i></p>
                                                                   <p>Kolhapur,Maharastra</p>
                                                                   <p><i class="fa-solid fa-phone" style="color: #2564d0;"></i><span> View Mobile Number</span></p>
                                                                </div> 
                                                             
                                                                    <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                                                    <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                                             </div>
                                                         </div>                       
                                                     </div> 
                                                 </div>
                                         </li>

                                               ';
               
                                      } ?> 



                <!-- <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/indiamart.webp" alt="Dash" class="p-0" style="height:270px;width:310px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Service Software</h4>
                                       </a> 

                                       <p>₹4,000/ Year</p>
                                       <p><span>Comtranse Technology</span>&nbsp;<i class="fa-solid fa-star" style="color: #125dde;"></i><i class="fa-solid fa-star" style="color: #125dde;"></i>
                                        <i class="fa-solid fa-star" style="color: #125dde;"></i></p>
                                       <p>Kolhapur,Maharastra</p>
                                       <p><i class="fa-solid fa-phone" style="color: #2564d0;"></i><span> View Mobile Number</span></p>
                                    </div> 
                                 
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                 </div>
                             </div>                       
                         </div> 
                     </div>
             </li> -->

                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/indiamart2.webp" alt="Dash" class="p-0" style="height:270px;width:310px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Payroll - Software</h4>
                                       </a> 

                                       <p>₹4,000/ Year</p>
                                       <p><span>Comtranse Technology</span>&nbsp;<i class="fa-solid fa-star" style="color: #125dde;"></i><i class="fa-solid fa-star" style="color: #125dde;"></i>
                                        <i class="fa-solid fa-star" style="color: #125dde;"></i></p>
                                       <p>Kolhapur,Maharastra</p>
                                       <p><i class="fa-solid fa-phone" style="color: #2564d0;"></i><span> View Mobile Number</span></p>
                                    </div> 
                                 
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                
                            </div>
                        </div>                       
                    </div> 
                </div>
             </li>



                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/in4.webp" alt="Dash" class="p-0" style="height:270px;width:310px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Online Crm Software</h4>
                                       </a> 

                                       <p>₹4,000/ Year</p>
                                       <p><span>Comtranse Technology</span>&nbsp;<i class="fa-solid fa-star" style="color: #125dde;"></i><i class="fa-solid fa-star" style="color: #125dde;"></i>
                                        <i class="fa-solid fa-star" style="color: #125dde;"></i></p>
                                       <p>Kolhapur,Maharastra</p>
                                       <p><i class="fa-solid fa-phone" style="color: #2564d0;"></i><span> View Mobile Number</span></p>
                                    </div> 
                                 
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                
                            </div>
                    </div>                       
                </div> 
            </div>
                </li>


                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/in3.webp" alt="Dash" class="p-0" style="height:270px;width:310px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">CRM Software</h4>
                                       </a> 

                                       <p>₹4,000/ Year</p>
                                       <p><span>Comtranse Technology</span>&nbsp;<i class="fa-solid fa-star" style="color: #125dde;"></i><i class="fa-solid fa-star" style="color: #125dde;"></i>
                                        <i class="fa-solid fa-star" style="color: #125dde;"></i></p>
                                       <p>Kolhapur,Maharastra</p>
                                       <p><i class="fa-solid fa-phone" style="color: #2564d0;"></i><span> View Mobile Number</span></p>
                                    </div> 
                                 
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                
                            </div>
                    </div>                       
                </div> 
            </div>
                </li>


                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/in5.jpg" alt="Dash" class="p-0" style="height:270px;width:310px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Service Software</h4>
                                       </a> 

                                       <p>₹4,000/ Year</p>
                                       <p><span>Comtranse Technology</span>&nbsp;<i class="fa-solid fa-star" style="color: #125dde;"></i><i class="fa-solid fa-star" style="color: #125dde;"></i>
                                        <i class="fa-solid fa-star" style="color: #125dde;"></i></p>
                                       <p>Kolhapur,Maharastra</p>
                                       <p><i class="fa-solid fa-phone" style="color: #2564d0;"></i><span> View Mobile Number</span></p>
                                    </div> 
                                 
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                
                            </div>
                    </div>                       
                </div> 
            </div>
                </li>


                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/in6.jpg" alt="Dash" class="p-0" style="height:270px;width:310px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Service Software</h4>
                                       </a> 

                                       <p>₹4,000/ Year</p>
                                       <p><span>Comtranse Technology</span>&nbsp;<i class="fa-solid fa-star" style="color: #125dde;"></i><i class="fa-solid fa-star" style="color: #125dde;"></i>
                                        <i class="fa-solid fa-star" style="color: #125dde;"></i></p>
                                       <p>Kolhapur,Maharastra</p>
                                       <p><i class="fa-solid fa-phone" style="color: #2564d0;"></i><span> View Mobile Number</span></p>
                                    </div> 
                                 
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                
                            </div>
                    </div>                       
                </div> 
            </div>
                </li>



                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/in7.webp" alt="Dash" class="p-0" style="height:270px;width:310px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Service Software</h4>
                                       </a> 

                                       <p>₹4,000/ Year</p>
                                       <p><span>Comtranse Technology</span>&nbsp;<i class="fa-solid fa-star" style="color: #125dde;"></i><i class="fa-solid fa-star" style="color: #125dde;"></i>
                                        <i class="fa-solid fa-star" style="color: #125dde;"></i></p>
                                       <p>Kolhapur,Maharastra</p>
                                       <p><i class="fa-solid fa-phone" style="color: #2564d0;"></i><span> View Mobile Number</span></p>
                                    </div> 
                                 
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                
                            </div>
                    </div>                       
                </div> 
            </div>
                </li>


                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/in8.jpg" alt="Dash" class="p-0" style="height:270px;width:310px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Service Software</h4>
                                       </a> 

                                       <p>₹4,000/ Year</p>
                                       <p><span>Comtranse Technology</span>&nbsp;<i class="fa-solid fa-star" style="color: #125dde;"></i><i class="fa-solid fa-star" style="color: #125dde;"></i>
                                        <i class="fa-solid fa-star" style="color: #125dde;"></i></p>
                                       <p>Kolhapur,Maharastra</p>
                                       <p><i class="fa-solid fa-phone" style="color: #2564d0;"></i><span> View Mobile Number</span></p>
                                    </div> 
                                 
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                        <a href="app-details.html" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                
                            </div>
                    </div>                       
                </div> 
            </div>
                </li>

                
            </ul> 
        </div>   
 </section>



 <!-- Trending Applications -->


<section class="sptb">
    <div class="container" >
        <div class="section-title center-block text-center">
            <h2>Trending Applications</h2>
            <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
        </div>
            <!-- slider -->
            <ul class="slider1 m-5">

                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/whatsapp.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Whatsapp</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="app-details.html" class="btn btn-primary mt-3">Download</a>
                            </div>
                    </div> 
                        <div class="card-footer"> 

                        <div class="d-flex justify-content-between ">
                        <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>


                        <span> (4.1/5)</span>
                        </div>
                        <div>android</div>
                        </div>
                    </div>
                </div> 
            </div>
                </li>

                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/viber.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Viber</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="paid-app-details.html" class="btn btn-primary mt-3">$ 350 Buy Now</a>
                            </div>
                    </div> 
                        <div class="card-footer"> 

                        <div class="d-flex justify-content-between ">
                        <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>


                        <span> (4.1/5)</span>
                        </div>
                        <div>android</div>
                        </div>
                    </div>
                </div> 
            </div>
                </li>



                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/photoshop.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header" >
                                           <h4 class="mb-1">Photoshop</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years,sometimes</p><a href="app-details.html" class="btn btn-primary mt-3">Download</a>
                            </div>
                    </div> 
                    <div class="card-footer"> 

                    <div class="d-flex justify-content-between ">
                    <div>
                        <i class="fas fa-star" style="color:#f5de20;"></i>
                        <i class="fas fa-star" style="color:#f5de20;"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>


                    <span> (4.1/5)</span>
                    </div>
                    <div>android</div>
                    </div>
                </div>
            </div> 
        </div>
                </li>

                
                

                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/team-viewer.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Team-Viewer</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="paid-app-details.html" class="btn btn-primary mt-3">$ 150 Buy Now</a>
                            </div>
                    </div> 
                <div class="card-footer"> 

                <div class="d-flex justify-content-between ">
                <div>
                    <i class="fas fa-star" style="color:#f5de20;"></i>
                    <i class="fas fa-star" style="color:#f5de20;"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>


                <span> (4.1/5)</span>
                </div>
                <div>android</div>
                </div>
        </div>
     </div> 
 </div>
                </li>



                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/youtube.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Youtube</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="app-details.html" class="btn btn-primary mt-3">Download</a>
                            </div>
                    </div> 
<div class="card-footer"> 

<div class="d-flex justify-content-between ">
<div>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>


   <span> (4.1/5)</span>
</div>
<div>android</div>
</div>

</div>
</div> 
</div>
                </li>



                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/itunes.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;"> 
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Itunes</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="paid-app-details.html" class="btn btn-primary mt-3">$ 250 Buy Now</a>
                            </div>
                    </div> 
<div class="card-footer"> 

<div class="d-flex justify-content-between ">
<div>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>


   <span> (4.1/5)</span>
</div>
<div>android</div>
</div>

</div>
</div> 
</div>
                </li>


                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/skype.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;"> 
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Skype</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="app-details.html" class="btn btn-primary mt-3">Download</a>
                            </div>
                    </div> 
<div class="card-footer"> 

<div class="d-flex justify-content-between ">
<div>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>


   <span> (4.1/5)</span>
</div>
<div>android</div>
</div>

</div>
</div> 
</div>
                </li>


                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/vlc.svg" alt="Dash" class="p-0" style="height:64px;width: 88px;"> 
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">VLC Player</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="paid-app-details.html" class="btn btn-primary mt-3">$ 350 Buy Now</a>
                            </div>
                    </div> 
<div class="card-footer"> 

<div class="d-flex justify-content-between ">
<div>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>


   <span> (4.1/5)</span>
</div>
<div>android</div>
</div>

</div>
</div> 
</div>
                </li>
            </ul> 
        </div>   
 </section>




<div class="about-1 cover-image background-size sptb-2 bg-background-5 " data-bs-image-src="../assets/images/banners/banner4.jpg" style="background: url('Assets/imgs/banner2.jpg') center center;"> <div class="container"> <div class=""> <div class="col-lg-12 col-xl-12 col-md-12"> <div class="sub-newsletter text-white  text-center"> <h2 class="mb-3"><i class="fa fa-paper-plane-o me-2"></i> Subscribe To get Latest Updates</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p><div class="input-group text-center sub-input mt-1 w-60 ms-auto me-auto mt-6"> <input type="text" class="form-control input-lg " placeholder="Enter your Email"> <button type="button" class="btn btn-primary btn-lg br-te-3  br-be-3"> Subscribe </button> </div> </div> </div> </div> </div> </div>
</div>


    <!-- new session kartika -->
    <div class="container">
            <div class="section-title center-block text-center"> 
                <h2 style="margin-top:70px;">Top<span>Free</span> Apps</h2>
                     <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
            </div>

             <div class="panel panel-primary"> 
                <div class=""> 
                    <div class="tabs-menu "> 
                        <!-- Tabs --> 
                        <!-- <ul class="nav panel-tabs eductaional-tabs mb-6 " role="tablist"> 
                            <li class="">
                                <a href="#home" class="nav-link active " data-bs-toggle="tab" ><i class="fa-brands fa-android"></i>&nbsp;Android</a>
                            </li> 

                            <li>
                                <a href="#menu1" data-bs-toggle="tab" class="nav-link" ><i class="fa-brands fa-apple icon-color"></i>&nbsp;Mac</a>
                            </li> 

                            <li>
                                <a href="#menu2" data-bs-toggle="tab" class="nav-link" ><i class="fa-brands fa-windows icon-color"></i>&nbsp;Windows</a>
                            </li>

                             <li>
                                <a href="#menu3" data-bs-toggle="tab" class="nav-link" ><i class="fa fa-briefcase me-1 icon-color"></i>&nbsp;Business App</a>
                            </li>

                         </ul>  -->

                         <ul class=" nav panel-tabs eductaional-tabs mb-6" role="tablist">
                            <li class="nav-item">
                              <a class="nav-link active" data-toggle="pill" href="#home"><i class="fa-brands fa-android"></i>&nbsp;Android</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" data-toggle="pill" href="#menu1"><i class="fa-brands fa-apple icon-color"></i>&nbsp;Mac</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" data-toggle="pill" href="#index3"><i class="fa-brands fa-windows icon-color"></i>&nbsp;Windows</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#index4"><i class="fa fa-briefcase me-1 icon-color"></i>&nbsp;Business App</a>
                              </li>
                          </ul>
                    </div>
                </div>
                          
                <div class="panel-body tab-content">
                 
                        <div class="tab-pane active " id="home" role="tabpanel"> 
                            <div class="row"> 
                                
                                <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
                                     <div class="card overflow-hidden">
                                         <div class="power-ribbon power-ribbon-top-left text-warning">
                                            <span class="bg-warning">
                                                <i class="fa fa-bolt"></i>
                                           </span>
                                        </div>

                                     <div class="item-card7-imgs"> 
                                        <a href="app-details.html"></a>
                                         <img src="Assets/imgs/google-duo.svg" alt="Dash" class="  p-0">
                                         </div>
                                         
                                          <div class="card-body"> 
                                            <div class="item-card7-desc"> 
                                                <div class="item-card7-text"> 
                                                    <a href="app-details.html" class="text-dark text-header">
                                                        <h4 class="mb-1">Google Duo</h4>
                                                    </a> 
                                                    <a href="app-details.html" class="text-subtext">Free</a>
                                                 </div> 
                                                 <ul class="item-cards7-ic software-list mb-0 mt-3">
                                                        <li>
                                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                                        </li> 

                                                        <li>
                                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                                        </li> 

                                                        <li>
                                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                                        </li> 

                                                        <li>
                                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                                 </ul> 

                                                     <p class="mb-0">Various versions have evolved over the years, sometimes</p>
                                         </div>
                                 </div> 
     <div class="card-footer"> 

        <div class="d-flex justify-content-between ">
            <div>
                    <i class="fas fa-star" style="color:#f5de20;"></i>
                    <i class="fas fa-star" style="color:#f5de20;"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>


                <span> (4.1/5)</span>
            </div>
            <div>android</div>
        </div>
     
        </div>
   </div> 
</div>

             <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
                 <div class="card overflow-hidden"> 
                    <div class="item-card7-imgs">
                         <a href="app-details.html"></a>
                          <img src="Assets/imgs/uber.svg" alt="Dash" class="p-0">
                    </div> 
                         <div class="card-body"> 
                            <div class="item-card7-desc"> 
                                <div class="item-card7-text"> 
                                    <a href="app-details.html" class="text-dark text-header">
                                        <h4 class="mb-1">Uber</h4></a> 
                                        <a href="app-details.html" class="text-subtext">Free</a>
                                </div> 
                                     <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li>
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul>
                                    <p class="mb-0">Various versions have evolved over the years, sometimes</p>
                          </div>
                     </div> 
            
                     <div class="card-footer"> 
                         <div class="d-flex justify-content-between "><div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span> (4.1/5)</span>
                        </div>
                     <div>android</div>
                 </div>
        </div>

 </div>
  </div> 

             <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
                 <div class="card overflow-hidden">
                     <div class="power-ribbon power-ribbon-top-left text-warning">
                        <span class="bg-primary"><i class="fa fa-bolt"></i></span>
                    </div> 
                    <div class="item-card7-imgs"> 
                        <a href="app-details.html"></a> 
                        <img src="Assets/imgs/instagram.svg" alt="Dash" class="  p-0"> 
                    </div> 
                    <div class="card-body"> 
                        <div class="item-card7-desc"> 
                            <div class="item-card7-text"> 
                                <a href="app-details.html" class="text-dark text-header">
                                    <h4 class="mb-1">Instagram</h4></a> 
                                <a href="app-details.html" class="text-subtext">Free</a> 
                            </div> 
                            <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                <li>
                                    <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                </li> 

                                <li>
                                   <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> 
                                <li>
                                    <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                </li>

                                <li>
                                     <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a>
                                </li>
                           </ul> 
                           <p class="mb-0">Various versions have evolved over the years, sometimes</p>
                            
                                 </div>
                             </div> 
                     
                             <div class="card-footer"> 

                                <div class="d-flex justify-content-between ">
                                    <div>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                        
                        
                                        <span> (4.1/5)</span>
                                    </div>
                                    <div>android</div>
                                </div>
                             
                                </div>
        </div> 
     </div>


         <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
             <div class="card overflow-hidden"> 
                <div class="item-card7-imgs"> 
                    <a href="app-details.html"></a> 
                    <img src="Assets/imgs/quora.svg" alt="Dash" class="  p-0"> 
                </div> 
                <div class="card-body">
                     <div class="item-card7-desc">
                         <div class="item-card7-text">
                             <a href="app-details.html" class="text-dark text-header">
                                <h4 class="mb-1">Quora</h4>
                            </a> 
                            <a href="app-details.html" class="text-subtext">Free</a> 
                        </div>

                         <ul class="item-cards7-ic software-list mb-0 mt-3">
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li>
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                         </ul> 
                         <p class="mb-0">Various versions have evolved over the years, sometimes</p>

                    </div> 
             </div> 
             <div class="card-footer"> 

                <div class="d-flex justify-content-between ">
                    <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
        
        
                        <span> (4.1/5)</span>
                    </div>
                    <div>android</div>
                </div>
             
          </div>
    </div>
</div>




<div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
    <div class="card overflow-hidden"> 
        <div class="power-ribbon power-ribbon-top-left text-warning">
          <span class="bg-danger"> <i class="fa fa-bolt"></i> </span>
        </div> 
         <div class="item-card7-imgs">
                       <a href="app-details.html"></a>
                        <img src="Assets/imgs/social-media.svg" alt="Dash" class="  p-0">
                       </div> 
                       <div class="card-body"> 
                          <div class="item-card7-desc">
                           <div class="item-card7-text">
                               <a href="app-details.html" class="text-dark text-header">
                                  <h4 class="mb-1">Hangouts</h4>
                              </a> 
                              <a href="app-details.html" class="text-subtext">Free</a>
                           </div>
  
                               <ul class="item-cards7-ic software-list mb-0 mt-3">
                                      <li>
                                        <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                      </li>
                                         <li>
                                          <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> 
                                          <li>
                                              <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                          </li>
                                              
                                          <li>   
                                              <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a>
                                              </li> 
                               </ul>
                               <p class="mb-0">Various versions have evolved over the years, sometimes</p>
  
                           </div>
                   </div> 
                   <div class="card-footer"> 
                      <div class="d-flex justify-content-between ">
                               <div>
                                  <i class="fas fa-star" style="color:#f5de20;"></i>
                                  <i class="fas fa-star" style="color:#f5de20;"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                   <span> (4.1/5)</span>
                              </div>
                           <div>android</div>
                      </div>   
              </div>
       </div>
   </div>
                                    
<div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
  <div class="card overflow-hidden"> 
      <div class="power-ribbon power-ribbon-top-left text-warning">
        <span class="bg-danger"> <i class="fa fa-bolt"></i> </span>
      </div> 
       <div class="item-card7-imgs">
                     <a href="app-details.html"></a>
                      <img src="Assets/imgs/youtube.svg" alt="Dash" class="  p-0">
                     </div> 
                     <div class="card-body"> 
                        <div class="item-card7-desc">
                         <div class="item-card7-text">
                             <a href="app-details.html" class="text-dark text-header">
                                <h4 class="mb-1">Youtube</h4>
                            </a> 
                            <a href="app-details.html" class="text-subtext">Free</a>
                         </div>

                             <ul class="item-cards7-ic software-list mb-0 mt-3">
                                    <li>
                                      <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                    </li>
                                       <li>
                                        <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> 
                                        <li>
                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                        </li>
                                            
                                        <li>   
                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a>
                                            </li> 
                             </ul>
                             <p class="mb-0">Various versions have evolved over the years, sometimes</p>

                         </div>
                 </div> 
                 <div class="card-footer"> 
                    <div class="d-flex justify-content-between ">
                             <div>
                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                 <span> (4.1/5)</span>
                            </div>
                         <div>android</div>
                    </div>   
            </div>
     </div>
 </div>

          <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
            <div class="card overflow-hidden"> 
                <div class="item-card7-imgs"> 
                    <a href="app-details.html"></a> 
                    <img src="Assets/imgs/translate.svg" alt="Dash" class="  p-0">
                 </div> 
                 <div class="card-body">
                     <div class="item-card7-desc"> 
                        <div class="item-card7-text"> 
                            <a href="app-details.html" class="text-dark text-header">
                                <h4 class="mb-1">Google Translate</h4>
                            </a> 
                            <a href="app-details.html" class="text-subtext">Free</a> </div> 
                            <ul class="item-cards7-ic software-list mb-0 mt-3">
                                 <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                                 <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                  <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                                  <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                              </ul> 

                              <p class="mb-0">Various versions have evolved over the years, sometimes</p>
                                </div>
                             </div>
                             <div class="card-footer"> 
                                <div class="d-flex justify-content-between ">
                                         <div>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                             <span> (4.1/5)</span>
                                        </div>
                                     <div>android</div>
                                </div>   
                        </div>
    </div>
 </div>

  <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
    <div class="card overflow-hidden">
         <div class="item-card7-imgs">
            <a href="app-details.html"></a> 
            <img src="Assets/imgs/spotify.svg" alt="Dash" class="  p-0"> 
        </div>

         <div class="card-body"> 
            <div class="item-card7-desc">
                 <div class="item-card7-text">
                        <a href="app-details.html" class="text-dark text-header">
                            <h4 class="mb-1">Spotify Music</h4>
                        </a> 
                        <a href="app-details.html" class="text-subtext">Free
                        </a>
                 </div> 

                 <ul class="item-cards7-ic software-list mb-0 mt-3">
                     <li>
                        <a href="javascript:void(0);" class="icons text-muted ">
                        <i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>

                     <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>

                     <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li>

                    <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li> 
                </ul> 
                <p class="mb-0">Various versions have evolved over the years, sometimes</p>

             </div> 
         </div>
         <div class="card-footer"> 
            <div class="d-flex justify-content-between ">
                     <div>
                        <i class="fas fa-star" style="color:#f5de20;"></i>
                        <i class="fas fa-star" style="color:#f5de20;"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                         <span> (4.1/5)</span>
                    </div>
                 <div>android</div>
            </div>   
    </div>
      </div> 
    </div> 
 </div>
</div> 



 <div class="tab-pane fade" id="menu1" >
     <div class="row">

         <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
             <div class="card overflow-hidden"> 
                <div class="item-card7-imgs"> 
                    <a href="app-details.html"></a> 
                         <img src="Assets/imgs/itunes.svg" alt="Dash" class="  p-0"> 
               </div> 
                <div class="card-body"> 
                     <div class="item-card7-desc"> 
                        <div class="item-card7-text">
                             <a href="app-details.html" class="text-dark text-header"><h4 class="mb-1">itunes</h4></a> <a href="app-details.html" class="text-subtext">Free</a> 
                            </div> 
                        <ul class="item-cards7-ic software-list mb-0 mt-3">
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                </li> 
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li>
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li> 
                         </ul> 
                         <p class="mb-0">Various versions have evolved over the years, sometimes</p>
                </div> 
            </div> 
           
            <div class="card-footer"> 
                <div class="d-flex justify-content-between ">
                         <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                             <span> (4.1/5)</span>
                        </div>
                     <div>android</div>
                </div>   
        </div>
 </div>
  </div> 

                 <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
                     <div class="card overflow-hidden"> <div class="item-card7-imgs"> 
                        <a href="app-details.html"></a> 
                        <img src="Assets/imgs/AffinityPhoto.svg" alt="Dash" class="  p-0">
                     </div> 
                     <div class="card-body">
                         <div class="item-card7-desc">
                             <div class="item-card7-text">
                                 <a href="app-details.html" class="text-dark text-header">
                                    <h4 class="mb-1">AffinityPhoto</h4>
                                </a> 
                                <a href="app-details.html" class="text-subtext">Free</a>
                             </div>
                              <ul class="item-cards7-ic software-list mb-0 mt-3">
                                 <li>
                                    <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>
                                <li>
                                   <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                </li>
                                 <li>
                                    <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                 </li>
                                 <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a>
                                </li> 
                             </ul> 
                             <p class="mb-0">Various versions have evolved over the years, sometimes</p>
                                </div>
                             </div>
                             <div class="card-footer"> 
                                <div class="d-flex justify-content-between ">
                                         <div>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                             <span> (4.1/5)</span>
                                        </div>
                                     <div>Mac</div>
                                </div>   
                        </div> 
                </div>     
            </div>

             <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
                <div class="card overflow-hidden"> <div class="item-card7-imgs">
                     <a href="app-details.html"></a>
                      <img src="Assets/imgs/Shazam.svg" alt="Dash" class="  p-0"> 
                    </div> 
                    <div class="card-body"> 
                        <div class="item-card7-desc">
                             <div class="item-card7-text"> 
                                <a href="app-details.html" class="text-dark text-header">
                                    <h4 class="mb-1">Shazam</h4></a> 
                                    <a href="app-details.html" class="text-subtext">Free</a>
                                 </div> 
                                 <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                            <li>
                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li>
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                         </ul>

                                         <p class="mb-0">Various versions have evolved over the years, sometimes</p>
                                        </div>
                                     </div> 
                                     <div class="card-footer"> 
                                        <div class="d-flex justify-content-between ">
                                                 <div>
                                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                     <span> (4.1/5)</span>
                                                </div>
                                             <div>Mac</div>
                                        </div>   
                                </div> 
    
         </div>
 </div> 

                <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
                     <div class="card overflow-hidden"> 
                        <div class="item-card7-imgs">
                             <a href="app-details.html"></a> 
                             <img src="Assets/imgs/Magnet-app.svg" alt="Dash" class="  p-0"> </div> <div class="card-body"> 
                                <div class="item-card7-desc">
                                    <div class="item-card7-text"> <a href="app-details.html" class="text-dark text-header"><h4 class="mb-1">Magnet app</h4></a> 
                                        <a href="app-details.html" class="text-subtext">Free</a>
                                     </div>
                                      <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> 
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                         </ul> 
                                         <p>Various versions have evolved over the years, sometimes</p>
                                        </div> 
                                    </div> 

                                    <div class="card-footer"> 

                                        <div class="d-flex justify-content-between ">
                                            <div>
                                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                
                                
                                                <span> (4.1/5)</span>
                                            </div>
                                            <div>Mac</div>
                                        </div>
                                     
                                        </div>
        </div> 
    </div> 

        <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
             <div class="card overflow-hidden">
                 <div class="item-card7-imgs">
                     <a href="app-details.html"></a> 
                     <img src="Assets/imgs/dash-256.svg" alt="Dash" class="  p-0"> 
                 </div> 
                    <div class="card-body">
                         <div class="item-card7-desc">
                             <div class="item-card7-text">
                                 <a href="app-details.html" class="text-dark text-header">
                                    <h4 class="mb-1">Dash App</h4>
                                </a> 
                                <a href="app-details.html" class="text-subtext">Free</a> 
                            </div>
                             <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                    <li>
                                        <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                    </li> 
                                    <li>
                                        <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                    </li>
                                     <li>
                                        <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a>
                                    </li> 
                                </ul>
                                 <p>Various versions have evolved over the years, sometimes</p>
                                </div>
                             </div> 

                             <div class="card-footer"> 

                                <div class="d-flex justify-content-between ">
                                    <div>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                        
                        
                                        <span> (4.1/5)</span>
                                    </div>
                                    <div>Mac</div>
                                </div>
                             
                                </div>
        </div>
    </div> 

    <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
        <div class="card overflow-hidden"> 
            <div class="item-card7-imgs">
                 <a href="app-details.html"></a>
                  <img src="Assets/imgs/Xcode.svg" alt="Dash" class="  p-0"> 
                </div>
                 <div class="card-body"> <div class="item-card7-desc"> 
                    <div class="item-card7-text"> 
                        <a href="app-details.html" class="text-dark text-header">
                        <h4 class="mb-1">Acrobat Reader</h4>
                         </a> 
                         <a href="app-details.html" class="text-subtext">Free</a> 
                        </div> 
                        <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                         </ul> <p>Various versions have evolved over the years, sometimes</p></div>
                         </div> 
                        
                         <div class="card-footer"> 

                            <div class="d-flex justify-content-between ">
                                <div>
                                        <i class="fas fa-star" style="color:#f5de20;"></i>
                                        <i class="fas fa-star" style="color:#f5de20;"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                    
                    
                                    <span> (4.1/5)</span>
                                </div>
                                <div>mac</div>
                            </div>
                         
                            </div>
    </div> 
</div> 

<div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
     <div class="card overflow-hidden">
         <div class="item-card7-imgs"> 
            <a href="app-details.html"></a>
             <img src="Assets/imgs/w2-512.svg" alt="Dash" class="  p-0">
             </div> 
             <div class="card-body"> 
                <div class="item-card7-desc"> 
                    <div class="item-card7-text"> <a href="app-details.html" class="text-dark text-header"><h4 class="mb-1">Waltr</h4></a> <a href="app-details.html" class="text-subtext">Free</a>
                     </div> 
                     <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                        <li><a href="javascript:void(0);" class="icons text-muted ">
                        <i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                        <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                         <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                        </li>
                        <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                     </ul> 
                     <p>Various versions have evolved over the years, sometimes</p>
                    </div> 
                </div> 
                
                <div class="card-footer"> 

                    <div class="d-flex justify-content-between ">
                        <div>
                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
            
            
                            <span> (4.1/5)</span>
                        </div>
                        <div>mac</div>
                    </div>
                 
                    </div>
         </div>
         </div>

          <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
             <div class="card overflow-hidden">
                 <div class="item-card7-imgs"> 
                    <a href="app-details.html"></a>
                     <img src="Assets/imgs/GarageBand.svg" alt="Dash" class="  p-0">
                     </div> 
                     <div class="card-body"> 
                        <div class="item-card7-desc">
                             <div class="item-card7-text">
                                 <a href="app-details.html" class="text-dark text-header">
                                    <h4 class="mb-1">GarageBand</h4>
                                </a>
                                 <a href="app-details.html" class="text-subtext">Free</a> 
                                </div>
                                 <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                    <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                                    <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                     <li>
                                        <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                                        <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                     </ul>
                                      <p>Various versions have evolved over the years, sometimes</p>
                                    </div>
                                 </div>
                               
                                 <div class="card-footer"> 

                                    <div class="d-flex justify-content-between ">
                                        <div>
                                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                            
                            
                                            <span> (4.1/5)</span>
                                        </div>
                                        <div>mac</div>
                                    </div>
                                 
                                    </div>
   </div>
</div>

</div></div>
         

         <div class="tab-pane" id="index3" role="tabpanel"> 
            <div class="row">

                <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
                <div class="card overflow-hidden"> 
                    <div class="item-card7-imgs">
                         <a href="app-details.html"></a> 
                         <img src="Assets/imgs/photoshop.svg" alt="Dash" class="  p-0"> 
                        </div>
                         <div class="card-body"> 
                            <div class="item-card7-desc"> 
                                <div class="item-card7-text">
                                     <a href="app-details.html" class="text-dark text-header">
                                        <h4 class="mb-1">Photoshop</h4>
                                    </a>
                                     <a href="app-details.html" class="text-subtext">Free</a> 
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                        <li><a href="javascript:void(0);" class="icons text-muted ">
                                            <i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                        </li>
                                         <li>
                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a>
                                        </li>
                                     </ul> 
                                     <p>Various versions have evolved over the years, sometimes</p>
                                    </div>
                                 </div> 
                                 
                                 <div class="card-footer"> 

                                    <div class="d-flex justify-content-between ">
                                        <div>
                                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                            
                            
                                            <span> (4.1/5)</span>
                                        </div>
                                        <div>windows</div>
                                    </div>
                                 
                                    </div>
      </div> 
 </div> 

  <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
                    <div class="card overflow-hidden"> 
                        <div class="item-card7-imgs"> 
                            <a href="app-details.html"></a> 
                            <img src="Assets/imgs/messenger.svg" alt="Dash" class="  p-0"> 
                        </div>
                         <div class="card-body"> 
                            <div class="item-card7-desc"> 
                                <div class="item-card7-text"> 
                                    <a href="app-details.html" class="text-dark text-header"><h4 class="mb-1">Messenger</h4></a> 
                                    <a href="app-details.html" class="text-subtext">Free</a> 
                                </div>
                                 <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                    <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                                    <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                     <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li>
                                      <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                     </ul>
                                     <p>Various versions have evolved over the years, sometimes</p>
                                    </div>
                                 </div> 
                                 
                                 <div class="card-footer"> 

                                    <div class="d-flex justify-content-between ">
                                        <div>
                                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                            
                            
                                            <span> (4.1/5)</span>
                                        </div>
                                        <div>windows</div>
                                    </div>
                                 
                                    </div>
 </div>
 </div>

  <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
    <div class="card overflow-hidden"> <div class="item-card7-imgs"> 
        <a href="app-details.html"></a>
         <img src="Assets/imgs/spotify.svg" alt="Dash" class="  p-0"> 
        </div>
         <div class="card-body"> 
            <div class="item-card7-desc">
                 <div class="item-card7-text"> 
                    <a href="app-details.html" class="text-dark text-header">
                        <h4 class="mb-1">Spotify Music</h4></a> 
                        <a href="app-details.html" class="text-subtext">Free</a>
                     </div> 
                     <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                        <li><a href="javascript:void(0);" class="icons text-muted ">
                            <i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> 
                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                         </ul> 
                         <p>Various versions have evolved over the years, sometimes</p>
                        </div> 
                    </div>
                
                    <div class="card-footer"> 

                        <div class="d-flex justify-content-between ">
                            <div>
                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                
                
                                <span> (4.1/5)</span>
                            </div>
                            <div>windows</div>
                        </div>
                     
                        </div>
    </div> 
    </div> 


<div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
    <div class="card overflow-hidden">
         <div class="item-card7-imgs"> 
            <a href="app-details.html"></a> 
            <img src="Assets/imgs/youtube.svg" alt="Dash" class="  p-0"> 
        </div> 
        <div class="card-body">
             <div class="item-card7-desc"> 
                <div class="item-card7-text"> 
                    <a href="app-details.html" class="text-dark text-header">
                        <h4 class="mb-1">Youtube</h4>
                    </a> 
                    <a href="app-details.html" class="text-subtext">Free</a> 
                </div> 
                <ul class="item-cards7-ic software-list mb-0 mt-3">
                     <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                     <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                      <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li>
                       <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li> 
                    </ul> 
                    <p>Various versions have evolved over the years, sometimes</p>
                </div> 
            </div>
         
            <div class="card-footer"> 

                <div class="d-flex justify-content-between ">
                    <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
        
        
                        <span> (4.1/5)</span>
                    </div>
                    <div>windows</div>
                </div>
             
                </div>
                         </div>
                         </div> 


                         <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
                             <div class="card overflow-hidden"> 
                                <div class="item-card7-imgs"> 
                                    <a href="app-details.html"></a> 
                                    <img src="Assets/imgs/evernote.svg" alt="Dash" class="  p-0"> </div> <div class="card-body"> <div class="item-card7-desc"> <div class="item-card7-text"> <a href="app-details.html" class="text-dark text-header"><h4 class="mb-1">Evernote</h4></a> <a href="app-details.html" class="text-subtext">Free</a> </div> <ul class="item-cards7-ic software-list mb-0 mt-3"> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li> </ul> <p>Various versions have evolved over the years, sometimes</p>
                                </div> </div> 

                                    <div class="card-footer"> 

                                        <div class="d-flex justify-content-between ">
                                            <div>
                                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                
                                
                                                <span> (4.1/5)</span>
                                            </div>
                                            <div>windows</div>
                                        </div>
                                     
                                        </div>
                        </div>
                    </div>

                     <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
                         <div class="card overflow-hidden"> <div class="item-card7-imgs">
                             <a href="app-details.html"></a> 
                             <img src="Assets/imgs/picasa.svg" alt="Dash" class="p-0">
                             </div> 
                             <div class="card-body"> 
                                <div class="item-card7-desc"> 
                                    <div class="item-card7-text"> 
                                        <a href="app-details.html" class="text-dark text-header">
                                            <h4 class="mb-1">Picasa</h4>
                                        </a> 
                                        <a href="app-details.html" class="text-subtext">Free</a> 
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                        <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>
                                         <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                          <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                                          <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li> 
                                        </ul>
                                         <p>Various versions have evolved over the years, sometimes</p>
                                        </div> 
                                    </div> 
                                   
                                    <div class="card-footer"> 

                                        <div class="d-flex justify-content-between ">
                                            <div>
                                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                
                                
                                                <span> (4.1/5)</span>
                                            </div>
                                            <div>windows</div>
                                        </div>
                                     
                                        </div>
         </div>
         </div> 

         <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
             <div class="card overflow-hidden"> 
                <div class="item-card7-imgs"> 
                    <a href="app-details.html"></a>
                     <img src="Assets/imgs/skype.svg" alt="Dash" class="  p-0">
                     </div>
                      <div class="card-body"> 
                        <div class="item-card7-desc"> 
                            <div class="item-card7-text"> 
                                <a href="app-details.html" class="text-dark text-header">
                                    <h4 class="mb-1">Skype</h4>
                                </a>
                                 <a href="app-details.html" class="text-subtext">Free
                                 </a> 
                                </div>
                                 <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                    <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>
                                     <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> 
                                     <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li>
                                      <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li> 
                                    </ul> 
                                    <p>Various versions have evolved over the years, sometimes</p>
                                </div>
                             </div> 
                             <div class="card-footer"> 

                                <div class="d-flex justify-content-between ">
                                    <div>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                        
                        
                                        <span> (4.1/5)</span>
                                    </div>
                                    <div>windows</div>
                                </div>
                             
                                </div>
                         </div> 
                        </div> 

                        <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
                             <div class="card overflow-hidden">
                                 <div class="item-card7-imgs"> 
                                    <a href="app-details.html"></a> 
                                    <img src="Assets/imgs/vlc.svg" alt="Dash" class="  p-0"> 
                                </div>
                                 <div class="card-body">
                                     <div class="item-card7-desc"> 
                                        <div class="item-card7-text">
                                             <a href="app-details.html" class="text-dark text-header">
                                                <h4 class="mb-1">VLC Player</h4>
                                            </a>
                                             <a href="app-details.html" class="text-subtext">Free</a> 
                                            </div>
                                             <ul class="item-cards7-ic software-list mb-0 mt-3">
                                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> 
                                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                             </ul>
                                              <p>Various versions have evolved over the years, sometimes</p>
                                            </div> 
                                        </div>
                                        
                                        <div class="card-footer"> 

                                            <div class="d-flex justify-content-between ">
                                                <div>
                                                        <i class="fas fa-star" style="color:#f5de20;"></i>
                                                        <i class="fas fa-star" style="color:#f5de20;"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                    
                                    
                                                    <span> (4.1/5)</span>
                                                </div>
                                                <div>windows</div>
                                            </div>
                                         
                                            </div>
 </div> 
</div> 

</div> 
</div> 

<div class="tab-pane" id="index4" role="tabpanel">
     <div class="row"> 

        <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
        <div class="card overflow-hidden"> 
            <div class="item-card7-imgs">
                 <a href="app-details.html"></a> 
                 <img src="Assets/imgs/excel.svg" alt="Dash" class="  p-0"> 
                </div>

                <div class="card-body"> 
                    <div class="item-card7-desc"> 
                        <div class="item-card7-text"> 
                            <a href="app-details.html" class="text-dark text-header">
                                <h4 class="mb-1">Excel</h4></a> 
                                <a href="app-details.html" class="text-subtext">Free</a> 
                            </div> 
                            <ul class="item-cards7-ic software-list mb-0 mt-3">
                                 <li>
                                    <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                </li> 
                               <li>
                                <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                              </li> 
                              <li>
                                <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                                <li>
                                    <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a>
                                </li> 
                            </ul> 
                            <p>Various versions have evolved over the years, sometimes</p>
                        </div> 
                    </div>
                    
                    <div class="card-footer"> 

                        <div class="d-flex justify-content-between ">
                            <div>
                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                
                
                                <span> (4.1/5)</span>
                            </div>
                            <div>Business</div>
                        </div>
                     
                        </div>
     </div> </div>


      <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
         <div class="card overflow-hidden"> 
            <div class="item-card7-imgs"> 
                <a href="app-details.html"></a> 
                <img src="Assets/imgs/google-drive.svg" alt="Dash" class="  p-0"> </div> <div class="card-body"> <div class="item-card7-desc"> <div class="item-card7-text"> <a href="app-details.html" class="text-dark text-header"><h4 class="mb-1">Google-drive</h4></a> <a href="app-details.html" class="text-subtext">Free</a> </div>
             <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                 <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li>
                  <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                 </ul> 
                 <p>Various versions have evolved over the years, sometimes</p>
                </div> 
            </div>
             
            <div class="card-footer"> 

                <div class="d-flex justify-content-between ">
                    <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
        
        
                        <span> (4.1/5)</span>
                    </div>
                    <div>Business</div>
                </div>
             
                </div>
     </div>
     </div>


      <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
         <div class="card overflow-hidden">
             <div class="item-card7-imgs">
                 <a href="app-details.html"></a>
                  <img src="Assets/imgs/powerpoint.svg" alt="Dash" class="  p-0"> 
                </div>
                 <div class="card-body"> 
                    <div class="item-card7-desc"> 
                        <div class="item-card7-text"> 
                            <a href="app-details.html" class="text-dark text-header">
                                <h4 class="mb-1">Powerpoint</h4>
                            </a> 
                            <a href="app-details.html" class="text-subtext">Free</a>
                         </div>
                          <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>
                             <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> 
                             <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                             <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                             </ul> 
                             <p>Various versions have evolved over the years, sometimes</p>
                            </div>
                         </div>
                        
                         <div class="card-footer"> 

                            <div class="d-flex justify-content-between ">
                                <div>
                                        <i class="fas fa-star" style="color:#f5de20;"></i>
                                        <i class="fas fa-star" style="color:#f5de20;"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                    
                    
                                    <span> (4.1/5)</span>
                                </div>
                                <div>Business</div>
                            </div>
                         
                            </div>
        </div> 
    </div> 

    <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
         <div class="card overflow-hidden"> 
            <div class="item-card7-imgs">
                 <a href="app-details.html"></a> 
                 <img src="Assets/imgs/word.svg" alt="Dash" class="  p-0"> 
                </div> 
                <div class="card-body"> 
                    <div class="item-card7-desc"> 
                        <div class="item-card7-text"> 
                            <a href="app-details.html" class="text-dark text-header">
                                <h4 class="mb-1">Microsoft Word</h4></a> 
                                <a href="app-details.html" class="text-subtext">Free</a>
                             </div> 
                             <ul class="item-cards7-ic software-list mb-0 mt-3"> 
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                                <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                 <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                                 <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                            </ul> 
                                 <p>Various versions have evolved over the years, sometimes</p>
                                </div>
                             </div> 
                             <div class="card-footer"> 

                                <div class="d-flex justify-content-between ">
                                    <div>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star" style="color:#f5de20;"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                        
                        
                                        <span> (4.1/5)</span>
                                    </div>
                                    <div>Business</div>
                                </div>
                             
                                </div> 
        </div>
     </div>

      <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
        <div class="card overflow-hidden">
             <div class="item-card7-imgs">
                 <a href="app-details.html"></a>
                  <img src="Assets/imgs/slides.svg" alt="Dash" class="  p-0">
                 </div>
                  <div class="card-body">
                     <div class="item-card7-desc"> 
                        <div class="item-card7-text">
                             <a href="app-details.html" class="text-dark text-header">
                                <h4 class="mb-1">Google Slides</h4></a>
                                 <a href="app-details.html" class="text-subtext">Free</a>
                                 </div> 
                                 <ul class="item-cards7-ic software-list mb-0 mt-3">
                                     <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>
                                      <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                                       <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                                       <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li> 
                                    </ul>
                                     <p>Various versions have evolved over the years, sometimes</p>
                                    </div> 
                                </div> 
                                
                                <div class="card-footer"> 

                                    <div class="d-flex justify-content-between ">
                                        <div>
                                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                                <i class="fas fa-star" style="color:#f5de20;"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                            
                            
                                            <span> (4.1/5)</span>
                                        </div>
                                        <div>Business</div>
                                    </div>
                                 
                                    </div>
        </div>
     </div>


      <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
        <div class="card overflow-hidden">
             <div class="item-card7-imgs"> 
                <a href="app-details.html"></a> 
                <img src="Assets/imgs/acrobat-reader.svg" alt="Dash" class="  p-0"> 
            </div>
             <div class="card-body"> 
                <div class="item-card7-desc">
                     <div class="item-card7-text"> 
                        <a href="app-details.html" class="text-dark text-header">
                            <h4 class="mb-1">Acrobat Reader</h4></a>
                             <a href="app-details.html" class="text-subtext">Free</a>
                             </div>
                              <ul class="item-cards7-ic software-list mb-0 mt-3">
                                 <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li>
                                  <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                                  <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li> 
                                </ul> 
                                <p>Various versions have evolved over the years, sometimes</p>
                            </div>
                         </div>
                         
                         <div class="card-footer"> 

                            <div class="d-flex justify-content-between ">
                                <div>
                                        <i class="fas fa-star" style="color:#f5de20;"></i>
                                        <i class="fas fa-star" style="color:#f5de20;"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                    
                    
                                    <span> (4.1/5)</span>
                                </div>
                                <div>Business</div>
                            </div>
                         
                            </div>
 </div>
 </div> 


 <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6"> 
    <div class="card overflow-hidden"> 
        <div class="item-card7-imgs">
             <a href="app-details.html"></a>
              <img src="Assets/imgs/skype.svg" alt="Dash" class="  p-0"> 
            </div>
             <div class="card-body">
                 <div class="item-card7-desc">
                     <div class="item-card7-text">
                         <a href="app-details.html" class="text-dark text-header">
                            <h4 class="mb-1">Skype</h4>
                        </a>
                         <a href="app-details.html" class="text-subtext">Free</a> 
                        </div>
                          <ul class="item-cards7-ic software-list mb-0 mt-3">
                             <li>
                                <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> 
                            <li>
                                <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li>
                            <li>
                                <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> 
                            <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                         </ul>
                          <p>Various versions have evolved over the years, sometimes</p>
                        </div> 
                    </div>
                    <div class="card-footer"> 

                        <div class="d-flex justify-content-between ">
                            <div>
                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                    <i class="fas fa-star" style="color:#f5de20;"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                
                
                                <span> (4.1/5)</span>
                            </div>
                            <div>Business</div>
                        </div>
                     
                        </div> 
</div>
 </div> 


 <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6">
     <div class="card overflow-hidden"> 
        <div class="item-card7-imgs"> 
            <a href="app-details.html"></a> 
            <img src="Assets/imgs/team-viewer.svg" alt="Dash" class="p-0">
         </div> 
         <div class="card-body"> 
            <div class="item-card7-desc"> 
                <div class="item-card7-text">
                     <a href="app-details.html" class="text-dark text-header">
                        <h4 class="mb-1">Team-Viewer</h4></a> 
                        <a href="app-details.html" class="text-subtext">Free</a> 
                    </div>
                     <ul class="item-cards7-ic software-list mb-0 mt-3">
                         <li>
                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                        </li> 
                        <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                        </li>
                         <li>
                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                        </li> 
                        <li>
                            <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a>
                        </li> 
                    </ul> 
                    <p>Various versions have evolved over the years, sometimes</p>
                </div> 
            </div>
            
            <div class="card-footer"> 

                <div class="d-flex justify-content-between ">
                    <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
        
        
                        <span> (4.1/5)</span>
                    </div>
                    <div>Business</div>
                </div>
             
                </div>
                </div>
             </div> 


            </div>
         </div> 



      </div>
    </div> 

                <div class="text-center"> 
                    <a href="windows-newest.html" class="btn btn-primary"> View More</a>
                </div>
           </div>

         </div>




         <!-- second design -->
 <section class="sptb"> 
            <div class="about-1 cover-image background-size sptb pt-7 pb-7 bg-background-color" data-bs-image-src="Assets/imgs/banner3.jpg" style="background: url('Assets/imgs/banner3.jpg') center center;"> 
             <div class="content-text mb-0 text-white info">
                <div class="container"> <div class="row text-center">
                    <div class="col-lg-4 col-md-4 mt-3 mb-3">
                        <!-- <i class="fa fa-comment-o fs-25 counter-status-icon me-3 mb-1"></i> -->
                        <!-- <i class="fa-regular fa-comment counter-status-icon me-3 mb-1"></i> -->
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



 <!-- testimonial -->
 <section class="sptb bg-white">
    <div class="container">
            <div class="section-title center-block text-center">
                <h2>Testimonials</h2>
                <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
            </div>
            <!-- slider -->
            <ul class="slider m-5">

                <li>
                   <!-- <img src="Assets/imgs/Spain_flag.jpg" alt="" class="go"> -->
                   <div class="testimonia">
                    <div class="testimonia-img mx-auto mb-3"> 
                      <img src="Assets/imgs/carasoul.jpg" class="img-thumbnail mx-auto d-block rounded-circle alt=" alt="" style="width:98px;height: 100px!important;">
                          <p class="text-center">
                              <i class="fa fa-quote-left"></i> 
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint<br>occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis<br> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                          </p>
      
                      <div class="testimonia-data text-center">
                           <h4 class="text-center">Sophie Carr</h4>
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
                      </div>
                </li>
        
                <li>
                    <div class="testimonia">
                        <div class="testimonia-img mx-auto mb-3"> 
                          <img src="Assets/imgs/carasoul1.jpg" class="img-thumbnail mx-auto d-block rounded-circle alt=" alt="" style="width:98px;height: 100px!important;">
                              <p class="text-center">
                                  <i class="fa fa-quote-left"></i> 
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint<br>occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis<br> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                              </p>
          
                          <div class="testimonia-data text-center">
                               <h4 class="text-center">Sophie Carr</h4>
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
                          </div>  
                </li>
        
                <li>
                    <div class="testimonia">
                        <div class="testimonia-img mx-auto mb-3"> 
                          <img src="Assets/imgs/carasoul3.jpg" class="img-thumbnail mx-auto d-block rounded-circle alt=" alt="" style="width:98px;height: 100px!important;">
                              <p class="text-center">
                                  <i class="fa fa-quote-left"></i> 
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint<br>occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis<br> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                              </p>
          
                          <div class="testimonia-data text-center">
                               <h4 class="text-center">Sophie Carr</h4>
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
                          </div>
                </li>
            </ul> 
        </div>   
 </section>





 <section class="sptb">
    <div class="container">
        <div class="section-title center-block text-center">
            <h2>Top <span>Paid</span> Apps</h2>
            <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
        </div>
            <!-- slider -->
            <ul class="slider2 m-5">

                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/camera-pro.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">HD Camera Pro</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="app-details.html" class="btn btn-primary mt-3">Download</a>
                            </div>
                    </div> 
                        <div class="card-footer"> 

                        <div class="d-flex justify-content-between ">
                        <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>


                        <span> (4.1/5)</span>
                        </div>
                        <div>android</div>
                        </div>
                    </div>
                </div> 
            </div>
                </li>

                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/app-lock.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Applock</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="paid-app-details.html" class="btn btn-primary mt-3">$ 350 Buy Now</a>
                            </div>
                    </div> 
                        <div class="card-footer"> 

                        <div class="d-flex justify-content-between ">
                        <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>


                        <span> (4.1/5)</span>
                        </div>
                        <div>android</div>
                        </div>
                    </div>
                </div> 
            </div>
                </li>



                
                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/utorrent.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header" >
                                           <h4 class="mb-1">Evernote</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p><a href="app-details.html" class="btn btn-primary mt-3">Download</a>
                            </div>
                    </div> 
                    <div class="card-footer"> 

                    <div class="d-flex justify-content-between ">
                    <div>
                        <i class="fas fa-star" style="color:#f5de20;"></i>
                        <i class="fas fa-star" style="color:#f5de20;"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>


                    <span> (4.1/5)</span>
                    </div>
                    <div>android</div>
                    </div>
                </div>
            </div> 
        </div>
                </li>

                
                

                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/boost-pro.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">RAM & Game Bootster</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="paid-app-details.html" class="btn btn-primary mt-3">$ 150 Buy Now</a>
                            </div>
                    </div> 
                <div class="card-footer"> 

                <div class="d-flex justify-content-between ">
                <div>
                    <i class="fas fa-star" style="color:#f5de20;"></i>
                    <i class="fas fa-star" style="color:#f5de20;"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>


                <span> (4.1/5)</span>
                </div>
                <div>android</div>
                </div>
        </div>
     </div> 
 </div>
                </li>



                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/Icon-Pack.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">One UI Icon Pack</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="app-details.html" class="btn btn-primary mt-3">Download</a>
                            </div>
                    </div> 
<div class="card-footer"> 

<div class="d-flex justify-content-between ">
<div>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star" style="color:#f5de20;"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>


   <span> (4.1/5)</span>
</div>
<div>android</div>
</div>

</div>
</div> 
</div>
                </li>



                <li>
                    <div class="mx-2">
                        <div class="card overflow-hidden">
                            <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div>
                        <div class="item-card7-imgs"> 
                           <a href="app-details.html"></a>
                            <img src="Assets/imgs/itunes.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;"> 
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="app-details.html" class="text-dark text-header">
                                           <h4 class="mb-1">Itunes</h4>
                                       </a> 
                                       <a href="app-details.html" class="text-subtext">Free</a>
                                    </div> 
                                    <ul class="item-cards7-ic software-list mb-0 mt-3">
                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a>
                                           </li> 

                                           <li>
                                               <a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li>
                                    </ul> 

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="paid-app-details.html" class="btn btn-primary mt-3">$ 250 Buy Now</a>
                            </div>
                    </div> 
                        <div class="card-footer"> 

                        <div class="d-flex justify-content-between ">
                        <div>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star" style="color:#f5de20;"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>


                        <span> (4.1/5)</span>
                        </div>
                        <div>Mac</div>
                        </div>

                        </div>
                        </div> 
                        </div>
                </li>

            </ul> 
        </div>   
 </section>




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
                        <img src="Assets/imgs/clogo.png" width="22px" height="35px">
                        <!-- <img src="Assets/imgs/cicon.jpg" width="22px" height="35px"> -->

                    </div>
                    <div class="text_background_exit">
                        <h2>Reliable Software Advice</h2>
                        <p>“Thanks to SoftwareSuggest, I was able to discover the perfect match of software solution that aligns perfectly with my choice of requirements. Highly recommended!"</p>
                    </div>
                    <div class="row tod_main_outer">
                        <div class="col-md-3">
                            <img src="https://images.softwaresuggest.com/static-frontend/exit_intent_new/tod_cun_img.svg">
                        </div>
                        <div class="col-md-9 pl-1">
                            <h4>Tod Cunningham</h4>
                            <p>SoftwareSuggest User</p>
                        </div>
                        <div class="below_background_image mt-3"></div>
                    </div>
                </div>
                <div class="bottom_gradient_div"></div>
            </div>

            <div class="col-12 col-sm-12 col-md-7 col-lg-6 d-flex align-items-center justify-content-center flex-column">
                <div class="popup_desk_heading_div">
                    <h5 class="popup_desk_title" style="margin-top: 18px;">Need personal assistance in software selection?</h5>
                </div>
                <div class="popup_desk_form_main">
                    <div class="popup_desk_form_div ">
                        <form class="popup_desk_form_1" data-hs-cf-bound="true"> 
                            <input type="hidden" class="ssleadpost_inboundlead" name="ssleadpost[inboundlead]" value="1">       
                            <input type="hidden" class="ssleadpost_currentform" name="ssleadpost[currentform]" value="firstform">
                            <input type="hidden" class="ssleadpost_source" name="ssleadpost[source]" value="ExitIntent">
                            <input type="hidden" class="ssleadpost_countrycode" name="ssleadpost[countrycode]" value="+91">
                            <input type="hidden" class="ssleadpost_categoryid" name="ssleadpost[categoryid]" value="">
                            <input type="hidden" class="utm_source_hiden" name="ssleadpost[utm_source]" value="">
                            <input type="hidden" class="is_mobile_no_valid" name="ssleadpost[is_mobile_no_valid]">
                            <div class="row">
                                <div class="col-md-6 exit_input_col exit_name_icon_input popup_desk_field_group name_input_validation">
                                    <label>Name*</label>
                                    <input class="popup_desk_field name_input_validation" pattern="^[a-zA-Z0-9].*" type="text" value="" placeholder="Enter your Name" required="1" name="ssleadpost[name]" maxlength="64">
                                </div>
                                <div class="col-md-6 exit_input_col exit_email_icon_input popup_desk_field_group">
                                    <label>Business Email*</label>
                                    <input class="popup_desk_field" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$" placeholder="Enter your Business Email" value="" required="1" name="ssleadpost[email]">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 exit_input_col exit_phone_icon_input popup_desk_field_group mobile_no_field">
                                    <label>Mobile Number*</label>
                                    <input class="popup_desk_field" pattern="^[a-zA-Z0-9].*" type="text" placeholder="Enter your Mobile Number" value="" required="1" name="ssleadpost[company]">
                                    
                                </div>
                                <div class="col-md-6 exit_input_col exit_comp_name_icon_input popup_desk_field_group">
                                    <label>Company Name*</label>
                                    <input class="popup_desk_field" pattern="^[a-zA-Z0-9].*" type="text" placeholder="Enter your Company Name" value="" required="1" name="ssleadpost[company]">
                                </div>
                            </div>
                            <div class="popup_desk_submit">
                                <button type="submit" class="popup_desk_submit_btn form_1_submit">Get Free Consultation</button>
                            </div>
                            <div class="popup_desk_trusted_line_bottom">
                                <span class="popup_desk_shield_img"><img src="https://www.softwaresuggest.com/assets2/img/exit_intent_img/sheild.svg"></span><span>Trusted By 1,100,008+ Happy &amp; Satisfied Businesses</span>
                            </div>
                            <div class="popup_desk_tnc_line">
                                    <span>By submitting, you agree to our <a target="_blank" rel="noopener" href="https://www.softwaresuggest.com/tos">Terms of Use</a> and <a target="_blank" rel="noopener" href="https://www.softwaresuggest.com/privacy"> Privacy Policy</a></span>
                            </div>
                        </form>
                        <form class="popup_desk_form_2" data-hs-cf-bound="true">
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
                                        <option value="Developer">Develope</option>
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
                        </form>
                        <form class="popup_desk_form_3" data-hs-cf-bound="true">
                            <input type="hidden" class="ssleadpost_lead_id" name="ssleadpost[lead_id]">
                            <div class="row">
                                <div class="col-md-6 exit_input_col exit_select_employee_icon_input popup_desk_field_group no_of_employees_old">
                                    <label>No Of Employees*</label>
                                    <select class="popup_desk_field" required="1" name="ssleadpost[no_of_employees]">
                                        <option value="">Select No. of Employees</option>
                                        <option value="Less than 50">Less than 50</option>
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
                        </form>
                        <form class="popup_desk_form_4" data-hs-cf-bound="true">
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
                        </form>
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
 




