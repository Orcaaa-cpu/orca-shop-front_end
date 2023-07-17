import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
import food from '../img/food.jpg';
import gitar from '../img/gitar.jpg';
import hs from '../img/hs.jpg';
import af from '../img/af.jpg';
import jm from '../img/jm.jpg';
import ks from '../img/ks.jpg';
import Otomotif from '../img/otomotif.jpg';
import per from '../img/per.jpg';
import pk from '../img/pk.jpg';
import pr from '../img/pr.jpg';
import sk from '../img/sk.jpg';
import sr from '../img/sr.jpg';
import tk from '../img/tk.jpg';
import tr from '../img/tr.jpg';

// Detail produk
const products = [
  {
    id: 1,
    name: 'Produk 1',
    price: 'Rp 100.000',
    stock: 5,
    image: '1.jpg',
  },
  {
    id: 2,
    name: 'Produk 2',
    price: 'Rp 200.000',
    stock: 10,
    image: '2.jpg',
  },
  {
    id: 3,
    name: 'Produk 3',
    price: 'Rp 300.000',
    stock: 3,
    image: '4.jpg',
  },
];

function HomePage() {
  const [loadedImages, setLoadedImages] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadImage = async () => {
      const imagePromises = products.map((product) =>
        import(`../img/${product.image}`).then((module) => ({ id: product.id, image: module.default }))
      );

      const loadedImages = await Promise.all(imagePromises);
      setLoadedImages(loadedImages);
    };

    loadImage();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      const isLoginFormFilled = true; // Ganti dengan kondisi form login yang sesuai

      if (isLoginFormFilled) {
        navigate('/login');
      }
    }
  };

  const handleBuyClick = (productId) => {
    const product = products.find((p) => p.id === productId);

    if (product) {
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const cartItemCount = cartItems.length;

  // Menghitung total harga dari cartItems
  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const product = products.find((p) => p.id === item.id);
      if (product) {
        total += parseInt(product.price.replace(/\D/g, ''), 10);
      }
    });
    return `Rp ${total.toLocaleString()}`;
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3">
              <div className="logo">
                <a href="/" className="logo-link">
                  <img src={logo} alt="Logo" />
                </a>
                <span className="container-logo">ORCA SHOP</span>
              </div>
            </div>
            <div className="col-6">
              <div className="search-bar">
                <input type="text" placeholder="Cari produk, brand, dan lainnya" />
                <button className="search-button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <div className="login-cart-container">
                <div className={`login-btn ${isLoggedIn ? 'active' : ''}`} onClick={handleLoginClick}>
                  <FontAwesomeIcon icon={faUser} />
                  {isLoggedIn && (
                    <div className="overlay">
                      <form className="login-form">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                      </form>
                      <p>Belum punya akun? <a href="/">Daftar</a></p>
                    </div>
                  )}
                </div>
                <div className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="cart-count">{cartItemCount}</span>
                  {cartItemCount > 0 && (
                    <div className="cart-overlay">
                      <div className="cart-items">
                        {cartItems.map((item) => (
                          <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                              <h4>{item.name}</h4>
                              <p>{item.price}</p>
                            </div>
                            <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="cart-summary">
                        <p>Total Items: {cartItemCount}</p>
                        <p>Total Price: {calculateTotalPrice()}</p>
                        <button className="checkout-button">Checkout</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className={`homepage-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="homepage-nav-list">
            <li>
              <a href="/">
                <img src={pk} alt="Pakaian Wanita" />
                <span className="nav-text">Pakaian Wanita</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={ks} alt="Komputer & Aksesoris" />
                <span className="nav-text">Komputer & Aksesoris</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={hs} alt="Handpone & Aksesoris" />
                <span className="nav-text">Handpone & Aksesoris</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={pr} alt="Pakaian Pria" />
                <span className="nav-text">Pakaian Pria</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={sr} alt="Sepatu Pria" />
                <span className="nav-text">Sepatu Pria</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={tr} alt="Tas Pria" />
                <span className="nav-text">Tas Pria</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={af} alt="Aksesoris Fashion" />
                <span className="nav-text">Aksesoris Fashion</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={jm} alt="Jam Tangan" />
                <span className="nav-text">Jam Tangan</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={gitar} alt="Hobi & Koleksi" />
                <span className="nav-text">Hobi & Koleksi</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Otomotif} alt="Otomotif" />
                <span className="nav-text">Otomotif</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={tk} alt="Tas Wanita" />
                <span className="nav-text">Tas Wanita</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={sk} alt="Sepatu Wanita" />
                <span className="nav-text">Sepatu Wanita</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={per} alt="Perlengkapan Rumah" />
                <span className="nav-text">Perlengkapan Rumah</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={food} alt="Makanan & Minuman" />
                <span className="nav-text">Makanan & Minuman</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="homepage-content">
        <div className="homepage-products">
          <h2>Produk Terbaru</h2>
          <div className="row">
            {loadedImages.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="product-card">
                  <img src={product.image} alt={`Product ${product.id}`} className="product-image" />
                  <h3>{products[product.id - 1].name}</h3>
                  <p>Harga: {products[product.id - 1].price}</p>
                  <p>Stok: {products[product.id - 1].stock}</p>
                  <button
                    className="buy-button"
                    onClick={() => handleBuyClick(product.id)}
                    disabled={products[product.id - 1].stock === 0}
                  >
                    Beli
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="homepage-footer">
        <p>Hak Cipta &copy; 2023</p>
      </footer>
    </div>
  );
}

export default HomePage;
