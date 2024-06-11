<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Alldata extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
    
        
        $this->load->model('Alldata_model');
        
    }


	public function index()
	{

       

        // echo "<pre>";
        // print_r($data);

		// $this->load->view('Common_res/header');
		$this->load->view('Alldata/alldata_view');
		// $this->load->view('Common_res/footer');
	}


    public function datatoclick(){
		
		// $fkphotogallerytype = $this->input->post('photoTypeId');

		$photo_typeId = $this->input->post('photo_typeId');

		$byType = $this->Alldata_model->gettabtoclick($photo_typeId);

		echo json_encode($byType);
		
	}


    
	
}
