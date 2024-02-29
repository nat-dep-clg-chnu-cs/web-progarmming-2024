import Card from "../shared/Card";
import {Link} from "react-router-dom";


const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>Про цей додаток</h1>
                <p>Опитувальник</p>
                <p>Версія: 0.0.7</p>
                <Link to={'/'}>На домашню сторінку</Link>
                <Link to={'/app'}>До додатку</Link>
            </div>
        </Card>
    );
};

export default AboutPage;
