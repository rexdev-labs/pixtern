export interface Job {
  id: number;
  title: string;
  description: string;
  illustration: { url: string };
}

export interface WhatWeDoSection {
  section: {
    title: string;
    description: string;
  };
  jobs?: Job[];
}
