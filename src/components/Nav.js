import NavStyle from "./styles/Nav.styled";

export default function Nav({ footer }) {
  return (
    <NavStyle footer={footer}>
      <div>adamkeyes</div>
      <div>
        <img
          src="./images/icon-github.svg"
          alt="github"
          onMouseOver={(e) =>
            (e.currentTarget.src = "./images/icon-github-active.svg")
          }
          onMouseOut={(e) => (e.currentTarget.src = "./images/icon-github.svg")}
        />
        <img
          src="./images/icon-frontend-mentor.svg"
          alt="frontend-mentor"
          onMouseOver={(e) =>
            (e.currentTarget.src = "./images/icon-frontend-mentor-active.svg")
          }
          onMouseOut={(e) =>
            (e.currentTarget.src = "./images/icon-frontend-mentor.svg")
          }
        />
        <img
          src="./images/icon-linkedin.svg"
          alt="linkedin"
          onMouseOver={(e) =>
            (e.currentTarget.src = "./images/icon-linkedin-active.svg")
          }
          onMouseOut={(e) =>
            (e.currentTarget.src = "./images/icon-linkedin.svg")
          }
        />
        <img
          src="./images/icon-twitter.svg"
          alt="twitter"
          onMouseOver={(e) =>
            (e.currentTarget.src = "./images/icon-twitter-active.svg")
          }
          onMouseOut={(e) =>
            (e.currentTarget.src = "./images/icon-twitter.svg")
          }
        />
      </div>
    </NavStyle>
  );
}
