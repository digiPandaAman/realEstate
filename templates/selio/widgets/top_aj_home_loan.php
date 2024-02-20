<section class="HomeLoan_area">
    <div id="Product_Section">
        <div class="container">
            <div class="ProductBanner_bannerFlex">
                <div class="ProductBanner_Text">
                    <p class="ProductBanner_Heading">Realize your <br> Home Dream with our <span class="bold-loan">Home
                            Loans!</span></p>
                    <ul class="ProductBanner_features">
                        <li><img src="<?=('assets/selfImages/bluecirclecheck.svg');?>" width="15" />
                            <p class="features_list_item">Customized Repayment Plans</p>
                        </li>
                        <li>
                            <img src="<?=('assets/selfImages/bluecirclecheck.svg');?>" width="15" />
                            <p class="features_list_item">Low-Interest Rates</p>
                        </li>
                        <li><img src="<?=('assets/selfImages/bluecirclecheck.svg');?>" width="15" />
                            <p class="features_list_item">Expert Guidance</p>
                        </li>
                    </ul>
                    <div class="ProductBanner_BanksList">
                        <img width="100" src="<?=('assets/selfImages/sbi.webp');?>" />
                        <img width="100" src="<?=('assets/selfImages/idfc.webp');?>" />
                        <img width="100" src="<?=('assets/selfImages/hdfc-bank.webp');?>" />
                        <img width="100" src="<?=('assets/selfImages/axis-bank.webp');?>" />
                    </div>
                </div>
                <div class="ProductBanner_Img">
                    <img width="400" src="<?=('assets/selfImages/home-loan.jpg');?>" />
                </div>
            </div>

        </div>
    </div>
    <div id="Description_loandetails">
        <div class="container">
            <h1 class="InnerLoanheading">Home Loan</h1>
            <p class="short_description">Make your dream home a reality with our leading home loan services. TownManor
                Money
                has tied knots with an array of banks providing nimble and hassle-free mortgage loans. Unlock home
                credit loans with a host of benefits, like low housing loan interest rates and smaller EMIs to space out
                your payments over a longer tenure.</p>
        </div>
        <div class="homeLoanForm">
            <div class="container">
                <p class="home-loan-heading text-left">Unlock Best Home Offers From 10+ Lenders</p>
                <?=form_open('customform/homeLoan',['class'=>'null','autocomplete'=>'off']);?>
                <?=$this->session->flashdata('customFormMsg');?>
                <div class="LeadForm_Calculate">
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
                    <div class="form_item calculator_order3">
                        <div class="SelectRange_Calc">
                            <div class="selectBox">
                                <select class="formInput undefined" name="occupationType" required="">
                                    <option value="">Occupation Type</option>
                                    <option value="Salaried">Salaried</option>
                                    <option value="Self Employed Professional">Self Employed Professional</option>
                                    <option value="Partner">Partner</option>
                                    <option value="Proprietorship">Proprietorship</option>
                                    <option value="Partnership/LLP">Partnership/LLP</option>
                                    <option value="Private Limited">Private Limited</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form_item rupeeBox">
                        <span class="contCode">₹</span>
                        <input type="number" name="loanAmount" class="formInput numb" autocomplete="off" maxlength="12"
                            required="">
                        <label for="loanAmount" class="formLabel"> Required Loan Amount </label>
                    </div>
                    <div class="form_item rupeeBox calculator_order2">
                        <span class="contCode">₹</span>
                        <input type="number" name="netSalary" class="formInput numb" autocomplete="off" maxlength="9"
                            required="">
                        <label for="monthlySalary" class="formLabel">Monthly Net Salary</label>
                    </div>
                </div>
                <div class="form-item grid4Span calculator_order4">
                    <p>Just Fill A Few More Details To Get Quote...</p>
                </div>
                <div class="LeadForm_Calculate">
                    <div class="form_item rupeeBox calculator_order5">
                        <input type="text" name="name" class="formInput" autocomplete="off" required="">
                        <label for="name" class="formLabel">Full Name</label>
                    </div>
                    <div class="form_item contBox rupeeBox calculator_order6">
                        <span class="contCode">+91</span>
                        <input type="text" name="mobile" class="formInput" autocomplete="off" pattern="[0-9]+{10,15}"
                            minlength="10" maxlength="15" required="">
                        <label for="mobileNo" class=" formLabel">Mobile No.</label>
                    </div>
                    <div class="form_item rupeeBox calculator_order6">
                        <span class="contCode">₹</span>
                        <input type="text" name="monthlyEmi" class="formInput" autocomplete="off" required="">
                        <label for="monthlyEmi" class="font12 fontMedium formLabel">Current Monthly
                            EMIs</label>
                    </div>
                    <div class="form_item rupeeBox calculator_order7">
                        <input type="text" name="tenure" class="formInput" autocomplete="off" required="">
                        <label for="tenure" class="font12 fontMedium formLabel">Tenure(Years)</label>
                    </div>
                </div>
                <div class="LeadForm_Calculate calc-section">
                    <div class="formGroup form_item rupeeBox calculator_order8">
                        <div class="inputIcon">
                            <div class="react-datepicker-wrapper">
                                <div class="react-datepicker__input-container">
                                    <input type="date" name="dob" placeholder="DOB (DD/MM/YYYY)" autocomplete="off"
                                        class="formInput" required="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-check pl-0">
                    <div class="form-group m-0">
                        <input type="checkbox" class="form-check-input termService m-0 mt-1" id="termService" checked=""
                            required="">
                        <label class="form-check-label ajChnageD" for="termService">
                            I hereby appoint TownManor as my authorised representative to receive my credit
                            information from Experian(bureau). I hereby accept terms & conditions.
                            <a href="#" target="_blank">Read More.
                            </a>
                        </label>
                    </div>
                </div>
                <div class="calculator_button">
                    <button id="autoclick" type="submit" class=" btn-calc textCenterSm">Get Quotes &#x2192;</button>
                </div>
                <?=form_close();?>
            </div>
        </div>

        <div class="container">
            <div class="DescriptionBank_FirstTable position-relative">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="IDFC FIRST Bank" loading="lazy" width="150" height="35" decoding="async"
                                        data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent" src="<?=('assets/selfImages/idfc.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">IDFC FIRST Bank Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.75% - 10.5%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹1L - ₹10Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,064
                                    -₹2,149</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    Up to
                                    3.5% of the loan amount</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    Foreclosure charges 5% of the loan amount</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="HDFC Bank Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent" src="<?=('assets/selfImages/hdfc-bank.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">HDFC Bank Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.35% - 9.4%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹1L - ₹10Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,044 - ₹2,095</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    ₹4,999 One time fee</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    4% of the outstanding principal (loan tenure between 13 - 24 months)</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="Axis Bank Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent" src="<?=('assets/selfImages/axis-bank.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">Axis Bank Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.7% - 13.3%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹1L - ₹5Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,061 - ₹2,291</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    0.50%(Min ₹10,000)one time fee</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    0 - 2%</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="Kotak Bank Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent"
                                        src="<?=('assets/selfImages/kotak-mahindra.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">Kotak Bank Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.7% - 9.6%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹10L - ₹10Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,061 - ₹2,105</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    Up to 3% of loan amount</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    0-12 months: Lock-in period 1- 3 years: 4% + GST 3 years onwards: 2% + GST</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="ICICI Bank Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent" src="<?=('assets/selfImages/icici-bank.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">ICICI Bank Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.85% - 9.1%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹3L - ₹75L</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,069 - ₹2,081</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    The processing fee is 0.50% of the loan amount, plus applicable taxes</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    <ul>
                                        <li>NIL for ICICI Home Loans and ICICI Home Improvement Loans with a floating
                                            rate of interest.</li>
                                        <li>2% on the outstanding principal on full repayment for ICICI Bank Home Loan
                                            with a fixed rate of interest.</li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="YES Bank Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent" src="<?=('assets/selfImages/yes.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">YES Bank Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">9.4% - 10.25%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹10L - ₹10Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,095 - ₹2,137</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    Up to 2%</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    Allowed if borrower has paid at least 12 EMIs.20% of principal outstanding (13-24
                                    months of EMI repayment)</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="IndiaBulls Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent" src="<?=('assets/selfImages/indiabulls.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">IndiaBulls Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.99% - 9.75%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹10L - ₹5Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,075 - ₹2,112</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    3% onwards</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    >6 months: 5%</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="Deutsche Bank Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent"
                                        src="<?=('assets/selfImages/deutsche-bank.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">Deutsche Bank Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.75% - 9.15%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹5L - ₹25Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,064 - ₹2,083</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    --</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    --</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="L&T Finance Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent"
                                        src="<?=('assets/selfImages/larsen-toubro.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">L&T Finance Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.6%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹2L - ₹20Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,056</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    --</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    --</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="Tata Capital Housing Finance Limited Home Loan" loading="lazy" width="150"
                                        height="35" decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent"
                                        src="<?=('assets/selfImages/tata-capital-housing-finance-limited.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">Tata Capital Housing Finance Limited Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.7% - 12%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹5L - ₹5Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,061 - ₹2,224</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    Up to 2.75%of the loan amount</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    2% for payment of more than 25% of the outstanding principal balance.</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="Bajaj Finserv Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent" src="<?=('assets/selfImages/bajaj.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">Bajaj Finserv Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">8.45% - 15%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹1L - ₹15Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,049 - ₹2,379</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    Up to 0.50 % of the loan amount + GST and other applicable statutory levies</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    NIL</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="Reliance Capital Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent" src="<?=('assets/selfImages/reliance.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">Reliance Capital Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">9.75% - 13%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹7.5L</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,112 - ₹2,275</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    --</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    --</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="DescriptionBank_FirstTable position-relative mt-4">
                <div class="DescriptionBank_Details">
                    <div class="InterestRateNew_indTiles">
                        <div class="InterestRateNew_tileHeading InterestRateNew_borderleft">
                            <div class="InterestRateNew_bankName">
                                <figure>
                                    <img alt="Hero FinCorp Home Loan" loading="lazy" width="150" height="35"
                                        decoding="async" data-nimg="1"
                                        class="imgResponsive cursorPointer InterestRateNew_banklogo__abhL2"
                                        style="color:transparent" src="<?=('assets/selfImages/hero-fincorp.webp');?>" />
                                </figure>
                                <a href="">
                                    <h3 class="BankName">Hero FinCorp Home Loan</h3>
                                </a>
                            </div><button data-toggle="modal" data-target="#exampleModal"
                                class="btn-calc InterestRateNew_instantApply">Apply
                                Now</button>
                        </div>
                        <ul class="InterestRateNew_bankDetails__Pcbs_">
                            <li>
                                <p class="opt60 ">Interest Rate</p>
                                <p class="fontsemiBold">13.22%</p>
                            </li>
                            <li>
                                <p class="opt60 ">Loan Amount</p>
                                <p class="fontsemiBold">₹10L - ₹3Cr</p>
                            </li>
                            <li>
                                <p class="opt60 ">EMI Per Lakh</p>
                                <p class="fontsemiBold">₹2,287</p>
                            </li>
                            <li>
                                <p class="opt60 ">Processing Fees</p>
                                <div class="fontsemiBold ">
                                    --</div>
                            </li>
                            <div class="InterestRateNew_lastLi__DoD8Q">
                                <p class=" opt60">Pre-Payment Charges</p>
                                <div class="fontsemiBold ">
                                    --</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header border-0 p-0 m-0">
                <button type="button" class="close mr-4 mt-0" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pt-0 pb-5">
                <div id="Lead_Form" class="LeadPopup_popUpBox LeadPopup_active">
                    <?=form_open('customform/homeLoan',['class'=>'LeadPopup_popUpWindow pt-0','autocomplete'=>'off']);?>
                    <?=form_hidden('popupForm',1);?>
                    <div class="LeadPopup_headingBox pt-0">
                        <h2>Get Best Offers</h2><span onclick="closeDiv()" id="form_close"
                            class="LeadPopup_close"></span>
                    </div>
                    <div class="LeadPopup_contentBox">
                        <div class="LeadPopup_form">
                            <div class="form_item">
                                <input type="text" name="name" class="formInput" autocomplete="off" required="">
                                <label for="name" class="font12 fontMedium formLabel">Full Name</label>
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
                                            <option value="">Occupation Type</option>
                                            <option value="Salaried">Salaried</option>
                                            <option value="Self Employed Professional">Self Employed Professional
                                            </option>
                                            <option value="Partner">Partner</option>
                                            <option value="Proprietorship">Proprietorship</option>
                                            <option value="Partnership/LLP">Partnership/LLP</option>
                                            <option value="Private Limited">Private Limited</option>
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