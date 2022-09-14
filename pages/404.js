import Navigation from "../components/navigation";
import Footer from "../components/footer";

import Link from "next/link";

import React from "react";

export default function errorPage() {
  return (
    <>
      <Navigation />

      <div className="errorDiv">
        <h2>Помилка</h2>

        <Link href="/">
          <a>
            <button className="errorBtn">
              Повернутись на головну
            </button>
          </a>
        </Link>
      </div>
      <Footer />
    </>
  );
}
