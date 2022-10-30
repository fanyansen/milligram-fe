import React, { useEffect } from "react";
import "milligram";
import { MainLayout } from "./Components/MainLayout";
import "./App.css";

function App() {
  useEffect(() => {
    const binarySearch = (
      list: Array<number | string>,
      item: number | string
    ) => {
      // index terendah
      let low = 0;
      // jumlah array
      let high = list.length - 1;

      // looping selama variable low lebih rendah atau sama dengan variable high
      while (low <= high) {
        // Mencari index nilai tengah
        const midIndex = Math.floor((low + high) / 2);

        // Mengambil value nilai tengah
        const midValue = list[midIndex];

        // Jika value nilai tengah sama dengan item, maka index dari item sudah di dapatkan
        if (midValue === item) {
          return midIndex;
        }

        // Jika value nilai tengah lebih besar dari item, maka jumlah array akan diubah jadi jumlah kelompok array yg lebih kecil dari nilai midValue
        if (midValue > item) {
          high = midIndex - 1;
        } else {
          // Jika value nilai tengah lebih kecil dari item, maka index terendah akan di ubah menjadi nilai index terendah dari kelompok array yang lebih besar dari midValue
          low = midIndex + 1;
        }
      }

      return "value yang di cari tidak ada!"; // jika value tidak ditemukan
    };

    let list = [1, 5, 20, 35, 50, 65, 70];
    let pencarian = 20;
    console.log(`Index value yang di cari : ${binarySearch(list, pencarian)}`);
  });

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
