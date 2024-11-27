import { ethers } from "ethers";

// 设置提供者（连接到本地 Hardhat 网络）
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545"); // 本地 Hardhat 地址

// 合约地址和 ABI（你部署的合约的 ABI）
const contractAddress = "你的合约地址";  // 这里替换为实际部署的合约地址
const abi = [ /* 合约的 ABI */ ];  // 这里替换为你的合约的 ABI

// 创建与合约的连接
const contract = new ethers.Contract(contractAddress, abi, provider);

// 获取钻石信息
export const getDiamondInfo = async (uniqueID) => {
  try {
    const diamond = await contract.getDiamondInfo(uniqueID);
    return diamond;
  } catch (error) {
    console.error("Error fetching diamond info:", error);
    throw error;
  }
};

// 记录钻石的产地和种类
export const recordMining = async (uniqueID, origin, category) => {
  try {
    const signer = provider.getSigner();  // 获取签名者（钱包）
    const contractWithSigner = contract.connect(signer);  // 连接钱包
    const tx = await contractWithSigner.recordMining(uniqueID, origin, category);  // 调用合约函数
    await tx.wait(); // 等待交易完成
    console.log("Mining record added:", tx);
  } catch (error) {
    console.error("Error recording mining data:", error);
    throw error;
  }
};
