import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import GlassCard from "components/GlassCard";
import BottomNavigation from "components/BottomNavigation";
import { ActionButton } from "components/buttons";
import { linkDiscord } from "helpers/http/apis";
import { showMsg } from "helpers/utils";
import { useAuth } from "contexts/auth-context";
import discord from "assets/discord-logo.svg";
import checkmark from "assets/checkmark.svg";

const Wrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 3.25rem;
  }
  p {
    font-size: 1.375rem;
  }
  .discord-img {
    position: relative;
    display: inline-block;
    .checkmark {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`;

function Discord() {
  const [discordLinked, setDiscordLinked] = useState(false);
  const { onNextStep } = useAuth();
  const { user } = useAuth();
  useEffect(() => {
    if (user?.discord_member_id) {
      setDiscordLinked(true);
    }
  }, [user]);
  const { id } = useParams();
  useEffect(() => {
    if (id && !discordLinked) {
      linkDiscord(id)
        .then((res) => {
          setDiscordLinked(true);
          showMsg(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id, discordLinked]);

  return (
    <Wrapper>
      <GlassCard>
        <figure className="discord-img">
          <Image fluid width="188" src={discord} alt="Discord" />
          {!!discordLinked && (
            <Image className="checkmark" src={checkmark} alt="Checkmark" />
          )}
        </figure>
        <h1 className="text-uppercase">
          {discordLinked ? "Discord linked" : "Join the community"}
        </h1>
        {discordLinked ? (
          <ActionButton
            variant="primary"
            size="lg"
            className="mt-4"
            onClick={onNextStep}
          >
            Continue
          </ActionButton>
        ) : (
          <a
            target="_blank"
            rel="noreferrer"
            href={process.env.REACT_APP_DISCORD_URL}
          >
            <ActionButton variant="primary" size="lg" className="mt-4">
              Discord Link
            </ActionButton>
          </a>
        )}
      </GlassCard>
      <BottomNavigation />
    </Wrapper>
  );
}

export default Discord;
