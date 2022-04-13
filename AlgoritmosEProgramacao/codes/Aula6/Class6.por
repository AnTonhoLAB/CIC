programa {
	funcao inicio() {
		inteiro contador = 1
	    inteiro total = 3
		 
		real numero, media, soma = 0.0
		
		enquanto(contador <= total) { 
		    limpa() 
		    escreva("Digite o ", contador, "° número: ")
		    leia(numero)
		    
		    soma = soma + numero
		    contador = contador + 1
		}
		
		escreva("soma total = ", soma)
		escreva("\nMédia = ", soma / total)
	}
}

