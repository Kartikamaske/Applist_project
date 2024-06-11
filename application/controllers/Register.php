<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Register extends CI_Controller {


	public function index()
	{
		$this->load->view('common/header_view');
		$this->load->view('Register/register_view');
		$this->load->view('common/footer_view');
	}

	public function insertUserRegister(){
		$username= $this->input->post('username'); 
        $phone= $this->input->post('phone');
        $useremail= $this->input->post('useremail'); 
        $organization= $this->input->post('organization'); 
        $org_url= $this->input->post('org_url');

      
     
       $fields=array( 'username'=>$username,
                      'phone'=>$phone,
                      'useremail'=>$useremail,
                      'organization'=>$organization,
                      'org_url'=>$org_url,
                    
                     
                      
             'created_date'=>date('Y-m-d H:i:s'),
             'created_by'=>1
            );
            echo "<pre>";
            print_r($fields);
        //  echo json_encode($fields);
     $this->Commonmodel->insertRecord("register_master",$fields);
   
	}

}
