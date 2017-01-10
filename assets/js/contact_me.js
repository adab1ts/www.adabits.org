// Contact Form Scripts

(function($) {
    function validateForm($form) {
      var isValid = true;

      $form.find('input,textarea').filter('[required]:visible').each(function() {
        var field = $(this);
        field.attr('aria-invalid', null);

        var $formGroup = field.parent();
        $formGroup.removeClass('has-error');

        if ($.trim(field.val()) === '') {
          field.attr('aria-invalid', true);
          $formGroup.addClass('has-error');
          isValid = false;
        }
      });

      return isValid;
    }

    $('#contactForm').submit(function(e) {
        e.preventDefault();
        var $form = $(this);
        var isValid = validateForm($form);

        if (isValid) {
          var messages = {
            success: 'El teu missatge ha estat enviat amb èxit. En breu ens posarem en contacte amb tu.',
            error: 'El teu missatge no s\'ha pogut entregar. Si us plau, torna-ho a provar en uns minuts.'
          };
          $.ajax({
              url: '//formspree.io/info@adabits.org',
              method: 'POST',
              data: $form.serialize(),
              dataType: 'json',
              success: function(data) {
                  // Success message
                  $('#sentMessage').html("<div class='alert alert-success'>");
                  $('#sentMessage > .alert-success').append("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                  $('#sentMessage > .alert-success').append("<strong>" + messages.success + "</strong>");
                  $('#sentMessage > .alert-success').append('</div>');
                  //clear all fields
                  $form.trigger('reset');
              },
              error: function(err) {
                  // Fail message
                  $('#sentMessage').html("<div class='alert alert-danger'>");
                  $('#sentMessage > .alert-danger').append("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                  $('#sentMessage > .alert-danger').append("<strong>" + messages.error + "</strong>");
                  $('#sentMessage > .alert-danger').append('</div>');
                  //clear all fields
                  $form.trigger('reset');
              }
          });
        }
    });

    /*When clicking on Full hide fail/success boxes */
    $('#name').focus(function() {
        $('#sentMessage').html('');
    });
})($);
