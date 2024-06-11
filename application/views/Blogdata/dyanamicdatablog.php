
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

    .fontcheck{
        font-size:16px;
    }

    @media (max-width: 375px) {
        .btnrow{
            width: 100%;
        }
        .blogbutton{
            margin-left: 23%;
        }

        .maindiv{
            margin-top:0px;

        }

        .fontcheck{
            font-size:13px!important;
        }

        .btnrowresponsive1{
        margin-top: 14px;
        margin-left: 56px;
        }

        .btnrowresponsive2{
            margin-top: 14px;
            margin-left: 1px;
        }

        .iconres{
            margin-top:20px;
        }

        .cardres{
            margin-top: 20px;
            width: 340px!important;
            margin-left: -21px!important;
        }

        .postbutton{
            margin-left: 60px;
        }
        
        .flexstyle{
        gap:5px!important;
       }

       .mainblock{
        margin-top: 19px!important;
        }


    }

    .anchorhover:hover{
        color:rgb(223 10 123)!important;
    }

    .flexstyle{
        gap:25px;
    }

    .blogdesc {
    height: 95px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* display: -webkit-box; */
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
}

.mainblock{
    margin-top: 65px;
}

.btnblog:hover{
    background: #df0a7b;
    color: white;
}

    </style>



    <?php 
                                             
         foreach($detailblog as $rw=>$value){
                                                                 
         echo '
    
         <div class="container">
            <div class="row g-lg-4 gy-5 p-5 mainblock">
                <div class="col-lg-8">
                    <div class="subdiv">
                    <button class="btnrow">'.$value->blogTypeName.'</button>
                    <h2 class="mt-5">'.$value->bloglabel1.'</h2>
                    <hr style="border-top: 1px solid black;margin-top:-3px;">
                    <div class="d-flex mt-2" style="justify-content: space-between;">
                        <div class="fontcheck">
                            <img src="'.base_url().'Assets/imgs/admin.png" alt="" style="height:40px; border-radius: 50%;"> &nbsp;By,'.$value->blog_name.'
                        </div>

                        <div>
                            <p class="mt-3" class="fontcheck" style="font-size:16px;"><i class="fa-regular fa-clock">&nbsp;</i>'.$value->publishdate.'</p>
                        </div>
                    </div>
                    <hr style="border-top: 1px solid black;margin-top:-3px;"> 

                    <div class="blogdesc" style="height: 500px;overflow-y: scroll;">
                    <p style="vertical-align: middle;max-width: 100%;height: auto !important;width: 338px;">'.$value->blogdescription.'</p><br>
                    </div>


                    <div style="font-size:18px;" class="mt-3 mt-lg-0">
                    Tags:
                <button class="btn btnrow2 gx-5">Software</button>&nbsp;
                <button class="btn btnrow2 gx-5">Marketing</button>&nbsp;
                <button class="btn btnrow2 btnrowresponsive1 gx-5">Cyber</button>&nbsp;
                <button class="btn btnrow3 btnrowresponsive2">Developement</button>&nbsp;&nbsp;&nbsp;

                Share On:&nbsp;&nbsp;


              

                <a href="https://www.youtube.com/@comtransetechnology1659" class="mx-2" target="_blank"><i class="fa-brands fa-youtube iconres"></i></a>

                <a href="https://www.instagram.com/comtranse?igsh=MWhyaWVva2VtMHl6Yw==" class="mx-2" target="_blank"><i class="fa-brands fa-instagram iconres"></i></a>

                <a href="javascript:void(0);" class="mx-2"><i class="fa-brands fa-whatsapp iconres"></i></a>
                
                <br><br><br> <br>
            </div>
        


            <form action="" id="Form" class="" data-toggle="validator" enctype="multipart/form-data" action="" method="post">
            <h1 style="text-decoration: underline;text-decoration-color: green;text-decoration-thickness:1px;text-underline-offset: 8px" class="mt-5">Leave A Comment</h1><br><br><br>

            
            <input type="hidden" class="form-control" id="fkblog_id" name="fkblog_id" value="'.$value->blogid.'">

            <input type="text" placeholder="Enter Your Name *" class="form-control" id="comment_name" name="comment_name" value="">

            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <input type="text" placeholder="Enter Your email *" class="form-control mb-50" id="comment_email" name="comment_email" value="" oninput="emailfunction()">
                <span id="emailids" class="text-danger font-weight-bold"></span>
                </div>

                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <input type="text"  placeholder="Subject *" class="form-control" id="comment_sub" name="comment_sub" value="">
                </div>
            </div>

            <textarea name="comment_message" id="comment_message" cols="30" rows="10" placeholder="your message" class="form-control" value=""></textarea><br><br>

            <button type="button" class="btn btn-primary btn-lg br-te-3 br-be-3 postbutton hoverbutton" id="post_id" style="background: #df0a7b;color: white;border-radius:3px;box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"> 
            Post a Comment </button>

        </form>


                    
                    </div>
                </div>



                <div class="col-lg-4">
                    <div class="card cardstyle cardres" style="line-height: 40px; padding: 25px 26px;">
                        <h4 class="heading" style="line-height:0px;">Category</h4>
                        <hr>
                        <ul style="font-size:17px;">
                            <li>Software Developement</li>
                            <li>Apps Developement</li>
                            <li>Web Design</li>
                            <li>Graphic Design</li>
                            <li>Digital Marketing</li>
                            <li>UI Design</li>
                            <li>UX Design</li>
                            <li>React Js</li>
                            <li>Cyber Security</li>

                        </ul>
                    </div>


                    <div class="card p-3 cardstyle cardres">
                    <h4 class="heading m-0">Newest Posts</h4>
                    <hr>
                    <div class="d-flex">
                        <div>
                            <img src="'.base_url().'Assets/imgs/bgimages/blog1.webp" alt="" style="height: 85px;border-radius: 5px;width: 110px;">
                        </div>
                        <div class="p-3">
                            <h6 style="font-size: 18px;font-weight: 500; transition: .5s;color: black;"><a href="javascript:void(0);" class="anchorhover">Blockchain.com</a></h6>
                        </div>
                    </div>

                    <div class="d-flex mt-4">
                        <div>
                            <img src="'.base_url().'Assets/imgs/bgimages/blog2.webp" alt="" style="height: 85px;border-radius: 5px;width: 110px;">
                        </div>
                        <div class="p-3">
                        <h6 style="font-size: 18px;font-weight: 500; transition: .5s;color: black;"><a href="javascript:void(0);" class="anchorhover">Artificial intelligence</a></h6>
                        </div>
                    </div>

                    <div class="d-flex mt-4">
                        <div>
                            <img src="'.base_url().'Assets/imgs/bgimages/blog4.jpg" alt="" style="height: 85px;border-radius: 5px;width: 110px;">
                        </div>
                        <div class="p-3">
                        <h6 style="font-size: 18px;font-weight: 500; transition: .5s;color: black;"><a href="javascript:void(0);" class="anchorhover">Cloud Application.</a></h6>
                        </div>
                    </div>

                </div>

                <div class="card p-3 cardtag cardstyle cardres">
                    <h4 class="heading">All Tag</h4>
                    <hr>

                    <div class="d-flex" style="gap:25px">
                        <div>
                            <button class="btn btnblog">Webside</button>
                        </div>
                        <div>
                            <button class="btn btnblog">Web Design</button>
                        </div>
                    </div><br>

                    <div class="d-flex flexstyle">
                        <div>
                            <button class="btn btnblog">Developement</button>
                        </div>
                        <div>
                            <button class="btn btnblog">Graphic Design</button>
                        </div>
                    </div><br>

                    <div class="d-flex" style="gap:25px">
                        <div>
                            <button class="btn btnblog">Graphic</button>
                        </div>
                        <div>
                            <button class="btn btnblog">UI/UX Design</button>
                        </div>
                    </div><br>

                    <div class="d-flex" style="gap:25px">
                        <div>
                            <button class="btn btnblog">Activities</button>
                        </div>
                        <div>
                            <button class="btn btnblog">Software Design</button>
                        </div>
                    </div><br>

                    <div class="d-flex" style="gap:25px">
                        <div>
                        <button class="btn btnblog">3D Design</button>
                        </div>
                    </div><br>
                    
                </div>
                </div>
            </div><br<<br>

      
           
    </div>
                


                     ';
               
    } ?> 





<script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/PostcommentCreate.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
        function emailfunction() {
            var emails = document.getElementById('comment_email').value;
            var errorSpan = document.getElementById('emailids');
            // alert("hii");

            if (emails.indexOf('@') <= 0) {
                errorSpan.innerHTML = " ** Please enter valid email id";
                return false;
            } else if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
                errorSpan.innerHTML = " ** Please enter valid email id";
                return false;
            } else {
                errorSpan.innerHTML = ""; // Clear the error message
            }
        }
   </script>

<!-- <a href="javascript:void(0);"class="mx-2"><i class="fa-brands fa-facebook-f iconres"></i></a> -->

<!-- <div class="maindiv p-1">
            <button class="btn blogbutton mt-5">
                <i class="fa-solid fa-circle icon"></i>&nbsp; 
                 Blog Details &nbsp;
                <i class="fa-solid fa-circle icon"></i>
            </button>
            <h1 class="text-center mt-3" style="font-weight:bold;">"Inslights of Exploring Technology"</h1>
            <p class="text-center mt-3">
                <span style="color:#df0a7b;font-weight:bold;"> Home </span>
                <i class="fa-solid fa-minus"></i>
                <i class="fa-solid fa-arrow-right"></i>
                <span> Blog Details </span>
            </p>
            </div> -->

            <!-- <h4>Grant Distributions Conti nu to Incr Ease.</h4> -->
                            <!-- <p style="font-size:16px;">May 18,2023</p> -->
