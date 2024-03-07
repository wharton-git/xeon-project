<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class MessageController extends Controller
{

    public function index1($user_id){
        $user = new User();
        if ($user->id == 1 ){
            return 'hello admin';
        }else {
            return 'hello client';
        }
    }
}
