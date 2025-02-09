"use client"

import Image from "next/image";

import logo from "@/public/png/logo.png"

import { useState } from "react";
import { productData } from "@/libs/product";
import React from "react";
import Link from "next/link";

import wa from "@/public/whatsapp.svg"
import spay from "@/public/shopeepay.svg"
import bca from "@/public/bca.svg"
import permata from "@/public/permata.svg"
import gopay from "@/public/gopay.svg"
import dana from "@/public/dana.svg"
import qris from "@/public/qris.svg"
import jne from "@/public/jne.svg"
import idex from "@/public/idex.svg"
import jt from "@/public/jt.svg"
import sicepat from "@/public/sicepat.svg"
import lion from "@/public/lion.svg"
import sap from "@/public/sap.svg"
import ninja from "@/public/ninja.svg"

export default function Home() {
  const products = productData

  const [selectedImage, setSelectedImage] = useState(products.images[0]);

  return (
    <>
      <div className="max-w-[425px] mx-auto">
        <div className="flex justify-between items-center py-6 mx-4">
          <Image
            alt=""
            src={logo}
            className="w-28"
          />

          <div className="flex">
            <Link
              href={""}
              className="bg-green-700 text-white py-2 px-4 flex items-center rounded-lg"
            >
              <Image
                alt=""
                src={wa}
                className="w-6 me-2"
              />
              Ambil Diskon
            </Link>
          </div>
        </div>

        <div className="mx-4">
          {/* Bagian Gambar */}
          <div>
            <Image
              src={selectedImage}
              alt="Product"
              className="w-full h-96 object-cover shadow"
            />

            <div className="flex mt-4 space-x-3">
              {
                products.images.map((image, index) => (
                  <div key={index}>
                    <div className="flex-col justify-center rounded-[10px]">
                      <div className='w-full'>
                        <Image
                          key={index}
                          src={image}
                          alt=''
                          className={`w-18 h-18 object-cover rounded cursor-pointer border-2 ${selectedImage === image ? "border-blue-500" : "border-gray-300"
                            }`}
                          onClick={() => setSelectedImage(image)}
                        />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="flex space-x-2">
              <div className="mt-4 py-2 px-2 bg-black text-white text-sm">
                Ada Stock
              </div>
              <div className="mt-4 py-2 px-2 bg-red-900 text-white text-sm">
                Flash Sale 50%
              </div>
            </div>

            <h1 className='mt-4 text-2xl text-[#1F2D3E] font-semibold'>{products.name}</h1>

            <div className="flex items-center mt-2">
              <h1 className='text-3xl text-[#1F2D3E] font-semibold me-3'>{products.price}</h1>
              <h1 className='text-md text-[#1F2D3E] font-semibold line-through decoration-red-800'>Rp.359.000</h1>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 my-6"></div>

        <div className="mx-4 mb-8">
          <p>{products.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}</p>
        </div>

        <div className="mx-4 mb-10">
          <h1 className="font-semibold text-based mb-4">Metode Pembayaran :</h1>

          <div>
            <div className="flex space-x-4 items-center mb-5">
              <p className="font-extrabold text-red-900 text-xl">COD</p>
              <Image
                src={qris}
                alt="Product"
                className="w-32"
              />
              <Image
                src={bca}
                alt="Product"
                className="w-16"
              />
              <Image
                src={spay}
                alt="Product"
                className="w-16"
              />
            </div>
            <div className="flex space-x-4 items-center">
              <Image
                src={permata}
                alt="Product"
                className="w-28"
              />
              <Image
                src={gopay}
                alt="Product"
                className="w-20"
              />
              <Image
                src={dana}
                alt="Product"
                className="w-20"
              />
            </div>
          </div>
        </div>

        <div className="mx-4 mb-28">
          <h1 className="font-semibold text-based mb-4">Ekspedisi Pengiriman :</h1>

          <div>
            <div className="flex space-x-4 items-center mb-5">
              <Image
                src={jne}
                alt="Product"
                className="w-20"
              />
              <Image
                src={idex}
                alt="Product"
                className="w-14"
              />
              <Image
                src={jt}
                alt="Product"
                className="w-24"
              />
              <Image
                src={sicepat}
                alt="Product"
                className="w-14"
              />
            </div>
            <div className="flex space-x-4 items-center">
              <Image
                src={ninja}
                alt="Product"
                className="w-16"
              />
              <Image
                src={sap}
                alt="Product"
                className="w-16"
              />
              <Image
                src={lion}
                alt="Product"
                className="w-20"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <Link
            href={""}
            className="fixed bottom-6 right-4 left-4 bg-black text-white px-6 py-3 rounded-full shadow-lg transition-all text-lg font-semibold flex items-center justify-center"
          >
            <Image
              alt=""
              src={wa}
              className="w-7 me-2"
            />
            Checkout Sekarang
          </Link>
        </div>
      </div>
    </>
  );
}
