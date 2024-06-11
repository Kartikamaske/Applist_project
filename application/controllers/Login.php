<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {


	public function index()
	{
		$this->load->view('common/header_view');
		$this->load->view('Login/login_view');
		$this->load->view('common/footer_view');
	}
	
}
