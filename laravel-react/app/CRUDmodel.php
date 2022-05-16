<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CRUDmodel extends Model
{
    protected $table = 'user';
    public $timestamps = false;
    protected $fillable = ['username','email','phone','gender','location','skills','documents'];
}
