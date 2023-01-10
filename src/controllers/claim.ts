import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import { Request, Response } from "express";

const claimNFT = async (req: Request, res: Response) => {
  const { address } = req.body;
  const sdk = ThirdwebSDK.fromPrivateKey(
    "devnet",
    process.env.PRIVATE_KEY as string
  );
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
