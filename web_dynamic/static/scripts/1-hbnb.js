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
});
