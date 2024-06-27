import { useMantineTheme, Container, Grid, Text, Button, Group, Avatar, UnstyledButton, Anchor, Code } from '@mantine/core';
import React from 'react';
const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.yellow[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col span={8}>
                        
                        <Text size="xl" fw={700} c="white" mb="10px">Simple Mantine template</Text>

                        <Text c="white" mb="5px">
                            You can do anything you want with this template, from portfolios to other stuff.
                        </Text>

                        <Text c="white" mb="20px">
                            You can find the illustrations I used on <Anchor href="https://icons8.com/">www.icons8.com</Anchor>
                        </Text>

                        <Button variant="white" color="black" onClick={() => redirectToLink('https://mantine.dev/')}>Check out Mantine</Button>
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