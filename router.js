document.addEventListener("DOMContentLoaded", function () {
    const routes = {
        AboutMe: document.getElementById("AboutMe"),
        DevLog: document.getElementById("DevLog"),
        BanishingYou: document.getElementById("BanishingYou"),
        Impressum: document.getElementById("Impressum")        
    };

    function hideAllSections() {
        Object.values(routes).forEach(section => {
            section.style.display = 'none';
        });
    }

    function showSection(route) {
        hideAllSections();
        if (routes[route]) {
            routes[route].style.display = 'block';
        } else {
            routes.home.style.display = 'block';
        }
    }

    function handleHashChange() {
        const hash = window.location.hash.replace('#', '');
        showSection(hash);
    }

    window.addEventListener('hashchange', handleHashChange);

    if (!window.location.hash) {
        window.location.hash = '#AboutMe';
    } else {
        handleHashChange();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = document.querySelectorAll('.blog');
    const blogList = document.getElementById('blog-list');

    blogPosts.forEach(post => post.style.display = 'none');

    blogPosts.forEach(post => {

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        
        link.href = `#${post.id}`;
        
        link.textContent = post.id;
        
        link.addEventListener('click', function (e) {
            e.preventDefault();
            blogPosts.forEach(p => p.style.display = 'none');
            document.getElementById(post.id).style.display = 'block';
        });
        
        listItem.appendChild(link);        
        blogList.appendChild(listItem);
    });
});
