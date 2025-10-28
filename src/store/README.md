# Arsitektur Store (Redux Toolkit + Redux Saga)

Struktur ini dirancang modular untuk memudahkan penambahan screen/fitur baru.

## Komponen Utama
- `reducers/` berisi slice per domain: `app`, `loading`, `errors`.
- `sagas/` berisi root saga dan watcher/worker per domain: `index.tsx`.
- `selectors` dapat diambil dari slice atau ditulis terpisah sesuai modul.

## Pola Penambahan Modul Baru
1. Buat slice di `src/store/reducers/<nama-modul>.ts`.
2. (Opsional) Buat saga di `src/store/sagas/<nama-modul>.ts` dengan watcher dan worker.
3. Ekspor selector di file slice atau `src/store/selectors/<nama-modul>.ts`.
4. Tambahkan slice ke `src/store/reducers/index.tsx`.
5. Tambahkan watcher ke `src/store/sagas/index.tsx`.

## Loading & Error Terpusat
- Gunakan `withLoadingAndErrors(key, worker)` untuk membungkus worker saga.
- `loading.map[key]` menandakan status loading operasi.
- `errors.map[key]` menyimpan entry error terbaru per operasi.

## Entity Adapter
- Gunakan `createEntityAdapter` bila modul membutuhkan normalisasi data.
- Ekspor selectors dari slice modul untuk mengambil data ter-normalisasi.

## Type Safety
- Semua slice dan action bertipe (TypeScript). Tambahkan `types.ts` bila skema kompleks.

## Testabilitas
- Buat unit test untuk reducers dan saga di `__tests__/`.