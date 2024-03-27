<?php

class Customaj extends Admin_Controller
{
	public function __construct()
    {
		parent::__construct();
        $this->load->model('commanmodel','comman');
	}

    public function index()
	{
        $post = $this->input->post();
        if($post):
            $dataAdd = [
                        'subId' => isset($post['parent_id'])&&$post['parent_id']?$post['parent_id']:0,
                        'name' => $post['value'],
                        'icon' => $post['font_icon_code']
                    ];
            $success = $this->comman->addData('aj_categorie',$dataAdd);
            if($success):
                $this->session->set_flashdata('message','Data Added.');
            else:
                $this->session->set_flashdata('error','Something went wrong. please try again.');
            endif;
            redirect('admin/customaj');
        else:
            $getCategorie = $this->db->query('SELECT * FROM `aj_categorie` WHERE status != 2')->result();
            // print_r($this->db->last_query());die();
            $finalCategorie = ['0'=>'No parent'];
            foreach($getCategorie as $gcData): 
                if($gcData->subId == 0):
                    $finalCategorie[$gcData->id] =  $gcData->name;
                endif;
            endforeach;
            $this->data['tree_listings'] = $getCategorie;
            $this->data['treefield_no_parents'] = $finalCategorie;
            $this->data['subview'] = 'admin/customeaj/categories';
            $this->load->view('admin/_layout_main', $this->data);
        endif;
    }

    public function deleteCategories($categoriesId=0)
    {
        $getCategorie = $this->comman->get1Data('aj_categorie',['id'=>$categoriesId]);
        if($getCategorie):
            $success = $this->comman->updateData('aj_categorie',['id'=>$getCategorie->id],['status'=>2]);
            if($success):
                $this->session->set_flashdata('message','Categorie Deleted.');
            else:
                $this->session->set_flashdata('error','Something went wrong. please try again.');
            endif;
            redirect('admin/customaj');
        else:
            redirect('admin/customaj');
        endif;
    }

    public function seo($s) // SEO url Maker Function
	{
		$tr = array('ş','Ş','ı','İ','ğ','Ğ','ü','Ü','ö','Ö','Ç','ç','Å');
		$eng = array('s','s','i','i','g','g','u','u','o','o','c','c','a');
		$s = str_replace($tr,$eng,$s);
		$s = strtolower($s);
		$s = preg_replace('/&.+?;/', '', $s);
		$s = preg_replace('/[^%a-z0-9 _-]/', '', $s);
		$s = preg_replace('/\s+/', '-', $s);
		$s = preg_replace('|-+|', '-', $s);
		$s = trim($s, '-');
		return $s;
	}

    public function categoriesData()
    {
        $post = $this->input->post();
        if($post):
            if($_FILES['c_image']['name'][0]):
                $ImageCount = count($_FILES['c_image']['name']);
                for($i = 0; $i < $ImageCount; $i++)
                {
                    $_FILES['file']['name']       = $_FILES['c_image']['name'][$i];
					$_FILES['file']['type']       = $_FILES['c_image']['type'][$i];
					$_FILES['file']['tmp_name']   = $_FILES['c_image']['tmp_name'][$i];
					$_FILES['file']['error']      = $_FILES['c_image']['error'][$i];
					$_FILES['file']['size']       = $_FILES['c_image']['size'][$i];
                    // File upload configuration
                    $config = [
                        'upload_path' => 'files/customImage/',
                        'allowed_types' => 'jpg|jpeg|png',
                        'file_name' => "Gallery_".time()
                    ];
                    // Load and initialize upload library
                    $this->load->library('upload', $config);
                    $this->upload->initialize($config);
                    // Upload file to server
                    if($this->upload->do_upload('file'))
                    {
                        // Uploaded file data
                        $imageData = $this->upload->data();
                        $uploadImgData[$i] = 'files/customImage/'.$imageData['file_name'];
                    }else {
                        $uploadImgData[$i] = '-';
                    }
                }
                $c_gallery = json_encode($uploadImgData,JSON_UNESCAPED_SLASHES);
            endif;
            $dataAdd = [
                'categorieId' => isset($post['parent_id'])&&$post['parent_id']?$post['parent_id']:0,
                'cdTitle' => $post['title'],
                'cdSlug' => $this->seo($post['title']),
                'cdDescription' => $post['description'],
                'cdImages' => $c_gallery,
            ];
            // echo "<pre>";print_r($dataAdd);die();
            $success = $this->comman->addData('aj_categorie_data',$dataAdd);
            if($success):
                $this->session->set_flashdata('message','Data Added.');
            else:
                $this->session->set_flashdata('error','Something went wrong. please try again.');
            endif;
            redirect('admin/customaj/categoriesData');
        else:
            $getCategorie = $this->db->query('SELECT * FROM `aj_categorie` WHERE status != 2')->result();
            $finalCategorie = [''=>'Select Categorie'];
            foreach($getCategorie as $gcData): 
                $finalCategorie[$gcData->id] =  $gcData->name;
            endforeach;
            $getCategorieData = $this->comman->getData('aj_categorie_data',['cdStatus'=>1]);
            $this->data['tree_listings'] = $getCategorieData;
            $this->data['treefield_no_parents'] = $finalCategorie;
            $this->data['subview'] = 'admin/customeaj/categoriesDataAdd';
            $this->load->view('admin/_layout_main', $this->data);
        endif;
    }

    public function deleteCategoriesData($categoriesId=0)
    {
        $getCategorie = $this->comman->get1Data('aj_categorie_data',['cdId'=>$categoriesId]);
        if($getCategorie):
            $success = $this->comman->updateData('aj_categorie_data',['cdId'=>$getCategorie->cdId],['cdStatus'=>2]);
            if($success):
                $this->session->set_flashdata('message','Categorie Data Deleted.');
            else:
                $this->session->set_flashdata('error','Something went wrong. please try again.');
            endif;
            redirect('admin/customaj/categoriesData');
        else:
            redirect('admin/customaj/categoriesData');
        endif;
    }
}