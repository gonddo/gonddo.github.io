Vue.component('selectlocation', {
  template:
    '<div>' +
      '<select v-model="statecode" class="gnd-select-input" required name="state">' +
        '<option value="" disabled selected>Estado:</option>' +
        '<option v-for="state in states" :value="state.code">{{ state.name }}</option>' +
      '</select>' +
      '<select class="gnd-select-input" required name="city">' +
        '<option varlue="" disabled selected>Cidade:</option>' +
        '<option v-for="city in cities()" :value="city">{{ city }}</option>' +
      '</select>' +
    '</div>',
  props: ['states', 'value'],
  data() {
    return {
      statecode: ''
    }
  },
  methods: {
    cities() {
      var statecode = this.statecode;
      selectedState = this.states.find(function(state) {
        if(state.code == statecode) { return true }
      })
      if(selectedState){ return selectedState.cities }

      return [];
    }
  }
})
