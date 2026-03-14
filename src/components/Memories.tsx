export default function Memories() {
  return (
    <section className="memories-section">

<h2 className="memories-title flex flex-wrap gap-2">
  <span className="memories-title-part">GLIMPSE INTO THE</span>
  <span className="memories-title-highlight">MEMORIES</span>
  <span className="memories-title-part">WE HAVE</span>
  <span className="memories-title-part">CREATED.</span>
</h2>
      <div className="memories-gallery">
        <div className="memories-gallery-wrapper">

          <div className="memory-image memory-1"></div>
          <div className="memory-image memory-2"></div>
          <div className="memory-image memory-3"></div>
          <div className="memory-image memory-4"></div>

          {/* duplicates for seamless loop */}
          <div className="memory-image memory-1 duplicate"></div>
          <div className="memory-image memory-2 duplicate"></div>
          <div className="memory-image memory-3 duplicate"></div>
          <div className="memory-image memory-4 duplicate"></div>

        </div>
      </div>

      <p className="memories-subtitle">
        THE STORY OF HACKIT IN MOMENTS
      </p>

    </section>
  );
}