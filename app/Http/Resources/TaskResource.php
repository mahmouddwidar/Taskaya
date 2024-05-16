<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "img_path" => $this->img_path,
            "name" => $this->name,
            "status" => $this->status,
            "priority" => $this->priority,
            "due_date" => (new Carbon($this->due_date))->format('Y-m-d'),
            "created_at" => (new Carbon($this->created_at))->format('Y-m-d'),
            "project" => new ProjectResource($this->project),
            "created_by" => new UserResource($this->createdBy),
            "updated_by" => new UserResource($this->updatedBy),
        ];
    }
}
