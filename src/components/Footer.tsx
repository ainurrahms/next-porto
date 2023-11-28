const Footer = () => {
  return (
    <footer>
      <div className="padding-global">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-8">
            <div className="pt-8">
              <div className="grid-rows-auto grid grid-cols-2 justify-center gap-x-4 border-t border-solid border-gray-300 pt-12">
                <p className="text-sm">
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
