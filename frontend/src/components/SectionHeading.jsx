export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-16 md:mb-20 max-w-3xl">
      {eyebrow && (
        <p className="font-sans text-blue-400 text-sm uppercase tracking-widest mb-4">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed mt-6">
          {description}
        </p>
      )}
    </div>
  );
}