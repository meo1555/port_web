
<template>
  <div id="app">
    
    <!-- Soft blue-purple ambient background -->
    <div class="ambient-background" aria-hidden="true">
      <div class="glow-orb glow-orb-blue"></div>
      <div class="glow-orb glow-orb-purple"></div>
      <div class="glow-orb glow-orb-pink"></div>

      <span
        v-for="n in 28"
        :key="'ambient-sparkle-' + n"
        class="ambient-sparkle"
        :style="{
          left: ((n * 37) % 97) + '%',
          top: ((n * 53) % 95) + '%',
          animationDelay: ((n * 0.7) % 7) + 's',
          animationDuration: (4 + (n % 4) * 1.5) + 's',
          fontSize: (5 + (n % 3) * 3) + 'px'
        }"
      >✦</span>
    </div>

    
      
<div v-if="detailProject" class="project-detail-page">
      <div class="detail-topbar">
        <a href="./" class="logo">port<span>.web</span></a>
        <a href="./#projects" class="detail-back">← กลับไปหน้าผลงาน</a>
      </div>

      <main class="detail-container">
        <p class="section-label">PROJECT / {{ detailProject.number }}</p>
        <p class="detail-category">{{ detailProject.category }} · Selected Work</p>
        <h1>{{ detailProject.title }}</h1>
        <p class="detail-summary">{{ detailProject.description }}</p>

        <section class="detail-panel">
          <p class="section-label">ABOUT THIS PROJECT</p>
          <h2>รายละเอียดผลงาน</h2>
          <p class="detail-description">{{ detailProject.details }}</p>
        </section>

        <section class="detail-panel">
          <p class="section-label">TOOLS & TOPICS</p>
          <h2>เครื่องมือและทักษะที่เกี่ยวข้อง</h2>
          <div class="modal-tags">
            <span v-for="tag in detailProject.tags" :key="tag">{{ tag }}</span>
          </div>
        </section>

        <div class="detail-actions">
          <a
            v-if="detailProject.link"
            :href="detailProject.link"
            class="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >ดูผลงานจริง ↗</a>
          <a href="./#projects" class="secondary-button">กลับไปดูผลงานทั้งหมด</a>
        </div>
      </main>
    </div>

    <div v-else>
    <Navbar />

    <main>
      <section id="home" class="hero-section">
        <div class="container hero-layout">
          <div class="hero-content">
            <p class="hero-label">
              <span class="status-dot"></span>
                My Portfolio
            </p>

            <h1>
              Orraphan<br />
              <span>Praphaphunsap</span>
            </h1>

            <p class="hero-description">
              เดี๋ยวกลับมาเขียน
            </p>

            <div class="hero-buttons">
              <a href="#projects" class="primary-button">
                My Projects
              </a>

              <a href="#about" class="secondary-button">
                About me
              </a>
            </div>

            <div class="hero-interests">
              <span>Programming</span>
              <span>Web Development</span>
              <span>Creative Technology</span>
              <span>Digital Art</span>
              <span>อยากติดมหาลัยค้าบบบบบบ</span>
            </div>
          </div>

          <div class="hero-art">
            <div class="art-orbit orbit-one"></div>
            <div class="art-orbit orbit-two"></div>

            <div class="art-center">
              <span class="art-bracket">&lt;</span>
              <span class="art-slash">/</span>
              <span class="art-bracket">&gt;</span>
            </div>

            <div class="floating-card card-top">
              <span class="card-icon">01</span>
              <span>Coding</span>
            </div>

            <div class="floating-card card-bottom">
              <span class="card-icon">02</span>
              <span>Art</span>
            </div>

            

            <div class="art-caption">
              <span>MY SKILLS</span>
            </div>
          </div>
        </div>

        <div class="hero-bottom container">
          <span>SELECTED WORKS</span>
          <a href="#projects">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section id="about" class="section">
        <div class="container about-layout">
          <div class="section-heading">
            <p class="section-label">01 / ABOUT ME</p>
            <h2 class="section-title">
              Statement Of Purpose
            </h2>
          </div>

          <div class="about-content">
            <p class="about-intro">
              เดี๋ยวกลับมาเขียน
            </p>

            <p class="section-description">
              เดี๋ยวกลับมาเขียน
            </p>

            <p class="section-description">
              เดี๋ยวกลับมาเขียน
            </p>

            <div class="about-facts">
              <div>
                <span class="fact-number">01</span>
                <span class="fact-title">Learn</span>
                <span class="fact-description">เรียนรู้ ปรับตัว และพัฒนาสกิล</span>
              </div>

              <div>
                <span class="fact-number">02</span>
                <span class="fact-title">Build</span>
                <span class="fact-description">จัดทำผลงาน</span>
              </div>

              <div>
                <span class="fact-number">03</span>
                <span class="fact-title">Improve</span>
                <span class="fact-description">พัฒนาความสามารถอย่างสม่ำเสมอ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section projects-section">
        <div class="container">
          <div class="section-heading">
            <p class="section-label">02 / My Projects</p>
            <h2 class="section-title">Things I've worked on.</h2>
            <p class="section-description">
              รวมผลงานการเรียนรู้ การแข่งขัน และการทดลองสร้างสิ่งใหม่ ๆ
            </p>
          </div>

          <div class="project-filters">
            <button
              v-for="category in categories"
              :key="category"
              :class="{ active: selectedCategory === category }"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>

          <div class="project-grid">
            <ProjectCard
              v-for="project in filteredProjects"
              :key="project.id"
              :project="project"
              @select="openProject"
            />
          </div>

          <p v-if="filteredProjects.length === 0" class="empty-projects">
            ยังไม่มีผลงานในหมวดหมู่นี้
          </p>
        </div>
      </section>

      
<section id="internship" class="section internship-section">
  <div class="container">
    <div class="section-heading">
      <p class="section-label">03 / INTERNSHIP EXPERIENCE</p>
      <h2 class="section-title">Real Work. Real Experience.</h2>
      <p class="section-description">
        เรียนรู้จากการทำงานจริง และนำความรู้ด้านเทคโนโลยีสารสนเทศมาใช้แก้ปัญหา
      </p>
    </div>

    <div class="internship-card">
      <div class="internship-number">INTERNSHIP / 01</div>
      <h3>โรงพยาบาลชัยภูมิ</h3>
      <p class="internship-department">
        แผนกเทคโนโลยีสารสนเทศ (IT)
      </p>
      <p class="internship-description">
        ได้เรียนรู้การทำงานด้านเทคโนโลยีสารสนเทศในสถานพยาบาล
        พร้อมฝึกแก้ไขปัญหาและช่วยสนับสนุนการใช้งานอุปกรณ์คอมพิวเตอร์
        ให้แก่บุคลากร
      </p>

      <div class="internship-tasks">
        <article>
          <span>01</span>
          <div>
            <h4>Computer & Printer Support</h4>
            <p>ตรวจสอบและช่วยแก้ไขปัญหาคอมพิวเตอร์และเครื่องพิมพ์</p>
          </div>
        </article>

        <article>
          <span>02</span>
          <div>
            <h4>Network Support</h4>
            <p>ตรวจสอบและเปลี่ยน IP Address ของคอมพิวเตอร์ตามงานที่ได้รับมอบหมาย</p>
          </div>
        </article>

        <article>
          <span>03</span>
          <div>
            <h4>Technical Support</h4>
            <p>ช่วยพยาบาลและบุคลากรแก้ไขปัญหาการใช้งานคอมพิวเตอร์</p>
          </div>
        </article>
      </div>

      <div class="internship-learning">
        <span class="learning-label">WHAT I LEARNED</span>
        <div class="skill-tags">
          <span>Problem Solving</span>
          <span>IT Support</span>
          <span>Networking</span>
          <span>Communication</span>
        </div>
      </div>
    </div>
  </div>
</section>


      <section id="skills" class="section skills-section">
        <div class="container">
          <div class="section-heading">
            <p class="section-label">03 / SKILLS & TOOLS</p>
            <h2 class="section-title">Tools I use to create.</h2>
            <p class="section-description">
              ทักษะที่ได้ฝึกฝนจากการเรียนและการทำโปรเจกต์
            </p>
          </div>

          <div class="skills-grid">
            <article
              v-for="group in skillGroups"
              :key="group.title"
              class="skill-card"
            >
              <span class="skill-icon">{{ group.icon }}</span>
              <h3>{{ group.title }}</h3>
              <p>{{ group.description }}</p>

              <div class="skill-tags">
                <span
                  v-for="skill in group.skills"
                  :key="skill"
                >
                  {{ skill }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section approach-section">
        <div class="container approach-layout">
          <div class="section-heading">
            <p class="section-label">04 / MY APPROACH</p>
            <h2 class="section-title">
              Learn by doing.
            </h2>
          </div>

          <div class="approach-list">
            <article class="approach-item">
              <span>01</span>
              <div>
                <h3>Understand the problem</h3>
                <p>
                  ทำความเข้าใจโจทย์และวางแผนก่อนเริ่มพัฒนา
                </p>
              </div>
            </article>

            <article class="approach-item">
              <span>02</span>
              <div>
                <h3>Build and experiment</h3>
                <p>
                  ทดลองใช้เครื่องมือและลงมือสร้างผลงานด้วยตัวเอง
                </p>
              </div>
            </article>

            <article class="approach-item">
              <span>03</span>
              <div>
                <h3>Test and improve</h3>
                <p>
                  ตรวจสอบข้อผิดพลาด แก้ไข และเรียนรู้จากสิ่งที่ทำ
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ContactSection :email="contactEmail" />
    </main>

    <footer class="site-footer">
      <div class="container footer-content">
        <a href="#home" class="logo">port<span>.web</span></a>
        <p>Designed and built with Vue.js</p>
        <span>© 2026 Portfolio</span>
      </div>
    </footer>

    <div
      v-if="selectedProject"
      class="modal-backdrop"
      @click.self="selectedProject = null"
    >
      <section
        class="project-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="selectedProject.title"
      >
        <button
          class="modal-close"
          aria-label="ปิดหน้าต่าง"
          @click="selectedProject = null"
        >
          ×
        </button>

        <p class="section-label">
          PROJECT / {{ selectedProject.number }}
        </p>

        <h2>{{ selectedProject.title }}</h2>
        <p class="modal-description">
          {{ selectedProject.details }}
        </p>

        <div class="modal-tags">
          <span
            v-for="tag in selectedProject.tags"
            :key="tag"
          >
            {{ tag }}
          </span>
        </div>

        <div class="modal-actions">
          <a
            v-if="selectedProject.link"
            :href="selectedProject.link"
            class="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            ดูผลงานจริง ↗
          </a>

          <button
            class="secondary-button"
            @click="selectedProject = null"
          >
            ปิดรายละเอียด
          </button>
        </div>
      </section>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ProjectCard from './components/ProjectCard.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',

  components: {
    Navbar,
    ProjectCard,
    ContactSection
  },

  data() {
    return {
      selectedCategory: 'All',
      selectedProject: null,

      contactEmail: 'qwqoop1@gmail.com',

      categories: [
        'All',
        'Programming',
        'Web',
        'Creative'
      ],

      projects: [
        {
          id: 1,
          number: '01',
          title: 'AIoT - Based Sign Language Analysis System',
          shortTitle: 'Sign Language AIoT',
          symbol: '</>',
          type: 'ai',
          category: 'Programming',
          tags: ['AIoT' , 'TensorFlow', 'Vue' , 'Sign Language' , 'Webapp'],
          description:
            'ระบบวิเคราะห์ภาษามือด้วยเทคโนโลยี AIoT',
          details:
            'โปรเจกต์พัฒนาเว็บไซต์สำหรับแปลภาษามือ โดยนำโมเดลที่ฝึกสอนมาใช้ร่วมกับระบบเว็บไซต์ รายละเอียดเครื่องมือและส่วนที่รับผิดชอบสามารถเพิ่มเติมตามผลงานจริงได้',
          link: ''
        },
        {
          id: 2,
          number: '02',
          title: 'IoT - Based Energy Display And Management Platform',
          shortTitle: 'Energy Prediction',
          symbol: '↗',
          type: 'data',
          category: 'Programming',
          tags: ['Prediction', 'Data', 'Problem Solving'],
          description:
            'แพลตฟอร์มแสดงผลและจัดการพลังงานผ่านระบบ IoT',
          details:
            'โปรเจกต์เกี่ยวกับการคำนวณค่าไฟฟ้าล่วงหน้า ซึ่งได้พัฒนาต่อยอดจากการทำงานและการนำเสนอในเวทีการแข่งขัน สามารถเพิ่มรายละเอียดวิธีคำนวณและรางวัลที่ได้รับได้',
          link: ''
        },
        {
          id: 3,
          number: '03',
          title: 'Web Development',
          shortTitle: 'Web Projects',
          symbol: '{ }',
          type: 'web',
          category: 'Web',
          tags: ['HTML', 'CSS', 'JavaScript'],
          description:
            'ฝึกพัฒนาเว็บไซต์และออกแบบส่วนติดต่อผู้ใช้',
          details:
            'รวมผลงานเว็บไซต์ที่ทำระหว่างการเรียนรู้ ตั้งแต่การจัดโครงสร้างหน้าเว็บ การเขียน CSS ไปจนถึงการเพิ่มฟังก์ชันด้วย JavaScript',
          link: ''
        },
        {
          id: 4,
          number: '04',
          title: '3D Modeling',
          shortTitle: '3D Creation',
          symbol: '3D',
          type: '3d',
          category: 'Creative',
          tags: ['Blender', 'Modeling', 'Materials'],
          description:
            'ฝึกสร้างโมเดลสามมิติและปรับแต่งวัสดุ',
          details:
            'ผลงานการสร้างโมเดลสามมิติด้วย Blender รวมถึงการใช้เครื่องมือสร้างรูปทรง การปรับวัสดุ และการจัดแสงเพื่อเตรียมภาพสำหรับนำเสนอ',
          link: ''
        },
        {
          id: 5,
          number: '05',
          title: 'Digital Art',
          shortTitle: 'Art',
          symbol: '✦',
          type: 'digital-art',
          category: 'Creative',
          tags: ['Digital Art', 'Art work'],
          description:
            'ผลงานวาดรูป',
          details:
            'ดุก่อน',
          link: ''
        },
        {
          id: 6,
          number: '06',
          title: 'Animation & UI Design',
          shortTitle: 'Motion & UI',
          symbol: '◈',
          type: 'motion',
          category: 'Creative',
          tags: ['Animation', 'After Effects', 'UX/UI'],
          description:
            'ฝึกทำแอนิเมชันและออกแบบประสบการณ์ใช้งานเว็บไซต์',
          details:
            'รวมผลงานแอนิเมชันและการออกแบบ UI/UX สำหรับเว็บไซต์ รวมถึงการจัดองค์ประกอบ การเลือกใช้สี และการสร้างเอฟเฟกต์ในการนำเสนอ',
          link: ''
        },
        {
          id: 7,
          number: '07',
          title: 'Internship Experience',
          shortTitle: 'Motion & UI',
          symbol: '◈',
          type: 'motion',
          category: 'Creative',
          tags: ['Animation', 'After Effects', 'UX/UI'],
          description:
            'ฝึกทำแอนิเมชันและออกแบบประสบการณ์ใช้งานเว็บไซต์',
          details:
            'รวมผลงานแอนิเมชันและการออกแบบ UI/UX สำหรับเว็บไซต์ รวมถึงการจัดองค์ประกอบ การเลือกใช้สี และการสร้างเอฟเฟกต์ในการนำเสนอ',
          link: ''
        }
      ],

      skillGroups: [
        {
          icon: '</>',
          title: 'Programming',
          description: 'การเขียนโปรแกรมและพัฒนาระบบ',
          skills: ['JavaScript', 'Python', 'SQL']
        },
        {
          icon: 'WEB',
          title: 'Web Development',
          description: 'การสร้างเว็บไซต์และส่วนติดต่อผู้ใช้',
          skills: ['HTML', 'CSS', 'Vue.js']
        },
        {
          icon: 'AI',
          title: 'AI & IoT',
          description: 'การทดลองใช้โมเดลและอุปกรณ์อัจฉริยะ',
          skills: ['TensorFlow', 'ESP32', 'MQTT']
        },
        {
          icon: '3D',
          title: 'Creative Tools',
          description: 'การสร้างสื่อและงานออกแบบดิจิทัล',
          skills: ['Blender', 'After Effects', 'UI/UX']
        }
      ]
    }
  },

  computed: {
    detailProject() {
      const params = new URLSearchParams(window.location.search)
      const projectId = Number(params.get('project'))

      if (!projectId) {
        return null
      }

      return this.projects.find((project) => project.id === projectId) || null
    },

    filteredProjects() {
      if (this.selectedCategory === 'All') {
        return this.projects
      }

      return this.projects.filter((project) => {
        return project.category === this.selectedCategory
      })
    }
  },

  methods: {
    openProject(project) {
      const detailUrl = new URL(window.location.href)
      detailUrl.searchParams.set('project', project.id)
      window.open(detailUrl.toString(), '_blank', 'noopener,noreferrer')
    }
  }
}
</script>

<style scoped>
.project-detail-page {
  min-height: 100vh;
  padding: 0 24px 80px;
  background:
    radial-gradient(circle at 80% 10%, rgba(117, 75, 167, 0.18), transparent 32%),
    var(--background);
}

.detail-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 1040px;
  margin: 0 auto;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.detail-topbar .logo {
  color: var(--text);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
}

.detail-topbar .logo span {
  color: var(--primary);
}

.detail-back {
  color: var(--text-muted);
  font-size: 13px;
  text-decoration: none;
}

.detail-back:hover {
  color: var(--primary);
}

.detail-container {
  max-width: 850px;
  margin: 0 auto;
  padding-top: 72px;
}

.detail-category {
  margin: 16px 0 10px;
  color: var(--primary);
  font-size: 13px;
}

.detail-container h1 {
  margin: 0;
  font-family: 'Space Grotesk', 'Kanit', sans-serif;
  font-size: clamp(34px, 6vw, 58px);
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.detail-summary {
  max-width: 680px;
  margin: 22px 0 42px;
  color: var(--text-muted);
  font-size: 17px;
  line-height: 1.9;
}

.detail-panel {
  margin-top: 22px;
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface);
}

.detail-panel h2 {
  margin: 10px 0 14px;
  font-size: 22px;
}

.detail-description {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.9;
  white-space: pre-line;
}

.detail-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.detail-actions a {
  text-decoration: none;
}

@media (max-width: 600px) {
  .project-detail-page {
    padding-right: 18px;
    padding-left: 18px;
  }

  .detail-topbar {
    align-items: flex-start;
  }

  .detail-back {
    text-align: right;
  }

  .detail-container {
    padding-top: 45px;
  }

  .detail-panel {
    padding: 22px;
  }
}

.hero-section {
  position: relative;
  padding: 100px 0 28px;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background:
    radial-gradient(
      circle at 78% 35%,
      rgba(117, 75, 167, 0.14),
      transparent 35%
    ),
    var(--background);
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 40px;
  min-height: 430px;
}

.hero-label {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
}

.hero-content h1 {
  margin: 22px 0;
  font-family: 'Space Grotesk', 'Kanit', sans-serif;
  font-size: clamp(42px, 6vw, 70px);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -2px;
}

.hero-content h1 span {
  color: var(--primary);
}

.hero-description {
  max-width: 510px;
  color: var(--text-muted);
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero-interests {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 32px;
  color: var(--text-muted);
  font-size: 12px;
}

.hero-interests span::before {
  margin-right: 7px;
  color: var(--primary);
  content: '✦';
}

.hero-art {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 350px;
}

.art-orbit {
  position: absolute;
  border: 1px solid rgba(196, 154, 255, 0.24);
  border-radius: 50%;
  transform: rotate(-25deg);
}

.orbit-one {
  width: 300px;
  height: 190px;
}

.orbit-two {
  width: 230px;
  height: 310px;
  transform: rotate(35deg);
}

.art-center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  border: 1px solid rgba(196, 154, 255, 0.5);
  border-radius: 38px;
  background: linear-gradient(145deg, #282039, #121019);
  box-shadow: 0 0 70px rgba(143, 98, 201, 0.18);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 45px;
  font-weight: 700;
  transform: rotate(-8deg);
}

.art-bracket {
  color: var(--primary);
}

.art-slash {
  color: var(--text);
}

.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: rgba(27, 23, 37, 0.95);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
}

.card-top {
  top: 55px;
  right: 8px;
}

.card-bottom {
  bottom: 60px;
  left: 0;
}

.card-icon {
  color: var(--primary);
}

.art-caption {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  gap: 12px;
  color: var(--text-muted);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 9px;
  letter-spacing: 1px;
}

.hero-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10px;
  letter-spacing: 1.5px;
}

.hero-bottom a:hover {
  color: var(--primary);
}

.about-layout,
.approach-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 60px;
}

.about-intro {
  margin-top: 0;
  font-size: 23px;
  font-weight: 400;
  line-height: 1.5;
}

.about-content .section-description + .section-description {
  margin-top: 16px;
}

.about-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 36px;
  padding-top: 25px;
  border-top: 1px solid var(--border);
}

.about-facts > div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.fact-number {
  color: var(--primary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
}

.fact-title {
  font-size: 17px;
  font-weight: 500;
}

.fact-description {
  color: var(--text-muted);
  font-size: 12px;
}

.projects-section {
  background: rgba(255, 255, 255, 0.015);
}

.project-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
}

.project-filters button {
  padding: 9px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: transparent;
  color: var(--text-muted);
  font-size: 13px;
  transition: 0.2s;
}

.project-filters button:hover,
.project-filters button.active {
  border-color: var(--primary);
  background: rgba(196, 154, 255, 0.1);
  color: var(--primary);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.empty-projects {
  color: var(--text-muted);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.skill-card {
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
}

.skill-icon {
  display: inline-grid;
  place-items: center;
  min-width: 46px;
  height: 46px;
  padding: 0 8px;
  border: 1px solid rgba(196, 154, 255, 0.3);
  border-radius: 10px;
  background: rgba(196, 154, 255, 0.08);
  color: var(--primary);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
}

.skill-card h3 {
  margin: 18px 0 5px;
  font-size: 19px;
  font-weight: 500;
}

.skill-card p {
  margin: 0 0 18px;
  color: var(--text-muted);
  font-size: 13px;
}

.skill-tags,
.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tags span,
.modal-tags span {
  padding: 5px 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-muted);
  font-size: 12px;
}

.approach-section {
  background: rgba(255, 255, 255, 0.015);
}

.approach-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.approach-item {
  display: flex;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid var(--border);
}

.approach-item:first-child {
  padding-top: 0;
}

.approach-item > span {
  color: var(--primary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
}

.approach-item h3 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 500;
}

.approach-item p {
  margin: 0;
  color: var(--text-muted);
  font-size: 13px;
}

.site-footer {
  padding: 24px 0;
  border-top: 1px solid var(--border);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.footer-content .logo {
  font-size: 19px;
}

.footer-content p,
.footer-content > span {
  color: var(--text-muted);
  font-size: 12px;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: 20px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
}

.project-modal {
  position: relative;
  width: min(560px, 100%);
  padding: 38px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 18px;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: 9px;
  background: transparent;
  color: var(--text);
  font-size: 25px;
}

.project-modal h2 {
  margin: 12px 0;
  font-size: 28px;
  line-height: 1.35;
}

.modal-description {
  color: var(--text-muted);
  white-space: pre-line;
}

.modal-tags {
  margin-top: 22px;
}

.modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

@media (max-width: 900px) {
  .hero-layout {
    grid-template-columns: 1fr 0.8fr;
    gap: 20px;
  }

  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-layout,
  .approach-layout {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .hero-art {
    transform: scale(0.9);
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding-top: 65px;
  }

  .hero-layout {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 43px;
    letter-spacing: -1.5px;
  }

  .hero-art {
    min-height: 280px;
    margin-top: 10px;
    transform: scale(0.85);
  }

  .hero-bottom {
    margin-top: 25px;
    font-size: 9px;
  }

  .project-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .about-facts {
    gap: 8px;
  }

  .fact-title {
    font-size: 15px;
  }

  .fact-description {
    font-size: 11px;
  }

  .skill-card {
    padding: 22px;
  }

  .footer-content {
    flex-wrap: wrap;
  }

  .footer-content p {
    order: 3;
    width: 100%;
    margin: 0;
  }

  .project-modal {
    padding: 30px 22px;
  }
}


.internship-card {
  position: relative;
  padding: 34px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background:
    radial-gradient(circle at 100% 0%, rgba(101, 199, 255, 0.09), transparent 35%),
    var(--surface);
}

.internship-number,
.learning-label {
  color: var(--primary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.internship-card h3 {
  margin: 16px 0 6px;
  font-size: 28px;
  
}

.internship-department {
  margin: 0;
  color: var(--primary);
  font-size: 14px;
}

.internship-description {
  max-width: 720px;
  margin: 22px 0 30px;
  color: var(--text-muted);
  line-height: 1.9;
}

.internship-tasks {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.internship-tasks article {
  display: flex;
  gap: 12px;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
}

.internship-tasks article > span {
  color: var(--primary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
}

.internship-tasks h4 {
  margin: 0 0 8px;
  font-size: 15px;
}

.internship-tasks p {
  margin: 0;
  color: var(--text-muted);
  font-size: 13px;
  line-height: 1.8;
}

.internship-learning {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.internship-learning .skill-tags {
  margin-top: 14px;
}

@media (max-width: 760px) {
  .internship-card {
    padding: 22px;
  }

  .internship-tasks {
    grid-template-columns: 1fr;
  }

  .internship-card h3 {
    font-size: 24px;
  }
}


#app {
  isolation: isolate;
}

#app > *:not(.ambient-background) {
  position: relative;
  z-index: 1;
}


/* Soft blue-purple ambient background */
.ambient-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  background:
    radial-gradient(
      ellipse at 15% 15%,
      rgba(95, 175, 255, 0.12),
      transparent 45%
    ),
    radial-gradient(
      ellipse at 85% 75%,
      rgba(177, 143, 255, 0.12),
      transparent 45%
    );
}

.glow-orb {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  filter: blur(85px);
  opacity: 0.24;
  will-change: transform;
  animation: glow-drift 22s ease-in-out infinite alternate;
}

.glow-orb-blue {
  top: 8%;
  left: -100px;
  background: #72caff;
}

.glow-orb-purple {
  top: 38%;
  right: -130px;
  background: #a995ff;
  animation-delay: -8s;
  animation-duration: 27s;
}

.glow-orb-pink {
  bottom: -150px;
  left: 35%;
  width: 300px;
  height: 300px;
  background: #ffb9e4;
  opacity: 0.15;
  animation-delay: -13s;
  animation-duration: 30s;
}

.ambient-sparkle {
  position: absolute;
  display: block;
  color: #c6eaff;
  opacity: 0;
  text-shadow:
    0 0 5px rgba(142, 210, 255, 0.8),
    0 0 12px rgba(184, 160, 255, 0.5);
  animation: ambient-twinkle ease-in-out infinite;
  will-change: transform, opacity;
}

.ambient-sparkle:nth-of-type(3n) {
  color: #d8caff;
}

.ambient-sparkle:nth-of-type(3n + 1) {
  color: #ffd8ef;
}

@keyframes glow-drift {
  0% {
    transform: translate3d(0, 0, 0) scale(0.9);
  }
  50% {
    transform: translate3d(45px, -30px, 0) scale(1.08);
  }
  100% {
    transform: translate3d(-20px, 35px, 0) scale(0.95);
  }
}

@keyframes ambient-twinkle {
  0%, 100% {
    transform: scale(0.65) rotate(0deg);
    opacity: 0.08;
  }
  50% {
    transform: scale(1.15) rotate(35deg);
    opacity: 0.65;
  }
}

/* Keep the background behind the portfolio content */
#app {
  isolation: isolate;
}

#app > .ambient-background {
  z-index: 0;
}

#app > *:not(.ambient-background) {
  position: relative;
  z-index: 1;
}

@media (prefers-reduced-motion: reduce) {
  .glow-orb,
  .ambient-sparkle {
    animation: none;
  }

  .ambient-sparkle {
    opacity: 0.25;
  }
}


</style>
