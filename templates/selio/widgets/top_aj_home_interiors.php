<section class="insurance_bg">
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<div class="forms-_row_area">
					<div class="form-title_top">
						<h3>Make your home  <span>beautiful & Furnished</span></h3>
						<p><span class="badge"><img src="<?=('assets/selfImages/insurance-icons.png');?>"/></span> Home Interiors Details</p>
					</div>
						<div class="insurance_forms">
							<div class="Insurance_fill_form">
							<?=form_open('customform/homeInteriors',['class'=>'form','autocomplete'=>'off']);?>
							<?=$this->session->flashdata('customFormMsg');?>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="" name="name" required>
								<label class="label_up">Name <span>*</span></label>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" pattern="[0-9]+{10,15}" minlength="10" maxlength="15" placeholder=""
									name="mobile" required>
								<label class="label_up">Phone Numer <span>*</span></label>
							</div>
							<div class="form-group">
								<input type="email" class="form-control" placeholder="" name="email" required>
								<label class="label_up">Email Id <span>*</span></label>
							</div>
							<div class="form-group">
								<input type="email" class="form-control" placeholder="" name="city" required>
								<label class="label_up">City</label>
							</div>
							
							 <div class="radio-row mt-4">
								<h6>Select Vendor</h6>
								<div class="radio-field radio-field3">
									<input type="radio" class="form-check" id="vendorLivspace" name="vendor[]" value="Livspace" checked>
									<label id="vendorLivspace" for="vendorLivspace"><img class="scopOW" src="<?=('assets/selfImages/planet.png');?>"/> Livspace</label>
								</div>
							</div>	
								
							<div class="form-group">
								<select class="form-control" name="budget" required>
									<option value="" selected>Budget</option>
									<option value="1-3 lacs">1-3 lacs</option>
									<option value="3-5 lacs">3-5 lacs</option>
									<option value="5-10 lacs">5-10 lacs</option>
									<option value="10 lacs above">10 lacs above</option>
								</select>
							</div>
							<div class="radio-row mt-4">
								<h6>Scope of work</h6>
								<div class="radio-field radio-field3">
									<input type="radio" id="Full-home-interiors" name="scopeOfWork" value="Full Home Interiors" checked="">
									<label for="Full-home-interiors" id="Full-home-interiors"><img class="scopOW" src="<?=('assets/selfImages/interior-design-i.png');?>"/> Full home <br/> interiors</label>
								</div>
								<div class="radio-field radio-field4">
									<input type="radio" id="Kitchen-Wardrobes" name="scopeOfWork" value="Kitchen & Wardrobes">
									<label for="Kitchen-Wardrobes" id="Kitchen-Wardrobes"><img class="scopOW" src="<?=('assets/selfImages/kitchen-i.png');?>"/> Kitchen & <br/>Wardrobes</label>
								</div>
								<div class="radio-field radio-field2">
									<input type="radio" id="Only-kitchen" name="scopeOfWork" value="Only Kitchen">
									<label for="Only-kitchen" id="Only-kitchen"><img class="scopOW" src="<?=('assets/selfImages/kitchen2-i.png');?>"/> Only kitchen</label>
								</div>
								<div class="radio-field radio-field5">
									<input type="radio" id="Other" name="scopeOfWork" value="Other">
									<label for="Other" id="Other"><img class="scopOW" src="<?=('assets/selfImages/other-i.png');?>"/> Other</label>
								</div>
							</div>
							
							<div class="form-group">
								<select class="form-control" name="typeOfApartment" required>
									<option value="TypeOfApartment " selected>Type of Apartment </option>
									<option value="1BHK" >1 BHK</option>
									<option value="2BHK">2 BHK</option>
									<option value="3BHK">3 BHK</option>
									<option value="4BHK">4 BHK</option>
									<option value="Villa">Villa</option>
									<option value="Other1">Other</option>
									<option value="Independent House">Independent House</option>
								</select>
							</div>
							
							<div class="form-group">
								<select class="form-control" name="possessionTimeline" required>
									<option value="PossessionTimeline " selected>Possession Timeline</option>
									<option value="0-3-months" id="0-3-months"> 0-3 months</option>
									<option value="3-6-months" id="3-6-months">3-6 months</option>
									<option value="More-than-6-months" id="More-than-6-months">More than 6 months</option>
									<option value="Already-moved-in" id="Already-moved-in">Already moved in</option>
								</select>
							</div>
								
								
							
							<div class="form-group mt-3">
								<input type="text" class="form-control" placeholder="" name="comment">
								<label class="label_up">Any other comments</label>
							</div>
							<div class="form-group mt-3">
								<div class="d-flex align-items-start">
									<input type="checkbox" class="form-check" id="acceptCheck" checked="">
									<label class="form-check position-relative m-0 pl-2 font-bold" for="acceptCheck">I hereby authorize
										TownManor and its partners to contact me via WhatsApp, sms, phone, email etc.</label>
								</div>
							</div>
							<div class="text-trm-condition">By submitting you agree to <a href="#">Terms of use </a> and<a href="#"> T&amp;C</a>
							</div>
							<button type="submit" class="btn btn-primary btn-submit">Submit</button>
							<?=form_close();?>
						</div>
							</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="inso_img pt-5 mt-5">
						<img src="<?=('assets/selfImages/home_right_img.png');?>" alt="">
					</div>
				</div>
			</div>
		</div>
	</section>