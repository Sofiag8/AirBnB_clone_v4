$(document).ready(function () {
  const listCheck = [];
  const indexList = [];
  $('input:checkbox').click(function () {
    if ($(this).is(':checked')) {
      console.log('checkVal  ', $(this).attr('data-id'));
      listCheck.push($(this).attr('data-id'));
    } else {
      console.log('descheckVal  ', $(this).attr('data-id'));
      indexList = listCheck.indexOf($(this).attr('data-id'));
      listCheck.splice(indexList, 1);
    }
    console.log('List  ', listCheck);
  });
});
