import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Add this import
import Home from './Pages/Home';
import Inspectors from './Pages/Inspector/Inspectors';
import AccountDetailsI from './Pages/Inspector/AccountDetailsI';
import ProductForInspectionI from './Pages/Inspector/ProductForInspectionI';
import InspectedProductDetailsI from './Pages/Inspector/InspectedProductDetailsI';
import InspectedProductDetails2I from './Pages/Inspector/InspectedProductDetails2I';
import AddProductToInspectionI from './Pages/Inspector/AddProductToInspectionI';

import ConnectWallet from './Components/ConnectWallet/ConnectWallet';
import PendingI from './Pages/Inspector/PendingI';
import Pending2 from './Pages/Inspector/Pending2';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/inspector" element={<Inspectors />} />
            <Route path="/" element={<Home />} />
            <Route path="/accountdetails_I" element={<AccountDetailsI />} />
            <Route path="/productforinspection_I" element={<ProductForInspectionI/>}/>
            <Route path="/inspectedproductdetails_I" element={<InspectedProductDetailsI />} />
            <Route path="/inspectedproductdetails2_I" element={<InspectedProductDetails2I />} />
            <Route path="/addproducttoinspection_I" element={<AddProductToInspectionI/>} />
            <Route path="/connectwallet" element={<ConnectWallet />} />
            <Route path = "/pending_I" element= {<PendingI />} />
            <Route path = "/pending_2" element= {<Pending2 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

