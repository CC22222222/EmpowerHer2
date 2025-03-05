// Sample job data
const jobs = [
    {
        title: 'Product Manager',
        company: 'Tech Solutions Inc.',
        location: 'New York',
        salary: '$80,000 - $120,000/year',
        tags: ['Product Management', 'Project Management', 'Remote Option']
    },
    {
        title: 'Senior Software Engineer',
        company: 'Innovation Software',
        location: 'San Francisco',
        salary: '$100,000 - $150,000/year',
        tags: ['Backend Development', 'Python', 'Flexible Hours']
    },
    {
        title: 'Marketing Director',
        company: 'Global Brands Co.',
        location: 'London',
        salary: '$90,000 - $130,000/year',
        tags: ['Marketing Strategy', 'Team Leadership', 'Hybrid Work']
    }
];

// 添加登入狀態檢查
let isLoggedIn = false; // 預設為未登入狀態

// 修改渲染職位函數
function renderJobs(searchResults = jobs) {
    const jobsContainer = document.querySelector('.job-cards');
    
    // 如果未登入，只顯示前5個結果
    const displayJobs = isLoggedIn ? searchResults : searchResults.slice(0, 5);
    
    // 添加 guest 類別用於樣式控制
    if (!isLoggedIn) {
        jobsContainer.classList.add('guest');
    }

    jobsContainer.innerHTML = displayJobs.map(job => `
        <div class="job-card">
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <p class="location">${job.location}</p>
            <p class="salary">${job.salary}</p>
            <div class="tags">
                ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// 處理搜尋功能
function handleSearch() {
    // 獲取搜尋條件
    const employmentType = document.querySelector('select[name="employment-type"]').value;
    const workLocation = document.querySelector('select[name="work-location"]').value;
    const category = document.querySelector('select[name="category"]').value;
    const keywords = document.querySelector('.search-input-wrapper input').value;

    // 這裡可以添加實際的搜尋邏輯
    // 目前僅為示例
    let searchResults = jobs.filter(job => {
        if (employmentType && !job.type.includes(employmentType)) return false;
        if (workLocation && !job.location.includes(workLocation)) return false;
        if (category && !job.category.includes(category)) return false;
        if (keywords && !job.title.toLowerCase().includes(keywords.toLowerCase())) return false;
        return true;
    });

    renderJobs(searchResults);

    // 如果未登入且結果超過5個，顯示提示訊息
    if (!isLoggedIn && searchResults.length > 5) {
        const notice = document.createElement('div');
        notice.className = 'search-results-notice';
        notice.innerHTML = `
            <p>Showing 5 of ${searchResults.length} results. 
            <a href="#signup" class="signup-link">Sign up</a> to see all opportunities!</p>
        `;
        document.querySelector('.job-cards').before(notice);
    }
}

// 頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector(/* 您的选择器 */);
    if (element) {  // 添加检查
        element.addEventListener('click', function() {
            // 您的事件处理代码
        });
    }
});

// 移除舊的 jobs 數組和相關函數
const jobs = null;

// 定義工作數據
const jobsData = {
    page1: [
        {
            title: "Senior Marketing Manager",
            company: "ABC Company Limited",
            companyDescription: "ABC Company Limited is a leading digital transformation company in Asia Pacific, specializing in innovative marketing solutions and digital strategies. With over 15 years of experience, we have helped numerous Fortune 500 companies achieve their digital marketing goals. Our diverse team of 200+ professionals works in a collaborative environment that encourages creativity and professional growth.",
            location: "Central, Hong Kong",
            salary: "HK$30,000 - $40,000/month",
            type: "Full Time",
            experience: "5+ years experience",
            description: "We are seeking an experienced Senior Marketing Manager to lead our marketing initiatives in the Asia Pacific region. You will be responsible for developing and implementing comprehensive marketing strategies, managing a team of marketing professionals, and driving brand growth across multiple channels. The role involves close collaboration with various departments and stakeholders to ensure alignment of marketing objectives with overall business goals.",
            requirements: [
                "Bachelor's degree in Marketing, Business Administration, or related field",
                "5+ years of marketing experience with at least 2 years in a management role",
                "Proven track record of successful marketing campaigns in the APAC region",
                "Strong knowledge of digital marketing platforms and analytics tools",
                "Excellent project management and team leadership skills",
                "Fluent in English and Cantonese; Mandarin is a plus"
            ],
            benefits: [
                "Competitive salary package with performance bonuses",
                "Annual leave of 18 days with birthday leave",
                "Comprehensive medical insurance coverage",
                "Professional development and training opportunities",
                "Regular team building activities",
                "Flexible working arrangements available"
            ],
            tags: ["Marketing & PR", "Full Time", "Work in Office", "Management"],
            posted: "2 days ago",
            logo: "company-logo1.png"
        },
        {
            title: "UX/UI Designer",
            company: "Tech Solutions Ltd",
            companyDescription: "Tech Solutions Ltd is an award-winning technology company focused on creating user-centric digital products. Founded in 2010, we have grown to become one of Hong Kong's most respected tech companies, with a portfolio of successful products used by millions of users worldwide. Our modern office in Wan Chai houses a dynamic team of designers and developers who are passionate about creating exceptional user experiences.",
            location: "Wan Chai, Hong Kong",
            salary: "HK$25,000 - $35,000/month",
            type: "Full Time",
            experience: "3+ years experience",
            description: "Join our growing design team to create exceptional user experiences for our digital products. As a UX/UI Designer, you will be responsible for the entire design process, from user research and wireframing to creating high-fidelity prototypes. You will work closely with product managers and developers to ensure the successful implementation of your designs.",
            requirements: [
                "Bachelor's degree in Design, Human-Computer Interaction, or related field",
                "3+ years of experience in UX/UI design for digital products",
                "Proficient in design tools such as Figma, Sketch, and Adobe Creative Suite",
                "Strong portfolio demonstrating user-centered design process",
                "Experience with user research and usability testing",
                "Knowledge of HTML/CSS is a plus"
            ],
            benefits: [
                "Five-day work week with flexible hours",
                "Medical and dental coverage",
                "Annual design conference allowance",
                "Latest design tools and equipment provided",
                "Regular design workshops and sharing sessions",
                "Casual dress code and modern office environment"
            ],
            tags: ["Technology & IT", "Full Time", "Work in Office", "Design"],
            posted: "1 day ago",
            logo: "company-logo2.png"
        },
        {
            title: "Financial Analyst",
            company: "Global Finance Group",
            companyDescription: "Global Finance Group is a well-established financial services firm with a 20-year track record in investment banking and asset management. We manage over HK$50 billion in assets and serve both institutional and retail clients across Asia. Our team of financial experts provides comprehensive financial solutions while maintaining the highest standards of professional integrity.",
            location: "Tsim Sha Tsui, Hong Kong",
            salary: "HK$28,000 - $38,000/month",
            type: "Full Time",
            experience: "2-4 years experience",
            description: "We are looking for a detail-oriented Financial Analyst to join our corporate finance team. You will be responsible for analyzing financial data, preparing reports, and providing insights to support business decision-making. The role involves working with various stakeholders to evaluate financial performance and identify areas for improvement.",
            requirements: [
                "Bachelor's degree in Finance, Accounting, or related field",
                "2-4 years of experience in financial analysis",
                "Strong proficiency in Excel and financial modeling",
                "Knowledge of financial markets and investment principles",
                "CFA Level 1 certification is preferred",
                "Excellent analytical and problem-solving skills"
            ],
            benefits: [
                "Performance-based bonuses",
                "Comprehensive medical insurance",
                "Professional qualification sponsorship",
                "Regular training and development programs",
                "MPF contribution above statutory requirement",
                "Annual leave starting at 14 days"
            ],
            tags: ["Banking & Finance", "Full Time", "Work in Office", "Analysis"],
            posted: "3 days ago",
            logo: "company-logo3.png"
        },
        {
            title: "Content Writer",
            company: "Digital Media Hub",
            companyDescription: "Digital Media Hub is a fast-growing content creation agency that specializes in digital storytelling and content marketing. Since our establishment in 2018, we have worked with clients across various industries, from startups to multinational corporations. We pride ourselves on our creative approach to content creation and our ability to deliver engaging, SEO-optimized content that drives results.",
            location: "Remote",
            salary: "HK$20,000 - $25,000/month",
            type: "Part Time",
            experience: "1+ years experience",
            description: "We are seeking a creative Content Writer to join our digital media team. You will be responsible for creating engaging and SEO-optimized content for various platforms, including websites, blogs, and social media. This role offers flexible working hours and the opportunity to work with diverse clients across different industries.",
            requirements: [
                "Bachelor's degree in Journalism, Communications, or related field",
                "1+ years of content writing experience",
                "Strong English writing and editing skills",
                "Knowledge of SEO best practices",
                "Experience with content management systems",
                "Ability to meet deadlines and work independently"
            ],
            benefits: [
                "Flexible working hours",
                "Work from home arrangement",
                "Project completion bonuses",
                "Professional writing tools provided",
                "Regular feedback and mentoring",
                "Opportunities for full-time conversion"
            ],
            tags: ["Marketing & PR", "Part Time", "Work from Home", "Content"],
            posted: "5 days ago",
            logo: "company-logo4.png"
        },
        {
            title: "Data Analyst",
            company: "Data Insights Co.",
            companyDescription: "Data Insights Co. is a data analytics consultancy that helps businesses make data-driven decisions. We combine advanced analytics with industry expertise to deliver actionable insights to our clients. Our team of experienced data scientists and analysts works with cutting-edge tools and technologies to transform complex data into clear, actionable recommendations.",
            location: "Quarry Bay, Hong Kong",
            salary: "HK$25,000 - $35,000/month",
            type: "Full Time",
            experience: "2+ years experience",
            description: "Join our data analytics team to help transform complex data into actionable insights. You will work on diverse projects, analyzing data sets, creating visualizations, and preparing reports for stakeholders. This role offers opportunities to work with cutting-edge analytics tools and contribute to data-driven decision making.",
            requirements: [
                "Bachelor's degree in Statistics, Mathematics, Computer Science or related field",
                "2+ years experience in data analysis",
                "Proficient in SQL, Python, and data visualization tools",
                "Experience with business intelligence platforms",
                "Strong analytical and problem-solving skills",
                "Excellent communication skills in English"
            ],
            benefits: [
                "Annual performance bonus",
                "Medical insurance coverage",
                "Data analysis certification support",
                "Regular training workshops",
                "Flexible working hours",
                "Modern office with standing desks"
            ],
            tags: ["Technology & IT", "Full Time", "Work in Office", "Data Analysis"],
            posted: "6 days ago",
            logo: "company-logo5.png"
        }
    ],
    page2: [
        {
            title: "HR Manager",
            company: "Global HR Solutions",
            location: "Central, Hong Kong",
            salary: "HK$35,000 - $45,000/month",
            type: "Full Time",
            experience: "5+ years experience",
            description: "We are looking for an experienced HR Manager to oversee our human resources operations. You will be responsible for talent acquisition, employee relations, performance management, and HR policy development. The role involves working closely with department heads to support organizational growth and employee development.",
            requirements: [
                "Bachelor's degree in Human Resources, Business Administration or related field",
                "5+ years HR experience with management responsibilities",
                "Strong knowledge of Hong Kong employment laws and regulations",
                "Experience with HRIS and recruitment platforms",
                "Excellent interpersonal and conflict resolution skills",
                "Professional HR certification preferred"
            ],
            benefits: [
                "Competitive salary package",
                "Performance bonuses",
                "Comprehensive medical coverage",
                "Professional development allowance",
                "20 days annual leave",
                "Birthday leave and wellness programs"
            ],
            tags: ["Human Resources", "Full Time", "Work in Office", "Management"],
            posted: "1 day ago",
            logo: "company-logo6.png"
        },
        {
            title: "Part-time Accountant",
            company: "Finance Pro Ltd",
            location: "Mong Kok, Hong Kong",
            salary: "HK$250 - $300/hour",
            type: "Part Time",
            experience: "3+ years experience",
            description: "We are seeking a qualified Part-time Accountant to handle accounting operations for our clients. You will be responsible for bookkeeping, financial reporting, tax preparation, and maintaining accounting records. This role offers flexible working hours and the opportunity to work with diverse clients.",
            requirements: [
                "Bachelor's degree in Accounting or related field",
                "3+ years accounting experience",
                "Knowledge of Hong Kong accounting standards and tax regulations",
                "Proficient in accounting software",
                "HKICPA qualification preferred",
                "Strong attention to detail"
            ],
            benefits: [
                "Competitive hourly rate",
                "Flexible working schedule",
                "Transportation allowance",
                "Professional development support",
                "Performance incentives",
                "Opportunity for permanent position"
            ],
            tags: ["Banking & Finance", "Part Time", "Work in Office", "Accounting"],
            posted: "2 days ago",
            logo: "company-logo7.png"
        },
        {
            title: "Frontend Developer",
            company: "Web Tech Co",
            location: "Remote",
            salary: "HK$30,000 - $40,000/month",
            type: "Full Time",
            experience: "2+ years experience",
            description: "Join our development team to create modern, responsive web applications. You will be responsible for implementing user interface components, optimizing web performance, and collaborating with backend developers. This remote position offers the opportunity to work on innovative projects using the latest web technologies.",
            requirements: [
                "Bachelor's degree in Computer Science or related field",
                "2+ years frontend development experience",
                "Strong proficiency in HTML, CSS, JavaScript, and React",
                "Experience with responsive design and cross-browser compatibility",
                "Knowledge of version control systems (Git)",
                "Good understanding of web performance optimization"
            ],
            benefits: [
                "Competitive salary with annual reviews",
                "Remote work arrangement",
                "Equipment allowance",
                "Health insurance coverage",
                "Professional development budget",
                "Flexible working hours"
            ],
            tags: ["Technology & IT", "Full Time", "Work from Home", "Programming"],
            posted: "3 days ago",
            logo: "company-logo8.png"
        },
        {
            title: "Sales Manager",
            company: "Retail Solutions",
            location: "Causeway Bay, Hong Kong",
            salary: "HK$28,000 - $38,000/month",
            type: "Full Time",
            experience: "4+ years experience",
            description: "Lead sales team and develop strategies...",
            tags: ["Sales", "Full Time", "Work in Office", "Management"],
            posted: "4 days ago",
            logo: "company-logo9.png"
        },
        {
            title: "Online English Teacher",
            company: "Education First",
            location: "Remote",
            salary: "HK$200 - $300/hour",
            type: "Part Time",
            experience: "1+ years experience",
            description: "Teach English online to students...",
            tags: ["Education & Training", "Part Time", "Work from Home", "Teaching"],
            posted: "2 days ago",
            logo: "company-logo10.png"
        }
    ],
    page3: [
        {
            title: "Backend Developer",
            company: "Cloud Tech Ltd",
            location: "Cyberport, Hong Kong",
            salary: "HK$35,000 - $50,000/month",
            type: "Full Time",
            experience: "3+ years experience",
            description: "Develop and maintain server-side applications...",
            tags: ["Technology & IT", "Full Time", "Work in Office", "Programming"],
            posted: "1 day ago",
            logo: "company-logo11.png"
        },
        {
            title: "Marketing Specialist",
            company: "Brand Solutions",
            location: "Remote",
            salary: "HK$25,000 - $35,000/month",
            type: "Full Time",
            experience: "2+ years experience",
            description: "Plan and execute marketing campaigns...",
            tags: ["Marketing & PR", "Full Time", "Work from Home", "Digital Marketing"],
            posted: "2 days ago",
            logo: "company-logo12.png"
        },
        {
            title: "Part-time Admin Assistant",
            company: "Corporate Services",
            location: "Tsim Sha Tsui, Hong Kong",
            salary: "HK$120 - $150/hour",
            type: "Part Time",
            experience: "1+ years experience",
            description: "Provide administrative support to the team...",
            tags: ["Administration", "Part Time", "Work in Office", "Office Support"],
            posted: "3 days ago",
            logo: "company-logo13.png"
        },
        {
            title: "Legal Secretary",
            company: "Law Partners",
            location: "Central, Hong Kong",
            salary: "HK$23,000 - $28,000/month",
            type: "Full Time",
            experience: "2+ years experience",
            description: "Provide secretarial support to lawyers...",
            tags: ["Legal", "Full Time", "Work in Office", "Administration"],
            posted: "2 days ago",
            logo: "company-logo14.png"
        },
        {
            title: "Healthcare Assistant",
            company: "Medical Center",
            location: "Wan Chai, Hong Kong",
            salary: "HK$20,000 - $25,000/month",
            type: "Part Time",
            experience: "1+ years experience",
            description: "Assist in patient care and administrative duties...",
            tags: ["Healthcare", "Part Time", "Work in Office", "Medical"],
            posted: "4 days ago",
            logo: "company-logo15.png"
        }
    ]
};

let currentPage = 1;
const jobsPerPage = 5;

// 初始化活動過濾器集合
window.activeFilters = new Set();

// 添加過濾器標籤
function addFilterTag(value, type) {
    const filterKey = `${type}:${value}`;
    if (!activeFilters.has(filterKey)) {
        activeFilters.add(filterKey);
        
        // 創建新的過濾器標籤
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        
        // 根據類型設置顯示文本
        let displayText = '';
        switch(type) {
            case 'employment':
                displayText = value === 'full-time' ? 'Full Time' : 'Part Time';
                break;
            case 'location':
                displayText = value === 'remote' ? 'Work from Home' : 'Work in Office';
                break;
            case 'category':
                const checkbox = document.querySelector(`input[name="${type}"][value="${value}"]`);
                displayText = checkbox ? checkbox.parentElement.textContent.trim().split('(')[0].trim() : value;
                break;
        }

        tag.innerHTML = `${displayText} <span class="remove-filter" data-filter="${filterKey}">×</span>`;
        document.getElementById('activeFilters').appendChild(tag);
    }
}

// 移除過濾器標籤
function removeFilterTag(filterKey) {
    activeFilters.delete(filterKey);
    const tag = document.querySelector(`.filter-tag .remove-filter[data-filter="${filterKey}"]`)?.parentElement;
    if (tag) {
        tag.remove();
    }

    // 更新checkbox狀態
    const [type, value] = filterKey.split(':');
    const checkbox = document.querySelector(`input[type="checkbox"][name="${type}"][value="${value}"]`);
    if (checkbox) {
        checkbox.checked = false;
    }

    // 重新過濾結果
    filterJobs();
}

// 計算並更新左側欄目的數字
function updateFilterCounts() {
    // 獲取所有工作
    let allJobs = [];
    for (let page in jobsData) {
        allJobs = allJobs.concat(jobsData[page]);
    }

    // 計算每個類型的工作數量
    const counts = {
        employment: {
            'full-time': 0,
            'part-time': 0
        },
        location: {
            'office': 0,
            'remote': 0
        },
        category: {
            'technology': 0,
            'finance': 0,
            'marketing': 0,
            'hr': 0,
            'sales': 0,
            'education': 0,
            'healthcare': 0,
            'design': 0,
            'legal': 0,
            'admin': 0
        }
    };

    // 統計數量
    allJobs.forEach(job => {
        // 統計工作類型
        if (job.type === 'Full Time') counts.employment['full-time']++;
        if (job.type === 'Part Time') counts.employment['part-time']++;

        // 統計工作地點
        if (job.tags.includes('Work in Office')) counts.location['office']++;
        if (job.tags.includes('Work from Home')) counts.location['remote']++;

        // 統計工作類別
        job.tags.forEach(tag => {
            if (tag === 'Technology & IT') counts.category['technology']++;
            if (tag === 'Banking & Finance') counts.category['finance']++;
            if (tag === 'Marketing & PR') counts.category['marketing']++;
            if (tag === 'Human Resources') counts.category['hr']++;
            if (tag === 'Sales') counts.category['sales']++;
            if (tag === 'Education & Training') counts.category['education']++;
            if (tag === 'Healthcare') counts.category['healthcare']++;
            if (tag === 'Design & Creative') counts.category['design']++;
            if (tag === 'Legal') counts.category['legal']++;
            if (tag === 'Administration') counts.category['admin']++;
        });
    });

    // 更新 UI
    for (let type in counts) {
        for (let value in counts[type]) {
            const checkbox = document.querySelector(`input[name="${type}"][value="${value}"]`);
            if (checkbox) {
                const countSpan = checkbox.parentElement.querySelector('.count');
                if (countSpan) {
                    countSpan.textContent = `(${counts[type][value]})`;
                }
            }
        }
    }
}

// 計算總工作數量
function getTotalJobsCount() {
    let totalJobs = 0;
    for (let page in jobsData) {
        totalJobs += jobsData[page].length;
    }
    return totalJobs;
}

// 更新結果數量顯示
function updateResultsCount(count) {
    document.querySelector('.results-header h2').textContent = 
        `Found ${count} Jobs`;
}

// 修改過濾工作函數
function filterJobs() {
    let allJobs = [];
    for (let page in jobsData) {
        allJobs = allJobs.concat(jobsData[page]);
    }

    if (activeFilters.size > 0) {
        allJobs = allJobs.filter(job => {
            return Array.from(activeFilters).every(filter => {
                const [type, value] = filter.split(':');
                switch(type) {
                    case 'employment':
                        const employmentType = value === 'full-time' ? 'Full Time' : 'Part Time';
                        return job.type === employmentType;
                    case 'location':
                        const locationTag = value === 'remote' ? 'Work from Home' : 'Work in Office';
                        return job.tags.includes(locationTag);
                    case 'category':
                        const categoryMap = {
                            'technology': 'Technology & IT',
                            'finance': 'Banking & Finance',
                            'marketing': 'Marketing & PR',
                            'hr': 'Human Resources',
                            'sales': 'Sales',
                            'education': 'Education & Training',
                            'healthcare': 'Healthcare',
                            'design': 'Design & Creative',
                            'legal': 'Legal',
                            'admin': 'Administration'
                        };
                        return job.tags.includes(categoryMap[value]);
                    default:
                        return true;
                }
            });
        });
    }

    // 更新結果顯示
    updateResultsCount(allJobs.length);

    // 更新工作列表
    updateJobsList(allJobs.slice(0, 5));
    
    // 更新分頁
    const totalPages = Math.ceil(allJobs.length / 5);
    updatePaginationUI(1);

    // 保存過濾後的結果
    window.filteredJobs = allJobs;
}

// 為checkbox添加事件監聽器
document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            addFilterTag(this.value, this.name);
        } else {
            removeFilterTag(`${this.name}:${this.value}`);
        }
        filterJobs();
    });
});

// 為過濾器標籤的移除按鈕添加事件監聽
document.getElementById('activeFilters').addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-filter')) {
        const filterKey = e.target.dataset.filter;
        removeFilterTag(filterKey);
    }
});

// 更新工作列表顯示
function updateJobsList(jobs) {
    const jobsContainer = document.querySelector('.job-cards');
    jobsContainer.style.opacity = '0';
    
    setTimeout(() => {
        jobsContainer.innerHTML = jobs.map(job => `
            <div class="job-card" data-expanded="false">
                <div class="job-card-header">
                    <div class="company-logo">
                        <img src="${job.logo}" alt="${job.company} Logo">
                    </div>
                    <div class="job-info">
                        <h3 class="job-title">${job.title}</h3>
                        <div class="company-name">${job.company}</div>
                        <div class="job-location">${job.location}</div>
                    </div>
                    <button class="save-job">Save</button>
                </div>
                <div class="job-details">
                    <div class="salary-range">${job.salary}</div>
                    <div class="employment-type">${job.type}</div>
                    <div class="experience">${job.experience}</div>
                </div>
                <div class="job-preview">
                    ${job.description.substring(0, 150)}...
                </div>
                <div class="job-full-description" style="display: none;">
                    <div class="company-section">
                        <h4>About the Company</h4>
                        <p>${job.companyDescription}</p>
                    </div>
                    <h4>Full Job Description</h4>
                    <div class="description-content">
                        ${job.description}
                    </div>
                    <div class="job-requirements">
                        <h4>Requirements</h4>
                        <ul>
                            ${job.requirements ? job.requirements.map(req => `<li>${req}</li>`).join('') : ''}
                        </ul>
                    </div>
                    <div class="job-benefits">
                        <h4>Benefits</h4>
                        <ul>
                            ${job.benefits ? job.benefits.map(benefit => `<li>${benefit}</li>`).join('') : ''}
                        </ul>
                    </div>
                </div>
                <div class="job-tags">
                    ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="job-footer">
                    <span class="posted-date">Posted ${job.posted}</span>
                    <div class="action-buttons">
                        <button class="expand-btn">View Details</button>
                        <a href="#" class="apply-now">Apply Now</a>
                    </div>
                </div>
            </div>
        `).join('');

        // 添加展開/收起功能
        document.querySelectorAll('.job-card').forEach(card => {
            const expandBtn = card.querySelector('.expand-btn');
            const fullDescription = card.querySelector('.job-full-description');
            const preview = card.querySelector('.job-preview');

            expandBtn.addEventListener('click', () => {
                const isExpanded = card.dataset.expanded === 'true';
                card.dataset.expanded = !isExpanded;
                
                if (!isExpanded) {
                    preview.style.display = 'none';
                    fullDescription.style.display = 'block';
                    expandBtn.textContent = 'Show Less';
                    card.classList.add('expanded');
                } else {
                    preview.style.display = 'block';
                    fullDescription.style.display = 'none';
                    expandBtn.textContent = 'View Details';
                    card.classList.remove('expanded');
                }
            });
        });
        
        jobsContainer.style.opacity = '1';
    }, 300);
}

// 更新頁面內容
function updatePageContent(pageNumber) {
    console.log('Updating to page:', pageNumber);
    const pageData = jobsData[`page${pageNumber}`];
    
    if (!pageData) {
        console.error(`No data found for page ${pageNumber}`);
        return;
    }

    // 更新工作列表
    updateJobsList(pageData);
    
    // 更新分頁UI
    updatePaginationUI(pageNumber);
    
    // 更新當前頁碼
    currentPage = pageNumber;

    // 如果沒有活動的過濾器，顯示總工作數量
    if (activeFilters.size === 0) {
        updateResultsCount(getTotalJobsCount());
    }
    
    // 滾動到頁面頂部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 更新分頁UI
function updatePaginationUI(currentPage) {
    const totalPages = Object.keys(jobsData).length;
    const pageNumbers = document.querySelector('.page-numbers');
    
    // 清除現有的事件監聽器
    const oldButtons = pageNumbers.querySelectorAll('.page-btn');
    oldButtons.forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });
    
    let html = '';
    
    // 生成分頁按鈕
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}">${i}</button>`;
        }
    } else {
        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++) {
                html += `<button class="page-btn ${i === currentPage ? 'active' : ''}">${i}</button>`;
            }
            html += '<span class="page-dots">...</span>';
            html += `<button class="page-btn">${totalPages}</button>`;
        } else if (currentPage >= totalPages - 3) {
            html += '<button class="page-btn">1</button>';
            html += '<span class="page-dots">...</span>';
            for (let i = totalPages - 4; i <= totalPages; i++) {
                html += `<button class="page-btn ${i === currentPage ? 'active' : ''}">${i}</button>`;
            }
        } else {
            html += '<button class="page-btn">1</button>';
            html += '<span class="page-dots">...</span>';
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                html += `<button class="page-btn ${i === currentPage ? 'active' : ''}">${i}</button>`;
            }
            html += '<span class="page-dots">...</span>';
            html += `<button class="page-btn">${totalPages}</button>`;
        }
    }
    
    pageNumbers.innerHTML = html;
    
    // 更新上一頁/下一頁按鈕狀態
    document.querySelector('.prev').disabled = currentPage === 1;
    document.querySelector('.next').disabled = currentPage === totalPages;
    
    // 重新綁定事件
    bindPaginationEvents();
}

// 綁定分頁事件
function bindPaginationEvents() {
    // 頁碼按鈕事件
    document.querySelectorAll('.page-numbers .page-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pageNum = parseInt(this.textContent);
            if (pageNum !== currentPage) {
                updatePageContent(pageNum);
            }
        });
    });

    // 上一頁/下一頁按鈕事件
    document.querySelector('.prev').addEventListener('click', function() {
        if (!this.disabled && currentPage > 1) {
            updatePageContent(currentPage - 1);
        }
    });

    document.querySelector('.next').addEventListener('click', function() {
        const totalPages = Object.keys(jobsData).length;
        if (!this.disabled && currentPage < totalPages) {
            updatePageContent(currentPage + 1);
        }
    });
}

// 初始化時更新數字
updateFilterCounts();

// 初始化頁面並顯示正確的總數
updateResultsCount(getTotalJobsCount());
updatePageContent(1);
}); 