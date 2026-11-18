/**
 * INTERNSPHERE - Responsive Internship Board
 * Vanilla JavaScript (ES6+) - Accessible, Robust, Zero-Framework
 */

// Embedded fallback data for bulletproof offline / file:// protocol resilience
const FALLBACK_INTERNSHIPS = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    company: "PulseWave Technologies",
    domain: "Frontend Engineering",
    location: "Remote, US",
    locationType: "Remote",
    duration: "3 Months",
    durationMonths: 3,
    stipend: "$3,800/month",
    postedDate: "2 days ago",
    description: "Collaborate with senior designers and engineers to build performant, accessible web user interfaces using modern CSS, semantic HTML, and JavaScript component architecture.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Accessibility"],
    featured: true
  },
  {
    id: 2,
    title: "AI & Machine Learning Research Intern",
    company: "CognitiveNexus AI",
    domain: "Data Science & AI",
    location: "San Francisco, CA",
    locationType: "Hybrid",
    duration: "6 Months",
    durationMonths: 6,
    stipend: "$4,500/month",
    postedDate: "1 day ago",
    description: "Assist in researching and fine-tuning transformer-based language models, preparing evaluation datasets, and benchmarking inference performance on cloud GPUs.",
    skills: ["Python", "PyTorch", "NLP", "Data Analysis", "Model Evaluation"],
    featured: true
  },
  {
    id: 3,
    title: "Product Design (UI/UX) Intern",
    company: "Aura Interactive Labs",
    domain: "UI/UX Design",
    location: "New York, NY",
    locationType: "On-site",
    duration: "4 Months",
    durationMonths: 4,
    stipend: "$3,600/month",
    postedDate: "3 days ago",
    description: "Craft intuitive user journeys, wireframes, and high-fidelity interactive prototypes. Conduct usability tests and refine design system components across web platforms.",
    skills: ["Figma", "Design Systems", "Wireframing", "User Research", "Prototyping"],
    featured: false
  },
  {
    id: 4,
    title: "Cloud Infrastructure & DevOps Intern",
    company: "CloudVortex Systems",
    domain: "Cloud & DevOps",
    location: "Austin, TX",
    locationType: "Hybrid",
    duration: "6 Months",
    durationMonths: 6,
    stipend: "$4,200/month",
    postedDate: "Just now",
    description: "Automate CI/CD release pipelines, manage Kubernetes cluster manifests, and implement telemetry monitoring to ensure 99.99% uptime across production environments.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
    featured: true
  },
  {
    id: 5,
    title: "Backend Systems & API Intern",
    company: "Hyperion Data Corp",
    domain: "Backend Systems",
    location: "Seattle, WA",
    locationType: "Remote",
    duration: "3 Months",
    durationMonths: 3,
    stipend: "$3,900/month",
    postedDate: "4 days ago",
    description: "Design secure RESTful and gRPC microservices, write performant SQL database queries, and contribute to high-throughput data processing workflows.",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "Redis", "Distributed Systems"],
    featured: false
  },
  {
    id: 6,
    title: "Cybersecurity Analyst Intern",
    company: "Vanguard Shield Defense",
    domain: "Cybersecurity",
    location: "Boston, MA",
    locationType: "On-site",
    duration: "5 Months",
    durationMonths: 5,
    stipend: "$3,700/month",
    postedDate: "5 days ago",
    description: "Conduct vulnerability scans, analyze network log anomalies, evaluate security configurations, and assist the incident response team in threat mitigation exercises.",
    skills: ["Network Security", "SIEM", "Penetration Testing", "Wireshark", "Threat Analysis"],
    featured: false
  },
  {
    id: 7,
    title: "Associate Product Manager Intern",
    company: "Starlight Fintech",
    domain: "Product Management",
    location: "Chicago, IL",
    locationType: "Hybrid",
    duration: "3 Months",
    durationMonths: 3,
    stipend: "$3,500/month",
    postedDate: "2 days ago",
    description: "Collaborate with cross-functional teams to define user requirements, analyze customer behavior metrics, and prioritize product backlog items for upcoming sprint cycles.",
    skills: ["Product Strategy", "Agile", "User Analytics", "Roadmapping", "A/B Testing"],
    featured: false
  },
  {
    id: 8,
    title: "Mobile App Developer Intern (iOS/Android)",
    company: "Zenith Mobile Works",
    domain: "Mobile Development",
    location: "Remote, Global",
    locationType: "Remote",
    duration: "4 Months",
    durationMonths: 4,
    stipend: "$3,600/month",
    postedDate: "1 week ago",
    description: "Build smooth, responsive native and hybrid mobile views. Implement offline storage, push notifications, and optimize battery and network consumption.",
    skills: ["Swift", "Kotlin", "Mobile UI", "Offline Storage", "REST APIs"],
    featured: false
  },
  {
    id: 9,
    title: "Data Science & Analytics Intern",
    company: "OmniMetrics Analytics",
    domain: "Data Science & AI",
    location: "Denver, CO",
    locationType: "Hybrid",
    duration: "6 Months",
    durationMonths: 6,
    stipend: "$4,000/month",
    postedDate: "3 days ago",
    description: "Transform messy raw datasets into actionable executive dashboards. Build predictive forecasting models and present key strategic insights to stakeholders.",
    skills: ["Python", "Pandas", "SQL", "Tableau", "Statistical Modeling"],
    featured: false
  },
  {
    id: 10,
    title: "Full Stack Web Developer Intern",
    company: "Nexus Media Interactive",
    domain: "Frontend Engineering",
    location: "Atlanta, GA",
    locationType: "Remote",
    duration: "2 Months",
    durationMonths: 2,
    stipend: "$3,200/month",
    postedDate: "6 days ago",
    description: "Work across our client-facing portal and backend microservices. Integrate payment gateways, optimize asset delivery, and write end-to-end integration tests.",
    skills: ["JavaScript", "HTML/CSS", "Node.js", "Express", "MongoDB"],
    featured: false
  },
  {
    id: 11,
    title: "Site Reliability Engineer (SRE) Intern",
    company: "Apex Nova Labs",
    domain: "Cloud & DevOps",
    location: "San Jose, CA",
    locationType: "On-site",
    duration: "6 Months",
    durationMonths: 6,
    stipend: "$4,400/month",
    postedDate: "1 day ago",
    description: "Analyze system bottlenecks, configure distributed tracing with Prometheus & Grafana, and write auto-remediation scripts to bolster multi-region resiliency.",
    skills: ["Linux", "Prometheus", "Grafana", "Go", "Kubernetes"],
    featured: true
  },
  {
    id: 12,
    title: "Visual Design & Brand Identity Intern",
    company: "Kaleidoscope Studios",
    domain: "UI/UX Design",
    location: "Los Angeles, CA",
    locationType: "Remote",
    duration: "3 Months",
    durationMonths: 3,
    stipend: "$3,400/month",
    postedDate: "4 days ago",
    description: "Design captivating marketing collateral, digital brand assets, and web layout graphics while maintaining brand consistency across all digital touchpoints.",
    skills: ["Adobe CC", "Illustration", "Typography", "Visual Design", "Branding"],
    featured: false
  },
  {
    id: 13,
    title: "Cloud Security & Governance Intern",
    company: "SecureNet Global",
    domain: "Cybersecurity",
    location: "Washington, DC",
    locationType: "Hybrid",
    duration: "4 Months",
    durationMonths: 4,
    stipend: "$3,800/month",
    postedDate: "1 week ago",
    description: "Assist in reviewing IAM permissions, conducting automated compliance audits across AWS and Azure environments, and establishing security guardrails.",
    skills: ["IAM", "AWS Security", "Compliance", "Python", "Audit Policies"],
    featured: false
  },
  {
    id: 14,
    title: "Growth Product Analyst Intern",
    company: "RocketScale Digital",
    domain: "Product Management",
    location: "San Francisco, CA",
    locationType: "Remote",
    duration: "3 Months",
    durationMonths: 3,
    stipend: "$3,700/month",
    postedDate: "2 days ago",
    description: "Formulate hypotheses to increase user onboarding conversion. Run multivariate landing page experiments and evaluate retention cohorts using analytics tools.",
    skills: ["Funnel Analysis", "Mixpanel", "SQL", "Experimentation", "UX Strategy"],
    featured: false
  },
  {
    id: 15,
    title: "Distributed Systems Engineer Intern",
    company: "ByteStream Cloud",
    domain: "Backend Systems",
    location: "Dallas, TX",
    locationType: "Hybrid",
    duration: "5 Months",
    durationMonths: 5,
    stipend: "$4,100/month",
    postedDate: "3 days ago",
    description: "Implement consensus algorithms, optimize Kafka message queues, and research low-latency caching strategies for petabyte-scale event pipelines.",
    skills: ["Java", "Apache Kafka", "Redis", "gRPC", "Multi-threading"],
    featured: false
  }
];

class InternshipBoardApp {
  constructor() {
    this.internships = [];
    this.filteredInternships = [];
    this.savedIds = new Set(this.loadSavedFromStorage());

    // DOM References
    this.gridElement = document.getElementById("internships-grid");
    this.emptyState = document.getElementById("empty-state");
    this.resultsCount = document.getElementById("results-count");
    this.searchInput = document.getElementById("search-input");
    this.clearSearchBtn = document.getElementById("clear-search-btn");
    this.domainSelect = document.getElementById("domain-select");
    this.sortSelect = document.getElementById("sort-select");
    this.clearAllBtn = document.getElementById("clear-all-btn");
    this.emptyResetBtn = document.getElementById("empty-reset-btn");
    this.activeChipsContainer = document.getElementById("active-filter-chips");
    this.domainPills = document.querySelectorAll(".domain-pill");
    this.statsRolesCount = document.getElementById("stats-roles-count");
    this.postRoleBtn = document.getElementById("post-role-btn");
    this.lastFocusedElement = null;

    // Navigation & Saved Drawer
    this.menuToggle = document.getElementById("menu-toggle");
    this.primaryNav = document.getElementById("primary-nav");
    this.viewSavedBtn = document.getElementById("view-saved-btn");
    this.savedBadge = document.getElementById("saved-badge");
    this.savedModal = document.getElementById("saved-modal");
    this.closeSavedBtn = document.getElementById("close-saved-btn");
    this.savedListContainer = document.getElementById("saved-list-container");

    // Application Modal References
    this.applyModal = document.getElementById("apply-modal");
    this.closeModalBtn = document.getElementById("close-modal-btn");
    this.cancelModalBtn = document.getElementById("cancel-modal-btn");
    this.applicationForm = document.getElementById("application-form");
    this.modalTitle = document.getElementById("modal-title");
    this.modalCompany = document.getElementById("modal-company");
    this.modalDomain = document.getElementById("modal-domain");
    this.modalRoleDetails = document.getElementById("modal-role-details");
    this.applyInternshipId = document.getElementById("apply-internship-id");
    this.modalSuccess = document.getElementById("modal-success");
    this.closeSuccessBtn = document.getElementById("close-success-btn");
    this.successRoleName = document.getElementById("success-role-name");
    this.successCompanyName = document.getElementById("success-company-name");

    this.init();
  }

  async init() {
    this.bindEvents();
    this.updateSavedBadge();
    await this.fetchData();
    this.applyFilterAndSort();
  }

  // --------------------------------------------------------------------------
  // Data Fetching & Initializing
  // --------------------------------------------------------------------------
  async fetchData() {
    try {
      const response = await fetch("data/internships.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.internships = await response.json();
    } catch (err) {
      console.warn("Notice: Fetching 'data/internships.json' fell back to embedded dataset (e.g., local file:// protocol access).", err);
      this.internships = [...FALLBACK_INTERNSHIPS];
    }

    if (this.statsRolesCount) {
      this.statsRolesCount.textContent = `${this.internships.length}+`;
    }
  }

  // --------------------------------------------------------------------------
  // Event Bindings
  // --------------------------------------------------------------------------
  bindEvents() {
    // Live Search
    this.searchInput.addEventListener("input", () => {
      if (this.searchInput.value.trim().length > 0) {
        this.clearSearchBtn.classList.remove("hidden");
      } else {
        this.clearSearchBtn.classList.add("hidden");
      }
      this.applyFilterAndSort();
    });

    this.clearSearchBtn.addEventListener("click", () => {
      this.searchInput.value = "";
      this.clearSearchBtn.classList.add("hidden");
      this.searchInput.focus();
      this.applyFilterAndSort();
    });

    // Domain Dropdown Change
    this.domainSelect.addEventListener("change", (e) => {
      this.syncDomainPill(e.target.value);
      this.applyFilterAndSort();
    });

    // Domain Quick Pills Click
    this.domainPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const domain = pill.getAttribute("data-domain");
        this.domainSelect.value = domain;
        this.syncDomainPill(domain);
        this.applyFilterAndSort();
      });
    });

    // Sort Dropdown Change
    this.sortSelect.addEventListener("change", () => {
      this.applyFilterAndSort();
    });

    // Reset Buttons
    this.clearAllBtn.addEventListener("click", () => this.resetFilters());
    this.emptyResetBtn.addEventListener("click", () => this.resetFilters());

    // Footer domain links
    document.querySelectorAll(".footer-domain-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const domain = link.getAttribute("data-domain");
        this.domainSelect.value = domain;
        this.syncDomainPill(domain);
        this.applyFilterAndSort();
        window.scrollTo({ top: document.getElementById("explore").offsetTop - 80, behavior: "smooth" });
      });
    });

    // Mobile Navigation Toggle
    this.menuToggle.addEventListener("click", () => {
      const isExpanded = this.menuToggle.getAttribute("aria-expanded") === "true";
      this.menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      this.primaryNav.classList.toggle("open");
    });

    // Close mobile menu on clicking any nav link
    document.querySelectorAll(".primary-nav .nav-link, .primary-nav .btn-nav-cta").forEach((navLink) => {
      navLink.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          this.primaryNav.classList.remove("open");
          this.menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    // Application Modal Interactions
    this.closeModalBtn.addEventListener("click", () => this.closeApplyModal());
    this.cancelModalBtn.addEventListener("click", () => this.closeApplyModal());
    this.closeSuccessBtn.addEventListener("click", () => this.closeApplyModal());

    // Application Form Submission
    this.applicationForm.addEventListener("submit", (e) => this.handleApplicationSubmit(e));

    // Saved Roles Modal Interactions
    this.viewSavedBtn.addEventListener("click", () => this.openSavedModal());
    this.closeSavedBtn.addEventListener("click", () => this.closeSavedModal());

    // Post Internship CTA Handler
    if (this.postRoleBtn) {
      this.postRoleBtn.addEventListener("click", () => {
        this.showToast("Employer Portal: Early access open. Contact partner@internsphere.com to list roles.");
      });
    }

    // Keyboard Accessibility (Esc to close modals & mobile menu)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.applyModal.open) {
          this.closeApplyModal();
        } else if (this.savedModal.open) {
          this.closeSavedModal();
        } else if (this.primaryNav.classList.contains("open")) {
          this.primaryNav.classList.remove("open");
          this.menuToggle.setAttribute("aria-expanded", "false");
          this.menuToggle.focus();
        }
      }
    });

    // Backdrop click close for native <dialog>
    [this.applyModal, this.savedModal].forEach((modal) => {
      modal.addEventListener("click", (e) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          if (modal === this.applyModal) this.closeApplyModal();
          if (modal === this.savedModal) this.closeSavedModal();
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // Filter, Search, and Sort Engine
  // --------------------------------------------------------------------------
  applyFilterAndSort() {
    const searchTerm = (this.searchInput.value || "").trim().toLowerCase();
    const selectedDomain = this.domainSelect.value || "all";
    const selectedSort = this.sortSelect.value || "featured";

    // 1. Filter by Search Query (Title + Company + Skills) and Domain
    this.filteredInternships = this.internships.filter((item) => {
      if (!item) return false;

      const title = (item.title || "").toLowerCase();
      const company = (item.company || "").toLowerCase();
      const skills = Array.isArray(item.skills) ? item.skills : [];
      const skillsMatch = skills.some((s) => (s || "").toLowerCase().includes(searchTerm));

      const matchesSearch = !searchTerm || title.includes(searchTerm) || company.includes(searchTerm) || skillsMatch;
      const matchesDomain = selectedDomain === "all" || item.domain === selectedDomain;

      return matchesSearch && matchesDomain;
    });

    // 2. Sort Listings
    this.sortResults(selectedSort);

    // 3. Render Updated View
    this.render();
    this.updateStatusAndChips(searchTerm, selectedDomain);
  }

  sortResults(sortType) {
    const getMonths = (item) => {
      if (typeof item.durationMonths === "number") return item.durationMonths;
      const parsed = parseInt(item.duration, 10);
      return isNaN(parsed) ? 0 : parsed;
    };

    switch (sortType) {
      case "title-asc":
        this.filteredInternships.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
        break;
      case "title-desc":
        this.filteredInternships.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
        break;
      case "company-asc":
        this.filteredInternships.sort((a, b) => (a.company || "").localeCompare(b.company || ""));
        break;
      case "duration-asc":
        this.filteredInternships.sort((a, b) => getMonths(a) - getMonths(b));
        break;
      case "duration-desc":
        this.filteredInternships.sort((a, b) => getMonths(b) - getMonths(a));
        break;
      case "featured":
      default:
        // Featured items first, then id
        this.filteredInternships.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (a.id || 0) - (b.id || 0);
        });
        break;
    }
  }

  // --------------------------------------------------------------------------
  // Rendering Internships Grid
  // --------------------------------------------------------------------------
  render() {
    this.gridElement.innerHTML = "";

    if (this.filteredInternships.length === 0) {
      this.gridElement.classList.add("hidden");
      this.emptyState.classList.remove("hidden");
      this.resultsCount.innerHTML = `Showing <strong>0</strong> of ${this.internships.length} internships`;
      return;
    }

    this.gridElement.classList.remove("hidden");
    this.emptyState.classList.add("hidden");
    this.resultsCount.innerHTML = `Showing <strong>${this.filteredInternships.length}</strong> of ${this.internships.length} internships`;

    const fragment = document.createDocumentFragment();

    this.filteredInternships.forEach((item) => {
      const card = this.createCardElement(item);
      fragment.appendChild(card);
    });

    this.gridElement.appendChild(fragment);
  }

  createCardElement(item) {
    const isSaved = this.savedIds.has(item.id);
    const initial = item.company ? item.company.charAt(0).toUpperCase() : "I";

    const article = document.createElement("article");
    article.className = "internship-card";
    article.setAttribute("data-id", item.id);
    article.setAttribute("data-domain", item.domain);
    article.setAttribute("aria-labelledby", `card-title-${item.id}`);

    article.innerHTML = `
      <div>
        <div class="card-top">
          <span class="domain-tag" data-domain="${this.escapeHTML(item.domain)}">
            ${this.escapeHTML(item.domain)}
          </span>
          <div class="card-actions-top">
            ${item.featured ? '<span class="featured-badge">Featured</span>' : ""}
            <button 
              type="button" 
              class="btn-icon bookmark-btn ${isSaved ? "bookmarked" : ""}" 
              data-id="${item.id}"
              aria-label="${isSaved ? "Remove from saved internships" : "Save this internship"}"
              title="${isSaved ? "Remove from saved" : "Save role"}"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="company-row">
          <div class="company-avatar" aria-hidden="true">${initial}</div>
          <div class="company-meta">
            <h4 class="company-name">${this.escapeHTML(item.company)}</h4>
            <span class="posted-date">Posted ${this.escapeHTML(item.postedDate)}</span>
          </div>
        </div>

        <h3 id="card-title-${item.id}" class="card-title">${this.escapeHTML(item.title)}</h3>

        <div class="card-details-list">
          <div class="card-detail-item">
            <span class="detail-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <span>Location: <span class="detail-badge-pill">${this.escapeHTML(item.location)}</span></span>
          </div>

          <div class="card-detail-item">
            <span class="detail-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </span>
            <span>Duration: <span class="detail-badge-pill">${this.escapeHTML(item.duration)}</span></span>
          </div>

          <div class="card-detail-item">
            <span class="detail-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
            </span>
            <span>Stipend: <span class="detail-badge-pill">${this.escapeHTML(item.stipend || "$3,500/mo")}</span></span>
          </div>
        </div>

        <p class="card-description">${this.escapeHTML(item.description)}</p>

        <div class="skills-tags" aria-label="Key competencies">
          ${item.skills ? item.skills.map((s) => `<span class="skill-tag">${this.escapeHTML(s)}</span>`).join("") : ""}
        </div>
      </div>

      <div class="card-footer">
        <button 
          type="button" 
          class="btn btn-primary btn-card-apply" 
          data-id="${item.id}"
          aria-label="Apply for ${this.escapeHTML(item.title)} at ${this.escapeHTML(item.company)}"
        >
          <span>Apply Now</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    `;

    // Bind Apply Button
    const applyBtn = article.querySelector(".btn-card-apply");
    applyBtn.addEventListener("click", () => this.openApplyModal(item));

    // Bind Bookmark Button
    const bookmarkBtn = article.querySelector(".bookmark-btn");
    bookmarkBtn.addEventListener("click", () => this.toggleSaveRole(item.id, bookmarkBtn));

    return article;
  }

  // --------------------------------------------------------------------------
  // Status Bar & Active Filter Chips
  // --------------------------------------------------------------------------
  updateStatusAndChips(searchTerm, selectedDomain) {
    this.activeChipsContainer.innerHTML = "";

    if (searchTerm) {
      const chip = document.createElement("span");
      chip.className = "filter-chip";
      chip.innerHTML = `
        Keyword: "${this.escapeHTML(searchTerm)}"
        <button type="button" class="filter-chip-remove" aria-label="Remove search filter">&times;</button>
      `;
      chip.querySelector("button").addEventListener("click", () => {
        this.searchInput.value = "";
        this.clearSearchBtn.classList.add("hidden");
        this.applyFilterAndSort();
      });
      this.activeChipsContainer.appendChild(chip);
    }

    if (selectedDomain !== "all") {
      const chip = document.createElement("span");
      chip.className = "filter-chip";
      chip.innerHTML = `
        Domain: ${this.escapeHTML(selectedDomain)}
        <button type="button" class="filter-chip-remove" aria-label="Remove domain filter">&times;</button>
      `;
      chip.querySelector("button").addEventListener("click", () => {
        this.domainSelect.value = "all";
        this.syncDomainPill("all");
        this.applyFilterAndSort();
      });
      this.activeChipsContainer.appendChild(chip);
    }
  }

  syncDomainPill(selectedDomain) {
    this.domainPills.forEach((pill) => {
      const pillDomain = pill.getAttribute("data-domain");
      if (pillDomain === selectedDomain) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });
  }

  resetFilters() {
    this.searchInput.value = "";
    this.clearSearchBtn.classList.add("hidden");
    this.domainSelect.value = "all";
    this.sortSelect.value = "featured";
    this.syncDomainPill("all");
    this.applyFilterAndSort();
    this.showToast("All filters have been reset.");
  }

  // --------------------------------------------------------------------------
  // Application Modal Dialog Workflow
  // --------------------------------------------------------------------------
  openApplyModal(item) {
    this.lastFocusedElement = document.activeElement;
    this.applyInternshipId.value = item.id;
    this.modalTitle.textContent = item.title;
    this.modalCompany.textContent = item.company;
    this.modalDomain.textContent = item.domain;
    this.modalRoleDetails.innerHTML = `
      <span><strong>Location:</strong> ${this.escapeHTML(item.location)}</span>
      <span>&bull;</span>
      <span><strong>Duration:</strong> ${this.escapeHTML(item.duration)}</span>
      <span>&bull;</span>
      <span><strong>Stipend:</strong> ${this.escapeHTML(item.stipend || "$3,500/mo")}</span>
    `;

    // Reset Form & Success State
    this.applicationForm.reset();
    this.applicationForm.classList.remove("hidden");
    this.modalSuccess.classList.add("hidden");

    if (typeof this.applyModal.showModal === "function") {
      this.applyModal.showModal();
    } else {
      this.applyModal.setAttribute("open", "true");
    }

    document.getElementById("applicant-name").focus();
  }

  closeApplyModal() {
    if (typeof this.applyModal.close === "function") {
      this.applyModal.close();
    } else {
      this.applyModal.removeAttribute("open");
    }
    if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === "function") {
      this.lastFocusedElement.focus();
    }
  }

  handleApplicationSubmit(e) {
    e.preventDefault();
    const roleId = Number(this.applyInternshipId.value);
    const role = this.internships.find((i) => i.id === roleId);

    const name = document.getElementById("applicant-name").value.trim();

    if (!name) return;

    this.successRoleName.textContent = role ? role.title : "Internship Position";
    this.successCompanyName.textContent = role ? role.company : "Company";

    this.applicationForm.classList.add("hidden");
    this.modalSuccess.classList.remove("hidden");
    this.closeSuccessBtn.focus();

    this.showToast(`Application submitted successfully for ${role ? role.title : "role"}!`);
  }

  // --------------------------------------------------------------------------
  // Saved Roles / Bookmarking System
  // --------------------------------------------------------------------------
  toggleSaveRole(id, buttonElement) {
    if (this.savedIds.has(id)) {
      this.savedIds.delete(id);
      buttonElement.classList.remove("bookmarked");
      buttonElement.setAttribute("aria-label", "Save this internship");
      buttonElement.setAttribute("title", "Save role");
      buttonElement.querySelector("svg").setAttribute("fill", "none");
      this.showToast("Removed from saved internships.");
    } else {
      this.savedIds.add(id);
      buttonElement.classList.add("bookmarked");
      buttonElement.setAttribute("aria-label", "Remove from saved internships");
      buttonElement.setAttribute("title", "Remove from saved");
      buttonElement.querySelector("svg").setAttribute("fill", "currentColor");
      this.showToast("Internship bookmarked successfully!");
    }

    this.saveToStorage();
    this.updateSavedBadge();
  }

  loadSavedFromStorage() {
    try {
      const data = localStorage.getItem("internsphere_saved");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem("internsphere_saved", JSON.stringify(Array.from(this.savedIds)));
    } catch (e) {
      console.warn("localStorage write disabled or blocked", e);
    }
  }

  updateSavedBadge() {
    const count = this.savedIds.size;
    this.savedBadge.textContent = count;
    this.viewSavedBtn.setAttribute("aria-label", `View saved internships (${count} items)`);
  }

  openSavedModal() {
    this.lastFocusedElement = document.activeElement;
    this.savedListContainer.innerHTML = "";
    const savedItems = this.internships.filter((item) => this.savedIds.has(item.id));

    if (savedItems.length === 0) {
      this.savedListContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
          <p style="font-weight: 600; margin-bottom: 0.5rem;">No saved internships yet.</p>
          <p style="font-size: 0.88rem;">Click the bookmark icon on any card to save roles you want to revisit later.</p>
        </div>
      `;
    } else {
      savedItems.forEach((item) => {
        const row = document.createElement("div");
        row.className = "saved-item";
        row.innerHTML = `
          <div class="saved-item-info">
            <span class="saved-item-title">${this.escapeHTML(item.title)}</span>
            <span class="saved-item-company">${this.escapeHTML(item.company)} &bull; ${this.escapeHTML(item.duration)}</span>
          </div>
          <div class="saved-item-actions">
            <button type="button" class="btn btn-primary btn-saved-apply" style="height: 34px; padding: 0 0.85rem; font-size: 0.82rem;">Apply</button>
            <button type="button" class="btn btn-secondary btn-saved-remove" style="height: 34px; padding: 0 0.6rem; font-size: 0.82rem;" aria-label="Remove saved item">&times;</button>
          </div>
        `;

        row.querySelector(".btn-saved-apply").addEventListener("click", () => {
          this.closeSavedModal();
          this.openApplyModal(item);
        });

        row.querySelector(".btn-saved-remove").addEventListener("click", () => {
          this.savedIds.delete(item.id);
          this.saveToStorage();
          this.updateSavedBadge();
          this.openSavedModal(); // refresh list
          this.render(); // update card bookmark icon
          this.showToast("Removed from saved internships.");
        });

        this.savedListContainer.appendChild(row);
      });
    }

    if (typeof this.savedModal.showModal === "function") {
      this.savedModal.showModal();
    } else {
      this.savedModal.setAttribute("open", "true");
    }
  }

  closeSavedModal() {
    if (typeof this.savedModal.close === "function") {
      this.savedModal.close();
    } else {
      this.savedModal.removeAttribute("open");
    }
    if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === "function") {
      this.lastFocusedElement.focus();
    }
  }

  // --------------------------------------------------------------------------
  // User Feedback Toast Notifications
  // --------------------------------------------------------------------------
  showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
      <span>${this.escapeHTML(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // --------------------------------------------------------------------------
  // Security Helper: Escape HTML string to prevent XSS
  // --------------------------------------------------------------------------
  escapeHTML(str) {
    if (typeof str !== "string") return str;
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.app = new InternshipBoardApp();
});
