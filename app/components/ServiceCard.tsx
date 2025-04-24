import Image from 'next/image'
import React, { ReactElement } from 'react'

type ServiceCardPropsType = {
  containerClassStyle?: string
  imageClassStyle?: string
  imageUrl: string
}

export const ServiceCard = ({
  containerClassStyle,
  imageUrl,
  imageClassStyle,
}: ServiceCardPropsType) => {
  return (
    <div className={containerClassStyle}>
      <Image
        unoptimized
        fill
        priority
        src={imageUrl}
        alt="Service photo"
        className={imageClassStyle}
      />
    </div>
  )
}
