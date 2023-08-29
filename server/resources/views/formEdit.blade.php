<x-app-layout>

    <form class="form" method="POST" action="{{ route('formAddNewCard.update', $form_add_new_cards) }}"
        enctype="multipart/form-data" onsubmit="return validateForm()">
        @csrf
        @method('patch')
        <div class="box-line">
            <h3>Editar destino</h3>
        </div>
        <div class="flex flex-form">
            <div class="box-half">
                <label for="title" value="__('Título')">Título
                </label>

                <input id="title" class="block mt-1 w-full" type="text" name="title" placeholder="Escribe el título..."
                    value="{{ old('title', $form_add_new_cards->title) }}" />
                <p id="error-title" class="error"></p>

                <label for="location" value="__('Ubicación')">Ubicación</label>

                <input id="location" class="block mt-1 w-full" type="text" name="location"
                    placeholder="Escribe la ubicación..."
                    value="{{ old('location', $form_add_new_cards->location) }}" />
                <p id="error-location" class="error"></p>

                <label for="image" class="input-absolute">
                    Imagen
                    <img class="file" src="{{ asset('assets/File-icon.svg') }}" alt="Elegir file">

                    <input id="image" type="file" name="image" value="{{ old('image', $form_add_new_cards->image) }}" />

                </label>
                <div class="file-text" id="file-text">
                    @if(!empty($form_add_new_cards->image))
                    Imagen seleccionada

                    @endif
                </div>
                <p id="error-image" class="error"></p>


                <div class="buttons-end">
                    <button class="rounded-pill btn-accept button" type="submit">
                        Aceptar
                    </button>
                    <button class="rounded-pill btn-cancel button">
                        <a href="/dashboard">
                            Cancelar
                        </a>
                    </button>
                </div>
            </div>
            <div class="box-half">
                <label>¿Por qué quieres viajar allí?</label>
                <p id="error-description" class="error"></p>

                <textarea id="description" name="description" rows="12"
                    class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">{{ old('description', $form_add_new_cards->description) }}</textarea>
            </div>
        </div>
    </form>
    <script>
    function validateForm() {
        const titleInput = document.getElementById('title');
        const errorTitle = document.getElementById('error-title');
        const locationInput = document.getElementById('location');
        const errorLocation = document.getElementById('error-location');
        const imageInput = document.getElementById('image');
        const errorImage = document.getElementById('error-image');
        const descriptionInput = document.getElementById('description');
        const errorDescription = document.getElementById('error-description');
        let valid = true;

        if (titleInput.value.trim() === '') {
            errorTitle.textContent = 'Título requerido';
            valid = false;
        } else {
            errorTitle.textContent = '';
        }

        if (locationInput.value.trim() === '') {
            errorLocation.textContent = 'Ubicación requerida';
            valid = false;
        } else {
            errorLocation.textContent = '';
        }

        if (descriptionInput.value === '') {
            errorDescription.textContent = 'Descripción requerida';
            valid = false;
        } else {
            errorDescription.textContent = '';
        }
        return valid;
    }
    document.getElementById('image').addEventListener('change', function() {
        const fileText = document.getElementById('file-text');
        const input = this;

        if (input.files && input.files[0]) {
            const filename = input.files[0].name;
            fileText.textContent = filename;
        } else {
            fileText.textContent = 'Sube una imagen...';
        }
    });
    </script>
</x-app-layout>