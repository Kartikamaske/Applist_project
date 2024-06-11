<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
    
        
        $this->load->model('software_model');
        
    }


	public function index()
	{

        $data['data']=$this->software_model->getalldata();
        // echo "<pre>";
        // print_r($data);
		// $this->load->view('common/header_view');
		$this->load->view('Home/home_view',$data);
		$this->load->view('common/footer_view');
	}
	
}
