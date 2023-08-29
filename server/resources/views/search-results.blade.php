<x-app-layout>
    <div class="grid-container">
        @foreach ($cards as $card)
        <div class="card-container">
            <div class="img-container">
                <img class="image-card" src="{{ $card->image }}" alt="{{ $card->title }}">
            </div>
            <h3 class="card-title">{{ $card->title }}</h3>
            <h4 class="card-location">{{ $card->location }}</h4>
        </div>
        @endforeach
        @foreach ($form_add_new_cards as $form_add_new_card)
        <div class="card-container">
            <div class="img-container">
                <img class="image-card" src="{{ asset('storage/' . $form_add_new_card->image) }}" alt="Image">
            </div>
            <h3 class="card-title">{{ $form_add_new_card->title }}</h3>
            <h4 class="card-location">{{ $form_add_new_card->location }}</h4>
        </div>
        @endforeach
    </div>
</x-app-layout>