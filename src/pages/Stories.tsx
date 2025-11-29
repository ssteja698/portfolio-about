import { useEffect, useMemo, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { booksMeta, loadBookById } from "../constants/stories";
import type { StoryBook, StoryPage } from "../types";

const Stories = () => {
  const { bookId } = useParams<{ bookId?: string }>();
  const navigate = useNavigate();
  const books = useMemo(() => booksMeta || [], []);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(
    bookId || null
  );
  const bookButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [loadedBooks, setLoadedBooks] = useState<Record<string, StoryBook>>({});
  const [isLoadingBook, setIsLoadingBook] = useState(false);
  const selectedMeta =
    books.find((b) => b.id === selectedBookId) || books[0] || null;
  const selectedBook = selectedBookId
    ? loadedBooks[selectedBookId] || null
    : null;
  const [pageIndex, setPageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (books.length === 0) return;
    const firstId = books[0].id;

    if (bookId) {
      const exists = books.some((b) => b.id === bookId);
      if (exists) {
        if (selectedBookId !== bookId) setSelectedBookId(bookId);
      } else {
        if (selectedBookId !== firstId) setSelectedBookId(firstId);
      }
      return;
    }

    if (!selectedBookId) setSelectedBookId(firstId);
  }, [bookId, books, navigate]);

  useEffect(() => {
    if (!selectedBookId) return;
    setPageIndex(0);
    navigate(`/stories/${selectedBookId}`, { replace: true });
  }, [selectedBookId, navigate]);

  useEffect(() => {
    let animationFrameId: number | null = null;
    let isExecuted = false;

    const attemptScroll = () => {
      const button = bookButtonRefs.current[selectedBookId || ""];

      if (button && !isExecuted) {
        isExecuted = true;
        button.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      } else if (!isExecuted) {
        animationFrameId = requestAnimationFrame(attemptScroll);
      }
    };

    animationFrameId = requestAnimationFrame(attemptScroll);

    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, [selectedBookId]);

  useEffect(() => {
    if (!selectedBookId) return;
    if (loadedBooks[selectedBookId]) return;

    let cancelled = false;
    setIsLoadingBook(true);
    loadBookById(selectedBookId)
      .then((book) => {
        if (cancelled || !book) return;
        setLoadedBooks((prev) => ({ ...prev, [book.id]: book }));
      })
      .finally(() => {
        if (!cancelled) setIsLoadingBook(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedBookId, loadedBooks]);

  if (books.length === 0) {
    return <div className="container-custom py-16">No stories available.</div>;
  }

  const pages: StoryPage[] = selectedBook ? selectedBook.pages : [];
  const current = pages[pageIndex] || null;

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
    <div className="container-custom py-6 md:py-12">
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">
          Stories
        </h1>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
          Choose a book from the shelf to begin reading.
        </p>
      </div>

      {/* Book shelf with 3D effect */}
      <div className="relative mb-8 md:mb-12">
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 rounded-lg"></div>
        <div className="flex items-end gap-3 md:gap-4 overflow-x-auto pb-4 px-1 snap-x snap-mandatory">
          {books.map((book) => (
            <button
              key={book.id}
              ref={(el) => {
                bookButtonRefs.current[book.id] = el;
              }}
              onClick={() => setSelectedBookId(book.id)}
              className={`group relative min-w-[160px] md:min-w-[200px] h-[220px] md:h-[280px] rounded-lg transition-transform duration-300 hover:scale-105 snap-center ${
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
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
                  />
                )}
                <div className="relative h-full p-4 md:p-6 flex flex-col">
                  <div
                    className={`font-serif text-lg md:text-xl font-bold mb-2 ${
                      book.id === selectedBookId
                        ? "text-white"
                        : "text-zinc-800 dark:text-zinc-100"
                    }`}
                  >
                    {book.title}
                  </div>
                  {book.author && (
                    <div
                      className={`text-xs md:text-sm ${
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
                    {book.pageCount} pages
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
          <div className="ml-8 md:ml-16 p-4 md:p-8">
            {/* Page header */}
            <div className="mb-6 md:mb-8 pb-4 border-b dark:border-zinc-800">
              <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100">
                  {current?.title}
                </h2>
                <div className="text-xs md:text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-1 md:mt-2">
                  Page {pages.length > 0 ? pageIndex + 1 : "-"} of{" "}
                  {pages.length || selectedMeta.pageCount}
                </div>
              </div>
              <div className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
                {selectedMeta.title} • {selectedMeta.author}
              </div>
            </div>

            {/* Page content */}
            <div className="mb-6 md:mb-8">
              {isLoadingBook && !selectedBook ? (
                <div className="py-8 text-center text-zinc-500">
                  Loading book…
                </div>
              ) : pages.length === 0 ? (
                <div className="py-8 text-center text-zinc-500">
                  No pages to display.
                </div>
              ) : (
                <div className="text-base md:text-lg text-zinc-800 dark:text-zinc-100 font-serif space-y-6 md:space-y-8">
                  {current?.content.map((paragraph, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 md:gap-6 items-baseline"
                    >
                      <div className="text-indigo-500 dark:text-indigo-400">
                        •
                      </div>
                      <p className="flex-1 whitespace-pre-wrap leading-relaxed">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between pt-4 border-t dark:border-zinc-800">
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={goPrev}
                  className="flex-1 md:flex-none px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800
                    text-white disabled:opacity-50 disabled:hover:from-indigo-600 disabled:hover:to-indigo-700"
                  disabled={pageIndex === 0 || pages.length === 0}
                >
                  ← Previous
                </button>
                <button
                  onClick={goNext}
                  className="flex-1 md:flex-none px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800
                    text-white disabled:opacity-50 disabled:hover:from-indigo-600 disabled:hover:to-indigo-700"
                  disabled={
                    pages.length === 0 || pageIndex === pages.length - 1
                  }
                >
                  Next →
                </button>
              </div>

              <div className="text-xs md:text-sm text-zinc-400 dark:text-zinc-500 font-serif italic text-center md:text-left">
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
