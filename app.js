// OSINT Framework [RU] — Логика приложения

class OSINTTree {
    constructor(data, container) {
        this.data = data;
        this.container = container;
        this.toolsGrid = document.getElementById('toolsGrid');
        this.categoryTitle = document.getElementById('categoryTitle');
        this.categoryDescription = document.getElementById('categoryDescription');
        this.searchInput = document.getElementById('searchInput');

        this.init();
    }

    init() {
        this.renderTree(this.data.children, this.container);
        this.bindSearch();
        this.bindLogoClick();
        this.bindMobileMenu();
        this.updateStats();
    }

    renderTree(items, parent, level = 0) {
        const ul = document.createElement('ul');
        ul.className = 'tree-list';

        items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'tree-item';

            if (item.children) {
                // Папка
                const folder = document.createElement('div');
                folder.className = 'tree-folder';
                folder.innerHTML = `
                    <span class="tree-folder-icon">▶</span>
                    <span class="tree-folder-name">${item.nameRu || item.name}</span>
                    <span class="tree-folder-count">${this.countTools(item)}</span>
                `;

                folder.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleFolder(folder, item);
                });

                li.appendChild(folder);

                const childContainer = document.createElement('div');
                childContainer.className = 'tree-children';
                this.renderTree(item.children, childContainer, level + 1);
                li.appendChild(childContainer);
            } else if (item.url) {
                // Ссылка
                const link = document.createElement('a');
                link.className = 'tree-link';
                link.href = item.url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';

                const badges = this.getBadges(item.name);
                link.innerHTML = `
                    <span class="tree-link-icon">🔗</span>
                    <span>${item.name}</span>
                    ${badges}
                `;

                li.appendChild(link);
            }

            ul.appendChild(li);
        });

        parent.appendChild(ul);
    }

    toggleFolder(folder, item) {
        const childContainer = folder.nextElementSibling;
        const isExpanded = folder.classList.contains('expanded');

        // Убираем активный класс с других папок
        document.querySelectorAll('.tree-folder.active').forEach(f => {
            if (f !== folder) f.classList.remove('active');
        });

        folder.classList.toggle('expanded');
        folder.classList.toggle('active');
        childContainer.classList.toggle('visible');

        // Показываем инструменты в основной области
        if (!isExpanded) {
            this.showTools(item);
        }
    }

    showTools(category) {
        this.categoryTitle.textContent = category.nameRu || category.name;
        this.categoryDescription.textContent = category.descRu || 'Выберите инструмент для перехода';

        const tools = this.getAllTools(category);

        if (tools.length === 0) {
            this.toolsGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📂</div>
                    <h3>Выберите подкатегорию</h3>
                    <p>В этом разделе есть подкатегории — раскройте их в меню слева</p>
                </div>
            `;
            return;
        }

        this.toolsGrid.innerHTML = tools.map(tool => this.createToolCard(tool)).join('');

        // Обновляем статистику для текущей категории
        this.updateStats(category);
    }

    getAllTools(item) {
        let tools = [];

        if (item.url) {
            tools.push(item);
        }

        if (item.children) {
            item.children.forEach(child => {
                tools = tools.concat(this.getAllTools(child));
            });
        }

        return tools;
    }

    createToolCard(tool) {
        const badges = this.getBadgesHTML(tool.name);
        const cleanName = this.cleanToolName(tool.name);
        const domain = this.extractDomain(tool.url);

        return `
            <article class="tool-card">
                <div class="tool-card-header">
                    <h3 class="tool-card-title">${cleanName}</h3>
                    <div class="tool-card-badges">${badges}</div>
                </div>
                <p class="tool-card-description">${tool.descRu || 'OSINT инструмент'}</p>
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-card-url">
                    <span class="tool-card-url-icon">🌐</span>
                    <span>${domain}</span>
                </a>
            </article>
        `;
    }

    cleanToolName(name) {
        return name.replace(/\s*\([TDRM]\)\s*/g, '').trim();
    }

    extractDomain(url) {
        try {
            const u = new URL(url);
            return u.hostname + (u.pathname !== '/' ? u.pathname.slice(0, 30) + '...' : '');
        } catch {
            return url.slice(0, 40);
        }
    }

    getBadges(name) {
        let html = '';
        if (name.includes('(T)')) html += '<span class="badge badge-tool" title="Локальный инструмент">T</span>';
        if (name.includes('(D)')) html += '<span class="badge badge-dork" title="Google Dork">D</span>';
        if (name.includes('(R)')) html += '<span class="badge badge-reg" title="Требуется регистрация">R</span>';
        if (name.includes('(M)')) html += '<span class="badge badge-manual" title="Ручное редактирование URL">M</span>';
        return html;
    }

    getBadgesHTML(name) {
        return this.getBadges(name);
    }

    countTools(item) {
        let count = 0;
        if (item.url) count = 1;
        if (item.children) {
            item.children.forEach(child => {
                count += this.countTools(child);
            });
        }
        return count;
    }

    bindLogoClick() {
        const logo = document.getElementById('homeLink');
        if (logo) {
            logo.addEventListener('click', () => {
                this.showWelcome();
                // Снимаем выделение c папок
                document.querySelectorAll('.tree-folder.active').forEach(f => f.classList.remove('active'));
                // Очищаем поиск
                this.searchInput.value = '';
                if (this.closeMobileMenu) this.closeMobileMenu();
            });
        }
    }

    bindMobileMenu() {
        const toggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');

        const closeMenu = () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (toggle) {
            toggle.addEventListener('click', () => {
                sidebar.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }

        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        this.closeMobileMenu = closeMenu;
    }

    bindSearch() {
        let debounceTimer;

        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                this.search(e.target.value.toLowerCase());
            }, 200);
        });

        // Горячая клавиша Ctrl+K / Cmd+K
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.searchInput.focus();
            }
        });
    }

    search(query) {
        if (!query) {
            this.showWelcome();
            // Сбросить выделение в дереве
            document.querySelectorAll('.tree-folder.active').forEach(f => f.classList.remove('active'));
            return;
        }

        const allTools = this.getAllTools(this.data);
        const results = allTools.filter(tool => {
            const name = tool.name.toLowerCase();
            const desc = (tool.descRu || '').toLowerCase();
            return name.includes(query) || desc.includes(query);
        });

        this.categoryTitle.textContent = `Результаты поиска`;
        this.categoryDescription.textContent = `Найдено ${results.length} инструментов по запросу "${query}"`;

        if (results.length === 0) {
            this.toolsGrid.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h3>Ничего не найдено</h3>
                    <p>Попробуйте изменить поисковый запрос</p>
                </div>
            `;
            return;
        }

        this.toolsGrid.innerHTML = results.map(tool => this.createToolCard(tool)).join('');
    }

    showWelcome() {
        this.categoryTitle.textContent = 'Добро пожаловать';
        this.categoryDescription.textContent = 'Выберите категорию в дереве слева для просмотра инструментов';

        this.toolsGrid.innerHTML = `
            <div class="welcome-card">
                <div class="welcome-icon">🌐</div>
                <h3>OSINT Framework на русском</h3>
                <p>Это русскоязычная версия популярного OSINT Framework — интерактивной карты инструментов для разведки на основе открытых источников.</p>
                <div class="notes-content-embedded">
                     <div class="notes-header-embedded">
                        <span class="notes-icon">📝</span>
                        <h3>Заметки автора</h3>
                    </div>
                    <p><strong>OSINT Framework</strong> ориентирован на сбор информации из <strong>бесплатных</strong> инструментов и ресурсов. Цель — помочь людям найти бесплатные OSINT-ресурсы. Некоторые из включённых сайтов могут потребовать регистрации или предоставлять дополнительные данные за деньги, но вы должны иметь возможность получить хотя бы часть информации бесплатно.</p>
                    <p>Изначально эта структура была создана с точки зрения <strong>информационной безопасности</strong>. С тех пор отклик со стороны других областей и дисциплин был невероятным. Мы рады включать любые другие OSINT-ресурсы, особенно из областей за пределами infosec.</p>
                    <div class="notes-footer-embedded">
                        <span>Оригинал: <a href="https://osintframework.com/" target="_blank" rel="noopener">osintframework.com</a></span> • 
                        <span>Автор: <a href="https://twitter.com/jnordine" target="_blank" rel="noopener">@jnordine</a></span> • 
                        <span>GitHub: <a href="https://github.com/lockfale/osint-framework" target="_blank" rel="noopener">lockfale/osint-framework</a></span>
                    </div>
                    <p class="welcome-hint" style="text-align: center; margin-top: 16px; color: var(--accent-primary);">👈 Начните с выбора категории в боковом меню</p>
                </div>
            </div>
        `;

        // Обновляем статистику (показываем общее количество)
        this.updateStats(this.data);
    }

    updateStats(node = null) {
        // Если узел не передан, используем весь датасет (для главной страницы)
        const target = node || this.data;
        const isRoot = target === this.data;

        let toolsCount = 0;
        let categoriesCount = 0;

        const traverse = (item) => {
            // Если это конечный инструмент (имеет url) или тип 'tool'
            if ((item.type === 'tool') || (item.url && !item.children)) {
                toolsCount++;
            }

            // Считаем подкатегории
            if (item.children && item.children.length > 0) {
                // Если мы внутри рекурсии, и элемент не является тем, с которого мы начали
                // (чтобы не считать саму текущую категорию за 1)
                if (item !== target) {
                    categoriesCount++;
                }
                item.children.forEach(traverse);
            }
        };

        // Запускаем обход
        if (isRoot) {
            target.children.forEach(traverse);
        } else {
            traverse(target);
        }

        // Обновляем UI
        const toolsEl = document.getElementById('totalTools');
        const catsEl = document.getElementById('totalCategories');
        const catLabel = catsEl.nextElementSibling; // .stat-label

        // Анимируем значения
        this.animateValue(toolsEl, parseInt(toolsEl.textContent) || 0, toolsCount, 500);
        this.animateValue(catsEl, parseInt(catsEl.textContent) || 0, categoriesCount, 500);

        // Обновляем подписи и видимость
        if (isRoot) {
            catLabel.textContent = 'категорий';
            catsEl.parentElement.style.display = 'block';
        } else {
            catLabel.textContent = 'подкатегорий';
            // Скрываем счетчик подкатегорий, если их нет
            catsEl.parentElement.style.display = categoriesCount > 0 ? 'block' : 'none';
        }
    }

    animateValue(obj, start, end, duration) {
        if (!obj) return;
        if (start === end) {
            obj.textContent = end;
            return;
        }
        const range = end - start;
        const startTime = new Date().getTime();

        // Очищаем предыдущий таймер если есть (можно добавить свойство элементу)
        if (obj.timer) clearInterval(obj.timer);

        obj.timer = setInterval(() => {
            const current = new Date().getTime();
            const remaining = Math.max((startTime + duration) - current, 0);
            const value = Math.round(end - (remaining / duration) * range);
            obj.textContent = value;
            if (remaining === 0) {
                clearInterval(obj.timer);
            }
        }, 20);
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('treeContainer');
    new OSINTTree(osintData, container);
});
