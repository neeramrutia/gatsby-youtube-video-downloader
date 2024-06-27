import { Accordion, Text, Container, Title, Badge } from '@mantine/core';
import React from 'react';
import { FiCoffee, FiCloudSnow, FiAnchor } from "react-icons/fi";

const SectionFive = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-five">
            <Container>
                <div style={{ marginBottom: 30 }}>
                    <div style={{ textAlign: 'left' }}><Badge variant="filled" color="yellow">FAQs</Badge></div>
                    <Text c="black">
                        <Title order={1} style={{ marginTop: 10 }}>Woah, Frequently asked questions here</Title>
                    </Text>
                </div>

                <Accordion variant="contained">
                    <Accordion.Item value="item1">
                        <Accordion.Control icon={<FiCoffee size={20} color={"#fab005"} />}>
                            Is this free?
                        </Accordion.Control>
                        <Accordion.Panel>Yes, of course.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item2">
                        <Accordion.Control icon={<FiCloudSnow size={20} color={"#fab005"} />}>
                            Can any quality video can be downloaded?
                        </Accordion.Control>
                        <Accordion.Panel>Unfortunately no.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item3">
                        <Accordion.Control icon={<FiAnchor size={20} color={"#fab005"} />}>
                            Is this safe?
                        </Accordion.Control>
                        <Accordion.Panel>Oh yes!</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );

};

export default SectionFive;