# TUGAS_MODUL-10_AMMAR

# Laporan Praktikum Modul 10 – Git

## 1. Identitas

| | |
| **Nama** | Muhammad Ammar Fathin |
| **NIM** | K3525065 |
| **Mata Kuliah** | Desain Web |
| **Dosen Pengampu** | Vearen Dika Sofirudin, S.pd., M.ed. |

---

## 2. Deskripsi Tugas

Pada praktikum ini mahasiswa mempelajari teknik *versioning* menggunakan Git, mulai dari membuat repositori lokal, melakukan *add*, *commit*, dan *push*, hingga membuat *branch*, *merge*, *tagging*, dan melihat *log*.

Tugas yang dikerjakan:

1. Membuat akun di platform Git (GitHub/GitLab/Bitbucket).
2. Membuat repositori baru yang berisi kumpulan karya selama perkuliahan.
3. Mengumpulkan URL repositori pada assignment Google Classroom.

---

## 3. Tools yang Digunakan

- **Git** (Git CMD / Git Bash)
- **GitHub** sebagai remote repository
- **SSH Key (RSA)** untuk autentikasi tanpa login (opsional)
- Text editor / IDE sesuai kebutuhan

---

## 4. Langkah-Langkah Pengerjaan

### 1 Konfigurasi Awal (sekali saja)

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@contoh.com"
```

### 2 Membuat Repositori Baru

Buat repositori kosong di GitHub, lalu di folder lokal jalankan:

```bash
git init
```

### 3 Clone Repositori (jika repositori sudah ada)

```bash
git clone /jalur/ke/repositori
git clone namapengguna@host:/jalur/ke/repositori
```

### 4 Cek Status, Add & Commit

```bash
git status
git add <namaberkas>
git add *
git commit -m "Pesan komit"
```

### 5 Menghubungkan ke Remote & Push

```bash
git remote add origin <alamat-git-pada-server>
git branch -M main
git push -u origin main
```

Push berikutnya cukup:

```bash
git push origin main
```

### 6 Branching

```bash
git branch
git checkout -b fitur_x
git checkout main
git branch -d fitur_x
git push origin <cabang>
```

### 7 Update & Merge

```bash
git pull
git fetch
git merge <cabang>
git diff <cabang_asal> <cabang_tujuan>
```

Jika terjadi konflik, edit berkas yang ditunjukkan Git, lalu:

```bash
git add <namaberkas>
git commit -m "Menyelesaikan konflik"
```

### 8 Tagging

```bash
git tag 1.0.0 1b2e1d63ff
git push origin --tags
```

### 9 Melihat Log

```bash
git log
git log --author=bob
git log --pretty=oneline
git log --graph --oneline --decorate --all
git log --name-status
git reflog
git reflog --relative-date
```

### 10 Mengembalikan Perubahan Lokal

```bash
git checkout -- <namaberkas>
git fetch origin
git reset --hard origin/main
```

## 5. Kesimpulan

Dengan Git, setiap perubahan pada *source code* tercatat dengan jelas (apa yang diubah, kapan, dan oleh siapa), sehingga mudah ditelusuri dan dikembalikan jika terjadi kesalahan. Fitur *branch* memungkinkan pengembangan fitur secara terisolasi tanpa mengganggu kode utama, dan *remote repository* seperti GitHub mempermudah kolaborasi dalam tim. Melalui praktikum ini, mahasiswa memahami alur kerja dasar Git (`add` → `commit` → `push`) serta perintah pendukung seperti `branch`, `merge`, `tag`, dan `log`.