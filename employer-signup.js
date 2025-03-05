document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.signup-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    let currentStep = 1;

    // 更新進度條
    function updateProgress(step) {
        progressSteps.forEach((progressStep, index) => {
            if (index + 1 <= step) {
                progressStep.classList.add('active');
            } else {
                progressStep.classList.remove('active');
            }
        });
    }

    // 顯示指定步驟
    function showStep(step) {
        steps.forEach(s => s.classList.remove('active'));
        document.getElementById(`step${step}`).classList.add('active');
        updateProgress(step);
    }

    // 下一步按鈕事件
    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < 5) {
                currentStep++;
                showStep(currentStep);
                window.scrollTo(0, 0);
            }
        });
    });

    // 上一步按鈕事件
    document.querySelectorAll('.prev-step').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
                window.scrollTo(0, 0);
            }
        });
    });

    // 選擇訂閱計劃
    document.querySelectorAll('.select-plan').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.plan-card').forEach(card => {
                card.classList.remove('selected');
            });
            this.closest('.plan-card').classList.add('selected');
        });
    });

    // 初始化顯示第一步
    showStep(1);
}); 