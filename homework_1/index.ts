import { ethers } from "ethers";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const message = 'Yurii Korkishko 12.03.2024';
const privateKey = process.env.PRIVATE_KEY;
if (privateKey) {
  const signingKey = new ethers.SigningKey(privateKey);

  const hash = ethers.hashMessage(message);
  const signature = signingKey.sign(hash);
  console.log('signature', signature);
}
