const $ = window.$;
$(document).ready(function () {
  let listCheck = [];
  const indexList;
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      console.log('checkVal  ', $(this).attr('data-id'));
      listCheck.push($(this).attr('data-id'));
    } else {
      console.log('descheckVal  ', $(this).attr('data-id'));
      indexList = listCheck.indexOf($(this).attr('data-id'));
      (indexList > -1) ? listCheck.splice(indexList, 1);
    }
    console.log('List  ', listCheck);
  });
});
