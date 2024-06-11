<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Postcomment extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
    
        
        $this->load->model('Postcomment_model');
        
    }

    public function update()
	{

        
		$data['detailblog']=$this->Postcomment_model->getdetailviewblog($this->uri->segment(3));


		// $data['dataa']=$this->Search_model->getdataonsearch($this->uri->segment(3));
        
        // echo "<pre>";
        // print_r($data);

		$this->load->view('Common_res/header');
		// $this->load->view('Responsive/detailview_blog');
        $this->load->view('Blogdata/dyanamicdatablog',$data);
		$this->load->view('Common_res/footer');
	}


      function insertpostcomment(){

		$comment_name= $this->input->post('comment_name'); 
		$comment_email= $this->input->post('comment_email'); 
		$comment_sub= $this->input->post('comment_sub'); 
		$comment_message= $this->input->post('comment_message'); 
		$fkblog_id= $this->input->post('fkblog_id'); 


	
		  $fields=array(
			            'comment_name'=>$comment_name,
			            'comment_email'=>$comment_email,
			            'comment_sub'=>$comment_sub,
			            'comment_message'=>$comment_message,
			            'fkblog_id'=>$fkblog_id,


						'created_date'=>date('Y-m-d H:i:s'),
						'created_by'=>1);
			// echo json_encode($fields);

		$this->Commonmodel->insertRecord("postcomment_master",$fields);
	  }

      



}