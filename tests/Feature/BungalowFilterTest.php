<?php

use App\Models\ReservationItem;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('bungalow index can filter by date range', function () {
    $this->seed();

    $reservedId = ReservationItem::first()->bungalow_id;
    $start = now()->addDays(4)->toDateString();
    $end = now()->addDays(5)->toDateString();

    $response = $this->getJson('/api/bungalows?start_date=' . $start . '&end_date=' . $end);
    $response->assertOk();

    $ids = array_column($response->json(), 'id');
    expect($ids)->not()->toContain($reservedId);
});