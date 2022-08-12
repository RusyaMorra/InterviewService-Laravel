<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Desk;

class DesksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Desk::factory(10)->create();
    }
}
