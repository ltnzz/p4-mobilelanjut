# MyTodos – React Native

## Informasi Mahasiswa
- Nama  : Latanza Akbar Fadilah
- NIM   : 2410501004  
- Kelas  : B  
- Aplikasi : MyTodos

## Deskripsi Aplikasi
MyTodos ini adalah aplikasi mobile berbasis React Native yang memungkinkan pengguna untuk:  
- Menambahkan, mengedit, dan menghapus todo.  
- Mengatur due date dan prioritas (high, medium, low) untuk tiap todo.  
- Memfilter todo berdasarkan status: semua, aktif, atau selesai.  
- Drag & drop untuk mengatur urutan todo.  
- Dark & Light mode.  
- Menyimpan data secara lokal menggunakan `AsyncStorage`.

## Hooks yang Digunakan
- **useState**:  
  Mengatur state lokal seperti input form todo dan tema dark/light.

- **useEffect**:  
  Menyimpan dan mengambil data todo dari `AsyncStorage` setiap kali state todo berubah.

- **useReducer**:  
  Mengelola logika todo dengan action types:  
  - `ADD_TODO` – menambahkan todo baru  
  - `TOGGLE_TODO` – menandai todo selesai/belum selesai  
  - `DELETE_TODO` – menghapus todo  
  - `EDIT_TODO` – mengubah teks todo  
  - `CLEAR_DONE` – menghapus semua todo yang selesai

- **Custom Hook**:  
  - `useTodos` – Mengambil daftar todo sesuai filter, menghitung statistik (total, active, completed), dan menyediakan fungsi operasi todo.  
  - `useFilter` – Mengatur state filter aktif dan menyediakan opsi filter.  
  - `useTodoContext` – Mengakses state global todo dari `TodoProvider`.  
  - `useTheme` – Mengakses dan mengubah tema dark/light dari `ThemeProvider`.

## Flow Diagram (Sederhana)
```text
[AddTodoForm] ---> [useTodos] ---> [TodoProvider] ---> [AsyncStorage]
[FilterBar] ---> [useFilter] ---> [useTodos] ---> [DraggableFlatList]
````

## Cara Menjalankan

# Clone repo atau pastikan proyek ada di folder lokal
- git clone [URL_REPO]   # opsional, kalau dari GitHub
- cd [NAMA_FOLDER_PROYEK]

1. Install dependencies:

```bash
npm install
```

2. Jalankan aplikasi dengan Expo:

```bash
npx expo start
```

3. Scan QR code menggunakan Expo Go di smartphone atau jalankan emulator.

## Tips Penggunaan

* Tekan lama todo untuk drag & drop mengubah urutan.
* Klik checkbox untuk menandai todo selesai.
* Pilih prioritas saat menambahkan todo agar tampil berwarna.
* Gunakan tombol Light/Dark mode untuk mengganti tema aplikasi.

```
