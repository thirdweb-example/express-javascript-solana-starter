import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const generateSignature = async (req, res) => {
  const { address } = req.body;
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

  const collectionAddress = "0xc9cD8FB4D61204171af7dE5B7aB7aB7c948597CB";

  try {
    const collection = await sdk.getContract(
      collectionAddress,
      "nft-collection"
    );

    const signature = await collection.erc721.signature.generate({
      to: address,
      metadata: {
        name: "My NFT",
        image:
          "https://gateway.ipfscdn.io/ipfs/QmXXjx3aJCs9W9mN35Aade6etSoceqMk8ykkasbB87MaLt/0.png",
      },
    });

    return res.status(200).json({
      message: `Signature generated for ${address}`,
      signature,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default generateSignature;
