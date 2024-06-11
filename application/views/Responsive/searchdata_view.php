<?php $url='http://localhost/Admin_applist/upload/'; ?>
<style>
    .searchsection{
        padding:40px 0;
    }

    @media(max-width:992px){
        .searchsection{
        padding:0px!important;
    }

    }
</style>

<div class="container searchsection">
    <div class="col-12">
        <div class="row">


        
            <?php if(empty($dataa)){ ?>

            <div class="col-12 text-center">
                <img src="<?= base_url();?>Assets/imgs/nodatafound.png" alt="">
            </div>
            <?php } ?>

        <?php 
                                             
                                             foreach($dataa as $rw=>$value){

                                                echo '
                                                
                                                <div class="col-12 col-lg-4 col-md-6">
                 <div class="card overflow-hidden cardhover">
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
                                    <i class="fa-solid fa-laptop"></i> Get Demo
                                </a>


                                        <a href="javascript:void(0);" class="btn btn-primary mt-3 detailbutton" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Download</a>
                                
                                 </div>
                         </div>                       
                </div> 
            </div>
                                                
                                                ';
                                        
                                             }
                                        
                                        
                                             ?>
        </div>
    </div>
</div>






<div class="container searchsection">
    <div class="col-12">
        <div class="row">


        
            <?php if(empty($datatoclick)){ ?>

            <div class="col-12 text-center">
                <img src="<?= base_url();?>Assets/imgs/nodatafound.png" alt="">
            </div>
            
            <?php } ?>

        <?php 
                                             
                                             foreach($datatoclick as $rw=>$value){

                                                echo '
                                                
                                                <div class="col-12 col-lg-4 col-md-6">
                 <div class="card overflow-hidden cardhover">
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
                                        onclick="showSoftwareDetails(' . $value->softwareid . ', \'' . $value->softwarename . '\')"><i class="fa-solid fa-circle-info"></i> Download</a>
                                
                                 </div>
                         </div>                       
                </div> 
            </div>
                                                
                                                ';
                                        
                                             }
                                        
                                        
                                             ?>
        </div>
    </div>
</div>

