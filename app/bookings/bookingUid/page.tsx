"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface BookingData {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  email: string;
}

export default function BookingPage() {
  const router = useRouter();
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const bookingUid = searchParams.get("bookingUid") as string;

  useEffect(() => {
    if (!bookingUid) return;

    const fetchBooking = async () => {
      try {
        const res = await fetch(`/api/calcom/booking/${bookingUid}`);
        const data = await res.json();
        setBooking(data);
      } catch (error) {
        console.error("Erreur récupération réservation :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [bookingUid]);

  const handlePay = async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookingId: booking?.id,
        bookingTitle: booking?.title,
      }),
    });

    const data = await res.json();
    const stripe = await stripePromise;
    stripe?.redirectToCheckout({ sessionId: data.sessionId });
  };

  if (loading) return <div>Chargement de votre réservation...</div>;

  if (!booking) return <div>Aucune réservation trouvée.</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Confirmation de votre rendez-vous</h1>
      <p className="text-lg mb-2">Titre : {booking.title}</p>
      <p className="text-lg mb-2">Début : {new Date(booking.startTime).toLocaleString()}</p>
      <p className="text-lg mb-2">Fin : {new Date(booking.endTime).toLocaleString()}</p>
      <p className="text-lg mb-6">Email : {booking.email}</p>

      <button
        onClick={handlePay}
        className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700"
      >
        Payer maintenant
      </button>
    </div>
  );
}
