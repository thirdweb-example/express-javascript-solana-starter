import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";

const claimNFT = async (req, res) => {
  // Get the address from the request body
  const { address } = req.body;

  // initialize sdk with private key
  const sdk = ThirdwebSDK.fromPrivateKey("devnet", process.env.PRIVATE_KEY);

  // programAddress of the NFT Drop
  const programAddress = "7PSHtPXHjpVSJfD96xbLRq8JXzDVc1g2aAngjkC2W3c";

  try {
    // get the NFTDrop using the programAddress
    const program = await sdk.getNFTDrop(programAddress);

    // Claim an NFT to the address
    const NFT = await program.claimTo(address, 1);

    // Return a success message
    return res.status(200).json({
      message: `Claimed NFT with token id: ${NFT} to ${address}`,
    });
  } catch (err) {
    // Return an error if something goes wrong
    return res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default claimNFT;
