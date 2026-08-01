import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth gap="40" s={{ direction: "column" }}>
        <Column flex={7} horizontal="start" align="left" gap="m">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="8">
            <Text
              variant="label-strong-s"
              onBackground="brand-medium"
              style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}
            >
              {person.role}
            </Text>
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="16">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.3} fillWidth horizontal="start">
            <Row gap="12" wrap>
              <Button
                href="/Emmanuel_Sam_Johns_CV.pdf"
                target="_blank"
                rel="noopener"
                data-border="rounded"
                variant="primary"
                size="m"
                weight="default"
              >
                View CV
              </Button>
              <Button
                href="https://www.linkedin.com/in/emmanuel-sam-johns-1b54911b2"
                target="_blank"
                rel="noopener"
                data-border="rounded"
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                LinkedIn
              </Button>
              <Button
                href={`mailto:${person.email}`}
                data-border="rounded"
                variant="secondary"
                size="m"
                weight="default"
              >
                Email
              </Button>
            </Row>
          </RevealFx>
        </Column>
        <RevealFx translateY="8" delay={0.2} flex={3}>
          <Column
            gap="24"
            fillWidth
            paddingLeft="24"
            style={{ borderLeft: "1px solid var(--neutral-alpha-medium)" }}
          >
            <Column gap="4">
              <Text
                variant="label-default-s"
                onBackground="neutral-weak"
                style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                Based in
              </Text>
              <Text variant="body-default-m">Townsville, QLD, Australia</Text>
            </Column>
            <Column gap="4">
              <Text
                variant="label-default-s"
                onBackground="neutral-weak"
                style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                Phone
              </Text>
              <Text variant="body-default-m">+61 461 398 511</Text>
            </Column>
          </Column>
        </RevealFx>
      </Row>
      <RevealFx translateY="16" delay={0.6}>
        <Column gap="16" fillWidth>
          <Heading as="h2" variant="display-strong-xs" wrap="balance" paddingX="l">
            Selected Projects
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            paddingX="l"
            marginBottom="8"
          >
            Coursework and applied research from the MB5370 spatial ecology unit at JCU.
          </Text>
          <Projects />
        </Column>
      </RevealFx>
      <Contact />
    </Column>
  );
}
