"use client";

import React, { useRef, useState } from "react";
import { Button, Column, IconButton, Media, Row, Text } from "@once-ui-system/core";

interface LiveMapProps {
  src: string;
  poster: string;
  alt?: string;
  radius?: React.ComponentProps<typeof Column>["radius"];
}

// Click-to-load facade for a Google Earth Engine app. EE apps are heavy (they boot the
// EE library, authenticate, then render tiles server-side), so we show the project
// screenshot until the visitor asks for the live map, rather than loading an iframe
// on every page view. The wrapper keeps a fixed aspect-ratio in both states so the
// swap doesn't shift the page layout.
export function LiveMap({ src, poster, alt = "", radius = "m" }: LiveMapProps) {
  const [loaded, setLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = () => {
    wrapperRef.current?.requestFullscreen?.();
  };

  return (
    <Column
      ref={wrapperRef}
      fillWidth
      radius={radius}
      border="neutral-alpha-medium"
      overflow="hidden"
      position="relative"
      style={{ aspectRatio: "16 / 9" }}
    >
      {!loaded ? (
        <Row fillWidth fillHeight position="relative">
          <Media fill sizes="(max-width: 960px) 100vw, 960px" alt={alt} src={poster} style={{ filter: "brightness(0.65)" }} />
          <Column
            position="absolute"
            top="0"
            left="0"
            fillWidth
            fillHeight
            horizontal="center"
            vertical="center"
            gap="12"
          >
            <Button variant="primary" size="m" weight="default" onClick={() => setLoaded(true)}>
              Explore the interactive map
            </Button>
            <Text variant="label-default-s" onBackground="neutral-weak" style={{ color: "white", opacity: 0.85 }}>
              Powered by Google Earth Engine
            </Text>
          </Column>
        </Row>
      ) : (
        <iframe
          src={src}
          title={alt || "Interactive map"}
          loading="lazy"
          allow="fullscreen"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        />
      )}
      <Row position="absolute" top="12" right="12" gap="8" zIndex={1}>
        <Button
          href={src}
          target="_blank"
          rel="noopener"
          variant="secondary"
          size="s"
          weight="default"
          suffixIcon="arrowUpRight"
          style={{ backdropFilter: "blur(8px)" }}
        >
          Open in Earth Engine
        </Button>
        {loaded && (
          <IconButton
            icon="maximize"
            variant="secondary"
            size="s"
            tooltip="Fullscreen"
            onClick={handleFullscreen}
            style={{ backdropFilter: "blur(8px)" }}
          />
        )}
      </Row>
    </Column>
  );
}
