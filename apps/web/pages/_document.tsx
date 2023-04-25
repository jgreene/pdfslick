import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📃</text></svg>" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
         {/* <link href="/viewer.css" rel="stylesheet" /> */}
         <link rel="icon" href="/symbol.svg" type="image/svg+xml"></link>
      </Head>
      <body className="h-full bg-white">
        <Main />
        <NextScript />
        <div id="printContainer" />
        <dialog id="printServiceDialog" className="min-w-[200px]">
          <div className="row">
            <span data-l10n-id="print_progress_message">Preparing document for printing…</span>
          </div>
          <div className="row">
            <progress value="0" max="100"></progress>
            <span data-l10n-id="print_progress_percent" data-l10n-args='{ "progress": 0 }' className="relative-progress">0%</span>
          </div>
          <div className="buttonRow">
            <button id="printCancel" className="dialogButton"><span data-l10n-id="print_progress_close">Cancel</span></button>
          </div>
        </dialog>
      </body>
    </Html>
  );
}
