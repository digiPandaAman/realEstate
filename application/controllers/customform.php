<?php

class Customform extends CI_Controller
{
    public function __construct()
    {
		parent::__construct();
        $this->load->model('commanmodel','comman');
	}

    public function index()
    {
        die('Aman');
    }

    public function homeInteriors()
    {
        $post = $this->input->post();
        if($post):
            foreach($post as $formKey=>$formData):
                if(is_array($formData)):
                    $formData = implode(',',$formData);
                endif;
                $printData .= '<b>'.ucwords($formKey).':</b> '.$formData.'<br>';
            endforeach;
            $mailSubject = 'Home Interior Form Query';
            $adminMail = $this->db->where(['field'=>'email'])->get('settings')->row();
            $fromMail = $this->db->where(['field'=>'noreply'])->get('settings')->row();
            $mailTitle = $this->db->where(['field'=>'websitetitle'])->get('settings')->row();
            if($adminMail->value && $fromMail->value):
                $this->load->library('email');
                $config['charset']    = 'utf-8';
                $config['newline']    = "\r\n";
                $config['mailtype'] = 'html'; // or html
                $config['validation'] = TRUE; // bool whether to validate email or not   
                $this->email->initialize($config);
                $this->email->from($fromMail->value,$mailTitle->value?$mailTitle->value.' Website Form Query':'Website Form Query');
                $this->email->to($adminMail->value);
                $this->email->subject($mailSubject);
                $this->email->message($printData);
                $this->email->send();
                // $mailSend = $this->email->print_debugger();
            endif;
            $this->load->library('session');
            $this->session->set_flashdata('customFormMsg', '<p class="alert alert-success">Message Sent Successfully</p>');
            return redirect('en/189/home_interior');
        endif;
    }

    public function homeLoan()
    {
        $post = $this->input->post();
        if($post):
            if(isset($post['popupForm']) && $post['popupForm']):
                $mailSubject = 'Home Loan Popup Form Query';
                unset($post['popupForm']);
            else:
                $mailSubject = 'Home Loan Form Query';
            endif;
            // echo "<pre>";print_r($post);die();
            foreach($post as $formKey=>$formData):
                if(is_array($formData)):
                    $formData = implode(',',$formData);
                endif;
                $printData .= '<b>'.ucwords($formKey).':</b> '.$formData.'<br>';
            endforeach;
            $adminMail = $this->db->where(['field'=>'email'])->get('settings')->row();
            $fromMail = $this->db->where(['field'=>'noreply'])->get('settings')->row();
            $mailTitle = $this->db->where(['field'=>'websitetitle'])->get('settings')->row();
            if($adminMail->value && $fromMail->value):
                $this->load->library('email');
                $config['charset']    = 'utf-8';
                $config['newline']    = "\r\n";
                $config['mailtype'] = 'html'; // or html
                $config['validation'] = TRUE; // bool whether to validate email or not   
                $this->email->initialize($config);
                $this->email->from($fromMail->value,$mailTitle->value?$mailTitle->value.' Website Form Query':'Website Form Query');
                $this->email->to($adminMail->value);
                $this->email->subject($mailSubject);
                $this->email->message($printData);
                $this->email->send();
                // $mailSend = $this->email->print_debugger();
            endif;
            $this->load->library('session');
            $this->session->set_flashdata('customFormMsg', '<p class="alert alert-success">Message Sent Successfully</p>');
            return redirect('en/190/home_loan');
        endif;
    }

    public function insurance()
    {
        $post = $this->input->post();
        if($post):
            foreach($post as $formKey=>$formData):
                if(is_array($formData)):
                    $formData = implode(',',$formData);
                endif;
                $printData .= '<b>'.ucwords($formKey).':</b> '.$formData.'<br>';
            endforeach;
            $mailSubject = 'Home Insurance Form Query';
            $adminMail = $this->db->where(['field'=>'email'])->get('settings')->row();
            $fromMail = $this->db->where(['field'=>'noreply'])->get('settings')->row();
            $mailTitle = $this->db->where(['field'=>'websitetitle'])->get('settings')->row();
            if($adminMail->value && $fromMail->value):
                $this->load->library('email');
                $config['charset']    = 'utf-8';
                $config['newline']    = "\r\n";
                $config['mailtype'] = 'html'; // or html
                $config['validation'] = TRUE; // bool whether to validate email or not   
                $this->email->initialize($config);
                $this->email->from($fromMail->value,$mailTitle->value?$mailTitle->value.' Website Form Query':'Website Form Query');
                $this->email->to($adminMail->value);
                $this->email->subject($mailSubject);
                $this->email->message($printData);
                $this->email->send();
                // $mailSend = $this->email->print_debugger();
            endif;
            $this->load->library('session');
            $this->session->set_flashdata('customFormMsg', '<p class="alert alert-success">Message Sent Successfully</p>');
            return redirect('en/191/insurance');
        endif;
    }

    public function checkScore()
    {
        $this->load->library('session');
        $this->load->library('encrypt');
        $todayDate = date('Y-m-d');
        $post = $this->input->post();
        if($post):
            if($post['formType'] == 'sendOTP'):
                $userPan = isset($post['PANCard'])?trim(strtoupper($post['PANCard'])):'';
                $otp = rand(1000,9999);
                $templateId = '65fd1d93d6fc0563c629b742';
                $sendParameterEng = ['mobiles'=>'+91'.trim($post['mobile']),'otp' => $otp];
                $sms = json_decode($this->sendSMSMSG91($templateId,$sendParameterEng));
                if($sms->type == 'success'):
                    $dataEncode = [
                                'otp' => $otp,
                                'name' => ucwords($post['name']),
                                'mobile' => $post['mobile'],
                                'pan' => strtoupper($userPan),
                    ];
                    $genrateToken = $this->encrypt->encode(json_encode($dataEncode));
                    $this->session->set_flashdata('customFormMsg', '<p class="alert alert-success">Enter your otp.</p>');
                    return redirect('en/192/cibil_score?otpToken='.$genrateToken);
                else:
                    $this->session->set_flashdata('customFormMsg', '<p class="alert alert-danger">Something went wrong. please try again!</p>');
                    return redirect('en/192/cibil_score');
                endif;
            elseif($post['formType'] == 'verifyOTP'):
                $decode = $this->encrypt->decode($post['otpToken']);
                $decodeFinal = json_decode($decode);
                if($post['userOTP'] == $decodeFinal->otp):
                    $userPan = isset($post['PANCard'])?trim(strtoupper($post['PANCard'])):'';
                    $checkPan = $this->comman->get1Data('credit_report',['crPan'=>$userPan]);
                    if($checkPan):
                        if(strtotime($checkPan->crDate) < strtotime('-30 days')):
                            $workingType = 'updateData';
                            $apiResponse = $this->getCreditScore($post);
                        else:
                            $workingType = '';
                            $apiResponse = json_decode($checkPan->crResponse);
                        endif;
                    else:
                        $workingType = 'addData';
                        $apiResponse = $this->getCreditScore($post);
                    endif;
                    if($apiResponse->status_code == 200 && $apiResponse->success):
                        $scoreAdded = [
                            'crName' => $apiResponse->data->name?ucwords($apiResponse->data->name):ucwords($post['name']),
                            'crMobile' => $post['mobile'],
                            'crPan' => $apiResponse->data->pan?$apiResponse->data->pan:strtoupper($userPan),
                            'crDate' => $todayDate,
                            'crScore' => $apiResponse->data->credit_score,
                            'crPdfLink' => $apiResponse->data->credit_report_link,
                            'crResponse' => json_encode($apiResponse),
                        ];
                        if($workingType == 'addData'):
                            $checkQuery = $this->comman->addData('credit_report',$scoreAdded);
                        elseif($workingType == 'updateData'):
                            $checkQuery = $this->comman->updateData('credit_report',['crId'=>$checkPan->crId,'crPan'=>$userPan],$scoreAdded);
                        else:
                            $checkQuery = true;
                        endif;
                        if($checkQuery):
                            $genrateToken = md5($userPan.'townCreditManorScore');
                            $this->session->set_flashdata('customFormMsg', '<p class="alert alert-success">Your Credit Score</p>');
                            return redirect('en/192/cibil_score?panNo='.$userPan.'&token='.$genrateToken);
                        else:
                            $this->session->set_flashdata('customFormMsg', '<p class="alert alert-danger">Something went wrong. please try again!</p>');
                            return redirect('en/192/cibil_score');
                        endif;
                    else:
                        $this->session->set_flashdata('customFormMsg', '<p class="alert alert-danger">Something went wrong. please try again!</p>');
                        return redirect('en/192/cibil_score');
                    endif;
                else:
                    $this->session->set_flashdata('customFormMsg', '<p class="alert alert-danger">Please enter a valid OTP !!!</p>');
                    return redirect('en/192/cibil_score?otpToken='.$post['otpToken']);
                endif;
            endif;
        endif;
    }

    public function getCreditScore($payload)
    {
        $userName = isset($payload['name'])?$payload['name']:'';
        $userMobile = isset($payload['mobile'])?$payload['mobile']:'';
        $userPan = isset($payload['PANCard'])?$payload['PANCard']:'';
        if($userName && $userMobile && $userPan):

            $url = "https://kyc-api.surepass.io/api/v1/credit-report-v2/fetch-pdf-report";
            $serverKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMDE0NjA5NiwianRpIjoiODUxOWRiN2QtODVkMC00MTJlLThkMTktMmE5Nzk2ODI3YjViIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LnVzZXJuYW1lXzJ5MTV1OWk0MW10bjR3eWpsaTh6b2p6eXZiZEBzdXJlcGFzcy5pbyIsIm5iZiI6MTcxMDE0NjA5NiwiZXhwIjoyMDI1NTA2MDk2LCJ1c2VyX2NsYWltcyI6eyJzY29wZXMiOlsidXNlciJdfX0.yl8oGagzT8FRXUBh8sL2JKO0ISqgHh65dwQAd0NTRrE';
            $arrayToSend = ['name' =>$userName,'pan' =>$userPan,'mobile'=>$userMobile,'consent'=>'Y'];
            $json = json_encode($arrayToSend);
            $headers = ['Content-Type: application/json','Authorization: Bearer '.$serverKey];
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            //Send the request
            $response = curl_exec($ch);
            //Close request
            if ($response === FALSE) {
                die('Send Error: ' . curl_error($ch));
            }else {
                return json_decode($response);
            }
            curl_close($ch);
        endif;
    }

    public function sendSMSMSG91($templateId,$parameterArray) // Send SMS & WhatsApp $this->sendSMSCuckooB('+919810673528','Massage',$templateId);
	{
		$apiKey = '409082AZKZFbJeS6541007fP1';
		$data = [
			'template_id' => $templateId,
			'short_url' => '0',
			'recipients' => [$parameterArray]
		];
		// Send the POST request with cURL
		$ch = curl_init('https://control.msg91.com/api/v5/flow/');
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, [
			'accept: application/json',
			'authkey: '.$apiKey,
			'Content-Type: application/json', // Specify content type as JSON
			
		]);
		$response = curl_exec($ch);
		curl_close($ch);
		// Process your response here
		return $response;
	}
}