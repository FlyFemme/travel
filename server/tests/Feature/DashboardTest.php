<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    public function test_dashboard_loads_correctly()
    {
        $response = $this->get('/');

        $response->assertStatus(200)
            ->assertSee('Dashboard')
            ->assertSee('Usuarios')
            ->assertSee('Roles');
    }

    public function test_dashboard_shows_user_count()
    {
        $user = User::factory()->create();

        $response = $this->get('/');

        $response->assertSee('Usuarios')
            ->assertSee((string)User::count());
    }

   
}

