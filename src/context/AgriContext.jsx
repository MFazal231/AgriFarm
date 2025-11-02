import { createContext, useState, useContext } from 'react';

const AgriContext = createContext();

export const useAgriContext = () => {
  const context = useContext(AgriContext);
  if (!context) {
    throw new Error('useAgriContext must be used within AgriProvider');
  }
  return context;
};

export const AgriProvider = ({ children }) => {
  const [registeredFarmers, setRegisteredFarmers] = useState([]);
  const [availableCrops, setAvailableCrops] = useState([
    {
      id: 1,
      farmerName: 'John Smith',
      crop: 'Wheat',
      quantity: 500,
      location: 'Iowa, USA',
      price: 300,
    },
    {
      id: 2,
      farmerName: 'Maria Garcia',
      crop: 'Corn',
      quantity: 800,
      location: 'Nebraska, USA',
      price: 450,
    },
    {
      id: 3,
      farmerName: 'David Chen',
      crop: 'Rice',
      quantity: 600,
      location: 'California, USA',
      price: 520,
    },
    {
      id: 4,
      farmerName: 'Sarah Johnson',
      crop: 'Soybeans',
      quantity: 400,
      location: 'Illinois, USA',
      price: 380,
    },
    {
      id: 5,
      farmerName: 'Ahmed Hassan',
      crop: 'Cotton',
      quantity: 350,
      location: 'Texas, USA',
      price: 425,
    },
    {
      id: 6,
      farmerName: 'Priya Patel',
      crop: 'Tomatoes',
      quantity: 250,
      location: 'Florida, USA',
      price: 200,
    },
  ]);
  const [purchasedCrops, setPurchasedCrops] = useState([]);

  const addFarmerCrop = (cropData) => {
    const newCrop = {
      id: availableCrops.length + 1,
      ...cropData,
    };
    setAvailableCrops([...availableCrops, newCrop]);
    setRegisteredFarmers([...registeredFarmers, cropData]);
  };

  const purchaseCrop = (crop) => {
    setPurchasedCrops([...purchasedCrops, crop]);
    // Update available quantity
    setAvailableCrops(availableCrops.map(c => 
      c.id === crop.id ? { ...c, quantity: c.quantity - 1 } : c
    ).filter(c => c.quantity > 0));
  };

  const value = {
    registeredFarmers,
    availableCrops,
    purchasedCrops,
    addFarmerCrop,
    purchaseCrop,
  };

  return <AgriContext.Provider value={value}>{children}</AgriContext.Provider>;
};

