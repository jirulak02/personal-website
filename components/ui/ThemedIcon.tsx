"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

type ThemedIconProps = {
  alt: string;
  width?: number;
  height?: number;
  src: string;
  darkSrc?: string;
  isLogo?: boolean;
  sizes?: string;
};

export default function ThemedIcon({
  alt,
  width,
  height,
  src,
  darkSrc,
  isLogo,
  sizes,
}: ThemedIconProps) {
  const [isClient, setIsClient] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return isLogo ? (
      <Image
        src={src}
        fill
        sizes={sizes}
        className="object-contain"
        alt={alt}
        quality={100}
        priority
      />
    ) : (
      <Image src={src} width={width} height={height} alt={alt} />
    );
  }

  return isLogo ? (
    <Image
      src={resolvedTheme === "light" ? src : darkSrc || src}
      fill
      sizes={sizes}
      className="object-contain"
      alt={alt}
      quality={100}
      priority
    />
  ) : (
    <Image
      src={resolvedTheme === "light" ? src : darkSrc || src}
      width={width}
      height={height}
      alt={alt}
    />
  );
}
