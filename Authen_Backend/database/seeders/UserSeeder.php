<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('account')->insert([
            'username' => 'Hoang Diu',
            'email' => 'hoangdiu@gmail.com',
            'password' => '12345',

        ]);
    }
}
