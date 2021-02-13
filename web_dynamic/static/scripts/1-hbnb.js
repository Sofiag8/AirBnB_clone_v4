const $ = window.$;
$(document).ready(function () {
  const listCheck = [];
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      console.log('checkVal  ', $(this).attr('data-id'));
      listCheck.push($(this).attr('data-id'));
    } else {
      console.log('descheckVal  ', $(this).attr('data-id'));
      listCheck.removeItem$($(this).attr('data-id'));
    }
    console.log('List  ', listCheck);
  });
});
