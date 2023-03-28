import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,liveUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="buttons-project">
            <a href={liveUrl} target="_blank"><button>Live View</button></a>
            <a href=''><button>Project Code</button></a>
          </div>
        </div>
      </div>
    </Col>
  )
}

