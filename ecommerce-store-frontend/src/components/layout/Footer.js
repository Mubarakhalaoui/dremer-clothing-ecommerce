function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-700">
            © 2024 Your Store. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
