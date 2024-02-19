<?php
/*
Widget-title: AJ Listing
Widget-preview-image: /assets/img/widgets_preview/top_page_content.webp
 */
?>
<?php if(!empty($page_body)):?>
<section class="explore-feature hp7 max_width_con section-padding widget_edit_enabled pb-0 mt-4">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8">
                <div class="section-heading mb-4">
                    <span>In-House Services</span>
                    <h3>Everything you Need at One Place</h3>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-2 col-md-3 col-6">
                <a href="#" title="">
                    <div class="card card_services">
                        <div class="card-body">
                            <i class="icon-sevices"><img src="<?=('assets/selfImages/servicesIcon1.png');?>" /></i>
                            <h3>Home Loan</h3>
                        </div>
                    </div>
                    <!--card end-->
                </a>
            </div>
            <div class="col-lg-2 col-md-3 col-6">
                <a href="#" title="">
                    <div class="card card_services">
                        <div class="card-body">
                           <i class="icon-sevices"><img src="<?=('assets/selfImages/servicesIcon2.png');?>" /></i>
                            <h3>Home Interior</h3>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-2 col-md-3 col-6">
                <a href="#" title="">
                    <div class="card card_services">
                        <div class="card-body">
                            <i class="icon-sevices"><img src="<?=('assets/selfImages/servicesIcon3.png');?>" /></i>
                            <h3>Home Insurance</h3>
                        </div>
                    </div>
                </a>
            </div>
			<div class="col-lg-2 col-md-3 col-6">
                <a href="#" title="">
                    <div class="card card_services">
                        <div class="card-body">
                            <i class="icon-sevices"><img src="<?=('assets/selfImages/servicesIcon4.png');?>" /></i>
                            <h3>Home Shift </h3>
                        </div>
                    </div>
                </a>
            </div>
			<div class="col-lg-2 col-md-3 col-6">
                <a href="#" title="">
                    <div class="card card_services">
                        <div class="card-body">
                            <i class="icon-sevices"><img src="<?=('assets/selfImages/servicesIcon5.png');?>" /></i>
                            <h3>Property valuation</h3>
                        </div>
                    </div>
                </a>
            </div>
			<div class="col-lg-2 col-md-3 col-6">
                <a href="#" title="">
                    <div class="card card_services">
                        <div class="card-body">
                            <i class="icon-sevices"><img src="<?=('assets/selfImages/servicesIcon5.png');?>" /></i>
                            <h3>Find an Agent</h3>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
<!--agents-sec end-->
<?php endif;?>