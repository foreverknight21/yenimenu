import React from "react";

const menu = {
  "Mezeler": [
    {
      name: "Haydari",
      weight: "150 g",
      price: "85₺",
      image: "https://images.unsplash.com/photo-1613145998972-1444e50c5f26"
    },
    {
      name: "Atom",
      weight: "140 g",
      price: "95₺",
      image: "https://images.unsplash.com/photo-1608731069103-79c4b5d1ed2d"
    },
    {
      name: "Fava",
      weight: "130 g",
      price: "90₺",
      image: "https://images.unsplash.com/photo-1613146101956-05be962d7f0f"
    }
  ],
  "Kahvaltılar": [
    {
      name: "Serpme Kahvaltı (2 Kişilik)",
      weight: "850 g",
      price: "₺495",
      image: "https://images.unsplash.com/photo-1604908178060-6e59efbbe41a"
    },
    {
      name: "Ev Kahvaltısı",
      weight: "550 g",
      price: "₺360",
      image: "https://images.unsplash.com/photo-1578922864601-89a01c7591a6"
    },
    {
      name: "Pancake (Bal ve meyve parçaları ile)",
      weight: "300 g",
      price: "₺270",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
    },
    {
      name: "Sacda Sıcak Kahvaltı",
      weight: "600 g",
      price: "₺375",
      image: "https://images.unsplash.com/photo-1604147706283-cb41c1e65bfa"
    },
    {
      name: "Bazlama Tost",
      weight: "350 g",
      price: "₺365",
      image: "https://images.unsplash.com/photo-1559563363-5b7f58c97dfd"
    },
    {
      name: "Çok Peynirli Tost",
      weight: "320 g",
      price: "₺385",
      image: "https://images.unsplash.com/photo-1585238341986-3c9e0e6c7d1d"
    },
    {
      name: "Ekşi Maya, Mozzarella ve Domates",
      weight: "280 g",
      price: "₺360",
      image: "https://images.unsplash.com/photo-1603052875927-48cfb00b1c50"
    },
    {
      name: "Granola",
      weight: "350 g",
      price: "₺375",
      image: "https://images.unsplash.com/photo-1585238342023-dde2b1be0e54"
    },
    {
      name: "Kahvaltı Salatası",
      weight: "300 g",
      price: "₺270",
      image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85"
    },
    {
      name: "Füme Dana Etli Kruvasan Tost",
      weight: "330 g",
      price: "₺495",
      image: "https://images.unsplash.com/photo-1620385016162-2d37f14288ba"
    },
    {
      name: "Marine Somonlu Kruvasan Tost",
      weight: "340 g",
      price: "₺495",
      image: "https://images.unsplash.com/photo-1603048292095-58a405167554"
    }
  ]
};

export default function DigitalMenu() {
  return (
    <div className="min-h-screen bg-white p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Mervelerdeyiz Dijital Menü</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(menu).map(([category, items]) => (
          <div key={category} className="border rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">{category}</h2>
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex flex-col md:flex-row items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-xl" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg">{item.name}</span>
                      <span className="text-sm text-gray-500">{item.weight}</span>
                    </div>
                    <div className="text-right font-semibold text-base">{item.price}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
