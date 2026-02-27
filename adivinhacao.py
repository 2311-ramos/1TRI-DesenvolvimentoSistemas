# importaçao da biblioteca 
import random
# sorteio do numero aleatorio 
numero = random.randint (0,10)
#chute
print(numero)

tantativas = 1
while (tentativas <=3):
   chute = int(input("digite o seu chute (0 a 10):"))

    if chute == numero:
        print("parabens, voce é o bonzao mesmo")
        break
    else:
        print("Errou :c")
    tentativas = tentativas + 1
print("### fim do jogo###")