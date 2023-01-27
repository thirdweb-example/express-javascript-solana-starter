# Express Javascript Solana Starter

Starter template for Express.js, Javascript, and the thirdweb Solana SDK.

## Using This Template

Create a project using this example:

```bash
npx thirdweb create --template express-javascript-solana-starter
```

Install dependencies:

```bash
npm install # npm
yarn # yarn
```

- Export your wallet private key from your wallet and add it to the .env file.

```env
PRIVATE_KEY=your_private_key
```

Using private keys as an env variable is vulnerable to attacks and is not best practice. We are doing it in this guide for the sake of brevity, but we strongly recommend using a [secret manager to store your private key](https://portal.thirdweb.com/sdk/set-up-the-sdk/securing-your-private-key).

- Run the project:

```bash
npm run start # npm
yarn start # yarn
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb Javascript Documentation](https://docs.thirdweb.com/sdk) - learn about our JavaScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
