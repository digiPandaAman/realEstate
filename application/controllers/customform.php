<?php

class Customform extends CI_Controller
{
    public function index()
    {
        $post = $this->input->post();
        echo "<pre>";
        print_r($post);
        die('Aman');
    }
}