document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".car-insurance-navbar");

    const navLinks = document.querySelectorAll(
        ".car-insurance-menu .nav-link"
    );

    const navCollapse = document.getElementById("carInsuranceNav");

    function handleNavbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();

    if (navLinks.length > 0) {

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.forEach(function (item) {
                    item.classList.remove("active");
                });

                this.classList.add("active");

                if (
                    navCollapse &&
                    navCollapse.classList.contains("show")
                ) {

                    if (
                        typeof bootstrap !== "undefined" &&
                        bootstrap.Collapse
                    ) {

                        const bsCollapse =
                            bootstrap.Collapse.getInstance(
                                navCollapse
                            );

                        if (bsCollapse) {

                            bsCollapse.hide();

                        } else {

                            new bootstrap.Collapse(
                                navCollapse,
                                {
                                    toggle: false
                                }
                            ).hide();

                        }

                    }

                }

            });

        });

    }

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }

    const backToTop =
        document.getElementById("backToTop");

    function handleBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }

    window.addEventListener(
        "scroll",
        handleBackToTop
    );

    handleBackToTop();

    if (backToTop) {

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }

    const floatingBtn =
        document.querySelector(".car-floating-btn");

    function handleFloatingButton() {

        if (!floatingBtn) return;

        if (window.scrollY > 400) {
            floatingBtn.classList.add("show");
        } else {
            floatingBtn.classList.remove("show");
        }

    }

    if (floatingBtn) {

        window.addEventListener(
            "scroll",
            handleFloatingButton
        );

        handleFloatingButton();

    }

    const accordionItems =
        document.querySelectorAll(
            ".car-accordion-item"
        );

    if (accordionItems.length > 0) {

        accordionItems.forEach(function (item) {

            const button =
                item.querySelector(
                    ".car-accordion-button"
                );

            if (!button) return;

            button.addEventListener(
                "click",
                function () {

                    const isActive =
                        item.classList.contains(
                            "active"
                        );

                    accordionItems.forEach(
                        function (otherItem) {

                            otherItem.classList.remove(
                                "active"
                            );

                            const icon =
                                otherItem.querySelector(
                                    ".car-accordion-button i"
                                );

                            if (icon) {

                                icon.classList.remove(
                                    "fa-chevron-up"
                                );

                                icon.classList.add(
                                    "fa-chevron-down"
                                );

                            }

                        }
                    );

                    if (!isActive) {

                        item.classList.add(
                            "active"
                        );

                        const icon =
                            item.querySelector(
                                ".car-accordion-button i"
                            );

                        if (icon) {

                            icon.classList.remove(
                                "fa-chevron-down"
                            );

                            icon.classList.add(
                                "fa-chevron-up"
                            );

                        }

                    }

                }
            );

        });

    }

    const serviceCards =
        document.querySelectorAll(
            ".car-service-card"
        );

    if (serviceCards.length > 0) {

        serviceCards.forEach(
            function (card, index) {

                card.style.opacity = "0";

                card.style.transform =
                    "translateY(35px)";

                setTimeout(
                    function () {

                        card.style.transition =
                            "opacity 0.6s ease, transform 0.6s ease";

                        card.style.opacity = "1";

                        card.style.transform =
                            "translateY(0)";

                    },
                    index * 150
                );

            }
        );

    }

    const stepCards =
        document.querySelectorAll(
            ".step-card"
        );

    if (stepCards.length > 0) {

        stepCards.forEach(function (card) {

            const button =
                card.querySelector(
                    ".step-header"
                );

            if (!button) return;

            const icon =
                button.querySelector("i");

            button.addEventListener(
                "click",
                function () {

                    const isActive =
                        card.classList.contains(
                            "active"
                        );

                    stepCards.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                            const itemIcon =
                                item.querySelector(
                                    ".step-header i"
                                );

                            if (itemIcon) {

                                itemIcon.classList.remove(
                                    "fa-arrow-up"
                                );

                                itemIcon.classList.add(
                                    "fa-arrow-down"
                                );

                            }

                        }
                    );

                    if (!isActive) {

                        card.classList.add(
                            "active"
                        );

                        if (icon) {

                            icon.classList.remove(
                                "fa-arrow-down"
                            );

                            icon.classList.add(
                                "fa-arrow-up"
                            );

                        }

                    }

                }
            );

        });

    }

    const featureCards =
        document.querySelectorAll(
            ".feature-card"
        );

    const featuresSection =
        document.querySelector(
            ".features-section"
        );

    if (
        featureCards.length > 0 &&
        featuresSection &&
        typeof IntersectionObserver !== "undefined"
    ) {

        const featureObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                featureCards.forEach(
                                    function (
                                        card,
                                        index
                                    ) {

                                        setTimeout(
                                            function () {

                                                card.classList.add(
                                                    "show"
                                                );

                                            },
                                            index * 100
                                        );

                                    }
                                );

                                featureObserver.unobserve(
                                    featuresSection
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );

        featureObserver.observe(
            featuresSection
        );

    }

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );

    if (faqItems.length > 0) {

        faqItems.forEach(function (item) {

            const button =
                item.querySelector(
                    ".faq-question"
                );

            if (!button) return;

            const icon =
                button.querySelector("i");

            button.addEventListener(
                "click",
                function () {

                    const isActive =
                        item.classList.contains(
                            "active"
                        );

                    faqItems.forEach(
                        function (otherItem) {

                            otherItem.classList.remove(
                                "active"
                            );

                            const otherIcon =
                                otherItem.querySelector(
                                    ".faq-question i"
                                );

                            if (otherIcon) {

                                otherIcon.classList.remove(
                                    "fa-times"
                                );

                                otherIcon.classList.add(
                                    "fa-plus"
                                );

                            }

                        }
                    );

                    if (!isActive) {

                        item.classList.add(
                            "active"
                        );

                        if (icon) {

                            icon.classList.remove(
                                "fa-plus"
                            );

                            icon.classList.add(
                                "fa-times"
                            );

                        }

                    }

                }
            );

        });

        const activeItem =
            document.querySelector(
                ".faq-item.active"
            );

        if (activeItem) {

            const activeIcon =
                activeItem.querySelector(
                    ".faq-question i"
                );

            if (activeIcon) {

                activeIcon.classList.remove(
                    "fa-plus"
                );

                activeIcon.classList.add(
                    "fa-times"
                );

            }

        }

    }

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    if (anchorLinks.length > 0) {

        anchorLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (target) {

                        event.preventDefault();

                        const navbarHeight =
                            navbar
                                ? navbar.offsetHeight
                                : 0;

                        const targetPosition =
                            target.getBoundingClientRect()
                                .top +
                            window.scrollY -
                            navbarHeight;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: "smooth"
                        });

                    }

                }
            );

        });

    }
   AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false,
        offset: 100
    });
});