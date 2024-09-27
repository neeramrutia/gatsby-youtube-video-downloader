import {
  Text,
  Container,
  Anchor,
  Button,
  ActionIcon,
  rem,
  TextInput,
  useMantineTheme,
  AspectRatio,
  Blockquote,
} from "@mantine/core";
import React, { useState } from "react";
import { MdOutlineArrowDownward } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-scroll";
import "../Styles/About.css";
import { IconSearch, IconArrowRight, IconInfoCircle } from "@tabler/icons-react";
import axios, { AxiosResponse } from "axios";
const isBrowser = typeof window !== "undefined";

const About = () => {
  const theme = useMantineTheme();
  const [url, setUrl] = useState("");
  const [data, setData] = useState<AxiosResponse>();
  const icon = <IconInfoCircle />;
  const donload = async (link: String) => {
    const data = await axios.get(
      `https://youtube-video-downloader-brown.vercel.app/api/download?link=${link}`

    );
    setData(data);
    setUrl("");
  };
  return (
    <>
      <section id="about">
        <Container fluid mt={"xl"}>
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
                {isBrowser && (
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
                )}
              </Link>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await donload(url);
              }}
            >
              <div>
                <TextInput
                  pt={"lg"}
                  radius="md"
                  size="md"
                  placeholder="Enter a youtube URL"
                  rightSectionWidth={42}
                  value={url}
                  leftSection={
                    <IconSearch
                      style={{ width: rem(18), height: rem(18) }}
                      stroke={1.5}
                    />
                  }
                  onSubmit={async () => {
                    await donload(url);
                  }}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  rightSection={
                    <Link to="video-section" smooth duration={500}>
                    <ActionIcon
                      size={32}
                      radius="xl"
                      color={theme.colors.yellow[4]}
                      variant="filled"
                      onClick={async () => {
                        await donload(url);
                      }}
                    >
                      <IconArrowRight
                        style={{ width: rem(18), height: rem(18) }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    </Link>
                  }
                />
              </div>
            </form>
          </div>
        </Container>
      </section>
      <section >
        <Container id="video-section" size={"xs"}>
        {
        data ? <>
          <AspectRatio>
      <iframe
        src={`${data?.data.url}`}
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      {
        data?.data.info.map((formatName:any, index:any) => (
          <>
            <a
              href={formatName.url}
              target="_blank"
              download
            >
              {formatName.mimeType.split(";")[0] + "  "}
              {formatName.hasVideo ? formatName.height + "p" : ""}
            </a>
            <br/>
            </>
        ))
      }
    </AspectRatio>
        </> : <>  <Blockquote color="yellow" icon={icon} mt="xl">
      Enter a youtube url to download
    </Blockquote> </>}
        
        </Container>
      </section>
    </>
  );
};

export default About;

{
  /*  */
}

{
  /* <div>
      <iframe title="video" src={`${data?.data.url}`} />
    </div>
    <div>
      {data?.data.info.map((formatName:any, index:any) => (
        <div key={index}>
          <a
            href={formatName.url}
            target="_blank"
            download
            className=" outline-none italic underline"
          >
            {formatName.mimeType.split(";")[0] + "  "}
            {formatName.hasVideo ? formatName.height + "p" : ""}
          </a>
        </div>
      ))}
    </div> */
}
