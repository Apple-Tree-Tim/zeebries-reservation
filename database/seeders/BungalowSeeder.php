<?php

namespace Database\Seeders;

use App\Models\Bungalow;
use App\Models\Amenity;
use Illuminate\Database\Seeder;

class BungalowSeeder extends Seeder
{
    public function run(): void
    {
        $bungalows = [
            [
                'name' => 'Seaside Deluxe',
                'description' => 'Beautiful seaside view',
                'price' => 120.00,
                'image' => 'images/seaside.jpg',
                'images' => json_encode(['images/seaside1.jpg', 'images/seaside2.jpg']),
                'persons' => 4,
                'bedrooms' => 2,
            ],
            [
                'name' => 'Family Retreat',
                'description' => 'Spacious and cozy',
                'price' => 95.50,
                'image' => 'images/family.jpg',
                'images' => json_encode(['images/family1.jpg']),
                'persons' => 6,
                'bedrooms' => 3,
            ]
        ];

        foreach ($bungalows as $data) {
            $bungalow = Bungalow::create($data);
            $bungalow->amenities()->attach(Amenity::inRandomOrder()->limit(2)->pluck('id'));
        }
    }
}