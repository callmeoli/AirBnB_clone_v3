$(document).ready(function () {
    let amenties = {};
    $(document).on('change', "input[type='checkbox']", function () {
        if (this.checked) {
            amenties[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenties[$(this).data('id')];
        }
        let lst = Object.values(amenties);
        if (lst.length > 0) {
            $('div.amenities > h4').text(Object.values(amenties).join(', '));
        } else {
            $('div.amenities > h4').html('&nbsp;');
        }
    });

    $.ajax({
        url: 'http://localhost:5001/api/v1/status/',
        success: result => {
            if (result.status === 'OK') {
                $('div#api_status').addClass('available');
            } else {
                $('div#api_status').removeClass('available');
            }
        }
    });

    $.ajax({
        url: 'http://localhost:5001/api/v1/places_search',
        type: 'POST',
        data: JSON.stringify({}),
        dataType: 'json',
        contentType: 'application/json',
        success: result => {
            for (let i = 0; i < data.length; i++) {
                let place = data[i];
                $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
            }
        }
    })
});
