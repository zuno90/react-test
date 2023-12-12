export const connectAptosWallet = async (wallet: any) => {
  try {
    const response = await wallet.connect();
    if (!response) throw Error("Can not connect wallet!");
    return wallet.account();
  } catch (error) {
    // { code: 4001, message: "User rejected the request."}
    console.error(error);
  }
};

export const disconnectAptosWallet = async (wallet: any) => {
  try {
    await wallet.disconnect();
  } catch (error) {
    console.error(error);
  }
};
