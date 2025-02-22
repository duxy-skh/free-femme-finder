
const SponsorScroller = () => {
  const sponsors = [
    "/sponsors/sephora.svg",
    "/sponsors/tiktok.svg",
    "/sponsors/loreal-logo.png",
    "/sponsors/mac-logo.png",
    "/sponsors/maybelline-logo.png",
    "/sponsors/nyx-logo.png",
  ];

  return (
    <div className="w-full py-8 overflow-hidden bg-white">
      <p className="text-center text-gray-600 mb-4">Sponsored By</p>
      <div className="relative">
        <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
          {[...sponsors, ...sponsors].map((logo, index) => (
            <div
              key={index}
              className="min-w-[200px] flex items-center justify-center mx-8"
            >
              <img
                src={logo}
                alt="Sponsor Logo"
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorScroller;

