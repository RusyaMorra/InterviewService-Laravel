<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\DeskList;

class DeskListTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DeskList::factory(10)->create();
    }
}
