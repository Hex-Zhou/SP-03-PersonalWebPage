import { Component, HostListener, inject, OnInit } from '@angular/core'
import anime from 'animejs'
import { NgwWowService } from 'ngx-wow'
import SwiperCore, {
    Autoplay,
    EffectCards,
    EffectCube,
    EffectFade,
    EffectFlip,
    FreeMode,
    Mousewheel,
    Pagination,
    Scrollbar,
    SwiperOptions,
} from 'swiper'
SwiperCore.use([
    Autoplay,
    Scrollbar,
    Pagination,
    EffectFlip,
    EffectFade,
    EffectCards,
    EffectCube,
    Mousewheel,
    FreeMode,
])
@Component({
    selector: 'app-home-footer',
    templateUrl: './home-footer.component.html',
    styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent implements OnInit {
    mousePercent = '100%'
    @HostListener('click', ['$event']) onMouseMove(evt: MouseEvent) {
        const allWidth = document.body.offsetWidth
        this.mousePercent = ((evt.x / allWidth) * 100).toFixed(2) + '%'
    }
    @HostListener('mouseleave', ['$event']) onMouseLeave() {
        this.mousePercent = '離開'
    }
    imgList: string[] = [
        'keen-slider',
        'ngx-spin',
        'ligbox',
        'footer_aosjs',
        'footer_bootstrap',
        'AnimeJS',
        'footer_swiperjs',
        'footer_chart',
    ]
    configFooterSwiper: SwiperOptions = {
        autoplay: { delay: 1000, disableOnInteraction: false },
        mousewheel: true,
        loop: true,
        resizeObserver: true,
        breakpoints: {
            1800: { slidesPerView: 8 },
            1400: { slidesPerView: 6 },
            1000: { slidesPerView: 5 },
            700: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
        },
    }
    constructor() {
        inject(NgwWowService).init()
    }

    ngOnInit(): void {}
}
