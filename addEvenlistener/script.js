var query_selector_class = document.querySelector('.class')
var button_class = document.querySelector('.button_class')

button_class.addEventListener('click', function(){
        query_selector_class.textContent = ('successfully work')
})


var id_query = document.querySelector('#id_query')
var button_id_query = document.querySelector('#button_id_query')

button_id_query.addEventListener('click', function(){
        id_query.textContent = ('successfully done')
})


var id =document.getElementById('id')
var button = document.getElementById('button_id')

button.addEventListener('click', function(){
        id.textContent ='sucess'
})