$('.submit').click((e)=>{
    e.preventDefault();

    let email = document.querySelector('.email').value;
    if(email.length > 5 && email.includes('@') && email.includes('.')){
        document.querySelector('.email').value = "";
        document.querySelector('.message').innerText="";
        document.querySelector('.submit').innerText = "Sent !";
        document.querySelector('button').style.backgroundColor="#B3FFE2";
        
    }
    else{
        document.querySelector('.message').innerText="Oops! Please check your email";
        document.querySelector('.submit').innerText = "Request access";
        document.querySelector('button').style.backgroundColor="var(--primary)";
    }
})

//MEDIA QUERY MOBILE
function checkSize(){
    const viewportWidth = $(document).width();
    if ( viewportWidth < 481){
        // console.log('mobile');
        MediaQuery();
     }
    function MediaQuery(){
        const logoContainer = document.createElement('DIV');
        const logo = document.querySelector('.logo');
        const hero = document.querySelector('.wrapper').children[1];
        const heroChildren = hero.children;

        console.log(heroChildren);
        
        logoContainer.classList.add('logo-container');
        logoContainer.appendChild(logo);
        document.querySelector('.wrapper').prepend(logoContainer);

        const p = document.createElement('P');
        p.innerText = "Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!"

        for(i=0; i<heroChildren.length;i++){
            document.querySelector('.wrapper').append(heroChildren[i]);
        }
        document.querySelector('.wrapper').removeChild(hero);
        document.querySelector('.wrapper').insertBefore(p,document.querySelector('form'));
        console.log(document.querySelector('.wrapper'));

        document.querySelector('.wrapper').append(document.querySelector('.submit'));
        document.querySelector('p').append(document.querySelector('.socials'));
        
    }
}
checkSize();





