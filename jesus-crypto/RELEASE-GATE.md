# Universo Jesus Crypto — Gate de release dos portais P01–P10

Ambiente atual: **STAGING**. Nenhum item abaixo autoriza merge automático ou impressão de QR.

## Gate A — integridade técnica
- P01–P10 existentes e alcançáveis pelo hub.
- viewport mobile presente; um H1 por portal.
- sem dependência obrigatória de scripts externos.
- interações sem formulários ou coleta de dados pessoais no MVP.
- `robots.txt` e `X-Robots-Tag` mantendo staging fora de indexação.
- QA estático automatizado aprovado.
- QA cross-browser automatizado aprovado em Chromium e WebKit: hub + P01–P10 em desktop 1440×900, mobile 390×844 e mobile 320×740.
- matriz final: 66 renderizações/interações aprovadas — 33 Chromium + 33 WebKit.
- zero overflow horizontal, zero `pageerror` e zero erro de console na matriz final de 23/08/2026.
- a primeira execução WebKit detectou overflow tipográfico nos H1 de P02, P04 e P05 em 390/320 px; os três títulos foram corrigidos sem alteração narrativa ou funcional e a matriz completa passou na repetição.
- screenshots das 66 renderizações geradas como artefatos do GitHub Actions; amostragem visual das telas críticas P02/P04/P05 em 320/390 px conferida após a correção.
- manifesto SHA-256 de release inclui 28 inputs críticos: hub, 10 HTMLs, 10 manifests individuais, registry, documentos de governança, manifesto de áudio, `robots.txt` e `vercel.json`.

## Gate B — integridade narrativa
- conferência de consistência canônica e editorial automatizável executada sobre P01–P10;
- cada portal cumpre seu brief canônico sem simplesmente repetir Livro I/Companion;
- P06 não ranqueia pessoas;
- P07 explicita cartografia conceitual e não apresenta rotas/minas/conflitos como dados reais;
- P09 trabalha apenas com teses/dossiê ficcionais e não solicita voto político real;
- P10 preserva “A cidade continuou existindo sem pedir permissão ao mapa.” e não usa a abertura reservada do Livro II;
- revisão editorial humana final **ainda pendente**; este gate não deve ser considerado fechado antes dessa aprovação.

## Gate C — áudio
Aplicável somente a P01, P05, P08, P09 e P10.
- cópia web derivada e validada a partir do master privado;
- cópia pública própria da faixa presente no hosting em `assets/`;
- identidade, duração, codec e SHA-256 conferidos contra o manifesto de distribuição;
- reprodução sem login aprovada;
- master do Drive continua privado;
- origem de contingência, quando houver, não é destino do QR.

Estado em 23/08/2026: as cinco cópias web 128 kbps estão preparadas, validadas, hashadas e arquivadas em pacote operacional privado no Drive; o upload/hosting público ainda está pendente.

## Gate D — aparelho físico
O QA automatizado Chromium/WebKit em desktop, 390 px e 320 px foi aprovado, mas não substitui teste em hardware real. Testar ao menos:
- Android/Chrome;
- iPhone/Safari;
- desktop Chrome/Edge ou Safari;
- navegação por teclado/foco;
- áudio onde aplicável;
- legibilidade a 320–390 px de largura;
- ausência de overflow horizontal e botões inacessíveis.

## Gate E — publicação
- definir domínio/URL permanente;
- publicar versão candidata sem `noindex` somente no ambiente final;
- validar redirecionamentos e política de cache;
- congelar URL;
- gerar QR editorial apontando ao portal;
- escanear QR em ao menos dois aparelhos;
- registrar hash/versão/data da publicação na Central de Produção.

## Estados permitidos
- `Teste`: staging funcional, ainda sem todos os gates.
- `Publicado`: somente após A+B+D+E e, quando aplicável, C.

Nenhum portal deve saltar diretamente de `Teste` para impressão de QR sem o freeze da URL.
