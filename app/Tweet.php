<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    protected $guarded = [];
    protected function user()
    {
        return $this->belongsTo(User::class);
    }
}
