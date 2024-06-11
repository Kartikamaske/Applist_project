<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Search extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
    
        
        $this->load->model('Search_model');
        
    }

    public function index()
	{

        $data['searchdata']=$this->Search_model->getalldata();
        
        echo "<pre>";
        print_r($data);

		
	}


    public function dataonsearchinput(){

		$searchtext = $this->input->post('searchtext');

		$byType = $this->Search_model->getdataonsearch($searchtext);

		echo json_encode($byType);
		
        
	}


    public function update()
        {
            $data['dataa']=$this->Search_model->getdataonsearch($this->uri->segment(3));
            $data['datatoclick']=$this->Search_model->gettabtoclick($this->uri->segment(3));


                //  echo "<pre>";
                // print_r($data);

            $this->load->view('Common_res/header');
            $this->load->view('Responsive/searchdata_view',$data);
            $this->load->view('Common_res/footer');

        }

       
}