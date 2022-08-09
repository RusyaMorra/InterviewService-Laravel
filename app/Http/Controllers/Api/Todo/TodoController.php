<?php

namespace App\Http\Controllers\Api\Todo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  App\Models\TodoModel\Todo;

class TodoController extends Controller
{
   public function getTodos(Request $request){
        echo dd($request);
        new Todo()
        return response('123', 200);
    }
}
