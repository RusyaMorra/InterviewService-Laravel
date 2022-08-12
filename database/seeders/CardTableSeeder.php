<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Card;

class CardTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Card::factory(10)->create();
    }
}
