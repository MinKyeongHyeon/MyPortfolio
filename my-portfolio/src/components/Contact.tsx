"use client";

import { useState } from "react";

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="flex flex-col gap-3 items-start mt-6">
      {/* Email */}
      <button
        type="button"
        onClick={() => copyToClipboard("manemin2@gmal.com", "email")}
      >
        <span className="font-mono text-lg text-white mt-3.5">
          manemin2@gmail.com
        </span>
        {copiedItem === "email" && <span>✅</span>}
      </button>
      {/* Mobile */}
      <button
        type="button"
        onClick={() => copyToClipboard("010-4858-2859", "mobile")}
      >
        <span className="font-mono text-lg text-white mt-3.5">
          010-4858-2859
        </span>
        {copiedItem === "mobile" && <span>✅</span>}
      </button>
    </div>
  );
}
