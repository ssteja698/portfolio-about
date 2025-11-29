import type { StoryBook } from "../types";

// Lightweight metadata for each book. Do NOT import the full JSON here —
// keep only small fields (id/title/author/cover/pageCount) and a loader
// function that dynamically imports the full book when needed.
export const booksMeta: Array<{
  id: string;
  title: string;
  author?: string;
  cover?: string;
  pageCount: number;
  // loader returns the full StoryBook (with pages)
  loader: () => Promise<StoryBook>;
}> = [
  {
    id: "book-1",
    title: "The Last Rain",
    author: "Sai Siva Teja B",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
    pageCount: 13,
    loader: async () =>
      (await import("./books/book-1.json")).default as StoryBook,
  },
  {
    id: "book-2",
    title: "Chandrika Theatre",
    author: "Sai Siva Teja B",
    cover: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400",
    pageCount: 9,
    loader: async () =>
      (await import("./books/book-2.json")).default as StoryBook,
  },
  {
    id: "book-3",
    title: "When the Smoke Settled",
    author: "Sai Siva Teja B",
    cover: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=400",
    pageCount: 8,
    loader: async () =>
      (await import("./books/book-3.json")).default as StoryBook,
  },
  {
    id: "book-4",
    title: "The Seed of Patience",
    author: "Sai Siva Teja B",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
    pageCount: 1,
    loader: async () =>
      (await import("./books/book-4.json")).default as StoryBook,
  },
  {
    id: "book-5",
    title: "Crossing the Path",
    author: "Sai Siva Teja B",
    cover: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400",
    pageCount: 12,
    loader: async () =>
      (await import("./books/book-5.json")).default as StoryBook,
  },
];

// Convenience: load a book by id.
export async function loadBookById(id: string): Promise<StoryBook | null> {
  const meta = booksMeta.find((b) => b.id === id);
  if (!meta) return null;
  return meta.loader();
}

export default { booksMeta, loadBookById };
