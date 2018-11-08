<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Feedback;

class FeedbackController extends BaseController
{
    public function send(Request $request) {
        $model = new Feedback();

        foreach ($request->all() as $key => $value){
            $model[$key] = $value;
        };
        $model->save();
        return response()->json(
            [
                'success' => 1,
                'order_number' => $model->id
            ]);
    }

}
