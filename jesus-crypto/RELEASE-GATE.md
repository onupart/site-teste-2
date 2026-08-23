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
- o primeiro gate Axe/WCAG detectou uma única causa séria: contraste do botão ativo da linha temporal de P08. O texto foi alterado de branco para quase-preto, elevando o contraste sobre o vermelho canônico de 3,33:1 para 5,68:1.
- repetição final Axe/WCAG 2.0/2.1 A/AA: **0 violações serious/critical em 33 cenários Chromium e 0 em 33 WebKit**.
- screenshots e relatórios das 66 renderizações são gerados como artefatos do GitHub Actions.
- manifesto SHA-256 de release inclui os inputs críticos do hub, 10 HTMLs, 10 manifests individuais, registry, documentos de governança, manifesto de áudio, `robots.txt` e `vercel.json`.
- Vercel reporta `success`/`READY` para os heads técnicos de staging validados.

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
- as cinco derivações web e seu manifesto estão arquivados de forma privada, separados dos masters;
- as cinco derivações também possuem cópias privadas individuais de staging para rastreabilidade, sem compartilhamento público;
- S09 e S10 tiveram os UUIDs de origem Suno recuperados diretamente dos metadados ID3 dos masters, sem substituição por aproximação de título;
- commit `485b60cb17e381fd5aac52c5b94f2fe1d13f4a9f` configurou rewrites externos provisórios para manter as cinco rotas locais `assets/*.mp3` estáveis no staging e usar Suno CDN apenas como contingência técnica;
- o deployment dessa configuração chegou a `READY`;
- o preview permanece protegido por autenticação Vercel, e a auditoria disponível recebeu redirecionamento SSO antes de obter a resposta do MP3; portanto **playback ponta a ponta através do proxy ainda não está aprovado**;
- a contingência Suno não é cópia pública própria, não é destino de QR e não satisfaz o gate de hosting final;
- cópia pública própria da faixa ainda precisa estar presente em hosting adequado ou existir decisão editorial explícita sobre outro destino permanente;
- identidade, duração, codec e SHA-256 devem ser conferidos contra o manifesto após o hosting final;
- reprodução sem login ainda precisa ser aprovada em navegador e aparelho físico;
- master do Drive continua privado.

Estado em 23/08/2026: as cinco cópias web 128 kbps estão preparadas, validadas, hashadas e arquivadas de forma privada; um proxy de contingência foi configurado no staging, mas não promove os ativos a distribuição final. Portanto `public_asset_ready` continua `false`.

## Gate D — aparelho físico
O QA automatizado Chromium/WebKit + Axe em desktop, 390 px e 320 px foi aprovado, mas não substitui teste em hardware real. Testar ao menos:
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
