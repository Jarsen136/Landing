
declare global {
  interface Window{
    ethereum: any
  }
}

export const getAddressId = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" })
      .then((res: string[]) => {
          resolve(res[0]);
      })
      .catch((e: Error) => {
        console.warn("connect error");
        reject();

      });
    } else {
      console.warn("need to install metamask");
      reject();
    }
  })
}

export const displayAddress = (addressId: string): string => {
  if (!addressId) return '';
  const len = addressId.length
  const start = addressId.slice(0, 5);
  const end = addressId.slice(len - 4, len)
  return `${start}....${end}`
}