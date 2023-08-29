<nav class='nav' x-data="{ open: false }">
    <!-- Primary Navigation Menu Dashboard -->
    <div class="nav-bar-container">
        <a href="{{ url('/dashboard') }}"> <img class="logo" src="{{ asset('assets/Logo.svg') }}"></a>

        <div class="dashboard-nav-bar-right-div">

            <div class='dashboard-search-container'>
                <!-- Search Input -->
                <form class="search-input" action="{{ route('search') }}" method="GET">
                    <input class="search" placeholder="Search..." type="text" name="query">
                    <button value='Search' class="search-button" type="submit"><img
                            src="{{ asset('assets/Glass-icon.svg') }}"></button>

                </form>
            </div>


            <!-- Navigation Links -->
            <div class="dashboard-nav-link-container">
                <x-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
                    <img src="{{ asset('assets/Home-icon.svg') }}" alt="">
                    <!--{{ ('Pepito') }}-->
                </x-nav-link>
                <x-nav-link :href="route('formAddNewCard.index')" :active="request()->routeIs('formAddNewCard.index')">
                    <img src="{{ asset('assets/Create-icon.svg') }}" alt="">
                </x-nav-link>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <x-nav-link :href="route('logout')" onclick="event.preventDefault();
                                                this.closest('form').submit();"> <img
                            src="{{ asset('assets/Logout-icon.svg') }}" alt="">
                        <!--{{ __('Log Out') }}-->
                    </x-nav-link>
                </form>

            </div>

        </div>

    </div>


    <!-- Responsive Navigation Menu -->
    <div :class="{'block': open, 'hidden': ! open}" class="hidden sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
            <x-responsive-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
                {{ __('Dashboard') }}
            </x-responsive-nav-link>
            <x-responsive-nav-link :href="route('formAddNewCard.index')"
                :active="request()->routeIs('formAddNewCard.index')">
                Add New
            </x-responsive-nav-link>
        </div>


        <!-- Responsive Settings Options -->
        <div class="pt-4 pb-1 border-t border-gray-200">
            <div class="px-4">
                <div class="font-medium text-base text-gray-800">{{ Auth::user()->name }}
                </div>
                <div class="font-medium text-sm text-gray-500">{{ Auth::user()->email }}</div>
            </div>

            <div class="mt-3 space-y-1">
                <!-- Authentication -->
                <form method="POST" action="{{ route('logout') }}">
                    @csrf

                    <x-responsive-nav-link :href="route('logout')" onclick="event.preventDefault();
                                        this.closest('form').submit();">
                        {{ __('Log Out') }}
                    </x-responsive-nav-link>
                </form>
            </div>
        </div>
    </div>
</nav>