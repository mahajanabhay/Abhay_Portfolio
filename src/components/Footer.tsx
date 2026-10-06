export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-neutral-500 md:flex-row">

        <p>
          © {new Date().getFullYear()} Abhay Mahajan
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/mahajanabhay"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abhay-mahajan-59300023b"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black"
          >
            LinkedIn
          </a>

          <a
            href="https://instagram.com/shot.by.abhay"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black"
          >
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}