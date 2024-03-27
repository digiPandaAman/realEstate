<section>
    <div class="container">
        <div class="DesignCategory_widgetHeading">
            <h2><?=ucwords(str_replace('-',' ',strtolower($this->uri->segment(4))));?></h2>
            <p>Modular kitchens bring style and innovation into the heart of your home. Explore our vast collection of
                kitchen design ideas, makeovers, and expert tips to choose the ideal cabinetry, countertop, and
                appliance combination that complements your space. Our bespoke modern kitchen design offers flexibility,
                convenience, and functionality adhering to any creative or design-led requirement. Whether you opt for
                an efficient L-shaped layout or smart open kitchen interior design, find the best on-trend looks to prep
                your cooking space that meets your desired needs.</p>
        </div>
        <div class="DesignCategory_WidgetGrid">
            <?php if(isset($homeInteriorData) && $homeInteriorData): ?>
                <?php foreach($homeInteriorData as $hidData): $images = json_decode($hidData->cdImages); $img = current($images); ?>
            <div class="ProductTile_Col">
                <div>
                    <figure>
                        <img src="<?=base_url($img);?>" />
                    </figure>
                    <div class="ProductTile_tileDesc">
                        <h3 class="ProductTile_tileTxt"><?=ucwords($hidData->cdTitle);?></h3>
                        <button class="BFC_bTN" data-toggle="modal" data-target="#exampleModal">Book Free
                            Consultation</button>
                    </div>
                </div>
            </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content p-0">
                <div class="modal-header border-0 p-0 m-0">
                    <button type="button" class="close RClose mr-4 mt-0" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0 pb-4">
                    <div id="Lead_Form" class="LeadPopup_popUpBox LeadPopup_active">
                        <?=form_open('customform/homeLoan',['class'=>'LeadPopup_popUpWindow pt-4 px-3','autocomplete'=>'off']);?>
                        <?=form_hidden('popupForm',1);?>
                        <div class="LeadPopup_headingBox pt-0">
                            <h2>Meet the Designer</h2><span onclick="closeDiv()" id="form_close"
                                class="LeadPopup_close"></span>
                        </div>
                        <div class="LeadPopup_contentBox">
                            <div class="LeadPopup_form">
                                <div class="form_item">
                                    <input type="text" name="name" class="formInput" autocomplete="off" required="">
                                    <label for="name" class="font12 fontMedium formLabel">Name</label>
                                </div>
                                <div class="form_item">
                                    <input type="text" name="email" class="formInput" autocomplete="off" required="">
                                    <label for="email" class="font12 fontMedium formLabel">Email</label>
                                </div>
                                <div class="form_item contBox">
                                    <span class="text303542 font12 contCode fontMedium">+91</span>
                                    <input type="text" name="mobile" class="formInput" autocomplete="off"
                                        pattern="[0-9]+{10,15}" minlength="10" maxlength="15" required="">
                                    <label for="mobile" class="font12 fontMedium formLabel">Mobile No.</label>
                                </div>
                                <div class="form_item">
                                    <div class="city-container">
                                        <select class="formInput undefined" name="city" required="">
                                            <option value="">Choose City</option>
                                            <option value="Mumbai">Mumbai</option>
                                            <option value="Bangalore">Bangalore</option>
                                            <option value="Gurgaon">Gurgaon</option>
                                            <option value="Noida">Noida</option>
                                            <option value="Hyderabad">Hyderabad</option>
                                            <option value="Pune">Pune</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form_item">
                                    <div class="SelectRange_Calc">
                                        <div class="selectBox">
                                            <select class="formInput undefined" name="occupationType" required="">
                                                <option value="" disabled="">I'm Interested in Interiors For</option>
                                                <option value="New Home For Self-Use">New Home For Self-Use</option>
                                                <option value="New Home For Renting Out">New Home For Renting Out
                                                </option>
                                                <option value="Home Renovation">Home Renovation</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="LeadPopup_rangecalc">
                                    <button type="submit" class="btn-calc">Submit </button>
                                </div>
                            </div>
                        </div>
                        <?=form_close();?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>