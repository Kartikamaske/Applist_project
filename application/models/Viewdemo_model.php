<?php
  class Viewdemo_model extends CI_Model {
    
    public function __construct()
      {
          $this->load->database();
      }

      public function getallviews()
        {      
         
                $this->db->select('viewdemo_master.*');
                $this->db->from('viewdemo_master');
                $this->db->where('viewdemo_master.is_active','1');
                $query = $this->db->get();
                return $query->result();
                
        }


    }