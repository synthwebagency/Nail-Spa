export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
