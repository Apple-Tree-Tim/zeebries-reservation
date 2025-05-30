<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    GuestController,
    ReservationController,
    BungalowController,
    AmenityController,
    DiscountCodeController,
    FlexiblePriceOptionController,
    EmployeeController
};

// =====================
// 🔓 Public Routes
// =====================
Route::middleware('guest')->group(function () {
    // Guests can view all bungalows
    Route::get('/bungalows', [BungalowController::class, 'index']);
    Route::get('/bungalows/{bungalow}', [BungalowController::class, 'show']);

    // Guests can create a reservation
    Route::post('/reservations', [ReservationController::class, 'store']);

    // Guests can retrieve their own reservation by ID + email
    Route::get('/my-reservation/{id}', [ReservationController::class, 'showForGuest']);
});

// =====================
// 🔐 Authenticated Routes (Sanctum Protected)
// =====================
Route::middleware('auth:sanctum')->group(function () {
    // Guests CRUD
    Route::apiResource('guests', GuestController::class);

    // Full CRUD for Reservations, Bungalows, etc.
    Route::apiResource('reservations', ReservationController::class)->except(['store']); // Store is public
    Route::apiResource('bungalows', BungalowController::class)->except(['index', 'show']);
    Route::apiResource('amenities', AmenityController::class);
    Route::apiResource('discount-codes', DiscountCodeController::class);
    Route::apiResource('flexible-price-options', FlexiblePriceOptionController::class);
});