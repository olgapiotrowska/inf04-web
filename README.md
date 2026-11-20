# Galeria Podróży

Projekt aplikacji internetowej stworzonej w React, umożliwiającej przeglądanie zdjęć, filtrowanie ich według kategorii, dodawanie własnych fotografii oraz stroną szczegółów każdego zdjęcia.

## Funkcjonalności aplikacji

- wyświetlanie galerii zdjęć z możliwością filtrowania według kategorii: Góry, Morze i Miasto,
- usuwanie zdjęć z galerii oraz oznaczanie ich jako ulubione,
- dodawanie nowych zdjęć za pomocą formularza (`/dodaj`),
- wyświetlanie szczegółowych informacji o wybranym zdjęciu na osobnej podstronie (`/zdjecie/:id`),
- wyświetlanie komunikatów informujących o ładowaniu danych lub wystąpieniu błędu,
- funkcja „Zdjęcie dnia”, która losuje fotografię z zewnętrznego API picsum.photos,
- obsługa nieprawidłowych adresów URL poprzez wyświetlenie strony błędu.

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja działa pod `http://localhost:5173`.

## Organizacja plików projektu

- `src/components/` — komponenty wielokrotnego użytku (`PhotoCard`,
  `Gallery`, `CategoryBar`, `Layout`, `Footer`, `ZdjecieDnia`)
- `src/pages/` — strony podpięte pod routing (`GaleriaPage`,
  `ZdjeciePage`, `DodajPage`, `NotFoundPage`)
- `src/services/` — warstwa komunikacji z danymi (`zdjecia.js`)
- `src/hooks/` — współdzielona logika ze stanem (`useZdjecia`)
- `public/photos.json` — dane startowe galerii

## Wykorzystane technologie

- React
- React Router
- Bootstrap
- Vite