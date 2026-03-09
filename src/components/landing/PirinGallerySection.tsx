import Image from "next/image";
import { pirinWinterImages } from "./data";

export function PirinGallerySection() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-100 sm:p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Пирин през зимата
        </h2>
        <p className="mt-2 text-slate-600">
          Визуален контекст от българските планини, който вдъхновява мисията на
          Planinski Radar.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pirinWinterImages.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-slate-600">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
