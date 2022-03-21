 programa {

	funcao inicio() {
		
		real nota1, nota2, nota3, nota4
		inteiro faltas
		cadeia nome

		escreva("Digite seu nome: ")
		leia(nome)
		
		escreva("Digite a primeira nota: ")
		leia(nota1)

		escreva("Digite a segunda nota: ")
		leia(nota2)

		escreva("Digite a terceira nota: ")
		leia(nota3)

		escreva("Digite a quarta nota: ")
		leia(nota4)
		
		escreva("Digite nº faltas: ")
		leia(faltas)
		
		real media
		
		media = (nota1 + nota2 + nota3 + nota4) / 4
		
		escreva("media:", media, "\n")
		
		escreva(nome, " foi ")
		se (faltas > 3) { 
		    escreva("Reprovado por falta.")
		} senao { 
			se (media >= 7) {
		        escreva("aprovado \n")
		    } se (media >= 6 e media < 7) {
		        escreva("Recuperação\n")
	    	} se (media < 6) {
		        escreva("reprovado \n")
		    }
		}
	}
}

