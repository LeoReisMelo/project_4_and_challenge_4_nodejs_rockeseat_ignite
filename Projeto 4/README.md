# DDD (Domain-driver Design) and Clean Architecture

## Domain - Domínio

- Domain Experts
  - Conversa
- Linguagem ubíqua

- Usuário

  - Cliente
  - Fornecedor
  - Atendente
  - Barman

- Agregados
- Value Objects
- Eventos de domínio
- Subdomínios (Bounded Contexts)
- Entidades
- Casos de uso

# Conceitos

- Aggregate
- WatchedList

## Exemplo

- Order -> OrderItem[]
- Order -> Shipping

- Question -> Attachments

### Criação

- Título
- Conteúdo
- Anexos (3)

### Edição

- Título
- Conteúdo

- Adicionar um novo anexo (create)
- Remover o segundo anexo que tinha sido criado previamente (delete)
- Editar um anexo existente (update)

# Subdomínios

- Core: O que dá dinheiro
- Supporting: Dá suporte para o core funcionar
- Generic: Você precisa, mas não são tão importantes

## Exemplos

### CORE

- Compra
- Catálogo
- Pagamento
- Entrega
- Faturamento

### SUPPORTING

- Estoque

### GENERIC

- Notificações
- Promoções
- Chat
