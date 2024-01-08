import { Inter, Roboto } from "next/font/google";
import "./globals.scss";

import { DataContextProvider } from "./context/userContext";
import { UserFilesContextProvider } from "./context/userFilesContext";
import { FilteredContextProvider } from "./context/filteredContext";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "bookgram",
  description: "Salve seus livros PDF em nuvem e leia em qualquer lugar!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="./favicom.ico" type="image/x-icon" />
      </head>
      <body className={roboto.className}>
        <DataContextProvider>
          <UserFilesContextProvider>
            <FilteredContextProvider>{children}</FilteredContextProvider>
          </UserFilesContextProvider>
        </DataContextProvider>
        {/*

                ──▒▒▒▒▒───
                ─▒─▄▒─▄▒──
                ─▒▒▒▒▒▒▒──
                ─▒─▒─▒─▒──
            ░░░░░░░░░░░░░░░░░░░
            ░█▀▀ ░█▀█ ░█ ░█▀▀ ░
            ░█▀▀ ░█▀▀ ░█ ░█ ░░░
            ░▀▀▀ ░▀ ░░░▀ ░▀▀▀ ░
            ░░░░░░░░░░░░░░░░░░░
            by: felip.codes
      */}
      </body>
    </html>
  );
}
