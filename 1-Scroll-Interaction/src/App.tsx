import React, { useEffect } from "react";
import "./styles/default.css";
import "./styles/main.css";
import main from "./js/main";
import img from "./assets/video/001/IMG_6726.JPG";

function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./assets/video/001", false, /\.(png|jpe?g|svg|JPG)$/)
);
console.log(images);

function App() {
  useEffect(() => {
    // main();
  }, [main]);

  console.log(process.env);

  return (
    <img
      // src={`${process.env.PUBLIC_URL}/assets/video/001/IMG_6727.JPG`}
      src={"/static/media/IMG_6726.c47350c6.JPG"}
      alt=""
    />
  );

  return (
    <>
      <div className="loading">
        <svg className="loading-circle">
          <circle cx="50%" cy="50%" r="25"></circle>
        </svg>
      </div>
      <div className="container">
        <nav className="global-nav">
          <div className="global-nav-links">
            <a href="#" className="global-nav-item">
              Rooms
            </a>
            <a href="#" className="global-nav-item">
              Ideas
            </a>
            <a href="#" className="global-nav-item">
              Stores
            </a>
            <a href="#" className="global-nav-item">
              Contact
            </a>
          </div>
        </nav>
        <nav className="local-nav">
          <div className="local-nav-links">
            <a href="#" className="product-name">
              AirMug Pro
            </a>
            <a href="#">개요</a>
            <a href="#">제품사양</a>
            <a href="#">구입하기</a>
          </div>
        </nav>
        <section className="scroll-section" id="scroll-section-0">
          <h1>AirMug Pro</h1>
          <div className="sticky-elem sticky-elem-canvas">
            <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
          </div>
          <div className="sticky-elem main-message a">
            <p>
              온전히 빠져들게 하는
              <br />
              최고급 세라믹
            </p>
          </div>
          <div className="sticky-elem main-message b">
            <p>
              주변 맛을 느끼게 해주는
              <br />
              주변 맛 허용 모드
            </p>
          </div>
          <div className="sticky-elem main-message c">
            <p>
              온종일 편안한
              <br />
              맞춤형 손잡이
            </p>
          </div>
          <div className="sticky-elem main-message d">
            <p>
              새롭게 입가를
              <br />
              찾아온 매혹
            </p>
          </div>
        </section>
        <section className="scroll-section" id="scroll-section-1">
          <p className="description">
            <strong>보통 스크롤 영역</strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est
            ipsa minima, eligendi error cum vel dolorum pariatur officia facilis
            ipsam voluptatibus ad quasi porro quod quisquam quidem tempora
            accusantium accusamus, quaerat aliquam velit exercitationem
            incidunt? Id vitae quisquam saepe quasi accusantium tempore enim!
            Aperiam dolorum a vero repellat dolor, inventore ab odit totam
            molestias expedita? Enim quia dolor maiores veniam ea! Quam illo,
            est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit
            dolorem odit sequi autem blanditiis, ullam commodi quibusdam.
            Accusamus repellat aperiam quis neque laudantium, dignissimos hic
            nisi magnam praesentium enim beatae sint architecto cum numquam
            inventore rerum animi sed nostrum quae delectus, voluptas molestiae
            placeat aliquid! Vel quaerat error officiis magnam dolorum iste
            aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at
            cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere
            hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis
            cumque esse! Omnis fugiat sint error laborum eveniet labore nam
            ducimus quisquam in repudiandae impedit excepturi dignissimos
            tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam?
            Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia
            illo qui placeat temporibus inventore obcaecati. Recusandae, sequi
            dignissimos in natus eum maiores dolorem, deleniti nobis
            accusantium, aspernatur beatae.
          </p>
        </section>
        <section className="scroll-section" id="scroll-section-2">
          <div className="sticky-elem sticky-elem-canvas">
            <canvas id="video-canvas-1" width="1920" height="1080"></canvas>
          </div>
          <div className="sticky-elem main-message a">
            <p>
              <small>편안한 촉감</small>
              입과 하나 되다
            </p>
          </div>
          <div className="sticky-elem desc-message b">
            <p>
              편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
              하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
              AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
              오롯이 당신과 음료만 남게 되죠.
            </p>
            <div className="pin"></div>
          </div>
          <div className="sticky-elem desc-message c">
            <p>
              디자인 앤 퀄리티 오브 스웨덴,
              <br />
              메이드 인 차이나
            </p>
            <div className="pin"></div>
          </div>
        </section>
        <section className="scroll-section" id="scroll-section-3">
          <p className="mid-message">
            <strong>Retina 머그</strong>
            <br />
            아이디어를 광활하게 펼칠
            <br />
            아름답고 부드러운 음료 공간.
          </p>
          <canvas
            className="image-blend-canvas"
            width="1920"
            height="1080"
          ></canvas>
          <p className="canvas-caption">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
            fuga quae perspiciatis veniam impedit et, ratione est optio porro.
            Incidunt aperiam nemo voluptas odit quisquam harum in mollitia.
            Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum
            inventore a rerum distinctio vero illo magni possimus temporibus
            dolores neque adipisci, repudiandae repellat. Ducimus accusamus
            similique quas earum laborum. Autem tempora repellendus asperiores
            illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente
            rerum neque error deleniti quis, et, quibusdam, est autem voluptate
            rem voluptas. Ratione soluta similique harum nihil vel. Quas
            inventore perferendis iusto explicabo animi eos ratione obcaecati.
          </p>

          {/* index2 추가 코드(공부 편의상 z-index를 인라인으로 넣었습니다) */}
          <div className="sticky-elem main-message a" style={{ zIndex: 100 }}>
            <p>index2에 추가된 텍스트</p>
          </div>
        </section>
        <footer className="footer">2020, 1분코딩</footer>
      </div>
    </>
  );
}

export default App;
