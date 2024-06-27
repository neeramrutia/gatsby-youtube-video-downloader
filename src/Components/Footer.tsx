import { useMantineTheme, Container, Grid, Text, Button, Group, Avatar, UnstyledButton, Anchor, Code } from '@mantine/core';
import React from 'react';
import {DiGithubBadge } from "react-icons/di"
import {BsLinkedin} from "react-icons/bs"
import { IconBrandLinkedin } from '@tabler/icons-react';
const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.yellow[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col span={8}>
                   
                        <Group justify='center' pt={'lg'}>
                        <DiGithubBadge onClick={()=>{window.location.href="https://github.com/neeramrutia"}} size={32} style={{backgroundColor:"greenyellow" , borderRadius:50, cursor:"pointer"}}/>
                       </Group>
                       <Group justify='center'>
                       <Text pt={'lg'} size='sm' c="white">
                        Made with 💛 by <a style={{color:"black"}} href='https://neer-amrutia.vercel.app/'>Neer Amrutia</a> | &copy; {new Date().getFullYear()}{" "}
        Neer Amrutia. All rights reserved.
                        </Text>
                        </Group>
                    </Grid.Col>

                    <Grid.Col span={4} >
                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 , backgroundColor:"white"}}>
                            Website made & handled by
                            <Anchor href="https://github.com/neeramrutia">
                                <UnstyledButton>
                                    <Group>
                                        <Avatar size={40} color="orange">NA</Avatar>
                                        <div>
                                            <Text>Neer Amrutia</Text>
                                            <Text size="xs" c="dimmed">neer.amrutia@gmail.com</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Anchor>
                        </Code>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};