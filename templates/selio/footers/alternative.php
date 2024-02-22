<section class="footer_area">
    <section class="bottom section-padding">
        <div class="container placeholder-container">
            <div class="row">
                <?php _widget('footer_logo_info');?>
                <?php _widget('footer_contact');?>
                <?php _widget('footer_social');?>
            </div>
            <img src="assets/img/<?php echo (sw_is_safari()) ? 'placeholder-footer.png' : 'placeholder-footer.webp';?>" alt="placeholder" class="footer-placeholder">
        </div>
    </section>
    <footer class="footer">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-6">
                    <div class="copyright text-left footer-content ">
                        <p>© <?php echo lang_check('Selio theme made in EU. All Rights Reserved');?>.</p>
                    </div>
                </div>
                <div class="col-md-6">
                	<div class="Digipanda_Consulting footer-content">
                	   <p> <small>Crafted with <i class="icon-heart text-danger"></i> <a href="https://digipanda.co.in/" target="_blank">by Digipanda Consulting</a> </small></p>
                	</div>
                </div>
            </div>
        </div>
    </footer><!--footer end-->
</section>


