import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-8 bg-gray-700 dark:bg-gray-900 text-center">
      <p className="text-white">
        © {new Date().getFullYear()} Durugentik. {t("footer.developed_by")} sers coding.
      </p>
    </footer>
  );
}