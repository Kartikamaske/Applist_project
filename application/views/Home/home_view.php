<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Applist</title>
    <link rel="stylesheet" href="Assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">

    
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    
   
    


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
            .slick-slider .slick-prev1{
                left: -30px;
                font-size: 0;
                color:#9fa9bd ;
                cursor: pointer;
            }

            .slick-slider .slick-prev1::before{
                content: '<';
                line-height: 1;
                font-size: 25px;
            }

            .slick-slider .slick-next1{
                right: -30px;
                font-size: 0;
                cursor: pointer;
                
                }

                .slick-slider .slick-next1::after{
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

            .slick-slider1 .slick-prev1{
                left: -30px;
                font-size: 0;
                cursor: pointer;
            }

            .slick-slider1 .slick-prev1::before{
                content: '<';
                line-height: 1;
                font-size: 15px;
            }

            .slick-slider1 .slick-next1{
                right: -30px;
                font-size: 0;
                cursor: pointer;
                }

                .slick-slider1 .slick-next1::after{
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

            .slick-slider2 .slick-prev2{
                left: -30px;
                font-size: 0;
                color:#9fa9bd ;
                cursor: pointer;
            }

            .slick-slider2 .slick-prev2::before{
                content: '<';
                line-height: 1;
                font-size: 25px;
            }

            .slick-slider2 .slick-next2{
                right: -30px;
                font-size: 0;
                cursor: pointer;
                }

                .slick-slider2 .slick-next2::after{
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

            .slick-slider3 .slick-prev3{
                left: -30px;
                font-size: 0;
                color:#9fa9bd ;
                cursor: pointer;
            }

            .slick-slider3 .slick-prev3::before{
                content: '<';
                line-height: 1;
                font-size: 25px;
            }

            .slick-slider3 .slick-next3{
                right: -30px;
                font-size: 0;
                cursor: pointer;
                }

                .slick-slider3 .slick-next3::after{
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
    <?php $url='http://localhost/Blockchain/upload/'; ?>


    <!-- <?php $url='https://adminpms.karbhariamruttulyachaha.com/upload/'; ?> -->

    <?php $url='https://blockchain.softwarecompany.tech/upload/'; ?>

    <!-- https://blockchain.softwarecompany.tech/ -->
    
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
                                    <a href="#"> <img src="Assets/imgs/logo.png" alt="" class="logo-img"> </a> 
                                </div> 
                            </div> 
                            <div class="clearfix"> 
                                <ul class="contact"> 
                                    <li class="me-5 d-lg-none"> <a href="javascript:void(0);" class="callnumber text-dark"><span><i class="fa fa-phone me-1"></i>: +425 345 8765</span></a> </li> 
                                    <li class="select-country me-1"> 
                                        
                                     
                                    </li> 
                                    <li class="dropdown me-4"> 
                                     
                                    </li> 
                                    <li class="dropdown"> 
                                        
                                    </li> 
                                </ul> 
                            </div> 
                        </div> 
                    </div> 
                    <div class="col-xl-4 col-lg-4 col-sm-8 col-7"> 
                        <div class="top-bar-right"> 
                            <ul class="custom "> 
                                <li class=""> 
                                    <a href="javascript:void(0);" class="text-dark custom_style"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15px" height="15px" class="login-details"><path fill="currentColor" d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"></path>
                                        </svg> 
                                        <span>Register</span>
                                    </a> 
                                </li> 
                                <li> 
                                    <a href="javascript:void(0);" class="text-dark custom_style"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15px" height="15px" class="login-details"><path fill="currentColor" d="M344 240h-56L287.1 152c0-13.25-10.75-24-24-24h-16C234.7 128 223.1 138.8 223.1 152L224 240h-56c-9.531 0-18.16 5.656-22 14.38C142.2 263.1 143.9 273.3 150.4 280.3l88.75 96C243.7 381.2 250.1 384 256.8 384c7.781-.3125 13.25-2.875 17.75-7.844l87.25-96c6.406-7.031 8.031-17.19 4.188-25.88S353.5 240 344 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"></path>
                                        </svg> 
                                        <span>Login</span>
                                    </a> 
                                </li> 
                                <li class="dropdown"> 
                                    <a href="javascript:void(0);" class="text-dark custom_style" data-bs-toggle="dropdown"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="15px" height="15px" class="login-details"><path fill="currentColor" d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"></path>
                                        </svg> 
                                        <span> Dashboard</span>
                                    </a> 

                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"> 
                                        <a href="#" class="dropdown-item"> 
                                            <i class="dropdown-icon icon icon-user"></i> My Profile 
                                        </a> 
                                        <a class="dropdown-item" href="#"> 
                                            <i class="dropdown-icon icon icon-speech"></i> Inbox 
                                        </a> 
                                        <a class="dropdown-item" href="#"> 
                                            <i class="dropdown-icon icon icon-bell"></i> Notifications 
                                        </a> 
                                        <a href="javascript:void(0);" class="dropdown-item"> 
                                            <i class="dropdown-icon  icon icon-settings"></i> Account Settings 
                                        </a> 
                                        <a class="dropdown-item" href="#"> 
                                            <i class="dropdown-icon icon icon-power"></i> Log out 
                                        </a> 
                                    </div> 
                                </li> 
                            </ul> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
        <!-- Mobile Header --> 
        <div class="sticky" style="margin-bottom: 0px;"> 
            <div id="menu_bar_mob" class="horizontal-header clearfix "> 
                <div class="container"> 
                    <a id="horizontal-navtoggle" class="animated-arrow" ><span></span></a> 
                    <span class="smllogo"> 
                        <img src="Assets/imgs/logo.png" width="120" class="logo-img" alt=""> 
                    </span> 
                    <a href="#" class="callusbtn">
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
                            <li aria-haspopup="true">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);" class="active"> 
                                    <i class="fa-solid fa-tv"></i> Home
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                <ul class="sub-menu"> 
                                    <li aria-haspopup="true" class="active">
                                        <a href="#" class="active">Home</a>
                                    </li> 
                                    <li aria-haspopup="true">
                                        <a href="#">Homestyle-1</a>
                                    </li> 
                                    <li aria-haspopup="true">
                                        <a href="#">Homestyle-2</a>
                                    </li> 
                                    <li aria-haspopup="true">
                                        <a href="#">Homestyle-3</a>
                                    </li> 
                                    <li aria-haspopup="true"><a href="#">Homestyle-4</a></li> <li aria-haspopup="true"><a href="#">Homestyle-5</a></li> 
                                </ul> 
                            </li> 
                            <li aria-haspopup="true">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                    <i class="fa-regular fa-window-restore"></i> Windows<i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                <ul class="sub-menu"> 
                                    <li aria-haspopup="true"><a href="#">Best Seller</a></li> 
                                    <li aria-haspopup="true"><a href="#">Newest</a></li> <li aria-haspopup="true"><a href="#">Best Rated</a></li> 
                                    <li aria-haspopup="true"><a href="#">Top Paid</a></li> 
                                </ul> 
                            </li> 
                            <li aria-haspopup="true">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                    <i class="fa-solid fa-mobile-screen"></i> Mac
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                <ul class="sub-menu"> 
                                    <li aria-haspopup="true"><a href="#">Best Seller </a></li> 
                                    <li aria-haspopup="true"><a href="#">Newest</a></li> 
                                    <li aria-haspopup="true"><a href="#">Best Rated</a></li> <li aria-haspopup="true"><a href="#">Top Paid</a></li> 
                                </ul> 
                            </li> 
                            <li aria-haspopup="true">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                    <i class="fa-solid fa-mobile-screen-button"></i> Android<i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                <ul class="sub-menu"> 
                                    <li aria-haspopup="true"><a href="#">Best Seller</a></li> 
                                    <li aria-haspopup="true"><a href="#">Newest</a></li> <li aria-haspopup="true"><a href="#">Best Rated</a></li> 
                                    <li aria-haspopup="true"><a href="#">Top Paid</a></li> 
                                </ul> 
                            </li> 
                            <li aria-haspopup="true">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                    <i class="fa fa-briefcase me-1"></i>Business Apps
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                <ul class="sub-menu"> 
                                    <li aria-haspopup="true">
                                        <a href="#">Best Seller</a>
                                    </li> 
                                    <li aria-haspopup="true"><a href="#">Newest</a></li> <li aria-haspopup="true"><a href="#">Best Rated</a></li> 
                                    <li aria-haspopup="true"><a href="#">Top Paid</a></li> 
                                </ul> 
                            </li> 
                            <li aria-haspopup="true">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                    <i class="fa-solid fa-layer-group"></i> Pages
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                <div class="horizontal-megamenu clearfix"> 
                                    <div class="container"> 
                                        <div class="megamenu-content"> 
                                            <div class="row"> 
                                                <ul class="col link-list"> 
                                                    <li class="title">Custom pages</li> 
                                                    <li><a href="javascript:void(0);">Categories</a></li> 
                                                    <li><a href="javascript:void(0);">Invoice</a></li> 
                                                    <li><a href="javascript:void(0);">User Lists</a></li> 
                                                    <li><a href="javascript:void(0);">Settings</a></li> 
                                                    <li><a href="javascript:void(0);">Pricing</a></li> 
                                                    <li><a href="javascript:void(0);">Typography</a></li> <li><a href="javascript:void(0);">Cart</a></li> 
                                                    <li><a href="javascript:void(0);">App list Table</a></li> 
                                                    <li><a href="javascript:void(0);">Contact</a></li> 
                                                </ul> 
                                                <ul class="col link-list"> 
                                                    <li class="title">Custom pages</li> 
                                                    <li><a href="javascript:void(0);">App Details</a></li> <li><a href="javascript:void(0);">App Details Right</a></li> 
                                                    <li><a href="javascript:void(0);">App Details-2</a></li> <li><a href="javascript:void(0);">Paid-app-details</a></li> 
                                                    <li><a href="javascript:void(0);">Paid-app-details-Right</a></li> 
                                                    <li><a href="javascript:void(0);">App Upload</a></li> <li><a href="javascript:void(0);">Edit Upload</a></li> 
                                                    <li><a href="javascript:void(0);">App Upload2</a></li> <li><a href="javascript:void(0);">Edit Upload2</a></li> 
                                                </ul> 
                                                <ul class="col link-list"> 
                                                    <li class="title">Custom pages</li> 
                                                    <li><a href="javascript:void(0);"> User Profile</a></li> <li><a href="javascript:void(0);">My Dashboard</a></li> 
                                                    <li><a href="javascript:void(0);">Apps</a></li> 
                                                    <li><a href="javascript:void(0);">Favorite Apps</a></li> <li><a href="javascript:void(0);">Manged Apps</a></li> 
                                                    <li><a href="javascript:void(0);">Payments</a></li> 
                                                    <li><a href="javascript:void(0);"> Orders</a></li> 
                                                    <li><a href="javascript:void(0);">Tips</a></li> 
                                                </ul> 
                                                <ul class="col link-list"> 
                                                    <li class="title">User pages</li> 
                                                    <li><a href="underconstruction.html">Under Constructions</a></li> 
                                                    <li><a href="javascript:void(0);">404</a></li> 
                                                    <li><a href="javascript:void(0);">Register</a></li> 
                                                    <li><a href="javascript:void(0);">Login</a></li> 
                                                    <li><a href="javascript:void(0);">Login 02</a></li> 
                                                    <li><a href="javascript:void(0);">Forgot Password</a></li> <li><a href="javascript:void(0);">Lock Screen</a></li> <li><a href="javascript:void(0);">Faq</a></li> 
                                                </ul> 
                                                <ul class="col link-list"> 
                                                    <li class="title">User pages</li> 
                                                    <li><a href="#">Header Style 01</a></li> 
                                                    <li><a href="#">Header Style 02</a></li> 
                                                    <li><a href="#">Header Style 03</a></li> 
                                                    <li><a href="#">Header Style 04</a></li> 
                                                    <li><a href="javascript:void(0);">Footer Style 01</a></li> 
                                                    <li><a href="javascript:void(0);">Footer Style 02</a></li> 
                                                    <li><a href="javascript:void(0);">Footer Style 03</a></li> 
                                                    <li><a href="javascript:void(0);">Footer Style 04</a></li> 
                                                </ul> 
                                            </div> 
                                        </div> 
                                    </div> 
                                </div> 
                            </li> 
                            <li aria-haspopup="true">
                                <span class="horizontalMenu-click">
                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                </span> 
                                <a href="javascript:void(0);"> 
                                    <i class="fa-solid fa-cube"></i> Blog
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                <ul class="sub-menu"> 
                                    <li aria-haspopup="true">
                                        <span class="horizontalMenu-click02">
                                            <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                        </span>
                                        <a href="javascript:void(0);">Blog Grid 
                                            <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i>
                                        </a> 
                                        <ul class="sub-menu"> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">Blog Grid Left</a>
                                            </li> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">Blog Grid Right</a>
                                            </li> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">Blog Grid Center</a>
                                            </li> 
                                        </ul> 
                                    </li> 
                                    <li aria-haspopup="true">
                                        <span class="horizontalMenu-click02">
                                            <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                        </span>
                                        <a href="javascript:void(0);">Blog List 
                                            <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i>
                                        </a> 
                                        <ul class="sub-menu"> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">Blog List Left</a>
                                            </li> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">Blog List Right</a>
                                            </li> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">Blog List Center</a>
                                            </li> 
                                        </ul> 
                                    </li> 
                                    <li aria-haspopup="true">
                                        <span class="horizontalMenu-click02">
                                            <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                        </span>
                                        <a href="javascript:void(0);">Blog Details 
                                            <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i>
                                        </a> 
                                        <ul class="sub-menu"> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">Blog Details Left</a>
                                            </li> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">Blog Details Right</a>
                                            </li> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">Blog Details Center</a>
                                            </li> 
                                        </ul> 
                                    </li> 
                                    <li aria-haspopup="true">
                                        <span class="horizontalMenu-click02">
                                            <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                        </span>
                                        <a href="javascript:void(0);">Submenus 
                                            <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i>
                                        </a> 
                                        <ul class="sub-menu"> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">SubmenuLevel-1</a>
                                            </li> 
                                            <li aria-haspopup="true">
                                                <a href="javascript:void(0);">SubmenuLevel-2</a></li> 
                                            <li aria-haspopup="true">
                                                <span class="horizontalMenu-click02">
                                                    <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                                                </span>
                                                <a href="javascript:void(0);">SubmenuLevel-3
                                                    <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i>
                                                </a> 
                                                <ul class="sub-menu"> 
                                                    <li aria-haspopup="true">
                                                        <a href="javascript:void(0);">SubmenuLevel-3.1</a>
                                                    </li> 
                                                    <li aria-haspopup="true">
                                                        <a href="javascript:void(0);">SubmenuLevel-3.2</a>
                                                    </li> 
                                                    <li aria-haspopup="true">
                                                        <a href="javascript:void(0);">SubmenuLevel-3.3</a>
                                                    </li> 
                                                </ul> 
                                            </li> 
                                        </ul> 
                                    </li> 
                                    <li aria-haspopup="true">
                                        <a href="javascript:void(0);">Switcher</a>
                                    </li> 
                                </ul> 
                            </li> 
                            <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0"> 
                                <span><a class="btn btn-primary" href="javascript:void(0);">Upload</a></span> 
                            </li> 
                        </ul> 
                        <ul class="mb-0 d-flex align-items-center rightside-btns"> 
                            <li aria-haspopup="true" class="d-none d-lg-block"> 
                                <span><a class="btn btn-primary ad-post" href="javascript:void(0);">
                                    <i class="fa-solid fa-plus"></i> Add Listing</a></span> 
                            </li> 
                        </ul> 
                    </nav> 
                    <!--Nav--> 
                </div> 
            </div>
        </div> 
        <!-- /Horizontal-navigation --> 
    </div>

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
                                        <input type="text" class="form-control input-lg border-end-0" id="text" placeholder="Search software" style="border: 0.5px solid beige!important;"> 
                                    </div> 
                                    <div class="form-group col-xl-4 col-lg-4 select2-lg  col-md-12 mb-0">
                                        <select class="form-control select2-show-search border-bottom-0 w-100 select2-hidden-accessible" data-placeholder="Select" tabindex="-1" aria-hidden="true" data-select2-id="12" style="height: 46px;"> 
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
                                        <a href="javascript:void(0);"> <img src="Assets/imgs/svg_imgs/android.svg" alt="Dash"> <span>Android</span> </a> 
                                    </li> 
                                    <li> 
                                        <a href="javascript:void(0);"> <img src="Assets/imgs/svg_imgs/windows.svg" alt="Dash"> <span>Windows</span> </a> 
                                    </li> 
                                    <li> 
                                        <a href="javascript:void(0);"> <img src="Assets/imgs/svg_imgs/apple.svg" alt="Dash"> <span>Mac</span> </a> 
                                    </li> 
                                    <li> 
                                        <a href="javascript:void(0);"> <img src="Assets/imgs/svg_imgs/business.svg" alt="Dash"> <span>BusinessApp</span> </a> 
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
 <section class="sptb pb-0">
    <div class="container">
        
            <!-- slider -->
            <!-- data fetch from database -->
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

                        
                           <a href="javascript:void(0);"></a>
                            <img src="'.$url.$value->photo1.'" alt="Dash" class="p-0" style="height:270px;width:310px;">
                        </div>

                         <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">'.$value->softwarename.'</h4>
                                       </a> 
                                       

                                       <div style="text-align: left!important;">
                                         <p class="overflow-hidden"style="height:100px;">'.$value->description.'</p>    
                                             <i class="fa-solid fa-star" style="color: #f5de20;"></i>
                                             <i class="fa-solid fa-star" style="color: #f5de20;"></i>
                                             <i class="fa-solid fa-star" style="color: #f5de20;"></i>
                                             <i class="fa-solid fa-star" style="color: #f5de20;"></i>
                                             <i class="fa-solid fa-star" style="color: #5f6877;"></i>
                                             <i class="fa-solid fa-star" style="color: #5f6877;"></i>
                                       </div>

                                    </div> 
                                 
                                        <a href="javascript:void(0);" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-laptop"></i>  View Demo</a>
                                        <a href="javascript:void(0);" class="btn btn-primary mt-3" style="background-color: #5e4bdb;"><i class="fa-solid fa-circle-info"></i> Details</a>
                                
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



 <!-- Trending Applications -->


<section class="p-0">
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
                            <!-- <div class="power-ribbon power-ribbon-top-left text-warning">
                               <span class="bg-warning">
                                   <i class="fa fa-bolt"></i>
                              </span>
                       </div> -->
                        <div class=""> 
                           <!-- <a href="javascript:void(0);"></a> -->
                            <img src="Assets/imgs/ai.jpg" alt="Dash" class="p-0" style="height: 200px;
                            width: 310px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">Artificial Intelligence</h4>
                                       </a> 
                                       <!-- <a href="javascript:void(0);" class="text-subtext">Free</a> -->
                                    </div> 
                                    <!-- <ul class="item-cards7-ic software-list mb-0 mt-3">
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
                                    </ul>  -->

                                        <p>Various versions have evolved over the years, sometimes</p>
                                        <a href="javascript:void(0);" class="btn btn-primary mt-3">Download</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/viber.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">Viber</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="paid-javascript:void(0);" class="btn btn-primary mt-3">$ 350 Buy Now</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/photoshop.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header" >
                                           <h4 class="mb-1">Photoshop</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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

                                        <p>Various versions have evolved over the years,sometimes</p><a href="javascript:void(0);" class="btn btn-primary mt-3">Download</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/team-viewer.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">Team-Viewer</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="paid-javascript:void(0);" class="btn btn-primary mt-3">$ 150 Buy Now</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/youtube.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">Youtube</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="javascript:void(0);" class="btn btn-primary mt-3">Download</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/itunes.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;"> 
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">Itunes</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="paid-javascript:void(0);" class="btn btn-primary mt-3">$ 250 Buy Now</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/skype.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;"> 
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">Skype</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="javascript:void(0);" class="btn btn-primary mt-3">Download</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/vlc.svg" alt="Dash" class="p-0" style="height:64px;width: 88px;"> 
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">VLC Player</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="paid-javascript:void(0);" class="btn btn-primary mt-3">$ 350 Buy Now</a>
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
                                        <a href="javascript:void(0);"></a>
                                         <img src="Assets/imgs/google-duo.svg" alt="Dash" class="  p-0">
                                         </div>
                                         
                                          <div class="card-body"> 
                                            <div class="item-card7-desc"> 
                                                <div class="item-card7-text"> 
                                                    <a href="javascript:void(0);" class="text-dark text-header">
                                                        <h4 class="mb-1">Google Duo</h4>
                                                    </a> 
                                                    <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                         <a href="javascript:void(0);"></a>
                          <img src="Assets/imgs/uber.svg" alt="Dash" class="p-0">
                    </div> 
                         <div class="card-body"> 
                            <div class="item-card7-desc"> 
                                <div class="item-card7-text"> 
                                    <a href="javascript:void(0);" class="text-dark text-header">
                                        <h4 class="mb-1">Uber</h4></a> 
                                        <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                        <a href="javascript:void(0);"></a> 
                        <img src="Assets/imgs/instagram.svg" alt="Dash" class="  p-0"> 
                    </div> 
                    <div class="card-body"> 
                        <div class="item-card7-desc"> 
                            <div class="item-card7-text"> 
                                <a href="javascript:void(0);" class="text-dark text-header">
                                    <h4 class="mb-1">Instagram</h4></a> 
                                <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                    <a href="javascript:void(0);"></a> 
                    <img src="Assets/imgs/quora.svg" alt="Dash" class="  p-0"> 
                </div> 
                <div class="card-body">
                     <div class="item-card7-desc">
                         <div class="item-card7-text">
                             <a href="javascript:void(0);" class="text-dark text-header">
                                <h4 class="mb-1">Quora</h4>
                            </a> 
                            <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                <span class="bg-warning">
                    <i class="fa fa-bolt"></i>
               </span>
            </div>
         <div class="item-card7-imgs">
                       <a href="javascript:void(0);"></a>
                        <img src="Assets/imgs/social-media.svg" alt="Dash" class="  p-0">
                       </div> 
                       <div class="card-body"> 
                          <div class="item-card7-desc">
                           <div class="item-card7-text">
                               <a href="javascript:void(0);" class="text-dark text-header">
                                  <h4 class="mb-1">Hangouts</h4>
                              </a> 
                              <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                     <a href="javascript:void(0);"></a>
                      <img src="Assets/imgs/youtube.svg" alt="Dash" class="  p-0">
                     </div> 
                     <div class="card-body"> 
                        <div class="item-card7-desc">
                         <div class="item-card7-text">
                             <a href="javascript:void(0);" class="text-dark text-header">
                                <h4 class="mb-1">Youtube</h4>
                            </a> 
                            <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                    <span class="bg-primary"><i class="fa fa-bolt"></i></span>
                </div> 
                <div class="item-card7-imgs"> 
                    <a href="javascript:void(0);"></a> 
                    <img src="Assets/imgs/translate.svg" alt="Dash" class="  p-0">
                 </div> 
                 <div class="card-body">
                     <div class="item-card7-desc"> 
                        <div class="item-card7-text"> 
                            <a href="javascript:void(0);" class="text-dark text-header">
                                <h4 class="mb-1">Google Translate</h4>
                            </a> 
                            <a href="javascript:void(0);" class="text-subtext">Free</a> </div> 
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
            <a href="javascript:void(0);"></a> 
            <img src="Assets/imgs/spotify.svg" alt="Dash" class="  p-0"> 
        </div>

         <div class="card-body"> 
            <div class="item-card7-desc">
                 <div class="item-card7-text">
                        <a href="javascript:void(0);" class="text-dark text-header">
                            <h4 class="mb-1">Spotify Music</h4>
                        </a> 
                        <a href="javascript:void(0);" class="text-subtext">Free
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
                <div class="power-ribbon power-ribbon-top-left text-warning">
                    <span class="bg-warning">
                        <i class="fa fa-bolt"></i>
                   </span>
                </div>
                <div class="item-card7-imgs"> 
                    <a href="javascript:void(0);"></a> 
                         <img src="Assets/imgs/itunes.svg" alt="Dash" class="  p-0"> 
               </div> 
                <div class="card-body"> 
                     <div class="item-card7-desc"> 
                        <div class="item-card7-text">
                             <a href="javascript:void(0);" class="text-dark text-header"><h4 class="mb-1">itunes</h4></a> <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                        <a href="javascript:void(0);"></a> 
                        <img src="Assets/imgs/AffinityPhoto.svg" alt="Dash" class="  p-0">
                     </div> 
                     <div class="card-body">
                         <div class="item-card7-desc">
                             <div class="item-card7-text">
                                 <a href="javascript:void(0);" class="text-dark text-header">
                                    <h4 class="mb-1">AffinityPhoto</h4>
                                </a> 
                                <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                <div class="card overflow-hidden">
                    <div class="power-ribbon power-ribbon-top-left text-warning">
                        <span class="bg-primary"><i class="fa fa-bolt"></i></span>
                    </div> 
                     <div class="item-card7-imgs">
                     <a href="javascript:void(0);"></a>
                      <img src="Assets/imgs/Shazam.svg" alt="Dash" class="  p-0"> 
                    </div> 
                    <div class="card-body"> 
                        <div class="item-card7-desc">
                             <div class="item-card7-text"> 
                                <a href="javascript:void(0);" class="text-dark text-header">
                                    <h4 class="mb-1">Shazam</h4></a> 
                                    <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                             <a href="javascript:void(0);"></a> 
                             <img src="Assets/imgs/Magnet-app.svg" alt="Dash" class="  p-0"> </div> <div class="card-body"> 
                                <div class="item-card7-desc">
                                    <div class="item-card7-text"> <a href="javascript:void(0);" class="text-dark text-header"><h4 class="mb-1">Magnet app</h4></a> 
                                        <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                <div class="power-ribbon power-ribbon-top-left text-warning">
                    <span class="bg-warning">
                        <i class="fa fa-bolt"></i>
                   </span>
                </div>
                 <div class="item-card7-imgs">
                     <a href="javascript:void(0);"></a> 
                     <img src="Assets/imgs/dash-256.svg" alt="Dash" class="  p-0"> 
                 </div> 
                    <div class="card-body">
                         <div class="item-card7-desc">
                             <div class="item-card7-text">
                                 <a href="javascript:void(0);" class="text-dark text-header">
                                    <h4 class="mb-1">Dash App</h4>
                                </a> 
                                <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                 <a href="javascript:void(0);"></a>
                  <img src="Assets/imgs/Xcode.svg" alt="Dash" class="  p-0"> 
                </div>
                 <div class="card-body"> <div class="item-card7-desc"> 
                    <div class="item-card7-text"> 
                        <a href="javascript:void(0);" class="text-dark text-header">
                        <h4 class="mb-1">Acrobat Reader</h4>
                         </a> 
                         <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
        <div class="power-ribbon power-ribbon-top-left text-warning">
            <span class="bg-primary"><i class="fa fa-bolt"></i></span>
        </div> 
         <div class="item-card7-imgs"> 
            <a href="javascript:void(0);"></a>
             <img src="Assets/imgs/w2-512.svg" alt="Dash" class="  p-0">
             </div> 
             <div class="card-body"> 
                <div class="item-card7-desc"> 
                    <div class="item-card7-text"> <a href="javascript:void(0);" class="text-dark text-header"><h4 class="mb-1">Waltr</h4></a> <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                    <a href="javascript:void(0);"></a>
                     <img src="Assets/imgs/GarageBand.svg" alt="Dash" class="  p-0">
                     </div> 
                     <div class="card-body"> 
                        <div class="item-card7-desc">
                             <div class="item-card7-text">
                                 <a href="javascript:void(0);" class="text-dark text-header">
                                    <h4 class="mb-1">GarageBand</h4>
                                </a>
                                 <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                    <div class="power-ribbon power-ribbon-top-left text-warning">
                        <span class="bg-warning">
                            <i class="fa fa-bolt"></i>
                       </span>
                </div>
                    
                    <div class="item-card7-imgs">
                         <a href="javascript:void(0);"></a> 
                         <img src="Assets/imgs/photoshop.svg" alt="Dash" class="  p-0"> 
                        </div>
                         <div class="card-body"> 
                            <div class="item-card7-desc"> 
                                <div class="item-card7-text">
                                     <a href="javascript:void(0);" class="text-dark text-header">
                                        <h4 class="mb-1">Photoshop</h4>
                                    </a>
                                     <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                            <a href="javascript:void(0);"></a> 
                            <img src="Assets/imgs/messenger.svg" alt="Dash" class="  p-0"> 
                        </div>
                         <div class="card-body"> 
                            <div class="item-card7-desc"> 
                                <div class="item-card7-text"> 
                                    <a href="javascript:void(0);" class="text-dark text-header"><h4 class="mb-1">Messenger</h4></a> 
                                    <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
        <div class="power-ribbon power-ribbon-top-left text-warning">
            <span class="bg-primary"><i class="fa fa-bolt"></i></span>
        </div> 
        <div class="item-card7-imgs"> 
        <a href="javascript:void(0);"></a>
         <img src="Assets/imgs/spotify.svg" alt="Dash" class="  p-0"> 
        </div>
         <div class="card-body"> 
            <div class="item-card7-desc">
                 <div class="item-card7-text"> 
                    <a href="javascript:void(0);" class="text-dark text-header">
                        <h4 class="mb-1">Spotify Music</h4></a> 
                        <a href="javascript:void(0);" class="text-subtext">Free</a>
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
            <a href="javascript:void(0);"></a> 
            <img src="Assets/imgs/youtube.svg" alt="Dash" class="  p-0"> 
        </div> 
        <div class="card-body">
             <div class="item-card7-desc"> 
                <div class="item-card7-text"> 
                    <a href="javascript:void(0);" class="text-dark text-header">
                        <h4 class="mb-1">Youtube</h4>
                    </a> 
                    <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                                <div class="power-ribbon power-ribbon-top-left text-warning">
                                    <span class="bg-warning">
                                        <i class="fa fa-bolt"></i>
                                   </span>
                            </div>
                                <div class="item-card7-imgs"> 
                                    <a href="javascript:void(0);"></a> 
                                    <img src="Assets/imgs/evernote.svg" alt="Dash" class="  p-0"> </div> <div class="card-body"> <div class="item-card7-desc"> <div class="item-card7-text"> <a href="javascript:void(0);" class="text-dark text-header"><h4 class="mb-1">Evernote</h4></a> <a href="javascript:void(0);" class="text-subtext">Free</a> </div> <ul class="item-cards7-ic software-list mb-0 mt-3"> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-database text-muted me-1"></i> 100 MB</a></li> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-download text-muted me-1"></i> 4+ thousands</a></li> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-refresh text-muted me-1"></i> 20.0.4 v </a></li> <li><a href="javascript:void(0);" class="icons text-muted "><i class="fa fa-comment-o text-muted me-1"></i> 100+ Reviews</a></li> </ul> <p>Various versions have evolved over the years, sometimes</p>
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
                             <a href="javascript:void(0);"></a> 
                             <img src="Assets/imgs/picasa.svg" alt="Dash" class="p-0">
                             </div> 
                             <div class="card-body"> 
                                <div class="item-card7-desc"> 
                                    <div class="item-card7-text"> 
                                        <a href="javascript:void(0);" class="text-dark text-header">
                                            <h4 class="mb-1">Picasa</h4>
                                        </a> 
                                        <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                <div class="power-ribbon power-ribbon-top-left text-warning">
                    <span class="bg-primary"><i class="fa fa-bolt"></i></span>
                </div> 
                <div class="item-card7-imgs"> 
                    <a href="javascript:void(0);"></a>
                     <img src="Assets/imgs/skype.svg" alt="Dash" class="  p-0">
                     </div>
                      <div class="card-body"> 
                        <div class="item-card7-desc"> 
                            <div class="item-card7-text"> 
                                <a href="javascript:void(0);" class="text-dark text-header">
                                    <h4 class="mb-1">Skype</h4>
                                </a>
                                 <a href="javascript:void(0);" class="text-subtext">Free
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
                                    <a href="javascript:void(0);"></a> 
                                    <img src="Assets/imgs/vlc.svg" alt="Dash" class="  p-0"> 
                                </div>
                                 <div class="card-body">
                                     <div class="item-card7-desc"> 
                                        <div class="item-card7-text">
                                             <a href="javascript:void(0);" class="text-dark text-header">
                                                <h4 class="mb-1">VLC Player</h4>
                                            </a>
                                             <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
            <div class="power-ribbon power-ribbon-top-left text-warning">
                <span class="bg-warning">
                    <i class="fa fa-bolt"></i>
               </span>
        </div>
            <div class="item-card7-imgs">
                 <a href="javascript:void(0);"></a> 
                 <img src="Assets/imgs/excel.svg" alt="Dash" class="  p-0"> 
                </div>

                <div class="card-body"> 
                    <div class="item-card7-desc"> 
                        <div class="item-card7-text"> 
                            <a href="javascript:void(0);" class="text-dark text-header">
                                <h4 class="mb-1">Excel</h4></a> 
                                <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                <a href="javascript:void(0);"></a> 
                <img src="Assets/imgs/google-drive.svg" alt="Dash" class="  p-0"> </div> <div class="card-body"> <div class="item-card7-desc"> <div class="item-card7-text"> <a href="javascript:void(0);" class="text-dark text-header"><h4 class="mb-1">Google-drive</h4></a> <a href="javascript:void(0);" class="text-subtext">Free</a> </div>
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
            <div class="power-ribbon power-ribbon-top-left text-warning">
                <span class="bg-primary"><i class="fa fa-bolt"></i></span>
            </div>
             <div class="item-card7-imgs">
                 <a href="javascript:void(0);"></a>
                  <img src="Assets/imgs/powerpoint.svg" alt="Dash" class="  p-0"> 
                </div>
                 <div class="card-body"> 
                    <div class="item-card7-desc"> 
                        <div class="item-card7-text"> 
                            <a href="javascript:void(0);" class="text-dark text-header">
                                <h4 class="mb-1">Powerpoint</h4>
                            </a> 
                            <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                 <a href="javascript:void(0);"></a> 
                 <img src="Assets/imgs/word.svg" alt="Dash" class="  p-0"> 
                </div> 
                <div class="card-body"> 
                    <div class="item-card7-desc"> 
                        <div class="item-card7-text"> 
                            <a href="javascript:void(0);" class="text-dark text-header">
                                <h4 class="mb-1">Microsoft Word</h4></a> 
                                <a href="javascript:void(0);" class="text-subtext">Free</a>
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
            <div class="power-ribbon power-ribbon-top-left text-warning">
                <span class="bg-warning">
                    <i class="fa fa-bolt"></i>
               </span>
        </div>
             <div class="item-card7-imgs">
                 <a href="javascript:void(0);"></a>
                  <img src="Assets/imgs/slides.svg" alt="Dash" class="  p-0">
                 </div>
                  <div class="card-body">
                     <div class="item-card7-desc"> 
                        <div class="item-card7-text">
                             <a href="javascript:void(0);" class="text-dark text-header">
                                <h4 class="mb-1">Google Slides</h4></a>
                                 <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                <a href="javascript:void(0);"></a> 
                <img src="Assets/imgs/acrobat-reader.svg" alt="Dash" class="  p-0"> 
            </div>
             <div class="card-body"> 
                <div class="item-card7-desc">
                     <div class="item-card7-text"> 
                        <a href="javascript:void(0);" class="text-dark text-header">
                            <h4 class="mb-1">Acrobat Reader</h4></a>
                             <a href="javascript:void(0);" class="text-subtext">Free</a>
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
        <div class="power-ribbon power-ribbon-top-left text-warning">
            <span class="bg-primary"><i class="fa fa-bolt"></i></span>
        </div>
        <div class="item-card7-imgs">
             <a href="javascript:void(0);"></a>
              <img src="Assets/imgs/skype.svg" alt="Dash" class="  p-0"> 
            </div>
             <div class="card-body">
                 <div class="item-card7-desc">
                     <div class="item-card7-text">
                         <a href="javascript:void(0);" class="text-dark text-header">
                            <h4 class="mb-1">Skype</h4>
                        </a>
                         <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
            <a href="javascript:void(0);"></a> 
            <img src="Assets/imgs/team-viewer.svg" alt="Dash" class="p-0">
         </div> 
         <div class="card-body"> 
            <div class="item-card7-desc"> 
                <div class="item-card7-text">
                     <a href="javascript:void(0);" class="text-dark text-header">
                        <h4 class="mb-1">Team-Viewer</h4></a> 
                        <a href="javascript:void(0);" class="text-subtext">Free</a> 
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
                    <a href="javascript:void(0);" class="btn btn-primary"> View More</a>
                </div>
           </div>

         </div>




         <!-- second design -->
 <section class="sptb pb-0"> 
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

               <div class="slick-prev1 d-none d-md-block">
                  <span><i class="fas fa-angle-left"></i></span>
                </div>
                <div class="slick-next1 d-none d-md-block" >
                  <span><i class="fas fa-angle-right"></i></span>
                </div>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/camera-pro.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">HD Camera Pro</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="javascript:void(0);" class="btn btn-primary mt-3">Download</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/app-lock.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">Applock</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="paid-javascript:void(0);" class="btn btn-primary mt-3">$ 350 Buy Now</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/utorrent.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header" >
                                           <h4 class="mb-1">Evernote</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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

                                        <p>Various versions have evolved over the years, sometimes</p><a href="javascript:void(0);" class="btn btn-primary mt-3">Download</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/boost-pro.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">RAM & Game Bootster</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="paid-javascript:void(0);" class="btn btn-primary mt-3">$ 150 Buy Now</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/Icon-Pack.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;">
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">One UI Icon Pack</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="javascript:void(0);" class="btn btn-primary mt-3">Download</a>
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
                           <a href="javascript:void(0);"></a>
                            <img src="Assets/imgs/itunes.svg" alt="Dash" class="p-0" style="height: 64px;width: 88px;"> 
                            </div>
                             <div class="card-body"> 
                               <div class="item-card7-desc"> 
                                   <div class="item-card7-text"> 
                                       <a href="javascript:void(0);" class="text-dark text-header">
                                           <h4 class="mb-1">Itunes</h4>
                                       </a> 
                                       <a href="javascript:void(0);" class="text-subtext">Free</a>
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
                                        <a href="javascript:void(0);" class="btn btn-primary mt-3">$ 250 Buy Now</a>
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
                                <button type="submit" class="popup_desk_submit_btn form_1_submit" id="btn_save">Get Free Consultation</button>
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
 




 <!-- footer -->
 <!-- <section> 
    <footer class="bg-dark text-white p-2"> 
        <div class="footer-main border-bottom">
             <div class="container-fluid"> 
                <div class="row">
                     <div class="col-lg-3 col-md-12 footer-about">
                         <h6>About</h6>
                          <p class="mb-1">
                            Our mission is to enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions</p><p>That create value and reliable competitive advantage for our clients around the world.    
                          </p>
                        </div> 
                        <div class="col-lg-3 col-md-12">
                             <h6>Contact</h6> 
                             <ul class="list-unstyled mb-0"> 
                                <li> 
                                    <a href="javascript:void(0);"><i class="fa fa-home me-3 text-primary"></i> NCC Bhavan, Near Shivaji University Gate  No.8, Sky Ville Apartment,
                                        Kolhapur-416008.</a>
                                 </li>
                                  <li> 
                                    <a href="javascript:void(0);">
                                        <i class="fa fa-envelope me-3 text-primary"></i>
                                        comtranse@gmail.com</a>
                                  </li> 
                                  <li>
                                     <a href="javascript:void(0);"><i class="fa fa-phone me-3 text-primary"></i> + 9999999999</a>
                                 </li>
                                 <li>
                                     <a href="javascript:void(0);"><i class="fa fa-print me-3 text-primary"></i> + 9999999999</a> 
                                 </li> 
                                </ul> 

                                <ul class="list-unstyled list-inline mt-2">
                                     <li class="list-inline-item">
                                         <a href="javascript:void(0);" class="btn-floating btn-sm rgba-white-slight waves-effect waves-light"> <i class="fa-brands fa-facebook-f"></i></a> 
                                     </li> 
                                     <li class="list-inline-item">
                                         <a href="javascript:void(0);" class="btn-floating btn-sm rgba-white-slight waves-effect waves-light"> <i class="fa-brands fa-twitter"></i></a> 
                                     </li> 
                                     <li class="list-inline-item"> 
                                        <a href="javascript:void(0);" class="btn-floating btn-sm rgba-white-slight waves-effect waves-light"> <i class="fa-brands fa-google-plus-g"></i></a> 
                                    </li>
                                     <li class="list-inline-item"> <a href="javascript:void(0);" class="btn-floating btn-sm rgba-white-slight waves-effect waves-light"><i class="fa-brands fa-linkedin-in"></i> </a> 
                                    </li> 
                                </ul> 
                            </div>
                             <div class="col-lg-3 col-md-12">
                                 <h6>Apps Store</h6>
                                  <ul class="list-unstyled mb-0"> 
                                    <li><a href="javascript:void(0);"><i class="typcn typcn-chevron-right-outline me-1"></i>Download Center</a>
                                    </li>

                                    <li><a href="javascript:void(0);"><i class="typcn typcn-chevron-right-outline me-1"></i>Order tracking</a>
                                    </li>

                                     <li><a href="javascript:void(0);"><i class="typcn typcn-chevron-right-outline me-1"></i>Returns</a>
                                    </li>

                                     <li><a href="javascript:void(0);"><i class="typcn typcn-chevron-right-outline me-1"></i>Downloads</a>
                                    </li> 

                                    <li><a href="javascript:void(0);"><i class="typcn typcn-chevron-right-outline me-1"></i>Reviews</a>
                                    </li> 
                                </ul> 
                            </div> 

                            <div class="col-lg-3 col-md-12">
                                 <h6 class="">Subscribe</h6>
                                  <div class="input-group "> 
                                    <input type="text" class="form-control" placeholder="Email">
                                         <button type="button" class="btn btn-primary"> Subscribe </button> 
                                  </div>

                                   <h6 class="mb-2 mt-6">Payments</h6>
                                    <ul class="payments mb-0"> 
                                        <li> <a href="javascript:;" class="payments-icon"><i class="fa-brands fa-cc-amex"></i></a> 
                                        </li>

                                        <li> <a href="javascript:;" class="payments-icon"><i class="fa-brands fa-cc-visa"></i></a> 
                                        </li>

                                        <li> <a href="javascript:;" class="payments-icon"><i class="fa-solid fa-credit-card"></i></a>
                                         </li>

                                          <li><a href="javascript:;" class="payments-icon"><i class="fa-brands fa-cc-mastercard"></i></a> 
                                          </li>

                                         <li> <a href="javascript:;" class="payments-icon"><i class="fa-brands fa-cc-paypal"></i></a>
                                         </li> 
                                        </ul>
                                     </div> 
                                 </div> 
                            </div>
                         </div> 

                             <div class="bg-dark text-white p-0 border-bottom">
                                 <div class="container">
                                     <div class="p-2 text-center footer-links d-flex flex-wrap">
                                         <a href="javascript:void(0);" class="btn btn-link">How It Works</a> 
                                         <a href="javascript:void(0);" class="btn btn-link">About Us</a> 
                                         <a href="javascript:void(0);" class="btn btn-link">Pricing</a>
                                         <a href="javascript:void(0);" class="btn btn-link">Ads Categories</a> 
                                         <a href="javascript:void(0);" class="btn btn-link">Privacy Policy</a>
                                         <a href="javascript:void(0);" class="btn btn-link">Terms Of Conditions</a>
                                         <a href="javascript:void(0);" class="btn btn-link">Blog</a> 
                                         <a href="javascript:void(0);" class="btn btn-link">Contact Us</a>
                                         <a href="javascript:void(0);" class="btn btn-link">Premium Ad</a> 
                                        </div> 
                                    </div>
                                 </div> 
                                 <div class="bg-dark primary-gradient text-white p-1"> 
                                    <div class="container"> 
                                        <div class="row d-flex"> 
                                            <div class="col-lg-8 col-sm-12 mt-2 mb-2 text-center"> 
                                                Copyright © 2018-19 Designed with 
                                                    Comtranse Technology Kolhapur </a> All rights reserved.        
                                            </div>

                                         <div class="col-lg-4 col-sm-12 mt-1">
                                            <a href="https://www.freecounterstat.com" title="web counter" class="webcounter"><img src="https://counter6.optistats.ovh/private/freecounterstat.php?c=tdtfb32pyj1kq4mf2aml7rncxqufgt51" style="height:30px;width:92px;" title="web counter" alt="web counter"></a>
                                              </div>

                                        
                                     </div> 
                                    </div>
                                 </div> 
                                </footer>
</section> -->
                             

                             
</body>

<script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>

<script>

            $('.slider').slick({
                prevArrow:'.slick-prev1',
         nextArrow:'.slick-next1',
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
            });
    

                  
            $('.slider1').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
            });




            $('.slider2').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

            });


             $('.slider3').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]


            });


</script>


<script src="Assets\js\select2\horizontal.js"></script>

<script>

function hide() {
         document.getElementById('ouibounce-modal').hidden = true
      }
</script>


<script>
    $(document).ready(function() {
	var navpos = $('#menu_bar').offset();
	console.log(navpos.top);
	  $(window).bind('scroll', function() {
		if ($(window).scrollTop() > navpos.top) {
		 $('#menu_bar').addClass('navbar_fixed_top');
		 }
		 else {
		   $('#menu_bar').removeClass('navbar_fixed_top');
		 }
	  });

      var navpos = $('#menu_bar_mob').offset();
	console.log(navpos.top);
	  $(window).bind('scroll', function() {
		if ($(window).scrollTop() > navpos.top) {
		 $('#menu_bar_mob').addClass('navbar_fixed_top');
		 }
		 else {
		   $('#menu_bar_mob').removeClass('navbar_fixed_top');
		 }
	  });
  });
</script>
</html>