import { useEffect } from "react";
import { createPortal } from "react-dom";

// Full-screen image viewer. Opens on top of everything (portaled to <body>),
// shows one image at a time, and lets the user step through the set with the
// arrow buttons or keyboard. Pass `index` = null to keep it closed.
function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
  alt = "Image",
}: {
  images: string[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (next: number) => void;
  alt?: string;
}) {
  const open = index !== null;

  useEffect(() => {
    if (!open || index === null) return;

    const prev = () => onIndexChange((index + images.length - 1) % images.length);
    const next = () => onIndexChange((index + 1) % images.length);

    // Capture phase + stopImmediatePropagation so Escape closes the lightbox
    // without the parent Overlay's Escape handler also navigating the route away.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        onClose();
      } else if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [open, index, images.length, onClose, onIndexChange]);

  if (!open || index === null) return null;

  const prev = () => onIndexChange((index + images.length - 1) % images.length);
  const next = () => onIndexChange((index + 1) % images.length);
  const multiple = images.length > 1;

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox-close"
        aria-label="Close"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>

      {multiple && (
        <button
          type="button"
          className="lightbox-nav prev"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
        >
          <svg viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      <img
        className="lightbox-img"
        src={images[index]}
        alt={`${alt} — ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
      />

      {multiple && (
        <button
          type="button"
          className="lightbox-nav next"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
        >
          <svg viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {multiple && (
        <div className="lightbox-counter">
          {index + 1} / {images.length}
        </div>
      )}
    </div>,
    document.body,
  );
}

export default Lightbox;
