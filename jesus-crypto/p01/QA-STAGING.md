# P01 — QA de Staging

Data de controle: 2026-08-23

## Aprovado
- HTML estático sem bibliotecas externas.
- Estrutura mobile-first.
- Cinco regimes de contagem interativos.
- Visualização marcada como conceitual, não cartografia empírica.
- Interação local sem envio de dados.
- Sem formulários, cookies ou analytics por padrão.
- Transcrição acessível de S01 disponível.
- Fallback de S01 aponta para a página de origem no Suno.
- Root de staging redireciona para `/jesus-crypto/p01/`.
- `robots.txt` bloqueia crawling do staging.
- Vercel envia `X-Robots-Tag: noindex, nofollow, noarchive` no staging.
- Headers de privacidade/segurança configurados: `nosniff`, Referrer-Policy e Permissions-Policy.

## Bloqueios para publicação
1. Inserir `assets/s01-ranking-nao-mede-sangue.mp3` como cópia pública de distribuição.
2. Validar reprodução real em Android e iOS.
3. Validar navegação por teclado e leitura em 320–430 px em aparelho real.
4. Definir a URL pública permanente de P01.
5. Remover a política de `noindex` apenas quando a publicação for deliberadamente aberta.
6. Congelar a URL.
7. Gerar e validar o QR editorial definitivo.

## Regra de GO
P01 só muda de `Teste` para `Publicado` quando todos os sete bloqueios acima estiverem resolvidos.

## Regra de QR
O QR final aponta para P01. Nunca aponta diretamente para o MP3 ou para a página do Suno.
