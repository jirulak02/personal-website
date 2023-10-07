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
  logo?: boolean;
  sizes?: string;
};

export default function ThemedIcon({
  alt,
  width,
  height,
  src,
  darkSrc,
  logo,
  sizes,
}: ThemedIconProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return logo ? (
    <Image
      src={theme === "light" ? src : darkSrc || src}
      fill
      sizes={sizes}
      className="object-contain"
      alt={alt}
      quality={100}
      priority
    />
  ) : (
    <Image src={theme === "light" ? src : darkSrc || src} width={width} height={height} alt={alt} />
  );
}