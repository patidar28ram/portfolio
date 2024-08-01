let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

 window.onscroll = function(){
    efectoHabilidades();
 } 


document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.element');
    console.log(element); // Should not be undefined
    element.classList.add('highlight');
  });
        const myBtn = document.getElementById("submitBtn");
        console.log(myBtn,"form")
        emailjs.send

        myBtn.addEventListener('click', (e) => {
           
            e.preventDefault();
            console.log("first")
            var params={

                 name : document.getElementById('name').value,
                 email : document.getElementById('email').value,
                 phone : document.getElementById('phone').value,
                 subject : document.getElementById('subject').value,
                 message : document.getElementById('message').value
            }
            console.log(params,"params")
   
            emailjs.send('service_1lrphum', 'template_nwzdkd8', params)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully');
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Error sending message. Please try again later.');
            });     });
      



