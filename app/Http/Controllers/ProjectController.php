<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use Inertia\Inertia;

class ProjectController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Project::query();

        $sortFiled = request('sort_field', 'created_at');
        $sortDirection = request('sort_direction', 'asc');

        if(request("name")) {
            $query->where("name", "like", "%". request("name") ."%");
        }

        if(request("status")) {
            $query->where("status", request("status"));
        }

        $projects = $query->orderBy($sortFiled, $sortDirection)->paginate(10);

        return Inertia::render (
            'Project/Index', [
                'projects' => ProjectResource::collection($projects),
                "queryParams" => request()->query() ?: null,
            ]);
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
    public function store(StoreProjectRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $query = $project->tasks();

        $sortFiled = request('sort_field', 'created_at');
        $sortDirection = request('sort_direction', 'asc');

        if(request("name")) {
            $query->where("name", "like", "%". request("name") ."%");
        }

        if(request("status")) {
            $query->where("status", request("status"));
        }

        $tasks = $query->orderBy($sortFiled, $sortDirection)->paginate(10);
        return Inertia('Project/Show', [
            'project' => new ProjectResource($project),
            'tasks' => TaskResource::collection($tasks),
            'queryParams' => request()->query()?: null,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
