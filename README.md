# 인터렉션 클론 코딩

## 학습목표

1. 스트롤을 이용한 인터렉션을 학습해본다.
2. 상황에 맞는 올바른 css단위를 학습한다.

## 언제 vw를 쓰고 언제 rem을 쓸까?

이는 뷰포트 크기에 따라 사이즈 변화를 의도할 것인지에 따라 결정된다.  
웹 디자이너와의 상의가 필요하다.  
뷰포트와 상관없이 고정된 크기를 원하는지,  
뷰포트에 따라 크기가 변해야하는지

## em rem

margin요소는 em을 사용해서 현재 폰트 사이즈의 비율을 적용한다.

### em

현재 요소의 글자 크기를 기준으로 한다.

## 이벤트

```js
transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});

container.addEventListener("orientationchange", () => {
  console.log("orientationchange ended");
});
```

```js
window.location.reload();

scrollTo(0, 0);
```

## 프로퍼티

최적화

```css
.will-change {
  will-change: transform, opacity;
}
```

## TODO

1. lazyloading

## 배운것.

1. 리액트에서 folder에 있는 모든 이미지 임포트 하는 방법
2. 이미지 프리로딩

## 참고

[How to import all images from a folder in ReactJS](https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs/53762705)

[더미 생성기](http://hangul.thefron.me/)
