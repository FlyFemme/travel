<?php

namespace Tests\Feature\Api;

use App\Models\Card;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CardTest extends TestCase
{
    use RefreshDataBase;
    /**
     * Should test get all places
     */
    public function test_user_no_auth_can_see_all_places(): void
    {
        $this->withExceptionHandling();

        Card::factory()->create();

        $response = $this->getJson('/api/cards');

        $response->assertStatus(200);
    }
}
