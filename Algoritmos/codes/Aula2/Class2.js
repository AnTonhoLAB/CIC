
/* CLIQUE NO SINAL DE "+", À ESQUERDA, PARA EXIBIR A DESCRIÇÃO DO EXEMPLO
 *  
 * Copyright (C) 2014 - UNIVALI - Universidade do Vale do Itajaí
 * 
 * Este arquivo de código fonte é livre para utilização, cópia e/ou modificação
 * desde que este cabeçalho, contendo os direitos autorais e a descrição do programa, 
 * seja mantido.
 * 
 * Se tiver dificuldade em compreender este exemplo, acesse as vídeoaulas do Portugol 
 * Studio para auxiliá-lo:
 * 
 * https://www.youtube.com/watch?v=K02TnB3IGnQ&list=PLb9yvNDCid3jQAEbNoPHtPR0SWwmRSM-t
 * 
 * Descrição:
 * 
 * 	Este exemplo pede ao usuario que informe dois números. Logo após, 
 * 	calcula e exibe:
 * 	
 * 		a) A soma entre os números
 * 		b) A subtração entre os números
 * 		c) A multiplicação entre os números
 * 		d) A divisão entre os números
 * 
 * Autores:
 * 
 * 	Giordana Maria da Costa Valle
 * 	Carlos Alexandre Krueger
 * 	
 * Data: 01/06/2013
 */
 
programa
{
	funcao inicio()
	{
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

