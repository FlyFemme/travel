<nav x-data="{ open: false }">

<header class ='home-register-container'>
    <!-- Primary Navigation Menu Dashboard -->
    <a href="{{ url('/') }}"> <img class="logo" src="{{ asset('assets/Logo.svg') }}"></a>

    <div class="nav-bar-right-div">
       

<div class= "nav-bar-right-div">
 <!-- Search Input -->
 <div class="nav-bar-search-input-container">
            <form class="search-input" action="{{ route('searchGuest') }}" method="GET">
                <input class="search" placeholder="Search..." type="text" name="query">
                <button value='Search' class="search-button" type="submit"><img
                        src="{{ asset('assets/Glass-icon.svg') }}"></button>
            </form>
        </div>

        <!--nav links-->
        @if (Route::has('login'))
        @auth
        <a class="dashboard-button" href="{{ url('/dashboard') }}"><img src="{{ asset('assets/Avatar-icon.svg') }}"></a>
        @else
        <a class="login-button" href="{{ route('login') }}"></a>
        <!--boton de login si quieres poner-->
        @if (Route::has('register'))
        <a class="home-button " href="{{ url('/') }}"> <img src="{{ asset('assets/Home-icon.svg') }}"></a>
        <a class="register-button" href="{{ route('register') }}"><img src="{{ asset('assets/Avatar-icon.svg') }}"></a>

        @endif
        @endauth
        </div>
        @endif
    </div>
</header>
</nav>