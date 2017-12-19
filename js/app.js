'use strict';  

document.addEventListener('DOMContentLoaded', function() {
    
    
// 1 zadanie 
    
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
      
 // 2 zadanie   
    
  var buttons = document.querySelectorAll('.read-more');

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

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }
        
        
// 3 zadanie 
        
        
            window.addEventListener('scroll', function() {
      console.log('działa przy scrollu');
    });
        
    var menu = document.querySelector('.navbar');
        
    menu.style.borderBottom = '1px solid #7f7f7f';
        
        
  

// 4 zadanie

  var backToTopBtn = document.querySelector('.back-to-top');

  backToTopBtn.addEventListener('click', function() {
    window.scroll( 0, 0 );
  });
    
    
// 5 zadanie
    
    var items = document.querySelectorAll('.slider li');
    var dots = document.querySelectorAll('.dot');
    
    var dot1 = document.getElementById('dot1');
    var dot2 = document.getElementById('dot2');                                   
    var dot3 = document.getElementById('dot3');
    
    dot1.addEventListener('click', function() {
         for (var i = 0; i < items.length; i++) {
            dots[i].classList.remove('active');
            items[i].classList.remove('visible');
    };
        
      this.classList.add('.active');
      items[0].classList.add('visible');
      });
    
    dot2.addEventListener('click', function() {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('visible');
      dots[i].classList.remove('active');
    };
    this.classList.add('active');
    items[1].classList.add('visible');
});

    dot3.addEventListener('click', function() {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('visible');
      dots[i].classList.remove('active');
    };
    this.classList.add('active');
    items[2].classList.add('visible');
  });

    
  // zadanie 6  
    
    
    
    
    
    
    
    
    
    
    //to musi zostac
 });
    

