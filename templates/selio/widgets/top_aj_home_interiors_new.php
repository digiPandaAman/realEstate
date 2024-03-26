<div id="carouselExampleIndicators" class="carousel slide HomeInT_Slider_page" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 bg-slider" src="<?=('assets/selfImages/Interior_back.jpg');?>" alt="First slide">
                <div class="carousel-caption  d-md-block">
                    <h5>Bring home <span>beautiful interiors</span></h5>
                    <p>Experience unmatched quality & timely delivery with Livspace</p>
                    <button>Book a free Consultation</button>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 bg-slider" src="<?=('assets/selfImages/Interior_back2.jpg');?>" alt="Second slide">
				
                <div class="carousel-caption  d-md-block">
					<h5>Bring home <span>beautiful interiors</span></h5>
                    <p>Experience unmatched quality & timely delivery with Livspace</p>
                    <button>Book a free Consultation</button>
                </div>
            </div>

        </div>


    </div>
    <div id="interior-tabs-container">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="interior-heading-box mb-4">
                        <h5>Interior Design Services Under One Roof</h5>
                        <p>From ideation to execution, we offer functional design solutions for your home.</p>
                    </div>
                </div>
            </div>
            <?php if(isset($homeInterior) && $homeInterior): ?>
            <div class="row justify-content-center">
                <ul>
                    <?php foreach($homeInterior as $hiData): $seoName = str_replace(' ','-',strtolower($hiData->name)); ?>
                    <li class="tab tab_services">
						<a href="<?=base_url('en/194/services/'.$seoName);?>">
                        <img src="<?=('assets/selfImages/homeInteriorCategory/'.$seoName.'.png');?>">
                        <h3><?=ucwords($hiData->name);?></h3>
						</a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <?php endif; ?>
        </div>
    </div>

<div class="RegiSterCallToacTion">
	<div class="container">
          <div class="row">
               <div class="col-md-6">
				    <div class="interior-CallTo">
						<div class="icon">
							<img src="<?=('assets/selfImages/interior_DC.png');?>">
						</div>
						<div class="CallTo_title">
							<h4>Are you a interior designer?</h4>
							<a href="{front_login_url}#sw_register" class="RegisTer_NoW_BTN">Register Now <i class="la la-sign-in"></i></a>
						</div>
					</div>
			   </div>
			  <div class="col-md-6">
				    <div class="interior-CallTo">
						<div class="icon">
							<img src="<?=('assets/selfImages/interior_DC.png');?>">
						</div>
						<div class="CallTo_title">
							<h4>Are you a interior Contractor?</h4>
							<a href="{front_login_url}#sw_register" class="RegisTer_NoW_BTN">Register Now <i class="la la-sign-in"></i></a>
						</div>
					</div>
			   </div>
         </div>
    </div>
</div>