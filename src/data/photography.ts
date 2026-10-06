export type Photo = {
  src: string;
  title: string;
  location: string;
  year: string;
  orientation: "landscape" | "portrait";
};

export const photos: Photo[] = [
  {
    src: "/photography/hero.jpg",
    title: "Into the Wild",
    location: "Himachal Pradesh",
    year: "2026",
    orientation: "landscape",
  },
  {
    src: "/photography/photo-02.jpg",
    title: "Quiet Details",
    location: "India",
    year: "2026",
    orientation: "portrait",
  },
  {
    src: "/photography/photo-03.jpg",
    title: "Mountain Light",
    location: "Himachal Pradesh",
    year: "2025",
    orientation: "landscape",
  },
  {
    src: "/photography/photo-04.jpg",
    title: "Small Worlds",
    location: "India",
    year: "2025",
    orientation: "portrait",
  },
  {
    src: "/photography/photo-05.jpg",
    title: "After Rain",
    location: "Himachal Pradesh",
    year: "2025",
    orientation: "landscape",
  },
  {
    src: "/photography/photo-06.jpg",
    title: "Stillness",
    location: "India",
    year: "2024",
    orientation: "portrait",
  },
];