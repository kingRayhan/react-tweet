<?php

use Illuminate\Database\Seeder;
use App\Tweet;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(Tweet::class, 200)->create();
    }
}
