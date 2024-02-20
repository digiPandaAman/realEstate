<div class="AppForm">
    <div class="header-title">
        <div class="header-icon">
            <i class="img-icon fa fa-file-text-o"></i>
        </div>
        <div class="header-lael"><label>Home Interiors Details</label></div>
    </div>
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
        <select class="form-control" name="city" required>
            <option value="" selected>City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Noida">Noida</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
        </select>
    </div>
    <div class="form-group">
        <h6>Select Vendor </h6>
        <div class="d-flex align-items-center">
            <input type="checkbox" class="form-check" id="vendorLivspace" name="vendor[]" value="Livspace" checked>
            <label class="form-check position-static m-0 pl-2" for="vendorLivspace">Livspace</label>
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
            <label for="Full-home-interiors" id="Full-home-interiors"> Full home interiors</label>
        </div>
        <div class="radio-field radio-field4">
            <input type="radio" id="Kitchen-Wardrobes" name="scopeOfWork" value="Kitchen & Wardrobes">
            <label for="Kitchen-Wardrobes" id="Kitchen-Wardrobes">Kitchen & Wardrobes</label>
        </div>
        <div class="radio-field radio-field2">
            <input type="radio" id="Only-kitchen" name="scopeOfWork" value="Only Kitchen">
            <label for="Only-kitchen" id="Only-kitchen">Only kitchen</label>
        </div>
        <div class="radio-field radio-field5">
            <input type="radio" id="Other" name="scopeOfWork" value="Other">
            <label for="Other" id="Other">Other</label>
        </div>
    </div>
    <div class="radio-row mt-3">
        <h6>Type of Apartment </h6>
        <div class="radio-field radio-field3">
            <input type="radio" id="1BHK" name="typeOfApartment" value="1 BHK" checked="">
            <label for="1BHK" id="1BHK">1 BHK</label>
        </div>
        <div class="radio-field radio-field4">
            <input type="radio" id="2BHK" name="typeOfApartment" value="2 BHK">
            <label for="2BHK" id="2BHK">2 BHK</label>
        </div>
        <div class="radio-field radio-field2">
            <input type="radio" id="3BHK" name="typeOfApartment" value="3 BHK">
            <label for="3BHK" id="3BHK">3 BHK</label>
        </div>
        <div class="radio-field radio-field5">
            <input type="radio" id="4BHK" name="typeOfApartment" value="4 BHK">
            <label for="4BHK" id="4BHK">4 BHK</label>
        </div>
        <div class="radio-field radio-field5">
            <input type="radio" id="Villa" name="typeOfApartment" value="Villa">
            <label for="Villa" id="Villa">Villa</label>
        </div>
        <div class="radio-field radio-field5">
            <input type="radio" id="Other1" name="typeOfApartment" value="Other">
            <label for="Other1" id="Other1">Other</label>
        </div>
        <div class="radio-field radio-field5">
            <input type="radio" id="Independent House" name="typeOfApartment" value="Independent House">
            <label for="Independent House" id="Independent House">Independent House</label>
        </div>
    </div>
    <div class="radio-row mt-4">
        <h6>Possession Timeline </h6>
        <div class="radio-field radio-field3">
            <input type="radio" id="0-3-months" name="possessionTimeline" value="0-3 months" checked="">
            <label for="0-3-months" id="0-3-months"> 0-3 months</label>
        </div>
        <div class="radio-field radio-field4">
            <input type="radio" id="3-6-months" name="possessionTimeline" value="3-6 months">
            <label for="3-6-months" id="3-6-months">3-6 months</label>
        </div>
        <div class="radio-field radio-field2">
            <input type="radio" id="More-than-6-months" name="possessionTimeline" value="More than 6 months">
            <label for="More-than-6-months" id="More-than-6-months">More than 6 months</label>
        </div>
        <div class="radio-field radio-field5">
            <input type="radio" id="Already-moved-in" name="possessionTimeline" value="Already moved in">
            <label for="Already-moved-in" id="Already-moved-in">Already moved in</label>
        </div>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" placeholder="" name="comment">
        <label class="label_up">Any other comments</label>
    </div>
    <div class="form-group">
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