const useWallet = () => {
  const getAptosWallet = () => {
    if ("aptos" in window) return window.aptos;
    else window.open("https://petra.app/", `_blank`);
  };
  return getAptosWallet();
};

export default useWallet;
