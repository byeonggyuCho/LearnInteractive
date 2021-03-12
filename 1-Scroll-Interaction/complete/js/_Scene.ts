class Scene {

	data: any
	initFunction: ( scene: Scene)=>void


    constructor(private scene: Scene){

		if(scene.data){
			this.data = scene.data;
			this.initFunction = scene.initFunction;
		}
    }


	/**
	 * 씬을 준비한다.
	 */
	init(){
		
		this.initFunction?.(this.scene)
	}


	/**
	 * 구간별 모션을 정의한다.
	 * @param args 
	 */
	addMotion(fn:()=>Scene){

	}


	/**
	 * 모션을 삭제한다.
	 */
	removeMotion(){
		
	}

    

    /**
     * @description 비율에 맞는 값을 반환한다.
     * @param values 
     */
    private calcValues(values) {

		const [from,to ,option] = values

		// 현재 씬에서 스크롤된 수치
		const currentYOffset = window.pageYOffset - this.container.pageYOffset;
		let rv;
		// 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
		const scrollHeight = this.scene.scrollHeight;
		const scrollRatio = currentYOffset / scrollHeight;

		if (option) {
			const {start, end} = option
			// start ~ end 사이에 애니메이션 실행
			const partScrollStart = start * scrollHeight;
			const partScrollEnd =  end * scrollHeight;
			const partScrollHeight = partScrollEnd - partScrollStart;

			if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
				rv = (currentYOffset - partScrollStart) / partScrollHeight * (to -from) + from;
			} else if (currentYOffset < partScrollStart) {
				rv = from
			} else if (currentYOffset > partScrollEnd) {
				rv = to
			}
		} else {
			rv = scrollRatio * (to - from) +from;
		}

		return rv;
	}

}