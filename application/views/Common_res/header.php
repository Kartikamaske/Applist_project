<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Company</title>
    <link rel="stylesheet" href="<?php echo base_url(); ?>Assets\css\style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">

    <link rel="icon" href="<?= base_url();?>Assets/imgs/favicon1.png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family='Poppins'">
    
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
  

  <link rel="stylesheet" href="<?= base_url();?>assets/sweetalert.css">

    
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
                top: 44%;
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
                cursor: pointer;
                }

                .slick-slider .slick-next::after{
                    content: '>';
                        line-height: 1;
                        font-size: 25px;
                        cursor: pointer;
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
                cursor: pointer;
            }

            .slick-slider1 .slick-prev::before{
                content: '<';
                line-height: 1;
                font-size: 15px;
            }

            .slick-slider1 .slick-next{
                right: -30px;
                font-size: 0;
                cursor: pointer;
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
                cursor: pointer;
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
                cursor: pointer;
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



                .go{
                height: 100px;
                width: 100px;
                border: 2px solid black;
            }

            .slick-slider4 button{
                position: absolute;
                /* top:-9%!important; */
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

            .slick-slider4 .slick-prev{
                left: 94%!important;
                top: -9%!important;
                font-size: 0;
                color: #9fa9bd;
                cursor: pointer
            }

            .slick-slider4 .slick-prev::before{
                content: '<';
                line-height: 1;
                font-size: 25px;
            }

            .slick-slider4 .slick-next{
                right: -3%!important;
                font-size: 0;
                cursor: pointer;
                top: -9%!important;
                }

                .slick-slider4 .slick-next::after{
                    content: '>';
                        line-height: 1;
                        font-size: 25px;
                }

                .slick-slider4 img{
                    width: 100%;
                    height: 250px;
                }

                .slick-slider4{
                    padding: 2px 0;
                    position: relative;
                    height: auto !important;
                }


                .slick-slider5 button{
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
                display:none!important;
                /* scroll-behavior: auto!important; */
            }

            .slick-slider5 .slick-prev{
                left: -30px;
                font-size: 0;
                cursor: pointer;
            }

            .slick-slider5 .slick-prev::before{
                content: '<';
                line-height: 1;
                font-size: 15px;
            }

            .slick-slider5 .slick-next{
                right: -30px;
                font-size: 0;
                cursor: pointer;
                }

                .slick-slider5 .slick-next::after{
                    content: '>';
                        line-height: 1;
                        font-size: 25px;
                }

                .slick-slider5 img{
                    width: 100%;
                    height: 250px;
                }

                .slick-slider5{
                    padding: 40px 0;
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
                z-index: 999;
                overflow: auto;
            }
            .swal2-popup .swal2-modal .swal2-icon-success .swal2-show{
                z-index:99999!important;
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
                font-size: 13px;
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
                font-size: 13px;
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
                width: 30px;
                height: 30px;
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
                height: 18px;
                width: 18px;
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


        <style>
            .loader {
            margin: 0 auto;
            width: 60px;
            height: 50px;
            text-align: center;
            font-size: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translateY(-50%) translateX(-50%);
        }

        .loader > div {
            height: 100%;
            width: 8px;
            display: inline-block;
            float: left;
            margin-left: 2px;
            -webkit-animation: delay 0.8s infinite ease-in-out;
            animation: delay 0.8s infinite ease-in-out;
        }

        .loader .bar1 {
            background-color: #754fa0;
        }

        .loader .bar2 {
            background-color: #09b7bf;
            -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s;
        }


        .loader .bar3 {
            background-color: #90d36b;
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
        }


        .loader .bar4 {
            background-color: #f2d40d;
            -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
        }

        .loader .bar5 {
            background-color: #fcb12b;
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
        }

        .loader .bar6 {
            background-color: #ed1b72;
            -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
        }
        @keyframes delay {

        0%, 40%, 100% {
            transform: scaleY(1.00);
            -webkit-transform: scaleY(0.05);
        }

        20% {
            transform: scaleY(1.0);
            -webkit-transform: scaleY(1.0);
        }
        }

        </style>


 
</head>
<body>

<div class="preloader-wrapper">
            <div class="preloader-thumb">
                <!-- <img src="<?= base_url();?>Assets/imgs/loadernew.svg" alt=""> -->
                <div class="loader">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                      <div class="bar4"></div>
                      <div class="bar5"></div>
                      <div class="bar6"></div>
                </div>
            </div>
        </div>

    <div class="header-main position-relative"> 
        <div class="top-bar"> 
            <div class="container"> 
                <div class="row"> 
                    <div class="col-xl-9 col-lg-10 col-sm-4 col-5"> 
                        <div class="top-bar-left d-flex align-items-center p-0"> 
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
                                        <!-- <i class="fa-brands fa-google-plus-g"></i> -->
                                    </a> </li> 
                                </ul> 
                            </div>
                            
                            
                            <div class="clearfix"> 
                                <div class="header-search-logo pt-0 pb-0"> 
                                    <!-- <a href="javascript:void(0);"> <img src="Assets/imgs/logo.png" alt="" class="logo-img"> <img src="../assets/images/brand/logo1.png" alt="" class="logo-img1"> </a>  -->

                                    <a href="javascript:void(0);"> <img src="<?php echo base_url(); ?>Assets/imgs/logo2.png" alt="" class="logo-img"> </a> 

                                </div> 
                            </div>


        <div class="help">
            <div style="">
                <span class="text-dark"><i class="fa-regular fa-envelope-open" style="color:#111111;text-shadow: 1px 1px 1px rgba(0,0,0,.2);"></i> <a href="mailto:help@softwarecompany.tech" class="text-dark">help@softwarecompany.tech</a></span>&nbsp;&nbsp;
                <span class="text-dark"><i class="fa-solid fa-mobile-screen" style="color:#0d0e0d;text-shadow: 1px 1px 1px rgba(0,0,0,.2);"></i>  <a href="tel:9623510789" class="text-dark">9623510789 , 919607710789</a></span>               
            </div>
           
         </div>
                
                        </div> 
                    </div> 
                    <div class="col-xl-2 col-lg-2 col-sm-8 col-7"> 
                        <div class="top-bar-right p-0 mt-lg-2"> 
                            <ul class="custom "> 
                                <li> 
                                <a href="<?=base_url() ?>Responsive" class="text-dark">
                                       <i class="fa-solid fa-circle-user"></i><span> Register</span>
                                    </a> 
                                </li> 

                                <li>
                                 <a href="<?=base_url() ?>Responsive" class="text-dark" onclick="login()">
                                <i class="fa-solid fa-user"></i><span> Login</span>
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
                        <img src="<?php echo base_url(); ?>Assets/imgs/logo2.png" class="logo-img" alt="" style="width: 150px;"> 
                    </span> 
                    <a href="tel:962-351-0789" class="callusbtn"> 
                        <!-- 9623510789 -->
                        <i class="fa fa-phone" aria-hidden="true" style="color:#5e4bdd;"></i>
                    </a> 
                </div> 
            </div> 
        </div>
        <div class="jumps-prevent" style="padding-top: 0px;"></div> 
        <!-- /Mobile Header -->
         <!-- Horizontal-navigation --> 
         <div id="sticky-wrapper" class="sticky-wrapper is-sticky">
            <div id="menu_bar" class="header-style horizontal-main clearfix" style="width:100%;"> 
                <div class="horizontal-mainwrapper container clearfix"> 
                    <!--Nav--> 
                    <nav class="horizontalMenu clearfix d-md-flex align-items-center">
                        <div class="overlapblackbg"></div> 
                        <ul class="horizontalMenu-list rightside-btns"> 

                            <li aria-haspopup="true">
                                <a href="<?php echo base_url(); ?>Responsive"> 
                                <i class="fa-solid fa-house-user"></i> Home
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                
                            </li>


                            <li aria-haspopup="true" >
                            <input type="hidden"  id="inputId">
                                <a href="<?=base_url() ?>Responsive/software"> 
                                <i class="fa-solid fa-laptop"></i> Software
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                
                            </li> 

                            <li aria-haspopup="true">
                                <a href="<?=base_url() ?>Responsive/andriod"> 
                                <i class="fa-brands fa-android"></i> Android Apps
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                
                            </li> 
                            <li aria-haspopup="true">
                                <a href="<?=base_url() ?>Responsive/iosapp"> 
                                <i class="fa-brands fa-apple"></i> IOS Apps<i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                                 
                            </li> 
                            
                            <li aria-haspopup="true">
                                <a href="<?=base_url() ?>Responsive/ecommerce"> 
                                <i class="fa-solid fa-dumpster"></i> E-commerce
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                            </li>

                            <li aria-haspopup="true">
                                <a href="<?=base_url() ?>Responsive/website"> 
                                <i class="fa-solid fa-globe"></i> Website
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                            </li> 

                            <li aria-haspopup="true">
                                <a href="<?=base_url() ?>Responsive/digitalmarkting"> 
                                <i class="fa-solid fa-people-group"></i> Digital Marketing
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                            </li> 


                            <li aria-haspopup="true">
                                <a href="<?=base_url() ?>Responsive/graphicdesign"> 
                                    <i class="fa-solid fa-cube"></i> Graphic Design
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                            </li> 

                            <!-- <li aria-haspopup="true">
                                <a href="Javascript:void(0)"> 
                                <i class="fa-brands fa-blogger"></i> Blog
                                    <i class="fe fe-chevron-down iconangle ms-1 m-0"></i> 
                                </a> 
                            </li>  -->


                            <!-- <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0"> 
                                <span><a class="btn btn-primary" href="javascript:void(0);">Upload</a></span> 
                            </li>  -->
                        </ul> 

                    </nav> 
                    <!--Nav--> 
                </div> 
            </div>
        </div> 
        <!-- /Horizontal-navigation --> 
    </div>

    <!-- <div class="mt-5"></div> -->
    <div class="tab-content container mt-0 mt-lg-5" id="abchide">
                      <div id="home" class="tab-pane active d-flex gap-5 row justify-content-center flex-wrap" >
                       
                         </div>


        </div>   

        <ul class="pagination justify-content-center mb-2" id="pagination"></ul> 

    <!-- <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script> -->



    <!-- <div id="wacht">
            <a href="https://web.whatsapp.com/send?phone=+919347824725&amp;text=" class="web-whatsapp" onclick="gtag('event', 'WhatsApp', {'event_action': 'whatsapp_chat', 'event_category': 'Chat', 'event_label': 'Chat_WhatsApp'});" target="_blank"><img src="<?= base_url();?>Assets/imgs/whatsapp.png" width="30px"></a>

            <a href="https://api.whatsapp.com/send?phone=+919347824725&amp;text=" class="api-whatsapp" target="_blank"><img src="<?= base_url();?>Assets/imgs/whatsapp.png" width="30px"></a>
         </div> -->




      <!-- <div class="feedback smooth-menu contactus"><a href="#contact"><span class="btn btn-warning" style="background-color: blue; color: white;border: 1px solid black;">Contact Us</span></a></div> -->
      <!-- <div class="scroll-to-top scroll-to-target" data-target="html">
        <span class="fa fa-long-arrow-up"></span> -->
    </div> 


    
    <script src="">
         $(document).ready(function(){
            $("#abchide").hide();
         });
    </script>




    <!-- <script>
    function login() {

        document.getElementById('ouibounce-modal').style.display = 'block';

    }
    </script> -->


    
 