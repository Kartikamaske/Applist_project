<section> 
        <div class="bannerimg cover-image background-size bg-background3" data-bs-image-src="Assets/imgs/register_banner_img.png" style="background: url('Assets/imgs/register_banner_img.png') center center;"> 
            <div class="header-text mb-0"> 
                <div class="container"> 
                    <div class="text-center text-white"> 
                        <h1 class="">Login</h1> 
                    </div> 
                </div> 
            </div>
         </div> 
    </section>


    <!-- --------------------- start login form --------------------- -->

   
    <section>
        <div class="container d-flex  d-lg-flex my-5 justify-content-center">
            
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 create_a_free_listing_outer my-5">
                <div class="create_a_free_listing">
                    <p>Login</p>
                    <form enctype="multipart/form-data" class="contact-form cf-style-1 inner-top-xs-new" id="contactus" action="/vendors" method="post" data-hs-cf-bound="true">
                        <div class="row vndr_Form_Main_Row">
                            <div class="col-md-12 vndr_Form_column">
                                <i class="fa-solid fa-user form_icon"></i>
                                <input type="text" pattern="^[a-zA-Z].*" name="GetListed[lastname]" required="1" id="GetListed_lastname" aria-labelledby="vp_name" placeholder="Username *">
                                <div id="nameerr" class="redStar"></div>
                            </div>
                            
                           

                            <div class="col-md-12 vndr_Form_column mobile_no_field">
                                <i class="fa-solid fa-lock form_icon"></i>
                                <input type="password" id="GetListed_psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" name="GetListed[psw]" required="1" aria-labelledby="vp_phone" placeholder="Password *">
                                <i id="b_e_tooltip_psw" class="icon info_icon_blue_span b_e_tooltip"></i>
                                <div class="mdl-tooltip mdl-tooltip--top b_tooltip_ vendors_form_tooltip b_e_tooltip_psw_text" for="b_e_tooltip_psw">
                                    Password must contain minimum 6 characters , 1 Digit, 1 Uppercase, 1 Lowercase
                                </div>
                                <div id="pswerr" class="redStar"></div>
                            </div>

                           

                            <div class="d-flex justify-content-center col-md-12 vndr_Form_sbmt">
                                <button type="button" name="login" id="login" class="submit_btn_price" onclick="window.pagesense = window.pagesense || [];window.pagesense.push(['trackEvent', 'Submit']);">Log In</button>
                            </div>
                            <div class="col-md-12">
                                <div class="already_account_login">
                                    <span class="already_login_span">Don't an account? 
                                        <a rel="noopener" href="register.html" target="_blank"><u> Register</u></a>
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

