import { Button, Container, Grid, SimpleGrid, Text, ThemeIcon, Title, rem } from "@mantine/core";
import classes from './home.module.css';
import { IconCircleDotted, IconFileCode, IconFlame, IconReceiptOff } from "@tabler/icons-react";
import { ContactUs } from "../Contact";
import { Footer } from "../Footer";

const Home = () => {

    const features = [
        {
            icon: IconReceiptOff,
            title: 'Free and open source',
            description: 'All packages are published under MIT license, you can use Mantine in any project',
        },
        {
            icon: IconFileCode,
            title: 'TypeScript based',
            description: 'Build type safe applications, all components and hooks export types',
        },
        {
            icon: IconCircleDotted,
            title: 'No annoying focus ring',
            description:
                'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
        },
        {
            icon: IconFlame,
            title: 'Flexible',
            description:
                'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
        },
    ];

    const items = features.map((feature) => (
        <div key={feature.title}>
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            >
                <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
            </ThemeIcon>
            <Text fz="lg" mt="sm" fw={500}>
                {feature.title}
            </Text>
            <Text c="dimmed" fz="sm">
                {feature.description}
            </Text>
        </div>
    ));

    return (
        <div>
            <header className={classes.root}>
                <Container size="lg">
                    <div className={classes.inner}>
                        <div className={classes.content}>
                            <Title className={classes.title}>
                                A{' '}
                                <Text
                                    component="span"
                                    inherit
                                    variant="gradient"
                                    gradient={{ from: 'pink', to: 'yellow' }}
                                >
                                    fully featured
                                </Text>{' '}
                                React components library
                            </Title>

                            <Text className={classes.description} mt={30}>
                                Build fully functional accessible web applications with ease – Mantine includes more
                                than 100 customizable components and hooks to cover you in any situation
                            </Text>

                            <Button
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                                size="xl"
                                className={classes.control}
                                mt={40}
                            >
                                Get started
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>
            <section className={classes.wrapper}>
                <Container size={"lg"}>

                    <Grid gutter={80}>
                        <Grid.Col span={{ base: 12, md: 5 }}>
                            <Title className={classes.title} order={2}>
                                A fully featured React components library for your next project
                            </Title>
                            <Text c="dimmed" mt="md">
                                Build fully functional accessible web applications faster than ever – Mantine includes
                                more than 120 customizable components and hooks to cover you in any situation
                            </Text>

                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 7 }}>
                            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
                                {items}
                            </SimpleGrid>
                        </Grid.Col>
                    </Grid>
                </Container>
            </section>
            <ContactUs/>
            <Footer />
        </div>
    )
}

export default Home