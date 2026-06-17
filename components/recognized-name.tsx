import Image from "next/image";

type RecognizedNameProps = {
  name: string;
  recognized?: boolean;
  badgeSize?: "small" | "large";
};

export default function RecognizedName({
  name,
  recognized = false,
  badgeSize = "small",
}: RecognizedNameProps) {
  const sizeClasses =
    badgeSize === "large"
      ? "size-9 md:size-12"
      : "size-6";

  return (
    <span className="inline-flex max-w-full items-center gap-2 align-middle md:gap-3">
      <span>{name}</span>
      {recognized ? (
        <span
          className={`recognized-community-badge relative inline-grid shrink-0 place-items-center ${sizeClasses}`}
          title="Erkend in de community"
          aria-label="Erkend in de community"
        >
          <Image
            src="/community-badge.png"
            alt=""
            width={96}
            height={96}
            className="size-full object-contain"
          />
          <span className="recognized-sparkle recognized-sparkle-one" />
          <span className="recognized-sparkle recognized-sparkle-two" />
        </span>
      ) : null}
    </span>
  );
}
