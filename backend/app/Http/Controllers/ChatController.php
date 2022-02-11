<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function getMessage() {

        $messages = Message::all();
        return [1, 2, 3, 4];
    }

    public function getRooms() {
        return 'get rooms';
    }
}
