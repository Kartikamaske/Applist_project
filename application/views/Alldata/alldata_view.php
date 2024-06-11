<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Applist</title>
    <link rel="stylesheet" href="<?php echo base_url(); ?>Assets\css\style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">

    
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    
  <script>
        var base_path="<?php echo base_url();?>";
   </script>
    


    <style>
           .go{
                height: 100px;
                width: 100px;
                border: 2px solid black;
            }

       /* / ------------- start sticky menu bar css ---------- / */

        .navbar_fixed_top{
            position: fixed;
            top: 0;
        }

        @media only screen and (max-width: 991px){
            .horizontal-header {
                z-index: 15;
            }
        }



    /* / ------------- end sticky menu bar css ---------- / */
        
            .slick-slider button{
                position: absolute;
                top: 32%;
                outline: none;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 35px;
                background-color: white;
                color:#9fa9bd;
                /* / z-index: 999; / */
               /*  / appled for sticky menu bar  / */
                z-index: 14; 
                opacity: 7;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
            .slick-slider .slick-prev{
                left: -30px;
                font-size: 0;
                color:#9fa9bd ;
                cursor: pointer;
            }

            .slick-slider .slick-prev::before{
                content: '<';
                line-height: 1;
                font-size: 25px;
            }

            .slick-slider .slick-next{
                right: -30px;
                font-size: 0;
                }

                .slick-slider .slick-next::after{
                    content: '>';
                        line-height: 1;
                        font-size: 25px;
                }

                .slick-slider img{
                    width: 100%;
                    height: 250px;
                }

                .slick-slider{
                    padding: 2px 0;
                    position: relative;
                    height: auto !important;
                }




                .go{
                height: 100px;
                width: 100px;
                border: 2px solid black;
            }

            .slick-slider1 button{
                position: absolute;
                top: 32%;
                outline: none;
                border: none;
                width: 40px;
                height:40px;
                border-radius: 35px;
                background-color: blue;
                color: bisque;
                z-index: 999;
            }

            .slick-slider1 .slick-prev{
                left: -30px;
                font-size: 0;
            }

            .slick-slider1 .slick-prev::before{
                content: '<';
                line-height: 1;
                font-size: 15px;
            }

            .slick-slider1 .slick-next{
                right: -30px;
                font-size: 0;
                }

                .slick-slider1 .slick-next::after{
                    content: '>';
                        line-height: 1;
                        font-size: 25px;
                }

                .slick-slider1 img{
                    width: 100%;
                    height: 250px;
                }

                .slick-slider1{
                    padding: 40px 0;
                    position: relative;
                    height: auto !important;
                }



                .go{
                height: 100px;
                width: 100px;
                border: 2px solid black;
            }

            .slick-slider2 button{
                position: absolute;
                top: 32%;
                outline: none;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 35px;
                background-color: white;
                color:#9fa9bd;
                z-index: 999;
                opacity: 7;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }

            .slick-slider2 .slick-prev{
                left: -30px;
                font-size: 0;
                color:#9fa9bd ;
                cursor: pointer;
            }

            .slick-slider2 .slick-prev::before{
                content: '<';
                line-height: 1;
                font-size: 25px;
            }

            .slick-slider2 .slick-next{
                right: -30px;
                font-size: 0;
                }

                .slick-slider2 .slick-next::after{
                    content: '>';
                        line-height: 1;
                        font-size: 25px;
                }

                .slick-slider2 img{
                    width: 100%;
                    height: 250px;
                }

                .slick-slider2{
                    padding: 2px 0;
                    position: relative;
                    height: auto !important;
                }


                 .go{
                height: 100px;
                width: 100px;
                border: 2px solid black;
            }

            .slick-slider3 button{
                position: absolute;
                top: 32%;
                outline: none;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 35px;
                background-color: white;
                color:#9fa9bd;
                z-index: 999;
                opacity: 7;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }

            .slick-slider3 .slick-prev{
                left: -30px;
                font-size: 0;
                color:#9fa9bd ;
                cursor: pointer;
            }

            .slick-slider3 .slick-prev::before{
                content: '<';
                line-height: 1;
                font-size: 25px;
            }

            .slick-slider3 .slick-next{
                right: -30px;
                font-size: 0;
                }

                .slick-slider3 .slick-next::after{
                    content: '>';
                        line-height: 1;
                        font-size: 25px;
                }

                .slick-slider3 img{
                    width: 100%;
                    height: 250px;
                }

                .slick-slider3{
                    padding: 2px 0;
                    position: relative;
                    height: auto !important;
                }

                .btn-spacing {
                 margin-left: 10px;
                 }

                 @media (max-width: 375px) {
                    .btn-spacing {
                 margin-left: 0px!important;
                 }
                 }
    </style>


        <style>
            #ouibounce-modal .popup_desk_form_4 .row{
                width: 85%;
                margin: 0 auto;
            }
            #ouibounce-modal.popup_desk {
                display: none;
                position: fixed;
                height: 100%;
                width: 100%;
                right: 0;
                top: 0;
                bottom: 0;
                left: 0;
                z-index: 9999;
                overflow: auto;
            }
            #ouibounce-modal.popup_desk.active_popup {
                display: block;
            }
            #ouibounce-modal .white_check_outer {
                display: flex;
                justify-content: center;
            }
            #ouibounce-modal .custom-control {
                position: relative;
                display: block;
                padding-left: 1.5rem;
                top: -1px;
            }
            #ouibounce-modal .new_agree_terms_checkbox {
                display: flex;
                align-items: flex-start;
            }
            #ouibounce-modal .custom-control-input {
                position: absolute;
                z-index: -1;
                opacity: 0;
            }
            #ouibounce-modal .popup_desk_main_div {
                width: 100%;
                margin: 1.75rem auto;
                min-height: calc(100% - (1.75rem * 2));
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                display: -webkit-box;
                display: -ms-flexbox;
            }
            #ouibounce-modal .custom-checkbox .custom-control-label::before {
                border-radius: 0.25rem;
                border: #001965 solid 2px;
            }
            #ouibounce-modal .custom-control-label::before {
                position: absolute;
                left: 2px;
                display: block;
                width: 1rem;
                height: 1rem;
                pointer-events: none;
                content: "";
                background-color: #fff;
                border: #ADB5BD solid 1px;
                top: -2px;
            }
            #ouibounce-modal .custom-control-label::after {
                position: absolute;
                left: 2px;
                top: 0;
                display: block;
                width: 1rem;
                height: 1rem;
                content: "";
                background: no-repeat 50%/50% 50%;
                top: -2px;
                cursor: pointer;
            }
            #ouibounce-modal .background_image_exit_outer h2{
                font-size: 20px;
                font-weight: 700;
                margin-top: 0;
            }
            #ouibounce-modal .background_image_exit_outer p{
                font-size: 13px;
                font-weight: 400;
                line-height: 23.436px;
                margin-bottom: 0;
            }
            #ouibounce-modal .background_image_exit_outer {
                border-radius: 22px;
                background: linear-gradient(28deg, #040C26 0.98%, #001146 92.19%);
                padding: 26px;
                box-shadow: 0px 6.696078300476074px 18.414215087890625px 0px rgba(0, 0, 0, 0.25);
                background-size: cover!important;
                background-repeat: no-repeat;
                height: 100%;
                color: #FFF;
                position: relative;
                overflow: hidden;
            }
            #ouibounce-modal .text_background_exit {
                background-image: url('https://images.softwaresuggest.com/static-frontend/exit_intent_new/text_background_exit.png');
                background-size: cover!important;
                background-repeat: no-repeat;
                padding: 14px;
                border-radius: 13px;
            }
            #ouibounce-modal .ss_icon_outer {
                width: 52px;
                height: 52px;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #fff;
                border-radius: 50px;
                box-shadow: -1.6740195751190186px 21.76225471496582px 21.76225471496582px 0px rgba(9, 20, 55, 0.90);
            }
            #ouibounce-modal .tod_main_outer{
                margin-top: 20px;
            }
            #ouibounce-modal .tod_main_outer h4{
                font-size: 14px;
                margin: 0;
                font-weight: 500;
            }
            #ouibounce-modal .tod_main_outer .col-md-8{
                padding-left: 0 !important;
            }
            #ouibounce-modal .tod_main_outer{
                width: 82%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #ouibounce-modal .trusted_by_happy{
                font-size: 10px !important;
                font-weight: 500 !important;
                margin-top: 36px !important;
                margin-bottom: 16px !important;
            }
            #ouibounce-modal .tod_main_outer p{
                font-size: 9px;
                font-weight: 100;
                line-height: unset;
                margin-top: 5px;
                margin-bottom: 0;
            }
            #ouibounce-modal .below_background_image {
                background-image: url(https://images.softwaresuggest.com/static-frontend/exit_intent_new/exit-client-image-below.svg);
                background-size: cover!important;
                background-repeat: no-repeat;
                width: 100%;
                height: 59px;
            }
            #ouibounce-modal .popup_desk_auto_scroll_div label{
                color: var(--gray-700, #344054);
                font-size: 12px;
                font-weight: 500;
                line-height: 18px;
                display: inline-block;
                margin-bottom: 6px;
            }
            #ouibounce-modal .exit_input_col {
                margin-bottom: 20px;
            }
            #ouibounce-modal .popup_desk_auto_scroll_div {
                background: #fff;
                width: 100%;
                position: relative;
                padding: 26px !important;
                border-radius: 22px;
                margin-left: 3px;
                background: #FFF;
                box-shadow: 0px 6.696078300476074px 18.414215087890625px 0px rgba(0, 0, 0, 0.25);
            }
            #ouibounce-modal .popup_desk_form_2, 
            #ouibounce-modal .popup_desk_form_3, 
            #ouibounce-modal .popup_desk_form_4, 
            #ouibounce-modal .popup_desk_form_otp, 
            #ouibounce-modal .popup_desk_thanks_msg{
                display: none;
            }
            #ouibounce-modal .popup_desk_tnc_line {
                margin-top: 14px!important;
                margin: 0 auto;
            }
            #ouibounce-modal .popup_desk_tnc_line label, #ouibounce-modal .popup_desk_tnc_line span {
                font-size: 12px;
                font-weight: 500;
                display: block;
                text-align: center;
            }
            #ouibounce-modal .popup_desk_tnc_line label a, #ouibounce-modal .popup_desk_tnc_line span a {
                color: #001965;
            }
            #ouibounce-modal .left_side_form_exit_outer{
                padding-left: 36px;
            }
            #ouibounce-modal .popup_desk_submit_btn{
                border-radius: 6px;
                background: linear-gradient(87deg, #001965 -1.16%, #00134F 99.49%);
                color: #FFF;
                text-align: center;
                font-size: 15px;
                font-weight: 400;
                padding: 14px 32px;
                margin-top: 12px;
                border: unset;
                cursor: pointer;
            }
            #ouibounce-modal .popup_desk_submit{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #ouibounce-modal .popup_desk_field::placeholder{
                color: var(--gray-500, #667085);
                font-size: 11px;
                font-weight: 400;
            }
            #ouibounce-modal .popup_desk_field{
                border-radius: 6.802px;
                border: 0.85px solid var(--gray-300, #D0D5DD);
                background: var(--base-white, #FFF);
                box-shadow: 0px 0.8503px 1.70059px 0px rgba(16, 24, 40, 0.05);
                padding: 10px;
                width: 100%;
                max-height: 40px;
                color: var(--gray-500, #667085);
                font-size: 11px;
                font-weight: 400;
                min-height: 40px;
            }
            #ouibounce-modal .popup_desk_title{
                color: #28324E;
                text-align: center;
                font-size: 25px;
                font-weight: 700;
                margin-bottom: 32px;
                margin-top: 0;
            }
            #ouibounce-modal .green_tick_success img{
                width: 35px;
                height: 35px;
            }
            #ouibounce-modal .thanks_text_popup{
                font-size: 22px;
                font-weight: 800;
                text-align: center;
            }
            #ouibounce-modal .green_tick_success{
                background-color: #22943d;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #ouibounce-modal .popup_desk_thanks_msg_text h6{
                font-size: 17px;
                margin: 0;
            }
            #ouibounce-modal .popup_thanks_center{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: #001965;
                width: 81%;
                text-align: center;
                margin: 0 auto;
            }
            #ouibounce-modal .popup_desk_close_btn {
                position: absolute;
                top: 14px;
                cursor: pointer;
                padding: 8px;
                z-index: 1;
                right: 14px;
                background-color: #E3E3E3;
                border-radius: 50px;
                width: 26px;
                height: 26px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #ouibounce-modal .top_gradient_div {
                border-radius: 10px;
                background: rgba(0, 47, 190, 0.30);
                filter: blur(46px);
                transform: rotate(-15deg);
                position: absolute;
                width: 204px;
                height: 170px;
                top: -95px;
                left: -81px;
            }
            #ouibounce-modal .bottom_gradient_div {
                border-radius: 10px;
                background: rgba(0, 47, 190, 0.30);
                filter: blur(46px);
                width: 226px;
                height: 189px;
                transform: rotate(-15deg);
                position: absolute;
                bottom: -115px;
                right: -139px;
            }
            #ouibounce-modal .popup_desk_beckdrop {
                position: fixed;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: #000;
                opacity: .5;
                z-index: -1;
            }
            #ouibounce-modal .lines_img_bg {
                background-image: url(https://images.softwaresuggest.com/static-frontend/lines_bg_img.png);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                position: absolute;
                right: 0;
                height: 252px;
                display: block;
                width: 90px;
                top: 87px;
                opacity: 14%;
            }
            #ouibounce-modal .popup_desk_close_btn .popup_desk_close_icon {
                background-image: url(Assets/imgs/close_gray.svg);
                height: 14px;
                width: 14px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                display: block;
            }
            #ouibounce-modal .custom-control-input:checked~.custom-control-label::before {
                color: #fff;
                border-color: #001965;
                background-color: #001965;
            }
            #ouibounce-modal .custom-checkbox .custom-control-input:checked~.custom-control-label::after {
                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyNmZmYnIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8+PC9zdmc+);
            }
            #ouibounce-modal .popup_desk_trusted_line_bottom {
                color: #9B9B9B;
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
            }
            #ouibounce-modal .popup_desk_shield_img{
                width: 32px;
                height: 32px;
                padding: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #ouibounce-modal .popup_desk_trusted_line_bottom{
                color: #9B9B9B;
                font-size: 15px;
            }


            /* Add a CSS style block to your HTML file */
            @media screen and (max-width: 767px) {
        .popup_desk {
            width: 100%;
            max-width: none;
        }

        .popup_desk_main_div {
            flex-direction: column;
            align-items: center;
        }

        .col-lg-6.col-xl-3.col-md-4.col-sm-6.background_image_exit_outer {
            width: 80%; /* Adjust the width as needed */
            margin: 10px 0;
        }

        .text_background_exit {
            text-align: center;
        }

        .ss_icon_outer {
            text-align: center;
            margin-bottom: 10px;
        }

        .bottom_gradient_div {
            display: none; /* Hide the bottom gradient on mobile */
        }
    }
            </style>


 
</head>
<body>



    <div class="header-main position-relative"> 
        <div class="top-bar"> 
            <div class="container"> 
                <div class="row"> 
                    <div class="col-xl-8 col-lg-8 col-sm-4 col-5"> 
                        <div class="top-bar-left d-flex align-items-center"> 
                            <div class="clearfix"> 
                                <ul class="socials d-lg-none"> 
                                    <li> <a class="social-icon text-dark" href="javascript:void(0);">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                 </li> 
                                    <li> <a class="social-icon text-dark" href="javascript:void(0);">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a> </li> 
                                    <li> <a class="social-icon text-dark" href="javascript:void(0);">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </a> </li> 
                                    <li> <a class="social-icon text-dark" href="javascript:void(0);">
                                        <i class="fa-brands fa-google-plus-g"></i>
                                    </a> </li> 
                                </ul> 
                            </div> 
                            <div class="clearfix"> 
                                <div class="header-search-logo pt-0 pb-0 "> 
                                    <a href="index.html"> <img src="<?php echo base_url(); ?>Assets/imgs/logo.png" alt="" class="logo-img"> <img src="../assets/images/brand/logo1.png" alt="" class="logo-img1"> </a> 
                                </div> 
                            </div> 
                           
                        </div> 
                    </div> 
                    <div class="col-xl-4 col-lg-4 col-sm-8 col-7"> 
                        <div class="top-bar-right"> 
                            <ul class="custom "> 
                                <li> 
                                    <a href="#" class="text-dark"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15px" height="15px" class="login-details"><path fill="currentColor" d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"></path>
                                        </svg> 
                                        <span>Register</span>
                                    </a> 
                                </li> 
                                <li> 
                                    <a href="#" class="text-dark"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15px" height="15px" class="login-details"><path fill="currentColor" d="M344 240h-56L287.1 152c0-13.25-10.75-24-24-24h-16C234.7 128 223.1 138.8 223.1 152L224 240h-56c-9.531 0-18.16 5.656-22 14.38C142.2 263.1 143.9 273.3 150.4 280.3l88.75 96C243.7 381.2 250.1 384 256.8 384c7.781-.3125 13.25-2.875 17.75-7.844l87.25-96c6.406-7.031 8.031-17.19 4.188-25.88S353.5 240 344 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"></path>
                                        </svg> 
                                        <span>Login</span>
                                    </a> 
                                </li> 
                              
                            </ul> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
        <!-- Mobile Header --> 
        <div class="sticky" style="margin-bottom: 0px;"> 
            <div class="horizontal-header clearfix "> 
                <div class="container"> 
                    <a id="horizontal-navtoggle" class="animated-arrow"><span></span></a> 
                    <span class="smllogo"> 
                        <img src="Assets/imgs/logo.png" width="120" class="logo-img" alt=""> <img src="../assets/images/brand/logo1.png" width="120" class="logo-img1" alt=""> 
                    </span> 
                    <a href="tel:245-6325-3256" class="callusbtn">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </a> 
                </div> 
            </div> 
        </div>

        <div class="jumps-prevent" style="padding-top: 0px;"></div> 
        <!-- /Mobile Header -->
         <!-- Horizontal-navigation --> 
         <div id="sticky-wrapper" class="sticky-wrapper is-sticky" style="height: 50.0938px;">
            <div id="menu_bar" class="header-style horizontal-main clearfix" style="width: 1363px;"> 
                <div class="horizontal-mainwrapper container clearfix"> 
                    <!--Nav--> 
                    <nav class="horizontalMenu clearfix d-md-flex align-items-center">
                        <div class="overlapblackbg"></div> 
                        <ul class="horizontalMenu-list rightside-btns"> 
                            <!-- <li aria-haspopup="true">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);" class="active"> 
                                    <i class="fa-solid fa-tv"></i> Home
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                
                            </li> -->

                            <li aria-haspopup="true" onclick="assignValue(1)">
                             <input type="hidden"  id="inputId">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"  href="#home"> 
                                    <i class="fa-regular fa-window-restore"></i>Software<i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                
                            </li> 
                            <li aria-haspopup="true" onclick="assignValue(2)">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                <i class="fa-solid fa-envelopes-bulk"></i> Android Apps
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                
                            </li> 
                            <li aria-haspopup="true" onclick="assignValue(3)">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                <i class="fa-brands fa-wordpress-simple"></i>IOS Apps<i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                 
                            </li> 
                            
                            <li aria-haspopup="true" onclick="assignValue(4)">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                <i class="fa-brands fa-android"></i> E-commerce
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                            </li>

                            <li aria-haspopup="true" onclick="assignValue(5)">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                <i class="fa-brands fa-apple"></i> Website
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                            </li> 

                            <li aria-haspopup="true" onclick="assignValue(6)">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                <i class="fa-solid fa-people-group"></i> Digital Marketing
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                            </li> 


                            <li aria-haspopup="true" onclick="assignValue(7)">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                    <i class="fa-solid fa-cube"></i> Graphic Design
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                            </li> 


                            <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0"> 
                                <span><a class="btn btn-primary" href="upload-app.html">Upload</a></span> 
                            </li> 
                        </ul> 

                        <ul class="mb-0 d-flex align-items-center rightside-btns"> 
                            <li aria-haspopup="true" class="d-none d-lg-block"> 
                                <span><a class="btn btn-primary ad-post" href="upload-app.html"><i class="fa-solid fa-plus"></i> Add Listing</a></span> 
                            </li> 
                        </ul> 


                       

                 <!-- </div> -->
                    </nav> 


                    <!--Nav--> 
                </div> 
            </div>
        </div> 
        <!-- /Horizontal-navigation --> 


    <!-- </div> -->


    <div class="mt-5"></div>
    <div class="tab-content container mt-5">
                      <div id="home" class="tab-pane active d-flex gap-5 row justify-content-center flex-wrap" ><br>
                       
                         </div>


        </div>   

        <ul class="pagination" id="pagination"></ul> 


    

    

    <!-- <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script> -->

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    
    

<script>
    
     $(document).ready(function () {
    var itemsPerPage = 8; // Number of items per page
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

    <script>

function assignValue(id){
    // alert(id);

    photo_typeId = document.getElementById("inputId").value = id;

    var itemsPerPage = 6; // Number of items per page
    
    // alert(photo_typeId);

$.ajax({

url:base_path+"Alldata/datatoclick",
method: "POST",

data:{'photo_typeId':photo_typeId},
// dataType: 'json',

success: function(data){
    console.log("mylist",data);
    $('#home').empty();
    var xys=JSON.parse(data);
    
    var uploadURL ='http://localhost/Blockchain/upload/';

    
    var result='';
    for(i=0;i<xys.length;i++){

        result += '<div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 softwarediv">'+
        '<div class="mx-2">'+
       
        '<div class="card overflow-hidden" style="margin-top: 43px;">'+
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
                      '<h4 class="mb-1">'+xys[i]['softwarename']+'</h4>'+
                  '</a>'+ 
                                                               
               '<div style="text-align: left!important;">'+
                  '<p class="overflow-hidden"style="height:100px;">'+xys[i]['description']+'</p>'+    
                      '<i class="fa-solid fa-star" style="color: #f5de20;"></i>'+
                      '<i class="fa-solid fa-star" style="color: #f5de20;"></i>'+
                      '<i class="fa-solid fa-star" style="color: #f5de20;"></i>'+
                      '<i class="fa-solid fa-star" style="color: #f5de20;"></i>'+
                      '<i class="fa-solid fa-star" style="color: #5f6877;"></i>'+
                      '<i class="fa-solid fa-star" style="color: #5f6877;"></i>'+
                '</div>'+
          '</div>'+ 
                                                         
       '<a href="javascript:void(0);" class="btn btn-primary mt-3" style="background-color: #5e4bdb;">'+
       '<i class="fa-solid fa-laptop"></i>  View Demo</a>'+
       '<a href="javascript:void(0);" class="btn btn-primary mt-3 btn-spacing" style="background-color: #5e4bdb;">'+
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
    $('#home').append(result);


    var $pagination = $('#pagination');
                            // here home is id for append & softwarediv is a class used in div
                    var $items = $('#home .softwarediv');
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

      
</script>

<!-- for responsive head session -->
<script src="<?php echo base_url(); ?>Assets\js\select2\horizontal.js"></script>