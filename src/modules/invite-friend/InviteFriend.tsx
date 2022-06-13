import React from "react";
import styled from "styled-components";
import { Image, Spinner } from "react-bootstrap";
import GlassCard from "components/GlassCard";
import BottomNavigation from "components/BottomNavigation";
import { ActionButton } from "components/buttons";
import shareIcon from "assets/share.png";
import { redeemNft } from "helpers/http/apis";
import { ReactComponent as Copy } from "assets/copy.svg";
import toast from "react-hot-toast";
import { useAuth } from "contexts/auth-context";
import { showError, showMsg } from "helpers/utils";

const Wrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 3.25rem;
  }
  .description {
    font-family: ${(props) => props.theme.font.secondary};
    font-size: 1.25rem;
  }
`;

function InviteFriend() {
  const { user } = useAuth();
  console.log(user);
  const onCopy = () => {
    if (!user?.referral_code) {
      showError("You don't have a referral code yet.");
      return;
    }
    navigator.clipboard.writeText(`/connect/${user.referral_code}`).then(
      () => {
        showMsg("Copied to clipboard!");
      },
      function () {
        /* clipboard write failed */
        alert("failed");
      }
    );
  };
  return (
    <Wrapper>
      <GlassCard>
        <figure className="discord-img">
          <Image fluid width="125" src={shareIcon} alt="share" />
        </figure>
        <h1 className="text-uppercase">Invite your friend</h1>
        <p className="description">
          Earn <strong>10 Points</strong> for each friend you recuite.
        </p>
        <ActionButton
          variant="primary-outline"
          size="lg"
          className="mt-4"
          arrow={false}
          onClick={onCopy}
        >
          Copy link <Copy />
        </ActionButton>
      </GlassCard>
      <BottomNavigation />
    </Wrapper>
  );
}

export default InviteFriend;
