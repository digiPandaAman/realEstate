<?php

class Customform extends CI_Controller
{
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
}