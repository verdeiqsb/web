// Simple client-side HTML include for static sites
document.addEventListener('DOMContentLoaded', async () => {
    const includes = document.querySelectorAll('[data-include]');
    const ph_num1 = 19; // Placeholder phone number
    const ph_num2 = 222;
    const ph_num3 = '0033';
    const ph_num = '+60' + ph_num1 + ph_num2 + ph_num3;
    const ph_num_f = '+60' + ph_num1 + '-' + ph_num2 + ' ' + ph_num3;
    const tg_handle = 've'+'rdei'+'q';
    const e_ma = 've'+'rdei'+'qsb@'+'g'+'mai'+'l.c'+'om';
    // Fallback templates used when running from file:// or when fetch fails
    function getFallback(name) {
        switch (name) {
            case 'header.html':
                return `
<nav class="navbar" id="navbar">
    <div class="container">
        <a href="index.html" class="nav-brand" aria-label="Home VerdeIQ">
            <img src="app.png" srcset="app.hd.png" alt="VerdeIQ Logo" class="logo" loading="lazy" decoding="async">
        </a>
        <ul class="nav-menu" id="navMenu">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="about.html" class="nav-link">Organization</a></li>
            <li><a href="vision-mission.html" class="nav-link">Vision & Mission</a></li>
            <li><a href="projects.html" class="nav-link">Projects</a></li>
        </ul>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
    </div>
</nav>`;
            case 'footer.html':
                return `
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h4>VerdeIQ Sdn Bhd</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254970.61810497296!2d101.65620141146775!3d3.1169468867646186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a2a0dccee9d%3A0x14aadef30cfd6a05!2sThe%20Vertical%20Corporate%20Office%20Tower%20B!5e0!3m2!1sen!2smy!4v1765132889764!5m2!1sen!2smy" width="200" height="200" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p class="footer-location">
            
            <p><span class="material-symbols-outlined icon-svg">place</span> Unit 3A-06, Level 3A, Tower B,</p>
            <p>Vertical Business Suite Avenue 3,</p>
            <p>The Vertical, Bangsar South City,</p>
            <p>No. 8, Jalan Kerinchi,</p>
            <p>59200 Kuala Lumpur.</p>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">Organization</a></li>
                    <li><a href="vision-mission.html">Vision & Mission</a></li>
                    <li><a href="projects.html">Projects</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Core Values</h4>
                <ul>
                    <li>Multidisciplinary excellence</li>
                    <li>Reliability</li>
                    <li>Sustainability</li>
                    <li>Partnership-driven impact</li>
                    <li>Resilient innovation</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Contact</h4>
                <ul>
                    <li>WhatsApp: <a href="https://wa.me/`+ph_num+`?text=Hi!%20I'm%20interested%20to%20enquire%20more." target="_blank" rel="noopener" aria-label="WhatsApp"><span class="material-symbols-outlined icon-svg" aria-hidden="true">chat</span> `+ph_num_f+`</a></li>
                    <li>Telegram: <a href="https://t.me/`+tg_handle+`" target="_blank" rel="noopener" aria-label="Telegram"><span id="phone" class="material-symbols-outlined icon-svg" aria-hidden="true">send</span> @`+tg_handle+`</a></li>
                    <li>Email: <a href="mailto:`+e_ma+`"><span class="material-symbols-outlined icon-svg" aria-hidden="true">email</span> `+e_ma+`</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom"><p>&copy; 2025, VerdeIQ Sdn Bhd (1633244K). All rights reserved.</p></div>
    </div>
</footer>`;
            case 'tech-stack.html':
                return `
<section class="tech-section">
    <div class="container">
        <h2 class="section-title">Technology Stack</h2>
        <div class="tech-grid">
            <div class="tech-category">
                <h3>Industrial Automation</h3>
                <div class="tech-tags">
                    <span class="tech-tag">Siemens</span>
                    <span class="tech-tag">Mitsubishi</span>
                    <span class="tech-tag">Schneider</span>
                    <span class="tech-tag">Honeywell</span>
                    <span class="tech-tag">Meanwell</span>
                    <span class="tech-tag">Moxa</span>
                    <span class="tech-tag">Remote I/O</span>
                    <span class="tech-tag">Gateway</span>
                    <span class="tech-tag">PLC</span>
                    <span class="tech-tag">DCS</span>
                </div>
            </div>
            <div class="tech-category">
                <h3>Communication Protocols</h3>
                <div class="tech-tags">
                    <span class="tech-tag">MQTT</span>
                    <span class="tech-tag">BACnet</span>
                    <span class="tech-tag">OPC-UA</span>
                    <span class="tech-tag">MB RS485</span>
                    <span class="tech-tag">MB TCPIP</span>
                    <span class="tech-tag">LoRaWAN</span>
                    <span class="tech-tag">REST</span>
                    <span class="tech-tag">WebSocket</span>
                    <span class="tech-tag">VPN</span>
                    <span class="tech-tag">Tunnel</span>
                </div>
            </div>
            <div class="tech-category">
                <h3>Cloud & Open-Source</h3>
                <div class="tech-tags">
                    <span class="tech-tag">AWS</span>
                    <span class="tech-tag">Azure</span>
                    <span class="tech-tag">GCP</span>
                    <span class="tech-tag">PostgreSQL</span>
                    <span class="tech-tag">Docker</span>
                    <span class="tech-tag">Node‑RED</span>
                    <span class="tech-tag">Grafana</span>
                    <span class="tech-tag">InfluxDB</span>
                    <span class="tech-tag">TimescaleDB</span>
                </div>
            </div>
            <div class="tech-category">
                <h3>Data & Analytics</h3>
                <div class="tech-tags">
                    <span class="tech-tag">SQL</span>
                    <span class="tech-tag">NoSQL</span>
                    <span class="tech-tag">Big Data</span>
                    <span class="tech-tag">Data Studio</span>
                    <span class="tech-tag">Data Pipelines</span>
                    <span class="tech-tag">ETL</span>
                </div>
            </div>
            <div class="tech-category">
                <h3>Control / Management Systems</h3>
                <div class="tech-tags">
                    <span class="tech-tag">CSM</span>
                    <span class="tech-tag">BMS</span>
                    <span class="tech-tag">EMS</span>
                    <span class="tech-tag">FMCS</span>
                    <span class="tech-tag">SCADA</span>
                </div>
            </div>
            <div class="tech-category">
                <h3>Software & Languages</h3>
                <div class="tech-tags">
                    <span class="tech-tag">C</span>
                    <span class="tech-tag">C#</span>
                    <span class="tech-tag">Java</span>
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Go</span>
                </div>
            </div>
            <div class="tech-category">
                <h3>Embedded</h3>
                <div class="tech-tags">
                    <span class="tech-tag">Arduino</span>
                    <span class="tech-tag">ESP32</span>
                    <span class="tech-tag">STM32</span>
                    <span class="tech-tag">Raspberry Pi</span>
                </div>
            </div>
        </div>
    </div>
</section>`;
            default:
                return `<!-- failed to load ${name} -->`;
        }
    }

    const isFile = window.location.protocol === 'file:';

    const jobs = Array.from(includes).map(async (el) => {
        const src = el.getAttribute('data-include');
        const name = src.split('/').pop();

        // If we're on file://, avoid fetch (browsers block it with CORS). Use fallback HTML.
        if (isFile) {
            el.innerHTML = getFallback(name);
            return;
        }

        try {
            const res = await fetch(src);
            if (!res.ok) throw new Error('Failed to fetch ' + src);
            const html = await res.text();
            el.innerHTML = html;
        } catch (err) {
            console.error('Include error:', err);
            el.innerHTML = getFallback(name);
        }
    });

    await Promise.all(jobs);

    // Notify listeners that includes have been loaded
    document.dispatchEvent(new CustomEvent('includes:loaded'));
});

    // Projects page logic — moved from inline script in projects.html
    document.addEventListener('includes:loaded', () => {
        // Only run on pages that have the projects container
        const projectsContainer = document.getElementById('projectsContainer');
        if (!projectsContainer) return;

        const projectsData = [
                {
                    id: 11,
                    name: "ETL Middleware - Bayan Lepas, Penang",
                    category: "facility",
                    domain: "Facility Management",
                    year: "2025",
                    description: "ETL tool and middleware for Airborne Particle Counter (APC) data ingestion.",
                    technologies: ["GO", "HTML", "Javascript", "Web Socket", "ETL"],
                    features: [
                        "APC data ingestion",
                        "Middleware",
                        "ETL tool"
                    ],
                    status: "ongoing",
                    images: ["2025/25-1etl-1.png"]
                },
                {
                    id: 10,
                    name: "APC Monitoring - Bayan Lepas, Penang",
                    category: "facility",
                    domain: "Facility Management",
                    year: "2025",
                    description: "Air particle counter real-time monitoring dashboard.",
                    technologies: ["GO", "HTML", "Javascript", "Web Socket", "Modbus"],
                    features: [
                        "Particle count sensors",
                        "Real-time dashboards"
                    ],
                    status: "completed",
                    images: ["2025/25-1apc-1.png", "2025/25-1apc-2.png"]
                },
                {
                    id: 9,
                    name: "EMS - Bayan Lepas, Penang",
                    category: "electrical",
                    domain: "Electrical Systems",
                    year: "2025",
                    description: "Centralized real-time power consumption monitoring.",
                    technologies: ["Modbus", "HMI", "Web Dashboard", "DB Panel"],
                    features: [
                        "Energy consumption tracking",
                        "Real-time dashboards"
                    ],
                    status: "completed",
                    images: ["2025/25-1ems-1.png", "2025/25-1ems-2.png"]
                },
                {
                    id: 8,
                    name: "FMCS / BMS - Bayan Lepas, Penang",
                    category: "facility",
                    domain: "Facility Management",
                    year: "2025",
                    description: "FCU, CO2, Temperature and Humidity sensors across multiple zones.",
                    technologies: ["Modbus", "PLC", "HMI", "Web Dashboard", "DDC Panel"],
                    features: [
                        "Real-time dashboards",
                        "Environmental control",
                        "Multi-zone Monitoring"
                    ],
                    status: "completed",
                    images: ["2025/25-1fms-1.png", "2025/25-1fms-2.png", "2025/25-1fms-3.png"]         
                },
                {
                    id: 5,
                    name: "AgroVerse 365",
                    category: "future",
                    domain: "Agriculture & Irrigation",
                    year: "2025-2030",
                    description: "A decentralized AI-powered farming network with blockchain crop traceability, intelligent fertigation, crop growthanalysis, and shared irrigation infrastructure.",
                    technologies: ["Blockchain", "AI", "AIoT", "Decentralized", "Network"],
                    features: [
                        "Blockchain crop traceability",
                        "Shared irrigation infrastructure",
                        "AI-driven yield prediction",
                        "Farmer-to-farmer data exchange",
                        "Decentralized network"
                    ],
                    status: "future",
                    images: ["investors.png"]
                },
                {
                    id: 4,
                    name: "FloodShield 360",
                    category: "future",
                    domain: "Flood Mitigation",
                    year: "2025-2030",
                    description: "Predictive flood defense grid with AI flood modeling, IoT drainage control, and integration with state disaster response systems.",
                    technologies: ["AI", "Modeling", "IoT", "GIS", "Memphis"],
                    features: [
                        "AI flood modeling",
                        "IoT drainage control",
                        "National disaster response integration",
                        "Predictive analytics"
                    ],
                    status: "future",
                    images: ["investors.png"]
                },
                {
                    id: 3,
                    name: "GreenCore 247",
                    category: "future",
                    domain: "Facility Management",
                    year: "2025-2030",
                    description: "Carbon-negative building automation system with HVAC optimization, solar + battery orchestration, and ESG reporting.",
                    technologies: ["AI", "Optimization", "Solar", "Battery Management", "ESG", "IoT"],
                    features: [
                        "HVAC optimization",
                        "Solar + battery orchestration",
                        "ESG reporting",
                        "Carbon credits tracking"
                    ],
                    status: "future",
                    images: ["investors.png"]
                },
                {
                    id: 2,
                    name: "AetherNet",
                    category: "future",
                    domain: "Environmental Monitoring",
                    year: "2025-2030",
                    description: "Unified environmental sensing mesh network with air/water/noise sensors, real-time dashboards, and citizen engagement via mobile apps.",
                    technologies: ["Mesh", "Multi-Sensor", "HTTPS", "AIoT", "API", "Mobile"],
                    features: [
                        "Air/water/noise sensors",
                        "Real-time municipal dashboards",
                        "Unified sensing mesh"
                    ],
                    status: "future",
                    images: ["investors.png"]
                },
                {
                    id: 1,
                    name: "VerdeGrid",
                    category: "future",
                    domain: "Electrical Systems",
                    year: "2025-2030",
                    description: "AI-optimized microgrid with solar, wind, diesel, and battery orchestration, featuring load forecasting and grid-independent operation.",
                    technologies: ["AI", "Optimization", "Microgrid", "Renewable Energy", "Battery Management"],
                    features: [
                        "Solar, wind, hydro, battery orchestration",
                        "Load forecasting",
                        "Peak shaving",
                        "Grid-independent operation",
                        "Smart facility integration"
                    ],
                    status: "future",
                    images: ["investors.png"]
                }/* ,
                    id: 1,
                    name: "Smart Irrigation Dashboard",
                    category: "agriculture",
                    domain: "Agriculture & Irrigation",
                    year: "2021",
                    description: "Real-time soil moisture monitoring, pump control, weather overlays, and crop analytics system.",
                    technologies: ["MQTT", "Raspberry Pi", "TensorFlow", "Azure IoT"],
                    features: [
                        "Real-time soil moisture sensors",
                        "Automated pump and valve control",
                        "Weather forecasting integration",
                        "Crop yield prediction",
                        "Mobile app dashboard"
                    ],
                    status: "completed",
                    images: ["sample-1.svg", "sample-2.svg"]
                },
                {
                    id: 2,
                    name: "Flood Alert System",
                    category: "flood",
                    domain: "Flood Mitigation",
                    year: "2022",
                    description: "Rainfall prediction, drainage control automation, and SMS/email alert system for communities.",
                    technologies: ["IoT Sensors", "AI Modeling", "SMS Gateway", "Cloud Platform"],
                    features: [
                        "Real-time rainfall telemetry",
                        "Automated sluice gates",
                        "Community SMS alerts",
                        "Flood prediction modeling",
                        "Emergency response integration"
                    ],
                    status: "completed",
                    images: ["sample-3.svg", "sample-4.svg"]
                },
                {
                    id: 3,
                    name: "Cleanroom Monitoring Suite",
                    category: "facility",
                    domain: "Facility Management",
                    year: "2022",
                    description: "Particle count monitoring, pressure differential control, HVAC automation, and ISO compliance reporting.",
                    technologies: ["BACnet", "Grafana", "InfluxDB", "Edge Computing"],
                    features: [
                        "Particle count sensors",
                        "Pressure differential control",
                        "HVAC automation",
                        "ISO compliance reporting",
                        "Real-time dashboards"
                    ],
                    status: "completed"
                },
                {
                    id: 4,
                    name: "Energy Optimization Report System",
                    category: "electrical",
                    domain: "Electrical Systems",
                    year: "2023",
                    description: "Baseline vs optimized consumption analysis, predictive load balancing, and ROI calculation system.",
                    technologies: ["Modbus", "AI Forecasting", "Energy Analytics", "Cloud Platform"],
                    features: [
                        "Energy consumption tracking",
                        "Predictive load balancing",
                        "ROI analysis",
                        "Peak shaving automation",
                        "Carbon footprint tracking"
                    ],
                    status: "completed"
                },
                {
                    id: 5,
                    name: "Facility Management Portal",
                    category: "facility",
                    domain: "Facility Management",
                    year: "2023",
                    description: "Unified control of HVAC, lighting, access control, alarms, and environmental sensors across multiple sites.",
                    technologies: ["BACnet", "OPC-UA", "Web Dashboard", "Mobile App"],
                    features: [
                        "Multi-site management",
                        "Unified dashboard",
                        "Access control integration",
                        "Alarm management",
                        "Environmental monitoring"
                    ],
                    status: "completed"
                },
                {
                    id: 6,
                    name: "Air Quality Monitoring Network",
                    category: "environment",
                    domain: "Environmental Monitoring",
                    year: "2023",
                    description: "City-wide air quality sensor network with real-time dashboards and public API access.",
                    technologies: ["IoT Sensors", "MQTT", "Public API", "Data Visualization"],
                    features: [
                        "PM2.5 and CO2 monitoring",
                        "Real-time public dashboards",
                        "Open API for developers",
                        "Mobile app alerts",
                        "Historical data analysis"
                    ],
                    status: "completed"
                },
                {
                    id: 12,
                    name: "Water Quality Monitoring System",
                    category: "environment",
                    domain: "Environmental Monitoring",
                    year: "2024",
                    description: "Comprehensive water quality monitoring with pH, turbidity, conductivity, and heavy metal detection sensors.",
                    technologies: ["Water Sensors", "IoT", "Cloud Analytics", "Alert System"],
                    features: [
                        "pH monitoring",
                        "Turbidity detection",
                        "Conductivity measurement",
                        "Heavy metal detection",
                        "Automated alerts"
                    ],
                    status: "completed"
                }*/
            ];

        // Inline SVG strings for category icons so they can be styled via CSS
        const categoryIcons = {
            agriculture: '<span class="material-symbols-outlined project-icon icon-svg">temp_preferences_eco</span>',
            flood: '<span class="material-symbols-outlined project-icon icon-svg">flood</span>',
            facility: '<span class="material-symbols-outlined project-icon icon-svg">apartment</span>',
            electrical: '<span class="material-symbols-outlined project-icon icon-svg">flash_on</span>',
            environment: '<span class="material-symbols-outlined project-icon icon-svg">humidity_indoor</span>',
            future: '<span class="material-symbols-outlined project-icon icon-svg">rocket_launch</span>'
        };

        function renderProjects(projects) {
            const container = document.getElementById('projectsContainer');
            const noResults = document.getElementById('noResults');
            if (projects.length === 0) {
                container.innerHTML = '';
                noResults.style.display = 'block';
                return;
            }
            noResults.style.display = 'none';
            container.innerHTML = projects.map(project => {
                const imgSrc = getDefaultImagesWithPath(project)[0];
                const badgeHtml = project.status === 'completed' ? '<span class="material-symbols-outlined icon-svg">check_circle</span> Completed' : 
                        project.status === 'ongoing' ? '<span class="material-symbols-outlined icon-svg">clock_loader_60</span> On-going' : 
                        '<span class="material-symbols-outlined icon-svg">schedule</span> Future';
                return `
                    <div class="project-card-detailed" data-id="${project.id}" data-category="${project.category}" data-status="${project.status}">
                        <div class="project-body">
                            <div class="project-header">
                                ${categoryIcons[project.category] || ''}
                                <div class="project-badge ${project.status}">${badgeHtml}</div>
                                <div class="project-year">${project.year}</div>
                            </div>
                            <img class="project-thumb" src="${imgSrc}" alt="${project.name} thumbnail" loading="lazy" width="160" height="100">
                            <h3 class="project-name">${project.name}</h3>
                            <p class="project-domain">${project.domain}</p>
                            <p class="project-description">${project.description}</p>
                            <div class="project-technologies">
                                <strong>Technologies:</strong>
                                <div class="tech-tags-small">
                                    ${project.technologies.map(tech => `<span class="tech-tag-small">${tech}</span>`).join('')}
                                </div>
                            </div>
                            <div class="project-features">
                                <strong>Key Features:</strong>
                                <ul>
                                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        let currentFilter = 'all';
        let currentSearch = '';

        function filterProjects() {
            let filtered = projectsData.filter(project => {
                const matchesFilter = currentFilter === 'all' || project.category === currentFilter;
                const matchesSearch = currentSearch === '' || 
                    project.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                    project.domain.toLowerCase().includes(currentSearch.toLowerCase()) ||
                    project.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                    project.technologies.some(tech => tech.toLowerCase().includes(currentSearch.toLowerCase()));
                return matchesFilter && matchesSearch;
            });
            renderProjects(filtered);
        }

        // Initialize UI and listeners
        renderProjects(projectsData);

        // Gallery modal: create once and manage image collections per project
        function createGalleryModal() {
            if (document.getElementById('galleryModal')) return;
            const modal = document.createElement('div');
            modal.id = 'galleryModal';
            modal.className = 'gallery-modal';
            modal.innerHTML = `
                <div class="gallery-overlay" data-close>
                    <button class="gallery-close" aria-label="Close gallery">✕</button>
                    <div class="gallery-content" role="dialog" aria-modal="true">
                        <div class="gallery-main">
                            <button class="gallery-prev" aria-label="Previous image">‹</button>
                            <img src="" alt="" class="gallery-main-img">
                            <button class="gallery-next" aria-label="Next image">›</button>
                        </div>
                        <div class="gallery-thumbs" role="list"></div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            // events
            modal.querySelector('[data-close]').addEventListener('click', (e) => {
                if (e.target === modal.querySelector('[data-close]') || e.target.classList.contains('gallery-close')) closeGallery();
            });

            modal.querySelector('.gallery-prev').addEventListener('click', () => changeIndex(-1));
            modal.querySelector('.gallery-next').addEventListener('click', () => changeIndex(1));

            document.addEventListener('keydown', (e) => {
                if (!modal.classList.contains('active')) return;
                if (e.key === 'Escape') closeGallery();
                if (e.key === 'ArrowLeft') changeIndex(-1);
                if (e.key === 'ArrowRight') changeIndex(1);
            });

            let currentImages = [];
            let currentIndex = 0;

            function renderThumbs() {
                const thumbs = modal.querySelector('.gallery-thumbs');
                thumbs.innerHTML = '';
                currentImages.forEach((src, i) => {
                    const btn = document.createElement('button');
                    btn.className = 'gallery-thumb';
                    btn.innerHTML = `<img src="${src}" alt="thumbnail ${i+1}" loading="lazy">`;
                    btn.addEventListener('click', () => setIndex(i));
                    thumbs.appendChild(btn);
                });
                highlightThumb();
            }

            function highlightThumb() {
                const nodes = modal.querySelectorAll('.gallery-thumb img');
                nodes.forEach((n, i) => n.classList.toggle('active', i === currentIndex));
            }

            function setIndex(i) {
                if (i < 0) i = currentImages.length - 1;
                if (i >= currentImages.length) i = 0;
                currentIndex = i;
                const main = modal.querySelector('.gallery-main-img');
                main.src = currentImages[currentIndex];
                main.alt = `Image ${currentIndex+1}`;
                highlightThumb();
            }

            function changeIndex(dir) {
                setIndex(currentIndex + dir);
            }

            function open(images) {
                currentImages = images && images.length ? images : ['placeholder.svg']
                currentIndex = 0;
                renderThumbs();
                setIndex(0);
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeGallery() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }

            // expose methods
            modal.open = open;
            modal.close = closeGallery;
        }

        createGalleryModal();

        // Delegate click on project cards to open gallery
        projectsContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card-detailed');
            if (!card) return;
            const id = card.dataset.id;
            const project = projectsData.find(p => String(p.id) === String(id));
            if (!project) return;
            // gather images: project.images (array) or project.image or placeholder
            const imgs = getDefaultImagesWithPath(project);
            const modal = document.getElementById('galleryModal');
            if (modal && modal.open) modal.open(imgs);
        });
        
        function getDefaultImagesWithPath(project) {
            return (project.images && project.images.length ? project.images.slice() : (project.image ? [project.image] : ['placeholder.svg'])).map(img => 'assets/projects/' + img);
        }

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                filterProjects();
            });
        });

        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value;
                filterProjects();
            });
        }
    });
