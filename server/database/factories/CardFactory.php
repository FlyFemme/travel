<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => fake()->name(), 
            'location' => fake()->adress(), 
            'image' => 'image/image.jpg', 
            'description' => fake()->text(40)
        ];
    }
}
