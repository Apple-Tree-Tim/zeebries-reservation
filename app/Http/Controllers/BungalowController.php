<?php

namespace App\Http\Controllers;

use App\Models\Bungalow;
use Illuminate\Http\Request;

class BungalowController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Bungalow::with('amenities', 'flexiblePrices')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'number' => 'required|string|unique:bungalows,number',
            'type' => 'required|string',
        ]);

        return Bungalow::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Bungalow $bungalow)
    {
        return $bungalow->load('amenities', 'flexiblePrices');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bungalow $bungalow)
    {
        $data = $request->validate([
            'name' => 'sometimes|string',
            'number' => 'sometimes|string|unique:bungalows,number,' . $bungalow->id,
            'type' => 'sometimes|string',
        ]);

        $bungalow->update($data);
        return $bungalow;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bungalow $bungalow)
    {
        $bungalow->delete();
        return response()->noContent();
    }
}
