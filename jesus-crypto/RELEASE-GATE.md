# Universo Jesus Crypto — Gate de release dos portais P01–P10

Ambiente atual: **STAGING**. Nenhum item abaixo autoriza merge automático ou impressão de QR.

## Gate A — integridade técnica
- P01–P10 existentes e alcançáveis pelo hub.
- viewport mobile presente; um H1 por portal.
- sem dependência obrigatória de scripts externos.
- interações sem formulários ou coleta de dados pessoais no MVP.
- `robots.txt` e `X-Robots-Tag` mantendo staging fora de indexação.
- QA estático automatizado aprovado.
- QA em Chromium automatizado aprovado em 22 cenários: hub + P01–P10 em desktop e viewport móvel.
- zero overflow horizontal, zero `pageerror` e zero erro de console no run aprovado de 23/08/2026.
- screenshots de QA geradas como artefato do GitHub Actions para inspeção visual.

## Gate B — integridade narrativa
- cada portal cumpre seu brief canônico sem simplesmente repetir Livro I/Companion;
- P06 não ranqueia pessoas;
- P07 explicita cartografia conceitual e não apresenta rotas/minas/conflitos como dados reais;
- P09 trabalha apenas com teses/dossiê ficcionais e não solicita voto político real;
- P10 preserva “A cidade continuou existindo sem pedir permissão ao mapa.” e não usa a abertura reservada do Livro II;
- revisão editorial humana final aprovada.

## Gate C — áudio
Aplicável somente a P01, P05, P08, P09 e P10.
- cópia web derivada e validada a partir do master privado;
- cópia pública própria da faixa presente no hosting em `assets/`;
- identidade, duração, codec e SHA-256 conferidos contra o manifesto de distribuição;
- reprodução sem login aprovada;
- master do Drive continua privado;
- origem de contingência, quando houver, não é destino do QR.

Estado em 23/08/2026: as cinco cópias web 128 kbps estão preparadas e validadas; o upload/hosting público ainda está pendente.

## Gate D — aparelho físico
O QA de Chromium desktop/mobile já foi aprovado, mas não substitui teste em hardware real. Testar ao menos:
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
