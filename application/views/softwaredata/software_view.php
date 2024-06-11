<div class="page-wrapper">
    <div class="content">
        <div class="row">
            <div class="col-lg-7 col-sm-12 m-auto">
                <div class="content-page-header"><h5>Add & Edit Slider</h5></div>
                <form role="form" id="Form" enctype="multipart/form-data" action="" method="post">

                    <input type="text" name="softwareid" id="softwareid" class="form-control mb-3" value="<?php if(!empty($dataa[0]->softwareid)){echo $dataa[0]->softwareid;}?>">

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>Software Name</label>
                                <input type="text" name="softwarename" id="softwarename" class="form-control" placeholder="Slider name" value="<?php if(!empty($dataa[0]->softwarename)){echo $dataa[0]->softwarename;}?>">
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>Rate</label>
                                <input type="text" class="form-control" id="rate" name="rate">
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="">Description</label>
                                <textarea class="form-control custom-control" rows="3" id="description" name="description" placeholder="Enter Description" onkeypress="return onlyAlphabets(event,this)" required="" data-parsley-id="3139"><?php if(!empty($dataa[0]->description)){echo $dataa[0]->description;}?></textarea>

                            </div>
                        </div>
                        <div class="col-lg-12">
                        

                        <input type="file" class="form-control form-control-sm" id="photo1" name="photo1" placeholder="image" onchange="readimage1(this,'profile-img-tag1');" value="<?php if(!empty($dataa))echo $dataa[0]->photo1; ?>"  >
                                                
                                                <?php if(!empty($dataa[0]->photo1)){
                                                ?>
                                                    <img src="<?php echo base_url();?>upload/<?php echo $dataa[0]->photo1 ?>" id="profile-img-tag1" calss="img-thumbnail" style="height: 86px;margin: 10px 32px;"> 
                                                <?php } ?>
                                                        
                                                <img src="" id="profile-img-tag1" calss="img-thumbnail" style="margin: 10px 32px;height: 86px" /> 
                                                <input type="hidden" name="hidden_photo1" id="hidden_photo1" value="<?php if(!empty($dataa[0]->photo1)){echo $dataa[0]->photo1;} ?>"> 
                                                
                                                <input type="hidden" id="getphoto1" value="<?php if(!empty($dataa[0]->photo1)){echo $dataa[0]->photo1;} ?>">
                            <!-- <div class="upload-div mb-0 mt-4">
                                <div class="upload-sets">
                                    <div class="upload-sets-btn form-group">
                                        <label>Software Image(Web) <span>(Display in the Web)</span></label>

                                        <input type="file" name="photo" id="photo"  class="form-control" onchange="readphoto(this);" value="<?php if(!empty($dataa))echo $dataa[0]->photo; ?>">

                                        <a href="javascript:void(0);" class="btn btn-upload">Upload</a>
                                        
                                    </div>
                                </div>
                                <div class="upload-img my-5">
                                    <div class="upload-imgset" style="width: 180px;height: 120px;">
                                       
                                        <?php if(!empty($dataa[0]->photo)){?>

                                            <img src="<?php echo base_url();?>upload/<?php echo $dataa[0]->photo ?>" alt="img" id="photo" style="width: 180px;height: 180px;">

                                        <?php } ?>
                                        <img src=""  alt="img" id="photo" style="width: 180px;height: 120px;">

                                        <input type="hidden" name="hidden_photo1" id="hidden_photo1" value="<?php if(!empty($dataa[0]->photo)){echo $dataa[0]->photo;} ?>">
                                    </div>
                                </div>
                            </div> -->

                        </div>

                        
                        
                        
                        
                        <div class="col-lg-12">
                            <div class="btn-path">
                                <a href="<?php echo base_url(); ?>Slider" class="btn btn-cancel me-3">Cancel</a>
                                <button type="button" class="btn btn-submit" name="btn_submit" id="btn_submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- </div>  -->
</div>

<script  src="<?php echo base_url('web_resources');?>/dist/js/jquery.min.js"></script>          
<script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/SoftwareCreate.js"></script>

<script type="text/javascript">

function readimage1(input,valueid) {
                                            // alert("hello");
      if (input.files && input.files[0]) {
        var reader = new FileReader();
         reader.onload = function (e) {
         $('#'+valueid+'').attr('src',e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }

   


</script>

