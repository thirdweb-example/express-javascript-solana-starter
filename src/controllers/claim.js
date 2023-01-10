import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";

const claimNFT = async (req, res) => {
  const { address } = req.body;
  const sdk = ThirdwebSDK.fromPrivateKey("devnet", process.env.PRIVATE_KEY);
  const programAddress = "7PSHtPXHjpVSJfD96xbLRq8JXzDVc1g2aAngjkC2W3c";

  try {
    const program = await sdk.getNFTDrop(programAddress);

    const NFT = await program.claimTo(address, 1);

    return res.status(200).json({
      message: `Claimed NFT with token id: ${NFT} to ${address}`,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default claimNFT;
