import './App.css';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import PageContainer from './container/PageContainer';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { basketTotalAmount, setDrawer } from './redux/slices/basketSlice';
import { useEffect } from 'react';

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(basketTotalAmount());
  }, [dispatch, products]);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />

        <Drawer
          onClose={() => dispatch(setDrawer())}
          className="drawer"
          anchor="right"
          open={drawer}
          PaperProps={{
            sx: { width: 300, padding: 2, backgroundColor: "#fff", boxShadow: 3, display: "flex", flexDirection: "column" }
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Shopping Cart</h2>

          <div style={{ flex: 1, overflowY: "auto" }}>
            {products && products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '8px',
                    backgroundColor: '#f5f5f5',
                    boxShadow: '1px 1px 5px rgba(0,0,0,0.1)'
                  }}
                >
                  <img
                    src={product.image}
                    width={50}
                    height={50}
                    alt={product.title}
                    style={{ borderRadius: '5px' }}
                  />
                  <div style={{ marginLeft: '10px', flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{product.title}</p>
                    <p style={{ margin: 0, color: 'gray' }}>${product.price}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <p style={{
                      margin: 0,
                      fontWeight: 'bold',
                      backgroundColor: '#ddd',
                      padding: '5px 10px',
                      borderRadius: '5px'
                    }}>
                      x {product.count}
                    </p>
                    <button
                      style={{
                        backgroundColor: '#ff4d4d',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s'
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = '#e60000')}
                      onMouseOut={(e) => (e.target.style.backgroundColor = '#ff4d4d')}
                    >
                      Delete
                    </button>
                  </div>
                </div>

              ))
            ) : (
              <p style={{ textAlign: 'center', color: 'gray' }}>Your cart is empty</p>
            )}
            <div>
              {products && products.length > 0 && (
                <div style={{
                  padding: "15px",
                  borderTop: "1px solid #ddd",
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  fontSize: "16px",

                }}>
                  <span>Total:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              )}
            </div>
          </div>


        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
