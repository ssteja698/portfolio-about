import { useEffect, useMemo, useState } from "react";
import storiesData from "../constants/stories.json";
import type { StoryBook, StoryPage } from "../types";

const Stories = () => {
  const books: StoryBook[] = useMemo(
    () => (storiesData as any).books || [],
    []
  );
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const selectedBook =
    books.find((b) => b.id === selectedBookId) || books[0] || null;
  const [pageIndex, setPageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // default to first book
    if (!selectedBookId && books.length > 0) {
      setSelectedBookId(books[0].id);
    }
  }, [books, selectedBookId]);

  useEffect(() => {
    // reset page when book changes
    setPageIndex(0);
  }, [selectedBookId]);

  if (!selectedBook) {
    return <div className="container-custom py-16">No stories available.</div>;
  }

  const pages: StoryPage[] = selectedBook.pages;
  const current = pages[pageIndex];

  function goNext() {
    setIsAnimating(true);
    setPageIndex((i) => Math.min(i + 1, pages.length - 1));
    setTimeout(() => setIsAnimating(false), 300);
  }

  function goPrev() {
    setIsAnimating(true);
    setPageIndex((i) => Math.max(i - 1, 0));
    setTimeout(() => setIsAnimating(false), 300);
  }

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">
          Stories
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Choose a book from the shelf to begin reading.
        </p>
      </div>

      {/* Book shelf with 3D effect */}
      <div className="relative mb-12">
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 rounded-lg"></div>
        <div className="flex items-end gap-4 overflow-x-auto pb-4 px-1">
          {books.map((book) => (
            <button
              key={book.id}
              onClick={() => setSelectedBookId(book.id)}
              className={`group relative min-w-[200px] h-[280px] rounded-lg transition-transform duration-300 hover:scale-105 ${
                book.id === selectedBookId ? "translate-y-[-8px]" : ""
              }`}
            >
              {/* Book spine shadow */}
              <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/20 to-transparent"></div>

              {/* Book cover */}
              <div
                className={`relative h-full w-full rounded-lg overflow-hidden shadow-lg transition-transform ${
                  book.id === selectedBookId
                    ? "bg-gradient-to-br from-indigo-600 to-pink-500"
                    : "bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900"
                }`}
              >
                {book.cover && (
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
                  />
                )}
                <div className="relative h-full p-6 flex flex-col">
                  <div
                    className={`font-serif text-xl font-bold mb-2 ${
                      book.id === selectedBookId
                        ? "text-white"
                        : "text-zinc-800 dark:text-zinc-100"
                    }`}
                  >
                    {book.title}
                  </div>
                  {book.author && (
                    <div
                      className={`text-sm ${
                        book.id === selectedBookId
                          ? "text-white/80"
                          : "text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      by {book.author}
                    </div>
                  )}
                  <div
                    className={`mt-auto text-xs ${
                      book.id === selectedBookId
                        ? "text-white/60"
                        : "text-zinc-500 dark:text-zinc-500"
                    }`}
                  >
                    {book.pages.length} pages
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Story viewer styled as a notebook */}
      <div className="max-w-3xl mx-auto perspective-1000">
        <div
          className={`relative border rounded-lg bg-white dark:bg-zinc-900 shadow-xl transition-transform duration-300 ${
            isAnimating ? "scale-[0.98] opacity-90" : ""
          }`}
        >
          {/* Notebook holes */}
          <div className="absolute left-8 inset-y-0 flex flex-col justify-evenly">
            <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
          </div>

          <div className="ml-16 p-8">
            {/* Page header */}
            <div className="flex items-start justify-between mb-6 pb-4 border-b dark:border-zinc-800">
              <div>
                <h2 className="font-serif text-3xl font-bold text-zinc-800 dark:text-zinc-100">
                  {current?.title}
                </h2>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {selectedBook.title} • {selectedBook.author}
                </div>
              </div>
              <div className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
                Page {pageIndex + 1} / {pages.length}
              </div>
            </div>

            {/* Page content with ruled lines */}
            <div className="relative prose dark:prose-invert max-w-none mb-8">
              {/* Ruled line background */}
              <div
                className="absolute inset-0 flex flex-col"
                style={{ gap: "1.5rem" }}
              >
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-px bg-indigo-100 dark:bg-zinc-800"
                  ></div>
                ))}
              </div>

              <div className="relative text-lg leading-[1.5] text-zinc-800 dark:text-zinc-100 font-serif space-y-6">
                {current?.content.map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t dark:border-zinc-800">
              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  className="px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800
                    text-white disabled:opacity-50 disabled:hover:from-indigo-600 disabled:hover:to-indigo-700"
                  disabled={pageIndex === 0}
                >
                  ← Previous
                </button>
                <button
                  onClick={goNext}
                  className="px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800
                    text-white disabled:opacity-50 disabled:hover:from-indigo-600 disabled:hover:to-indigo-700"
                  disabled={pageIndex === pages.length - 1}
                >
                  Next →
                </button>
              </div>

              <div className="text-sm text-zinc-400 dark:text-zinc-500 font-serif italic">
                Made with ❤️ — enjoy reading
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
