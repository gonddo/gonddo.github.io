FormSubmit = function(profile) {
  function submitForm(profile) {
    var currentForm = {retailer: 'gnd-retailer-form', supplier: 'gnd-supplier-form'}[profile];
    var form = document.getElementById(currentForm);
    if (!form.checkValidity()) {
      form.reportValidity();
      return
    };

    var formData = new FormData(form);
    var dataObjects = Object.fromEntries(formData);

    $.ajax({
      type: "POST",
      url: form.action,
      data: dataObjects,
      success: (response) => {
        window.location.href = response.success.url;
      },
      error: (response) => {
        $("#gnd-form-error-msg").html("");
        response.responseJSON.error.forEach(function(error, index) {
          if (index > 0) {
            error = ", " + error
          }
          $("#gnd-form-error-msg").append(error);
        });
      },
    });
  }

  return {
    submitForm: submitForm
  }
}();
