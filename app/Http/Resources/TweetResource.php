<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TweetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'tweet_id' => $this->id,
            'tweet_body' => $this->body,
            'created' => [
                'ago' => $this->created_at->diffForHumans(),
                'time' => $this->created_at->format('d M Y')
            ],
            'user' => $this->user
        ];
    }
}
