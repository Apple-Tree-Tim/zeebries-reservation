<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bungalow extends Model
{
    protected $fillable = ['name', 'number', 'type'];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }

    public function amenities()
    {
        return $this->belongsToMany(Amenity::class);
    }

    public function flexiblePrices()
    {
        return $this->hasMany(FlexiblePriceOption::class);
    }
}
