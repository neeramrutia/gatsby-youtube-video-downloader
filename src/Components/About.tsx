import { Text, Container, Anchor, Button, ActionIcon, rem, TextInput, useMantineTheme } from "@mantine/core";
import React from "react";
import { MdOutlineArrowDownward } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-scroll";
import "../Styles/About.css";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";
const isBrowser = typeof window !== "undefined"
const About = () => {
  const theme = useMantineTheme();
 
  return (
    <section id="about">
      <Container fluid>
        <div className="about-content" style={{ backgroundColor: "#fff4d5" }}>
          <div style={{ marginBottom: 15 }}>
            <Text tt={"uppercase"} fw={500} c="yellow">
              MADE WITH GATSBY AND MANTINE
            </Text>
          </div>

          <div style={{ marginBottom: 15 }}>
            <Text>
              {/* <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}> */}
              <h1 className="title">Youtube Video Downloader</h1>
              {/* </MediaQuery> */}
            </Text>
          </div>

          <div style={{ marginBottom: 25 }}>
            <Text size="xl" c="black">
              Simple showcase of this powerful and well implemented library
              called <Anchor href="https://mantine.dev/">Mantine</Anchor> with{" "}
              <Anchor href="https://www.gatsbyjs.com/">Gatsby</Anchor>.
            </Text>
          </div>

          <div className="buttons">
            <Link to="section-five" smooth duration={500}>
              <Button
                color="yellow"
                rightSection={<MdOutlineArrowDownward size={16} />}
                radius="lg"
                size="md"
              >
                Tell me more
              </Button>
            </Link>
            <Link to="github.com/neeramrutia">
             {
                isBrowser && (
                    <Button
                    onClick={() => {
                      window.location.href = "https://github.com/neeramrutia";
                    }}
                    rightSection={<DiGithubBadge size={20} />}
                    variant="default"
                    radius="lg"
                    size="md"
                  >
                    Github
                  </Button>
                )
             }
            </Link>
          </div>
          <div>
            <TextInput
              pt={"lg"}
              radius="md"
              size="md"
              placeholder="Enter a youtube URL"
              rightSectionWidth={42}
              leftSection={
                <IconSearch
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              }
              rightSection={
                <ActionIcon
                  size={32}
                  radius="xl"
                  color={theme.colors.yellow[4]}
                  variant="filled"
                >
                  <IconArrowRight
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                </ActionIcon>
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
