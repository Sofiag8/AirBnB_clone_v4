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
});
