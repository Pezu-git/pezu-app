<?php

namespace App\Http\Controllers;

use App\Models\Training;
use App\Models\TrainingType;
use Illuminate\Http\Request;
use Mockery\Undefined;

class TrainingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $a = $request->all();
        $all = Training::orderBy('date', 'desc')->orderBy('time', 'desc')->take($a['load'])->get();
        foreach ($all as $key) {
            $key['time'] = date("H:i", strtotime($key['time']));
            $key['date'] = date('j F Y', strtotime($key['date']));
            if ($key['description'] === null) {
                $name = TrainingType::where('id', $key['type_id'])->first()->name;
                $key['description'] = $name;
            }
        } 
        return $all;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $type_id = TrainingType::where('name', $request->type)->first()->id;
        Training::create([
            'type_id' => $type_id,
            'description' => $request->description,
            'date' => $request->date,
            'time' => $request->time,
            'location' => $request->location,
            'distance' => $request->distance,
            'pace' => $request->pace,
            'duration' => $request->duration,
        ]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Training  $training
     * @return \Illuminate\Http\Response
     */
    public function show(Training $training)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Training  $training
     * @return \Illuminate\Http\Response
     */
    public function edit(Training $training)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Training  $training
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Training $training)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Training  $training
     * @return \Illuminate\Http\Response
     */
    public function destroy(Training $training)
    {
        //
    }
}
