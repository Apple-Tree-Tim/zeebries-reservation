import { PencilIcon, PlusIcon, TrashIcon } from "lucide-react";
import React, { JSX } from "react";
import { type SharedData } from '@/types';
import { Head, usePage, Link } from '@inertiajs/react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Dashboard = (): JSX.Element => {
  // Recent bookings data
  const recentBookings = [
    {
      date: "21/5/2022",
      name: "John M.",
      orderNumber: "2025001",
      checkInOut: "21 mei / 28mei",
      price: "460,-",
      status: "Betaald",
      statusColor: "#00a508",
    },
    {
      date: "21/5/2022",
      name: "John M.",
      orderNumber: "2025001",
      checkInOut: "21 mei / 28mei",
      price: "460,-",
      status: "Niet betaald",
      statusColor: "#a50500",
    },
    {
      date: "21/5/2022",
      name: "John M.",
      orderNumber: "2025001",
      checkInOut: "21 mei / 28mei",
      price: "460,-",
      status: "Gedeeltelijk",
      statusColor: "#ff9800",
    },
  ];

  // Discount codes data
  const discountCodes = [
    {
      date: "21/5/2022",
      code: "MEI21",
      discount: "10%",
    },
  ];

  // Flexible pricing options data
  const flexiblePricing = [
    {
      period: "21/5/2022 - 26/5/2022",
      name: "Last minute",
      discount: "10%",
    },
  ];

  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Dashboard" />
      <div className="bg-neutral-50 flex flex-row justify-center w-full">
        <div className="bg-neutral-50 w-[1440px] relative py-16">
          {/* Header */}
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

          {/* Dashboard Title */}
          <div className="mt-16 px-40">
            <h2 className="font-semibold text-black text-[32px] underline">
              Dashboard
            </h2>
          </div>

          {/* Reporting Section */}
          <section className="mt-6 px-40">
            <h3 className="font-semibold text-black text-xl mb-4">
              Rapportage (Hudige maand)
            </h3>
            <div className="flex gap-10">
              <Card className="w-[230px] h-[230px] bg-[#00a508] rounded-[25px] border-none">
                <CardContent className="flex flex-col items-center justify-center h-full p-0">
                  <p className="opacity-60 font-semibold text-white text-xl">
                    Omzet
                  </p>
                  <p className="font-semibold text-white text-[40px] mt-4">
                    460,-
                  </p>
                </CardContent>
              </Card>
              <Card className="w-[230px] h-[230px] bg-[#196dff] rounded-[25px] border-none">
                <CardContent className="flex flex-col items-center justify-center h-full p-0">
                  <p className="opacity-60 font-semibold text-white text-xl">
                    Boekingen
                  </p>
                  <p className="font-semibold text-white text-[40px] mt-4">1</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recent Bookings Section */}
          <section className="mt-16 px-40">
            <h3 className="font-semibold text-black text-xl mb-4">
              Recente boekingen
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-black text-sm">
                    Datum
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Naam
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Ordernummer
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    In/uitcheck
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Prijs
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentBookings.map((booking, index) => (
                  <TableRow
                    key={index}
                    className="h-[81px] bg-white rounded-[10px]"
                  >
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {booking.date}
                    </TableCell>
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {booking.name}
                    </TableCell>
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {booking.orderNumber}
                    </TableCell>
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {booking.checkInOut}
                    </TableCell>
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {booking.price}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className="w-[120px] h-12 rounded-[25px] flex items-center justify-center"
                        style={{ backgroundColor: booking.statusColor }}
                      >
                        <span className="font-medium text-white text-sm">
                          {booking.status}
                        </span>
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-center mt-8">
              <Link href={route('reservations')} className="font-semibold text-black text-xl">
                Alle boekingen &gt;
              </Link>
            </div>
          </section>

          {/* Discount Codes Section */}
          <section className="mt-16 px-40">
            <h3 className="font-semibold text-black text-xl mb-4">
              Kortingscode
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-black text-sm">
                    Datum
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Code
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Korting
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Bewerken
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {discountCodes.map((code, index) => (
                  <TableRow
                    key={index}
                    className="h-[81px] bg-white rounded-[10px]"
                  >
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {code.date}
                    </TableCell>
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {code.code}
                    </TableCell>
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {code.discount}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          className="w-12 h-12 rounded-3xl bg-[#ff9800] hover:bg-[#e68a00]"
                        >
                          <PencilIcon className="w-[18px] h-[18px] text-white" />
                        </Button>
                        <Button
                          size="icon"
                          className="w-12 h-12 rounded-3xl bg-[#a50500] hover:bg-[#940500]"
                        >
                          <TrashIcon className="w-5 h-5 text-white" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-center mt-8">
              <Button
                size="icon"
                className="w-12 h-12 rounded-3xl bg-[#00a508] hover:bg-[#009407]"
              >
                <PlusIcon className="w-6 h-6 text-white" />
              </Button>
            </div>
          </section>

          {/* Flexible Pricing Options Section */}
          <section className="mt-16 px-40">
            <h3 className="font-semibold text-black text-xl mb-4">
              Flexibele prijsopties
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-black text-sm">
                    Periode
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Naam
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Korting
                  </TableHead>
                  <TableHead className="font-semibold text-black text-sm">
                    Bewerken
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {flexiblePricing.map((option, index) => (
                  <TableRow
                    key={index}
                    className="h-[81px] bg-white rounded-[10px]"
                  >
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {option.period}
                    </TableCell>
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {option.name}
                    </TableCell>
                    <TableCell className="opacity-60 font-normal text-black text-2xl">
                      {option.discount}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          className="w-12 h-12 rounded-3xl bg-[#ff9800] hover:bg-[#e68a00]"
                        >
                          <PencilIcon className="w-[18px] h-[18px] text-white" />
                        </Button>
                        <Button
                          size="icon"
                          className="w-12 h-12 rounded-3xl bg-[#a50500] hover:bg-[#940500]"
                        >
                          <TrashIcon className="w-5 h-5 text-white" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-center mt-8">
              <Button
                size="icon"
                className="w-12 h-12 rounded-3xl bg-[#00a508] hover:bg-[#009407]"
              >
                <PlusIcon className="w-6 h-6 text-white" />
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
