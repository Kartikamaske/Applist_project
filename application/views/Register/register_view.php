<section> 
        <div class="bannerimg cover-image background-size bg-background3" data-bs-image-src="Assets/imgs/register_banner_img.png" style="background: url('Assets/imgs/register_banner_img.png') center center;"> 
            <div class="header-text mb-0"> 
                <div class="container"> 
                    <div class="text-center text-white"> 
                        <h1 class="">Register</h1> 
                        
                    </div> 
                </div> 
            </div>
         </div> 
    </section>
<!-- -------------------- start form part ----------------  -->
    <section>
        <div class="container d-flex  d-lg-flex my-5 flex-column-reverse  flex-lg-row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 my-5">
                <h2 class="text-center">Hear From Our Customers</h2>
                <p class="text-center">Discover what our customers have to say about their 
                    <br> experience with us!</p>
                <div class="vndr_slidr_main">
                    <div class="vndr_slidr_slide">
                        <div class="vndr_slidr_quote">
                            <i class="vndr_slidr_quote_icon"></i>
                        </div>
                        <div class="vndr_slidr_info">
                            <div class="vndr_slidr_user_img">
                                <img src="Assets/imgs/natalia_final-min.jpg" alt="Natalia Nanistova" height="116" width="116">
                            </div>
                            <div class="vndr_slidr_user_info">
                                <h3>Natalia Nanistova</h3>
                                <span>Senior Product Marketing Manager</span>
                            </div>
                        </div>
                        <div class="vndr_slidr_inner_content">
                            <div class="content_logo">
                                <img src="Assets/imgs/cloudtalk.svg" height="36" width="188" alt="Cloudtalk">
                            </div>
                            <p>We perceive SoftwareSuggest as a very useful platform that helps software companies present important details like customer reviews, features, pricing, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 create_a_free_listing_outer my-5">
                <div class="create_a_free_listing">
                    <p>List Your Product - It's Free</p>
                    <form enctype="multipart/form-data" class="contact-form cf-style-1 inner-top-xs-new" id="registerForm" action="" method="post" data-hs-cf-bound="true">
                        <div class="row vndr_Form_Main_Row">
                            <div class="col-md-6 vndr_Form_column">
                                <i class="fa-solid fa-user form_icon"></i>
                                <input type="text" pattern="^[a-zA-Z].*" name="username" id="username" placeholder="Name *">
                                <div id="nameerr" class="redStar"></div>
                            </div>
                            <div class="col-md-6 vndr_Form_column mobile_no_field">
                                <i class="fa-solid fa-phone form_icon"></i>
                                <input type="number" id="phone" class="ssintlTelInput" pattern="^[0-9].*" name="phone" required="1" aria-labelledby="vp_phone" placeholder="Phone *" autocomplete="off">
                                <div id="phoneerr" class="redStar"></div>
                            </div>
                            <div class="col-md-6 vndr_Form_column">
                                <i class="fa-solid fa-envelope form_icon"></i>
                                <input type="email" id="useremail" name="useremail" placeholder="Email *">
                                <!-- <i id="b_e_tooltip" class="fa-solid fa-circle-info b_e_tooltip tooltip_icon"></i> -->
                                <!-- <i  class="icon info_icon_blue_span b_e_tooltip"></i> -->
                                <!-- <div class="vendors_form_tooltip b_e_tooltip_email_text" for="b_e_tooltip">
                                    SoftwareSuggest does not support email addresses provided by consumer email services providers. This includes outlook.com, hotmail.com, gmail.com and others.
                                </div> -->

                                <div id="emailerr" class="redStar"></div>
                            </div>
                            <div class="col-md-6 vndr_Form_column">
                                <i class="fa-solid fa-building-columns form_icon"></i>
                                <input type="text" id="organization" name="organization" required="1" aria-labelledby="vp_organization" placeholder="Organization *">
                                <div id="comperr" class="redStar"></div>
                            </div>
                            

                            <div class="col-md-12 vndr_Form_column mobile_no_field">
                                <i class="fa-solid fa-earth-americas form_icon"></i>
                                <input type="text" id="org_url" name="org_url" required="1" aria-labelledby="vp_website" placeholder="Website *">
                                <div id="urlerr" class="redStar"></div>
                            </div>

                            <!-- <div class="col-md-6 vndr_Form_column mobile_no_field">
                                <i class="fa-solid fa-lock form_icon"></i>
                                <input type="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" name="password" required="1" aria-labelledby="vp_phone" placeholder="Password *">
                                <i id="b_e_tooltip_psw" class="fa-solid fa-circle-info b_e_tooltip tooltip_icon"></i>
                                
                                <div class="mdl-tooltip mdl-tooltip--top b_tooltip_ vendors_form_tooltip b_e_tooltip_psw_text" for="b_e_tooltip_psw">
                                    Password must contain minimum 6 characters , 1 Digit, 1 Uppercase, 1 Lowercase
                                </div>
                                <div id="pswerr" class="redStar"></div>
                            </div> -->

                            <!-- <div class="col-md-12 vndr_Form_column mobile_no_field">
                                <i class="fa-solid fa-people-arrows form_icon"></i>
                                <input type="text" id="competitors" pattern="^[a-zA-Z0-9].*" name="competitors" required="1" aria-labelledby="vp_competitors" placeholder="Who are Your Competitors? *">
                                <div id="competitorsErr" class="redStar ps-3"></div>
                            </div> -->

                            <div class="d-flex justify-content-center col-md-12 vndr_Form_sbmt">
                                <button type="button" name="btn_submit" id="btn_submit" class="submit_btn_price" onclick="window.pagesense = window.pagesense || [];window.pagesense.push(['trackEvent', 'Submit']);">Submit</button>
                            </div>
                            <div class="col-md-12">
                                <div class="already_account_login">
                                    <span class="already_login_span">Already have an account? 
                                        <a rel="noopener" href="https://www.softwaresuggest.com/vendorsportal/index.php?r=site/login" target="_blank"><u> Login</u></a>
                                    </span>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="terms_div_vendor">
                                    <span class="tos_span">By signing up you agree to the 
                                        <a rel="noopener" target="_blank" href="https://www.softwaresuggest.com/tos">Terms of Use</a> and 
                                        <a rel="noopener" target="_blank" href="https://www.softwaresuggest.com/privacy">Privacy Policy</a>.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <link rel="stylesheet" href="<?php echo base_url(); ?>web_resources/dist/css/sweetalert.css">
    

<script  src="<?php echo base_url('web_resources');?>/dist/js/jquery.min.js"></script>          
<script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/RegisterCreate.js"></script>

    
