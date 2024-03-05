# if   / elif     / else
# se   se nao se  se nao
entrada  = input("Você quer 'entrar' ou 'sair'? ")
if entrada == 'entrar':
    print("Você entrou no sistema")
elif entrada == 'sair':
    print("Você saiu do sistema")
else: 
    print("Error! Você não digitou nenhuma das opções")