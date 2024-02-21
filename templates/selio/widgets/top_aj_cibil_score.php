<section class="HomeLoan_area">
    <div id="Product_Section">
        <div class="container">
            <div class="ProductBanner_bannerFlex align-items-center">
                <div class="ProductBanner_Text">
                    <p class="ProductBanner_Heading">Check Your <span class="bold-loan">CIBIL Score</span></p>
					<h4 class="mt-3 font_size_32">Credit Score Report Absolutely<b> FREE</b></h4>
                    <ul class="ProductBanner_features d-block mt-3">
                        <li><img src="<?=('assets/selfImages/bluecirclecheck.svg');?>" width="15" />
                            <p class="features_list_item">Reduce rates on your existing Loans.</p>
                        </li>
                        <li>
                            <img src="<?=('assets/selfImages/bluecirclecheck.svg');?>" width="15" />
                            <p class="features_list_item">Suggest Better Rewards Credit Cards.</p>
                        </li>
                        <li><img src="<?=('assets/selfImages/bluecirclecheck.svg');?>" width="15" />
                            <p class="features_list_item">Tips on Improving Credit Score.</p>
                        </li>
                        <li><img src="<?=('assets/selfImages/bluecirclecheck.svg');?>" width="15" />
                            <p class="features_list_item">CIBIL requires accurate details to ensure accuracy & security.</p>
                        </li>
                        <li><img src="<?=('assets/selfImages/bluecirclecheck.svg');?>" width="15" />
                            <p class="features_list_item">Make sure they match your banking records.</p>
                        </li>
                    </ul>
                </div>
                <div class="ProductBanner_Img text-center">
                    <img width="400" src="<?=('assets/selfImages/2895505.jpg');?>" />
                </div>
            </div>

        </div>
    </div>
    <div id="Description_loandetails">
        <div class="homeLoanForm">
            <div class="container">
                <p class="home-loan-heading text-left">Get Instant Detailed <b>CIBIL Score</b> Report for <b>Free</b></p>
                <?=form_open('customform/homeLoan',['class'=>'null','autocomplete'=>'off']);?>
                <?=$this->session->flashdata('customFormMsg');?>
                <div class="LeadForm_Calculate">
                    <div class="form_item rupeeBox">
                        <input type="text" name="name" class="formInput" autocomplete="off" required="">
                        <label for="name" class="formLabel">Full Name</label>
                    </div>
                    <div class="form_item contBox rupeeBox">
                        <span class="contCode">+91</span>
                        <input type="text" name="mobile" class="formInput" autocomplete="off" pattern="[0-9]+{10,15}"
                            minlength="10" maxlength="15" required="">
                        <label for="mobileNo" class=" formLabel">Mobile No.</label>
                    </div>
                    <div class="form_item rupeeBox">
                        <input type="text" name="PANCard" class="formInput" autocomplete="off" required="">
                        <label for="PANCard" class="formLabel">PAN Card</label>
                    </div>
                    <div class="form_item rupeeBox">
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
                    <button id="autoclick" type="submit" class="btn-calc textCenterSm pdTB">Submit &#x2192;</button>
                </div>
                <?=form_close();?>
            </div>
        </div>

    </div>
</section>

<section class="faq-section paddinngTB" id="faqs1">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="faq-title text-center pb-3">
<h3>Frequently Asked Questions</h3>
</div>
</div>

<div class="col-md-10 offset-md-1">
<div class="faq" id="accordion">
<div class="card">
<div class="card-header" id="faqHeading-1">
<div class="mb-0">
<h5 class="faq-title" data-aria-controls="faqCollapse-1" data-aria-expanded="true" data-target="#faqCollapse-1" data-toggle="collapse"><span class="badge">1</span>What is a Credit Score?</h5>
</div>
</div>

<div aria-labelledby="faqHeading-1" class="collapse" data-parent="#accordion" id="faqCollapse-1">
<div class="card-body">
<p>Credit score is a 3-digit number that shows how likely you are to get credit. When you need a loan, a bank or any lender looks at this score to understand how likely you are to pay the money back. Credit scores range from 300 to 900.</p>
</div>
</div>
</div>

<div class="card">
<div class="card-header" id="faqHeading-2">
<div class="mb-0">
<h5 class="faq-title" data-aria-controls="faqCollapse-2" data-aria-expanded="false" data-target="#faqCollapse-2" data-toggle="collapse"><span class="badge">2</span> How can a Credit Score help me?</h5>
</div>
</div>

<div aria-labelledby="faqHeading-2" class="collapse" data-parent="#accordion" id="faqCollapse-2">
<div class="card-body">
<p>When you apply for a credit card or a loan, lenders like banks and non-banking finance companies check your credit score to see whether you have the ability to repay the loan. If you have a higher credit score, you are likely to receive a lower rate of interest.</p>
</div>
</div>
</div>

<div class="card">
<div class="card-header" id="faqHeading-3">
<div class="mb-0">
<h5 class="faq-title" data-aria-controls="faqCollapse-3" data-aria-expanded="false" data-target="#faqCollapse-3" data-toggle="collapse"><span class="badge">3</span>Will my Credit Score drop if I check my credit score?</h5>
</div>
</div>

<div aria-labelledby="faqHeading-3" class="collapse" data-parent="#accordion" id="faqCollapse-3">
<div class="card-body">
<p>Checking your credit score will not reduce it because you are not officially applying for credit. In fact, it is good to check your credit score at least once in 3 months.</p>
</div>
</div>
</div>

<div class="card">
<div class="card-header" id="faqHeading-4">
<div class="mb-0">
<h5 class="faq-title" data-aria-controls="faqCollapse-4" data-aria-expanded="false" data-target="#faqCollapse-4" data-toggle="collapse"><span class="badge">4</span> Why don’t I have a Credit Score?</h5>
</div>
</div>

<div aria-labelledby="faqHeading-4" class="collapse" data-parent="#accordion" id="faqCollapse-4">
<div class="card-body">
<p>Scoring models cannot generate a score without enough credit information. If you have little or no credit history available, you probably will not have a credit score.</p>
</div>
</div>
</div>

<div class="card">
<div class="card-header" id="faqHeading-5">
<div class="mb-0">
<h5 class="faq-title" data-aria-controls="faqCollapse-5" data-aria-expanded="false" data-target="#faqCollapse-5" data-toggle="collapse"><span class="badge">5</span> I have a CIBIL Score. Why can I not see it here?</h5>
</div>
</div>

<div aria-labelledby="faqHeading-5" class="collapse" data-parent="#accordion" id="faqCollapse-5">
<div class="card-body">
<p>This could be due to a technical issue or data inconsistency. Kindly retry with the correct details.</p>
</div>
</div>
</div>

<div class="card">
<div class="card-header" id="faqHeading-6">
<div class="mb-0">
<h5 class="faq-title" data-aria-controls="faqCollapse-6" data-aria-expanded="false" data-target="#faqCollapse-6" data-toggle="collapse"><span class="badge">6</span> Will my Credit Score drop if I apply for new credit?</h5>
</div>
</div>

<div aria-labelledby="faqHeading-6" class="collapse" data-parent="#accordion" id="faqCollapse-6">
<div class="card-body">
<p>The first step a bank takes when you apply for new credit or a loan is to check your credit score from the bureau, this is also called as making a hard credit enquiry. A hard enquiry might temporarily lower your credit score.

</p>
</div>
</div>
</div>

<div class="card">
<div class="card-header" id="faqHeading-7">
<div class="mb-0">
<h5 class="faq-title" data-aria-controls="faqCollapse-7" data-aria-expanded="false" data-target="#faqCollapse-7" data-toggle="collapse"><span class="badge">7</span> How is my Credit Score calculated?</h5>
</div>
</div>

<div aria-labelledby="faqHeading-7" class="collapse" data-parent="#accordion" id="faqCollapse-7">
<div class="card-body">
<p>Your credit score is calculated after considering multiple factors, such as payment history, age of all credit lines, number of recent credit enquiries, and total active credit accounts among others. It’s important that you check your credit score on your own before applying for a loan.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>