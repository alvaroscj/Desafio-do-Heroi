# 📘 README — Scripts Python Básicos (Interação via Terminal)

Este repositório reúne **três scripts simples em Python** para prática de entrada/saída no terminal, tipos de dados e controle de fluxo:

1. **Calculadora Interativa** (`calculadora.py`) — soma, subtração, multiplicação e divisão (com tratamento de divisão por zero).  
2. **Concatenação de Informações** (`concatenar_info.py`) — lê duas entradas e as concatena com espaço.  
3. **Repetição de Texto** (`repetir_texto.py`) — imprime uma string *n* vezes, cada uma em uma nova linha.

> Indicados para aulas introdutórias, estudos individuais ou demonstrações de I/O em Python.

---

## 📂 Estrutura de Pastas

```txt
.
├─ calculadora.py
├─ concatenar_info.py
├─ repetir_texto.py
└─ README.md
```

---

## ✅ Requisitos

- **Python 3.8+** (recomendado 3.10 ou superior)  
- Sistema operacional: Windows, macOS ou Linux  
- Terminal/Prompt de comando

> Verifique sua versão do Python:
```bash
python --version
# ou
python3 --version
```

---

## 🚀 Como executar

> Em alguns sistemas, troque `python` por `python3`.

### 1) Calculadora Interativa (`calculadora.py`)

```bash
python calculadora.py
```

**O que o script faz:**  
- Solicita **dois números** (float).  
- Solicita a **operação**: `+`, `-`, `*`, `/`.  
- Exibe o **resultado** ou mensagem de erro (ex.: divisão por zero).

---

### 2) Concatenar Informações (`concatenar_info.py`)

```bash
python concatenar_info.py
```

**O que o script faz:**  
- Lê **duas strings** e imprime a **concatenação com espaço**.

---

### 3) Repetir Texto (`repetir_texto.py`)

```bash
python repetir_texto.py
```

**O que o script faz:**  
- Lê uma **string** e um **inteiro n**.  
- Imprime a string **n** vezes, **cada repetição em nova linha**.

---

## 🧪 Casos de Teste Manuais Sugeridos

### Calculadora
- `5 + 7` → `12`  
- `10 - 3.5` → `6.5`  
- `2 * 4` → `8`  
- `9 / 3` → `3.0`  
- `9 / 0` → `Erro: divisão por zero.`  
- Operação inválida (ex.: `%`) → `Operação inválida.`

### Concatenação
- `("UFMT", "Cuiabá")` → `UFMT Cuiabá`  
- Strings com espaços extras ainda serão preservadas.

### Repetição
- Texto: `Oi` | Número: `3` → imprime 3 linhas com `Oi`  
- Número `0` → imprime nada  
- Número negativo → imprime nada (comportamento atual: multiplica string por número negativo resulta em vazio)

---

## 🛠️ Dicas e Melhorias (opcionais)

- **Validação de entrada**: tratar `ValueError` ao converter strings para `float`/`int`.  
- **Loop até sair**: envolver a calculadora em um loop com opção `q` para encerrar.  
- **Internacionalização**: separar mensagens de interface para facilitar tradução.  
- **Testes automatizados**: usar `pytest` com `capsys`/`monkeypatch` para simular I/O.

---

## 🧰 Ambiente Virtual (opcional)

Embora estes scripts **não dependam de bibliotecas externas**, você pode usar `venv`:

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS/Linux
source .venv/bin/activate
```

Para sair:
```bash
deactivate
```

---

## 🤝 Contribuindo

1. Faça um fork do repositório  
2. Crie uma branch: `git checkout -b feat/minha-melhoria`  
3. Commit: `git commit -m "feat: adiciona validação de entrada"`  
4. Push: `git push origin feat/minha-melhoria`  
5. Abra um Pull Request

---

## 📜 Licença

Este projeto pode ser distribuído sob a licença **MIT** (ou ajuste conforme sua preferência).

---

## ❓ FAQ

**Posso usar vírgula como separador decimal?**  
O Python espera `.` por padrão (`3.14`). Para suportar vírgula, converta:  
```python
valor = float(input("Número: ").replace(",", "."))
```

**Posso colar os scripts no Google Colab?**  
Sim, mas estes exemplos foram feitos para **rodar no terminal**. No Colab, use `input()` normalmente pelo console do notebook.
 
