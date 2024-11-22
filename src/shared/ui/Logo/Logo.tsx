'use client'

import Image from 'next/image';

type TLogoProps = {
  width?: number,
  height?: number
}

export function Logo({ height = 50, width = 100 }: TLogoProps) {
  return <Image
    alt={'logo'}
    src={'/logo.png'}
    height={height}
    width={width}
  />
}