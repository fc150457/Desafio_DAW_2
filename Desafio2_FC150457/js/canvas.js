window.onload = function(){
			//tamao de la canva
			var AnimW = 864, AnimH = 280, derecha = 0; 
			//ancho total de la animacion
			var ancho = AnimW/8; 
			var alto = AnimH/2; 
			
			var curFrame = 0; 
			var frameCount = 8; 
			//posicion en los ejes 'X y 'Y'
			var posx=250, posy=200; 
			
			var srcX; 
			var srcY; 
			//Contexto de la animacion
			var ctx = canvas.getContext("2d");
			//imagen de la animacion
			var img = new Image(); 
			img.src = "character.png";
			//actualiza la animacion
			function act(){
				curFrame = ++curFrame % frameCount; 
				srcX = curFrame * ancho; 
				ctx.clearRect(posx,posy,ancho,alto);	
				srcY = derecha * alto; 
				
			}
			//Dibuja el caracter
			function dibujar(){
				act();
				ctx.drawImage(img,srcX,srcY,ancho,alto,posx,posy,ancho,alto);
			}
			
			setInterval(dibujar,100);
}