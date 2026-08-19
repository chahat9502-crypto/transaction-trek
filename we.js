const STORAGE_KEY = "myBlogArticles";
const ADMIN_LOGIN_KEY = "myBlogAdminLoggedIn";
const EDIT_KEY = "editArticleId";
const DELETED_KEY = "myBlogDeletedArticleIds";
const DARK_MODE_KEY = "myBlogDarkMode";
const defaultArticles = [

    {
        id: "html-css-js",
        title: "Why Learning HTML CSS JavaScript is Important",
        category: "Programming",
        date: "12 August 2026",
        image: "image/blog1.jpg",
        description:
            "Learning HTML, CSS and JavaScript helps you build professional websites.",
        content:
`Web development is one of the fastest growing fields in technology.

HTML creates the structure of a webpage. CSS makes websites attractive, responsive and user-friendly. JavaScript adds functionality and makes websites interactive.

Learning these technologies can open many career opportunities.`
    },

    {
        id: "beautiful-places",
        title: "Top 10 Beautiful Places to Visit",
        category: "Travel",
        date: "15 August 2026",
        image: "image/blog2.jpg",
        description:
            "Discover beautiful destinations and unforgettable travel experiences.",
        content:
`Traveling gives us an opportunity to explore beautiful places, experience different cultures and create unforgettable memories.

Beautiful mountains, peaceful beaches, historical monuments and modern cities attract millions of travelers every year.

Travel can help us relax, learn new things and create unforgettable memories.`
    },

    {
        id: "healthy-lifestyle",
        title: "Healthy Lifestyle Tips",
        category: "Health",
        date: "20 August 2026",
        image: "image/blog3.jpg",
        description:
            "Simple habits can help you build a healthier and happier life.",
        content:
`A healthy lifestyle includes regular exercise, balanced nutrition, quality sleep and stress management.

Simple daily habits such as drinking enough water, eating nutritious food and exercising regularly can improve physical and mental health.`
    },

    {
        id: "javascript",
        title: "Complete Guide to JavaScript",
        category: "Programming",
        date: "25 August 2026",
        image: "image/blog4.jpg",
        description:
            "Learn how JavaScript makes websites interactive and dynamic.",
        content:
`JavaScript is one of the most important technologies used in modern web development.

It allows developers to create interactive forms, animations, sliders, popups and menus.

Learning JavaScript after HTML and CSS helps developers build powerful web applications.`
    },

    {
        id: "responsive-design",
        title: "Responsive Web Design Tips",
        category: "Programming",
        date: "28 August 2026",
        image: "image/blog5.jpg",
        description:
            "Learn how to create websites that work perfectly on all screen sizes.",
        content:
`Responsive web design allows websites to automatically adjust to different screen sizes.

CSS Flexbox, CSS Grid and Media Queries are important tools for creating responsive layouts.

A responsive website should work smoothly on mobile phones, tablets and desktop computers.`
    },

    {
        id: "ai-future",
        title: "The Future of Artificial Intelligence",
        category: "Technology",
        date: "30 August 2026",
        image: "image/blog6.jpg",
        description:
            "Artificial Intelligence is transforming many industries.",
        content:
`Artificial Intelligence is transforming healthcare, education, finance, transportation and many other industries.

AI-powered tools can help people complete tasks faster and solve complex problems more efficiently.`
    },

    {
        id: "technology-trends",
        title: "Latest Technology Trends",
        category: "Technology",
        date: "1 September 2026",
        image: "image/blog12.jpg",
        description:
            "Explore the latest innovations, gadgets, software and digital solutions.",
        content:
`Technology is changing rapidly. Artificial intelligence, cloud computing, robotics and modern software are creating exciting opportunities.

Learning about new technology helps students, professionals and businesses stay updated.`
    },

    {
        id: "web-development",
        title: "Learn Web Development",
        category: "Programming",
        date: "2 September 2026",
        image: "image/blog13.jpg",
        description:
            "Learn HTML, CSS and JavaScript to create modern websites.",
        content:
`Web development starts with HTML, CSS and JavaScript.

HTML provides structure, CSS provides design and JavaScript provides interaction.

By learning these technologies, beginners can create responsive and interactive websites.`
    },

    {
        id: "world-travel",
        title: "Beautiful Places Around The World",
        category: "Travel",
        date: "3 September 2026",
        image: "image/blog14.jpg",
        description:
            "Discover amazing destinations around the world.",
        content:
`The world is full of beautiful destinations. From peaceful beaches to impressive mountains and historical cities, every destination offers something special.

Exploring new places gives travelers unforgettable experiences.`
    },

    {
        id: "daily-life",
        title: "Improve Your Daily Life",
        category: "Lifestyle",
        date: "4 September 2026",
        image: "image/blog15.jpg",
        description:
            "Small habits and positive thinking can improve everyday life.",
        content:
`Improving your daily life starts with simple habits.

Good planning, regular exercise, positive thinking, healthy eating and proper time management can make everyday life more productive and enjoyable.`
    },

    {
        id: "learning-skills",
        title: "Importance of Learning Skills",
        category: "Education",
        date: "5 September 2026",
        image: "image/blog16.jpg",
        description:
            "Continuous learning helps people grow professionally and personally.",
        content:
`Learning new skills helps people become more confident and successful.

Education and continuous learning are important for personal and professional growth.

Developing useful skills can create better career opportunities and help people adapt to a changing world.`
    },

    {
        id: "business-growth",
        title: "Business Growth Strategies",
        category: "Business",
        date: "6 September 2026",
        image: "image/blog17.jpg",
        description:
            "Learn useful business ideas and strategies for success.",
        content:
`Successful businesses need good planning, marketing, customer service and innovation.

Understanding customers, improving products and using effective marketing strategies can help businesses grow.`
    },

    {
        id: "healthy-life",
        title: "Healthy Lifestyle Guide",
        category: "Health",
        date: "7 September 2026",
        image: "image/blog18.jpg",
        description:
            "Build healthy habits for a better lifestyle.",
        content:
`Healthy eating, regular exercise, proper sleep and stress management are important parts of a healthy lifestyle.

Making small improvements every day can help you live a healthier and happier life.`
    }

];

function generateArticleId(title) {

    let base = String(title || "article")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    if (!base) {
        base = "article";
    }

    return (
        base +
        "-" +
        Date.now().toString(36) +
        "-" +
        Math.random().toString(36).substring(2, 8)
    );
}
function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function fixImagePath(image) {

    if (!image) {
        return "image/blog1.jpg";
    }

    let path = String(image).trim();

    path = path.replace(/^(\.\.\/)+/, "");
    path = path.replace(/^(\.\/)+/, "");

    return path || "image/blog1.jpg";
}
function formatDateForInput(dateValue) {

    if (!dateValue) {
        return "";
    }

    const value = String(dateValue).trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value;
    }

    const match = value.match(
        /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/
    );

    if (match) {

        const day = String(match[1]).padStart(2, "0");
        const monthName = match[2].toLowerCase();
        const year = match[3];

        const months = {
            january: "01",
            february: "02",
            march: "03",
            april: "04",
            may: "05",
            june: "06",
            july: "07",
            august: "08",
            september: "09",
            october: "10",
            november: "11",
            december: "12"
        };

        if (months[monthName]) {
            return `${year}-${months[monthName]}-${day}`;
        }
    }

    const parsed = new Date(value);

    if (isNaN(parsed.getTime())) {
        return "";
    }

    return [
        parsed.getFullYear(),
        String(parsed.getMonth() + 1).padStart(2, "0"),
        String(parsed.getDate()).padStart(2, "0")
    ].join("-");
}


function formatDateForStorage(dateValue) {

    if (!dateValue) {
        return "";
    }

    const value = String(dateValue).trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {

        const [year, month, day] = value.split("-");

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
    }

    return value;
}

function getSavedArticles() {

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return [];
        }

        const articles = JSON.parse(saved);

        return Array.isArray(articles)
            ? articles
            : [];

    } catch (error) {

        console.error(
            "Error reading articles:",
            error
        );

        return [];
    }
}


function saveArticles(articles) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(articles)
        );

        return true;

    } catch (error) {

        console.error(
            "Error saving articles:",
            error
        );

        return false;
    }
}

function getDeletedArticleIds() {

    try {

        const data =
            localStorage.getItem(DELETED_KEY);

        if (!data) {
            return [];
        }

        const ids = JSON.parse(data);

        return Array.isArray(ids)
            ? ids.map(id => String(id))
            : [];

    } catch (error) {

        return [];
    }
}


function saveDeletedArticleIds(ids) {

    try {

        const uniqueIds = [
            ...new Set(
                ids.map(id => String(id))
            )
        ];

        localStorage.setItem(
            DELETED_KEY,
            JSON.stringify(uniqueIds)
        );

        return true;

    } catch (error) {

        console.error(error);

        return false;
    }
}

function getArticles() {

    let articles = getSavedArticles();

    const deletedIds =
        new Set(getDeletedArticleIds());

    const existingIds =
        new Set(
            articles.map(article =>
                String(article.id)
            )
        );


    defaultArticles.forEach(defaultArticle => {

        const id =
            String(defaultArticle.id);

        if (
            !existingIds.has(id) &&
            !deletedIds.has(id)
        ) {

            articles.push({
                ...defaultArticle
            });
        }
    });


    articles = articles.filter(article =>
        article &&
        article.id &&
        !deletedIds.has(
            String(article.id)
        )
    );


    saveArticles(articles);

    return articles;
}

function findArticleById(id) {

    const requestedId =
        String(id || "").trim();

    if (!requestedId) {
        return null;
    }

    const articles = getArticles();

    return (
        articles.find(article =>
            String(article.id) === requestedId
        ) || null
    );
}

function addArticle(articleData) {

    const articles = getArticles();

    const newArticle = {

        id: generateArticleId(
            articleData.title
        ),

        title: String(
            articleData.title || ""
        ).trim(),

        category: String(
            articleData.category || "Other"
        ).trim(),

        date:
            formatDateForStorage(
                articleData.date
            ) ||
            new Date().toLocaleDateString(
                "en-GB",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                }
            ),

        image:
            fixImagePath(
                articleData.image
            ),

        description: String(
            articleData.description || ""
        ).trim(),

        content: String(
            articleData.content || ""
        ).trim(),

        isAdminAdded: true
    };


    articles.push(newArticle);

    return saveArticles(articles);
}
function updateArticle(id, updatedData) {

    const requestedId =
        String(id || "").trim();

    const articles = getArticles();

    const index =
        articles.findIndex(article =>
            String(article.id) === requestedId
        );


    if (index === -1) {

        console.error(
            "Article not found:",
            requestedId
        );

        return false;
    }


    const oldArticle =
        articles[index];


    articles[index] = {

        ...oldArticle,

        id: oldArticle.id,

        title:
            String(
                updatedData.title ??
                oldArticle.title
            ).trim(),

        category:
            String(
                updatedData.category ??
                oldArticle.category
            ).trim(),

        date:
            formatDateForStorage(
                updatedData.date
            ) ||
            oldArticle.date,

        image:
            fixImagePath(
                updatedData.image ||
                oldArticle.image
            ),

        description:
            String(
                updatedData.description ??
                oldArticle.description
            ).trim(),

        content:
            String(
                updatedData.content ??
                oldArticle.content
            ).trim(),

        isAdminAdded:
            oldArticle.isAdminAdded === true
    };


    return saveArticles(articles);
}

function deleteArticle(id) {

    const articleId =
        String(id || "").trim();

    let articles = getArticles();

    const exists =
        articles.some(article =>
            String(article.id) === articleId
        );


    if (!exists) {

        alert("Article not found.");

        return false;
    }


    articles =
        articles.filter(article =>
            String(article.id) !== articleId
        );


    if (!saveArticles(articles)) {

        alert("Delete failed.");

        return false;
    }


    const deletedIds =
        getDeletedArticleIds();


    if (!deletedIds.includes(articleId)) {

        deletedIds.push(articleId);

        saveDeletedArticleIds(
            deletedIds
        );
    }


    displayHomeArticles();
    displayCategoriesPage();
    displayCategoryArticles();
    renderAdminDashboard();

    return true;
}

function isAdminLoggedIn() {

    return (
        localStorage.getItem(
            ADMIN_LOGIN_KEY
        ) === "true"
    );
}


function setAdminLogin(value) {

    localStorage.setItem(
        ADMIN_LOGIN_KEY,
        value ? "true" : "false"
    );
}


function adminLogout() {

    setAdminLogin(false);

    localStorage.removeItem(
        EDIT_KEY
    );

    window.location.href =
        "admin-login.html";
}

function setupDarkMode() {

    const buttons =
        document.querySelectorAll(
            "#darkBtn"
        );

    const savedMode =
        localStorage.getItem(
            DARK_MODE_KEY
        );

    const isDark =
        savedMode === "true";


    document.body.classList.toggle(
        "dark-mode",
        isDark
    );


    buttons.forEach(button => {

        updateDarkIcon(
            button,
            isDark
        );


        if (
            button.dataset.darkReady ===
            "true"
        ) {
            return;
        }


        button.dataset.darkReady =
            "true";


        button.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark-mode"
                );


                const dark =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                localStorage.setItem(
                    DARK_MODE_KEY,
                    dark ? "true" : "false"
                );


                document
                    .querySelectorAll(
                        "#darkBtn"
                    )
                    .forEach(btn => {

                        updateDarkIcon(
                            btn,
                            dark
                        );
                    });
            }
        );
    });
}


function updateDarkIcon(button, isDark) {

    const icon =
        button.querySelector("i");

    if (!icon) {
        return;
    }

    icon.className =
        isDark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";
}

function createArticleCard(article) {

    const card =
        document.createElement("article");

    card.className =
        "blog-card";

    card.dataset.articleId =
        String(article.id);


    card.innerHTML = `

        <img
            src="${escapeHTML(
                fixImagePath(article.image)
            )}"
            alt="${escapeHTML(
                article.title
            )}"
            onerror="
                this.onerror=null;
                this.src='image/blog1.jpg';
            "
        >

        <div class="blog-content">

            <span class="date">
                ${escapeHTML(article.date)}
            </span>

            <h3>
                ${escapeHTML(article.title)}
            </h3>

            <p>
                ${escapeHTML(
                    article.description
                )}
            </p>

            <a
                class="read-btn"
                href="article.html?id=${encodeURIComponent(
                    article.id
                )}"
            >
                Read More
            </a>

        </div>
    `;


    return card;
}
function displayHomeArticles() {

    const container =
        document.querySelector(
            ".blogs .blog-container"
        );


    if (!container) {
        return;
    }


    const articles =
        getArticles();


    container.innerHTML = "";


    if (!articles.length) {

        container.innerHTML = `

            <div class="no-articles">

                <h3>
                    No Articles Available
                </h3>

                <p>
                    There are currently no articles to display.
                </p>

            </div>
        `;

        return;
    }


    articles.forEach(article => {

        container.appendChild(
            createArticleCard(article)
        );
    });
    const loadMore =
        document.getElementById(
            "loadMore"
        );

    if (loadMore) {

        loadMore.dataset.visibleCount =
            "8";
    }


    setupLoadMore();
}

function displayCategoryArticles() {

    const container =
        document.getElementById(
            "categoryArticles"
        ) ||
        document.querySelector(
            ".category-articles"
        );


    if (!container) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const categoryParam =
        params.get("category");


    const articles =
        getArticles();


    let filteredArticles =
        articles;


    if (categoryParam) {

        const selectedCategory =
            String(categoryParam)
                .trim()
                .toLowerCase();


        filteredArticles =
            articles.filter(article => {

                const articleCategory =
                    String(
                        article.category || ""
                    )
                    .trim()
                    .toLowerCase();

                return (
                    articleCategory ===
                    selectedCategory
                );
            });
    }


    container.innerHTML = "";


    const title =
        document.getElementById(
            "categoryTitle"
        );


    const count =
        document.getElementById(
            "categoryCount"
        );


    if (title) {

        title.textContent =
            categoryParam
                ? `${categoryParam} Articles`
                : "All Articles";
    }


    if (count) {

        count.textContent =
            `${filteredArticles.length} article${
                filteredArticles.length === 1
                    ? ""
                    : "s"
            } found`;
    }


    if (!filteredArticles.length) {

        container.innerHTML = `

            <div class="no-articles">

                <h3>
                    No Articles Found
                </h3>

                <p>
                    ${
                        categoryParam
                            ? `No articles are available in the ${escapeHTML(
                                categoryParam
                              )} category.`
                            : "There are currently no articles."
                    }
                </p>

                <a
                    href="categories.html"
                    class="btn"
                >
                    View All Categories
                </a>

            </div>
        `;

        return;
    }


    filteredArticles.forEach(article => {

        container.appendChild(
            createArticleCard(article)
        );
    });
}
function displayCategoriesPage() {

    const container =
        document.getElementById(
            "categoryList"
        ) ||
        document.querySelector(
            ".category-list"
        );


    if (!container) {
        return;
    }


    const articles =
        getArticles();


    const categoryMap =
        new Map();


    articles.forEach(article => {

        const category =
            String(
                article.category || "Other"
            ).trim();


        if (!category) {
            return;
        }


        const key =
            category.toLowerCase();


        if (!categoryMap.has(key)) {

            categoryMap.set(
                key,
                category
            );
        }
    });


    container.innerHTML = "";


    const categories =
        Array.from(
            categoryMap.values()
        ).sort((a, b) =>
            a.localeCompare(b)
        );


    if (!categories.length) {

        container.innerHTML =
            "<p>No categories available.</p>";

        return;
    }


    categories.forEach(category => {

        const link =
            document.createElement("a");


        link.href =
            "categories.html?category=" +
            encodeURIComponent(category);


        link.className =
            "category-link";


        link.textContent =
            category;


        container.appendChild(link);
    });
}
function loadArticlePage() {

    const page =
        document.querySelector(
            ".article-page"
        );


    if (!page) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        params.get("id");


    if (!id) {

        showArticleError(
            page,
            "Article Not Found",
            "Please select an article."
        );

        return;
    }


    const article =
        findArticleById(id);


    if (!article) {

        showArticleError(
            page,
            "Article Not Found",
            "This article may have been deleted or is no longer available."
        );

        return;
    }


    const paragraphs =
        String(
            article.content ||
            article.description ||
            ""
        )
        .split(/\n+/)
        .map(text => text.trim())
        .filter(Boolean)
        .map(paragraph => `
            <p>
                ${escapeHTML(paragraph)}
            </p>
        `)
        .join("");


    page.innerHTML = `

        <img
            src="${escapeHTML(
                fixImagePath(article.image)
            )}"
            alt="${escapeHTML(
                article.title
            )}"
            onerror="
                this.onerror=null;
                this.src='image/blog1.jpg';
            "
        >

        <h1>
            ${escapeHTML(article.title)}
        </h1>

        <div class="date">
            ${escapeHTML(article.date)}
        </div>

        <div class="article-category">
            ${escapeHTML(article.category)}
        </div>

        <div class="article-content">
            ${paragraphs}
        </div>

        <div class="share-buttons">

            <button
                type="button"
                class="share-article-btn"
                title="Share Article"
            >
                <i class="fa-solid fa-share-nodes"></i>
            </button>

        </div>
    `;


    const shareButton =
        page.querySelector(
            ".share-article-btn"
        );


    if (shareButton) {

        shareButton.addEventListener(
            "click",
            () => {

                shareArticle(
                    article.title
                );
            }
        );
    }
}

function showArticleError(
    page,
    title,
    message
) {

    page.innerHTML = `

        <div class="no-articles">

            <h1>
                ${escapeHTML(title)}
            </h1>

            <p>
                ${escapeHTML(message)}
            </p>

            <a
                href="web.html"
                class="btn"
            >
                Back Home
            </a>

        </div>
    `;
}

function shareArticle(title) {

    const shareData = {

        title: title,

        text: title,

        url: window.location.href
    };


    if (navigator.share) {

        navigator.share(
            shareData
        ).catch(() => {});

        return;
    }


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(
                window.location.href
            )
            .then(() => {

                alert(
                    "Article link copied!"
                );

            })
            .catch(() => {

                alert(
                    window.location.href
                );
            });

        return;
    }


    alert(
        window.location.href
    );
}

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {
        return;
    }


    if (
        input.dataset.searchReady ===
        "true"
    ) {
        return;
    }


    input.dataset.searchReady =
        "true";


    input.addEventListener(
        "input",
        function () {

            const keyword =
                this.value
                    .toLowerCase()
                    .trim();


            const cards =
                document.querySelectorAll(
                    ".blogs .blog-card"
                );


            cards.forEach(card => {

                const text =
                    card.textContent
                        .toLowerCase();


                card.style.display =
                    text.includes(keyword)
                        ? ""
                        : "none";
            });
        }
    );
}
function setupLoadMore() {

    const loadMore =
        document.getElementById(
            "loadMore"
        );


    if (!loadMore) {
        return;
    }


    const container =
        document.querySelector(
            ".blogs .blog-container"
        );


    if (!container) {
        return;
    }


    const cards =
        Array.from(
            container.querySelectorAll(
                ".blog-card"
            )
        );


    const pageSize = 8;


    let visibleCount =
        Number(
            loadMore.dataset.visibleCount ||
            pageSize
        );


    if (
        !Number.isFinite(
            visibleCount
        )
    ) {

        visibleCount =
            pageSize;
    }


    cards.forEach(
        (card, index) => {

            card.style.display =
                index < visibleCount
                    ? ""
                    : "none";
        }
    );


    if (
        cards.length <= pageSize
    ) {

        loadMore.style.display =
            "none";

        return;
    }


    loadMore.style.display =
        "block";


    if (
        loadMore.dataset.loadMoreReady ===
        "true"
    ) {
        return;
    }


    loadMore.dataset.loadMoreReady =
        "true";


    loadMore.addEventListener(
        "click",
        function () {

            visibleCount +=
                pageSize;


            loadMore.dataset.visibleCount =
                String(visibleCount);


            cards.forEach(
                (card, index) => {

                    if (
                        index < visibleCount
                    ) {

                        card.style.display =
                            "";
                    }
                }
            );


            if (
                visibleCount >=
                cards.length
            ) {

                loadMore.style.display =
                    "none";
            }
        }
    );
}
function setupNewsletter() {

    const form =
        document.querySelector(
            ".newsletter form"
        );


    if (!form) {
        return;
    }


    if (
        form.dataset.newsletterReady ===
        "true"
    ) {
        return;
    }


    form.dataset.newsletterReady =
        "true";


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const input =
                form.querySelector(
                    "input[type='email']"
                );


            if (
                !input ||
                !input.value.trim()
            ) {

                alert(
                    "Please enter your email."
                );

                return;
            }


            if (
                !input.checkValidity()
            ) {

                alert(
                    "Please enter a valid email."
                );

                return;
            }


            alert(
                "Thank you for subscribing!"
            );


            form.reset();
        }
    );
}

function renderAdminDashboard() {

    const tableBody =
        document.getElementById(
            "articlesTableBody"
        );


    if (!tableBody) {
        return;
    }


    const articles =
        getArticles();


    tableBody.innerHTML = "";


    const categories =
        new Set();


    let adminCount = 0;


    articles.forEach(article => {

        if (article.category) {

            categories.add(
                article.category
            );
        }


        if (
            article.isAdminAdded === true
        ) {

            adminCount++;
        }


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>

                <img
                    src="${escapeHTML(
                        fixImagePath(article.image)
                    )}"
                    alt="${escapeHTML(
                        article.title
                    )}"
                    class="article-image"
                    onerror="
                        this.onerror=null;
                        this.src='image/blog1.jpg';
                    "
                >

            </td>

            <td>

                <div class="article-title">

                    ${escapeHTML(
                        article.title
                    )}

                </div>

            </td>

            <td>

                <span class="category-badge">

                    ${escapeHTML(
                        article.category
                    )}

                </span>

            </td>

            <td>

                ${escapeHTML(
                    article.date
                )}

            </td>

            <td>

                <div class="action-buttons">

                    <button
                        type="button"
                        class="action-btn view-btn"
                        data-action="view"
                        data-id="${escapeHTML(
                            article.id
                        )}"
                        title="View"
                    >
                        <i class="fa-solid fa-eye"></i>
                    </button>

                    <button
                        type="button"
                        class="action-btn edit-btn"
                        data-action="edit"
                        data-id="${escapeHTML(
                            article.id
                        )}"
                        title="Edit"
                    >
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button
                        type="button"
                        class="action-btn delete-btn"
                        data-action="delete"
                        data-id="${escapeHTML(
                            article.id
                        )}"
                        title="Delete"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </td>
        `;


        tableBody.appendChild(row);
    });


    const totalArticles =
        document.getElementById(
            "totalArticles"
        );


    const totalCategories =
        document.getElementById(
            "totalCategories"
        );


    const adminArticles =
        document.getElementById(
            "adminArticles"
        );


    if (totalArticles) {

        totalArticles.textContent =
            articles.length;
    }


    if (totalCategories) {

        totalCategories.textContent =
            categories.size;
    }


    if (adminArticles) {

        adminArticles.textContent =
            adminCount;
    }


    updateAdminEmptyState(
        articles.length
    );


    setupAdminSearch();
    setupAdminActions();
}

function setupAdminActions() {

    const tableBody =
        document.getElementById(
            "articlesTableBody"
        );


    if (!tableBody) {
        return;
    }


    if (
        tableBody.dataset.actionsReady ===
        "true"
    ) {
        return;
    }


    tableBody.dataset.actionsReady =
        "true";


    tableBody.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "button[data-action]"
                );


            if (!button) {
                return;
            }


            const action =
                button.dataset.action;


            const id =
                button.dataset.id;


            if (!id) {
                return;
            }


            if (action === "view") {

                viewArticle(id);

            } else if (action === "edit") {

                editArticle(id);

            } else if (action === "delete") {

                confirmDeleteArticle(id);
            }
        }
    );
}

function viewArticle(id) {

    const article =
        findArticleById(id);


    if (!article) {

        alert(
            "Article not found."
        );

        return;
    }


    window.location.href =
        "article.html?id=" +
        encodeURIComponent(
            article.id
        );
}
function editArticle(id) {

    const article =
        findArticleById(id);


    if (!article) {

        alert(
            "Article not found."
        );

        return;
    }


    localStorage.setItem(
        EDIT_KEY,
        String(article.id)
    );


    window.location.href =
        "add-article.html?edit=" +
        encodeURIComponent(
            article.id
        );
}

function confirmDeleteArticle(id) {

    const article =
        findArticleById(id);


    if (!article) {

        alert(
            "Article not found."
        );

        return;
    }


    const confirmed =
        confirm(
            `Delete "${article.title}"?`
        );


    if (!confirmed) {
        return;
    }


    if (
        deleteArticle(
            article.id
        )
    ) {

        alert(
            "Article deleted successfully!"
        );
    }
}

function updateAdminEmptyState(count) {

    const emptyState =
        document.getElementById(
            "emptyState"
        );


    if (!emptyState) {
        return;
    }


    emptyState.style.display =
        count === 0
            ? "block"
            : "none";
}

function setupAdminSearch() {

    const input =
        document.getElementById(
            "articleSearch"
        );


    const tableBody =
        document.getElementById(
            "articlesTableBody"
        );


    if (
        !input ||
        !tableBody
    ) {
        return;
    }


    if (
        input.dataset.adminSearchReady ===
        "true"
    ) {
        return;
    }


    input.dataset.adminSearchReady =
        "true";


    input.addEventListener(
        "input",
        function () {

            const keyword =
                this.value
                    .toLowerCase()
                    .trim();


            const rows =
                tableBody.querySelectorAll(
                    "tr"
                );


            let visibleRows = 0;


            rows.forEach(row => {

                const text =
                    row.textContent
                        .toLowerCase();


                const visible =
                    text.includes(
                        keyword
                    );


                row.style.display =
                    visible
                        ? ""
                        : "none";


                if (visible) {
                    visibleRows++;
                }
            });


            const emptyState =
                document.getElementById(
                    "emptyState"
                );


            if (emptyState) {

                emptyState.style.display =
                    visibleRows === 0
                        ? "block"
                        : "none";
            }
        }
    );
}
function setupArticleForm() {

    const form =
        document.getElementById(
            "articleForm"
        );


    if (!form) {
        return;
    }


    if (
        form.dataset.articleFormReady ===
        "true"
    ) {
        return;
    }


    form.dataset.articleFormReady =
        "true";


    const params =
        new URLSearchParams(
            window.location.search
        );


    let editId =
        params.get("edit");


    if (editId) {

        editId =
            String(editId).trim();

        localStorage.setItem(
            EDIT_KEY,
            editId
        );

    } else {

        editId =
            localStorage.getItem(
                EDIT_KEY
            );

        if (editId) {
            editId =
                String(editId).trim();
        }
    }


    const title =
        form.querySelector(
            "[name='title']"
        );


    const category =
        form.querySelector(
            "[name='category']"
        );


    const date =
        form.querySelector(
            "[name='date']"
        );


    const image =
        form.querySelector(
            "[name='image']"
        );


    const description =
        form.querySelector(
            "[name='description']"
        );


    const content =
        form.querySelector(
            "[name='content']"
        );


    if (editId) {

        const article =
            findArticleById(editId);


        if (!article) {

            alert(
                "Article not found."
            );


            localStorage.removeItem(
                EDIT_KEY
            );


            window.location.href =
                "admin-dashboard.html";


            return;
        }


        loadEditArticle(
            form,
            article
        );
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (
                !title ||
                !category ||
                !description ||
                !content
            ) {

                alert(
                    "Form fields are missing."
                );

                return;
            }


            const articleData = {

                title:
                    title.value.trim(),

                category:
                    category.value.trim(),

                date:
                    date
                        ? date.value
                        : "",

                image:
                    image
                        ? image.value.trim()
                        : "image/blog1.jpg",

                description:
                    description.value.trim(),

                content:
                    content.value.trim()
            };


            if (
                !articleData.title ||
                !articleData.category ||
                !articleData.description ||
                !articleData.content
            ) {

                alert(
                    "Please fill all required fields."
                );

                return;
            }


            if (editId) {

                const success =
                    updateArticle(
                        editId,
                        articleData
                    );


                if (success) {

                    localStorage.removeItem(
                        EDIT_KEY
                    );


                    alert(
                        "Article updated successfully!"
                    );


                    window.location.href =
                        "admin-dashboard.html";

                } else {

                    alert(
                        "Article update failed."
                    );
                }


                return;
            }


            const success =
                addArticle(
                    articleData
                );


            if (success) {

                localStorage.removeItem(
                    EDIT_KEY
                );


                alert(
                    "Article added successfully!"
                );


                form.reset();


                window.location.href =
                    "admin-dashboard.html";

            } else {

                alert(
                    "Article could not be added."
                );
            }
        }
    );
}
function loadEditArticle(
    form,
    article
) {

    if (!article) {
        return;
    }


    const fields = {

        title:
            article.title,

        category:
            article.category,

        date:
            article.date,

        image:
            article.image,

        description:
            article.description,

        content:
            article.content
    };


    Object.keys(fields).forEach(
        name => {

            let field =
                form.querySelector(
                    `[name="${name}"]`
                );


            if (!field) {

                field =
                    document.getElementById(
                        name
                    );
            }


            if (!field) {
                return;
            }


            if (
                name === "date" &&
                field.type === "date"
            ) {

                field.value =
                    formatDateForInput(
                        fields[name]
                    );

            } else {

                field.value =
                    fields[name] || "";
            }
        }
    );


    const pageTitle =
        document.getElementById(
            "formTitle"
        );


    if (pageTitle) {

        pageTitle.textContent =
            "Edit Article";
    }


    const submitButton =
        form.querySelector(
            "button[type='submit']"
        );


    if (submitButton) {

        submitButton.textContent =
            "Update Article";
    }
}

function setupAdminLogin() {

    const form =
        document.getElementById(
            "adminLoginForm"
        );


    if (!form) {
        return;
    }


    if (
        form.dataset.loginReady ===
        "true"
    ) {
        return;
    }


    form.dataset.loginReady =
        "true";


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const username =
                form.querySelector(
                    "[name='username']"
                );


            const password =
                form.querySelector(
                    "[name='password']"
                );


            if (
                !username ||
                !password
            ) {

                return;
            }


            if (
                username.value.trim() ===
                    "admin" &&
                password.value ===
                    "admin123"
            ) {

                setAdminLogin(true);


                window.location.href =
                    "admin-dashboard.html";

            } else {

                alert(
                    "Invalid username or password."
                );
            }
        }
    );
}

document.addEventListener(
    "DOMContentLoaded",
    function () {
        getArticles();
        setupDarkMode();
        setupArticleForm();
        setupAdminLogin();
        displayHomeArticles();
        displayCategoriesPage();
        displayCategoryArticles();
        setupSearch();
        setupLoadMore();
        setupNewsletter();
        loadArticlePage();

        renderAdminDashboard();

    }
);