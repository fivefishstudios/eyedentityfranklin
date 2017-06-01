// NOTE: Suppress the "variable" is defined but never used warning
/* exported myApp */

// Materialize CSS support 
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy({
    scrollOffset: 20
  });
});
   

// Vue App    
Vue.component('user-review', {
  // declare properties array for this component
  props: ['name','review','photo'],

  template: '<div class="col s12 m6 l4">' + 
              '<div class="card">' + 
                '<div class="card-content ">' + 
                  '<p>{{ review }}</p>' + 
                '</div>' + 
                '<div class="card-action">' + 
                  '<img :src="photo" class="circle photo">{{ name }}' + 
                '</div>' + 
              '</div>' + 
            '</div>'
 
});

var myApp = new Vue({

  el: '#testimonials'

});
