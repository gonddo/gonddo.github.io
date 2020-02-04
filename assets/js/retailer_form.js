ShowRelatedFields = function(){
  const storeType = [null, "physical_store", "online_store", "physical_and_online", "reseller"];

  function toggleFields(selectedItem) {
    var currentStoreType = storeType[selectedItem.selectedIndex];

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
  }

  function hideField(fieldToHide) {
    document.getElementById(fieldToHide).classList.add("gnd-retailer-conditional-form-field");
  }

  return {
    toggleFields: toggleFields
  }
}();
