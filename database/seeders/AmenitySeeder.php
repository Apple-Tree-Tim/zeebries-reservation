<?php

namespace Database\Seeders;

use App\Models\Amenity;
use Illuminate\Database\Seeder;

class AmenitySeeder extends Seeder
{
    public function run(): void
    {
        $names = ['Wi-Fi', 'Breakfast', 'Parking', 'Swimming Pool'];
        foreach ($names as $name) {
            Amenity::create(['name' => $name]);
        }
    }
}
