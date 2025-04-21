# Scaffold React Native Navigation (TypeScript)

Este projeto é um scaffold para iniciar rapidamente um aplicativo React Native com navegação configurada usando TypeScript. Ele já vem com a estrutura básica de navegação, incluindo navegação em pilha (Stack Navigation) e navegação em abas (Tab Navigation), além de outras configurações essenciais para um projeto React Native.

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

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (versão 16 ou superior)
- **Yarn** ou **npm**
- **React Native CLI** ou **Expo CLI** (dependendo do fluxo de trabalho escolhido)
- **Ambiente de desenvolvimento configurado** para React Native (Android Studio, Xcode, etc.)

## Configurações Iniciais

Antes de começar a codar, é necessário realizar algumas alterações no scaffold para adaptá-lo ao seu projeto:

### 1. **Renomear o Projeto**

Renomeie o projeto para refletir o nome do seu aplicativo. Você pode usar a biblioteca `react-native-rename` para facilitar esse processo:

```bash
npx react-native-rename "NomeDoSeuApp"
```

> **Nota:** Certifique-se de verificar os arquivos `android/app/src/main/AndroidManifest.xml` e `ios/` para garantir que o nome foi alterado corretamente.

---

### 2. **Configurar o Identificador do Pacote**

Atualize o identificador do pacote no Android e no iOS:

- **Android:** Altere o valor de `applicationId` no arquivo `android/app/build.gradle`.
- **iOS:** Atualize o campo `PRODUCT_BUNDLE_IDENTIFIER` no arquivo `ios/YourApp.xcodeproj/project.pbxproj`.

---

### 3. **Configurar a Navegação**

Adicione novas telas no diretório `src/app/` para tê-las disponíveis em sua aplicação.

---

### 4. **Configurar as Dependências**

Instale as dependências necessárias para o seu projeto. O scaffold já inclui as dependências básicas, mas você pode adicionar outras conforme necessário:

```bash
yarn install
```

Se estiver usando Expo, execute:

```bash
expo install
```

---

### 5. **Configurar Estilos Globais**

No arquivo `src/styles/global.css`, você pode definir estilos globais para o aplicativo, como cores, fontes e espaçamentos. Porém recomendamos que o faça diretamente nas páginas usando o NativeWind.

---

### 6. **Configurar Variáveis de Ambiente**

Se o seu projeto usar variáveis de ambiente, configure o arquivo `.env` na raiz do projeto. Certifique-se de instalar a biblioteca `react-native-dotenv` para gerenciar essas variáveis.

---

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

---

## Próximos Passos

- Adicione novas fontes através do `npx expo install expo-font @expo-google-fonts/roboto` onde "roboto" é o nome da sua fonte.
- Ajuste o `_layout.tsx` para importar todas as suas fontes
- Atualize o componente `Loading` e o arquivo `app.json` para usar as cores da sua aplicação.
- Adicione suas telas em `src/app/`.
- Adicione seus componentes personalizados em `src/components/`.
- Configure bibliotecas adicionais, como gerenciamento de estado (Redux, MobX, etc.) ou APIs externas.
- Teste o aplicativo em dispositivos reais para garantir que tudo funciona como esperado.

---

## Contribuição

Se você encontrar problemas ou tiver sugestões para melhorar este scaffold, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
