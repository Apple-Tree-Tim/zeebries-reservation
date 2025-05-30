import React, { JSX } from "react";
import { type SharedData } from '@/types';
import { Head, usePage, Link } from '@inertiajs/react';
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define booking data for reuse
const bookings = [
  {
    date: "21/5/2022",
    name: "John M.",
    orderNumber: "2025001",
    checkInOut: "21 mei / 28mei",
    price: "460,-",
    status: "Betaald",
    statusColor: "bg-[#00a508]",
  },
  {
    date: "21/5/2022",
    name: "John M.",
    orderNumber: "2025001",
    checkInOut: "21 mei / 28mei",
    price: "460,-",
    status: "Niet betaald",
    statusColor: "bg-[#a50500]",
  },
  {
    date: "21/5/2022",
    name: "John M.",
    orderNumber: "2025001",
    checkInOut: "21 mei / 28mei",
    price: "460,-",
    status: "Gedeeltelijk",
    statusColor: "bg-[#ff9800]",
  },
];

export const Reservations = (): JSX.Element => {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Reserveringen" />
      <div className="bg-neutral-50 flex flex-row justify-center w-full min-h-screen">
        <div className="bg-neutral-50 w-[1440px] relative py-16">
          <header className="flex items-center justify-between px-4 md:px-40">
            <h1 className="font-['Inter',Helvetica] text-xl font-semibold text-[#009416] md:text-[32px]">Vakantiepark de Zeebries</h1>
            {auth.user ? (
              <Link href={route('dashboard')}>
                <img className="h-[35px] w-[35px] object-cover md:h-[45px] md:w-[45px]" alt="User account" src="/icons8-user-96-1.png" />
              </Link>
            ) : (
              <Link href={route('login')}>
                <img className="h-[35px] w-[35px] object-cover md:h-[45px] md:w-[45px]" alt="User account" src="/icons8-user-96-1.png" />
              </Link>
            )}
          </header>

          <div className="py-2 px-40">
            <Link
              href={route('dashboard')}
              className="font-['Inter',Helvetica] font-normal text-[#009416] text-sm mb-4 block"
            >
              &lt; Terug
            </Link>

            <h2 className="font-['Inter',Helvetica] font-semibold text-black text-[32px] underline mb-16">
              Alle boekingen
            </h2>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-['Inter',Helvetica] font-semibold text-black text-sm">
                    Datum
                  </TableHead>
                  <TableHead className="font-['Inter',Helvetica] font-semibold text-black text-sm">
                    Naam
                  </TableHead>
                  <TableHead className="font-['Inter',Helvetica] font-semibold text-black text-sm">
                    Ordernummer
                  </TableHead>
                  <TableHead className="font-['Inter',Helvetica] font-semibold text-black text-sm">
                    In/uitcheck
                  </TableHead>
                  <TableHead className="font-['Inter',Helvetica] font-semibold text-black text-sm">
                    Prijs
                  </TableHead>
                  <TableHead className="font-['Inter',Helvetica] font-semibold text-black text-sm">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking, index) => (
                  <TableRow
                    key={index}
                    className="bg-white rounded-[10px] h-[81px] mb-3"
                  >
                    <TableCell className="opacity-60 font-['Inter',Helvetica] font-normal text-black text-2xl">
                      {booking.date}
                    </TableCell>
                    <TableCell className="opacity-60 font-['Inter',Helvetica] font-normal text-black text-2xl">
                      {booking.name}
                    </TableCell>
                    <TableCell className="opacity-60 font-['Inter',Helvetica] font-normal text-black text-2xl">
                      {booking.orderNumber}
                    </TableCell>
                    <TableCell className="opacity-60 font-['Inter',Helvetica] font-normal text-black text-2xl">
                      {booking.checkInOut}
                    </TableCell>
                    <TableCell className="opacity-60 font-['Inter',Helvetica] font-normal text-black text-2xl">
                      {booking.price}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${booking.statusColor} text-white rounded-[25px] w-[120px] h-12 flex items-center justify-center font-['Inter',Helvetica] font-medium text-sm`}
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
