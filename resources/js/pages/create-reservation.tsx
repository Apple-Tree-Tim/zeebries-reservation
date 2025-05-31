import { CheckIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export default function CreateReserve() {
  // Personal information fields
  const personalFields = [
    { id: "firstName", label: "Voornaam", className: "col-span-1" },
    { id: "lastName", label: "Achternaam", className: "col-span-1" },
    { id: "address", label: "Adres", className: "col-span-1" },
    { id: "postalCode", label: "Postcode", className: "col-span-1" },
    { id: "email", label: "E-mailadres", className: "col-span-1" },
    { id: "phone", label: "Telefoonummer", className: "col-span-1" },
  ];

  // Reservation details fields
  const reservationFields = [
    { id: "arrival", label: "Aankomst", className: "col-span-1" },
    { id: "departure", label: "Vertrek", className: "col-span-1" },
    { id: "guests", label: "Aantal gasten", className: "col-span-1" },
    { id: "phone2", label: "Telefoonummer", className: "col-span-1" },
  ];

  // Extra amenities
  const amenities = [
    { id: "fireplace", label: "Openhaard +20,-", checked: true },
    { id: "bath", label: "Ligbad +20,-", checked: true },
    { id: "sauna", label: "Sauna +30,-", checked: false },
    { id: "jacuzzi", label: "Jacuzzi +30,-", checked: false },
    {
      id: "waterpark",
      label: "Zwemparadijs (niet mogelijk)",
      checked: false,
      disabled: true,
    },
    { id: "wifi", label: "Wifi +20,-", checked: false },
    { id: "airco", label: "Airco +50,-", checked: false },
  ];

  // Payment methods
  const paymentMethods = [
    { id: "ideal", label: "Ideal", checked: true },
    { id: "paypal", label: "Paypal", checked: false },
    { id: "creditcard", label: "Creditcard", checked: false },
  ];

  return (
    <div className="bg-neutral-50 flex flex-row justify-center w-full">
      <div className="bg-neutral-50 w-full max-w-[1440px] relative px-10 py-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <h1 className="font-semibold text-[#009416] text-[32px] font-['Inter',Helvetica]">
            Vakantiepark de Zeebries
          </h1>
          <Avatar className="w-[45px] h-[45px]">
            <AvatarImage src="/icons8-user-96-1.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </header>

        <main className="space-y-10">
          {/* Title */}
          <h2 className="font-semibold text-black text-[32px] font-['Inter',Helvetica] underline">
            Reseveren
          </h2>

          {/* Personal Information Section */}
          <section>
            <h3 className="font-semibold text-black text-xl font-['Inter',Helvetica] mb-4">
              Persoonlijke gegevens
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {personalFields.map((field) => (
                <div key={field.id} className={field.className}>
                  <Input
                    id={field.id}
                    placeholder={field.label}
                    className="text-3xl px-5 py-6 rounded-[10px] bg-white text-black"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Reservation Details Section */}
          <section>
            <h3 className="font-semibold text-black text-xl font-['Inter',Helvetica] mb-4">
              Reserveringsdetails
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {reservationFields.map(
                (field, index) =>
                  index < 2 && (
                    <div key={field.id} className={field.className}>
                      <Input
                        id={field.id}
                        placeholder={field.label}
                        className="text-3xl px-5 py-6 rounded-[10px] text-black"
                      />
                    </div>
                  ),
              )}
            </div>

            {/* Bungalows Dropdown */}
            <div className="mb-4">
              <Select>
                <SelectTrigger className="text-sm px-5 py-6 rounded-[10px] bg-white w-full opacity-60">
                  <SelectValue placeholder="Bungalows" />
                </SelectTrigger>
                <SelectContent>
                  {/* Bungalow options would go here */}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {reservationFields.map(
                (field, index) =>
                  index >= 2 && (
                    <div key={field.id} className={field.className}>
                      <Input
                        id={field.id}
                        placeholder={field.label}
                        className="text-2xl px-5 py-6 rounded-[10px] text-black"
                      />
                    </div>
                  ),
              )}
            </div>
          </section>

          {/* Extra Amenities Section */}
          <section>
            <h3 className="font-semibold text-black text-xl font-['Inter',Helvetica] mb-4">
              Extra voorzieningen
            </h3>
            <div className="space-y-2">
              {amenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center space-x-3">
                  <div
                    className={`w-5 h-5 rounded border-2 border-solid border-black flex items-center justify-center ${amenity.id === "waterpark" ? "bg-[#ff0000]" : amenity.checked ? "bg-[#009416]" : ""}`}
                  >
                    {amenity.checked && (
                      <CheckIcon className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <Label
                    htmlFor={amenity.id}
                    className="text-xl font-normal text-black font-['Inter',Helvetica]"
                  >
                    {amenity.label}
                  </Label>
                </div>
              ))}
            </div>
          </section>

          {/* Payment Methods Section */}
          <section>
            <h3 className="font-semibold text-black text-xl font-['Inter',Helvetica] mb-4">
              Betaalmogelijkheden
            </h3>
            <RadioGroup defaultValue="ideal">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded border-2 border-solid border-black flex items-center justify-center">
                    {method.checked && (
                      <div></div>
                    )}
                  </div>
                  <Label
                    htmlFor={method.id}
                    className="text-xl text-black font-normal font-['Inter',Helvetica]"
                  >
                    {method.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </section>

          {/* Discount Code Section */}
          <section>
            <h3 className="font-medium text-black text-xl font-['Inter',Helvetica] mb-4">
              Kortingscode
            </h3>
            <Input
              placeholder="21MEI"
              className="text-xl px-5 py-6 rounded-[10px] text-black w-full opacity-60"
            />
          </section>

          {/* Price Section */}
          <section>
            <h3 className="font-medium text-black text-xl font-['Inter',Helvetica] mb-4">
              Prijs
            </h3>
            <Card className="rounded-[10px] w-[884px] bg-white p-0">
              <CardContent className="p-0">
                <div className="flex items-center px-5 py-4">
                  <span className="font-normal text-black text-medium font-['Inter',Helvetica]">
                    460,-
                  </span>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Pay Button */}
          <div className="flex justify-end">
            <Button className="bg-[#009416] text-white rounded-[35px] h-[70px] w-[213px] text-xl font-medium hover:bg-[#009416] hover:cursor-pointer">
              Betalen
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}