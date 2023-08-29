<x-guest-layout>
    <link href="{{ asset('css/login.css') }}" rel="stylesheet">


    <!-- Session Status -->
    <x-auth-session-status :status="session('status')" />

    <!-- Validation Errors -->
    <x-auth-validation-errors :errors="$errors" />

    <form method="POST" action="{{ route('login') }}" class="login">
        @csrf
        <p class="txt_line color">Acceso de usuario</p>
        <!-- Email Address -->
        <div>
            <x-label for="email" :value="__('E-Mail')" class="label" />

            <x-input class="input" id="email" type="email" name="email" :value="old('email')" required autofocus
                placeholder="Escribe tu e-mail..." />
        </div>

        <!-- Password -->
        <div>
            <x-label for="password" :value="__('Contraseña')" class="label" />

            <x-input id="password" class="input" type="password" name="password" required
                autocomplete="current-password" placeholder="Escribe tu contraseña..." />
        </div>


        <div class="btn-container">

            <button class="btn-aceptar">
                Aceptar
            </button>
            <button class="btn-cancelar">
                <a href="/">
                    Cancelar
                </a>
            </button>
        </div>
    </form>

</x-guest-layout>