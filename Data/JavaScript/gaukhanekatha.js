        (function() {
            // DOM elements
            const pagesContainer = document.getElementById('pages-container');
            const nextBtn = document.getElementById('nextBtn');
            const saveBtn = document.getElementById('saveBtn');

            // State
            let questionsData = [];
            let currentQuestion = null;

            // Path to JSON file (hidden from user)
            const JSON_PATH ="https://bhupendrawasti.com.np/Data/Gaukhanekatha/data.json";

            // Load questions from local JSON file
            async function loadQuestions() {
                try {
                    pagesContainer.innerHTML = '<div class="loading">प्रश्न लोड हुँदैछ...</div>';
                    
                    // Try to fetch from local file
                    const response = await fetch(JSON_PATH);
                    
                    if (!response.ok) {
                        throw new Error('Failed to load');
                    }
                    
                    const data = await response.json();
                    
                    if (Array.isArray(data) && data.length > 0) {
                        questionsData = data;
                        showRandomQuestion();
                        
                        // Enable buttons
                        nextBtn.disabled = false;
                        saveBtn.disabled = false;
                    } else {
                        throw new Error('Invalid data');
                    }
                } catch (error) {
                    console.error('Error loading JSON:', error);
                    
                    // Show user-friendly error message (no file path shown)
                    pagesContainer.innerHTML = `
                        <div class="error-message">
                            <div style="font-size: 3rem; margin-bottom: 20px;">😕</div>
                            <div style="font-size: 1.5rem; margin-bottom: 15px;">प्रश्न लोड हुन सकेन</div>
                            <div style="font-size: 1.2rem; margin-bottom: 25px;">कृपया पुन प्रयास गर्नुहोस्</div>
                            <div style="font-size: 1.2rem; margin-bottom: 25px;">Please check your internet connection ❗❗❗</div>
                            <button class="retry-btn" onclick="location.reload()">
                                <i class="fa fa-refresh"></i> पुन प्रयास
                            </button>
                        </div>
                    `;
                    
                    // Keep buttons disabled
                    nextBtn.disabled = true;
                    saveBtn.disabled = true;
                }
            }

            // Get random question
            function getRandomQuestion() {
                if (!questionsData || questionsData.length === 0) return null;
                const randomIndex = Math.floor(Math.random() * questionsData.length);
                return questionsData[randomIndex];
            }

            // Display question
            function displayQuestion(q) {
                if (!q) return;
                
                currentQuestion = q;
                pagesContainer.innerHTML = `
                    <div class="page" id="currentQuestionPage">
                        <h2 class="heading-secondary">प्रश्न</h2>
                        <div class="question">${q.question}</div>
                        <details class="answer">
                            <summary>👁️ उत्तर</summary>
                            <h3>${q.answer}</h3>
                        </details>
                    </div>
                `;
            }

            // Show random question
            function showRandomQuestion() {
                const q = getRandomQuestion();
                if (q) {
                    displayQuestion(q);
                } else {
                    // If no questions available, show error
                    pagesContainer.innerHTML = `
                        <div class="error-message">
                            <div style="font-size: 3rem; margin-bottom: 20px;">😕</div>
                            <div style="font-size: 1.5rem; margin-bottom: 15px;">प्रश्न लोड हुन सकेन</div>
                            <div style="font-size: 1.2rem; margin-bottom: 25px;">कृपया पुन प्रयास गर्नुहोस्</div>
                            <button class="retry-btn" onclick="location.reload()">
                                <i class="fa fa-refresh"></i> पुन प्रयास
                            </button>
                        </div>
                    `;
                }
            }

            // Save as image
            function saveQuestionAsImage() {
                const mainHeading = document.querySelector('.heading-primary');
                const currentPage = document.getElementById('currentQuestionPage');
                
                if (!mainHeading || !currentPage || !currentQuestion) {
                    alert('कृपया पर्खनुहोस्, प्रश्न लोड भएको छैन।');
                    return;
                }

                // Clone elements
                const headingClone = mainHeading.cloneNode(true);
                const pageClone = currentPage.cloneNode(true);
                
                // Create container
                const container = document.createElement('div');
                container.style.backgroundColor = 'rgb(255, 234, 255)';
                container.style.padding = '20px 15px 15px 15px';
                container.style.borderRadius = '12px';
                container.style.maxWidth = '800px';
                container.style.margin = '0 auto';
                container.style.fontFamily = 'system-ui, sans-serif';
                container.style.position = 'absolute';
                container.style.left = '0';
                container.style.top = '0';
                container.style.zIndex = '10000';
                container.style.opacity = '1';
                container.style.pointerEvents = 'none';

                // Add attribution
                const attribution = document.createElement('div');
                attribution.className = 'download-attribution';
                attribution.textContent = 'Downloaded from: bhupendrawasti.com.np';
                attribution.style.fontSize = '12px';
                attribution.style.color = '#333';
                attribution.style.paddingTop = '12px';
                attribution.style.textAlign = 'center';
                attribution.style.opacity = '0.8';
                
                container.appendChild(headingClone);
                container.appendChild(pageClone);
                container.appendChild(attribution);

                document.body.appendChild(container);

                // Use html2canvas
                html2canvas(container, {
                    scale: 2,
                    backgroundColor: '#ffebff',
                    logging: false,
                    allowTaint: true,
                    useCORS: true
                }).then((canvas) => {
                    const link = document.createElement('a');
                    link.download = `gau_katha_${Date.now()}.jpg`;
                    link.href = canvas.toDataURL('image/jpeg', 0.95);
                    link.click();
                    document.body.removeChild(container);
                }).catch((err) => {
                    alert('तस्वीर बनाउन समस्या भयो।');
                    console.error(err);
                    document.body.removeChild(container);
                });
            }

            // Initialize
            function init() {
                loadQuestions();

                // Add event listeners
                if (nextBtn) {
                    nextBtn.addEventListener('click', showRandomQuestion);
                }

                if (saveBtn) {
                    saveBtn.addEventListener('click', saveQuestionAsImage);
                }
            }

            // Start when DOM is ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }


        })();
