function msg(){
   var name = document.getElementById('name');
   var email = document.getElementById('email');
   var number = document.getElementById('number');
   var message = document.getElementById('message');
   const success = document.getElementById('success');
   const danger = document.getElementById('danger');

    if(name.value === '' || email.value === '' || number.value ==='' || message.value ===''){
       danger.style.display = 'block';
    }
    else{
       setTimeout(() => {
           name.value = '';
           email.value = '';
           number.value = '';
           message.value = '';
       }, 2000);

       success.style.display = 'block';

    }

    setTimeout(() => {
       danger.style.display = 'none';
       success.style.display = 'none';
    },6000);
    
   

}