const evento = document.getElementById('send')
const enviarFormulario =() => {

        let numero = document.getElementById('numero').value;
       
        
var win= window.open(`https://wa.me/54${numero}?text=App:%20 
https://bit.ly/3FczYF9`,'_blank');       
//
}
evento.addEventListener('click', enviarFormulario)



//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Please read this great article: ',
            url: 'https://bit.ly/3FczYF9'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("The current browser does not support the share function. Please, manually share the link")
    }
});




 function modal_05() {
    Swal.fire({
        html: '<h3 class="bm">Black Momets</h3>',
        imageUrl: 'https://res.cloudinary.com/lhuis/image/upload/v1666754485/iconos/fkppmxoe9qs9xhggmzcc.png',
       //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
        background:'linear-gradient(#000,#000)',
        
    })
 }
 