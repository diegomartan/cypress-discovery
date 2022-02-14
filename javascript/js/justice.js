       //API
       var justice = ['Supeman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman', 'Cyborg', 'Green Lantern']

       function listaJusticeLeague() {
           
           var ul = document.getElementById('justiceLeague')
           ul.innerHTML = ''

           justice.forEach(function(a) {
               var li = document.createElement('li')
               var text = document.createTextNode(a)
               li.appendChild(text)
               ul.appendChild(li)
              
           })
       }
