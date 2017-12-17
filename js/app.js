'use strict';  
console.log(menu.style);
document.addEventListener('DOMContentLoaded', function() {
      
  var Dropdown = document.querySelector('.dropdown');           
  var ForDropdown = document.querySelector('.for-dropdown');         
               
      function otworz() {
    Dropdown.style.display = 'block';
    }
    
    function zamknij() {
    Dropdown.style.display = 'none';
        console.log('czy dziala');
    }
    
    ForDropdown.addEventListener('mouseover', otworz);
    ForDropdown.addEventListener('mouseout', zamknij);
          
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });