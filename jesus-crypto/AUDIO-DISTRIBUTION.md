# Universo Jesus Crypto — Contrato de distribuição sonora dos portais

Status: STAGING. Este documento separa os masters privados das cópias públicas de distribuição.

## Regra central

O QR editorial aponta sempre para o portal, nunca diretamente para MP3, Google Drive ou Suno. Os masters do Drive permanecem privados e imutáveis. O portal recebe somente uma cópia pública de distribuição, com nome estável dentro de `assets/`.

## Estado das cinco pontes

As cinco cópias web foram derivadas dos masters canônicos em 23/08/2026, com os masters preservados. Padrão técnico da derivação: MP3 CBR 128 kbps, 48 kHz, estéreo, sem capa embutida. Todas foram decodificadas integralmente com FFmpeg sem erro e tiveram duração conferida contra o master.

| Ponte | Master canônico | Arquivo público esperado no portal | Origem pública de contingência verificada | Estado atual |
|---|---|---|---|---|
| P01 ↔ S01 | S01 — Ranking Não Mede Sangue.mp3 | `p01/assets/s01-ranking-nao-mede-sangue.mp3` | `https://suno.com/song/7bc96879-7be3-49c4-9fb3-a9d78cf58829` | cópia web preparada; hosting pendente |
| P05 ↔ S02 | S02 — Sistema não responde... Consciência.mp3 | `p05/assets/s02-sistema-nao-responde-consciencia.mp3` | `https://suno.com/song/807decda-1e91-4c4e-8a53-7ce9f036c3e4` | cópia web preparada; hosting pendente |
| P08 ↔ S04 | S04 — Respirar.mp3 | `p08/assets/s04-respirar.mp3` | `https://suno.com/song/c536282d-0cc5-409a-92d3-ef2d367333f4` | cópia web preparada; hosting pendente |
| P09 ↔ S09 | S09 — #Movimento.mp3 | `p09/assets/s09-movimento.mp3` | não verificada | cópia web preparada; hosting pendente |
| P10 ↔ S10 | S10 — Pela Frente.mp3 | `p10/assets/s10-pela-frente.mp3` | não verificada | cópia web preparada; hosting pendente |

## Integridade das cópias web

| Arquivo | Duração | Bytes | SHA-256 |
|---|---:|---:|---|
| `s01-ranking-nao-mede-sangue.mp3` | 235.032 s | 3.761.009 | `88e2f63dc6455bcdab2a7d0023e5711afb461aa2387f792a5a84caf5e9593dbc` |
| `s02-sistema-nao-responde-consciencia.mp3` | 225.024 s | 3.600.894 | `9aea3350711e1b8dfa88443ae43332ee6d5eb8b989e5e5dcd3ce070ea8dbc8c1` |
| `s04-respirar.mp3` | 245.520 s | 3.928.801 | `2d2fa71d83105660771c08efc213424b8e7a88975837cff629f6788279e09596` |
| `s09-movimento.mp3` | 306.744 s | 4.908.387 | `100547778f5b7521329621bae5cd9d189530e638bbf3d752de9bdd2d007717e3` |
| `s10-pela-frente.mp3` | 283.320 s | 4.533.604 | `8c76a3ffbfeff2612417eb52ca02d082441ecb2ffa103b7eef505f91083bdbc5` |

O mesmo conjunto está registrado de forma máquina-legível em `AUDIO-WEB-MANIFEST.json`.

## Controle de identidade

- `Moviment'Ação`, encontrada em catálogo de playlist, **não deve ser tratada como S09** sem decisão/correspondência documental explícita. O master canônico é `S09 — #Movimento.mp3`.
- Para S10, nenhuma página pública de origem foi confirmada na auditoria atual. O master canônico é `S10 — Pela Frente.mp3`.
- Fallback Suno é apenas contingência de staging e não substitui a cópia pública própria do portal.
- O estado `cópia web preparada` não equivale a `public_asset_ready=true`; esse estado só muda depois do upload e teste de reprodução no hosting público.

## Gate do arquivo público

Antes de aprovar cada MP3 de distribuição:

1. confirmar identidade/título contra o master canônico;
2. conferir início/fim e ausência de silêncio acidental;
3. conferir codec, duração, metadados e SHA-256;
4. usar exatamente o nome previsto neste documento;
5. publicar no hosting do portal sem expor o master privado;
6. testar reprodução sem login em Chromium, Android/iOS e desktop;
7. manter o master do Drive privado;
8. só então marcar `public_asset_ready=true` e considerar a camada sonora aprovada para freeze do portal.
