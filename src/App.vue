<template>
  <div class="space-portfolio">
    <!-- Space Background with Stars -->
    <div class="space-bg">
      <canvas id="space-canvas"></canvas>
    </div>

    <!-- Top Navigation Bar (Control Panel) -->
    <nav class="control-panel">
      <div class="panel-header">
        <div class="logo-section">
          <span class="radar">📡</span>
          <div class="sys-info">
            <div class="sys-name">HENDRI ABADI — IT INFRASTRUCTURE</div>
            <div class="sys-status">SYSTEM ONLINE ✓</div>
          </div>
        </div>
        <div class="nav-buttons">
          <button @click="scrollTo('hero')" :class="['nav-btn', activeNav === 'hero' ? 'active' : '']">HOME</button>
          <button @click="scrollTo('about')" :class="['nav-btn', activeNav === 'about' ? 'active' : '']">PROFILE</button>
          <button @click="scrollTo('experience')" :class="['nav-btn', activeNav === 'experience' ? 'active' : '']">EXPERIENCE</button>
          <button @click="scrollTo('services')" :class="['nav-btn', activeNav === 'services' ? 'active' : '']">SKILLS</button>
          <button @click="scrollTo('contact')" :class="['nav-btn', activeNav === 'contact' ? 'active' : '']">CHANNEL</button>
        </div>
      </div>
      <div class="scan-line"></div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <div class="hero-container">
        <!-- Foto Profil -->
        <div class="hero-photo-wrapper">
          <div class="photo-frame">
            <img
              :src="photoSrc"
              alt="Hendri Abadi"
              class="profile-photo"
              @error="photoError = true"
              v-if="!photoError"
            />
            <div class="photo-placeholder" v-else>
              <span>👤</span>
              <small>Letakkan foto Anda di<br>public/images/profile.jpg</small>
            </div>
            <div class="photo-scan-line"></div>
          </div>
        </div>

        <div class="hologram">
          <div class="hologram-title">IT INFRASTRUCTURE SPECIALIST</div>
          <h1 class="main-title">HENDRI ABADI</h1>
          <div class="command-subtitle">Profesional IT Infrastructure | 3+ Tahun Pengalaman</div>
          <div class="hero-contact-info">
            <span>📱 081384681806</span>
            <span>✉️ abadi.hendri140@gmail.com</span>
            <span>📍 Jakarta</span>
          </div>
          <div class="status-bar">
            <div class="status-item" v-for="stat in heroStats" :key="stat.label">
              <span class="status-label">{{ stat.label }}</span>
              <span class="status-value">{{ stat.value }}</span>
            </div>
          </div>
          <div class="hero-btns">
            <button class="launch-btn" @click="scrollTo('experience')">LIHAT PENGALAMAN ▶</button>
            <button class="launch-btn-secondary" @click="scrollTo('contact')">HUBUNGI SAYA</button>
          </div>
        </div>
        <div class="floating-satellites">
          <div class="satellite" v-for="i in 5" :key="i" :style="{ '--delay': i * 0.2 + 's' }"></div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="section-container">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Bridging end-user support and backend infrastructure to ensure stable, secure, and high-performing IT operations</p>
        <div class="about-layout">
          <div class="about-photo-side">
            <div class="about-photo-frame">
              <img
              :src="photoSrc"
                alt="Hendri Abadi"
                class="about-photo"
                @error="photoError2 = true"
                v-if="!photoError2"
              />
              <div class="photo-placeholder-sm" v-else>👤</div>
            </div>
            <div class="about-cert-badges">
              <div class="cert-badge" v-for="cert in certifications" :key="cert">
                <span class="cert-icon">🏅</span>
                <span>{{ cert }}</span>
              </div>
            </div>
          </div>
          <div class="about-content-side">
            <div class="about-summary">
              <p>Profesional IT Infrastructure dengan lebih dari <strong>3 tahun pengalaman</strong> dalam pengelolaan jaringan dan server. Berpengalaman dalam instalasi software, jaringan infrastruktur serta konfigurasi perangkat jaringan <strong>(Cisco, Mikrotik)</strong>, virtualisasi menggunakan <strong>VMware, NAS dan SAN</strong>.</p>
              <p>Terbiasa menangani monitoring sistem, backup & recovery, dan pengamanan jaringan untuk menjaga stabilitas dan performa infrastruktur TI perusahaan. Memiliki kemampuan troubleshooting yang cepat dan efektif, serta terbiasa bekerja dalam tim lintas departemen.</p>
            </div>
            <div class="education-box">
              <div class="edu-header">🎓 PENDIDIKAN</div>
              <div class="edu-detail">
                <strong>Universitas Bina Sarana Informatika</strong>
                <span class="edu-year">2020 – 2024</span>
              </div>
              <div class="edu-prodi">Teknologi Informasi &nbsp;|&nbsp; IPK: <strong>3.87</strong></div>
            </div>
            <div class="profile-cards">
              <div class="profile-card" v-for="(item, idx) in profileItems" :key="idx">
                <div class="card-corner"></div>
                <div class="card-icon">{{ item.icon }}</div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience-section">
      <div class="section-container">
        <h2 class="section-title">Pengalaman Kerja</h2>
        <p class="section-subtitle"></p>
        <div class="timeline">
          <div class="timeline-item" v-for="(job, idx) in experiences" :key="idx">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="job-header">
                <div>
                  <div class="job-title">{{ job.title }}</div>
                  <div class="job-company">{{ job.company }}</div>
                </div>
                <div class="job-period">{{ job.period }}</div>
              </div>
              <ul class="job-duties">
                <li v-for="duty in job.duties" :key="duty">{{ duty }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="services" class="skills-section">
      <div class="section-container">
        <h2 class="section-title">SYSTEM CAPABILITIES</h2>
        <p class="section-subtitle">Kemampuan Teknis</p>
        <div class="skills-layout">
          <div class="skills-bars-col">
            <div class="skill-module" v-for="skill in skills" :key="skill.name">
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar-container">
                <div class="skill-bar-bg"></div>
                <div class="skill-bar-fill" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
          <div class="skills-tags-col">
            <div class="tag-group" v-for="group in toolGroups" :key="group.label">
              <div class="tag-group-label">{{ group.label }}</div>
              <div class="tag-group-items">
                <span class="tag" v-for="t in group.items" :key="t">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="section-container">
        <h2 class="section-title">INITIATE TRANSMISSION</h2>
        <p class="section-subtitle">Kirim pesan langsung ke inbox saya</p>
        <div class="contact-layout">
          <div class="contact-info-col">
            <div class="contact-info-card">
              <div class="contact-info-title">📡 DIRECT CHANNEL</div>
              <div class="contact-info-item">
                <span class="ci-icon">📱</span>
                <div>
                  <div class="ci-label">WhatsApp</div>
                  <a href="https://wa.me/6281384681806" target="_blank" class="ci-value">081384681806</a>
                </div>
              </div>
              <div class="contact-info-item">
                <span class="ci-icon">✉️</span>
                <div>
                  <div class="ci-label">Email</div>
                  <a href="mailto:abadi.hendri140@gmail.com" class="ci-value">abadi.hendri140@gmail.com</a>
                </div>
              </div>
              <div class="contact-info-item">
                <span class="ci-icon">📍</span>
                <div>
                  <div class="ci-label">Lokasi</div>
                  <div class="ci-value">Jakarta, Indonesia</div>
                </div>
              </div>

              <!-- Social Media -->
              <div class="social-title">🌐 SOCIAL MEDIA</div>
              <div class="social-links">
                <a href="https://instagram.com/" target="https://www.instagram.com/ndrrr_98/" class="social-btn social-ig" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/hendri-abadi-59397a157/" target="_blank" class="social-btn social-li" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/hendri.abadi" target="_blank" class="social-btn social-fb" title="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <form @submit.prevent="submitForm" class="transmission-form">
            <div class="form-group">
              <label class="form-label">ID CODE (Nama)</label>
              <input v-model="form.name" type="text" class="form-input" placeholder="Nama Anda" required>
            </div>
            <div class="form-group">
              <label class="form-label">SIGNAL ADDRESS (Email)</label>
              <input v-model="form.email" type="email" class="form-input" placeholder="Email Anda" required>
            </div>
            <div class="form-group">
              <label class="form-label">MESSAGE TYPE (Subjek)</label>
              <input v-model="form.subject" type="text" class="form-input" placeholder="Subjek pesan" required>
            </div>
            <div class="form-group">
              <label class="form-label">TRANSMISSION CONTENT (Pesan)</label>
              <textarea v-model="form.message" class="form-textarea" placeholder="Tulis pesan Anda di sini..." required></textarea>
            </div>
            <button type="submit" class="transmit-btn" :disabled="isSending">
              {{ isSending ? 'MENGIRIM...' : 'SEND TRANSMISSION ▶' }}
            </button>
            <p v-if="submitMessage" :class="['submit-status', submitStatus]">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-social">
          <a href="https://instagram.com/" target="_blank" class="footer-social-btn social-ig" title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" class="footer-social-btn social-li" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/hendri.abadiitu" target="_blank" class="footer-social-btn social-fb" title="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
        <p>HENDRI ABADI™ | IT Infrastructure Specialist | Jakarta</p>
        <p>📱 081384681806 &nbsp;|&nbsp; ✉️ abadi.hendri140@gmail.com</p>
        <p class="footer-tech">Built with Vue.js & GSAP</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

// ============================================================
// EMAILJS CONFIG
// Daftar gratis di https://www.emailjs.com
// Ganti tiga nilai di bawah ini setelah daftar:
// ============================================================
const EMAILJS_SERVICE_ID  = 'portofolio_service'   // contoh: ''
const EMAILJS_TEMPLATE_ID = 'template_rvjlrp5'  // contoh: ''
const EMAILJS_PUBLIC_KEY  = 'Ma9l-u2dVvm1HCNkR'   // contoh: 'AbCdEfGhIjKlMnOp'
// ============================================================

export default {
  setup() {
    const form = ref({ name: '', email: '', subject: '', message: '' })
    const submitMessage = ref('')
    const submitStatus  = ref('')
    const isSending     = ref(false)
    const activeNav     = ref('hero')
    const photoError    = ref(false)
    const photoError2   = ref(false)
    const photoSrc      = ref('/images/profile.jpg')

    // ── Hero Stats ────────────────────────────────────────────
    const heroStats = ref([
      { label: 'PENGALAMAN', value: '4+ Tahun' },
      { label: 'SERTIFIKASI', value: '3 Certs' },
      { label: 'IPK', value: '3.87' }
    ])

    // ── Profile Cards ─────────────────────────────────────────
    const profileItems = ref([
      {
        icon: '🚀',
        title: 'PENGALAMAN',
        description: 'Profesional IT Infrastructure 3+ tahun: jaringan, server, Cisco & Mikrotik di perusahaan asuransi dan keuangan.'
      },
      {
        icon: '⚡',
        title: 'KEAHLIAN',
        description: 'Spesialis VMware, NAS/SAN, Active Directory, CCTV/NVR, monitoring, backup & recovery, VPN L2TP/SSTP.'
      },
      {
        icon: '🔐',
        title: 'SERTIFIKASI',
        description: 'CCNA · Networking Administrasi Madya · BSI Entrepreneur — fokus infrastruktur aman & performa optimal.'
      }
    ])

    // ── Certifications ────────────────────────────────────────
    const certifications = ref([
      'CCNA',
      'Networking Administrasi Madya',
      'BSI Entrepreneur'
    ])

    // ── Experience (Timeline) ─────────────────────────────────
    const experiences = ref([
      {
        title: 'IT Infrastructure',
        company: 'PT. Asuransi Cakrawala Proteksi Indonesia',
        period: 'November 2023 – Sekarang',
        duties: [
          'Troubleshooting peripheral IT',
          'Check jaringan secara berkala',
          'Koordinasi keamanan server',
          'Backup server by remote',
          'Backup CCTV (NVR, HDR)',
          'Setting jaringan cabang',
          'Pengecekan Mikrotik Log',
          'Setting Mikrotik cabang via VPN L2TP/SSTP',
          'Setting email new user & kelola email lokal/eksternal',
          'Koordinasi terkait vendor',
          'Controller Active Directory & File Sharing'
        ]
      },
      {
        title: 'IT Support',
        company: 'PT. Pusat Gadai Indonesia',
        period: 'Juni 2022 – Oktober 2023',
        duties: [
          'Troubleshooting per Area Manager',
          'Troubleshooting di kantor pusat',
          'Setting CCTV & konfigurasi CCTV cabang agar bisa diakses di kantor',
          'Setting Mikrotik (DHCP, Statis, Load Balancing, Layer 7)'
        ]
      },
    ])

    // ── Skills ────────────────────────────────────────────────
    const skills = ref([
      { name: 'Network Administration (Cisco / Mikrotik)', level: 92 },
      { name: 'Windows Server & Active Directory',         level: 90 },
      { name: 'VMware / Virtualisasi',                     level: 85 },
      { name: 'NAS & SAN Setup',                           level: 85 },
      { name: 'CCTV / NVR / DVR / HDR',                   level: 90 },
      { name: 'Troubleshooting Hardware & Software',       level: 95 },
      { name: 'Backup & Recovery',                         level: 88 },
      { name: 'PHP / HTML / MySQL',                        level: 75 }
    ])

    // ── Tool Groups (Tags) ────────────────────────────────────
    const toolGroups = ref([
      {
        label: '🛠 TOOLS',
        items: ['VMware', 'Cisco', 'Mikrotik', 'Windows Server', 'PABX', 'CCTV', 'NVR', 'DVR', 'HDR', 'Windows Live Mail']
      },
      {
        label: '💻 HARD SKILLS',
        items: ['Setup Jaringan', 'Windows Server Setup', 'NAS/SAN', 'Domain Controller', 'VPN L2TP/SSTP', 'Active Directory']
      },
      {
        label: '🧠 SOFT SKILLS',
        items: ['Troubleshooting', 'Manajemen Waktu', 'Komunikatif', 'Team Work', 'Backup Server']
      },
      {
        label: '💾 PROGRAMMING',
        items: ['PHP', 'HTML', 'MySQL', 'Bootstrap', 'CodeIgniter']
      },
      {
        label: '🌐 BAHASA',
        items: ['Bahasa Indonesia', 'Bahasa Inggris']
      }
    ])

    // ── Scroll ────────────────────────────────────────────────
    const scrollTo = (section) => {
      activeNav.value = section
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: `#${section}`, offsetY: 80 },
        ease: 'power3.inOut'
      })
    }

    // ── Submit Form via EmailJS ───────────────────────────────
    const submitForm = async () => {
      isSending.value = true
      submitMessage.value = ''

      // Cek apakah EmailJS sudah dikonfigurasi
      if (
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
      ) {
        // Mode demo — belum dikonfigurasi
        await new Promise(r => setTimeout(r, 800))
        submitMessage.value = '⚠ EmailJS belum dikonfigurasi. Lihat komentar di App.vue untuk setup.'
        submitStatus.value = 'warning'
        isSending.value = false
        return
      }

      try {
        // Kirim via EmailJS REST API (tanpa install package)
        const payload = {
          service_id:  EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id:     EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name:    form.value.name,
            from_email:   form.value.email,
            subject:      form.value.subject,
            message:      form.value.message,
            to_name:      'Hendri Abadi'
          }
        }

        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })

        if (res.ok) {
          submitMessage.value = '✓ TRANSMISSION SUCCESSFUL — Pesan terkirim ke inbox Hendri!'
          submitStatus.value = 'success'
          form.value = { name: '', email: '', subject: '', message: '' }
        } else {
          throw new Error(`Status ${res.status}`)
        }
      } catch (err) {
        submitMessage.value = `✗ TRANSMISSION FAILED — ${err.message}. Coba hubungi via WhatsApp.`
        submitStatus.value = 'error'
      } finally {
        isSending.value = false
        setTimeout(() => { submitMessage.value = '' }, 6000)
      }
    }

    // ── onMounted ─────────────────────────────────────────────
    onMounted(() => {
      // Starfield
      const canvas = document.getElementById('space-canvas')
      if (canvas) {
        const ctx = canvas.getContext('2d')
        canvas.width  = window.innerWidth
        canvas.height = window.innerHeight

        const stars = Array.from({ length: 200 }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.5 + 0.5
        }))

        function drawStars() {
          ctx.fillStyle = 'rgba(15, 15, 30, 1)'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          stars.forEach(star => {
            ctx.fillStyle = `rgba(200, 220, 255, ${star.opacity})`
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
            ctx.fill()
            star.opacity += (Math.random() - 0.5) * 0.02
            if (star.opacity > 1)   star.opacity = 1
            if (star.opacity < 0.1) star.opacity = 0.1
          })
          requestAnimationFrame(drawStars)
        }
        drawStars()
        window.addEventListener('resize', () => {
          canvas.width  = window.innerWidth
          canvas.height = window.innerHeight
        })
      }

      // Animate timeline cards
      const timelineCards = document.querySelectorAll('.timeline-card')
      const tlObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            gsap.from(entry.target, { duration: 0.7, opacity: 0, x: -30, delay: i * 0.1, ease: 'power2.out' })
            tlObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1 })
      timelineCards.forEach(c => tlObserver.observe(c))

      // Animate skill bars
      const skillBars = document.querySelectorAll('.skill-bar-fill')
      const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const targetWidth = entry.target.style.width
            entry.target.style.width = '0'
            gsap.to(entry.target, { width: targetWidth, duration: 1.2, ease: 'power2.out' })
            skillObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.3 })
      skillBars.forEach(bar => skillObserver.observe(bar))
    })

    return {
      form, submitForm, submitMessage, submitStatus, isSending,
      activeNav, heroStats, profileItems, certifications,
      experiences, skills, toolGroups,
      scrollTo, photoError, photoError2, photoSrc
    }
  }
}
</script>

<style scoped>
</style>
