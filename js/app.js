    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        var ForDropdown = document.querySelector('.for-dropdown');
        var Dropdown = document.querySelector('.dropdown');

        function otworz() {
        Dropdown.style.display = 'block';
        }
       
        function zamknij() {
        Dropdown.style.display = 'none';    
        }
        
        ForDropdown.addEventListener ('mouseover', otworz); 
        ForDropdown.addEventListener ('mouseout', zamknij); 
        

    });