<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BkController extends Controller
{
    protected $weddingDay;

	public function __construct() {
		$this->weddingDay = "2018-04-08";
	}
    public function index() {
    	// $aoeu = \DB::table('users')->where('id', 1)->first();
		$dDay = $this->getDDay();
	    return view('welcome', ['dDay' => $dDay]);
    }

    private function getDDay() {
    	$nDate = date("Y-m-d",time());
    	$valDate = Trim($this->weddingDay);
    	$dDay = intval((strtotime($nDate) - strtotime($valDate)) / 86400) * -1;
    	return $dDay;
    }

    public function indexPhoto() {
    	return view('welcome-pictures', ['more' => '돌아가기']);
    }

    public function postUpload(Request $request) {
    	
    }
}
