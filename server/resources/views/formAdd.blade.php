<x-app-layout>
    <form class="form" method="POST" action="{{ route('formAddNewCard.store') }}" enctype="multipart/form-data"
        onsubmit="return validateForm()">
        @csrf
        <div class="box-line">
            <h3>Crear destino</h3>
        </div>
        <div class="flex">

            <div class="box-half">
                <label for="title" value="__('Título')">Título
                </label>
                <input id="title" class="block mt-1 w-full" type="text" name="title"
                    placeholder="Escribe el título..." />
                <p id="error-title" class="error"></p>

                <label for="location" value="__('Ubicación')">Ubicación</label>

                <input id="location" class="block mt-1 w-full" type="text" name="location"
                    placeholder="Escribe la ubicación..." />
                <p id="error-location" class="error"></p>
                <label for="image" class="input-absolute">
                    Imagen
                    <img class="file" src="{{ asset('assets/File-icon.svg') }}" alt="Elegir file">

                    <input id="image" type="file" name="image" />

                </label>

                <div class="file-text" id="file-text">

                    Sube una imagen...

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

                <textarea name="description" rows="12" class="block w-full" maxlength="500" id="description"></textarea>
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

        if (imageInput.value === '') {
            errorImage.textContent = 'Imagen requerida';
            valid = false;
        } else {
            errorImage.textContent = '';
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