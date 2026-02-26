import Image from "next/image";
import { doctors as doctorsContent } from "@/content";

export function OurDoctors() {
  return (
    <section aria-label="Our Doctors">
      <div className="flex flex-col gap-10 xl:gap-[85px]">
        {/* Header */}
        <div className="flex max-w-[515px] flex-col gap-[29px]">
          <h2 className="text-display-section text-text-primary">
            {doctorsContent.headline}
          </h2>
          <p className="text-body-lg text-text-secondary">
            {doctorsContent.description}
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:max-w-[920px]">
          {doctorsContent.doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-[var(--radius-container)] bg-white shadow-[0px_8px_14px_0px_rgba(0,0,0,0.07)]"
            >
              <div className="px-[18px] pt-5">
                <div className="relative aspect-[424/414] w-full overflow-hidden rounded-[19px]">
                  <Image
                    src={doctor.image}
                    alt={doctor.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) calc(100vw - 76px), (max-width: 1280px) calc(50vw - 56px), 440px"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center pb-5 pt-[30px]">
                <h3 className="text-heading-md font-medium text-text-primary">
                  {doctor.name}
                </h3>
                <p className="mt-[10px] text-body-lg text-text-secondary">
                  {doctor.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
