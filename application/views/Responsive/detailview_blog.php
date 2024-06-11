
    <style>
    .blogbutton{
        background:#df0a7b;
        color: white;
        width: 170px;
        margin-left: 42%;
        margin-top:50px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    .btnrow{
        color: #df0a7b;
        padding: 4px;
        width: 31%;
        border: 1px solid green;
        font-size: 18px;
        border-radius: 8px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    .icon{
        font-size:5px;
    }

    .btnrow2{
        border: 1px solid;
        border-radius: 5px;
        font-size: 14px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    .btnrow3{
        border: 1px solid;
        border-radius: 5px;
        font-size: 14px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    .cardtag{
        height: 329px;
        line-height: 10px;
    }
    .heading{
        color:#df0a7b;
        font-size:24px;
    }

    .maindiv{
        line-height:25px;
        margin-top: 50px;
    }
    .subdiv{
        /* line-height:32px; */
    }
    input{
        margin-bottom:35px;
    }
    .cardstyle{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    </style>

            <div class="container">
            <div class="maindiv p-1">
            <button class="btn blogbutton mt-5"><i class="fa-solid fa-circle icon"></i>&nbsp; Blog Details &nbsp;<i class="fa-solid fa-circle icon"></i></button>
            <h1 class="text-center mt-3" style="font-weight:bold;">"Inslights of Exploring Technology"</h1>
            <p class="text-center mt-3"><span style="color:#df0a7b;font-weight:bold;"> Home </span><i class="fa-solid fa-minus"></i><i class="fa-solid fa-arrow-right"></i><span> Blog Details </span></p>
            </div><br><br><br><br>
            

        <div class="row">
            <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                <div class="subdiv">
                <button class="btnrow">Software Developement</button>
                <h2 class="mt-5">Admin Blog</h2>
                <hr style="border-top: 1px solid black;">
                <div class="d-flex mt-3" style="justify-content: space-between;">
                    <div>
                        <img src="<?= base_url();?>Assets/imgs/popadmin.jpg" alt="" style="height:50px; border-radius: 50%;"> By,Ram Patil
                    </div>

                    <div>
                        <p class="mt-4"><i class="fa-regular fa-clock"> 18-01-2024</i></p>
                    </div>
                </div>
                <hr style="border-top: 1px solid black;"> 

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti harum laboriosam fuga ducimus hic natus dicta .</p><br>
                </div>
            </div>



            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div class="card cardstyle" style="line-height: 30px; padding: 25px 26px;">
                     <h4 class="heading">Category</h4>
                     <hr>
                    <ul style="font-size:17px;">
                        <li>Web Design</li>
                        <li>Apps Developement</li>
                        <li>Software Developement</li>
                        <li>Motion Graphics</li>
                        <li>UI/UX Design</li>
                        <li>Software Developement</li>
                     </ul>
                </div>
            </div>
        </div><br<<br>

        <!-- second row -->
        <div class="row">
            <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">

                    <div style="font-size:18px;">
                            Tags:
                        <button class="btn btnrow2 gx-5">Software</button>&nbsp;
                        <button class="btn btnrow2 gx-5">Marketing</button>&nbsp;
                        <button class="btn btnrow2 gx-5">Cyber</button>&nbsp;
                        <button class="btn btnrow3">Developement</button>&nbsp;&nbsp;&nbsp;
                        Share On:&nbsp;&nbsp;
                        
                        
                        <i class="fa-brands fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;
                        <i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;&nbsp;
                        <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;
                        <i class="fa-brands fa-whatsapp"></i><br><br><br> <br>
                    </div>
                  


                <form action="" id="Form" class="" data-toggle="validator" enctype="multipart/form-data" action="" method="post">
                <h1 style="text-decoration: underline;text-decoration-color: green;text-decoration-thickness:1px;text-underline-offset: 8px">Leave A Comment</h1><br><br><br>
                <input type="text" placeholder="Enter Your Name" class="form-control" id="comment_name" name="comment_name" value="">

                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <input type="text"  placeholder="Enter Your email" class="form-control" id="comment_email" name="comment_email" value="">
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <input type="text"  placeholder="Subject" class="form-control" id="comment_sub" name="comment_sub" value="">
                    </div>
                </div>

                <textarea name="comment_message" id="comment_message" cols="30" rows="10" placeholder="your message" class="form-control" value=""></textarea><br><br>

                <!-- <button class="btn" style="background: #df0a7b;color: white;border-radius:3px;box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;">Post a Comment</button id="post_id" > -->

                <button type="button" class="btn btn-primary btn-lg br-te-3  br-be-3" id="post_id" style="background: #df0a7b;color: white;border-radius:3px;box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"> 
                Post a Comment </button>

            </form>
            </div>
                <!--  -->


            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                <div class="card p-3 cardstyle">
                    <h4 class="heading">Newest Posts</h4>
                    <hr>
                    <div class="d-flex">
                        <div>
                            <img src="<?= base_url();?>Assets/imgs/image_2024_01_05T06_10_33_642Z.png" alt="" style="height:90px;border-radius: 10px;">
                        </div>
                        <div class="p-3">
                            <h4>Grant Distributions Conti nu to Incr Ease.</h4>
                            <p style="font-size:16px;">May 18,2023</p>
                        </div>
                    </div>

                    <div class="d-flex">
                        <div>
                            <img src="<?= base_url();?>Assets/imgs/image_2024_01_05T06_10_33_642Z.png" alt="" style="height:90px;border-radius: 10px;">
                        </div>
                        <div class="p-3">
                            <h4>Grant Distributions Conti nu to Incr Ease.</h4>
                            <p style="font-size:16px;">May 18,2023</p>
                        </div>
                    </div>

                    <div class="d-flex">
                        <div>
                            <img src="<?= base_url();?>Assets/imgs/image_2024_01_05T06_10_33_642Z.png" alt="" style="height:90px;border-radius: 10px;">
                        </div>
                        <div class="p-3">
                            <h4>Grant Distributions Conti nu to Incr Ease.</h4>
                            <p style="font-size:16px;">May 18,2023</p>
                        </div>
                    </div>

                </div>

                <div class="card p-3 cardtag cardstyle">
                    <h4 class="heading">All Tag</h4>
                    <hr>

                    <div class="d-flex" style="gap:25px">
                        <div>
                            <button class="btn">Webside</button>
                        </div>
                        <div>
                            <button class="btn">Web Design</button>
                        </div>
                    </div><br>

                    <div class="d-flex" style="gap:25px">
                        <div>
                            <button class="btn">Developement</button>
                        </div>
                        <div>
                            <button class="btn">Graphic Design</button>
                        </div>
                    </div><br>

                    <div class="d-flex" style="gap:25px">
                        <div>
                            <button class="btn">Graphic</button>
                        </div>
                        <div>
                            <button class="btn">UI/UX Design</button>
                        </div>
                    </div><br>

                    <div class="d-flex" style="gap:25px">
                        <div>
                            <button class="btn">Activities</button>
                        </div>
                        <div>
                            <button class="btn">Software Design</button>
                        </div>
                    </div><br>

                    <div class="d-flex" style="gap:25px">
                        <div>
                        <button class="btn">3D Design</button>
                        </div>
                    </div><br>
                    


                </div>
               
                
            </div>
        </div>
    </div>

 <script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/PostcommentCreate.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


