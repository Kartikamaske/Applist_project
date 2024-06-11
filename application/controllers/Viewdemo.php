<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Viewdemo extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
    
        
        $this->load->model('Viewdemo_model');
        
    }

    public function index()
	{

        $data['data']=$this->Viewdemo_model->getallviews();
        
        // echo "<pre>";
        // print_r($data);

		$this->load->view('Common_res/header');
		$this->load->view('Responsive/navdata_view',$data);
		$this->load->view('Common_res/footer');
	}


    function insertview(){
		$softwareid= $this->input->post('softwareid'); 
		$mobilenumber= $this->input->post('mobilenumber');
		
	
		  $fields=array(

			            'mobilenumber'=>$mobilenumber,
			            'softwareid'=>$softwareid,
						'created_date'=>date('Y-m-d H:i:s'),
						'created_by'=>1);
                        
			// echo json_encode($fields);

		$this->Commonmodel->insertRecord("viewdemo_master",$fields);
	  }



}