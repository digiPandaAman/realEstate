<section class="insurance_bg">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-6">
				<div class="forms-_row_area">
					<div class="form-title_top">
						<h3>The Futuristic Way <span>To Buy Insurance</span></h3>
						<p><span class="badge"><img src="<?=('assets/selfImages/insurance-icons.png');?>" /></span>
							Select type of insurance</p>
					</div>
					<div class="insurance_forms">
						<?=form_open('customform/insurance',['class'=>'form mt-3','autocomplete'=>'off']);?>
						<?=$this->session->flashdata('customFormMsg');?>
						<div class="nav_nav_tabs">
							<a class="nav-link">
								<img class="Insurance_img_icon" src="<?=('assets/selfImages/insurance1.png');?>" alt="">
								<label for="General-Life-Insurance"> General & <br /> Life Insurance</label>
								<input class="Insurance_radio" type="radio" id="General-Life-Insurance"
									name="lifeInsurance" value="General Life Insurance" checked="">
							</a>
							<a class="nav-link">
								<img class="Insurance_img_icon" src="<?=('assets/selfImages/life-protection.png');?>"
									alt="">
								<label for="Health-Insurance"> Health <br /> Insurance</label>
								<input class="Insurance_radio" type="radio" id="Health-Insurance" name="lifeInsurance"
									value="Health Insurance">
							</a>
							<a class="nav-link">
								<img class="Insurance_img_icon" src="<?=('assets/selfImages/motorcycle_i.png');?>"
									alt="">
								<label for="Motor-Life-Insurance"> Motor <br />Life Insurance</label>
								<input class="Insurance_radio" type="radio" id="Motor-Life-Insurance"
									name="lifeInsurance" value="Motor Life Insurance">
							</a>
						</div>
						<div class="Insurance_fill_form">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="" name="name" required>
								<label class="label_up">Name</label>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" pattern="[0-9]+{10,15}" minlength="10" maxlength="15" placeholder="" required>
								<label class="label_up">Phone Number</label>
							</div>
							<div class="form-group">
								<input type="email" class="form-control" placeholder="" name="email" required>
								<label class="label_up">Email ID</label>
							</div>
							<div class="form-group">
								<input type="number" class="form-control" placeholder="" name="pinCode" required>
								<label class="label_up">Pin Code</label>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="" name="city" required>
								<label class="label_up">City</label>
							</div>
							<div class="form-group">
								<select class="form-control" name="tenure" required>
									<option value="" selected>Tenure</option>
									<option value="5 Years">5 Years</option>
									<option value="10 Years">10 Years</option>
									<option value="15 Years">15 Years</option>
									<option value="20 Years">20 Years</option>
								</select>
							</div>
							<div class="form-group mb-0">
								<div class="d-flex align-items-start custom_radio">
									<input type="checkbox" class="form-check" id="exampleCheck1" checked="">
									<label class="form-check position-relative m-0 pl-2 font-bold"
										for="exampleCheck1">Hereby authorize TownManor and its partners to contact
										me via WhatsApp, sms, phone, email etc.</label>
								</div>
							</div>
							<div class="text-trm-condition">By submitting you agree to <a href="#">Terms
									of use </a> and<a href="#"> T&amp;C</a></div>
							<button type="submit" class="btn btn-primary btn-submit">Submit</button>
						</div>
						<?=form_close();?>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="inso_img">
					<img src="<?=('assets/selfImages/insurance_right_img.png');?>" alt="">
				</div>
			</div>
		</div>
	</div>
</section>