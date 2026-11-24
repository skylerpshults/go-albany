      (() => {
        const header = document.querySelector("header");
        const nav = header?.querySelector("nav");
        const toggle = nav?.querySelector(".nav-toggle");
        const menu = nav?.querySelector(".nav-links");

        if (!nav || !toggle || !menu) {
          return;
        }

        const updateHeaderHeight = () => {
          document.documentElement.style.setProperty("--sticky-header-height", `${header.offsetHeight}px`);
        };

        updateHeaderHeight();
        new ResizeObserver(updateHeaderHeight).observe(header);

        const mobileQuery = window.matchMedia("(max-width: 720px)");

        const setMenuOpen = (isOpen, returnFocus = false) => {
          nav.dataset.menuOpen = String(isOpen);
          toggle.setAttribute("aria-expanded", String(isOpen));
          toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");

          if (returnFocus) {
            toggle.focus();
          }
        };

        setMenuOpen(false);

        toggle.addEventListener("click", () => {
          const isOpen = nav.dataset.menuOpen === "true";
          setMenuOpen(!isOpen);
        });

        menu.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => setMenuOpen(false));
        });

        document.addEventListener("click", (event) => {
          if (mobileQuery.matches && nav.dataset.menuOpen === "true" && !nav.contains(event.target)) {
            setMenuOpen(false);
          }
        });

        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape" && nav.dataset.menuOpen === "true") {
            setMenuOpen(false, true);
          }
        });

        mobileQuery.addEventListener("change", () => setMenuOpen(false));
      })();
