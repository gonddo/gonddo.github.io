FormSubmit = function() {
  function submitForm() {
    var form = document.getElementById('gnd-retailer-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return
    }

    var formData = new FormData(form)
    const url = "http://localhost:3000/public/request_invite";
    form.submit()

    $.ajax({
      url: url,
      type: "POST",
      crossDomain: false,
      headers: { 'Access-Control-Allow-Origin': url },
      data: formData,
      processData: false
    }).done(function(msg) {
      console.log(msg)
    }).fail(function(error) {
      $("#gnd-retailer-form-registered-user").addClass("gnd-already-registered-error")
    });
  }

  return {
    submitForm: submitForm
  }
}();

ShowRelatedFields = function(){
  const storeType = [null, "physical_store", "online_store", "physical_and_online", "reseller"];

  function toggleFields(selectedItem) {
    var currentStoreType = storeType[selectedItem.selectedIndex];
    var customerProfile = document.getElementById('retailer_option');
    currentStoreType == "reseller" ? customerProfile.value = "reseller" : customerProfile.value = "retailer";

    switch (currentStoreType) {
      case "physical_store":
        showField("customer-store");
        hideField("customer-website");
        break;
      case "online_store":
        showField("customer-website");
        hideField("customer-store");
        break;
      case "physical_and_online":
        showField("customer-store");
        showField("customer-website");
        break;
      default :
        hideField("customer-store");
        hideField("customer-website");
    }
  }

// private

  function showField(fieldToShow) {
    document.getElementById(fieldToShow).classList.remove("gnd-retailer-conditional-form-field");
    document.getElementById(fieldToShow).required = true;
    document.getElementById(fieldToShow).disabled = false;
  }

  function hideField(fieldToHide) {
    document.getElementById(fieldToHide).value = "";
    document.getElementById(fieldToHide).classList.add("gnd-retailer-conditional-form-field");
    document.getElementById(fieldToHide).required = false;
    document.getElementById(fieldToHide).disabled = true;
  }

  return {
    toggleFields: toggleFields
  }
}();

new Vue({
  el: '#gnd-retailer-form',
  data: {
    statesData: statesAndCitiesData
  }
})
