<?php
  class Search_model extends CI_Model {
    
    public function __construct()
      {
          $this->load->database();
      }



// //         public function getalldata()
// // {
// //     $this->db->select('software_master.*');
// //     $this->db->from('software_master');
// //     $this->db->where('software_master.is_active', '1');
// //     $this->db->like('software_master.softwarename', 'B', 'after'); // Adds the LIKE condition
// //     $query = $this->db->get();
// //     return $query->result();
// }


// SELECT *
// FROM software_master
// WHERE softwarename LIKE "B%";


    public function getdataonsearch($searchtext)
    {
        $this->db->select('software_master.*');
        $this->db->from('software_master');
        $this->db->where('software_master.is_active', 1);
        $this->db->like('software_master.softwarename', $searchtext, 'both'); 
        $query = $this->db->get();
        return $query->result();
    }


      public function gettabtoclick($software_id){

      // $this->db->select("software_master.softwarename,software_master.description,software_master.photo1,");
      $this->db->select("software_master.softwarename,software_master.description,software_master.photo1,software_master.softwareid");
      $this->db->from('software_master');
    
      // SELECT * FROM `software_master`WHERE fksoftwaretypename=1;

      $this->db->where('software_master.fksoftwaretypename',$software_id);
      $this->db->where('software_master.is_active','1');          
      $query = $this->db->get();
      return $query->result();

    }





    }