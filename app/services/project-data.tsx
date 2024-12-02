export interface Project {
  title: string;
  description: string;
  isLeft: boolean;
}

export const projects: Project[] = [
  {
    title: "Architectural Design",
    description:
      "At Vinayak Design Studio, our architectural design service focuses on creating innovative, functional, and aesthetically pleasing spaces tailored to our clients’ unique needs and vision. From concept development to detailed design, we ensure every project harmonizes with its context, integrates sustainable practices, and enhances the user experience. Our team works closely with clients to translate their ideas into timeless architectural solutions that balance form, function, and emotion.",
    isLeft: true
  },
  {
    title: "⁠Interior Design",
    description:
      "Our interior design services at Vinayak Design Studio aim to transform spaces into personalized, functional, and visually captivating environments. We focus on understanding the client’s lifestyle, preferences, and needs to curate interiors that reflect their personality while optimizing space utilization. From concept development and material selection to custom furnishings and lighting design, we ensure every detail contributes to a cohesive and harmonious interior experience.",
    isLeft: false
  },
  {
    title: "Renovation and Restoration",
    description:
      "Vinayak Design Studio specializes in breathing new life into existing structures through thoughtful renovation and restoration services. We blend modern design techniques with a deep respect for the original architecture, ensuring that the character and essence of the space are preserved while enhancing its functionality and aesthetics. Whether it's a historic building or a contemporary space in need of a refresh, our team meticulously plans and executes every project to deliver seamless, timeless transformations.",
    isLeft: true
  },
  {
    title: "Project Management",
    description:
      "At Vinayak Design Studio, our project management services ensure the seamless execution of architectural projects from concept to completion. We manage every aspect of the project, including timeline coordination, budget control, procurement, and stakeholder communication, to deliver projects on schedule and within budget. Our team works closely with clients, contractors, and consultants to navigate complexities, mitigate risks, and maintain the highest standards of quality throughout the project lifecycle.",
    isLeft: false
  },
  {
    title: "Residental Interior Design",
    description:
      "Vinayak Design Studio offers bespoke residential interior design services that transform houses into personalized, functional, and inviting homes. We believe that every home should reflect the lifestyle, tastes, and aspirations of its inhabitants. From spatial planning and material selection to custom furniture and lighting design, we craft interiors that balance comfort, aesthetics, and practicality. Whether it’s a contemporary apartment, a luxury villa, or a cozy family home, our designs create living spaces that are both beautiful and livable.",
    isLeft: true
  },
  {
    title: "Sustainable Design",
    description:
      "At Vinayak Design Studio, sustainability is at the core of our design philosophy. Our sustainable design services focus on creating environmentally responsible spaces that minimize ecological impact while maximizing energy efficiency and occupant well-being. We integrate green building practices, energy-efficient systems, and eco-friendly materials to deliver designs that are both beautiful and sustainable. From passive design strategies to renewable energy solutions, we strive to create spaces that contribute to a greener, more sustainable future.",
    isLeft: false
  },
  {
    title: "Commercial Interior Design",
    description:
      "Vinayak Design Studio provides tailored commercial interior design solutions that enhance brand identity, optimize functionality, and create memorable user experiences. We design dynamic spaces that foster productivity, collaboration, and customer engagement, whether it’s an office, retail space, restaurant, or hospitality venue. Our approach combines innovative layouts, thoughtful material selection, and strategic lighting to deliver interiors that not only meet business objectives but also leave a lasting impression.",
    isLeft: true
  },
];
