import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { type SharedData } from '@/types';
import { Head, usePage, Link } from '@inertiajs/react';
import { SearchIcon } from 'lucide-react';

const bungalows = [
  {
    id: 1,
    name: 'Garnaal',
    image: '/mask-group.png',
    persons: 4,
    bedrooms: 2,
    price: 100,
    description: 'us ut non a etiam mattis. Non est vestibulum eu elit nunc consequat. Nibh convallis hac eget vitae scelerisque vitae morbi tortor. Dignissim et mi justo lectus nisl massa. Ut aliquam pellentesque hendrerit iaculis ac sed condimentum vulputate. Elementum mauris id sollicitudin aliquam diam hendrerit. Laoreet ultrices tempor enim massa diam viverra. Felis a nec odio ipsum porta ac vel pharetra in. Dignissim consectetur tincidunt a eget arcu. Id pretium facilisis adipiscing nisl aliquet. Ipsum tristique at diam pellentesque platea massa. Feugiat suspendisse nam sollicitudin vitae neque nunc et varius donec. Sit quis blandit eget netus augue a mauris. Accumsan quam adipiscing massa justo enim eros eu duis. Pretium tristique arcu in feugiat arcu pellentesque.',
    facilities: ['WiFi', 'TV', 'Keuken', 'Badkamer', 'Terras'],
    images: ['/mask-group.png', 'https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg', 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg'],
  },
  {
    id: 2,
    name: 'Krab',
    image: '/mask-group-1.png',
    persons: 6,
    bedrooms: 3,
    price: 120,
    description: 'us ut non a etiam mattis. Non est vestibulum eu elit nunc consequat. Nibh convallis hac eget vitae scelerisque vitae morbi tortor. Dignissim et mi justo lectus nisl massa. Ut aliquam pellentesque hendrerit iaculis ac sed condimentum vulputate. Elementum mauris id sollicitudin aliquam diam hendrerit. Laoreet ultrices tempor enim massa diam viverra. Felis a nec odio ipsum porta ac vel pharetra in. Dignissim consectetur tincidunt a eget arcu. Id pretium facilisis adipiscing nisl aliquet. Ipsum tristique at diam pellentesque platea massa. Feugiat suspendisse nam sollicitudin vitae neque nunc et varius donec. Sit quis blandit eget netus augue a mauris. Accumsan quam adipiscing massa justo enim eros eu duis. Pretium tristique arcu in feugiat arcu pellentesque.',
    facilities: ['WiFi', 'TV', 'Keuken', 'Badkamer', 'Terras'],
    images: ['/mask-group-1.png', 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg', 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'],
  },
  {
    id: 3,
    name: 'Kreeft',
    image: '/mask-group-2.png',
    persons: 8,
    bedrooms: 3,
    price: 150,
    description: 'us ut non a etiam mattis. Non est vestibulum eu elit nunc consequat. Nibh convallis hac eget vitae scelerisque vitae morbi tortor. Dignissim et mi justo lectus nisl massa. Ut aliquam pellentesque hendrerit iaculis ac sed condimentum vulputate. Elementum mauris id sollicitudin aliquam diam hendrerit. Laoreet ultrices tempor enim massa diam viverra. Felis a nec odio ipsum porta ac vel pharetra in. Dignissim consectetur tincidunt a eget arcu. Id pretium facilisis adipiscing nisl aliquet. Ipsum tristique at diam pellentesque platea massa. Feugiat suspendisse nam sollicitudin vitae neque nunc et varius donec. Sit quis blandit eget netus augue a mauris. Accumsan quam adipiscing massa justo enim eros eu duis. Pretium tristique arcu in feugiat arcu pellentesque.',
    facilities: ['WiFi', 'TV', 'Keuken', 'Badkamer', 'Terras'],
    images: ['/mask-group-2.png', 'https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg', 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'],
  },
];

export default function Home() {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="De Zeebries">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>
      <main className="flex w-full flex-row justify-center bg-neutral-50">
        <div className="relative w-full max-w-[1440px] bg-neutral-50 py-8 md:py-16">
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

          <section className="mt-8 flex justify-center px-4 md:mt-16">
            <Card className="relative h-[85px] w-full max-w-[795px] rounded-[65px] border-none bg-[#009416]">
              <CardContent className="flex h-full items-center justify-between p-6 pl-12">
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-white">In/ uitchecken</span>
                    <div className="rounded">
                      <input
                        type="text"
                        placeholder="Datum"
                        className="w-[100px] bg-transparent text-[14px] text-white placeholder-white/60 outline-none"
                      />
                    </div>
                  </div>

                  <Separator orientation="vertical" className="h-9 bg-white/50" />

                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-white">Wie</span>
                    <div className="rounded">
                      <input
                        type="text"
                        placeholder="Aantal gasten"
                        className="w-[100px] bg-transparent text-[14px] text-white placeholder-white/60 outline-none"
                      />
                    </div>
                  </div>

                  <Separator orientation="vertical" className="h-9 bg-white/50" />

                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-white">Hoeveel</span>
                    <div className="rounded">
                      <input
                        type="text"
                        placeholder="Prijs"
                        className="w-[100px] bg-transparent text-[14px] text-white placeholder-white/60 outline-none"
                      />
                    </div>
                  </div>

                  <Separator orientation="vertical" className="h-9 bg-white/50" />

                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-white">Extra voorzieningen</span>
                    <div className="rounded">
                      <input
                        type="text"
                        placeholder="Kies extras"
                        className="w-[100px] bg-transparent text-[14px] text-white placeholder-white/60 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex h-[40px] w-[40px] items-start justify-center">
                  <SearchIcon className="h-[30px] w-[30px] text-white" />
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-12 px-4 md:mt-20 md:px-40">
            <h2 className="font-['Inter',Helvetica] text-2xl font-semibold text-black underline md:text-[32px]">Alle bungalows</h2>

            <div className="mt-6 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
              {bungalows.map((bungalow) => (
                <Dialog key={bungalow.id}>
                  <DialogTrigger asChild>
                    <div className="mx-auto w-full max-w-[364px] cursor-pointer transition duration-300 hover:opacity-90">
                      <img className="aspect-square w-full object-cover" alt={`Bungalow ${bungalow.name}`} src={bungalow.image} />
                      <h3 className="mt-3 font-['Inter',Helvetica] text-base font-semibold text-black">Bungalow &quot;{bungalow.name}&quot;</h3>
                      <p className="mt-1 font-['Inter',Helvetica] text-sm font-semibold text-[#00000099]">
                        {bungalow.persons} Personen, {bungalow.bedrooms} Slaapkamers, + Extra Voorzieningen, Basisprijs per nacht {bungalow.price},-
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="min-w-[1000px] border-none p-0 shadow-xl">
                    <div className="max-h-[100vh] overflow-y-auto bg-white p-6 md:p-10 rounded-2xl">
                      <h2 className="border-b-2 text-black pb-2 text-3xl font-bold">Bungalow &quot;{bungalow.name}&quot;</h2>

                      <div className="mt-4">
                        <p className="text-base leading-relaxed text-gray-700">{bungalow.description}</p>
                      </div>

                      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <img
                          src={bungalow.images[0]}
                          alt={`Bungalow ${bungalow.name} foto 2`}
                          className="h-full w-full object-cover"
                        />
                        <img
                          src={bungalow.images[1]}
                          alt={`Bungalow ${bungalow.name} foto 3`}
                          className="h-full w-full object-cover"
                        />
                        <img
                          src={bungalow.images[2]}
                          alt={`Bungalow ${bungalow.name} foto 4`}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="mt-6 flex items-end justify-end">
                        <Link href={route('create-reservation', { id: bungalow.id })}>
                          <Button
                            type="button"
                            className="rounded-full bg-[#009416] px-8 py-6 text-lg font-semibold text-white transition-all hover:bg-[#007812] hover:cursor-pointer"
                          >
                            Reserveren
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
