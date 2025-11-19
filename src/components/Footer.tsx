const falcodevsLogo =
  "https://falcodevs.blob.core.windows.net/falcodevs-images/falcodevs-logo-fd.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex items-center gap-3">
        <img src={falcodevsLogo} alt="FalcoDevs" className="h-8 w-8 object-contain" />
            <span className="text-lg font-semibold">FalcoDevs</span>
          </div>
          <p className="text-sm text-secondary-foreground/80">FalcoDevs SpA © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
