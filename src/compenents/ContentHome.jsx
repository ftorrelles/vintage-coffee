import "../styles/home.css";
import "animate.css/animate.min.css";

const ContentHome = () => {
    return (
        <>
            <section className="home">
                <div className="overlay"></div>
                <div className="container_home">
                    <h1 className="title animate__animated animate__fadeInDown">
                        Caffe Crunch
                    </h1>
                    <p className="subtitle animate__animated animate__fadeInUp">
                        Porque lo nuestro es lo mejor... Galletas de Cafe
                        nacional
                    </p>
                    <a
                        href="#"
                        className="btn btn-primary animate__animated animate__bounceIn"
                    >
                        Haz tu pedido ahora
                    </a>
                </div>
            </section>
        </>
    );
};

export default ContentHome;
