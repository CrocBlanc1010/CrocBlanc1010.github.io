function bouton1() {
	document.getElementById('bouton2').style.visibility = 'visible';
	paragraphe=document.querySelector("#texte1")
	paragraphe.setAttribute("style","color:black");
	paragraphe.style.fontFamily = " anime_ace, Times, serif"
	paragraphe.style.fontSize = "18px";
	paragraphe.innerHTML="Je vous entends déjà vous lamenter, mais croyez-moi, mieux vaut atterrir ici plutôt que de passer le reste de l'éternité à courir tout nu dans les nuages. Je me présente, je suis le majordome des enfers. Je suis ici pour vous expliquer la suite de votre parcours. Vous allez désormais travailler afin de faire tourner le monde des enfers. Nous vous avons sélectionné un métier en fonction de vos capacités et de ce dont nous avions besoin. Et non vous n'avez pas le choix, on est pas sur Terre ici. Je suis aussi ici dans un autre objectif: mettre des bâtons dans les roues de notre gouvernement aussi corrompu qu'intolérant. Mais bon au moins ici il a le mérite de ne pas tenter de faire croire qu'il est au service du peuple alors qu'il ne sert que ses propres intérêts. N'hésitez pas à survoler les petits motifs à l'effigie de ma tête afin que je vous fournisse des informations complémentaires de mon cru. Je vais désormais vous laisser l'accès à la présentation de votre future éternité."
	document.getElementById('bouton1').style.visibility='hidden';
}
var cursus1=0
var cursus2=0

function question1(){
	saisie=document.querySelector("#in1")
	numero=saisie.value
	paragraphe=document.querySelector("#chouette1")
	paragraphe.innerHTML="<p><img id='logo' src='image/logo2.png' alt='petite tête de chouette'></p>"
	if(numero==1){
		cursus1=cursus1+2
		}
	else if(numero==2){
		cursus1=cursus1+1
		}
	else if(numero==3){
		cursus2=cursus2+1
		}
	else{
		cursus2=cursus2+2
	}
}

function question2(){
	saisie=document.querySelector("#in2")
	numero=saisie.value
	paragraphe=document.querySelector("#chouette2")
	paragraphe.innerHTML="<p><img id='logo' src='image/logo2.png' alt='petite tête de chouette'></p>"
	if(numero==1){
		cursus2=cursus2+2
		}
	else if(numero==2){
		cursus2=cursus2+1
		}
	else if(numero==3){
		cursus1=cursus1+1
		}
	else{
		cursus1=cursus1+2
	}
}

function question3(){
	saisie=document.querySelector("#in3")
	numero=saisie.value
	paragraphe=document.querySelector("#chouette3")
	paragraphe.innerHTML="<p><img id='logo' src='image/logo2.png' alt='petite tête de chouette'></p>"
	if(numero==1){
		cursus1=cursus1+2
		}
	else if(numero==2){
		cursus1=cursus1+1
		}
	else if(numero==3){
		cursus2=cursus2+1
		}
	else{
		cursus2=cursus2+2
	}
}

function question4(){
	saisie=document.querySelector("#in4")
	numero=saisie.value
	paragraphe=document.querySelector("#chouette4")
	paragraphe.innerHTML="<p><img id='logo' src='image/logo2.png' alt='petite tête de chouette'></p>"
	if(numero==1){
		cursus1=cursus1+2
		}
	else if(numero==2){
		cursus1=cursus1+1
		}
	else if(numero==3){
		cursus2=cursus2+1
		}
	else{
		cursus2=cursus2+2
	}
}
	
function question5(){
	saisie=document.querySelector("#in5")
	numero=saisie.value
	paragraphe=document.querySelector("#chouette5")
	paragraphe.innerHTML="<p><img id='logo' src='image/logo2.png' alt='petite tête de chouette'></p>"
	para=document.querySelector("#divi1p5")
	if(numero==1){
		para.innerHTML="<p>Mouais, c'est très bien mais c'est pas leur meilleur</p>"
		}
	else if(numero==2){
		para.innerHTML="<p>Plutôt bon choix!</p>"
		}
	else if(numero==3){
		para.innerHTML="<p>N'importe quoi, c'est un morceau de Twisted Sister ça</p>"
		}
	else{
		para.innerHTML="<p>Excellent choix!</p>"
	}
}

function question6(){
	paragraphe=document.querySelector("#chouette6")
	paragraphe.innerHTML="<p><img id='logo' src='image/logo2.png' alt='petite tête de chouette'></p>"
	para=document.querySelector("#divi1p6")
	para.innerHTML="<p>Bon en fait on s'en fiche un peu, c'est pas le plus important</p>"
}

function formation(){
	lien=document.querySelector("#lien")
	if(cursus1>=cursus2){
		lien.href="page1.html"
	}
	else{
		lien.href="page2.html"
	}
}
	