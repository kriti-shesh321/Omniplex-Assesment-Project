"use client";

export default function Buy() {
  const checkout = async () => {
    const res = await fetch("/api/create-checkout-session", { method: "POST" });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
    else alert("Could not start checkout");
  };

  return (
    <main className="p-20">
      <h1 className="text-2xl font-medium">Pro Plan — $10 (Test)</h1>
      <button onClick={checkout} className="mt-4 rounded px-4 py-2 border border-blue-700 bg-blue-600 hover:bg-blue-800">
        Pay with Stripe (Test)
      </button>
      <p className="mt-10 text-sm text-gray-400 italic">
        Use card <code>4242 4242 4242 4242</code>, any future date, any CVC.
      </p>
    </main>
  );
}