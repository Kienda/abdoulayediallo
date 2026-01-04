type Props = {
  title: string;
  src: string;
};

export default function FigmaEmbed({ title, src }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="border-b border-neutral-200 px-6 py-4">
        <h2 className="text-base font-bold text-neutral-900">{title}</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Interactive Figma prototype (embedded)
        </p>
      </div>

      <div className="relative w-full bg-white" style={{ paddingTop: "56.25%" }}>
        <iframe
          title={title}
          src={src}
          className="absolute left-0 top-0 h-full w-full"
          allowFullScreen
        />
      </div>
    </div>
  );
}
