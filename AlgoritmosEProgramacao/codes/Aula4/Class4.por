programa {
    
	funcao inicio() {

		exercise2()
	}
	
	funcao exercise1() {
	    
	    inteiro num
	    
	    escreva("Digite um numero: ")
		leia(num)
		
		se (num < 0) { 
		    escreva(num, " é menor que 0")
		} senao se (num == 0) { 
		    escreva(num, " é igual a 0")
		} senao { 
		    escreva(num, " é maior que 0")
		}
	}
	
	funcao exercise2() {
	    inteiro num1, num2, num3
	    
	    escreva("Digite o primeiro valor: ")
		leia(num1)
		
		escreva("Digite o segundo valor: ")
		leia(num2)
		
		escreva("Digite o terceiro valor: ")
		leia(num3)
	    
	    
	    se (num1 > num2 e num1 > num3) { 
	        escreva(num1, " é o maior dos 3")   
	    } senao se (num2 > num1 e num2 > num3) { 
	        escreva(num2, " é o maior dos 3")
	    } senao se(num3 > num1 e num3 > num2) { 
	        escreva(num3, " é o maior dos 3")
	    } senao { 
	        escreva("erro")
	    }
	}
	
	funcao exercise3() {
	}
	
	funcao exercise4() {
	}
	
	funcao exercise5() {
	}
	
	funcao exercise6() {
	}
	

}
