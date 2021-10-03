export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between w-screen py-6 md:flex-row bg-dark-200">
      <div className="flex flex-row items-center justify-center mb-6 text-center md:mb-0 md:ml-16">
        <span className="font-semibold text-gray-500 font-proxima">
          Created by{" "}
          <a
            href="https://github.kevinthomas.codes/"
            target="_blank"
            className="text-emph-100"
          >
            TrustedMercury
          </a>
        </span>
      </div>
      <div className="flex flex-row items-center justify-center md:mr-16">
        <a
          href="https://github.com/TrustedMercury/react-next-template"
          target="_blank"
        >
          <div className="flex flex-row items-center justify-center px-5 py-3 rounded bg-gradient-to-r from-emph-100 to-emph-200">
            <span className="font-semibold text-gray-100 font-proxima">
              <i className="mr-2 fab fa-github"></i>Use this template
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
