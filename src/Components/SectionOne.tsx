import { Carousel } from '@mantine/carousel';
import { Text, Container, useMantineTheme, Title, Group } from '@mantine/core';
// import '../Styles/SectionOne.css';
import React from 'react';

const SectionOne = () => {
    const theme = useMantineTheme();

    // const carouselContent = {
    //     height: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column' as 'column',
    //     backgroundColor: theme.colors.yellow[5],
    //     borderRadius: 15,
    //     gap: 15
    // };

    return (
        <section id="section-one">
            <Container>
                <Group justify='center'>
                <Text c="black" mb="15px">
                    <Title order={1}>Explain something in this carousel</Title>
                </Text>
                </Group>
                <Group justify='center'>
                <Text c="black"  mb="25px">
                    You can insert images or some texts if you need.
                </Text>
                </Group>

                <Carousel
                    withIndicators
                    height={300}
                    slideSize="33.333333%"
                    slideGap="md"
                    loop
                    align="start"
                    pr="10px"
                    pl="10px"
                    slidesToScroll={3}
                >
                    <Carousel.Slide>
                        <div >
                            <Title order={2}>1</Title>
                            <Text>Write something here.</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div >
                            <Title order={2}>2</Title>
                            <Text>Something here too.</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div >
                            <Title order={2}>3</Title>
                            <Text>Mh, maybe here too?</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div >
                            <Title order={2}>4</Title>
                            <Text>If you'd like to you could do that here...</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div >
                            <Title order={2}>5</Title>
                            <Text>Woah, you are quite convincing..</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div >
                            <Title order={2}>6</Title>
                            <Text>And we are done with the cards!</Text>
                        </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    );
};

export default SectionOne;