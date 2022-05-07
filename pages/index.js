import Link from "next/link";    // import {Link} ----> error !!

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

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Home Page</h2>
      <div>
        <Link href="/posts">
          <a>Read the posts</a>
        </Link>
        <div>
          <Link href="/login">
            <a>Log in</a>
          </Link>
        </div>
        <div>
          <Link href="/communities">
            <a>Communities</a>
          </Link>
        </div>

      </div>

    </div>
  );
};
