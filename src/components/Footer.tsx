const Footer = () => {
  return (
    <footer>
      <div className="padding-global">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-8">
            <div className="pt-8">
              <div className="grid-rows-auto flex grid-cols-2 flex-col items-center justify-center justify-items-center gap-4 gap-x-4 border-t border-solid border-gray-300 pt-12 md:grid">
                <p className="justify-self-start text-sm">
                  Created and Inspired By:{' '}
                  <a href="https://vndella.webflow.io/" className="underline">
                    Carson Idsinga
                  </a>
                </p>
                <p className="justify-self-end text-sm">© {new Date().getFullYear()} Me. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
