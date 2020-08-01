
const app = new Vue({
  el: "#app",
  data() {
    return {
      loaded: false,
      currentActiveSlide: 0,
      slides: [
        {
          headline: "당신의 마음에 간직한 최고의 순간",
          img: src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1267C10B4C2B6B5A76",
          color: null
        },
        {
          headline: "기억속에 사라지는 슬픔",
          img: src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F13623E3F5006A4860E",
          color: null
        },
        {
          headline: "영원까지 기억되도록",
          img: src="https://file.mk.co.kr/meet/neds/2020/02/image_readtop_2020_211111_15828892984105604.jpg",
          color: null
        }
      ]
    };
  },
  computed: {
    nextActiveSlide() {
      return this.currentActiveSlide + 1 >= this.slides.length
        ? 0
        : this.currentActiveSlide + 1;
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
    this.slides.forEach(slide => {
      Vibrant.from(slide.img)
        .getPalette()
        .then(val => {
          slide.color = val.Vibrant.hex;
        });
    });
    this.$el.style.setProperty(
      "--accent",
      this.slides[this.currentActiveSlide].color
    );
  },
  updated() {
    this.$el.style.setProperty(
      "--accent",
      this.slides[this.currentActiveSlide].color
    );
    this.$refs.aside.$el.style.setProperty(
      "--accent",
      this.slides[this.nextActiveSlide].color
    );
  },
  methods: {
    incrementSlide(val) {
      if (val > 0 && this.currentActiveSlide + val < this.slides.length) {
        this.currentActiveSlide += val;
      } else if (val > 0) {
        this.currentActiveSlide = 0;
      } else if (val < 0 && this.currentActiveSlide + val < 0) {
        this.currentActiveSlide = this.slides.length - 1;
      } else {
        this.currentActiveSlide += val;
      }
    }
  }
});