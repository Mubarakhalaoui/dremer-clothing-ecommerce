import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="h-[400px] sm:h-[500px] bg-[url('/assets/images/hero.jpg')] bg-cover bg-center flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl text-white font-bold text-center">
            Discover the Latest Fashion
          </h1>
        </section>

        {/* Sale Banner Section */}
        <section className="bg-red-500 py-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-0 text-center text-white">
            <div>
              <h2 className="text-2xl font-bold">50% Off</h2>
              <p>Men's Collection</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">40% Off</h2>
              <p>Women's Collection</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">30% Off</h2>
              <p>Kids' Collection</p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-0">
            <div className="category bg-gray-100 p-6 flex items-center justify-center relative group overflow-hidden">
              <img
                src="/assets/images/clothes-category.jpg"
                alt="Clothes"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white relative z-10">
                Clothes
              </h2>
            </div>
            <div className="category bg-gray-100 p-6 flex items-center justify-center relative group overflow-hidden">
              <img
                src="/assets/images/shoes-category.jpg"
                alt="Shoes"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white relative z-10">
                Shoes
              </h2>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 px-4 sm:px-0">
            <div className="product bg-gray-100 p-6 flex flex-col items-center">
              <img
                src="/assets/images/product1.jpg"
                alt="Product 1"
                className="w-48 h-48 object-cover"
              />
              <h3 className="text-xl font-bold mt-4">Product 1</h3>
              <p className="text-red-500 mt-2">$120</p>
            </div>
            <div className="product bg-gray-100 p-6 flex flex-col items-center">
              <img
                src="/assets/images/product2.jpg"
                alt="Product 2"
                className="w-48 h-48 object-cover"
              />
              <h3 className="text-xl font-bold mt-4">Product 2</h3>
              <p className="text-red-500 mt-2">$140</p>
            </div>
            <div className="product bg-gray-100 p-6 flex flex-col items-center">
              <img
                src="/assets/images/product3.jpg"
                alt="Product 3"
                className="w-48 h-48 object-cover"
              />
              <h3 className="text-xl font-bold mt-4">Product 3</h3>
              <p className="text-red-500 mt-2">$110</p>
            </div>
            <div className="product bg-gray-100 p-6 flex flex-col items-center">
              <img
                src="/assets/images/product4.jpg"
                alt="Product 4"
                className="w-48 h-48 object-cover"
              />
              <h3 className="text-xl font-bold mt-4">Product 4</h3>
              <p className="text-red-500 mt-2">$99</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
