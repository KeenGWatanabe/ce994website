/* When the user clicks on the button, toggle between hiding and showing the dropdown content */ 
   function toggleDropdown(dropdownId) {
     document.getElementById(dropdownId).classList.toggle("show"); 
   }  
   function filterDropdown(inputId,dropdownId) {
     var input, filter, ul, li, a, i;  
     input = document.getElementById(inputId);  
     filter = input.value.toUpperCase();   
     div = document.getElementById(dropdownId);
     a = div.getElementsByTagName("a");  
     for (i = 0; i < a.length; i++) { 
       txtValue = a[i].textContent || a[i].innerText; 
       if (txtValue.toUpperCase().indexOf(filter) > -1) {   
         a[i].style.display = "";   
       } else { 
         a[i].style.display = "none";    
       }   } }


function toggleMe(a){
  var e=document.getElementById(a);
  if(!e)return true;
  if(e.style.display=="none"){
    e.style.display="block"
  } else {
    e.style.display="none"
  }
  return true;
}