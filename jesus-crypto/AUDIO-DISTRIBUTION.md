# Universo Jesus Crypto — Contrato de distribuição sonora dos portais

Status: STAGING. Este documento separa os masters privados das cópias públicas de distribuição.

## Regra central

O QR editorial aponta sempre para o portal, nunca diretamente para MP3, Google Drive ou Suno. Os masters do Drive permanecem privados e imutáveis. O portal recebe somente uma cópia pública de distribuição, com nome estável dentro de `assets/`.

| Ponte | Master canônico | Arquivo público esperado no portal | Origem pública de contingência verificada | Estado |
|---|---|---|---|---|
| P01 ↔ S01 | S01 — Ranking Não Mede Sangue.mp3 | `p01/assets/s01-ranking-nao-mede-sangue.mp3` | `https://suno.com/song/7bc96879-7be3-49c4-9fb3-a9d78cf58829` | cópia pública pendente |
| P05 ↔ S02 | S02 — Sistema não responde... Consciência.mp3 | `p05/assets/s02-sistema-nao-responde-consciencia.mp3` | `https://suno.com/song/807decda-1e91-4c4e-8a53-7ce9f036c3e4` | cópia pública pendente |
| P08 ↔ S04 | S04 — Respirar.mp3 | `p08/assets/s04-respirar.mp3` | `https://suno.com/song/c536282d-0cc5-409a-92d3-ef2d367333f4` | cópia pública pendente |
| P09 ↔ S09 | S09 — #Movimento.mp3 | `p09/assets/s09-movimento.mp3` | não verificada | cópia pública pendente |
| P10 ↔ S10 | S10 — Pela Frente.mp3 | `p10/assets/s10-pela-frente.mp3` | não verificada | cópia pública pendente |

## Controle de identidade

- `Moviment'Ação`, encontrada em catálogo de playlist, **não deve ser tratada como S09** sem decisão/correspondência documental explícita. O master canônico é `S09 — #Movimento.mp3`.
- Para S10, nenhuma página pública de origem foi confirmada na auditoria atual. O master canônico é `S10 — Pela Frente.mp3`.
- Fallback Suno é apenas contingência de staging e não substitui a cópia pública própria do portal.

## Gate do arquivo público

Antes de adicionar cada MP3 de distribuição:

1. confirmar identidade/título contra o master canônico;
2. conferir início/fim e ausência de silêncio acidental;
3. conferir loudness e metadados;
4. usar exatamente o nome previsto neste documento;
5. testar reprodução sem login em Android/iOS e desktop;
6. manter o master do Drive privado;
7. só então considerar a camada sonora aprovada para freeze do portal.
