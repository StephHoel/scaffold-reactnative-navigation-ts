# Scaffold React Native Navigation (TypeScript)

Este projeto é um scaffold para iniciar rapidamente um aplicativo React Native com navegação configurada usando TypeScript. Ele inclui navegação em pilha (Stack Navigation) e navegação em abas (Tab Navigation), além de outras configurações essenciais para um projeto React Native moderno.

## Estrutura do Projeto

A estrutura do scaffold segue as melhores práticas para projetos React Native com TypeScript:

```plaintext
src/
├── app/              # Telas do aplicativo
├── assets/           # Imagens e outros recursos estáticos
├── components/       # Componentes reutilizáveis
├── styles/           # Estilos estáticos
├── types/            # Definições de tipos TypeScript
├── utils/            # Funções utilitárias
```

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de começar:

- **Node.js** (versão 16 ou superior)
- **Yarn** ou **npm**
- **React Native CLI** ou **Expo CLI** (dependendo do fluxo de trabalho escolhido)
- **Ambiente de desenvolvimento configurado** para React Native (Android Studio, Xcode, etc.)

## Configurações Iniciais

Antes de começar a codar, personalize o scaffold para atender às necessidades do seu projeto:

### 1. **Renomear o Projeto**

Renomeie o projeto para refletir o nome do seu aplicativo. Utilize a biblioteca `react-native-rename` para facilitar o processo:

```bash
npx react-native-rename "NomeDoSeuApp"
```

> **Nota:** Verifique os arquivos `android/app/src/main/AndroidManifest.xml` e `ios/` para garantir que o nome foi alterado corretamente.

### 2. **Configurar o Identificador do Pacote**

Atualize o identificador do pacote para Android e iOS:

- **Android:** Altere o valor de `applicationId` no arquivo `android/app/build.gradle`.
- **iOS:** Atualize o campo `PRODUCT_BUNDLE_IDENTIFIER` no arquivo `ios/YourApp.xcodeproj/project.pbxproj`.

### 3. **Adicionar Novas Telas**

Adicione novas telas no diretório `src/app/` para expandir a navegação do aplicativo.

### 4. **Instalar Dependências**

Instale as dependências necessárias para o projeto:

```bash
yarn install
```

Se estiver usando Expo, execute:

```bash
expo install
```

### 5. **Configurar Estilos Globais**

Defina estilos globais no arquivo `src/styles/global.css` ou diretamente nas páginas usando o NativeWind.

### 6. **Configurar Variáveis de Ambiente**

Se o projeto usar variáveis de ambiente, configure o arquivo `.env` na raiz do projeto. Instale a biblioteca `react-native-dotenv` para gerenciar essas variáveis.

## Como Rodar o Projeto

1. Instale as dependências:

   ```bash
   yarn install
   ```

2. Execute o aplicativo:

   - **iOS:**

     ```bash
     yarn ios
     ```

   - **Android:**

     ```bash
     yarn android
     ```

   - **Expo:**

     ```bash
     expo start
     ```

## Próximos Passos

- Adicione fontes personalizadas com:

  ```bash
  npx expo install expo-font @expo-google-fonts/roboto
  ```

  Substitua "roboto" pelo nome da fonte desejada. Se necessário, procure a fonte em `fonts.google.com`.

- Atualize o `_layout.tsx` para importar as fontes.
- Personalize o componente `Loading` e o arquivo `app.json` com as cores da sua aplicação.
- Adicione telas em `src/app/`.
- Crie componentes reutilizáveis em `src/components/`.
- Configure bibliotecas adicionais, como gerenciamento de estado (Redux, MobX, etc.) ou integração com APIs externas.
- Teste o aplicativo em dispositivos reais para garantir o funcionamento.

## Contribuição

Se você encontrar problemas ou tiver sugestões para melhorar este scaffold, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
