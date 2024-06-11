<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Responsive extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
    
        
        $this->load->model('Responsive_model');
        
    }


	public function index()
	{

        $data['front']=$this->Responsive_model->getalldata();
        $data['middle']=$this->Responsive_model->getallapp();
        $data['last']=$this->Responsive_model->getalllastapp();
        $data['data']=$this->Responsive_model->getallcontact();
        $data['subscribe']=$this->Responsive_model->getsubscribe();
        $data['softwaredata']=$this->Responsive_model->getsoftwaredatas();
        $data['blog']=$this->Responsive_model->getallblog();




        // $data['tab']=$this->Responsive_model->getallclickapp();

    //    echo "<pre>";
    //     print_r($data);

		$this->load->view('Common_res/header');
		$this->load->view('Responsive/home_view',$data);
		$this->load->view('Common_res/footer');
	}


	public function software(){
      
        // echo "<pre>";
        // print_r($data);

		$this->load->view('Common_res/header');
		// $this->load->view('Responsive/home_view',$data);
		$this->load->view('Responsive/navdata_view');
		$this->load->view('Common_res/footer');
	}


	public function andriod(){
      
		$this->load->view('Common_res/header');
		$this->load->view('Responsive/android_view');
		$this->load->view('Common_res/footer');
	}


	public function iosapp(){
      
		$this->load->view('Common_res/header');
		$this->load->view('Responsive/ios_view');
		$this->load->view('Common_res/footer');
	}


	public function ecommerce(){
      
		$this->load->view('Common_res/header');
		$this->load->view('Responsive/ecommerce_view');
		$this->load->view('Common_res/footer');
	}

	public function website(){
      
		$this->load->view('Common_res/header');
		$this->load->view('Responsive/website_view');
		$this->load->view('Common_res/footer');
	}


	public function graphicdesign(){
      
		$this->load->view('Common_res/header');
		$this->load->view('Responsive/Graphic_view');
		$this->load->view('Common_res/footer');
	}


	public function digitalmarkting(){
      
		$this->load->view('Common_res/header');
		$this->load->view('Responsive/digitalmark_view');
		$this->load->view('Common_res/footer');
	}

	public function datatoclicknav(){
		
		// $fkphotogallerytype = $this->input->post('photoTypeId');
		$photo_typeId = $this->input->post('photo_typeId');

		$byType = $this->Responsive_model->gettabtoclick1($photo_typeId);

		echo json_encode($byType);
		
	}



	


    public function datatoclick(){
		
		// $fkphotogallerytype = $this->input->post('photoTypeId');
		$photo_typeId = $this->input->post('photo_typeId');

		$byType = $this->Responsive_model->gettabtoclick($photo_typeId);

		echo json_encode($byType);
		
	}




	function insertcontact(){
		$fullname= $this->input->post('fullname'); 
		$email= $this->input->post('email'); 
		$mobile= $this->input->post('mobile'); 
		$companyname= $this->input->post('companyname'); 
		$requirement= $this->input->post('requirement'); 

	
		  $fields=array(
			            'fullname'=>$fullname,
			            'email'=>$email,
			            'mobile'=>$mobile,
			            'companyname'=>$companyname,
			            'requirement'=>$requirement,

						'created_date'=>date('Y-m-d H:i:s'),
						'created_by'=>1);
			// echo json_encode($fields);

		$this->Commonmodel->insertRecord("popup_master",$fields);
	  }



	  
	  function insertsubscribtion(){
		$subscribeemail= $this->input->post('subscribeemail'); 
		

		  $fields=array(
			            'subscribeemail'=>$subscribeemail,
			            

						'created_date'=>date('Y-m-d H:i:s'),
						'created_by'=>1);
			// echo json_encode($fields);

		$this->Commonmodel->insertRecord("subscribe_master",$fields);
	  }



	  public function blogdetails(){

        // $data['detailblog']=$this->Responsive_model->getdetailviewblog();
		$this->load->view('Common_res/header');
		$this->load->view('Responsive/detailview_blog');
		// $this->load->view('Responsive/dyanamicdatablog',$data);
		$this->load->view('Common_res/footer');

	  }


	  


	  


    
	
}
