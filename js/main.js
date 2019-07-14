//////////////////////////////////////////////
// HAMBURGER MENU
//////////////////////////////////////////////
const $menuBar = document.getElementById('menuBar');
const $mainNav = document.getElementById('mainNav');

$menuBar.addEventListener('click', function () {
    $mainNav.classList.toggle('active');
});

//////////////////////////////////////////////
/////////////////  SLIDER
//////////////////////////////////////////////
// constant
const $mainVisual = document.querySelector('.main-visual');

const $indList = document.querySelectorAll('#indicator span');
const $infoList = document.querySelectorAll('#slider .side');
const $imgList = document.querySelectorAll('.main-visual .contain .text-bg');

const $slidePrevBtn = document.getElementById('prevSliderBtn');
const $slideNextBtn = document.getElementById('nextSliderBtn');


function setupSlider($prevBtn, $nextBtn, listOfItemList, autoPlay) {
    let activeIndex = 0;

    function updateSlider() {
        if (activeIndex < 0) {
            activeIndex = listOfItemList[0].length - 1;
        }
        if (activeIndex >= listOfItemList[0].length) {
            activeIndex = 0;
        }
        for (const itemList of listOfItemList) {
            const $activeitem = itemList[activeIndex];
            for (const $item of itemList) {
                if ($activeitem === $item) {
                    $item.classList.add('active');
                } else {
                    $item.classList.remove('active');
                }
            }
        }
    }

    $prevBtn.addEventListener('click', (event) => {
        event.preventDefault();
        activeIndex--;
        updateSlider();
    });

    $nextBtn.addEventListener('click', (event) => {
        event.preventDefault();
        activeIndex++;
        updateSlider();
    });

}

setupSlider(
    $slidePrevBtn,
    $slideNextBtn,
    [$indList, $infoList, $imgList]
);

const researchBoxList = document.querySelectorAll('.research-1.pc');
const researchIndList = document.querySelectorAll('#indicator-ad span');

const $preResearchBtn = document.getElementById('preResearchBtn');
const $nxtResearchBtn = document.getElementById('nxtResearchBtn');

setupSlider(
    $preResearchBtn,
    $nxtResearchBtn,
    [researchBoxList, researchIndList]
);