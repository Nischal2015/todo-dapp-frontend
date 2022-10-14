import { useState } from "react";
import { Button, Modal, SecondaryHeading, Typography } from "~/components";
import { useConnectWallet } from "~/hooks";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { StyledGrid, StyledFlexBox } from "./Styles";

function ConnectWallet() {
  const { currentAccount, correctNetwork, connectWallet, disable } =
    useConnectWallet();
  const [openModal, setOpenModal] = useState(!correctNetwork);
  const { walletExistCheck, setCorrectNetwork } = useConnectWallet();

  const onClickHandler = async () => {
    try {
      const ethereum = await walletExistCheck();
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: `0x${Number(5).toString(16)}`,
          },
        ],
      });
      setCorrectNetwork(true);
    } catch (error) {}
  };

  const correctNetworkElement = () => {
    // console.log(!correctNetwork);
    if (!correctNetwork)
      return (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          renderContent={
            <>
              <StyledGrid>
                <BellAlertIcon />
                <StyledFlexBox>
                  <div>
                    <SecondaryHeading>Alert Info</SecondaryHeading>
                    <Typography fontSize='1.6rem'>
                      The network used with this account is not Goerli. We
                      suggest you switch to Goerli Network to use the app's
                      functionality.
                    </Typography>
                  </div>
                  <Button onClick={onClickHandler}>Switch to Goerli</Button>
                </StyledFlexBox>
              </StyledGrid>
            </>
          }
        />
      );
    return <Typography>Connected Account: {currentAccount}</Typography>;
  };

  return (
    <div>
      {!currentAccount ? (
        <Button onClick={connectWallet} disabled={disable}>
          Connect Wallet
        </Button>
      ) : (
        correctNetworkElement()
      )}
    </div>
  );
}

export default ConnectWallet;
