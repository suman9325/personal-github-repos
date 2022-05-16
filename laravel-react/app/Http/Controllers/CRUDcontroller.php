<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\CRUDmodel;

class CRUDcontroller extends Controller
{
    function insertData()
    {

    	$data = json_decode(file_get_contents("php://input"));

        $file = $data->user_files;
        $fileName = $data->file_name;
        
        $img = str_replace('data:image/jpeg;base64,', '', $file);
        $img = str_replace(' ', '+', $img);

        $filePath = 'F:\Laravel_progs\laravel-react\upload'.'/'.time().'_'.$fileName;
        
        echo file_put_contents($filePath, base64_decode($img));

    	$insertUser = CRUDmodel::create(['username'=>($data->user_name),'email'=>($data->user_email),'phone'=>($data->user_contact),'gender'=>($data->user_gender),'location'=>($data->user_location),'skills'=>(implode(",",($data->user_skills))),'documents'=>($filePath)]);

    	if($insertUser){        
            echo json_encode(["success"=>1,"msg"=>"User Inserted."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Inserted!"]);
        }
    }	//insertData()

    function viewAll()
    {
    	$users = CRUDmodel::all();

    	if($users){
    		echo json_encode(["success"=>1,"msg"=>"Getting all data","user"=>$users]);    		
    	}
    	else{
    		echo json_encode(["success"=>0,"msg"=>"Data fetching failed"]);
    	}
    }	//viewAll()

    function deleteByID(){

    	// echo "string";

    	$data = json_decode(file_get_contents("php://input"));
    	$deleteUser = CRUDmodel::destroy(['id'=>($data->id)]);

    	if ($deleteUser) {
    		echo json_encode(["success"=>1,"msg"=>"User Deleted"]);    		
    	} else {
    		echo json_encode(["success"=>0,"msg"=>"User not deleted"]);
    	}
    	
    }	//deleteByID

    function updateData(){

    	$data = json_decode(file_get_contents("php://input"));

        $file = $data->user_files;
        $fileName = $data->file_name;
        
        $img = str_replace('data:image/jpeg;base64,', '', $file);
        $img = str_replace(' ', '+', $img);

        $filePath = 'F:\Laravel_progs\laravel-react\upload'.'/'.time().'_'.$fileName;
        
        echo file_put_contents($filePath, base64_decode($img));
    	
        $users = CRUDmodel::where('id', '=', ($data->user_id))->update(['username'=>($data->user_name),'email'=>($data->user_email),'phone'=>($data->user_contact),'gender'=>($data->user_gender),'location'=>($data->user_location),'skills'=>(implode(",",($data->user_skills))),'documents'=>($filePath)]);

        if ($users) {
    		echo json_encode(["success"=>1,"msg"=>"User Updated"]);    		
    	} else {
    		echo json_encode(["success"=>0,"msg"=>"User not updated"]);
    	}

    }	//updateData

    function getUserByID(){

    	$data = json_decode(file_get_contents("php://input"));
    	$users = CRUDmodel::where('id', '=', ($data->id))->get();
    	if ($users) {
    		echo json_encode(["success"=>1,"msg"=>"User fetched","user"=>$users]);    		
    	} else {
    		echo json_encode(["success"=>0,"msg"=>"User not fetched"]);
    	}

    }	//getUserByID
}


// https://www.w3jar.com/react-js-php-mysqli-crud-application-with-react-context-api/


