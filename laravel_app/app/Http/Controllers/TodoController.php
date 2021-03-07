<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    // 一覧機能
    public function getTodos()
    {
        $todos = Todo::all();
        return $todos;
    }

    // 追加機能
    public function addTodo(Request $request)
    {
        $todo = new Todo;
        $todo->title = $request->title;
        $todo->save();

        $todos = Todo::all();
        return $todos;
    }
}
