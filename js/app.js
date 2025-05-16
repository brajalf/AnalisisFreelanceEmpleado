// FAQ interactivo
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });

        // Gráfico comparativo
        const ctx = document.getElementById('comparisonChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Ingresos', 'Flexibilidad', 'Estabilidad', 'Crecimiento', 'Autonomía', 'Beneficios'],
                datasets: [{
                    label: 'Empleado',
                    data: [65, 40, 85, 60, 45, 90],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.2)'
                },
                {
                    label: 'Freelance',
                    data: [90, 99, 60, 85, 99, 60],
                    borderColor: '#e67e22',
                    backgroundColor: 'rgba(230, 126, 34, 0.2)'
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Comparativa por Aspectos Clave'
                    }
                }
            }
        });

        // Efectos interactivos para pros/contras
        document.querySelectorAll('.pros-cons-list li').forEach(item => {
            item.addEventListener('click', () => {
                const isPro = item.classList.contains('pro');
                item.style.backgroundColor = isPro ? 'rgba(39, 174, 96, 0.1)' : 'rgba(231, 76, 60, 0.1)';
                
                setTimeout(() => {
                    item.style.backgroundColor = '#f8f9fa';
                }, 500);
            });
        });

        // Animación al desplazar
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        document.querySelectorAll('.card, .stat-item, .faq-item').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });