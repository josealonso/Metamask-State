import React, { Component } from "react";
import { useAddress, useDisconnect, useMetamask, useNetwork } from '@thirdweb-dev/react';
import { useChainId, useNetworkMismatch } from "@thirdweb-dev/react";

// class WalletComponent extends Component {

// constructor(props) {
//     super(props);
//     this.disconnectWallet = useDisconnect();
// }

export default function handleConnection() {
    const connectWithMetamask = useMetamask();
    // const connectWithWalletConnect = useWalletConnect();
    // const disconnectWallet = useDisconnect();
    const address = useAddress();
    const network = useNetwork();
    network.switchNetwork = true;
    const isMismatched = useNetworkMismatch();
    console.log("Is mismatched: " + isMismatched);
    // if (address) {

    return <div> Handle Connection
        {/* Address: {address}
        Chain ID: {network[0].data.chain && network[0].data.chain.id}
        <div>{isMismatched}</div>
        <button onClick={this.disconnectWallet}>Disconnect</button> */}
    </div >;

    // If no wallet is connected, show connect wallet options
    // return (
    //     <div>
    //         <button onClick={() => connectWithCoinbaseWallet()}>
    //             Connect Coinbase Wallet
    //         </button>
    //         <button onClick={() => connectWithMetamask()}>Connect MetaMask</button>
    //         <button onClick={() => connectWithWalletConnect()}>
    //             Connect WalletConnect
    //         </button>

    //     }
}

// export default handleConnection;
