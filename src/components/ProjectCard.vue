
<template>
  <article class="project-card">
    <button
      class="project-cover"
      :class="'cover-' + project.type"
      :aria-label="'ดูรายละเอียด ' + project.title"
      @click="$emit('select', project)"
    >
      <span class="cover-number">{{ project.number }}</span>
      <span class="cover-symbol">{{ project.symbol }}</span>
      <span class="cover-name">{{ project.shortTitle }}</span>
    </button>

    <div class="project-info">
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </span>
      </div>

      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>

      <button
        class="view-project"
        @click="$emit('select', project)"
      >
        ดูรายละเอียด <span>↗</span>
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.project-card {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface);
  transition: transform 0.25s, border-color 0.25s;
  
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(79, 74, 236, 0.5);
}

.project-cover {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  min-height: 210px;
  padding: 24px;
  overflow: hidden;
  border: 0;
  color: white;
  text-align: left;
}

.project-cover::before,
.project-cover::after {
  position: absolute;
  content: '';
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
}

.project-cover::before {
  top: -60px;
  right: -25px;
  width: 210px;
  height: 210px;
}

.project-cover::after {
  top: -25px;
  right: 10px;
  width: 140px;
  height: 140px;
}


.project-card {
  position: relative;
  isolation: isolate;
  overflow: visible;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface);
  transition: transform 0.3s ease, border-color 0.3s ease;
  z-index: 0;

  border-radius: 16px;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: -12px;
  border-radius: 24px;
  background:
    radial-gradient(ellipse at 20% 20%, rgba(26, 18, 89, 0.48), transparent 55%),
    radial-gradient(ellipse at 80% 75%, rgba(114, 44, 84, 0.38), transparent 55%),
    radial-gradient(ellipse at 50% 100%, rgba(153, 193, 255, 0.28), transparent 55%);
  filter: blur(22px);
  opacity: 0.35;
  transition: opacity 0.35s ease, filter 0.35s ease;
  pointer-events: none;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(116, 119, 255, 0.65);
}

.project-card:hover::before {
  opacity: 0.9;
  filter: blur(26px);
}



.project-cover {
  isolation: isolate;
  background-size: 200% 200%;
  animation: cover-glow 10s ease-in-out infinite alternate;
}

.project-cover::before {
  border-color: rgba(255, 255, 255, 0.22);
  box-shadow: 0 0 35px rgba(226, 198, 255, 0.12);
}

.project-cover::after {
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow: 0 0 28px rgba(255, 210, 239, 0.12);
}

@keyframes cover-glow {
  from {
    background-position: 0% 30%;
  }
  to {
    background-position: 100% 70%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-cover {
    animation: none;
  }

  .project-card,
  .project-card::before {
    transition: none;
  }
}




.cover-ai {
  background: linear-gradient(135deg, #110627, #7654a9);
}

.cover-data {
  background: linear-gradient(135deg, #0a2e39, #287b84);
}

.cover-web {
  background: linear-gradient(135deg, #292b49, #5d63a3);
}

.cover-3d {
  background: linear-gradient(135deg, #45273d, #a65b86);
}

.cover-digital-art{
  background: linear-gradient(135deg, #382653, #8255b5);
}

.cover-motion {
  background: linear-gradient(135deg, #51371d, #a77c43);
}

.cover-experience {
  background: linear-gradient(135deg, #51371d, #a77c43);
}

.cover-number,
.cover-symbol,
.cover-name {
  position: relative;
  z-index: 1;
}

.cover-number {
  margin-bottom: auto;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  opacity: 0.75;
}

.cover-symbol {
  margin-bottom: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 42px;
  font-weight: 700;
}

.cover-name {
  font-family: 'Space Grotesk', 'Kanit', sans-serif;
  font-size: 20px;
  font-weight: 600;
}

.project-info {
  padding: 22px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.project-tags span {
  padding: 4px 9px;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--primary);
  font-size: 11px;
}

.project-info h3 {
  margin: 16px 0 8px;
  font-size: 19px;
  font-weight: 500;
}

.project-info p {
  min-height: 52px;
  margin: 0;
  color: var(--text-muted);
  font-size: 13px;
}

.view-project {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 18px;
  padding: 12px 0 0;
  border: 0;
  border-top: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  text-align: left;
}

.view-project span {
  color: var(--primary);
}

.view-project:hover {
  color: var(--primary);
}
</style>
