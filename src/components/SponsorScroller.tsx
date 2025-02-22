
const SponsorScroller = () => {
  const sponsors = [
    "/sponsors/sephora.png",
    "/sponsors/tiktok.svg",
    "/sponsors/myprotein.png",
    "/sponsors/method.png",
    "/sponsors/kinnd.png",
    "/sponsors/giveme.png",
    "/sponsors/alyaskin.png",
  ];

  return (
    <div className="w-full py-8 overflow-hidden bg-white">
      <p className="text-center text-lg font-semibold text-purple-600 mb-6">Sponsored By</p>
      <div className="relative">
        <div className="flex md:animate-[scroll_8s_linear_infinite] animate-[scroll_8s_linear_infinite] hover:[animation-play-state:paused]">
          {[...sponsors, ...sponsors].map((logo, index) => (
            <div
              key={index}
              className="min-w-[200px] flex items-center justify-center mx-8"
            >
              <img
                src={logo}
                alt="Sponsor Logo"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorScroller;
