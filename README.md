# EVOLUA

> Projeto desenvolvido para a **Unidade 3** da disciplina de Desenvolvimento Web I do curso de Tecnologia da Informação.

**Tema:** Plataforma de serviços de treino e alimentação saudável.
---

## 🎯 Sobre o Projeto

A EVOLUA é uma aplicação web desenvolvida para auxiliar o usuário a organizar sua rotina fitness. A plataforma permite a criação de planos personalizados de treino e alimentação, além de oferecer dicas e sugestões.

Para esta entrega (Unidade 3), o projeto evoluiu de uma aplicação estática para um **sistema dinâmico com persistência de dados**, implementando todas as operações de **CRUD (Criar, Ler, Atualizar e Deletar)** através de uma API, conforme os requisitos.

---

## ✨ Funcionalidades Principais (Unidade 3)

A aplicação agora suporta o gerenciamento completo das seguintes entidades:

-   **Gerenciamento de Usuários:** Cadastro, login, atualização de perfil e exclusão de conta.
-   **Planos de Treino Personalizados:** Criação, visualização, edição e exclusão de rotinas de treino.
-   **Planos de Dieta:** Montagem, consulta, alteração e remoção de planos alimentares.
-   **Assinatura:** Disponibilidade de dois planos para o usuário contratar, assinar e usufruir dos benefícios.
-   **Depoimentos:** Envio, visualização, edição e moderação de depoimentos de usuários.

---

## 🧩 Estrutura de Páginas e Componentes

A aplicação é dividida em duas áreas principais: a **Pública** e a **Privada** (acessível após o login).

### Área Pública
| Página              | Descrição                                         |
| ------------------- | ------------------------------------------------- |
| `index.html`        | Página inicial com destaques e chamada para ação. |
| `login.html`        | Formulário de cadastro e login de usuários.       |
| `depoimentos.html`  | Exibe depoimentos públicos de outros usuários.    |
| `sobre.html`        | Missão da equipe - Quem Somos                     |
| `dieta.html`        | Cards com dicas sobre nutrição e chamada para ação|
| `treinos.html`      | Informação sobre tipos de treino e nivelamento    |
| `planos.html`       | Planos ofertados pela plataforma                  |


### Área Privada (Dashboard do Usuário)
| Página / Componente | Descrição                                                                 |
| ------------------- | ------------------------------------------------------------------------- |
| `perfil.html`       | Painel principal do usuário logado, com resumo de seus planos.            |
| `formTreino.html`   | Exibe e permite ao usuário gerenciar (CRUD) seus planos de treino.        |
| `formDieta.html`    | Exibe e permite ao usuário gerenciar (CRUD) seus planos de dieta.         |
| `formAssinatur.html`| Formulário interativo para criar ou editar um novo plano (treino/dieta).  |
| `formFeedback.html` | Página para o usuário visualizar e atualizar seus dados cadastrais.       |

---

## 👥 Integrantes

-   **Moisés Azevedo Bezerra** – Matrícula: 20220051283
-   **Gislayne Ellen da Silva Soares**

---
