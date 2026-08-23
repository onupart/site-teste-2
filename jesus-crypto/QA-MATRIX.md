# Universo Jesus Crypto — Matriz de QA dos portais

Ambiente: STAGING. Indexação bloqueada. Nenhum QR editorial deve ser gerado antes do freeze de URL.

## Baseline técnico automatizado

- P01–P10 + hub: QA estático aprovado.
- Chromium + WebKit: 66 renderizações/interações aprovadas — desktop 1440×900, mobile 390×844 e mobile 320×740.
- Zero overflow horizontal, zero `pageerror` e zero erro de console na matriz final.
- Axe/WCAG 2.0/2.1 A/AA: **0 violações serious/critical em 33 cenários Chromium e 0 em 33 WebKit** no run aprovado após correção de contraste do controle ativo de P08.
- P08: contraste do botão temporal ativo corrigido de 3,33:1 para 5,68:1, preservando o vermelho do portal e usando texto quase-preto.
- Vercel: deploy do head validado em `success`.

| Portal | MVP em código | Áudio externo obrigatório | QA automatizado | QA aparelho | Revisão editorial | URL final | QR editorial |
|---|---|---|---|---|---|---|---|
| P01 | OK | S01: derivado privado pronto; hosting pendente | Aprovado | Pendente | Pendente | Pendente | Bloqueado |
| P02 | OK | Não; WebAudio local opcional | Aprovado | Pendente | Pendente | Pendente | Bloqueado |
| P03 | OK | Não | Aprovado | Pendente | Pendente | Pendente | Bloqueado |
| P04 | OK | Não | Aprovado | Pendente | Pendente | Pendente | Bloqueado |
| P05 | OK | S02: derivado privado pronto; hosting pendente | Aprovado | Pendente | Pendente | Pendente | Bloqueado |
| P06 | OK | Não | Aprovado | Pendente | Pendente | Pendente | Bloqueado |
| P07 | OK | Não | Aprovado | Pendente | Pendente | Pendente | Bloqueado |
| P08 | OK | S04: derivado privado pronto; hosting pendente | Aprovado | Pendente | Pendente | Pendente | Bloqueado |
| P09 | OK | S09: derivado privado pronto; hosting pendente | Aprovado | Pendente | Pendente | Pendente | Bloqueado |
| P10 | OK | S10: derivado privado pronto; hosting pendente | Aprovado | Pendente | Pendente | Pendente | Bloqueado |

## Áudio / preservação

As cinco cópias web de distribuição e o manifesto estão arquivados de forma privada em `04_EXPORTS_PUBLICACAO`, separados dos masters. A pasta continua não compartilhada. Esse estado fecha organização e preservação do derivado, mas **não** equivale a hosting público nem a `public_asset_ready=true`.

## Regras globais

1. Mobile-first e sem login obrigatório.
2. Nenhum portal coleta dados pessoais no MVP.
3. Interações ficam no navegador, salvo decisão futura explicitamente auditada.
4. Masters S01/S02/S04/S09/S10 permanecem privados; só cópias de distribuição entram nos portais.
5. P07 usa apenas cartografia conceitual; não apresenta rota/mina/conflito real.
6. P09 compara teses ficcionais e não solicita voto ou posição política real.
7. P10 preserva a frase final do Livro I e não antecipa a abertura reservada do Livro II.
8. Remover `noindex` apenas no ato deliberado de publicação.
9. Congelar URL antes de gerar QR.
10. Testar QR em pelo menos dois aparelhos após o freeze.
11. QA automatizado não substitui teste em hardware real nem aprovação editorial humana.
