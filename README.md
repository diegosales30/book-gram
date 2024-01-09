# BookGram

## BookGram é uma plataforma que permite que você salve seus livros em formato PDF na nuvem e os leia em qualquer lugar online.


### Confira a versão de demonstração do BookGram aqui.
Demo: https://book-gram-psi.vercel.app/

### Ferramentas usadas:
```
Next.js 14, 
JavaScript, 
Sass para estilização, 
Yarn para gerenciamento de dependências, 
React Icons para ícones, 
React Toastify para notificações, 
Firebase para autenticação, armazenamento 
banco de dados Firestore,
Vercel para deploy.

```

### Instalação
Instale as dependências usando Yarn:
```
  yarn install
```

Configure as variáveis de ambiente:

Crie um arquivo .env.local na raiz do seu projeto e adicione as seguintes variáveis com suas respectivas chaves obtidas no console do Firebase:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id 
```


### Inicie o aplicativo:
```
yarn dev
```

Acesse http://localhost:3000 no seu navegador.

### Uso
Faça o login utilizando a autenticação do Firebase.
Adicione seus livros PDF.
Explore sua biblioteca e leia seus livros online.

### Configuração Firebase

O BookGram usa o Firebase para autenticação, armazenamento e banco de dados. Certifique-se de configurar seu projeto no Firebase Console e obter as chaves necessárias para o arquivo .env.local.
Contribuição

Se você quiser contribuir para o desenvolvimento do BookGram, siga as instruções no CONTRIBUTING.md.
Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
Contato

Para qualquer dúvida ou sugestão, sinta-se à vontade para entrar em contato através do e-mail