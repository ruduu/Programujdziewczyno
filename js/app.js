    'use strict';

document.addEventListener('DOMContentLoaded', function(){
   
    var ForDropdown = document.querySelector('.for-dropdown');
    var Dropdown = document.querySelector ('.dropdown');

    function otworz() {
    Dropdown.style.display = 'block';
    }
    
    function zamknij() {
    Dropdown.style.display = 'none';
    }
    
    ForDropdown.addEventListener('mouseover', otworz);
    ForDropdown.addEventListener('mouseout', zamknij);
  
    
    
    
    var buttons = document.querySelectorAll('.read-more');

    
//buttons[0].addEventListener('click', function() {
//      var textArea = this.previousElementSibling;
//      textArea.style.display = 'block';
//      
//     console.log(this.innerHTML); 
//    });
//  
//        buttons[0].addEventListener('click', function() {
//      var textArea = this.previousElementSibling;
//      textArea.style.display = 'block';
//      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
//    });
    
    

    
    
     function showHide() {
      var textArea = this.previousElementSibling;
    
      if (textArea.style.display === 'none' || textArea.style.display === '') {
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }
    
     }
    
    
          for (var i = 0; i <= buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
          }
    
});
