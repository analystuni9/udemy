# Operadores lógicos
# and (e) or (ou) not (não)
# and - Todas as condições precisam ser
# verdadeiras.
# Se qualquer valor for considerado falso,
# a expressão inteira será avaliada naquele valor
# São considerados falsy (que vc já viu)
# 0 0.0 '' False
# Também existe o tipo None que é
# usado para representar um não valor
# Avaliação de curto circuito
entrada = input("[e]ntrar [s]air: ")
if entrada == "e":
<<<<<<< HEAD:curso_python/exercicio17.py
    senha = input("Digite sua senha: ")
    if senha == "123":
=======
    senha = int(input ("Digite sua senha: "))
    if entrada == "e" and senha == "123" or 123:
>>>>>>> a80445f77d0b6ea3ba5f82aa25b06df20ec58beb:curso_python/aula17.py
        print("Você entrou no sistema")
    else: 
        print("Senha incorreta tente novamente")
elif entrada == "s":
    print("Saindo do sistema")
else: 
    print("Error! Valor digitado invalido!")
    print("Por favor digite um valor válido!")