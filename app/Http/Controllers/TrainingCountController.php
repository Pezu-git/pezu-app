<?php

namespace App\Http\Controllers;

use App\Models\TrainingCount;
use App\Models\Training;
use App\Models\TrainingType;
use Illuminate\Http\Request;

class TrainingCountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        return ['trainings' => $this->getTrainingsCount(), 'duration' => $this->getDuration(), 'distance' => $this->getDistance(), 'date' => $this->getLastTrainingTime(), 'name' => $this->getLastTrainingName()];
    }

    
    public function getTrainingsCount()
    {
        $allTraining = Training::count();
        return $allTraining;
    }

    public function getDuration()
    {
        $trainings = Training::all();
        $hSum = 0;
        $mSum = 0;
        $sSum = 0;
        foreach($trainings as $key => $value) {
            $dur = strtotime($value['duration']);
            $h = date("H",$dur);
            $m = date("i",$dur);
            $s = date("s",$dur);
            $hSum += $h;
            $mSum += $m; 
            $sSum += $s;  
        }
        $sSumR = $sSum%60;
        $mSum += floor($sSum/60);
        $mSumR = $mSum%60;
        $hSumR = $hSum + floor($mSum/60);
        $duration = "$hSumR:$mSumR:$sSumR";
        return $duration;
    }

    public function getDistance()
    {
        $trainings = Training::all();
        $dSum = 0;
        foreach($trainings as $key => $value) {
            $dist = $value['distance'];
            $dSum += $dist;
        }
        return $dSum;
    }
    


    public function getLastTrainingTime()
    {
        $last = Training::orderBy('date', 'desc')->orderBy('time', 'desc')->first();
        return date('d.m.Y', strtotime($last->date));
    }

    public function getLastTrainingName()
    {
        $last = Training::orderBy('date', 'desc')->orderBy('time', 'desc')->first();
        $name = TrainingType::where('id', $last->type_id)->first()->name;
        
        return $name;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TrainingCount  $trainingCount
     * @return \Illuminate\Http\Response
     */
    public function show(TrainingCount $trainingCount)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TrainingCount  $trainingCount
     * @return \Illuminate\Http\Response
     */
    public function edit(TrainingCount $trainingCount)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TrainingCount  $trainingCount
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TrainingCount $trainingCount)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TrainingCount  $trainingCount
     * @return \Illuminate\Http\Response
     */
    public function destroy(TrainingCount $trainingCount)
    {
        //
    }
}
