import { useAddress, useDisconnect, useMetamask, useNetwork } from '@thirdweb-dev/react';
import { useChainId, useNetworkMismatch } from "@thirdweb-dev/react";

export default function Home() {
  // const address = useAddress();
  // const connectWithMetamask = useMetamask();
  // const disconnectWallet = useDisconnect();
  // const {
  //   activeChain,
  //   chains,
  //   error,
  //   isLoading,
  //   pendingChainId,
  //   switchNetwork,
  // } = useNetwork();

  // export const ConnectWallet = () => {
  // const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  // const connectWithWalletConnect = useWalletConnect();
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const network = useNetwork();
  // network.switchNetwork = true;
  const isMismatched = useNetworkMismatch();
  console.log("Is mismatched: " + isMismatched);

  if (address) {
    return (
      <div>
        Address: {address}
        <br />
        Chain ID: {network[0].data.chain && network[0].data.chain.id}
        <br />
        <div>{isMismatched}</div>
        <button onClick={disconnectWallet}>Disconnect</button>
      </div>
    );
  }

  // If no wallet is connected, show connect wallet options
  return (
    <div>
      <button onClick={() => connectWithCoinbaseWallet()}>
        Connect Coinbase Wallet
      </button>
      <button onClick={() => connectWithMetamask()}>Connect MetaMask</button>
      <button onClick={() => connectWithWalletConnect()}>
        Connect WalletConnect
      </button>
    </div>
  );
};
  //       <>
  //         <button onClick={disconnectWallet}>Disconnect Wallet</button>
  //         <p>Your address: {address}</p>
  //       </>
  //     ) : (
  //       <button onClick={connectWithMetamask}>Connect with Metamask</button>
  //     )}
  //   </div>
  // );
