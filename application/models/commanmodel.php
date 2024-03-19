<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Commanmodel extends CI_Model 
{
	public function addData($table,$array) 
	{
		return $this->db->insert($table,$array);
	}

	public function updateData($table,$where,$array) 
	{
		return $q = $this->db->where($where)->update($table,$array);
	}

	public function deleteData($table,$array) 
	{
		return $this->db->delete($table,$array);
	}
	
	public function getData($table,$where='0') 
	{
		if (!$where):
			$q = $this->db->get($table);
			return $q->result();
		else:
			$q = $this->db->where($where)->get($table);
			return $q->result();
		endif;
	}

	public function get1Data($table,$where) 
	{
		$q = $this->db->where($where)->get($table);
		return $q->row();
	}

	public function getCount($table,$where='0')
	{
		if (!$where):
			$q = $this->db->get($table);
			return $q->num_rows();
		else:
			$q = $this->db->where($where)->get($table);
			return $q->num_rows();
		endif;
	}

	public function getDataPage($table,$where=0,$limit=0,$start=0,$orderBy=0) 
	{
		if (!$where):
			$q = $this->db->order_by($orderBy)->get($table,$limit,$start);
			return $q->result();
		else:
			$q = $this->db->order_by($orderBy)->where($where)->get($table,$limit,$start);
			return $q->result();
		endif;
	}

	public function getDataLike($table,$where='0',$tf,$id)
	{
		if (!$where):
			$q = $this->db->like($tf,$id)->get($table);
			return $q->result();
		else:
			$q = $this->db->where($where)->like($tf,$id)->get($table);
			return $q->result();
		endif;
	}

	public function getDataLikeArray($table,$where='0',$condition='0')
	{
		if (!$where):
			$q = $this->db->or_like($condition)->get($table);
			return $q->result();
		else:
			$q = $this->db->where($where)->or_like($condition)->get($table);
			return $q->result();
		endif;
	}

	public function getDatajoinArray($table,$st,$where,$condision=0) 
	{
		if (!$condision) 
		{
			$q = $this->db->join($st,$where)->get($table);
			return $q->result();
		}
		else
		{
			$q = $this->db->where($condision)->join($st,$where)->get($table);
			return $q->result();
		}
	}

	public function getDatajoinArrayCount($table,$st,$where,$condision=0) 
	{
		if (!$condision) 
		{
			$q = $this->db->join($st,$where)->get($table);
			return $q->num_rows();
		}
		else
		{
			$q = $this->db->where($condision)->join($st,$where)->get($table);
			return $q->num_rows();
		}
	}

	public function get1Datajoin($table,$st,$where,$condision) 
	{
		$q = $this->db->where($condision)->join($st,$where)->get($table);
		return $q->row();
	}

	public function getDataJoinLike($table,$st,$where,$condision=0,$tf,$id)
	{
		if (!$condision) 
		{
			$q = $this->db->join($st,$where)->get($table);
			return $q->result();
		}
		else
		{
			$q = $this->db->where($condision)->join($st,$where)->like($tf,$id)->get($table);
			return $q->result();
		}
	}
}
