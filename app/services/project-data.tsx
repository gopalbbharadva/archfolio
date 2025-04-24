export interface Project {
  title: string
  description: string
  isLeft: boolean
  url: string
  idClass: string
  stateVar: boolean
  animationClass: string
}

export const projects: Project[] = [
  {
    title: 'Architectural Design',
    description:
      'At Vinayak Design Studio, our architectural design service focuses on creating innovative, functional, and aesthetically pleasing spaces tailored to our clients’ unique needs and vision.',
    isLeft: true,
    idClass: 'f1',
    stateVar: false,
    animationClass: 'slideFromLeft',
    url: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337646107/YR/RI/WC/123361265/arch2o-architectural-sketching-10-architecture-sketching-tips-1.jpg',
  },
  {
    title: '⁠Interior Design',
    description:
      'Our interior design services at Vinayak Design Studio aim to transform spaces into personalized, functional, and visually captivating environments.',
    isLeft: false,
    idClass: 's2',
    stateVar: false,
    animationClass: 'slideFromRight',
    url: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg',
  },
  {
    title: 'Renovation and Restoration',
    description:
      'Vinayak Design Studio specializes in breathing new life into existing structures through thoughtful renovation and restoration services.',
    isLeft: true,
    idClass: 't3',
    stateVar: false,
    animationClass: 'slideFromLeft',
    url: 'https://cdn.storagepug.com/hubfs/3852224/pug_dashboard_blog_assets/bargainStorage/AdobeStock_219425449_800x506.png',
  },
  {
    title: 'Residental Interior Design',
    description:
      'Vinayak Design Studio offers bespoke residential interior design services that transform houses into personalized, functional, and inviting homes.',
    isLeft: false,
    idClass: 'f4',
    stateVar: false,
    animationClass: 'slideFromRight',
    url: 'https://www.homemakersinterior.com/wp-content/uploads/2023/07/28.png',
  },
  {
    title: 'Commercial Interior Design',
    description:
      'Vinayak Design Studio provides tailored commercial interior design solutions that enhance brand identity, optimize functionality, and create memorable user experiences.',
    isLeft: true,
    idClass: 'f5',
    stateVar: false,
    animationClass: 'slideFromLeft',
    url: 'https://www.elegantinterior.info/wp-content/uploads/2023/09/Living10.png',
  },
  {
    title: 'Space planning',
    description:
      'At Vinayak Design Studio, space planning is a fundamental aspect of architectural and interior design. It involves strategically organizing and optimizing spaces to create functional, efficient, and aesthetically pleasing environments tailored to the needs of the clients.',
    isLeft: false,
    idClass: 's6',
    stateVar: false,
    animationClass: 'slideFromRight',
    url: 'https://www.nppartners.net/wp-content/uploads/2021/10/interior-plan-sketch3.jpg',
  },
]
