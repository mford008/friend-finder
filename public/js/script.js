// $('.submit').on('click', function (event) {
//   event.preventDefault();
//   function validate () {
//     var isValid = true;
//     $('.form-control').each(function () {
//       if ($(this).val() === '') {
//         isValid = false;
//       }
//     });
//     return isValid;
//   }
//   if (validate() === true) {
//     var newFriend = {
//       name: $('#name').val().trim(),
//       picture: $('#picture').val().trim(),
//       scores: [
//         Number($('#question-one').val().trim()),
//         Number($('#question-two').val().trim()),
//         Number($('#question-three').val().trim()),
//         Number($('#question-four').val().trim()),
//         Number($('#question-five').val().trim()),
//         Number($('#question-six').val().trim()),
//         Number($('#question-seven').val().trim()),
//         Number($('#question-eight').val().trim()),
//         Number($('#question-nine').val().trim()),
//         Number($('#question-ten').val().trim())
//       ]
//     };
//
//     var URL = window.location.origin;
//   $.post(URL + '/api/friends', newFriend,
//     function (data) {
//       $("#matchName").text(data.name);
//       $("#matchPic").attr('src', data.picture);
//       $("#resultsModal").modal('toggle');
//       console.log(data.name);
//       $('#name').val('');
//       $('#picture').val('');
//       $('.chosen-select').val('');
//     });
//   } else alert('Please complete all fields');
// });
