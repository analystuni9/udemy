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
    senha = input("Digite sua senha: ")
    if entrada == "e" and senha == "123":
        print("Você entrou no sistema")
    else: 
        print("Senha incorreta tente novamente")
elif entrada == "s":
    print("Saindo do sistema")
else: 
    print("Error! Valor digitado invalido!")
    print("Por favor digite um valor válido!")