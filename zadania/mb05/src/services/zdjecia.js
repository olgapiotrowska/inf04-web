/**
 * @typedef {Object}  Zdjecie
 * @property {number} id
 * @property {string} title
 * @property {string}  description
 * @property {string} category
 * @property {string} image
 * @property {string} imageLarge
 * @property {string} alt
 * @property {boolean} favorite
 */


let zdjecia = null


/**
 * Pobiera listę zdjęć z `public/photos.json`, po pierwszym pobraniu
 * zwraca dane z pamięci, bez kolejnego zapytania do serwera.
 * @returns {Promise<Array<Zdjecie>>}
 */
export async function pobierzZdjecia() {
  if (zdjecia) return zdjecia
  const odpowiedz = await fetch('/photos.json')
  if (!odpowiedz.ok) throw new Error('Błąd serwera: ' + odpowiedz.status)
  zdjecia = await odpowiedz.json()
  return zdjecia
}



/**
 * Funkcja zwraca jedno zdjęcie o podanym `id` albo `null`, gdy zdjęcie nie istnieje.
 * @param {string|number} id
 * @returns {Promise<Zdjecie|null>}
 */
export async function pobierzZdjecie(id) {
  const lista = await pobierzZdjecia()
  return lista.find(z => z.id === Number(id)) ?? null
}

 

/**
 * Usuwa zdjęcie o podanym `id` z listy. Zwraca nowa tablicę która komponent zapisuje w stanie.
 * @param {number} id
 * @returns {Array<Zdjecie>} nowa lista, bez usuniętego zdjęcia
 */
export function usunZdjecie(id) {
  zdjecia = zdjecia.filter(z => z.id !== id)
  return zdjecia
}



/**
 * Przełącza pole `favorite` zdjęcia o podanym `id`. Zwraca nowa tablicę która komponent zapisuje w stanie.
 * @param {number} id
 * @returns {Array<Zdjecie>} nowa lista, z przełączoną flagą
 */
export function przelaczUlubione(id) {
  zdjecia = zdjecia.map(z => (z.id === id ? { ...z, favorite: !z.favorite } : z))
  return zdjecia
}


/**
 * Dodaje nowe zdjęcie na koniec listy, nadając mu kolejne `id`. Zwraca nowa tablicę która komponent zapisuje w stanie.
 * @param {{title: string, description: string, category: string, image: string, imageLarge: string, alt: string}} nowe
 * @returns {Array<Zdjecie>} nowa lista, z dodanym zdjęciem
 */
export function dodajZdjecie(nowe) {
  const noweId = Math.max(...zdjecia.map(z => z.id)) + 1
  zdjecia = [...zdjecia, { ...nowe, id: noweId, favorite: false }]
  return zdjecia
}
