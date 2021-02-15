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
    console.log(listCheck);
  });
});
