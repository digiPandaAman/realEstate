<!doctype html>
<html class="no-js" lang="en">

<head>
    <?php _widget('head'); ?>
    
    <style>
        body, html{
            height: 100%;
        }
        header, .footer_area {
            display: none;
        }
    </style>
</head>

<body class="">
    <div class="wrapper ConTentFlex Body_back_Img">
        <header>
            <?php _widget('header_bar'); ?>
            <?php _widget('header_main_panel'); ?>
        </header>
        <!--header end-->
        <?php if(file_exists(APPPATH.'controllers/admin/packages.php')): ?>
        <!-- <div class="container">
                <h2 class="widget-header text-uppercase">
                    {lang_AvailablePackages}
                </h2>
                <div class="widget-content">
                    <?php if($this->session->flashdata('error_package')):?>
                        <p class="alert alert-error"><?php echo $this->session->flashdata('error_package')?></p>
                    <?php endif;?>
                    <table class="table table-striped data_table" style="margin-bottom: 0px;" >
                        <thead>
                            <th  data-priority="1" data-breakpoints="xs" data-type="number">#</th>
                            <th  data-priority="2" data-type="html"><?php echo lang_check('Package name');?></th>
                            <th  data-priority="2" data-type="html"><?php echo lang_check('Price');?></th>
                            <th  data-priority="2" data-breakpoints="xs sm md" data-type="html"><?php echo lang_check('Free property activation');?></th>
                            <th  data-priority="2" data-breakpoints="xs sm md" data-type="html"><?php echo lang_check('Days limit');?></th>
                            <th  data-priority="2" data-breakpoints="xs sm" data-type="html"><?php echo lang_check('Listings limit');?></th>
                            <th  data-priority="2" data-breakpoints="xs sm md" data-type="html"><?php echo lang_check('Free featured limit');?></th>
                        </thead>
                        <tbody>
                            <?php
                            if(sw_count($packages)): foreach($packages as $package):
                            ?>
                            <tr>
                                <td><?php echo $package->id; ?></td>
                                <td>
                                <?php echo $package->package_name; ?>
                                <?php echo $package->show_private_listings==1?'&nbsp;<i class="fa fa-eye-open"></i>':'&nbsp;<i class="fa fa-eye-close"></i>'; ?>
                                </td>
                                <td><?php echo $package->package_price.' '.$package->currency_code; ?></td>
                                <td><?php echo $package->auto_activation?'<i class="fa fa-check"></i>':'<i class="fa fa-remove"></i>'; ?></td>
                                <td><?php echo $package->package_days; ?></td>
                                <td><?php echo $package->num_listing_limit?></td>
                                <td><?php echo $package->num_featured_limit?></td>
                            </tr>
                            <?php endforeach;?>
                            <?php else:?>
                            <tr>
                                <td colspan="20"><?php echo lang_check('Not available');?></td>
                            </tr>
                            <?php endif;?>           
                        </tbody>
                        </table>
                    <?php if(isset($settings_activation_price) && isset($settings_featured_price) &&
                            $settings_activation_price > 0 || $settings_featured_price > 0): ?>
                    <p class="row-fluid clearfix">
                        <br/>
                            <?php if($settings_activation_price > 0): ?>
                                <?php echo lang_check('* Property activation price:').' '.$settings_activation_price.' '.$settings_default_currency; ?><br />
                            <?php endif;?>
                            <?php if($settings_featured_price > 0): ?>
                                <?php echo lang_check('* Property featured price:').' '.$settings_featured_price.' '.$settings_default_currency; ?>
                            <?php endif;?>
                    </p>
                    <?php endif;?>
                </div>
            </div>  -->
        <!-- /. widget-AVAILABLE PACKAGES -->
        <?php endif; ?>
            
        <div class="container">
            <div class="selio_sw_win_wrapper LoginRegister_page">
                <div class="Topar_logo_head text-center">
                    <a href="{homepage_url_lang}" class="navbar-brand">
                        <img width="250" src="<?=base_url('files/footer-logo.png');?>" alt="TownManor">
                    </a>
                </div>
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="ci sw_widget sw_wrap">
                            <ul class="nav nav-tabs d-none sw-sign-form-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link log-in" href="#log-in-form" role="tab"
                                        data-toggle="tab"><?php echo lang_Check('Log in');?></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link sign-up" href="#sign-up-form" role="tab"
                                        data-toggle="tab"><?php echo lang_Check('Sign Up');?></a>
                                </li>
                            </ul>
                            <div class="forms-_row_area">
                                <div class="tab-content">
                                    <!-- Log In -->
                                    <div class="log-in-form tab-pane fade" role="tabpanel" id="log-in-form">
                                        <!--<h3><?php echo lang_check('Sign In to your Account');?></h3>-->
                                        <div class="form-title_top">
                                            
                    						<!--<p class="text-white mb-2"><span class="badge"><img src="<?=('assets/selfImages/insurance-icons.png');?>"></span> <?php echo lang_check('Sign in to your account');?></p>-->
                    					
                    					</div>
                                        <div class="form-wr-content">
                                            <form method="post" action="#sw_login">
                                                <?php if($this->session->flashdata('error_registration') != ''):?>
                                                <p class="alert alert-success">
                                                    <?php echo $this->session->flashdata('error_registration')?></p>
                                                <?php endif;?>
                                                <?php if($is_registration):?>
                                                <?php echo validation_errors()?>
                                                <?php endif;?>
                                                <?php if(config_item('app_type') == 'demo'):?>
                                                <p class="alert alert-info">
                                                    <?php echo lang_check('User creditionals: user, user')?></p>
                                                <?php endif;?>
                                                <?php if($is_login):?>
                                                <?php echo validation_errors()?>
                                                <?php if($this->session->flashdata('error')):?>
                                                <p class="alert alert-error"><?php echo $this->session->flashdata('error')?></p>
                                                <?php endif;?>
                                                <?php flashdata_message();?>
                                                <?php endif;?>
                                                <div class="Insurance_fill_form">
                                                    <div class="form-group">
                                                        <?php echo form_input('username', $this->input->get('username'), 'class="form-control" id="inputUsername_l" placeholder="'.lang('Username').'"')?>
                                                    </div>
                                                    <div class="form-group position-relative">
                                                        <?php echo form_password('password', $this->input->get('password'), 'class="form-control" id="inputPassword_l" placeholder="'.lang('Password').'"')?>
                                                        <i class="toggle-password fa fa-fw fa-eye-slash"></i>
                                                    </div>
                                                    <div class="form-cp">
                                                        <div class="form-group">
                                                            <div class="input-field">
                                                                <input type="checkbox" name="remember" id="remember" value="true">
                                                                <label for="remember">
                                                                    <span></span>
                                                                    <small><?php echo lang('Remember me')?></small>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="forgot-password create-op"
                                                            title="<?php echo lang_check('&nbsp;Create');?>?"><?php echo lang_check('&nbsp;Create');?>?</a>
                                                        
                                                        <a href="<?php echo site_url('/admin/user/forgetpassword');?>"
                                                            class="forgot-password"
                                                            title="<?php echo lang_check('Forgot Password');?>?"><?php echo lang_check('Forgot Password');?>?</a>
                                                    </div>
                                                    <!--form-cp end-->
                                                    <button type="submit" class="btn2"><?php echo lang_check('Sign In');?></button>
                                                </div>
                                            </form>
                                            <?php if(config_item('appId') != '' && !empty($login_url_facebook)): ?>
                                            <a href="<?php echo $login_url_facebook; ?>" style="" class="fb-btn"><i
                                                    class="fa fa-facebook"
                                                    aria-hidden="true"></i><?php echo lang_check('Sign in with facebook'); ?></a>
                                            <?php endif;?>
                                            <?php if(config_item('glogin_enabled')): ?>
                                            <a href="<?php echo site_url('api/google_login/'.$lang_id); ?>" style=""
                                                class="gl-btn"><i class="fa fa-google"
                                                    aria-hidden="true"></i><?php echo lang_check('Sign in with Google'); ?></a>
                                            <?php endif;?>
                                            <?php if(file_exists(APPPATH.'libraries/Twlogin.php') && false): ?>
                                            <?php 
                                                        $CI = &get_instance();
                                                        $CI->load->library('twlogin');
                                                    ?>
                                            <?php if($CI->twlogin->__get('consumerKey') && $CI->twlogin->__get('consumerSecret')): ?>
                                            <a href="<?php echo site_url('api/twitter_login/'.$lang_id); ?>" style="">
                                                class="fb-btn"<i class="fa fa-twitter"
                                                    aria-hidden="true"></i><?php echo lang_check('Sign in with Twitter'); ?></a>
                                            <?php endif;?>
                                            <?php endif;?>
                                            
                                        </div>
                                    </div>
                                    <!-- End Log In -->
                                    <!-- Sign In -->
                                    <div class="sign-up-form tab-pane fade" role="tabpanel" id="sign-up-form">
                                        <!--<h3><//?php echo lang_check('Register');?></h3>-->
                                        <div class="form-title_top">
                    						<!--<p class="text-white mb-2"><span class="badge"><img src="<?=('assets/selfImages/insurance-icons.png');?>"></span> <?php echo lang_check('Let’s get you started');?></p>-->
                    					</div>
                                        <div class="form-wr-content">
                                            <form method="post" action="#sw_register">
                                                <?php if($this->session->flashdata('error_registration') != ''):?>
                                                <p class="alert alert-success">
                                                    <?php echo $this->session->flashdata('error_registration')?></p>
                                                <?php endif;?>
                                                <?php if($is_registration):?>
                                                <?php echo validation_errors()?>
                                                <?php endif;?>
                                                <?php if(config_db_item('dropdown_register_enabled') === TRUE): ?>
                                                <div class="form-field">
                                                    <?php 
                                                        //$values = array('USER' => lang_check('USER'), 'AGENT' => lang_check('AGENT'));
                                                        //echo form_dropdown('type', $values, set_value('type', ''), 'class="form-control" id="input_type" onclick="chnageUserType(this);"')
                                                    ?>
                                                </div>
                                                <div class="form-check text-left mb-0 p-0 mt-2">
                                                    <div class="nav_nav_tabs m-0">
                                                        <div class="nav-link">
                                                            <input type="radio" name="type" id="userTypeUser" value="USER"
                                                            onclick="chnageUserType(this);" class="form-check-input Insurance_radio" checked>
                                                            
                                                            <label class="form-check-label" for="userTypeUser">
                                                                <img class="Insurance_img_icon" src="<?=('assets/selfImages/user-icon.png');?>" alt=""> 
                                                                <?=lang_check('Individual');?>
                                                            </label>
                                                        </div>
                                                        <div class="nav-link">
                                                            <input type="radio" name="type" id="userTypeAgent" value="AGENT"
                                                            onclick="chnageUserType(this);" class="form-check-input Insurance_radio">
                                                            <label class="form-check-label" for="userTypeAgent">
                                                                <img class="Insurance_img_icon" src="<?=('assets/selfImages/customer-service.png');?>" alt=""> 
                                                                <?=lang_check('Agent');?>
                                                            </label>
                                                        </div>
                                                        <div class="nav-link">
                                                            <input type="radio" name="type" id="builderDeveloper" value="Builder/Developer"
                                                            onclick="chnageUserType(this);" class="form-check-input Insurance_radio">
                                                            <label class="form-check-label" for="builderDeveloper">
                                                                <img class="Insurance_img_icon" src="<?=('assets/selfImages/engineer.png');?>" alt=""> 
                                                                <?=lang_check('Builder<br/>/Developer');?>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <?php endif; ?>
                                                <div class="Insurance_fill_form">
                                                    <?php if(config_db_item('register_reduced') == FALSE): ?>
                                                    <div class="form-group">
                                                        <?php echo form_input('name_surname', set_value('name_surname', ''), 'class="form-control" id="inputNameSurname" placeholder="'.lang('FirstLast').'"')?>
                                                    </div>
                                                    <div class="form-group">
                                                        <?php echo form_input('username', set_value('username', ''), 'class="form-control" id="inputUsername" placeholder="'.lang('Username').'"')?>
                                                    </div>
                                                    <?php endif;?>
                                                    <div class="form-group">
                                                        <?php echo form_input('mail', set_value('mail', ''), 'class="form-control" id="inputMail" placeholder="'.lang('Email').'"')?>
                                                    </div>
                                                    <div class="form-group position-relative">
                                                        <?php echo form_password('password', set_value('password', ''), 'class="form-control" id="inputPassword" placeholder="'.lang('Password').'" autocomplete="new-password"')?>
                                                        <i class="toggle-password fa fa-fw fa-eye-slash"></i>
                                                    </div>
                                                    <div class="form-group position-relative">
                                                        <?php echo form_password('password_confirm', set_value('password_confirm', ''), 'class="form-control" id="inputPasswordConfirm" placeholder="'.lang('Confirmpassword').'" autocomplete="new-password"')?>
                                                        <i class="toggle-password fa fa-fw fa-eye-slash"></i>
                                                    </div>
                                                    <!-- AJ Start Code -->
                                                    <div class="clearfix"></div>
                                                    <div id="reraRegisterOpen" class="form-check text-left mb-4 p-0 mt-2" style="display:none;">
                                                        <label>Rera Register</label><br>
                                                        <div class="d-flex pl-4 mt-1">
                                                            <div class="mr-4 pr-2">
                                                                <input type="radio" name="reraRegister" id="reraRegisterYes" value="Yes"
                                                                onclick="reraField(this);" class="form-check-input">
                                                                <label class="form-check-label" for="reraRegisterYes">Yes</label>
                                                            </div>
                                                            <div>
                                                                <input type="radio" name="reraRegister" id="reraRegisterNo" value="No"
                                                                onclick="reraField(this);" class="form-check-input">
                                                                <label class="form-check-label" for="reraRegisterNo">No</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="reraRegistrationField" style="display:none;">
                                                        <div class="form-group">
                                                            <?php echo form_input('reraRegisterNo', set_value('reraRegisterNo', ''), 'class="form-control" id="inputReraRegisterNo" placeholder="Rera Regn No"')?>
                                                        </div>
                                                        <div class="form-group">
                                                            <?php echo form_input('aadhaarNo', set_value('aadhaarNo', ''), 'class="form-control" id="inputAadhaarNo" placeholder="Aadhaar No"')?>
                                                        </div>
                                                        <div class="form-group">
                                                            <?php echo form_input('panNo', set_value('panNo', ''), 'class="form-control" id="inputPanNo" placeholder="Pan No"')?>
                                                        </div>
                                                    </div>
                                                    <!-- AJ End Code -->
                                                    <?php if(config_db_item('register_reduced') == FALSE): ?>
                                                    <div class="form-group">
                                                        <?php echo form_textarea('address', set_value('address', ''), 'placeholder="'.lang('Address').'" rows="3" class="form-control"')?>
                                                    </div>
            
                                                    <div class="form-group">
                                                        <?php echo form_input('phone', set_value('phone', ''), 'class="form-control" id="inputPhone" placeholder="'.lang('Phone').'"')?>
                                                    </div>
                                                    <?php endif; ?>
            
                                                    <?php if (config_item('captcha_disabled') === FALSE): ?>
                                                    <div class="form-group {form_error_captcha}">
                                                        <div class="form_captcha">
                                                            <?php echo $captcha['image']; ?>
                                                            <div class="input-control">
                                                                <input class="captcha  {form_error_captcha}" name="captcha"
                                                                    type="text" placeholder="<?php _l('Captcha'); ?>" value="" />
                                                                <input class="hidden" name="captcha_hash" type="text"
                                                                    value="<?php echo $captcha_hash; ?>" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <?php endif; ?>
                                                    <?php if(config_item('recaptcha_site_key') !== FALSE): ?>
                                                    <div class="form-group form-field-captcha">
                                                        <div class="controls">
                                                            <?php _recaptcha(true); ?>
                                                        </div>
                                                    </div>
                                                    <?php endif; ?>
                                                    <?php if(config_db_item('terms_link') !== FALSE): ?>
                                                    <?php
                                                            $site_url = site_url();
                                                            $urlparts = parse_url($site_url);
                                                            $basic_domain = $urlparts['host'];
                                                            $terms_url = config_db_item('terms_link');
                                                            $urlparts = parse_url($terms_url);
                                                            $terms_domain ='';
                                                            if(isset($urlparts['host']))
                                                                $terms_domain = $urlparts['host'];
            
                                                            if($terms_domain == $basic_domain) {
                                                                $terms_url = str_replace('en', $lang_code, $terms_url);
                                                            }
                                                        ?>
                                                    <div class="form-cp">
                                                        <div class="form-group">
                                                            <div class="input-field">
                                                                <input type="checkbox" name="registr_terms" required=""
                                                                    id="registr_terms">
                                                                <label for="registr_terms">
                                                                    <span></span>
                                                                    <small> <a target="_blank"
                                                                            href="<?php echo $terms_url; ?>"><?php echo lang_check('I accept the GDPR'); ?></a></small>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <a href="#log-in-form" title="Have an account?"
                                                            class="signin-op"><?php echo lang_check('Have an account?');?></a>
                                                    </div>
                                                    <?php endif;?>
                                                    <button type="submit"
                                                        class="btn2"><?php echo lang_check('Create Account');?></button>
                                                        <p class="loginToAct">Already a member? <a href=""> Login</a></p>
                                                </div>
                                            </form>
                                            
                                        </div>
                                    </div>
                                    <!-- End Sign In -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <?php _subtemplate('footers', _ch($subtemplate_footer, 'alternative')); ?>
    </div>
    <!--wrapper end-->
    <?php _widget('custom_javascript'); ?>
    <?php
        /* dinamic per listing */
        _generate_js('_generate_login_page_js_' . md5(current_url_q()), 'widgets/_generate_login_page_js.php', false, 0);
        ?>
    <script>
        function chnageUserType(data) {
            let result = data.value;
            if (result == 'AGENT') {
                $("#reraRegisterOpen").show(); // Display the div
            } else {
                $("#reraRegisterOpen").hide(); // Display the div
            }
        }

        function reraField(data) {
            let result = data.value;
            if (result == 'Yes') {
                $("#reraRegistrationField").show(); // Display the div
            } else {
                $("#reraRegistrationField").hide(); // Display the div
            }
        }
    </script>
    
    
    <script>
        $(".toggle-password").click(function() {
            $(this).toggleClass("fa-eye fa-eye-slash");
            input = $(this).parent().find("input");
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    </script>
</body>

</html>