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
<<<<<<< HEAD
    console.log(listCheck);
=======
    const list = [];
    for (name in listCheck) {
	list.push(listCheck[name]);
    }
    $('div.amenities h4').text(list.join(', '));
>>>>>>> f21f2dcc949f8d63d5a6cdb2f1474937f8a58c44
  });
});
