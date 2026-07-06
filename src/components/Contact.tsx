import { Background, Button, Column, Heading, Line, Row, Text } from "@once-ui-system/core";
import { person } from "@/resources";

const info = [
  { label: "Phone", value: "+61 461 398 511" },
  { label: "Location", value: "Townsville, QLD, Australia" },
  { label: "References", value: "Available on request" },
];

export const Contact: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{ x: 50, y: 0, radius: 100 }}
        gradient={{
          display: true,
          opacity: 60,
          x: 50,
          y: 0,
          width: 80,
          height: 60,
          tilt: 0,
          colorStart: "brand-background-strong",
          colorEnd: "static-transparent",
        }}
      />
      <Row fillWidth gap="40" s={{ direction: "column" }}>
        <Column flex={7} gap="m">
          <Heading variant="display-strong-xs" wrap="balance">
            Let&apos;s talk about reef research, GIS work, or a graduate role.
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
            marginBottom="m"
          >
            Open to opportunities in environmental consulting, spatial analysis, and marine
            research support.
          </Text>
          <Row gap="12" wrap>
            <Button
              href={`mailto:${person.email}`}
              data-border="rounded"
              variant="primary"
              size="m"
              weight="default"
            >
              {person.email}
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
              href="/Emmanuel_Sam_Johns_CV.pdf"
              download="Emmanuel_Sam_Johns_CV.pdf"
              data-border="rounded"
              variant="secondary"
              size="m"
              weight="default"
            >
              Download CV
            </Button>
          </Row>
        </Column>
        <Row s={{ direction: "column" }} flex={5} gap="24">
          <Line vert s={{ hide: true }} background="neutral-alpha-medium" />
          <Column gap="20" fillWidth>
            {info.map((item) => (
              <Column key={item.label} gap="4">
                <Text
                  variant="label-default-s"
                  onBackground="neutral-weak"
                  style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  {item.label}
                </Text>
                <Text variant="body-default-m">{item.value}</Text>
              </Column>
            ))}
          </Column>
        </Row>
      </Row>
    </Column>
  );
};
