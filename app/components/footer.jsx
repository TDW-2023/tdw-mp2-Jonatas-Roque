export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-center bottom-0 lg:text-left">
      <div className="container p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 text-center mx-auto">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
              Links
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a className="text-neutral-800 dark:text-neutral-200">Link 1</a>
              </li>
              <li>
                <a className="text-neutral-800 dark:text-neutral-200">Link 2</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
              Links
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a className="text-neutral-800 dark:text-neutral-200">Link 1</a>
              </li>
              <li>
                <a className="text-neutral-800 dark:text-neutral-200">Link 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright: Jónatas Roque
      </div>
    </footer>
  );
}
