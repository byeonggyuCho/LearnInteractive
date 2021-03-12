import {SceneType} from './type'
import Scene from './type';

/**
 * 
 */
class ScrollAnimation {

    sceneCount: number;

    // pageYOffset
    yOffset:number;

    // 현재 보여지는 
    currentSecen: number;

    // scene의 누적 높이값.
    prevScrollHeight: number;


    constructor(private sceneInfo:Scene[] = []) {

        this.sceneInfo = sceneInfo;
    }

    /**
     * @description 장면을 추가
     */
    addScene(obj: Scene){

        this.sceneInfo.push({
            ...obj,
            id: `scene_${this.sceneCount++}`,
        })
    }



    /**
     * 현재 스크롤의 scene객체를 반환한다.
     */
    findCurrentScene(){
        this.yOffset = window.pageYOffset;
        let totalScrollHeight = 0;

        const scene =  this.sceneInfo.find(({container,scrollHeight},i)=>{

            totalScrollHeight += scrollHeight;

            if (totalScrollHeight >= this.yOffset) {
                this.currentSecen = i;
              return container
            }
        })

        return scene;
    }


    /**
     * 해당하는 scene을 디스플레이 한다.
     */
    private show(sceneId:string){

    }


    /**
     * @description 애니메이션을 플레이할 scene의 레이아웃 설정
     */
    setLayout(){

       this.sceneInfo = this.sceneInfo.map(({type,heightMultiple, container,...item }) => {
            let scrollHeight= type === "sticky" 
                                ? heightMultiple * window.innerHeight
                                :  container?.offsetHeight;
      
                                if(container){
                                    container.style.height = `${scrollHeight}px`;

                                }

            if(item.initFunction && container){
                item.initFunction(container);
            }
      
            return {
                ...item,
                type,
                heightMultiple,
                container,
                scrollHeight,
            };
          });
      
          const currentScene = this.findCurrentScene();

          if(currentScene){
              this.show(currentScene.id);
          }

      

    }

    /**
     * @description 
     * @param container 현재 스크롤에 위치한 컨테이너
     * @param scrollRatio 현재 컨테이너 내부의 스크롤 비율
     */
    playAnimation({containers,crollRatio}){



    }
}


const scrollAnimation = new ScrollAnimation();



const sceneA = new Scene({
        type: "sticky",
        heightMultiple: 5, 
        scrollHeight: 0,
        container: document.querySelector("#scroll-section-0")
})


// 스크롤이 0~0.22인 구간에서 opacity를 0에서 1로
sceneA.addMotion(({ container})=>{
    const messageA = container?.querySelector(".main-message.a")
    return ({
        playSection: [0,0.22],
        target: messageA,
        value: {opacity: [0,1], translateY:[30,0] },
        cbFunction:({target,value})=>{

            const {opacity,translateY} =value;
            target.style.opacity = opacity;
            target.style.transform = `translate3d(0, ${translateY}%, 0)`;
        },
        alternate:true // 반대방향 동작
        })
})


sceneA.addMotion(({ container})=>{
    const messageB = container?.querySelector(".main-message.b")
    return ({
        playSection: [0,0.42],
        target: messageB,
        value: {opacity: [0,1], translateY:[30,0] },
        cbFunction:({target,value})=>{

            const {opacity,translateY} =value;
            target.style.opacity = opacity;
            target.style.transform = `translate3d(0, ${translateY}%, 0)`;
        },
        alternate:true // 반대방향 동작
        })
})

sceneA.addMotion(({ container})=>{
    const messageC = container?.querySelector(".main-message.c")
    return ({
        playSection: [0,0.62],
        target: messageC,
        style:[
            {property: 'opacity',from:0,to:1},
            {   property: 'transform',
                from:[20, (value)=>`translate3d(0,${value},0)`],
                to:[0, (value)=>`translate3d(0,${value},0)`]
            },
        ],
        alternate:true // 반대방향 동작
        })
})

sceneA.addMotion(({ container})=>{
    const messageD = container?.querySelector(".main-message.d")
    return ({
        playSection: [0,0.82],
        target: messageD,
        style:[
            {property: 'opacity',from:0,to:1},
            {   property: 'transform',
                from:[20, (value)=>`translate3d(0,${value},0)`],
                to:[0, (value)=>`translate3d(0,${value},0)`]
            },
        ],
        alternate:true // 반대방향 동작
        })
})


const sceneC = new Scene({
    type: "sticky",
    heightMultiple: 5, 
    scrollHeight: 0,
    container: document.querySelector("#scroll-section-0"),
    data:{
        videoImages:[],
        videoImageCount:300
    }
    initFunction:({container,data})=>{

        // 이미지를 초기화한다.
        let imgElem;
        for (let i = 0; i < data.videoImageCount; i++) {
            imgElem = new Image();
            imgElem.src = `./assets/images/video/001/IMG_${6726 + i}.jpg`;
            data.videoImages.push(imgElem);
          }

    }
})


sceneC.addMotion(({ container})=>{
    const context = container?.querySelector("cavas")?.getContext()
    return ({
        playSection: [0,1],
        target: context,
        value: {
          sequence:[0,300]
        },
        cbFunction:({target,data,value})=>{
            let {sequence} = value

            target.drawImage(data.videoImages[sequence], 0, 0);
        },
        alternate:true // 반대방향 동작
        })
})


scrollAnimation.addScene(sceneA);
scrollAnimation.addScene(sceneC);

scrollAnimation.addScene({
    type: "sticky",
    heightMultiple: 5, 
    scrollHeight: 0,
    container: document.querySelector("#scroll-section-0"),
    animateFunction:(args: {container: HTMLElement,scrollRatio,currentYOffset})=>{

        const {container} =args;

        const cavas = container?.querySelector('canvas')
        const context = cavas?.getContext("2d");
        const messageA = container?.querySelector(".main-message.a")
        const messageB = container?.querySelector(".main-message.b")
        const messageC = container?.querySelector(".main-message.c")
        const messageD = container?.querySelector(".main-message.d")

        if(!context){
            return null;
        }


        let sequence = Math.round(
            calcValues(values.imageSeqeunce, currentYOffset)
          );
          context.drawImage(videoImages[sequence], 0, 0);
          canvas.style.opacity = calcValues(
            values.canvas_opacity,
            currentYOffset
          );
          if (scrollRatio <= 0.22) {
            // in
            messageA.style.opacity = calcValues(
              values.messageA_opacity_in,
              currentYOffset
            );
            messageA.style.transform = `translate3d(0, ${calcValues(
              values.messageA_translateY_in,
              currentYOffset
            )}%, 0)`;
          } else {
            // out
            messageA.style.opacity = calcValues(
              values.messageA_opacity_out,
              currentYOffset
            );
            messageA.style.transform = `translate3d(0, ${calcValues(
              values.messageA_translateY_out,
              currentYOffset
            )}%, 0)`;
          }
  
          if (scrollRatio <= 0.42) {
            // in
            messageB.style.opacity = calcValues(
              values.messageB_opacity_in,
              currentYOffset
            );
            messageB.style.transform = `translate3d(0, ${calcValues(
              values.messageB_translateY_in,
              currentYOffset
            )}%, 0)`;
          } else {
            // out
            messageB.style.opacity = calcValues(
              values.messageB_opacity_out,
              currentYOffset
            );
            messageB.style.transform = `translate3d(0, ${calcValues(
              values.messageB_translateY_out,
              currentYOffset
            )}%, 0)`;
          }
  
          if (scrollRatio <= 0.62) {
            // in
            messageC.style.opacity = calcValues(
              values.messageC_opacity_in,
              currentYOffset
            );
            messageC.style.transform = `translate3d(0, ${calcValues(
              values.messageC_translateY_in,
              currentYOffset
            )}%, 0)`;
          } else {
            // out
            messageC.style.opacity = calcValues(
              values.messageC_opacity_out,
              currentYOffset
            );
            messageC.style.transform = `translate3d(0, ${calcValues(
              values.messageC_translateY_out,
              currentYOffset
            )}%, 0)`;
          }
  
          if (scrollRatio <= 0.82) {
            // in
            messageD.style.opacity = calcValues(
              values.messageD_opacity_in,
              currentYOffset
            );
            messageD.style.transform = `translate3d(0, ${calcValues(
              values.messageD_translateY_in,
              currentYOffset
            )}%, 0)`;
          } else {
            // out
            messageD.style.opacity = calcValues(
              values.messageD_opacity_out,
              currentYOffset
            );
            messageD.style.transform = `translate3d(0, ${calcValues(
              values.messageD_translateY_out,
              currentYOffset
            )}%, 0)`;
          }

    },
    initFunction:(container: HTMLElement)=>{

        // 창사이즈에 맞춰서 맞춰준다.
        const canvas = container?.querySelector('canvas');

        const heightRatio = window.innerHeight / 100;
        if(canvas){
           canvas.style.transform = `translate3d(-50%,-50%,0) scale(${heightRatio})`;
        }
    }
})


scrollAnimation.addScene({
    type: "normal",
    scrollHeight: 0,
    container: document.querySelector("#scroll-section-1"),
    animateFunction:(container: HTMLElement)=>{

    },
    initFunction:(container: HTMLElement)=>{
      
    }
})

scrollAnimation.addScene({
    type: "normal",
    heightMultiple: 5,
    scrollHeight: 0,
    container: document.querySelector("#scroll-section-2"),
    animateFunction:(container: HTMLElement)=>{

    },
    initFunction:()=>{
          // 창사이즈에 맞춰서 맞춰준다.
          const canvas = container?.querySelector('canvas');

          const heightRatio = window.innerHeight / 100;
          if(canvas){
             canvas.style.transform = `translate3d(-50%,-50%,0) scale(${heightRatio})`;
          }
        
    }
})

scrollAnimation.addScene({
    type: "sticky",
    heightMultiple: 5,
    scrollHeight: 0,
    container: document.querySelector("#scroll-section-3"),
    animateFunction:(container: HTMLElement)=>{

    },
    initFunction:()=>{
    }
})