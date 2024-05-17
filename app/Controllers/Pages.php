<?php

namespace App\Controllers;

class Pages extends BaseController
{
    public function index()
    {
        return view('welcome-message');
    }

    public function view(string $page = 'home')
    {
        
    }
}