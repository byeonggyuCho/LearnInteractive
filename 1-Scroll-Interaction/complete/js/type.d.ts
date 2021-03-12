export type SceneType ={

    id:string;
    type: 'sticky' | 'normal';

    // 해당 scene의 높이
    scrollHeight: number;

    container: HTMLElement | null;
    // 브라우저 높이의 몇배로 scene의 높이를 설정할 것인지
    heightMultiple: number;
    animateFunction: (container:HTMLElement)=>void;

    initFunction?:(container:HTMLElement)=>void;

}