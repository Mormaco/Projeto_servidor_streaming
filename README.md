# Stoner Rock PE - Acervo Digital 🎸🌵

Este projeto é um servidor de streaming de música e portal web focado no cenário Stoner Rock, rodando de forma independente em um **Debian 12**.

## 🛠️ Estrutura Técnica
* **Servidor Musical:** [Navidrome](https://www.navidrome.org/).
* **Servidor Web/Proxy:** [Nginx](https://www.nginx.com/).
* **Túnel de Acesso:** [Ngrok](https://ngrok.com/) para exposição externa segura.
* **Segurança:** Firewall **UFW** ativo e travas de segurança via variáveis de ambiente no serviço do sistema.

## 📂 Organização do Projeto
O portal foi refatorado para uma estrutura profissional e modular:
* `/index.html`: Landing page com credenciais e acesso ao player.
* `/css/style.css`: Estilização centralizada (Tema Dark/Exploitation).
* `/js/scripts.js`: Funções de interatividade (Cópia de PIX, etc).
* `/img/`: Diretório para mídias, banners e capas.

## 🔒 Acesso Público (Ouvinte)
Configurado com restrições de alteração de perfil para garantir a integridade do serviço:
* **Usuário:** `Ouvinte`
* **Senha:** `Stoner`

## 🚀 Comandos de Manutenção
Para atualizar o código no GitHub após alterações:
1. `git add .`
2. `git commit -m "Descreva o que você mudou"`
3. `git push`

---
**Servidor Independente | Recife-PE | 2026**
