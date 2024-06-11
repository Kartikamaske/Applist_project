<?php
  class Alldata_model extends CI_Model {
    
    public function __construct()
      {
          $this->load->database();
      }


    //   function alldata($photo_typeId){

    //     $this->db->select("lastsoftwarelist_master.lastsoftwareid  ,software_master.softwarename,lastsoftwarelist_master.fksoftwaretypename");
    //     $this->db->from('lastsoftwarelist_master');

    //     $this->db->join('software_master','lastsoftwarelist_master.fksoftwareid   = software_master.softwareid ','right');

    //     $this->db->where('lastsoftwarelist_master.fksoftwaretypename',$photo_typeId);
    //     $this->db->where('software_master.is_active','1');          
    //     $query = $this->db->get();
    //     return $query->result();
    //   }


      function gettabtoclick($photo_typeId){

        $this->db->select("software_master.softwarename,software_master.description,software_master.photo1");
        $this->db->from('software_master');

        // $this->db->join('software_master','lastsoftwarelist_master.fksoftwareid   = software_master.softwareid ','right');

        $this->db->where('software_master.fksoftwaretypename',$photo_typeId);
        $this->db->where('software_master.is_active','1');          
        $query = $this->db->get();
        return $query->result();
      }




    }