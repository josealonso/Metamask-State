import { useAddress, useDisconnect, useMetamask, useNetworkMismatch } from '@thirdweb-dev/react';
import Link from "next/link";

export default function Communities() {
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();
    const isMismatched = useNetworkMismatch();
    return (
        <div>
            <h2>Communities Page</h2>
            {address ? (
                <>
                    <button onClick={disconnectWallet}>Disconnect Wallet</button>
                    <p>Your address: {address}</p>
                    {isMismatched ? (
                        <div style={{ fontSize: "20px", fontFamily: "arial" }}>Please switch to the Mumbai network</div>
                    ) : (
                        <div></div>
                    )}
                </>
            ) : (
                <button onClick={connectWithMetamask}>Connect with Metamask</button>
            )}
            <h3>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h3>
        </div>
    )
}
