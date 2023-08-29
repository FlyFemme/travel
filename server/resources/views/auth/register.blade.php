<x-guest-layout>
    <link href="{{ asset('css/Register.css') }}" rel="stylesheet">



    <!-- Validation Errors -->
    <x-auth-validation-errors class="mb-4" :errors="$errors" />
    <div class="form-border">

        <form method="POST" action="{{ route('register')}}" class="register">
            @csrf
            <p class="txt_line color">Registro de usuario</p>
            <!-- Name -->
            <div>
                <x-label for="name" :value="__('Nombre')" class="label" />

                <x-input class="input colored-value" id="name" type="text" name="name" :value="old('name')" required
                    autofocus placeholder="Escribe tu nombre..." />
            </div>

            <!-- Email Address -->
            <div>
                <x-label for="email" :value="__('E-Mail')" class="label" />

                <x-input class="input colored-value" id="email" type="email" name="email" :value="old('email')" required
                    placeholder="Escribe tu e-mail..." />
            </div>

            <!-- Password -->
            <div>
                <x-label for="password" :value="__('Contraseña')" class="label" />

                <x-input class="input colored-value" id="password" type="password" name="password" required
                    autocomplete="new-password" placeholder="Escribe tu contraseña..." />
            </div>



            <div>
                <div class="btn-container">

                    <button class="btn-aceptar button">
                        {{ __('Aceptar') }}
                    </button>
                    <button class="btn-cancelar button">
                        <a href="/">
                            Cancelar
                        </a>
                    </button>
                </div>

            </div>
            <p class="p2">¿Ya tienes cuenta? Accede
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                    {{ __('aqui') }}
                </a>
            </p>

        </form>
    </div>

</x-guest-layout>