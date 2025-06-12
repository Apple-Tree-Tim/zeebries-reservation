<!DOCTYPE html>
<html>
<body>
    <h1>Bevestiging van uw reservering</h1>

    <p>Bungalows:</p>
    <ul>
        @foreach ($reservation->items as $item)
            <li>{{ $item->bungalow->name }} ({{ $item->guests }} pers.) - &euro;{{ $item->total_cost }}</li>
        @endforeach
    </ul>

    <p>Periode: {{ $reservation->start_date }} - {{ $reservation->end_date }}</p>
    <p>Totaal: &euro;{{ $reservation->total_cost }}</p>

    <p>
        <a href="https://www.mollie.com/paymentscreen/ideal?amount={{ number_format($reservation->total_cost, 2, '.', '') }}&description=Reservering{{ $reservation->id }}&redirectUrl={{ urlencode('https://jouwsite.nl/bedankt') }}"
           style="display:inline-block;padding:10px 20px;background-color:#28a745;color:white;text-decoration:none;border-radius:5px;">
           Betaal nu met iDEAL
        </a>
    </p>
</body>
</html>
