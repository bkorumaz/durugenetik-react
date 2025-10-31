import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-8 text-center border-t border-emerald-400/20 bg-slate-950/80 backdrop-blur">
      <p className="text-sm text-emerald-100/80">
        © {new Date().getFullYear()} Durugentik. {t("footer.developed_by")}{" "}
        <a
          href="https://sers.com.tr"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold font-league text-3xl text-white hover:text-emerald-300 transition"
        >
          sers
        </a>
        .
      </p>
    </footer>
  );
}