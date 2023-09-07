<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FakeUsersFactory extends Factory
{
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $imagePath = 'images/destination.jpeg';
        return [
            'image' => $imagePath,
            'title' => $this->faker->sentence,
            'location' => $this->faker->city,
            'content' => $this->faker->paragraph,
            'user_id' => User::factory()->create()->id, 
        ];
    }
}
