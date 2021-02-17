$(document).ready(function () {
  let listCheck = {};
  $('input:checkbox').change(function () {
    let id =  $(this).attr('data-id');
    let name =  $(this).attr('data-name');
    if ($(this).is(':checked')) {
      listCheck[id] = name;
    } else {
      delete listCheck[id];
    }
    $('div.amenities h4').text('');
    for (id in listCheck) {
      if ($('div.amenities h4').width() < 215){
        $('div.amenities h4').append(listCheck[id]);
        $('div.amenities h4').append(', ');
      } else {
        $('div.amenities h4').append('...');
        break;
      }
    }
  });

  $.ajax({
    url: 'http://localhost:5001/api/v1/status/',
    //type: 'GET',
    //dataType: 'text',
    success: function (data) {
	console.log(data);
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    },
    error: function (error) {
      console.log('error', error);
    }
  });

  $.ajax({
    url: 'http://localhost:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    dataType: 'json',
    success: data => {
	data.map(place => {
	    $('section.places').append(`
                    <article>
                    <div class='title_box'>
                    <h2>${place.name}</h2>
                    <div class="price_by_night">$${place.price_by_night}</div>
                    </div>
		    <div class="information">
	            <div class="max_guest">${place.max_guest} Guest${place.max_guest != 1 ? 's' : ''} </div>
		    <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms != 1 ? 's' : ''}</div>
		    <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms != 1 ? 's' : ''}</div>
		    </div>
		    <div class="description">
	            <p>${place.description}<p>
		    </div>
		    </article>`);
	    });
    }
  });
});
