import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-8 bg-white/80 dark:bg-neutral-900/80 text-center">
      <p className="text-gray-900 dark:text-white">
        © {new Date().getFullYear()} Durugentik. {t("footer.developed_by")}{" "}
        <a
          href="https://sers.com.tr"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold font-league text-4xl"
        >
          sers
        </a>
        .
      </p>
    </footer>
  );
}