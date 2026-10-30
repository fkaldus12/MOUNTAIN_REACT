// 버튼 클릭해서 이동하고 애니메이션 주기
export const link = () => {
    const buttons = document.querySelectorAll('.header_nav ul li a[href^="#"]');
    const handleClick = (event) => {
        event.preventDefault();

        const target = document.querySelector(event.currentTarget.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
    };

    buttons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    return () => {
        buttons.forEach((button) => {
            button.removeEventListener("click", handleClick);
        });
    };
};
