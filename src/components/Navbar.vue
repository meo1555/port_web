
<template>
  <aside class="sidebar">
    <a href="#home" class="logo">
      <span class="logo-icon">&lt;/&gt;</span>
      <span>port<span class="logo-accent">.web</span></span>
    </a>

    <div class="profile">
      <div class="profile-avatar">P</div>
      <div class="profile-info">
        <strong>My Portfolio</strong>
        <span>Developer in progress</span>
      </div>
    </div>

    <nav class="sidebar-nav">
      <p class="nav-heading">MAIN MENU</p>
      <a href="#home" class="nav-link">
        <span class="nav-icon">⌂</span>
        <span>Home</span>
      </a>
      <a href="#about" class="nav-link">
        <span class="nav-icon">◎</span>
        <span>About Me</span>
      </a>

      <p class="nav-heading">MY EXPERIENCE</p>
      <a href="#projects" class="nav-link">
        <span class="nav-icon">▤</span>
        <span>Projects</span>
      </a>
      <a href="#internship" class="nav-link">
        <span class="nav-icon">▣</span>
        <span>Internship</span>
      </a>

      <p class="nav-heading">MORE</p>
      <a href="#skills" class="nav-link">
        <span class="nav-icon">⌘</span>
        <span>Skills & Tools</span>
      </a>
      <a href="#contact" class="nav-link">
        <span class="nav-icon">↗</span>
        <span>Contact</span>
      </a>
    </nav>

    <div class="sidebar-footer">
      <span class="status-dot"></span>
      <span>Available for opportunities</span>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'PortfolioNavbar'
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  padding: 28px 18px 20px;
  overflow-y: auto;
  background: rgba(15, 13, 22, 0.97);
  border-right: 1px solid var(--border);
  backdrop-filter: blur(16px);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  color: var(--text);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 23px;
  font-weight: 700;
}

.logo-icon {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid rgba(196, 154, 255, 0.35);
  border-radius: 10px;
  color: var(--primary);
  font-size: 14px;
}

.logo-accent {
  color: var(--primary);
}

.profile {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 35px;
  padding: 15px 10px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.025);
}

.profile-avatar {
  display: grid;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 11px;
  background: linear-gradient(135deg, #d6b5ff, #9271d2);
  color: #21172d;
  font-weight: 700;
}

.profile-info {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 4px;
}

.profile-info strong {
  color: var(--text);
  font-size: 12px;
}

.profile-info span {
  color: var(--text-muted);
  font-size: 10px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
}

.nav-heading {
  margin: 0;
  padding: 15px 12px 8px;
  color: var(--text-muted);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 9px;
  color: var(--text-muted);
  font-size: 13px;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.nav-link:hover,
.nav-link:focus-visible {
  border-color: rgba(196, 154, 255, 0.18);
  background: rgba(196, 154, 255, 0.09);
  color: var(--primary);
}

.nav-icon {
  display: grid;
  width: 20px;
  place-items: center;
  color: var(--primary);
  font-size: 18px;
}

.sidebar-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding: 20px 10px 0;
  color: var(--text-muted);
  font-size: 10px;
}

.status-dot {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #8cdbac;
  box-shadow: 0 0 10px rgba(140, 219, 172, 0.4);
}

@media (max-width: 760px) {
  .sidebar {
    position: sticky;
    inset: auto;
    width: 100%;
    height: auto;
    padding: 12px 16px;
    overflow: visible;
    border-right: 0;
    border-bottom: 1px solid var(--border);
  }

  .logo {
    padding: 0 4px;
    font-size: 20px;
  }

  .logo-icon {
    width: 32px;
    height: 32px;
  }

  .profile,
  .nav-heading,
  .sidebar-footer {
    display: none;
  }

  .sidebar-nav {
    flex-direction: row;
    gap: 5px;
    margin-top: 12px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .sidebar-nav::-webkit-scrollbar {
    display: none;
  }

  .nav-link {
    flex-shrink: 0;
    gap: 6px;
    padding: 9px 10px;
    font-size: 11px;
  }

  .nav-icon {
    width: auto;
    font-size: 15px;
  }
}
</style>
