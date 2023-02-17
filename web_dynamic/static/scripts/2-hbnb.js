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
});
